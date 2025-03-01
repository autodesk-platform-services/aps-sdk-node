import { IAuthClient, SdkManager, ApiResponse, ApsServiceRequestConfig, IAuthenticationProvider } from "@aps_sdk/autodesk-sdkmanager";
import { IFileTransferConfigurations } from './fileTransferConfigurations';
import { ObjectsApi } from "../api";
import { Completes3uploadBody, DownloadStatus, Signeds3downloadResponse, Signeds3uploadResponse } from "../model";
import { OssApiError, RequestArgs } from "../base";
import { createRequestFunctionOss } from "../common";
import { WriteStream, createWriteStream } from "fs";
import axios, { AxiosResponse } from "axios";
import { PassThrough, Stream } from "stream";

export interface IOSSFileTransfer {
}
class Constants {
  public static readonly MaxRetry: number = 5;
  public static readonly ChunkSize: number = 5 * 1024 * 1024;
  public static readonly BatchSize: number = 25;
}
export class OSSFileTransfer implements IOSSFileTransfer {

  public configuration: IFileTransferConfigurations;
  public objectApi: ObjectsApi;
  // public authentication: IAuthClient;

  private maxRetryOnTokenExpiry: number;
  private maxChunkCountAllowed: number;
  private maxRetryOnUrlExpiry: number;
  public sdkManager: SdkManager;
  private logger;

  private readonly accessTokenExpiredMessage: string = 'Access token provided is invalid or expired.';
  private readonly forbiddenMessage: string = '403 (Forbidden)';
  private authProvider:IAuthenticationProvider;

  constructor(
    configuration: IFileTransferConfigurations,
    sdkmanager: SdkManager,
    authenticationProvider: IAuthenticationProvider
  ) {

    this.sdkManager = sdkmanager;
    this.configuration = configuration;
    this.objectApi = new ObjectsApi(this.sdkManager);

    this.maxChunkCountAllowed = this.configuration.getMaxChunkCountAllowed();
    this.maxRetryOnUrlExpiry = this.configuration.getMaxRetryOnUrlExpiry();
    this.maxRetryOnTokenExpiry = this.configuration.getMaxRetryOnTokenExpiry();
    // this._authentication = authentication;
    this.logger = this.sdkManager.logger;

    if(authenticationProvider){
      this.authProvider = authenticationProvider;
    }
  }

