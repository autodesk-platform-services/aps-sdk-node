import { SdkManager, ApiResponse, ApsServiceRequestConfig, SdkManagerBuilder, BaseClient, IAuthenticationProvider } from "@aps_sdk/autodesk-sdkmanager";
import { ObjectDetails, BatchcompleteuploadObject, BatchcompleteuploadResponse, Batchsigneds3downloadObject, Batchsigneds3uploadObject, Batchsigneds3uploadResponse, Completes3uploadBody, Region, CreateBucketsPayload, Bucket, Access, CreateSignedResource, CreateObjectSigned, Buckets, With, ObjectFullDetails, BucketObjects, Signeds3downloadResponse, Signeds3uploadResponse } from "../model";
import { OSSFileTransfer } from "./ossFileTransfer";
import { BucketsApi, ObjectsApi } from "../api";
import { FileTransferConfigurations } from "./fileTransferConfigurations";
import { promises as fs } from "fs";
import { Stream } from "stream";


export class OssClient extends BaseClient {

    public objectApi: ObjectsApi;
    public bucketApi: BucketsApi;

    public ossFileTransfer: OSSFileTransfer;

    constructor(optionalArgs?: { sdkManager?: SdkManager, authenticationProvider?: IAuthenticationProvider }) {
        super(optionalArgs?.authenticationProvider);
        if (!optionalArgs?.sdkManager) {
            (optionalArgs ??= {}).sdkManager = SdkManagerBuilder.create().build();
        }
        this.objectApi = new ObjectsApi(optionalArgs.sdkManager);
        this.bucketApi = new BucketsApi(optionalArgs.sdkManager);
        this.ossFileTransfer = new OSSFileTransfer(new FileTransferConfigurations(3), optionalArgs.sdkManager, optionalArgs.authenticationProvider);

    }
    
    /**
    *Downloads a file by transparently handling operations like obtaining signed download URLs and chunking large files for optimal transfer.
    * @param {string} bucketKey URL-encoded bucket key
    * @param {string} objectKey URL-encoded object name
    * @param {string} filePath The Path of the file where should be downloaded 
    * @param accessToken bearer access token
    * @param {AbortController} cancellationToken
    * @param {string} requestIdPrefix
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof OSSApiInterface
    */
    /**
    * @deprecated Use the `downloadObject` method instead.
    */
    public async downloadObjectAsync(bucketKey: string, objectKey: string, filePath: string, optionalArgs?: { cancellationToken?: AbortController, requestIdPrefix?: string, accessToken?: string, onProgress?: (percentCompleted: number) => void }): Promise<void>;
    /**
     *Downloads a file by transparently handling operations like obtaining signed download URLs and chunking large files for optimal transfer.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {string} objectKey URL-encoded object name
     * @param accessToken bearer access token
     * @param {AbortController} cancellationToken
     * @param {string} requestIdPrefix
     * @param {*} [options] Override http request option.
     * @returns {Stream}
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     * 
     */
    /**
    * @deprecated Use the `downloadObject` method instead.
    */
    public async downloadObjectAsync(bucketKey: string, objectKey: string, optionalArgs?: { cancellationToken?: AbortController, requestIdPrefix?: string, accessToken?: string, onProgress?: (percentCompleted: number) => void }): Promise<Stream>;
    /**
    * @deprecated Use the `downloadObject` method instead.
    */
    public async downloadObjectAsync(bucketKey: string, objectKey: string, filePathOrOptionalArgs: string | { cancellationToken?: AbortController, requestIdPrefix?: string, accessToken?: string, onProgress?: (percentCompleted: number) => void }, optionalArgs?: { cancellationToken?: AbortController, requestIdPrefix?: string, accessToken?: string, onProgress?: (percentCompleted: number) => void }): Promise<void | Stream> {
        let filePath: string | undefined;
        if (typeof filePathOrOptionalArgs === 'string') {
            filePath = filePathOrOptionalArgs;
        } else {
            optionalArgs = filePathOrOptionalArgs;
        }

        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }

