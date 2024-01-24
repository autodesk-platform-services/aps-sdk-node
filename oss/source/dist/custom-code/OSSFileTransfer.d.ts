/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { AdskEnvironment, SDKManager, ApiResponse, ApsServiceRequestConfig } from "@aps_sdk/autodesk-sdkmanager";
import { IFileTransferConfigurations } from './FileTransferConfigurations';
import { BaseAPI } from '../base';
import { WriteStream } from "fs";
export interface IOSSFileTransfer {
}
export declare class OSSFileTransfer extends BaseAPI implements IOSSFileTransfer {
    private _configuration;
    private _ossApi;
    private _authentication;
    private _maxRetryOnTokenExpiry;
    private _maxChunkCountAllowed;
    private _maxRetryOnUrlExpiry;
    protected sdkManager: SDKManager;
    private logger;
    private readonly _accessTokenExpiredMessage;
    private readonly _forbiddenMessage;
    constructor(configuration: IFileTransferConfigurations, adskEnvironment?: AdskEnvironment);
    Upload(bucketKey: string, objectKey: string, sourceToUpload: Buffer, accessToken: string, cancellationToken: AbortController, projectScope?: string, requestIdPrefix?: string, onProgress?: (percentCompleted: number) => void): Promise<ApiResponse>;
    protected UploadToURL(currentUrl: string, fileChunk: Buffer, accessToken: string, options?: ApsServiceRequestConfig): Promise<any>;
    Download(bucketKey: string, objectKey: string, filePath: string, accessToken: string, cancellationToken: AbortController, projectScope?: string, requestIdPrefix?: string, onProgress?: (percentCompleted: number) => void): Promise<void>;
    private isFileSizeAllowed;
    private readFileBytes;
    private GetUploadUrlsWithRetry;
    private CalculateNumberOfChunks;
    private ValidateFileSize;
    protected WriteToFileStreamFromUrl(fileStream: File, contentUrl: string, start: number, end: number, requestId: string): Promise<void>;
    private HandleRequestId;
    private GenerateSdkRequestId;
    private GetS3SignedDownloadUrlWithRetry;
    private ValidateProjectScopeName;
    private ThrowIfCancellationRequested;
    protected writeToFileStreamFromUrl(fileStream: WriteStream, url: string, start: number, end: number, requestId: any): Promise<void>;
    protected writeStreamAsync(stream: NodeJS.WritableStream, chunk: Buffer): Promise<void>;
}