  public async upload(bucketKey: string, objectKey: string, sourceToUpload: Buffer, accessToken: string, cancellationToken: AbortController,requestIdPrefix: string = '', onProgress?: (percentCompleted: number) => void): Promise<ApiResponse> {
    const requestId: any = await this.handleRequestId(requestIdPrefix, bucketKey, objectKey);
    const retryCount: number = this.configuration.getRetryCount();
    this.logger.logDebug(`${requestId} Config retry setting was: ${retryCount}`);

    await this.validateFileSize(requestId, sourceToUpload);

    onProgress?.(1);
    var numberOfChunks: number = this.calculateNumberOfChunks(sourceToUpload.length);
    var chunksUploaded: number = 0;
    var start: number = 0;
    var uploadUrls: string[] = [];
    var uploadKey: string = null;
    while (chunksUploaded < numberOfChunks) {
      this.throwIfCancellationRequested(cancellationToken, requestId);
      var attempts: number = 0;
      var end: number = Math.min(start + Constants.ChunkSize, sourceToUpload.length);
      var fileBuffer: Buffer = this.readFileBytes(sourceToUpload, start, end);
      var retryUrlExpiryCount: number = 0;
      while (true) {
        this.throwIfCancellationRequested(cancellationToken, requestId);
        attempts++;
        this.logger.logInfo(`${requestId} Uploading part ${chunksUploaded}, attempt ${attempts}`);

        if (uploadUrls.length == 0) {
          retryUrlExpiryCount++;
          var [uploadUrlsResponse, currentAccessToken] = await this.getUploadUrlsWithRetry(bucketKey, objectKey, numberOfChunks, chunksUploaded, uploadKey, accessToken, requestId);
          uploadKey = uploadUrlsResponse.uploadKey;
          uploadUrls = uploadUrlsResponse.urls;
          accessToken = currentAccessToken;
        }
        var currentUrl: string = uploadUrls.shift();
        try {
          this.throwIfCancellationRequested(cancellationToken, requestId);
          var responseBuffer = await this.uploadToURL(currentUrl, fileBuffer, accessToken, requestId);

          var statusCode: number = responseBuffer.status;

          if (statusCode === 403 && retryUrlExpiryCount === this.maxRetryOnUrlExpiry) {
            this.logger.logInfo(`${requestId} URL can not be refreshed.`);
            throw new OssApiError(`${statusCode} URL can not be refreshed`);
          }
          if (statusCode == 403) {
            this.logger.logInfo(`${requestId} 403, refreshing urls, attempt: ${retryUrlExpiryCount}`);
            uploadUrls = [];
            continue;
          }
          break;
        } catch (error) {
          this.logger.logError(error.message);
          if (attempts == Constants.MaxRetry) {
            this.logger.logError(`${requestId} Couldn't upload chunk after max retry of ${Constants.MaxRetry}`);
            throw new OssApiError(`${requestId} ${error.Message}`);
          }
        }
      }
      chunksUploaded++;
      start = end;
      var percentCompleted: number = (chunksUploaded / numberOfChunks) * 100;
      onProgress?.(percentCompleted);
      this.logger.logInfo(`${requestId} Number of chunks uploaded : ${chunksUploaded}`);
    }
    var completeResponse = await this.objectApi.completeSignedS3Upload(
      accessToken,
      bucketKey,
      objectKey,
      "application/json",
      {
        uploadKey: uploadKey
      } as Completes3uploadBody);
    onProgress?.(100);
    return completeResponse;
  }
  protected async uploadToURL(currentUrl: string, fileChunk: Buffer, accessToken: string, requestId: string, options?: ApsServiceRequestConfig): Promise<any> {
    const localVarHeaderParameter = {} as any;
    localVarHeaderParameter['x-ads-request-id'] = requestId;
    const localVarRequestOptions = { method: 'PUT', ...options };
    localVarRequestOptions.headers = { ...localVarHeaderParameter };
    localVarRequestOptions.data = fileChunk;
    const localVarAxiosArgs: RequestArgs = {
      url: currentUrl,
      options: localVarRequestOptions
    }
    const request: () => Promise<AxiosResponse> = createRequestFunctionOss(localVarAxiosArgs, this.sdkManager);
    const response = await request();
    return response;
  }
  public async download(bucketKey: string, objectKey: string, accessToken:string, filePath?:string, cancellationToken?: AbortController, requestIdPrefix?: string, onProgress?: (percentCompleted: number) => void): Promise<Stream|void> {

    const requestId: any = await this.handleRequestId(requestIdPrefix, bucketKey, objectKey);
    onProgress?.(1);
    const response: Signeds3downloadResponse = await this.getS3SignedDownloadUrlWithRetry(bucketKey, objectKey, accessToken, requestId);
    const fileSize = response.size;
    const numberOfChunks: number = this.calculateNumberOfChunks(fileSize);
    let partsDownloaded: number = 0;
    let start: number = 0;
    let outStream = new  PassThrough();
    outStream.setMaxListeners(numberOfChunks+1);
    let fileStream: WriteStream;
    if(filePath){
      fileStream= createWriteStream(filePath, { flags: 'a' }); 
    }
    try {
      while (partsDownloaded < numberOfChunks) {
        this.logger.logInfo(`${requestId} Downloading part: ${partsDownloaded}`);
        const end: number = Math.min((partsDownloaded + 1) * Constants.ChunkSize, fileSize);
        
        if (start == end) {
          break;
        }

        let attemptCount = 0;
        while (attemptCount < this.maxRetryOnUrlExpiry) {
          try {
            attemptCount++;
            this.logger.logInfo(`${requestId} Downloading file range: ${start}-${end}`);
            const partStream = await this.writeToFileStreamFromUrl(response.url, start, end, requestId);
            
            if(filePath){partStream.pipe(fileStream, { end: false });}
            else
            partStream.pipe(outStream, { end: false });    

            start = end + 1;
            partsDownloaded++;
            const percentCompleted = Math.floor((partsDownloaded / numberOfChunks) * 100);
            onProgress?.(percentCompleted);
            break;
          } catch (error) {
            this.logger.logError(`${requestId} Error downloading part: ${partsDownloaded}. Attempt ${attemptCount}/${this.maxRetryOnUrlExpiry}. Error: ${error}`);
          }
        }
      }
    } catch (error) {
      this.logger.logError(`${requestId} Error downloading file: ${error}`);
    } 
    if(!filePath){
      return outStream;
    }
  }
  private async isFileSizeAllowed(file: Buffer): Promise<boolean> {

    const fileSize: number = file.length;
    const numberOfChunks: number = this.calculateNumberOfChunks(fileSize);
    if (numberOfChunks > this.maxChunkCountAllowed) {
      return false;
    }
    return true;

  }
  private readFileBytes(file: Buffer, start: number, end: number): Buffer {
    const fileReader = file.subarray(start, end);
    return fileReader;
  }
  private async getUploadUrlsWithRetry(bucketKey: string, objectKey: string, numberOfChunks: number, chunksUploaded: number, uploadKey: string, accessToken: string, requestId: string): Promise<[Signeds3uploadResponse, string]> {

    var attemptcount: number = 0;
    var parts: number = (Math.min(numberOfChunks - chunksUploaded, Constants.BatchSize));
    var firstPart = chunksUploaded + 1;

    do {
      this.logger.logInfo(`${requestId} Refreshing URL attempt:${attemptcount}.`);
      try {

        var response = await this.objectApi.signedS3Upload(accessToken, bucketKey, objectKey, parts, firstPart, uploadKey);
        return ([response.content, accessToken]);

      } catch (e) {
        if (e.message.includes(this.accessTokenExpiredMessage)) {

          attemptcount++;

          //Yet to be implemented
          // accessToken = this.authentication.getUpdatedAccessToken();
          accessToken = await this.authProvider?.getAccessToken();
          this.logger.logInfo(`${requestId} Token expired. Trying to refresh`);
        }
        else {
          this.logger.logInfo(`${requestId} Error: ${e.message}`);
          throw e;
        }
      }
    } while (attemptcount < this.maxRetryOnTokenExpiry);
    throw new OssApiError(`${requestId} Error: Fail getting upload urls after maximum retry`);
  }
  private calculateNumberOfChunks(fileSize: number): number {
    if (fileSize == 0) {
      return 1;
    }
    var numberOfChunks: number = Math.trunc(fileSize / Constants.ChunkSize);

    if (fileSize % Constants.ChunkSize != 0) {

      numberOfChunks++;
    }
    return numberOfChunks;
  }
  private async validateFileSize(requestId: string, sourceToUpload: Buffer) {
    var sizeAllowed = await this.isFileSizeAllowed(sourceToUpload);
    if (!sizeAllowed) {
      throw new OssApiError(`${requestId} File size too big to upload. Currently max file size allowed is ${Number(this.maxChunkCountAllowed) * Number(Constants.ChunkSize)} bytes`);
    }
  }
  private async handleRequestId(parentRequestId: string, bucketKey: string, objectKey: string): Promise<string> {
    var requestId: string = parentRequestId && parentRequestId.trim() != "" ? parentRequestId : String(Math.random());
    requestId = requestId + ":" + this.GenerateSdkRequestId(bucketKey, objectKey);
    return requestId;
  }
  private GenerateSdkRequestId(bucketKey: string, objectKey: string): string {
    return encodeURIComponent(String(bucketKey + "/" + objectKey));
  }
  private async getS3SignedDownloadUrlWithRetry(bucketKey: string, objectKey: string, accessToken: string, requestId: string): Promise<Signeds3downloadResponse> {
    var attemptCount: number = 0;
    do {
      this.logger.logInfo(`${requestId} Get signed URL to download directly from S3 attempt: ${attemptCount}`);

      try {
        var objectStatusEnumString: string = DownloadStatus.Complete;
        var response = await this.objectApi.signedS3Download(accessToken, bucketKey, objectKey, requestId);
        if (response.content.status != objectStatusEnumString) {
          this.logger.logError(`${requestId} File not available for download yet.`);
          throw new OssApiError(`${requestId} File not available for download yet.`);
        }
        return response.content;
      } catch (error) {
        if (error.message.includes(this.accessTokenExpiredMessage)) {
          attemptCount++;

          //Yet to be implemented
          // accessToken = this.authentication.getUpdatedAccessToken();
          accessToken = await this.authProvider?.getAccessToken();

          this.logger.logInfo(`${requestId} Token expired. Trying to refresh`);
        }
        else {
          this.logger.logError(`${requestId} Error: ${error.message}`);
          throw error;
        }
      }

    } while (attemptCount < this.maxRetryOnTokenExpiry);

    throw new OssApiError(`${requestId} Error: Fail getting upload urls after maximum retry`);
  }
  private validateProjectScopeName(requestId: string, projectScope: string) {
    const scopeRegex: RegExp = /^([a-zA-Z0-9.\\-_]{3,50}(,?)){1,20}$/;
    if (!(projectScope === '' || scopeRegex.test(projectScope))) {
      throw new OssApiError(`${requestId} Parameter 'projectScope' doesn't pass regex test - user must submit a valid scope.`);
    }
  }
  private throwIfCancellationRequested(cancellationToken: AbortController, requestId: string) {
    if (cancellationToken.signal.aborted) {
      this.logger.logInfo("${requestId} Cancellation requested.");
      cancellationToken.signal.throwIfAborted();
    }
  }
  protected async writeToFileStreamFromUrl(Url: string, start: number, end: number, requestId: any, options?: ApsServiceRequestConfig):Promise<NodeJS.ReadableStream> {
    const localVarHeaderParameter = {} as any;
    const rangeHeaderValue = `bytes=${start}-${end}`;
    localVarHeaderParameter['x-ads-request-id'] = requestId;
    localVarHeaderParameter['Range'] = String(rangeHeaderValue);
    const localVarRequestOptions = { method: 'GET', ...options };
    localVarRequestOptions.headers = { ...localVarHeaderParameter };
    localVarRequestOptions.responseType = "stream";
    const localVarAxiosArgs: RequestArgs = {
      url: Url,
      options: localVarRequestOptions
    }
    const request: () => Promise<AxiosResponse> = createRequestFunctionOss(localVarAxiosArgs, this.sdkManager);
    const response = await request();
    this.logger.logInfo(`${requestId} Successfully downloaded file range: ${start} - ${end}`);    
    return response.data;

  }

}