        if (filePath) {
            await this.ossFileTransfer.download(bucketKey, objectKey, optionalArgs?.accessToken, filePath, optionalArgs?.cancellationToken || new AbortController(), optionalArgs?.requestIdPrefix, optionalArgs?.onProgress);
        } else {
            return this.ossFileTransfer.download(bucketKey, objectKey, optionalArgs?.accessToken, null, optionalArgs?.cancellationToken || new AbortController(), optionalArgs?.requestIdPrefix, optionalArgs?.onProgress);
        }
    }

    /**
   *Downloads a file by transparently handling operations like obtaining signed download URLs and chunking large files for optimal transfer.
   * @param {string} bucketKey URL-encoded bucket key
   * @param {string} objectKey URL-encoded object name
   * @param {string} filePath The Path of the file where should be downloaded 
   * @param accessToken bearer access token
   * @param {AbortController} cancellationToken
   * @param {string} requestIdPrefix
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OSSApiInterface
   */
    public async downloadObject(bucketKey: string, objectKey: string, filePath: string, optionalArgs?: { cancellationToken?: AbortController, requestIdPrefix?: string, accessToken?: string, onProgress?: (percentCompleted: number) => void }): Promise<void>;
    /**
     *Downloads a file by transparently handling operations like obtaining signed download URLs and chunking large files for optimal transfer.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {string} objectKey URL-encoded object name
     * @param accessToken bearer access token
     * @param {AbortController} cancellationToken
     * @param {string} requestIdPrefix
     * @param {*} [options] Override http request option.
     * @returns {Stream}
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     * 
     */
    public async downloadObject(bucketKey: string, objectKey: string, optionalArgs?: { cancellationToken?: AbortController, requestIdPrefix?: string, accessToken?: string, onProgress?: (percentCompleted: number) => void }): Promise<Stream>;
    public async downloadObject(bucketKey: string, objectKey: string, filePathOrOptionalArgs: string | { cancellationToken?: AbortController, requestIdPrefix?: string, accessToken?: string, onProgress?: (percentCompleted: number) => void }, optionalArgs?: { cancellationToken?: AbortController, requestIdPrefix?: string, accessToken?: string, onProgress?: (percentCompleted: number) => void }): Promise<void | Stream> {
        let filePath: string | undefined;
        if (typeof filePathOrOptionalArgs === 'string') {
            filePath = filePathOrOptionalArgs;
        } else {
            optionalArgs = filePathOrOptionalArgs;
        }

        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }

        if (filePath) {
            await this.ossFileTransfer.download(bucketKey, objectKey, optionalArgs?.accessToken, filePath, optionalArgs?.cancellationToken || new AbortController(), optionalArgs?.requestIdPrefix, optionalArgs?.onProgress);
        } else {
            return this.ossFileTransfer.download(bucketKey, objectKey, optionalArgs?.accessToken, null, optionalArgs?.cancellationToken || new AbortController(), optionalArgs?.requestIdPrefix, optionalArgs?.onProgress);
        }
    }


    /**
     * Instructs OSS to complete the object creation process for numerous objects after their bytes have been uploaded directly to S3. An object will not be accessible until you complete the object creation process, either with this endpoint or the single Complete Upload endpoint. This endpoint accepts batch sizes of up to 25. Any larger and the request will fail.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {string} objectKey URL-encoded object name
     * @param {Buffer|string} sourceToUpload The Path of the file to be uploaded or the buffer of the file . 
     * @param accessToken bearer access token
     * @param {AbortController} cancellationToken
     * @param {string} requestIdPrefix
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
     /**
    * @deprecated Use the `uploadObject` method instead.
    */
    public async uploadObjectAsync(bucketKey: string, objectKey: string, sourceToUpload: Buffer | string, optionalArgs?: { cancellationToken?: AbortController, requestIdPrefix?: string, accessToken?: string,xAdsMetaContentType?: string, xAdsMetaContentDisposition?: string, xAdsMetaContentEncoding?: string, xAdsMetaCacheControl?: string, xAdsUserDefinedMetadata?: string, onProgress?: (percentCompleted: number) => void }): Promise<ObjectDetails> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        var response;
        if (typeof sourceToUpload === 'string') {
            var buffer = await fs.readFile(sourceToUpload);
            response = await this.ossFileTransfer.upload(bucketKey, objectKey, buffer, optionalArgs?.accessToken, optionalArgs?.cancellationToken || new AbortController, optionalArgs?.requestIdPrefix, optionalArgs?.xAdsMetaContentType, optionalArgs?.xAdsMetaContentDisposition, optionalArgs?.xAdsMetaContentEncoding, optionalArgs?.xAdsMetaCacheControl, optionalArgs?.xAdsUserDefinedMetadata, optionalArgs?.onProgress);
        }
        else {
            response = await this.ossFileTransfer.upload(bucketKey, objectKey, sourceToUpload, optionalArgs?.accessToken, optionalArgs?.cancellationToken || new AbortController, optionalArgs?.requestIdPrefix, optionalArgs?.xAdsMetaContentType, optionalArgs?.xAdsMetaContentDisposition, optionalArgs?.xAdsMetaContentEncoding, optionalArgs?.xAdsMetaCacheControl, optionalArgs?.xAdsUserDefinedMetadata, optionalArgs?.onProgress);
        }
        return response.content;
    }

    
    /**
     * Instructs OSS to complete the object creation process for numerous objects after their bytes have been uploaded directly to S3. An object will not be accessible until you complete the object creation process, either with this endpoint or the single Complete Upload endpoint. This endpoint accepts batch sizes of up to 25. Any larger and the request will fail.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {string} objectKey URL-encoded object name
     * @param {Buffer|string} sourceToUpload The Path of the file to be uploaded or the buffer of the file . 
     * @param accessToken bearer access token
     * @param {AbortController} cancellationToken
     * @param {string} requestIdPrefix
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    public async uploadObject(bucketKey: string, objectKey: string, sourceToUpload: Buffer | string, optionalArgs?: { cancellationToken?: AbortController, requestIdPrefix?: string, accessToken?: string,  xAdsMetaContentType?: string, xAdsMetaContentDisposition?: string, xAdsMetaContentEncoding?: string, xAdsMetaCacheControl?: string, xAdsUserDefinedMetadata?: string, onProgress?: (percentCompleted: number) => void }): Promise<ObjectDetails> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        var response;
        if (typeof sourceToUpload === 'string') {
            var buffer = await fs.readFile(sourceToUpload);
            response = await this.ossFileTransfer.upload(bucketKey, objectKey, buffer, optionalArgs?.accessToken, optionalArgs?.cancellationToken || new AbortController, optionalArgs?.requestIdPrefix, optionalArgs?.xAdsMetaContentType, optionalArgs?.xAdsMetaContentDisposition, optionalArgs?.xAdsMetaContentEncoding, optionalArgs?.xAdsMetaCacheControl, optionalArgs?.xAdsUserDefinedMetadata, optionalArgs?.onProgress);
        }
        else {
            response = await this.ossFileTransfer.upload(bucketKey, objectKey, sourceToUpload, optionalArgs?.accessToken, optionalArgs?.cancellationToken || new AbortController, optionalArgs?.requestIdPrefix, optionalArgs?.xAdsMetaContentType, optionalArgs?.xAdsMetaContentDisposition, optionalArgs?.xAdsMetaContentEncoding, optionalArgs?.xAdsMetaCacheControl, optionalArgs?.xAdsUserDefinedMetadata, optionalArgs?.onProgress);
        }
        return response.content;
    }


    /**
     * Instructs OSS to complete the object creation process for numerous objects after their bytes have been uploaded directly to S3. An object will not be accessible until you complete the object creation process, either with this endpoint or the single Complete Upload endpoint. This endpoint accepts batch sizes of up to 25. Any larger and the request will fail.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {BatchcompleteuploadObject} [requests] An array of objects, each of which represents an upload to complete.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    public async batchCompleteUpload(bucketKey: string, requests: BatchcompleteuploadObject, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<BatchcompleteuploadResponse> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.objectApi.batchCompleteUpload(optionalArgs?.accessToken, bucketKey, requests, optionalArgs?.options);
        return response.content;
    }
    /**
         * Gets one or more signed URLs to download objects. The signed URLs can be used to download the objects directly from S3, skipping OSS servers. Be aware that expiration time for the signed URL(s) is just 60 seconds. So, a request to the URL(s) must begin within 60 seconds; the transfer of the data can exceed 60 seconds. A successful call to this endpoint requires bucket owner access.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {Batchsigneds3downloadObject} requests An array of objects representing each request for a signed download URL.
         * @param {boolean} [publicResourceFallback] Indicates that for each requested object, OSS should return an OSS Signed Resource if the object is unmerged, rather than a map of S3 signed URLs for the chunks of the object.
         * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    public async batchSignedS3Download(bucketKey: string, requests: Batchsigneds3downloadObject, optionalArgs?: { publicResourceFallback?: boolean, minutesExpiration?: number, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<BatchcompleteuploadResponse> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.objectApi.batchSignedS3Download(optionalArgs?.accessToken, bucketKey, requests, optionalArgs?.publicResourceFallback, optionalArgs?.minutesExpiration, optionalArgs?.options);
        return response.content;
    }
    /**
     * Requests a batch of S3 signed URL with which to upload multiple objects or chunks of multiple objects. As with the Batch Get Download URL endpoint, the requests within the batch are evaluated independently and individual requests can be rejected even if the overall request returns a 200 response code. You can request a maximum of 25 URLs in a single request.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {boolean} [useAcceleration] Whether or not to generate an accelerated signed URL (ie: URLs of the form ...s3-accelerate.amazonaws.com... vs ...s3.amazonaws.com...). When not specified, defaults to true. Providing non-boolean values will result in a 400 error.
     * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
     * @param {Batchsigneds3uploadObject} [requests] An array of objects, each of which represents a signed URL / URLs to retrieve.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApi
     */
    public async batchSignedS3Upload(bucketKey: string, requests: Batchsigneds3uploadObject, optionalArgs?: { useAcceleration?: boolean, minutesExpiration?: number, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Batchsigneds3uploadResponse> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.objectApi.batchSignedS3Upload(optionalArgs?.accessToken, bucketKey, optionalArgs?.useAcceleration, optionalArgs?.minutesExpiration, requests, optionalArgs?.options);
        return response.content;
    }

    /**
         * Instructs OSS to complete the object creation process after the bytes have been uploaded directly to S3.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey The URL-encoded key of the object for which to create a signed URL.
         * @param {string} contentType Must be exactly &#x60;application/json&#x60;.
         * @param {Completes3uploadBody} body 
         * @param {string} [xAdsMetaContentType] The Content-Type value for the uploaded object to record within OSS.
         * @param {string} [xAdsMetaContentDisposition] The Content-Disposition value for the uploaded object to record within OSS.
         * @param {string} [xAdsMetaContentEncoding] The Content-Encoding value for the uploaded object to record within OSS.
         * @param {string} [xAdsMetaCacheControl] The Cache-Control value for the uploaded object to record within OSS.
         * @param {string} [xAdsUserDefinedMetadata] This parameter allows setting any custom metadata to be stored with the object, which can be retrieved later on download or when getting the object details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    public async completeSignedS3Upload(bucketKey: string, objectKey: string, contentType: string, body: Completes3uploadBody, optionalArgs?: { xAdsMetaContentType?: string, xAdsMetaContentDisposition?: string, xAdsMetaContentEncoding?: string, xAdsMetaCacheControl?: string, xAdsUserDefinedMetadata?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ApiResponse> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.objectApi.completeSignedS3Upload(optionalArgs?.accessToken, bucketKey, objectKey, contentType, body, optionalArgs?.xAdsMetaContentType, optionalArgs?.xAdsMetaContentDisposition, optionalArgs?.xAdsMetaContentEncoding, optionalArgs?.xAdsMetaCacheControl, optionalArgs?.xAdsUserDefinedMetadata, optionalArgs?.options);
        return response.content;
    }

    /**
         * Copies an object to another object name in the same bucket.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey URL-encoded object name
         * @param {string} newObjName URL-encoded Object key to use as the destination
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    public async copyTo(bucketKey: string, objectKey: string, newObjName: string, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ObjectDetails> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.objectApi.copyTo(optionalArgs?.accessToken, bucketKey, objectKey, newObjName, optionalArgs?.options);
        return response.content;
    }

    /**
     * Use this endpoint to create a bucket. Buckets are arbitrary spaces created and owned by applications. Bucket keys are globally unique across all regions, regardless of where they were created, and they cannot be changed. The application creating the bucket is the owner of the bucket. 
     * @param {Region} region Specifies where the bucket containing the object is stored. Possible values are:
     * 
     * - ``US`` : (Default) Data center for the US region.
     * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
     * - ``AUS`` : (Beta) Data center for Australia.
     * - ``CAN`` : Data center for the Canada region.
     * - ``DEU`` : Data center for the Germany region.
     * - ``IND`` : Data center for the India region.
     * - ``JPN`` : Data center for the Japan region.
     * - ``GBR`` : Data center for the United Kingdom region.
     * 
     * **Note:** Beta features are subject to change. Please do not use in production environments.
     * @param {CreateBucketsPayload} bucketPayload Length of time for objects in the bucket to exist; &#x60;transient&#x60; (24h),  &#x60;temporary&#x60; (30d), or &#x60;persistent&#x60; (until delete request). 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    public async createBucket(region: Region, bucketPayload: CreateBucketsPayload, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Bucket> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.bucketApi.createBucket(optionalArgs?.accessToken, bucketPayload, region, optionalArgs?.options);
        return response.content;
    }

    /**
         * This endpoint creates a signed URL that can be used to download an object within the specified expiration time. Be aware that if the object the signed URL points to is deleted or expires before the signed URL expires, then the signed URL will no longer be valid. A successful call to this endpoint requires bucket owner access.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey URL-encoded object name
         * @param {Access} [access] Access for signed resource Acceptable values: &#x60;read&#x60;, &#x60;write&#x60;, &#x60;readwrite&#x60;. Default value: &#x60;read&#x60; 
         * @param {boolean} [useCdn] When this is provided, OSS will return a URL that does not point to https://developer.api.autodesk.com.... , but instead points towards an alternate domain. A client can then interact with this public resource exactly as they would for a classic public resource in OSS, i.e. make a GET request to download an object or a PUT request to upload an object.
         * @param {CreateSignedResource} [createSignedResource] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    public async createSignedResource(bucketKey: string, objectKey: string, optionalArgs?: { access?: Access, useCdn?: boolean, createSignedResource?: CreateSignedResource, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<CreateObjectSigned> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.objectApi.createSignedResource(optionalArgs?.accessToken, bucketKey, objectKey, optionalArgs?.access, optionalArgs?.useCdn, optionalArgs?.createSignedResource, optionalArgs?.options);
        return response.content;
    }
    /**
   * Delete the bucket with the specified key
   * @param {string} bucketKey URL-encoded bucket key
   * @param accessToken bearer access token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OSSApiInterface
   */
    public async deleteBucket(bucketKey: string, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ApiResponse> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.bucketApi.deleteBucket(optionalArgs?.accessToken, bucketKey, optionalArgs?.options);
        return response.content;
    }


    /**
  * Deletes an object from the bucket.
  * @param {string} bucketKey URL-encoded key of the bucket containing the object.
  * @param {string} objectKey URL-encoded key of the object to delete.
  * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
  * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
  * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
  * @param accessToken bearer access token
  * @param {*} [options] Override http request option.
  * @throws {RequiredError}
  * @memberof OSSApiInterface
  */
    public async deleteObject(bucketKey: string, objectKey: string, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ApiResponse> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.objectApi.deleteObject(optionalArgs?.accessToken, bucketKey, objectKey, optionalArgs?.options);
        return response.content;

    }
    /**
     * Delete a signed URL. A successful call to this endpoint requires bucket owner access.
     * @param {string} hash Hash of signed resource
     * @param {Region} [region] Specifies where the bucket containing the object is stored. Possible values are:
     * 
     * - ``US`` : (Default) Data center for the US region.
     * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
     * - ``AUS`` : (Beta) Data center for Australia.
     * - ``CAN`` : Data center for the Canada region.
     * - ``DEU`` : Data center for the Germany region.
     * - ``IND`` : Data center for the India region.
     * - ``JPN`` : Data center for the Japan region.
     * - ``GBR`` : Data center for the United Kingdom region.
     * 
     * **Note:** Beta features are subject to change. Please do not use in production environments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async deleteSignedResource(hash: string, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ApiResponse> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.objectApi.deleteSignedResource(optionalArgs?.accessToken, hash, optionalArgs?.region, optionalArgs?.options);
        return response.content;
    }
    /**
     * This endpoint will return the details about the specified bucket.
     * @param {string} bucketKey URL-encoded bucket key
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    public async getBucketDetails(bucketKey: string, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Bucket> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.bucketApi.getBucketDetails(optionalArgs?.accessToken, bucketKey, optionalArgs?.options);
        return response.content;
    }
    /**
        * This endpoint will return the buckets owned by the application. This endpoint supports pagination. 
        * @param {Region} [region] Specifies where the bucket containing the object is stored. Possible values are:
        * 
        * - ``US`` : (Default) Data center for the US region.
        * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
        * - ``AUS`` : (Beta) Data center for Australia.
        * - ``CAN`` : Data center for the Canada region.
        * - ``DEU`` : Data center for the Germany region.
        * - ``IND`` : Data center for the India region.
        * - ``JPN`` : Data center for the Japan region.
        * - ``GBR`` : Data center for the United Kingdom region.
        * 
        * **Note:** Beta features are subject to change. Please do not use in production environments.
        * @param {number} [limit] Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10 
        * @param {string} [startAt] Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response 
        * @param accessToken bearer access token
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        * @memberof OSSApiInterface
        */
    public async getBuckets(optionalArgs?: { region?: Region, limit?: number, startAt?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Buckets> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.bucketApi.getBuckets(optionalArgs?.accessToken, optionalArgs?.region, optionalArgs?.limit, optionalArgs?.startAt, optionalArgs?.options);
        return response.content;

    }
    /**
        * Returns object details in JSON format.
        * @param {string} bucketKey URL-encoded bucket key
        * @param {string} objectKey URL-encoded object name
        * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body. 
        * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
        * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
        * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
        * @param {With} [_with] Extra information in details; multiple uses are supported Acceptable values: &#x60;createdDate&#x60;, &#x60;lastAccessedDate&#x60;, &#x60;lastModifiedDate&#x60;, &#x60;userDefinedMetadata&#x60; 
        * @param accessToken bearer access token
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        * @memberof OSSApiInterface
        */

    public async getObjectDetails(bucketKey: string, objectKey: string, optionalArgs?: { ifModifiedSince?: string, _with?: With, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ObjectFullDetails> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.objectApi.getObjectDetails(optionalArgs?.accessToken, bucketKey, objectKey, optionalArgs?.ifModifiedSince, optionalArgs?._with, optionalArgs?.options);
        return response.content;
    }
    /**
     * List objects in a bucket. It is only available to the bucket creator.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {number} [limit] Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10 
     * @param {string} [beginsWith] Provides a way to filter the based on object key name
     * @param {string} [startAt] Key to use as an offset to continue pagination. This is typically the last bucket key found in a preceding GET buckets response 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    public async getObjects(bucketKey: string, optionalArgs?: { limit?: number, beginsWith?: string, startAt?: string, accessToken?: string, }): Promise<BucketObjects> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.objectApi.getObjects(optionalArgs?.accessToken, bucketKey, optionalArgs?.limit, optionalArgs?.beginsWith, optionalArgs?.startAt);
        return response.content;
    }

    /**
        * Download an object using a signed URL.
        * @param {string} hash Hash of signed resource
        * @param {string} [range] A range of bytes to download from the specified object.
        * @param {string} [ifNoneMatch] The value of this header is compared to the ETAG of the object. If they match, the body will not be included in the response. Only the object information will be included.
        * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body. 
        * @param {string} [acceptEncoding] When gzip is specified, a gzip compressed stream of the object’s bytes will be returned in the response. Cannot use “Accept-Encoding:gzip” with Range header containing an end byte range. End byte range will not be honored if “Accept-Encoding: gzip” header is used. 
        * @param {Region} [region] Specifies where the bucket containing the object is stored. Possible values are:
        * 
        * - ``US`` : (Default) Data center for the US region.
        * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
        * - ``AUS`` : (Beta) Data center for Australia.
        * - ``CAN`` : Data center for the Canada region.
        * - ``DEU`` : Data center for the Germany region.
        * - ``IND`` : Data center for the India region.
        * - ``JPN`` : Data center for the Japan region.
        * - ``GBR`` : Data center for the United Kingdom region.
        * 
        * **Note:** Beta features are subject to change. Please do not use in production environments.
        * @param {string} [responseContentDisposition] Value of the Content-Disposition HTTP header you expect to receive. If the parameter is not provided, the value associated with the object is used.
        * @param {string} [responseContentType] Value of the Content-Type HTTP header you expect to receive in the download response.
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
    public async getSignedResource(hash: string, optionalArgs?: { range?: string, ifNoneMatch?: string, ifModifiedSince?: string, acceptEncoding?: string, region?: Region, responseContentDisposition?: string, responseContentType?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<File> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.objectApi.getSignedResource(optionalArgs?.accessToken, hash, optionalArgs?.range, optionalArgs?.ifNoneMatch, optionalArgs?.ifModifiedSince, optionalArgs?.acceptEncoding, optionalArgs?.region, optionalArgs?.responseContentDisposition, optionalArgs?.responseContentType, optionalArgs?.options);
        return response.content;
    }
    /**
     * Gets a signed URL to a download an object directly from S3, bypassing OSS servers. This signed URL expires in 60 seconds, so the request must begin within that time frame; the actual data transfer can take longer. Note that resumable uploads store each chunk individually; after the upload completes, an async process merges all the chunks and creates the definitive OSS file. If you request a signed URL before the async process completes, the response returns a map of S3 URLs, one per chunk; the key is the byte range of the total file to which the chunk corresponds. If you need a single URL in the response, you can use OSS signed resource functionality by setting the \'public-resource-fallback\' query parameter to true. Lastly, note that ranged downloads can be used with the returned URL.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {string} objectKey The URL-encoded key of the object for which to create a signed URL.
     * @param {string} [ifNoneMatch] If the value of this header matches the ETag of the object, an entity will not be returned from the server; instead a 304 (not modified) response will be returned without any message-body.
     * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message-body.
     * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
     * @param {string} [responseContentType] Value of the Content-Type header that the client expects to receive from S3. If this attribute is not provided, it defaults to the value corresponding to the object.
     * @param {string} [responseContentDisposition] Value of the Content-Disposition header that the client expects to receive. If this attribute is not provided, it defaults to the value corresponding to the object.
     * @param {string} [responseCacheControl] Value of the Cache-Control header that the client expects to receive from S3. If this attribute is not provided, it defaults to the value corresponding to the object.
     * @param {boolean} [publicResourceFallback] Indicates that OSS should return an OSS Signed Resource if the object is unmerged, rather than a map of S3 signed URLs for the chunks of the object.
     * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
     * @param {boolean} [useCdn] This will generate a CloudFront URL for the S3 object.
     * @param {boolean} [redirect] Generates a HTTP redirection response (Temporary Redirect 307​) using the generated URL.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async signedS3Download(bucketKey: string, objectKey: string, optionalArgs?: { ifNoneMatch?: string, ifModifiedSince?: string, responseContentType?: string, responseContentDisposition?: string, responseCacheControl?: string, publicResourceFallback?: boolean, minutesExpiration?: number, useCdn?: boolean, redirect?: boolean, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Signeds3downloadResponse> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.objectApi.signedS3Download(optionalArgs?.accessToken, bucketKey, objectKey, optionalArgs?.ifNoneMatch, optionalArgs?.ifModifiedSince, optionalArgs?.responseContentType, optionalArgs?.responseContentDisposition, optionalArgs?.responseCacheControl, optionalArgs?.publicResourceFallback, optionalArgs?.minutesExpiration, optionalArgs?.useCdn, optionalArgs?.options);
        return response.content;
    }
    /**
     * Gets a signed URL to upload an object in a single request, or an array of signed URLs with which to upload an object in multiple parts.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {string} objectKey The URL-encoded key of the object for which to create a signed URL.
     * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
     * @param {number} [parts] For a multipart upload, the number of chunk upload URLs to return. If X is provided, the response will include chunk URLs from 1 to X. If none provided, the response will include only a single URL with which to upload an entire object.
     * @param {number} [firstPart] Index of first part in the parts collection.
     * @param {string} [uploadKey] The identifier of a previously-initiated upload, in order to request more chunk upload URLs for the same upload. This must match the &#x60;uploadKey&#x60; returned by a previous call to this endpoint where the client requested more than one part URL. If none provided, OSS will initiate a new upload entirely.
     * @param {number} [minutesExpiration] The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async signedS3Upload(bucketKey: string, objectKey: string, optionalArgs?: { parts?: number, firstPart?: number, uploadKey?: string, minutesExpiration?: number, useAcceleration?: boolean, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Signeds3uploadResponse> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.objectApi.signedS3Upload(optionalArgs?.accessToken, bucketKey, objectKey, optionalArgs?.parts, optionalArgs?.firstPart, optionalArgs?.uploadKey, optionalArgs?.minutesExpiration, optionalArgs.useAcceleration, optionalArgs?.options);
        return response.content;
    }
    /**
     * Upload an object using a signed URL. If the signed resource is available and its expiration period is valid, you can overwrite the existing object via a signed URL upload using the \'access\' query parameter with value \'write\' or \'readwrite\'.
     * @param {string} hash Hash of signed resource
     * @param {number} contentLength Indicates the size of the request body.
     * @param {File} body The object to upload.
     * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
     * @param {string} [contentDisposition] The suggested default filename when downloading this object to a file after it has been uploaded.
     * @param {Region} [xAdsRegion] Specifies where the bucket containing the object is stored. Possible values are:
     * 
     * - ``US`` : (Default) Data center for the US region.
     * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
     * - ``AUS`` : (Beta) Data center for Australia.
     * - ``CAN`` : Data center for the Canada region.
     * - ``DEU`` : Data center for the Germany region.
     * - ``IND`` : Data center for the India region.
     * - ``JPN`` : Data center for the Japan region.
     * - ``GBR`` : Data center for the United Kingdom region.
     * 
     * **Note:** Beta features are subject to change. Please do not use in production environments.
     * @param {string} [ifMatch] If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async uploadSignedResource(hash: string, contentLength: number, body: File, optionalArgs?: { contentType?: string, contentDisposition?: string, xAdsRegion?: Region, ifMatch?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ObjectDetails> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.objectApi.uploadSignedResource(optionalArgs?.accessToken, hash, contentLength, body, optionalArgs?.contentType, optionalArgs?.contentDisposition, optionalArgs?.xAdsRegion, optionalArgs?.ifMatch, optionalArgs?.options);
        return response.content;
    }
    /**
     * Resumable upload for signed URLs.
     * @param {string} hash Hash of the signed resource
     * @param {string} contentRange Byte range of a segment being uploaded
     * @param {string} sessionId Unique identifier of a session of a file being uploaded
     * @param {File} body The chunk to upload.
     * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
     * @param {string} [contentDisposition] The suggested default filename when downloading this object to a file after it has been uploaded.
     * @param {Region} [xAdsRegion] Specifies where the bucket containing the object is stored. Possible values are:
     * 
     * - ``US`` : (Default) Data center for the US region.
     * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
     * - ``AUS`` : (Beta) Data center for Australia.
     * - ``CAN`` : Data center for the Canada region.
     * - ``DEU`` : Data center for the Germany region.
     * - ``IND`` : Data center for the India region.
     * - ``JPN`` : Data center for the Japan region.
     * - ``GBR`` : Data center for the United Kingdom region.
     * 
     * **Note:** Beta features are subject to change. Please do not use in production environments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async uploadSignedResourcesChunk(hash: string, contentRange: string, sessionId: string, body: File, optionalArgs?: { contentType?: string, contentDisposition?: string, xAdsRegion?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ObjectDetails> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.objectApi.uploadSignedResourcesChunk(optionalArgs?.accessToken, hash, contentRange, sessionId, body, optionalArgs?.contentType, optionalArgs?.contentDisposition, optionalArgs?.xAdsRegion, optionalArgs?.options);
        return response.content;
    }
}