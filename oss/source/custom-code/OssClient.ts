import { SdkManager, ApiResponse, ApsServiceRequestConfig } from "@aps_sdk/autodesk-sdkmanager";
import { OSSFileTransfer } from "./OSSFileTransfer";
import { BucketsApi,ObjectsApi } from "../api";
import { FileTransferConfigurations } from "./FileTransferConfigurations";
import { CreateBucketsPayload, ObjectDetails, ObjectFullDetails, Bucket, Buckets, BucketObjects, BatchcompleteuploadResponse, BatchcompleteuploadObject, Batchsigneds3downloadObject, Batchsigneds3downloadResponse, Batchsigneds3uploadObject, Batchsigneds3uploadResponse, Completes3uploadBody, CreateObjectSigned, CreateSignedResource, Signeds3downloadResponse, Signeds3uploadResponse, Region, With, Access } from "../model";
import * as fs from "fs";

export class OssClient {

    public objectApi: ObjectsApi;
    public bucketApi: BucketsApi;

    public ossFileTransfer: OSSFileTransfer;

    constructor(sdkManager: SdkManager) {
        this.objectApi = new ObjectsApi(sdkManager);
        this.bucketApi = new BucketsApi(sdkManager);

        this.ossFileTransfer = new OSSFileTransfer(new FileTransferConfigurations(3), sdkManager);

    }

    /**
     * The below helper method takes care of the complete upload process, i.e. 
     * the steps 2 to 4 in this link (https://aps.autodesk.com/en/docs/data/v2/tutorials/app-managed-bucket/)
     */
    public async upload(bucketKey: string, filename: string, filepath: string, accessToken: string, cancellationToken: AbortController = new AbortController, projectScope: string = '', requestIdPrefix: string = '', optionalArgs?: { onProgress?: (percentCompleted: number) => void }): Promise<ObjectDetails> {
        const buffer = fs.readFileSync(filepath);
        const response = await this.ossFileTransfer.upload(bucketKey, filename, buffer, accessToken, cancellationToken, projectScope, requestIdPrefix, optionalArgs?.onProgress);
        return response.content;
    }
    public async download(bucketKey: string, objectKey: string, filePath: string, accessToken: string, cancellationToken: AbortController = new AbortController, projectScope: string = '', requestIdPrefix: string = '', optionalArgs?: { onProgress?: (percentCompleted: number) => void }): Promise<void> {
        const response = await this.ossFileTransfer.download(bucketKey, objectKey, filePath, accessToken, cancellationToken, projectScope, requestIdPrefix, optionalArgs?.onProgress);
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
    public async batchCompleteUpload(accessToken: string, bucketKey: string, optionalArgs?: { requests?: BatchcompleteuploadObject, options?: ApsServiceRequestConfig }): Promise<BatchcompleteuploadResponse> {
        const response = await this.objectApi.batchCompleteUpload(accessToken, bucketKey, optionalArgs?.requests, optionalArgs?.options);
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
    public async batchSignedS3Download(accessToken: string, bucketKey: string, requests: Batchsigneds3downloadObject, optionalArgs?: { publicResourceFallback?: boolean, minutesExpiration?: number, options?: ApsServiceRequestConfig }): Promise<BatchcompleteuploadResponse> {
        const response = await this.objectApi.batchSignedS3Download(accessToken, bucketKey, requests, optionalArgs?.publicResourceFallback, optionalArgs?.minutesExpiration, optionalArgs?.options);
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
    public async batchSignedS3Upload(accessToken: string, bucketKey: string, optionalArgs?: { useAcceleration?: boolean, minutesExpiration?: number, requests?: Batchsigneds3uploadObject, options?: ApsServiceRequestConfig }): Promise<Batchsigneds3uploadResponse> {
        const response = await this.objectApi.batchSignedS3Upload(accessToken, bucketKey, optionalArgs?.useAcceleration, optionalArgs?.minutesExpiration, optionalArgs?.requests, optionalArgs?.options);
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
    public async completeSignedS3Upload(accessToken: string, bucketKey: string, objectKey: string, contentType: string, body: Completes3uploadBody, optionalArgs?: { xAdsMetaContentType?: string, xAdsMetaContentDisposition?: string, xAdsMetaContentEncoding?: string, xAdsMetaCacheControl?: string, xAdsUserDefinedMetadata?: string, options?: ApsServiceRequestConfig }): Promise<ApiResponse> {
        const response = await this.objectApi.completeSignedS3Upload(accessToken, bucketKey, objectKey, contentType, body, optionalArgs?.xAdsMetaContentType, optionalArgs?.xAdsMetaContentDisposition, optionalArgs?.xAdsMetaContentEncoding, optionalArgs?.xAdsMetaCacheControl, optionalArgs?.xAdsUserDefinedMetadata, optionalArgs?.options);
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
    public async copyTo(accessToken: string, bucketKey: string, objectKey: string, newObjName: string, optionalArgs?: { xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, options?: ApsServiceRequestConfig }): Promise<ObjectDetails> {
        const response = await this.objectApi.copyTo(accessToken, bucketKey, objectKey, newObjName, optionalArgs?.xAdsAcmNamespace, optionalArgs?.xAdsAcmCheckGroups, optionalArgs?.xAdsAcmGroups, optionalArgs?.options);
        return response.content;
    }

    /**
     * Use this endpoint to create a bucket. Buckets are arbitrary spaces created and owned by applications. Bucket keys are globally unique across all regions, regardless of where they were created, and they cannot be changed. The application creating the bucket is the owner of the bucket. 
     * @param {CreateBucketXAdsRegionEnum} xAdsRegion The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; 
     * @param {CreateBucketsPayload} policyKey Length of time for objects in the bucket to exist; &#x60;transient&#x60; (24h),  &#x60;temporary&#x60; (30d), or &#x60;persistent&#x60; (until delete request). 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSSApiInterface
     */
    public async createBucket(accessToken: string, xAdsRegion: Region, bucketPayload: CreateBucketsPayload, optionalArgs?: { options?: ApsServiceRequestConfig }): Promise<Bucket> {
        const response = await this.bucketApi.createBucket(accessToken, bucketPayload, xAdsRegion, optionalArgs?.options);
        return response.content;
    }

    /**
         * This endpoint creates a signed URL that can be used to download an object within the specified expiration time. Be aware that if the object the signed URL points to is deleted or expires before the signed URL expires, then the signed URL will no longer be valid. A successful call to this endpoint requires bucket owner access.
         * @param {string} bucketKey URL-encoded bucket key
         * @param {string} objectKey URL-encoded object name
         * @param {CreateSignedResourceAccessEnum} [access] Access for signed resource Acceptable values: &#x60;read&#x60;, &#x60;write&#x60;, &#x60;readwrite&#x60;. Default value: &#x60;read&#x60; 
         * @param {boolean} [useCdn] When this is provided, OSS will return a URL that does not point to https://developer.api.autodesk.com.... , but instead points towards an alternate domain. A client can then interact with this public resource exactly as they would for a classic public resource in OSS, i.e. make a GET request to download an object or a PUT request to upload an object.
         * @param {CreateSignedResource} [createSignedResource] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    public async createSignedResource(accessToken: string, bucketKey: string, objectKey: string, optionalArgs?: { access?: Access, useCdn?: boolean, createSignedResource?: CreateSignedResource, options?: ApsServiceRequestConfig }): Promise<CreateObjectSigned> {
        const response = await this.objectApi.createSignedResource(accessToken, bucketKey, objectKey, optionalArgs?.access, optionalArgs?.useCdn, optionalArgs?.createSignedResource, optionalArgs?.options);
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
    public async deleteBucket(accessToken: string, bucketKey: string, optionalArgs?: { options?: ApsServiceRequestConfig }): Promise<ApiResponse> {
        const response = await this.bucketApi.deleteBucket(accessToken, bucketKey, optionalArgs?.options);
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
    public async deleteObject(accessToken: string, bucketKey: string, objectKey: string, optionalArgs?: { AdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, options?: ApsServiceRequestConfig }): Promise<ApiResponse> {
        const response = await this.objectApi.deleteObject(accessToken, bucketKey, objectKey, optionalArgs?.AdsAcmNamespace, optionalArgs?.xAdsAcmCheckGroups, optionalArgs?.xAdsAcmGroups, optionalArgs?.options);
        return response.content;

    }
    /**
         * Delete a signed URL. A successful call to this endpoint requires bucket owner access.
         * @param {string} hash Hash of signed resource
         * @param {DeleteSignedResourceRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60; 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    public async deleteSignedResource(accessToken: string, hash: string, optionalArgs?: { region?: Region, options?: ApsServiceRequestConfig }): Promise<ApiResponse> {
        const response = await this.objectApi.deleteSignedResource(accessToken, hash, optionalArgs?.region, optionalArgs?.options);
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
    public async getBucketDetails(accessToken: string, bucketKey: string, optionalArgs?: { options?: ApsServiceRequestConfig }): Promise<Bucket> {
        const response = await this.bucketApi.getBucketDetails(accessToken, bucketKey, optionalArgs?.options);
        return response.content;
    }
    /**
        * This endpoint will return the buckets owned by the application. This endpoint supports pagination. 
        * @param {GetBucketsRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60; 
        * @param {number} [limit] Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10 
        * @param {string} [startAt] Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response 
        * @param accessToken bearer access token
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        * @memberof OSSApiInterface
        */
    public async getBuckets(accessToken: string, optionalArgs?: { region?: Region, limit?: number, startAt?: string, options?: ApsServiceRequestConfig }): Promise<Buckets> {
        const response = await this.bucketApi.getBuckets(accessToken, optionalArgs?.region, optionalArgs?.limit, optionalArgs?.startAt, optionalArgs?.options);
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
        * @param {GetObjectDetailsWithEnum} [_with] Extra information in details; multiple uses are supported Acceptable values: &#x60;createdDate&#x60;, &#x60;lastAccessedDate&#x60;, &#x60;lastModifiedDate&#x60;, &#x60;userDefinedMetadata&#x60; 
        * @param accessToken bearer access token
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        * @memberof OSSApiInterface
        */

    public async getObjectDetails(accessToken: string, bucketKey: string, objectKey: string, optionalArgs?: { ifModifiedSince?: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, _with?: With, options?: ApsServiceRequestConfig }): Promise<ObjectFullDetails> {
        const response = await this.objectApi.getObjectDetails(accessToken, bucketKey, objectKey, optionalArgs?.ifModifiedSince, optionalArgs?.xAdsAcmNamespace, optionalArgs?.xAdsAcmCheckGroups, optionalArgs?.xAdsAcmGroups, optionalArgs?._with, optionalArgs?.options);
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
    public async getObjects(accessToken: string, bucketKey: string, optionalArgs?: { limit?: number, beginsWith?: string, startAt?: string }): Promise<BucketObjects> {
        const response = await this.objectApi.getObjects(accessToken, bucketKey, optionalArgs?.limit, optionalArgs?.beginsWith, optionalArgs?.startAt);
        return response.content;
    }

    /**
        * Download an object using a signed URL.
        * @param {string} hash Hash of signed resource
        * @param {string} [range] A range of bytes to download from the specified object.
        * @param {string} [ifNoneMatch] The value of this header is compared to the ETAG of the object. If they match, the body will not be included in the response. Only the object information will be included.
        * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body. 
        * @param {string} [acceptEncoding] When gzip is specified, a gzip compressed stream of the object’s bytes will be returned in the response. Cannot use “Accept-Encoding:gzip” with Range header containing an end byte range. End byte range will not be honored if “Accept-Encoding: gzip” header is used. 
        * @param {GetSignedResourceRegionEnum} [region] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60; 
        * @param {string} [responseContentDisposition] Value of the Content-Disposition HTTP header you expect to receive. If the parameter is not provided, the value associated with the object is used.
        * @param {string} [responseContentType] Value of the Content-Type HTTP header you expect to receive in the download response.
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
    public async getSignedResource(accessToken: string, hash: string, optionalArgs?: { range?: string, ifNoneMatch?: string, ifModifiedSince?: string, acceptEncoding?: string, region?: Region, responseContentDisposition?: string, responseContentType?: string, options?: ApsServiceRequestConfig }): Promise<File> {
        const response = await this.objectApi.getSignedResource(accessToken, hash, optionalArgs?.range, optionalArgs?.ifNoneMatch, optionalArgs?.ifModifiedSince, optionalArgs?.acceptEncoding, optionalArgs?.region, optionalArgs?.responseContentDisposition, optionalArgs?.responseContentType, optionalArgs?.options);
        return response.content;
    }
    /**
     * Returns an empty response body and a 200 response code if the object exists.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {string} objectKey URL-encoded object name
     * @param {string} [ifModifiedSince] If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body. 
     * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
     * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
     * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
     * @param {HeadObjectDetailsWithEnum} [_with] Extra information in details; multiple uses are supported Acceptable values: &#x60;createdDate&#x60;, &#x60;lastAccessedDate&#x60;, &#x60;lastModifiedDate&#x60; 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async headObjectDetails(accessToken: string, bucketKey: string, objectKey: string, optionalArgs?: { ifModifiedSince?: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, _with?: With, options?: ApsServiceRequestConfig }): Promise<ApiResponse> {
        const response = await this.objectApi.headObjectDetails(accessToken, bucketKey, objectKey, optionalArgs?.ifModifiedSince, optionalArgs?.xAdsAcmNamespace, optionalArgs?.xAdsAcmCheckGroups, optionalArgs?.xAdsAcmGroups, optionalArgs?._with, optionalArgs?.options);
        return response.content;
    }
    /**
     * Upload an object to this bucket using the body of a POST request, as multipart form data. If during the upload, OSS determines that the combination of bucket key + object key already exists, then the uploaded content will overwrite the existing object. Even if it is possible to upload multiple files in the same request, it is better to create one request for each and paralellize the uploads.
     * @param {string} bucketKey URL-encoded bucket key
     * @param {number} contentLength Indicates the size of the request body. Since the multipart type is complex, this is usually computed after building the body and getting its length.
     * @param {string} xAdsObjectName The key of the object being uploaded. Must be URL-encoded, and it must be 3-1024 characters including any UTF-8 encoding for foreign character support. If an object with this key already exists in the bucket, the object will be overwritten.
     * @param {number} xAdsObjectSize The size in bytes of the file to upload.
     * @param {string} [contentType] Must be the multipart type followed by the boundary used; example: \&#39;multipart/form-data, boundary&#x3D;AaB03x\&#39;.
     * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
     * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of \&#39;true\&#39;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
     * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
     * @param {string} [xAdsMetaCacheControl] The value of this header will be stored with the uploaded object. The value will be used as the \&#39;Cache-Control\&#39; header in the response when the object is downloaded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    // public async postUpload(accessToken: string, bucketKey: string, contentLength: number, xAdsObjectName: string, xAdsObjectSize: number, optionalArgs?: { contentType?: string, xAdsAcmNamespace?: string, xAdsAcmCheckGroups?: string, xAdsAcmGroups?: string, xAdsMetaCacheControl?: string, options?: ApsServiceRequestConfig }): Promise<ApiResponse> {
    //     const response = await this.bucketApi.postUpload(accessToken, bucketKey, contentLength, xAdsObjectName, xAdsObjectSize, optionalArgs?.contentType, optionalArgs?.xAdsAcmNamespace, optionalArgs?.xAdsAcmCheckGroups, optionalArgs?.xAdsAcmGroups, optionalArgs?.xAdsMetaCacheControl, optionalArgs?.options);
    //     return response.content;
    // }
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
    public async signedS3Download(accessToken: string, bucketKey: string, objectKey: string, optionalArgs?: { ifNoneMatch?: string, ifModifiedSince?: string, xAdsAcmScopes?: string, responseContentType?: string, responseContentDisposition?: string, responseCacheControl?: string, publicResourceFallback?: boolean, minutesExpiration?: number, useCdn?: boolean, redirect?: boolean, options?: ApsServiceRequestConfig }): Promise<Signeds3downloadResponse> {
        const response = await this.objectApi.signedS3Download(accessToken, bucketKey, objectKey, optionalArgs?.ifNoneMatch, optionalArgs?.ifModifiedSince, optionalArgs?.xAdsAcmScopes, optionalArgs?.responseContentType, optionalArgs?.responseContentDisposition, optionalArgs?.responseCacheControl, optionalArgs?.publicResourceFallback, optionalArgs?.minutesExpiration, optionalArgs?.useCdn, optionalArgs?.redirect, optionalArgs?.options);
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
    public async signedS3Upload(accessToken: string, bucketKey: string, objectKey: string, optionalArgs?: { xAdsAcmScopes?: string, parts?: number, firstPart?: number, uploadKey?: string, minutesExpiration?: number, useAcceleration?: boolean, options?: ApsServiceRequestConfig }): Promise<Signeds3uploadResponse> {
        const response = await this.objectApi.signedS3Upload(accessToken, bucketKey, objectKey, optionalArgs?.xAdsAcmScopes, optionalArgs?.parts, optionalArgs?.firstPart, optionalArgs?.uploadKey, optionalArgs?.minutesExpiration, optionalArgs.useAcceleration, optionalArgs?.options);
        return response.content;
    }
    /**
     * Upload an object using a signed URL. If the signed resource is available and its expiration period is valid, you can overwrite the existing object via a signed URL upload using the \'access\' query parameter with value \'write\' or \'readwrite\'.
     * @param {string} hash Hash of signed resource
     * @param {number} contentLength Indicates the size of the request body.
     * @param {File} body The object to upload.
     * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
     * @param {string} [contentDisposition] The suggested default filename when downloading this object to a file after it has been uploaded.
     * @param {UploadSignedResourceXAdsRegionEnum} [xAdsRegion] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60; 
     * @param {string} [ifMatch] If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async uploadSignedResource(accessToken: string, hash: string, contentLength: number, body: File, optionalArgs?: { contentType?: string, contentDisposition?: string, xAdsRegion?: Region, ifMatch?: string, options?: ApsServiceRequestConfig }): Promise<ObjectDetails> {
        const response = await this.objectApi.uploadSignedResource(accessToken, hash, contentLength, body, optionalArgs?.contentType, optionalArgs?.contentDisposition, optionalArgs?.xAdsRegion, optionalArgs?.ifMatch, optionalArgs?.options);
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
     * @param {UploadSignedResourcesChunkXAdsRegionEnum} [xAdsRegion] The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60; 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async uploadSignedResourcesChunk(accessToken: string, hash: string, contentRange: string, sessionId: string, body: File, optionalArgs?: { contentType?: string, contentDisposition?: string, xAdsRegion?: Region, options?: ApsServiceRequestConfig }): Promise<ObjectDetails> {
        const response = await this.objectApi.uploadSignedResourcesChunk(accessToken, hash, contentRange, sessionId, body, optionalArgs?.contentType, optionalArgs?.contentDisposition, optionalArgs?.xAdsRegion, optionalArgs?.options);
        return response.content;
    }
}