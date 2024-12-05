/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, OssApiError } from '../base';
import { Access } from '../model';
import { Reason } from '../model';
import { Region } from '../model';
import { Result } from '../model';
import { With } from '../model';
import { BatchcompleteuploadObject } from '../model/batchcompleteuploadObject';
import { BatchcompleteuploadResponse } from '../model/batchcompleteuploadResponse';
import { Batchsigneds3downloadObject } from '../model/batchsigneds3downloadObject';
import { Batchsigneds3downloadResponse } from '../model/batchsigneds3downloadResponse';
import { Batchsigneds3uploadObject } from '../model/batchsigneds3uploadObject';
import { Batchsigneds3uploadResponse } from '../model/batchsigneds3uploadResponse';
import { BucketObjects } from '../model/bucketObjects';
import { Completes3uploadBody } from '../model/completes3uploadBody';
import { CreateObjectSigned } from '../model/createObjectSigned';
import { CreateSignedResource } from '../model/createSignedResource';
import { ObjectDetails } from '../model/objectDetails';
import { ObjectFullDetails } from '../model/objectFullDetails';
import { Signeds3downloadResponse } from '../model/signeds3downloadResponse';
import { Signeds3uploadResponse } from '../model/signeds3uploadResponse';
/**
 * ObjectsApi - axios parameter creator
 * @export
 */
export const ObjectsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Requests OSS to start reconstituting the set of objects that were uploaded using signed S3 upload URLs. You must call this operation only after all the objects have been uploaded.   You can specify up to 25 objects in this operation.  
         * @summary Complete Batch Upload to S3 Signed URLs
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {BatchcompleteuploadObject} [requests] An array of objects, each of which represents an upload to complete.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        batchCompleteUpload: async (accessToken: string, bucketKey: string, requests: BatchcompleteuploadObject,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bucketKey' is not null or undefined
            assertParamExists('batchCompleteUpload', 'bucketKey', bucketKey)
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/batchcompleteupload`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requests, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates and returns signed URLs to download a set of objects directly from S3. These signed URLs expire in 2 minutes by default, but you can change this duration if needed.  You must start download the objects before the signed URLs expire. The download itself can take longer.  Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error. 
         * @summary Batch Generate Signed S3 Download URLs
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {Batchsigneds3downloadObject} requests An array of objects representing each request for a signed download URL.
         * @param {boolean} [publicResourceFallback] Specifies how to return the signed URLs, in case the object was uploaded in chunks, and assembling of chunks is not yet complete.  - &#x60;&#x60;true&#x60;&#x60; : Return a single signed OSS URL. - &#x60;&#x60;false&#x60;&#x60; : (Default) Return multiple signed S3 URLs, where each URL points to a chunk. 
         * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        batchSignedS3Download: async (accessToken: string, bucketKey: string, requests: Batchsigneds3downloadObject, publicResourceFallback?: boolean, minutesExpiration?: number,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bucketKey' is not null or undefined
            assertParamExists('batchSignedS3Download', 'bucketKey', bucketKey)
            // verify required parameter 'requests' is not null or undefined
            assertParamExists('batchSignedS3Download', 'requests', requests)
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/batchsigneds3download`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (publicResourceFallback !== undefined) {
                localVarQueryParameter['public-resource-fallback'] = publicResourceFallback;
            }

            if (minutesExpiration !== undefined) {
                localVarQueryParameter['minutesExpiration'] = minutesExpiration;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requests, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates and returns signed URLs to upload a set of objects directly to S3. These signed URLs expire in 2 minutes by default, but you can change this duration if needed.  You must start uploading the objects before the signed URLs expire. The upload  itself can take longer.  Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error.  If required, you can request an array of signed URLs for each object, which lets you upload the objects in chunks. Once you upload all chunks you must call the [Complete Batch Upload to S3 Signed URL](/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-batchcompleteupload-POST/) operation to indicate completion. This instructs OSS to assemble the chunks and reconstitute the object on OSS. You must call this operation even if you requested a single signed URL for an object.  If an upload fails after the validity period of a signed URL has elapsed, you can call this operation again to obtain fresh signed URLs. However, you must use the same ``uploadKey`` that was returned when you originally called this operation.  
         * @summary Batch Generate Signed S3 Upload URLs
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {boolean} [useAcceleration] &#x60;&#x60;true&#x60;&#x60; : (Default) Generates a faster S3 signed URL using Transfer Acceleration.  &#x60;&#x60;false&#x60;&#x60;: Generates a standard S3 signed URL. 
         * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
         * @param {Batchsigneds3uploadObject} [requests] An array of objects representing each request for a signed upload URL.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        batchSignedS3Upload: async (accessToken: string, bucketKey: string, useAcceleration?: boolean, minutesExpiration?: number, requests?: Batchsigneds3uploadObject,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bucketKey' is not null or undefined
            assertParamExists('batchSignedS3Upload', 'bucketKey', bucketKey)
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/batchsigneds3upload`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (useAcceleration !== undefined) {
                localVarQueryParameter['useAcceleration'] = useAcceleration;
            }

            if (minutesExpiration !== undefined) {
                localVarQueryParameter['minutesExpiration'] = minutesExpiration;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requests, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Requests OSS to assemble and reconstitute the object that was uploaded using signed S3 upload URL. You must call this operation only after all parts/chunks of the object has been uploaded.
         * @summary Complete Upload to S3 Signed URL
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {string} objectKey The URL-encoded human friendly name of the object.
         * @param {string} contentType Must be &#x60;&#x60;application/json&#x60;&#x60;.
         * @param {Completes3uploadBody} body 
         * @param {string} [xAdsMetaContentType] The Content-Type value for the uploaded object to record within OSS.
         * @param {string} [xAdsMetaContentDisposition] The Content-Disposition value for the uploaded object to record within OSS.
         * @param {string} [xAdsMetaContentEncoding] The Content-Encoding value for the uploaded object to record within OSS.
         * @param {string} [xAdsMetaCacheControl] The Cache-Control value for the uploaded object to record within OSS.
         * @param {string} [xAdsUserDefinedMetadata] Custom metadata to be stored with the object, which can be retrieved later on download or when retrieving object details. Must be a JSON object that is less than 100 bytes.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completeSignedS3Upload: async (accessToken: string, bucketKey: string, objectKey: string, contentType: string, body: Completes3uploadBody, xAdsMetaContentType?: string, xAdsMetaContentDisposition?: string, xAdsMetaContentEncoding?: string, xAdsMetaCacheControl?: string, xAdsUserDefinedMetadata?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bucketKey' is not null or undefined
            assertParamExists('completeSignedS3Upload', 'bucketKey', bucketKey)
            // verify required parameter 'objectKey' is not null or undefined
            assertParamExists('completeSignedS3Upload', 'objectKey', objectKey)
            // verify required parameter 'contentType' is not null or undefined
            assertParamExists('completeSignedS3Upload', 'contentType', contentType)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('completeSignedS3Upload', 'body', body)
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/{objectKey}/signeds3upload`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)))
                .replace(`{${"objectKey"}}`, encodeURIComponent(String(objectKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (contentType != null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            if (xAdsMetaContentType != null) {
                localVarHeaderParameter['x-ads-meta-Content-Type'] = String(xAdsMetaContentType);
            }

            if (xAdsMetaContentDisposition != null) {
                localVarHeaderParameter['x-ads-meta-Content-Disposition'] = String(xAdsMetaContentDisposition);
            }

            if (xAdsMetaContentEncoding != null) {
                localVarHeaderParameter['x-ads-meta-Content-Encoding'] = String(xAdsMetaContentEncoding);
            }

            if (xAdsMetaCacheControl != null) {
                localVarHeaderParameter['x-ads-meta-Cache-Control'] = String(xAdsMetaCacheControl);
            }

            if (xAdsUserDefinedMetadata != null) {
                localVarHeaderParameter['x-ads-user-defined-metadata'] = String(xAdsUserDefinedMetadata);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a copy of an object within the bucket.
         * @summary Copy Object
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {string} objectKey The URL-encoded human friendly name of the object.
         * @param {string} newObjName A URL-encoded human friendly name to identify the copied object.
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of &#x60;&#x60;true&#x60;&#x60;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        copyTo: async (accessToken: string, bucketKey: string, objectKey: string, newObjName: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bucketKey' is not null or undefined
            assertParamExists('copyTo', 'bucketKey', bucketKey)
            // verify required parameter 'objectKey' is not null or undefined
            assertParamExists('copyTo', 'objectKey', objectKey)
            // verify required parameter 'newObjName' is not null or undefined
            assertParamExists('copyTo', 'newObjName', newObjName)
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/{objectKey}/copyto/{newObjName}`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)))
                .replace(`{${"objectKey"}}`, encodeURIComponent(String(objectKey)))
                .replace(`{${"newObjName"}}`, encodeURIComponent(String(newObjName)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Generates a signed URL that can be used to download or upload an object within the specified expiration time. If the object the signed URL points to is deleted or expires before the signed URL expires, the signed URL will no longer be valid.  In addition to this operation that generates OSS signed URLs, OSS provides operations to generate S3 signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications.  Only the application that owns the bucket containing the object can call this operation. 
         * @summary Generate OSS Signed URL
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {string} objectKey The URL-encoded human friendly name of the object.
         * @param {Access} [access] 
         * @param {boolean} [useCdn] &#x60;&#x60;true&#x60;&#x60; : Returns a Cloudfront URL to the object instead of an Autodesk URL (one that points to a location on https://developer.api.autodesk.com). Applications can interact with the Cloudfront URL exactly like with any classic public resource in OSS. They can use GET requests to download objects or PUT requests to upload objects.  &#x60;&#x60;false&#x60;&#x60; : (Default) Returns an Autodesk URL (one that points to a location on https://developer.api.autodesk.com) to the object. 
         * @param {CreateSignedResource} [createSignedResource] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSignedResource: async (accessToken: string, bucketKey: string, objectKey: string, access?: Access, useCdn?: boolean, createSignedResource?: CreateSignedResource,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bucketKey' is not null or undefined
            assertParamExists('createSignedResource', 'bucketKey', bucketKey)
            // verify required parameter 'objectKey' is not null or undefined
            assertParamExists('createSignedResource', 'objectKey', objectKey)
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/{objectKey}/signed`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)))
                .replace(`{${"objectKey"}}`, encodeURIComponent(String(objectKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (access !== undefined) {
                localVarQueryParameter['access'] = access;
            }

            if (useCdn !== undefined) {
                localVarQueryParameter['useCdn'] = useCdn;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createSignedResource, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an object from the bucket.
         * @summary Delete Object
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {string} objectKey The URL-encoded human friendly name of the object.
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS API Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of &#x60;&#x60;true&#x60;&#x60;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteObject: async (accessToken: string, bucketKey: string, objectKey: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bucketKey' is not null or undefined
            assertParamExists('deleteObject', 'bucketKey', bucketKey)
            // verify required parameter 'objectKey' is not null or undefined
            assertParamExists('deleteObject', 'objectKey', objectKey)
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/{objectKey}`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)))
                .replace(`{${"objectKey"}}`, encodeURIComponent(String(objectKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete an object using an OSS signed URL to access it.  Only applications that own the bucket containing the object can call this operation.  
         * @summary Delete Object Using Signed URL
         * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
         * @param {Region} [xAdsRegion] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSignedResource: async (accessToken: string, hash: string, xAdsRegion?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('deleteSignedResource', 'hash', hash)
            const localVarPath = `/oss/v2/signedresources/{hash}`
                .replace(`{${"hash"}}`, encodeURIComponent(String(hash)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns detailed information about the specified object.
         * @summary Get Object Details
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {string} objectKey The URL-encoded human friendly name of the object.
         * @param {string} [ifModifiedSince] A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The requested data is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned. 
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of &#x60;&#x60;true&#x60;&#x60;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param {With} [_with] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getObjectDetails: async (accessToken: string, bucketKey: string, objectKey: string, ifModifiedSince?: string, _with?: With,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bucketKey' is not null or undefined
            assertParamExists('getObjectDetails', 'bucketKey', bucketKey)
            // verify required parameter 'objectKey' is not null or undefined
            assertParamExists('getObjectDetails', 'objectKey', objectKey)
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/{objectKey}/details`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)))
                .replace(`{${"objectKey"}}`, encodeURIComponent(String(objectKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (_with !== undefined) {
                localVarQueryParameter['with'] = _with;
            }

            if (ifModifiedSince != null) {
                localVarHeaderParameter['If-Modified-Since'] = typeof ifModifiedSince === 'string'
                    ? ifModifiedSince
                    : JSON.stringify(ifModifiedSince);
            }

    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list objects in the specified bucket.   Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error. 
         * @summary List Objects
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {number} [limit] The number of items you want per page. Acceptable values &#x3D; 1-100. Default &#x3D; 10. 
         * @param {string} [beginsWith] Filters the results by the value you specify. Only the objects with their &#x60;&#x60;objectKey&#x60;&#x60; beginning with the specified string are returned.
         * @param {string} [startAt] The ID of the last item that was returned in the previous result set.  It enables the system to return subsequent items starting from the next one after the specified ID. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getObjects: async (accessToken: string, bucketKey: string, limit?: number, beginsWith?: string, startAt?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bucketKey' is not null or undefined
            assertParamExists('getObjects', 'bucketKey', bucketKey)
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (beginsWith !== undefined) {
                localVarQueryParameter['beginsWith'] = beginsWith;
            }

            if (startAt !== undefined) {
                localVarQueryParameter['startAt'] = startAt;
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Downloads an object using an OSS signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/)  contains the ``hash`` URI parameter as well.  
         * @summary Download Object Using Signed URL
         * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
         * @param {string} [range] The byte range to download, specified in the form &#x60;&#x60;bytes&#x3D;&lt;START_BYTE&gt;-&lt;END_BYTE&gt;&#x60;&#x60;.
         * @param {string} [ifNoneMatch] The last known ETag value of the object. OSS returns the requested data  only if the &#x60;&#x60;If-None-Match&#x60;&#x60; header differs from the ETag value of the object on OSS, which indicates that the object on OSS is newer. If not, it returns a 304 \&quot;Not Modified\&quot; HTTP status.
         * @param {string} [ifModifiedSince] A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The requested data is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned. 
         * @param {string} [acceptEncoding] The compression format your prefer to receive the data. Possible values are:  - &#x60;&#x60;gzip&#x60;&#x60; - Use the gzip format  **Note:** You cannot use &#x60;&#x60;Accept-Encoding:gzip&#x60;&#x60; with a Range header containing an end byte range. OSS will not honor the End byte range if &#x60;&#x60;Accept-Encoding: gzip&#x60;&#x60; header is used. 
         * @param {Region} [region] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
         * @param {string} [responseContentDisposition] The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS.
         * @param {string} [responseContentType] The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSignedResource: async (accessToken: string, hash: string, range?: string, ifNoneMatch?: string, ifModifiedSince?: string, acceptEncoding?: string, region?: Region, responseContentDisposition?: string, responseContentType?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('getSignedResource', 'hash', hash)
            const localVarPath = `/oss/v2/signedresources/{hash}`
                .replace(`{${"hash"}}`, encodeURIComponent(String(hash)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }

            if (responseContentDisposition !== undefined) {
                localVarQueryParameter['response-content-disposition'] = responseContentDisposition;
            }

            if (responseContentType !== undefined) {
                localVarQueryParameter['response-content-type'] = responseContentType;
            }

            if (range != null) {
                localVarHeaderParameter['Range'] = String(range);
            }

            if (ifNoneMatch != null) {
                localVarHeaderParameter['If-None-Match'] = String(ifNoneMatch);
            }

            if (ifModifiedSince != null) {
                localVarHeaderParameter['If-Modified-Since'] = typeof ifModifiedSince === 'string'
                    ? ifModifiedSince
                    : JSON.stringify(ifModifiedSince);
            }

            if (acceptEncoding != null) {
                localVarHeaderParameter['Accept-Encoding'] = String(acceptEncoding);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a signed URL to download an object directly from S3, bypassing OSS servers. This signed URL expires in 2 minutes by default, but you can change this duration if needed.  You must start the download before the signed URL expires. The download itself can take longer. If the download fails after the validity period of the signed URL has elapsed, you can call this operation again to obtain a fresh signed URL.  Only applications that have read access to the object can call this operation.     You can use range headers with the signed download URL to download the object in chunks. This ability lets you download chunks in parallel, which can result in faster downloads.  If the object you want to download was uploaded in chunks and is still assembling on OSS, you will receive multiple S3 URLs instead of just one. Each URL will point to a chunk. If you prefer to receive a single URL, set the ``public-resource-fallback`` query parameter to ``true``. This setting will make OSS fallback to returning a single signed OSS URL, if assembling is still in progress.   In addition to this operation that generates S3 signed URLs, OSS provides an operation to generate OSS signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications. 
         * @summary Generate Signed S3 Download URL
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {string} objectKey The URL-encoded human friendly name of the object.
         * @param {string} [ifNoneMatch] The last known ETag value of the object. OSS returns the signed URL only if the &#x60;&#x60;If-None-Match&#x60;&#x60; header differs from the ETag value of the object on S3. If not, it returns a 304 \&quot;Not Modified\&quot; HTTP status.
         * @param {string} [ifModifiedSince] A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The signed URL is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned.
         * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
         * @param {string} [responseContentType] The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS.
         * @param {string} [responseContentDisposition] The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS.
         * @param {string} [responseCacheControl] The value of the Cache-Control header you want to receive when you download the object using the signed URL. If you do not specify a value, the Cache-Control header defaults to the value stored with OSS.
         * @param {boolean} [publicResourceFallback] Specifies how to return the signed URLs, in case the object was uploaded in chunks, and assembling of chunks is not yet complete.  - &#x60;&#x60;true&#x60;&#x60; : Return a single signed OSS URL. - &#x60;&#x60;false&#x60;&#x60; : (Default) Return multiple signed S3 URLs, where each URL points to a chunk. 
         * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
         * @param {boolean} [useCdn] &#x60;&#x60;true&#x60;&#x60; : Returns a URL that points to a CloudFront edge location.  &#x60;&#x60;false&#x60;&#x60; : (Default) Returns a URL that points directly to the S3 object. 
         * @param {boolean} [redirect] Generates a HTTP redirection response (Temporary Redirect 307​) using the generated URL.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signedS3Download: async (accessToken: string, bucketKey: string, objectKey: string, ifNoneMatch?: string, ifModifiedSince?: string,  responseContentType?: string, responseContentDisposition?: string, responseCacheControl?: string, publicResourceFallback?: boolean, minutesExpiration?: number, useCdn?: boolean,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bucketKey' is not null or undefined
            assertParamExists('signedS3Download', 'bucketKey', bucketKey)
            // verify required parameter 'objectKey' is not null or undefined
            assertParamExists('signedS3Download', 'objectKey', objectKey)
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/{objectKey}/signeds3download`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)))
                .replace(`{${"objectKey"}}`, encodeURIComponent(String(objectKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (responseContentType !== undefined) {
                localVarQueryParameter['response-content-type'] = responseContentType;
            }

            if (responseContentDisposition !== undefined) {
                localVarQueryParameter['response-content-disposition'] = responseContentDisposition;
            }

            if (responseCacheControl !== undefined) {
                localVarQueryParameter['response-cache-control'] = responseCacheControl;
            }

            if (publicResourceFallback !== undefined) {
                localVarQueryParameter['public-resource-fallback'] = publicResourceFallback;
            }

            if (minutesExpiration !== undefined) {
                localVarQueryParameter['minutesExpiration'] = minutesExpiration;
            }

            if (useCdn !== undefined) {
                localVarQueryParameter['useCdn'] = useCdn;
            }


            if (ifNoneMatch != null) {
                localVarHeaderParameter['If-None-Match'] = String(ifNoneMatch);
            }

            if (ifModifiedSince != null) {
                localVarHeaderParameter['If-Modified-Since'] = typeof ifModifiedSince === 'string'
                    ? ifModifiedSince
                    : JSON.stringify(ifModifiedSince);
            }
    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a signed URL to upload an object directly to S3, bypassing OSS servers. You can also request an array of signed URLs which lets you upload an object in chunks.  This signed URL expires in 2 minutes by default, but you can change this duration if needed.  You must start the upload before the signed URL expires. The upload itself can take longer. If the upload fails after the validity period of the signed URL has elapsed, you can call this operation again to obtain a fresh signed URL (or an array of signed URLs as the case may be). However, you must use the same ``uploadKey`` that was returned when you originally called this operation.   Only applications that own the bucket can call this operation.  **Note:** Once you upload all chunks you must call the [Complete Upload to S3 Signed URL](/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-POST/) operation to indicate completion. This instructs OSS to assemble the chunks and reconstitute the object on OSS. You must call this operation even when using a single signed URL.   In addition to this operation that generates S3 signed URLs, OSS provides an operation to generate OSS signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications.     
         * @summary Generate Signed S3 Upload URL
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {string} objectKey The URL-encoded human friendly name of the object.
         * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
         * @param {number} [parts] The number of parts you intend to chunk the object for uploading. OSS will return that many signed URLs, one URL for each chunk. If you do not specify a value you\&#39;ll get only one URL to upload the entire object.              
         * @param {number} [firstPart] The index of the first chunk to be uploaded.
         * @param {string} [uploadKey] The &#x60;&#x60;uploadKey&#x60;&#x60; of a previously-initiated upload, in order to request more chunk upload URLs for the same upload. If you do not specify a value, OSS will initiate a new upload entirely.
         * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
         * @param {boolean} [useAcceleration] &#x60;&#x60;true&#x60;&#x60; : (Default) Generates a faster S3 signed URL using Transfer Acceleration.  &#x60;&#x60;false&#x60;&#x60;: Generates a standard S3 signed URL. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signedS3Upload: async (accessToken: string, bucketKey: string, objectKey: string,  parts?: number, firstPart?: number, uploadKey?: string, minutesExpiration?: number, useAcceleration?: boolean,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bucketKey' is not null or undefined
            assertParamExists('signedS3Upload', 'bucketKey', bucketKey)
            // verify required parameter 'objectKey' is not null or undefined
            assertParamExists('signedS3Upload', 'objectKey', objectKey)
            const localVarPath = `/oss/v2/buckets/{bucketKey}/objects/{objectKey}/signeds3upload`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)))
                .replace(`{${"objectKey"}}`, encodeURIComponent(String(objectKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (parts !== undefined) {
                localVarQueryParameter['parts'] = parts;
            }

            if (firstPart !== undefined) {
                localVarQueryParameter['firstPart'] = firstPart;
            }

            if (uploadKey !== undefined) {
                localVarQueryParameter['uploadKey'] = uploadKey;
            }

            if (minutesExpiration !== undefined) {
                localVarQueryParameter['minutesExpiration'] = minutesExpiration;
            }

            if (useAcceleration !== undefined) {
                localVarQueryParameter['useAcceleration'] = useAcceleration;
            }

    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces an object that already exists on OSS, using an OSS signed URL.   The signed URL must fulfil the following conditions:  - The signed URL is valid (it has not expired as yet). - It was generated with ``write`` or ``readwrite`` for the ``access`` parameter. 
         * @summary Replace Object Using Signed URL
         * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
         * @param {number} contentLength The size of the data contained in the request body, in bytes.
         * @param {File} body The object to upload.
         * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
         * @param {string} [contentDisposition] The suggested file name to use when this object is downloaded as a file.
         * @param {Region} [xAdsRegion] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
         * @param {string} [ifMatch] The current value of the &#x60;&#x60;sha1&#x60;&#x60; attribute of the object you want to replace. OSS checks the &#x60;&#x60;If-Match&#x60;&#x60; header against the &#x60;&#x60;sha1&#x60;&#x60; attribute of the object in OSS. If they match, OSS allows the object to be overwritten. Otherwise, it means that the object on OSS has been modified since you retrieved the &#x60;&#x60;sha1&#x60;&#x60; and the request fails. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadSignedResource: async (accessToken: string, hash: string, contentLength: number, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: Region, ifMatch?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('uploadSignedResource', 'hash', hash)
            // verify required parameter 'contentLength' is not null or undefined
            assertParamExists('uploadSignedResource', 'contentLength', contentLength)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('uploadSignedResource', 'body', body)
            const localVarPath = `/oss/v2/signedresources/{hash}`
                .replace(`{${"hash"}}`, encodeURIComponent(String(hash)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (contentType != null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            if (contentLength != null) {
                localVarHeaderParameter['Content-Length'] = typeof contentLength === 'string'
                    ? contentLength
                    : JSON.stringify(contentLength);
            }

            if (contentDisposition != null) {
                localVarHeaderParameter['Content-Disposition'] = String(contentDisposition);
            }

            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }

            if (ifMatch != null) {
                localVarHeaderParameter['If-Match'] = String(ifMatch);
            }


            if (body !== undefined) { 
                localVarFormParams.set('body', body as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Performs a resumable upload using an OSS signed URL. Use this operation to upload an object in chunks.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains the ``hash`` as a URI parameter.  
         * @summary Upload Object Using Signed URL
         * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
         * @param {string} contentRange The byte range to upload, specified in the form &#x60;&#x60;bytes&#x3D;&lt;START_BYTE&gt;-&lt;END_BYTE&gt;&#x60;&#x60;.
         * @param {string} sessionId An ID to uniquely identify the file upload session.
         * @param {File} body The chunk to upload.
         * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
         * @param {string} [contentDisposition] The suggested file name to use when this object is downloaded as a file.
         * @param {Region} [xAdsRegion] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadSignedResourcesChunk: async (accessToken: string, hash: string, contentRange: string, sessionId: string, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('uploadSignedResourcesChunk', 'hash', hash)
            // verify required parameter 'contentRange' is not null or undefined
            assertParamExists('uploadSignedResourcesChunk', 'contentRange', contentRange)
            // verify required parameter 'sessionId' is not null or undefined
            assertParamExists('uploadSignedResourcesChunk', 'sessionId', sessionId)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('uploadSignedResourcesChunk', 'body', body)
            const localVarPath = `/oss/v2/signedresources/{hash}/resumable`
                .replace(`{${"hash"}}`, encodeURIComponent(String(hash)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (contentType != null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            if (contentRange != null) {
                localVarHeaderParameter['Content-Range'] = String(contentRange);
            }

            if (contentDisposition != null) {
                localVarHeaderParameter['Content-Disposition'] = String(contentDisposition);
            }

            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }

            if (sessionId != null) {
                localVarHeaderParameter['Session-Id'] = String(sessionId);
            }


            if (body !== undefined) { 
                localVarFormParams.set('body', body as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ObjectsApi - functional programming interface
 * @export
 */
export const ObjectsApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = ObjectsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Requests OSS to start reconstituting the set of objects that were uploaded using signed S3 upload URLs. You must call this operation only after all the objects have been uploaded.   You can specify up to 25 objects in this operation.  
         * @summary Complete Batch Upload to S3 Signed URLs
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {BatchcompleteuploadObject} [requests] An array of objects, each of which represents an upload to complete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async batchCompleteUpload(accessToken: string, bucketKey: string, requests?: BatchcompleteuploadObject, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BatchcompleteuploadResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.batchCompleteUpload(accessToken, bucketKey, requests,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Creates and returns signed URLs to download a set of objects directly from S3. These signed URLs expire in 2 minutes by default, but you can change this duration if needed.  You must start download the objects before the signed URLs expire. The download itself can take longer.  Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error. 
         * @summary Batch Generate Signed S3 Download URLs
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {Batchsigneds3downloadObject} requests An array of objects representing each request for a signed download URL.
         * @param {boolean} [publicResourceFallback] Specifies how to return the signed URLs, in case the object was uploaded in chunks, and assembling of chunks is not yet complete.  - &#x60;&#x60;true&#x60;&#x60; : Return a single signed OSS URL. - &#x60;&#x60;false&#x60;&#x60; : (Default) Return multiple signed S3 URLs, where each URL points to a chunk. 
         * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async batchSignedS3Download(accessToken: string, bucketKey: string, requests: Batchsigneds3downloadObject, publicResourceFallback?: boolean, minutesExpiration?: number, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Batchsigneds3downloadResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.batchSignedS3Download(accessToken, bucketKey, requests, publicResourceFallback, minutesExpiration,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Creates and returns signed URLs to upload a set of objects directly to S3. These signed URLs expire in 2 minutes by default, but you can change this duration if needed.  You must start uploading the objects before the signed URLs expire. The upload  itself can take longer.  Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error.  If required, you can request an array of signed URLs for each object, which lets you upload the objects in chunks. Once you upload all chunks you must call the [Complete Batch Upload to S3 Signed URL](/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-batchcompleteupload-POST/) operation to indicate completion. This instructs OSS to assemble the chunks and reconstitute the object on OSS. You must call this operation even if you requested a single signed URL for an object.  If an upload fails after the validity period of a signed URL has elapsed, you can call this operation again to obtain fresh signed URLs. However, you must use the same ``uploadKey`` that was returned when you originally called this operation.  
         * @summary Batch Generate Signed S3 Upload URLs
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {boolean} [useAcceleration] &#x60;&#x60;true&#x60;&#x60; : (Default) Generates a faster S3 signed URL using Transfer Acceleration.  &#x60;&#x60;false&#x60;&#x60;: Generates a standard S3 signed URL. 
         * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
         * @param {Batchsigneds3uploadObject} [requests] An array of objects representing each request for a signed upload URL.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async batchSignedS3Upload(accessToken: string, bucketKey: string, useAcceleration?: boolean, minutesExpiration?: number, requests?: Batchsigneds3uploadObject, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Batchsigneds3uploadResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.batchSignedS3Upload(accessToken, bucketKey, useAcceleration, minutesExpiration, requests,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Requests OSS to assemble and reconstitute the object that was uploaded using signed S3 upload URL. You must call this operation only after all parts/chunks of the object has been uploaded.
         * @summary Complete Upload to S3 Signed URL
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {string} objectKey The URL-encoded human friendly name of the object.
         * @param {string} contentType Must be &#x60;&#x60;application/json&#x60;&#x60;.
         * @param {Completes3uploadBody} body 
         * @param {string} [xAdsMetaContentType] The Content-Type value for the uploaded object to record within OSS.
         * @param {string} [xAdsMetaContentDisposition] The Content-Disposition value for the uploaded object to record within OSS.
         * @param {string} [xAdsMetaContentEncoding] The Content-Encoding value for the uploaded object to record within OSS.
         * @param {string} [xAdsMetaCacheControl] The Cache-Control value for the uploaded object to record within OSS.
         * @param {string} [xAdsUserDefinedMetadata] Custom metadata to be stored with the object, which can be retrieved later on download or when retrieving object details. Must be a JSON object that is less than 100 bytes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async completeSignedS3Upload(accessToken: string, bucketKey: string, objectKey: string, contentType: string, body: Completes3uploadBody, xAdsMetaContentType?: string, xAdsMetaContentDisposition?: string, xAdsMetaContentEncoding?: string, xAdsMetaCacheControl?: string, xAdsUserDefinedMetadata?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.completeSignedS3Upload(accessToken, bucketKey, objectKey, contentType, body, xAdsMetaContentType, xAdsMetaContentDisposition, xAdsMetaContentEncoding, xAdsMetaCacheControl, xAdsUserDefinedMetadata,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Creates a copy of an object within the bucket.
         * @summary Copy Object
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {string} objectKey The URL-encoded human friendly name of the object.
         * @param {string} newObjName A URL-encoded human friendly name to identify the copied object.
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of &#x60;&#x60;true&#x60;&#x60;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async copyTo(accessToken: string, bucketKey: string, objectKey: string, newObjName: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.copyTo(accessToken, bucketKey, objectKey, newObjName,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Generates a signed URL that can be used to download or upload an object within the specified expiration time. If the object the signed URL points to is deleted or expires before the signed URL expires, the signed URL will no longer be valid.  In addition to this operation that generates OSS signed URLs, OSS provides operations to generate S3 signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications.  Only the application that owns the bucket containing the object can call this operation. 
         * @summary Generate OSS Signed URL
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {string} objectKey The URL-encoded human friendly name of the object.
         * @param {Access} [access] 
         * @param {boolean} [useCdn] &#x60;&#x60;true&#x60;&#x60; : Returns a Cloudfront URL to the object instead of an Autodesk URL (one that points to a location on https://developer.api.autodesk.com). Applications can interact with the Cloudfront URL exactly like with any classic public resource in OSS. They can use GET requests to download objects or PUT requests to upload objects.  &#x60;&#x60;false&#x60;&#x60; : (Default) Returns an Autodesk URL (one that points to a location on https://developer.api.autodesk.com) to the object. 
         * @param {CreateSignedResource} [createSignedResource] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSignedResource(accessToken: string, bucketKey: string, objectKey: string, access?: Access, useCdn?: boolean, createSignedResource?: CreateSignedResource, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateObjectSigned>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSignedResource(accessToken, bucketKey, objectKey, access, useCdn, createSignedResource,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Deletes an object from the bucket.
         * @summary Delete Object
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {string} objectKey The URL-encoded human friendly name of the object.
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS API Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of &#x60;&#x60;true&#x60;&#x60;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteObject(accessToken: string, bucketKey: string, objectKey: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteObject(accessToken, bucketKey, objectKey,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Delete an object using an OSS signed URL to access it.  Only applications that own the bucket containing the object can call this operation.  
         * @summary Delete Object Using Signed URL
         * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
         * @param {Region} [xAdsRegion] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSignedResource(accessToken: string, hash: string, xAdsRegion?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSignedResource(accessToken, hash, xAdsRegion,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns detailed information about the specified object.
         * @summary Get Object Details
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {string} objectKey The URL-encoded human friendly name of the object.
         * @param {string} [ifModifiedSince] A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The requested data is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned. 
         * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
         * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of &#x60;&#x60;true&#x60;&#x60;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
         * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
         * @param {With} [_with] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getObjectDetails(accessToken: string, bucketKey: string, objectKey: string, ifModifiedSince?: string, _with?: With, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectFullDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getObjectDetails(accessToken, bucketKey, objectKey, ifModifiedSince, _with,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a list objects in the specified bucket.   Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error. 
         * @summary List Objects
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {number} [limit] The number of items you want per page. Acceptable values &#x3D; 1-100. Default &#x3D; 10. 
         * @param {string} [beginsWith] Filters the results by the value you specify. Only the objects with their &#x60;&#x60;objectKey&#x60;&#x60; beginning with the specified string are returned.
         * @param {string} [startAt] The ID of the last item that was returned in the previous result set.  It enables the system to return subsequent items starting from the next one after the specified ID. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getObjects(accessToken: string, bucketKey: string, limit?: number, beginsWith?: string, startAt?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BucketObjects>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getObjects(accessToken, bucketKey, limit, beginsWith, startAt,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Downloads an object using an OSS signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/)  contains the ``hash`` URI parameter as well.  
         * @summary Download Object Using Signed URL
         * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
         * @param {string} [range] The byte range to download, specified in the form &#x60;&#x60;bytes&#x3D;&lt;START_BYTE&gt;-&lt;END_BYTE&gt;&#x60;&#x60;.
         * @param {string} [ifNoneMatch] The last known ETag value of the object. OSS returns the requested data  only if the &#x60;&#x60;If-None-Match&#x60;&#x60; header differs from the ETag value of the object on OSS, which indicates that the object on OSS is newer. If not, it returns a 304 \&quot;Not Modified\&quot; HTTP status.
         * @param {string} [ifModifiedSince] A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The requested data is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned. 
         * @param {string} [acceptEncoding] The compression format your prefer to receive the data. Possible values are:  - &#x60;&#x60;gzip&#x60;&#x60; - Use the gzip format  **Note:** You cannot use &#x60;&#x60;Accept-Encoding:gzip&#x60;&#x60; with a Range header containing an end byte range. OSS will not honor the End byte range if &#x60;&#x60;Accept-Encoding: gzip&#x60;&#x60; header is used. 
         * @param {Region} [region] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
         * @param {string} [responseContentDisposition] The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS.
         * @param {string} [responseContentType] The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSignedResource(accessToken: string, hash: string, range?: string, ifNoneMatch?: string, ifModifiedSince?: string, acceptEncoding?: string, region?: Region, responseContentDisposition?: string, responseContentType?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<File>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSignedResource(accessToken, hash, range, ifNoneMatch, ifModifiedSince, acceptEncoding, region, responseContentDisposition, responseContentType,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Gets a signed URL to download an object directly from S3, bypassing OSS servers. This signed URL expires in 2 minutes by default, but you can change this duration if needed.  You must start the download before the signed URL expires. The download itself can take longer. If the download fails after the validity period of the signed URL has elapsed, you can call this operation again to obtain a fresh signed URL.  Only applications that have read access to the object can call this operation.     You can use range headers with the signed download URL to download the object in chunks. This ability lets you download chunks in parallel, which can result in faster downloads.  If the object you want to download was uploaded in chunks and is still assembling on OSS, you will receive multiple S3 URLs instead of just one. Each URL will point to a chunk. If you prefer to receive a single URL, set the ``public-resource-fallback`` query parameter to ``true``. This setting will make OSS fallback to returning a single signed OSS URL, if assembling is still in progress.   In addition to this operation that generates S3 signed URLs, OSS provides an operation to generate OSS signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications. 
         * @summary Generate Signed S3 Download URL
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {string} objectKey The URL-encoded human friendly name of the object.
         * @param {string} [ifNoneMatch] The last known ETag value of the object. OSS returns the signed URL only if the &#x60;&#x60;If-None-Match&#x60;&#x60; header differs from the ETag value of the object on S3. If not, it returns a 304 \&quot;Not Modified\&quot; HTTP status.
         * @param {string} [ifModifiedSince] A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The signed URL is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned.
         * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
         * @param {string} [responseContentType] The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS.
         * @param {string} [responseContentDisposition] The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS.
         * @param {string} [responseCacheControl] The value of the Cache-Control header you want to receive when you download the object using the signed URL. If you do not specify a value, the Cache-Control header defaults to the value stored with OSS.
         * @param {boolean} [publicResourceFallback] Specifies how to return the signed URLs, in case the object was uploaded in chunks, and assembling of chunks is not yet complete.  - &#x60;&#x60;true&#x60;&#x60; : Return a single signed OSS URL. - &#x60;&#x60;false&#x60;&#x60; : (Default) Return multiple signed S3 URLs, where each URL points to a chunk. 
         * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
         * @param {boolean} [useCdn] &#x60;&#x60;true&#x60;&#x60; : Returns a URL that points to a CloudFront edge location.  &#x60;&#x60;false&#x60;&#x60; : (Default) Returns a URL that points directly to the S3 object. 
         * @param {boolean} [redirect] Generates a HTTP redirection response (Temporary Redirect 307​) using the generated URL.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signedS3Download(accessToken: string, bucketKey: string, objectKey: string, ifNoneMatch?: string, ifModifiedSince?: string,  responseContentType?: string, responseContentDisposition?: string, responseCacheControl?: string, publicResourceFallback?: boolean, minutesExpiration?: number, useCdn?: boolean, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Signeds3downloadResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signedS3Download(accessToken, bucketKey, objectKey, ifNoneMatch, ifModifiedSince, responseContentType, responseContentDisposition, responseCacheControl, publicResourceFallback, minutesExpiration, useCdn,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Gets a signed URL to upload an object directly to S3, bypassing OSS servers. You can also request an array of signed URLs which lets you upload an object in chunks.  This signed URL expires in 2 minutes by default, but you can change this duration if needed.  You must start the upload before the signed URL expires. The upload itself can take longer. If the upload fails after the validity period of the signed URL has elapsed, you can call this operation again to obtain a fresh signed URL (or an array of signed URLs as the case may be). However, you must use the same ``uploadKey`` that was returned when you originally called this operation.   Only applications that own the bucket can call this operation.  **Note:** Once you upload all chunks you must call the [Complete Upload to S3 Signed URL](/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-POST/) operation to indicate completion. This instructs OSS to assemble the chunks and reconstitute the object on OSS. You must call this operation even when using a single signed URL.   In addition to this operation that generates S3 signed URLs, OSS provides an operation to generate OSS signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications.     
         * @summary Generate Signed S3 Upload URL
         * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
         * @param {string} objectKey The URL-encoded human friendly name of the object.
         * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
         * @param {number} [parts] The number of parts you intend to chunk the object for uploading. OSS will return that many signed URLs, one URL for each chunk. If you do not specify a value you\&#39;ll get only one URL to upload the entire object.              
         * @param {number} [firstPart] The index of the first chunk to be uploaded.
         * @param {string} [uploadKey] The &#x60;&#x60;uploadKey&#x60;&#x60; of a previously-initiated upload, in order to request more chunk upload URLs for the same upload. If you do not specify a value, OSS will initiate a new upload entirely.
         * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
         * @param {boolean} [useAcceleration] &#x60;&#x60;true&#x60;&#x60; : (Default) Generates a faster S3 signed URL using Transfer Acceleration.  &#x60;&#x60;false&#x60;&#x60;: Generates a standard S3 signed URL. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signedS3Upload(accessToken: string, bucketKey: string, objectKey: string,  parts?: number, firstPart?: number, uploadKey?: string, minutesExpiration?: number, useAcceleration?: boolean, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Signeds3uploadResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signedS3Upload(accessToken, bucketKey, objectKey, parts, firstPart, uploadKey, minutesExpiration, useAcceleration,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Replaces an object that already exists on OSS, using an OSS signed URL.   The signed URL must fulfil the following conditions:  - The signed URL is valid (it has not expired as yet). - It was generated with ``write`` or ``readwrite`` for the ``access`` parameter. 
         * @summary Replace Object Using Signed URL
         * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
         * @param {number} contentLength The size of the data contained in the request body, in bytes.
         * @param {File} body The object to upload.
         * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
         * @param {string} [contentDisposition] The suggested file name to use when this object is downloaded as a file.
         * @param {Region} [xAdsRegion] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
         * @param {string} [ifMatch] The current value of the &#x60;&#x60;sha1&#x60;&#x60; attribute of the object you want to replace. OSS checks the &#x60;&#x60;If-Match&#x60;&#x60; header against the &#x60;&#x60;sha1&#x60;&#x60; attribute of the object in OSS. If they match, OSS allows the object to be overwritten. Otherwise, it means that the object on OSS has been modified since you retrieved the &#x60;&#x60;sha1&#x60;&#x60; and the request fails. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadSignedResource(accessToken: string, hash: string, contentLength: number, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: Region, ifMatch?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadSignedResource(accessToken, hash, contentLength, body, contentType, contentDisposition, xAdsRegion, ifMatch,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Performs a resumable upload using an OSS signed URL. Use this operation to upload an object in chunks.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains the ``hash`` as a URI parameter.  
         * @summary Upload Object Using Signed URL
         * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
         * @param {string} contentRange The byte range to upload, specified in the form &#x60;&#x60;bytes&#x3D;&lt;START_BYTE&gt;-&lt;END_BYTE&gt;&#x60;&#x60;.
         * @param {string} sessionId An ID to uniquely identify the file upload session.
         * @param {File} body The chunk to upload.
         * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
         * @param {string} [contentDisposition] The suggested file name to use when this object is downloaded as a file.
         * @param {Region} [xAdsRegion] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadSignedResourcesChunk(accessToken: string, hash: string, contentRange: string, sessionId: string, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadSignedResourcesChunk(accessToken, hash, contentRange, sessionId, body, contentType, contentDisposition, xAdsRegion,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * ObjectsApi - interface
 * @export
 * @interface ObjectsApi
 */
export interface ObjectsApiInterface {
    /**
     * Requests OSS to start reconstituting the set of objects that were uploaded using signed S3 upload URLs. You must call this operation only after all the objects have been uploaded.   You can specify up to 25 objects in this operation.  
     * @summary Complete Batch Upload to S3 Signed URLs
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {BatchcompleteuploadObject} [requests] An array of objects, each of which represents an upload to complete.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApiInterface
     */
    batchCompleteUpload(accessToken: string,bucketKey: string, requests?: BatchcompleteuploadObject,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Creates and returns signed URLs to download a set of objects directly from S3. These signed URLs expire in 2 minutes by default, but you can change this duration if needed.  You must start download the objects before the signed URLs expire. The download itself can take longer.  Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error. 
     * @summary Batch Generate Signed S3 Download URLs
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {Batchsigneds3downloadObject} requests An array of objects representing each request for a signed download URL.
     * @param {boolean} [publicResourceFallback] Specifies how to return the signed URLs, in case the object was uploaded in chunks, and assembling of chunks is not yet complete.  - &#x60;&#x60;true&#x60;&#x60; : Return a single signed OSS URL. - &#x60;&#x60;false&#x60;&#x60; : (Default) Return multiple signed S3 URLs, where each URL points to a chunk. 
     * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApiInterface
     */
    batchSignedS3Download(accessToken: string,bucketKey: string, requests: Batchsigneds3downloadObject, publicResourceFallback?: boolean, minutesExpiration?: number,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Creates and returns signed URLs to upload a set of objects directly to S3. These signed URLs expire in 2 minutes by default, but you can change this duration if needed.  You must start uploading the objects before the signed URLs expire. The upload  itself can take longer.  Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error.  If required, you can request an array of signed URLs for each object, which lets you upload the objects in chunks. Once you upload all chunks you must call the [Complete Batch Upload to S3 Signed URL](/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-batchcompleteupload-POST/) operation to indicate completion. This instructs OSS to assemble the chunks and reconstitute the object on OSS. You must call this operation even if you requested a single signed URL for an object.  If an upload fails after the validity period of a signed URL has elapsed, you can call this operation again to obtain fresh signed URLs. However, you must use the same ``uploadKey`` that was returned when you originally called this operation.  
     * @summary Batch Generate Signed S3 Upload URLs
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {boolean} [useAcceleration] &#x60;&#x60;true&#x60;&#x60; : (Default) Generates a faster S3 signed URL using Transfer Acceleration.  &#x60;&#x60;false&#x60;&#x60;: Generates a standard S3 signed URL. 
     * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
     * @param {Batchsigneds3uploadObject} [requests] An array of objects representing each request for a signed upload URL.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApiInterface
     */
    batchSignedS3Upload(accessToken: string,bucketKey: string, useAcceleration?: boolean, minutesExpiration?: number, requests?: Batchsigneds3uploadObject,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Requests OSS to assemble and reconstitute the object that was uploaded using signed S3 upload URL. You must call this operation only after all parts/chunks of the object has been uploaded.
     * @summary Complete Upload to S3 Signed URL
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {string} objectKey The URL-encoded human friendly name of the object.
     * @param {string} contentType Must be &#x60;&#x60;application/json&#x60;&#x60;.
     * @param {Completes3uploadBody} body 
     * @param {string} [xAdsMetaContentType] The Content-Type value for the uploaded object to record within OSS.
     * @param {string} [xAdsMetaContentDisposition] The Content-Disposition value for the uploaded object to record within OSS.
     * @param {string} [xAdsMetaContentEncoding] The Content-Encoding value for the uploaded object to record within OSS.
     * @param {string} [xAdsMetaCacheControl] The Cache-Control value for the uploaded object to record within OSS.
     * @param {string} [xAdsUserDefinedMetadata] Custom metadata to be stored with the object, which can be retrieved later on download or when retrieving object details. Must be a JSON object that is less than 100 bytes.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApiInterface
     */
    completeSignedS3Upload(accessToken: string,bucketKey: string, objectKey: string, contentType: string, body: Completes3uploadBody, xAdsMetaContentType?: string, xAdsMetaContentDisposition?: string, xAdsMetaContentEncoding?: string, xAdsMetaCacheControl?: string, xAdsUserDefinedMetadata?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Creates a copy of an object within the bucket.
     * @summary Copy Object
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {string} objectKey The URL-encoded human friendly name of the object.
     * @param {string} newObjName A URL-encoded human friendly name to identify the copied object.
     * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
     * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of &#x60;&#x60;true&#x60;&#x60;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
     * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApiInterface
     */
    copyTo(accessToken: string,bucketKey: string, objectKey: string, newObjName: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Generates a signed URL that can be used to download or upload an object within the specified expiration time. If the object the signed URL points to is deleted or expires before the signed URL expires, the signed URL will no longer be valid.  In addition to this operation that generates OSS signed URLs, OSS provides operations to generate S3 signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications.  Only the application that owns the bucket containing the object can call this operation. 
     * @summary Generate OSS Signed URL
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {string} objectKey The URL-encoded human friendly name of the object.
     * @param {Access} [access] 
     * @param {boolean} [useCdn] &#x60;&#x60;true&#x60;&#x60; : Returns a Cloudfront URL to the object instead of an Autodesk URL (one that points to a location on https://developer.api.autodesk.com). Applications can interact with the Cloudfront URL exactly like with any classic public resource in OSS. They can use GET requests to download objects or PUT requests to upload objects.  &#x60;&#x60;false&#x60;&#x60; : (Default) Returns an Autodesk URL (one that points to a location on https://developer.api.autodesk.com) to the object. 
     * @param {CreateSignedResource} [createSignedResource] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApiInterface
     */
    createSignedResource(accessToken: string,bucketKey: string, objectKey: string, access?: Access, useCdn?: boolean, createSignedResource?: CreateSignedResource,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Deletes an object from the bucket.
     * @summary Delete Object
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {string} objectKey The URL-encoded human friendly name of the object.
     * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
     * @param {string} [xAdsAcmCheckGroups] Informs the OSS API Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of &#x60;&#x60;true&#x60;&#x60;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
     * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApiInterface
     */
    deleteObject(accessToken: string,bucketKey: string, objectKey: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Delete an object using an OSS signed URL to access it.  Only applications that own the bucket containing the object can call this operation.  
     * @summary Delete Object Using Signed URL
     * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
     * @param {Region} [xAdsRegion] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApiInterface
     */
    deleteSignedResource(accessToken: string,hash: string, xAdsRegion?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns detailed information about the specified object.
     * @summary Get Object Details
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {string} objectKey The URL-encoded human friendly name of the object.
     * @param {string} [ifModifiedSince] A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The requested data is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned. 
     * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
     * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of &#x60;&#x60;true&#x60;&#x60;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
     * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
     * @param {With} [_with] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApiInterface
     */
    getObjectDetails(accessToken: string,bucketKey: string, objectKey: string, ifModifiedSince?: string, _with?: With,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a list objects in the specified bucket.   Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error. 
     * @summary List Objects
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {number} [limit] The number of items you want per page. Acceptable values &#x3D; 1-100. Default &#x3D; 10. 
     * @param {string} [beginsWith] Filters the results by the value you specify. Only the objects with their &#x60;&#x60;objectKey&#x60;&#x60; beginning with the specified string are returned.
     * @param {string} [startAt] The ID of the last item that was returned in the previous result set.  It enables the system to return subsequent items starting from the next one after the specified ID. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApiInterface
     */
    getObjects(accessToken: string,bucketKey: string, limit?: number, beginsWith?: string, startAt?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Downloads an object using an OSS signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/)  contains the ``hash`` URI parameter as well.  
     * @summary Download Object Using Signed URL
     * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
     * @param {string} [range] The byte range to download, specified in the form &#x60;&#x60;bytes&#x3D;&lt;START_BYTE&gt;-&lt;END_BYTE&gt;&#x60;&#x60;.
     * @param {string} [ifNoneMatch] The last known ETag value of the object. OSS returns the requested data  only if the &#x60;&#x60;If-None-Match&#x60;&#x60; header differs from the ETag value of the object on OSS, which indicates that the object on OSS is newer. If not, it returns a 304 \&quot;Not Modified\&quot; HTTP status.
     * @param {string} [ifModifiedSince] A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The requested data is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned. 
     * @param {string} [acceptEncoding] The compression format your prefer to receive the data. Possible values are:  - &#x60;&#x60;gzip&#x60;&#x60; - Use the gzip format  **Note:** You cannot use &#x60;&#x60;Accept-Encoding:gzip&#x60;&#x60; with a Range header containing an end byte range. OSS will not honor the End byte range if &#x60;&#x60;Accept-Encoding: gzip&#x60;&#x60; header is used. 
     * @param {Region} [region] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
     * @param {string} [responseContentDisposition] The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS.
     * @param {string} [responseContentType] The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApiInterface
     */
    getSignedResource(accessToken: string,hash: string, range?: string, ifNoneMatch?: string, ifModifiedSince?: string, acceptEncoding?: string, region?: Region, responseContentDisposition?: string, responseContentType?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Gets a signed URL to download an object directly from S3, bypassing OSS servers. This signed URL expires in 2 minutes by default, but you can change this duration if needed.  You must start the download before the signed URL expires. The download itself can take longer. If the download fails after the validity period of the signed URL has elapsed, you can call this operation again to obtain a fresh signed URL.  Only applications that have read access to the object can call this operation.     You can use range headers with the signed download URL to download the object in chunks. This ability lets you download chunks in parallel, which can result in faster downloads.  If the object you want to download was uploaded in chunks and is still assembling on OSS, you will receive multiple S3 URLs instead of just one. Each URL will point to a chunk. If you prefer to receive a single URL, set the ``public-resource-fallback`` query parameter to ``true``. This setting will make OSS fallback to returning a single signed OSS URL, if assembling is still in progress.   In addition to this operation that generates S3 signed URLs, OSS provides an operation to generate OSS signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications. 
     * @summary Generate Signed S3 Download URL
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {string} objectKey The URL-encoded human friendly name of the object.
     * @param {string} [ifNoneMatch] The last known ETag value of the object. OSS returns the signed URL only if the &#x60;&#x60;If-None-Match&#x60;&#x60; header differs from the ETag value of the object on S3. If not, it returns a 304 \&quot;Not Modified\&quot; HTTP status.
     * @param {string} [ifModifiedSince] A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The signed URL is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned.
     * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
     * @param {string} [responseContentType] The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS.
     * @param {string} [responseContentDisposition] The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS.
     * @param {string} [responseCacheControl] The value of the Cache-Control header you want to receive when you download the object using the signed URL. If you do not specify a value, the Cache-Control header defaults to the value stored with OSS.
     * @param {boolean} [publicResourceFallback] Specifies how to return the signed URLs, in case the object was uploaded in chunks, and assembling of chunks is not yet complete.  - &#x60;&#x60;true&#x60;&#x60; : Return a single signed OSS URL. - &#x60;&#x60;false&#x60;&#x60; : (Default) Return multiple signed S3 URLs, where each URL points to a chunk. 
     * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
     * @param {boolean} [useCdn] &#x60;&#x60;true&#x60;&#x60; : Returns a URL that points to a CloudFront edge location.  &#x60;&#x60;false&#x60;&#x60; : (Default) Returns a URL that points directly to the S3 object. 
     * @param {boolean} [redirect] Generates a HTTP redirection response (Temporary Redirect 307​) using the generated URL.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApiInterface
     */
    signedS3Download(accessToken: string,bucketKey: string, objectKey: string, ifNoneMatch?: string, ifModifiedSince?: string,  responseContentType?: string, responseContentDisposition?: string, responseCacheControl?: string, publicResourceFallback?: boolean, minutesExpiration?: number, useCdn?: boolean,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Gets a signed URL to upload an object directly to S3, bypassing OSS servers. You can also request an array of signed URLs which lets you upload an object in chunks.  This signed URL expires in 2 minutes by default, but you can change this duration if needed.  You must start the upload before the signed URL expires. The upload itself can take longer. If the upload fails after the validity period of the signed URL has elapsed, you can call this operation again to obtain a fresh signed URL (or an array of signed URLs as the case may be). However, you must use the same ``uploadKey`` that was returned when you originally called this operation.   Only applications that own the bucket can call this operation.  **Note:** Once you upload all chunks you must call the [Complete Upload to S3 Signed URL](/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-POST/) operation to indicate completion. This instructs OSS to assemble the chunks and reconstitute the object on OSS. You must call this operation even when using a single signed URL.   In addition to this operation that generates S3 signed URLs, OSS provides an operation to generate OSS signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications.     
     * @summary Generate Signed S3 Upload URL
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {string} objectKey The URL-encoded human friendly name of the object.
     * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
     * @param {number} [parts] The number of parts you intend to chunk the object for uploading. OSS will return that many signed URLs, one URL for each chunk. If you do not specify a value you\&#39;ll get only one URL to upload the entire object.              
     * @param {number} [firstPart] The index of the first chunk to be uploaded.
     * @param {string} [uploadKey] The &#x60;&#x60;uploadKey&#x60;&#x60; of a previously-initiated upload, in order to request more chunk upload URLs for the same upload. If you do not specify a value, OSS will initiate a new upload entirely.
     * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
     * @param {boolean} [useAcceleration] &#x60;&#x60;true&#x60;&#x60; : (Default) Generates a faster S3 signed URL using Transfer Acceleration.  &#x60;&#x60;false&#x60;&#x60;: Generates a standard S3 signed URL. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApiInterface
     */
    signedS3Upload(accessToken: string,bucketKey: string, objectKey: string,  parts?: number, firstPart?: number, uploadKey?: string, minutesExpiration?: number, useAcceleration?: boolean,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Replaces an object that already exists on OSS, using an OSS signed URL.   The signed URL must fulfil the following conditions:  - The signed URL is valid (it has not expired as yet). - It was generated with ``write`` or ``readwrite`` for the ``access`` parameter. 
     * @summary Replace Object Using Signed URL
     * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
     * @param {number} contentLength The size of the data contained in the request body, in bytes.
     * @param {File} body The object to upload.
     * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
     * @param {string} [contentDisposition] The suggested file name to use when this object is downloaded as a file.
     * @param {Region} [xAdsRegion] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
     * @param {string} [ifMatch] The current value of the &#x60;&#x60;sha1&#x60;&#x60; attribute of the object you want to replace. OSS checks the &#x60;&#x60;If-Match&#x60;&#x60; header against the &#x60;&#x60;sha1&#x60;&#x60; attribute of the object in OSS. If they match, OSS allows the object to be overwritten. Otherwise, it means that the object on OSS has been modified since you retrieved the &#x60;&#x60;sha1&#x60;&#x60; and the request fails. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApiInterface
     */
    uploadSignedResource(accessToken: string,hash: string, contentLength: number, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: Region, ifMatch?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Performs a resumable upload using an OSS signed URL. Use this operation to upload an object in chunks.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains the ``hash`` as a URI parameter.  
     * @summary Upload Object Using Signed URL
     * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
     * @param {string} contentRange The byte range to upload, specified in the form &#x60;&#x60;bytes&#x3D;&lt;START_BYTE&gt;-&lt;END_BYTE&gt;&#x60;&#x60;.
     * @param {string} sessionId An ID to uniquely identify the file upload session.
     * @param {File} body The chunk to upload.
     * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
     * @param {string} [contentDisposition] The suggested file name to use when this object is downloaded as a file.
     * @param {Region} [xAdsRegion] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApiInterface
     */
    uploadSignedResourcesChunk(accessToken: string,hash: string, contentRange: string, sessionId: string, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * ObjectsApi - object-oriented interface
 * @export
 * @class ObjectsApi
 * @extends {BaseApi}
 */
export class ObjectsApi extends BaseApi implements ObjectsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Requests OSS to start reconstituting the set of objects that were uploaded using signed S3 upload URLs. You must call this operation only after all the objects have been uploaded.   You can specify up to 25 objects in this operation.  
     * @summary Complete Batch Upload to S3 Signed URLs
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {BatchcompleteuploadObject} [requests] An array of objects, each of which represents an upload to complete.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public async batchCompleteUpload(accessToken: string, bucketKey: string, requests?: BatchcompleteuploadObject, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into batchCompleteUpload ");
      try {
        const request =  await ObjectsApiFp(this.sdkManager).batchCompleteUpload(accessToken, bucketKey, requests,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`batchCompleteUpload Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`batchCompleteUpload Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new OssApiError(`batchCompleteUpload Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`batchCompleteUpload Request failed with no response received: ${error.request}`);
            throw new OssApiError(`batchCompleteUpload Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Creates and returns signed URLs to download a set of objects directly from S3. These signed URLs expire in 2 minutes by default, but you can change this duration if needed.  You must start download the objects before the signed URLs expire. The download itself can take longer.  Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error. 
     * @summary Batch Generate Signed S3 Download URLs
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {Batchsigneds3downloadObject} requests An array of objects representing each request for a signed download URL.
     * @param {boolean} [publicResourceFallback] Specifies how to return the signed URLs, in case the object was uploaded in chunks, and assembling of chunks is not yet complete.  - &#x60;&#x60;true&#x60;&#x60; : Return a single signed OSS URL. - &#x60;&#x60;false&#x60;&#x60; : (Default) Return multiple signed S3 URLs, where each URL points to a chunk. 
     * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public async batchSignedS3Download(accessToken: string, bucketKey: string, requests: Batchsigneds3downloadObject, publicResourceFallback?: boolean, minutesExpiration?: number, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into batchSignedS3Download ");
      try {
        const request =  await ObjectsApiFp(this.sdkManager).batchSignedS3Download(accessToken, bucketKey, requests, publicResourceFallback, minutesExpiration,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`batchSignedS3Download Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`batchSignedS3Download Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new OssApiError(`batchSignedS3Download Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`batchSignedS3Download Request failed with no response received: ${error.request}`);
            throw new OssApiError(`batchSignedS3Download Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Creates and returns signed URLs to upload a set of objects directly to S3. These signed URLs expire in 2 minutes by default, but you can change this duration if needed.  You must start uploading the objects before the signed URLs expire. The upload  itself can take longer.  Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error.  If required, you can request an array of signed URLs for each object, which lets you upload the objects in chunks. Once you upload all chunks you must call the [Complete Batch Upload to S3 Signed URL](/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-batchcompleteupload-POST/) operation to indicate completion. This instructs OSS to assemble the chunks and reconstitute the object on OSS. You must call this operation even if you requested a single signed URL for an object.  If an upload fails after the validity period of a signed URL has elapsed, you can call this operation again to obtain fresh signed URLs. However, you must use the same ``uploadKey`` that was returned when you originally called this operation.  
     * @summary Batch Generate Signed S3 Upload URLs
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {boolean} [useAcceleration] &#x60;&#x60;true&#x60;&#x60; : (Default) Generates a faster S3 signed URL using Transfer Acceleration.  &#x60;&#x60;false&#x60;&#x60;: Generates a standard S3 signed URL. 
     * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
     * @param {Batchsigneds3uploadObject} [requests] An array of objects representing each request for a signed upload URL.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public async batchSignedS3Upload(accessToken: string, bucketKey: string, useAcceleration?: boolean, minutesExpiration?: number, requests?: Batchsigneds3uploadObject, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into batchSignedS3Upload ");
      try {
        const request =  await ObjectsApiFp(this.sdkManager).batchSignedS3Upload(accessToken, bucketKey, useAcceleration, minutesExpiration, requests,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`batchSignedS3Upload Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`batchSignedS3Upload Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new OssApiError(`batchSignedS3Upload Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`batchSignedS3Upload Request failed with no response received: ${error.request}`);
            throw new OssApiError(`batchSignedS3Upload Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Requests OSS to assemble and reconstitute the object that was uploaded using signed S3 upload URL. You must call this operation only after all parts/chunks of the object has been uploaded.
     * @summary Complete Upload to S3 Signed URL
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {string} objectKey The URL-encoded human friendly name of the object.
     * @param {string} contentType Must be &#x60;&#x60;application/json&#x60;&#x60;.
     * @param {Completes3uploadBody} body 
     * @param {string} [xAdsMetaContentType] The Content-Type value for the uploaded object to record within OSS.
     * @param {string} [xAdsMetaContentDisposition] The Content-Disposition value for the uploaded object to record within OSS.
     * @param {string} [xAdsMetaContentEncoding] The Content-Encoding value for the uploaded object to record within OSS.
     * @param {string} [xAdsMetaCacheControl] The Cache-Control value for the uploaded object to record within OSS.
     * @param {string} [xAdsUserDefinedMetadata] Custom metadata to be stored with the object, which can be retrieved later on download or when retrieving object details. Must be a JSON object that is less than 100 bytes.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public async completeSignedS3Upload(accessToken: string, bucketKey: string, objectKey: string, contentType: string, body: Completes3uploadBody, xAdsMetaContentType?: string, xAdsMetaContentDisposition?: string, xAdsMetaContentEncoding?: string, xAdsMetaCacheControl?: string, xAdsUserDefinedMetadata?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into completeSignedS3Upload ");
      try {
        const request =  await ObjectsApiFp(this.sdkManager).completeSignedS3Upload(accessToken, bucketKey, objectKey, contentType, body, xAdsMetaContentType, xAdsMetaContentDisposition, xAdsMetaContentEncoding, xAdsMetaCacheControl, xAdsUserDefinedMetadata,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`completeSignedS3Upload Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`completeSignedS3Upload Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new OssApiError(`completeSignedS3Upload Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`completeSignedS3Upload Request failed with no response received: ${error.request}`);
            throw new OssApiError(`completeSignedS3Upload Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Creates a copy of an object within the bucket.
     * @summary Copy Object
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {string} objectKey The URL-encoded human friendly name of the object.
     * @param {string} newObjName A URL-encoded human friendly name to identify the copied object.
     * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
     * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of &#x60;&#x60;true&#x60;&#x60;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
     * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public async copyTo(accessToken: string, bucketKey: string, objectKey: string, newObjName: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into copyTo ");
      try {
        const request =  await ObjectsApiFp(this.sdkManager).copyTo(accessToken, bucketKey, objectKey, newObjName,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`copyTo Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`copyTo Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new OssApiError(`copyTo Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`copyTo Request failed with no response received: ${error.request}`);
            throw new OssApiError(`copyTo Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Generates a signed URL that can be used to download or upload an object within the specified expiration time. If the object the signed URL points to is deleted or expires before the signed URL expires, the signed URL will no longer be valid.  In addition to this operation that generates OSS signed URLs, OSS provides operations to generate S3 signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications.  Only the application that owns the bucket containing the object can call this operation. 
     * @summary Generate OSS Signed URL
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {string} objectKey The URL-encoded human friendly name of the object.
     * @param {Access} [access] 
     * @param {boolean} [useCdn] &#x60;&#x60;true&#x60;&#x60; : Returns a Cloudfront URL to the object instead of an Autodesk URL (one that points to a location on https://developer.api.autodesk.com). Applications can interact with the Cloudfront URL exactly like with any classic public resource in OSS. They can use GET requests to download objects or PUT requests to upload objects.  &#x60;&#x60;false&#x60;&#x60; : (Default) Returns an Autodesk URL (one that points to a location on https://developer.api.autodesk.com) to the object. 
     * @param {CreateSignedResource} [createSignedResource] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public async createSignedResource(accessToken: string, bucketKey: string, objectKey: string, access?: Access, useCdn?: boolean, createSignedResource?: CreateSignedResource, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createSignedResource ");
      try {
        const request =  await ObjectsApiFp(this.sdkManager).createSignedResource(accessToken, bucketKey, objectKey, access, useCdn, createSignedResource,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createSignedResource Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createSignedResource Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new OssApiError(`createSignedResource Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createSignedResource Request failed with no response received: ${error.request}`);
            throw new OssApiError(`createSignedResource Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Deletes an object from the bucket.
     * @summary Delete Object
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {string} objectKey The URL-encoded human friendly name of the object.
     * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
     * @param {string} [xAdsAcmCheckGroups] Informs the OSS API Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of &#x60;&#x60;true&#x60;&#x60;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
     * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public async deleteObject(accessToken: string, bucketKey: string, objectKey: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into deleteObject ");
      try {
        const request =  await ObjectsApiFp(this.sdkManager).deleteObject(accessToken, bucketKey, objectKey,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`deleteObject Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`deleteObject Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new OssApiError(`deleteObject Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`deleteObject Request failed with no response received: ${error.request}`);
            throw new OssApiError(`deleteObject Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Delete an object using an OSS signed URL to access it.  Only applications that own the bucket containing the object can call this operation.  
     * @summary Delete Object Using Signed URL
     * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
     * @param {Region} [xAdsRegion] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public async deleteSignedResource(accessToken: string, hash: string, xAdsRegion?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into deleteSignedResource ");
      try {
        const request =  await ObjectsApiFp(this.sdkManager).deleteSignedResource(accessToken, hash, xAdsRegion,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`deleteSignedResource Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`deleteSignedResource Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new OssApiError(`deleteSignedResource Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`deleteSignedResource Request failed with no response received: ${error.request}`);
            throw new OssApiError(`deleteSignedResource Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns detailed information about the specified object.
     * @summary Get Object Details
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {string} objectKey The URL-encoded human friendly name of the object.
     * @param {string} [ifModifiedSince] A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The requested data is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned. 
     * @param {string} [xAdsAcmNamespace] This header is used to let the OSS Api Proxy know if ACM is used to authorize access to the given object. If this authorization is used by your service, then you must provide the name of the namespace you want to validate access control policies against.
     * @param {string} [xAdsAcmCheckGroups] Informs the OSS Api Proxy know if your service requires ACM authorization to also validate against Oxygen groups. If so, you must pass this header with a value of &#x60;&#x60;true&#x60;&#x60;. Otherwise, the assumption is that checking authorization against Oxygen groups is not required.
     * @param {string} [xAdsAcmGroups] Use this header to pass the Oxygen groups you want the OSS Api Proxy to use for group validation for the given user in the OAuth2 token.
     * @param {With} [_with] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public async getObjectDetails(accessToken: string, bucketKey: string, objectKey: string, ifModifiedSince?: string, _with?: With, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getObjectDetails ");
      try {
        const request =  await ObjectsApiFp(this.sdkManager).getObjectDetails(accessToken, bucketKey, objectKey, ifModifiedSince, _with,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getObjectDetails Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getObjectDetails Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new OssApiError(`getObjectDetails Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getObjectDetails Request failed with no response received: ${error.request}`);
            throw new OssApiError(`getObjectDetails Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a list objects in the specified bucket.   Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error. 
     * @summary List Objects
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {number} [limit] The number of items you want per page. Acceptable values &#x3D; 1-100. Default &#x3D; 10. 
     * @param {string} [beginsWith] Filters the results by the value you specify. Only the objects with their &#x60;&#x60;objectKey&#x60;&#x60; beginning with the specified string are returned.
     * @param {string} [startAt] The ID of the last item that was returned in the previous result set.  It enables the system to return subsequent items starting from the next one after the specified ID. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public async getObjects(accessToken: string, bucketKey: string, limit?: number, beginsWith?: string, startAt?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getObjects ");
      try {
        const request =  await ObjectsApiFp(this.sdkManager).getObjects(accessToken, bucketKey, limit, beginsWith, startAt,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getObjects Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getObjects Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new OssApiError(`getObjects Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getObjects Request failed with no response received: ${error.request}`);
            throw new OssApiError(`getObjects Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Downloads an object using an OSS signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/)  contains the ``hash`` URI parameter as well.  
     * @summary Download Object Using Signed URL
     * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
     * @param {string} [range] The byte range to download, specified in the form &#x60;&#x60;bytes&#x3D;&lt;START_BYTE&gt;-&lt;END_BYTE&gt;&#x60;&#x60;.
     * @param {string} [ifNoneMatch] The last known ETag value of the object. OSS returns the requested data  only if the &#x60;&#x60;If-None-Match&#x60;&#x60; header differs from the ETag value of the object on OSS, which indicates that the object on OSS is newer. If not, it returns a 304 \&quot;Not Modified\&quot; HTTP status.
     * @param {string} [ifModifiedSince] A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The requested data is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned. 
     * @param {string} [acceptEncoding] The compression format your prefer to receive the data. Possible values are:  - &#x60;&#x60;gzip&#x60;&#x60; - Use the gzip format  **Note:** You cannot use &#x60;&#x60;Accept-Encoding:gzip&#x60;&#x60; with a Range header containing an end byte range. OSS will not honor the End byte range if &#x60;&#x60;Accept-Encoding: gzip&#x60;&#x60; header is used. 
     * @param {Region} [region] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
     * @param {string} [responseContentDisposition] The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS.
     * @param {string} [responseContentType] The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public async getSignedResource(accessToken: string, hash: string, range?: string, ifNoneMatch?: string, ifModifiedSince?: string, acceptEncoding?: string, region?: Region, responseContentDisposition?: string, responseContentType?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getSignedResource ");
      try {
        const request =  await ObjectsApiFp(this.sdkManager).getSignedResource(accessToken, hash, range, ifNoneMatch, ifModifiedSince, acceptEncoding, region, responseContentDisposition, responseContentType,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getSignedResource Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getSignedResource Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new OssApiError(`getSignedResource Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getSignedResource Request failed with no response received: ${error.request}`);
            throw new OssApiError(`getSignedResource Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Gets a signed URL to download an object directly from S3, bypassing OSS servers. This signed URL expires in 2 minutes by default, but you can change this duration if needed.  You must start the download before the signed URL expires. The download itself can take longer. If the download fails after the validity period of the signed URL has elapsed, you can call this operation again to obtain a fresh signed URL.  Only applications that have read access to the object can call this operation.     You can use range headers with the signed download URL to download the object in chunks. This ability lets you download chunks in parallel, which can result in faster downloads.  If the object you want to download was uploaded in chunks and is still assembling on OSS, you will receive multiple S3 URLs instead of just one. Each URL will point to a chunk. If you prefer to receive a single URL, set the ``public-resource-fallback`` query parameter to ``true``. This setting will make OSS fallback to returning a single signed OSS URL, if assembling is still in progress.   In addition to this operation that generates S3 signed URLs, OSS provides an operation to generate OSS signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications. 
     * @summary Generate Signed S3 Download URL
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {string} objectKey The URL-encoded human friendly name of the object.
     * @param {string} [ifNoneMatch] The last known ETag value of the object. OSS returns the signed URL only if the &#x60;&#x60;If-None-Match&#x60;&#x60; header differs from the ETag value of the object on S3. If not, it returns a 304 \&quot;Not Modified\&quot; HTTP status.
     * @param {string} [ifModifiedSince] A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The signed URL is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned.
     * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
     * @param {string} [responseContentType] The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS.
     * @param {string} [responseContentDisposition] The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS.
     * @param {string} [responseCacheControl] The value of the Cache-Control header you want to receive when you download the object using the signed URL. If you do not specify a value, the Cache-Control header defaults to the value stored with OSS.
     * @param {boolean} [publicResourceFallback] Specifies how to return the signed URLs, in case the object was uploaded in chunks, and assembling of chunks is not yet complete.  - &#x60;&#x60;true&#x60;&#x60; : Return a single signed OSS URL. - &#x60;&#x60;false&#x60;&#x60; : (Default) Return multiple signed S3 URLs, where each URL points to a chunk. 
     * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
     * @param {boolean} [useCdn] &#x60;&#x60;true&#x60;&#x60; : Returns a URL that points to a CloudFront edge location.  &#x60;&#x60;false&#x60;&#x60; : (Default) Returns a URL that points directly to the S3 object. 
     * @param {boolean} [redirect] Generates a HTTP redirection response (Temporary Redirect 307​) using the generated URL.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public async signedS3Download(accessToken: string, bucketKey: string, objectKey: string, ifNoneMatch?: string, ifModifiedSince?: string,  responseContentType?: string, responseContentDisposition?: string, responseCacheControl?: string, publicResourceFallback?: boolean, minutesExpiration?: number, useCdn?: boolean, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into signedS3Download ");
      try {
        const request =  await ObjectsApiFp(this.sdkManager).signedS3Download(accessToken, bucketKey, objectKey, ifNoneMatch, ifModifiedSince, responseContentType, responseContentDisposition, responseCacheControl, publicResourceFallback, minutesExpiration, useCdn,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`signedS3Download Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`signedS3Download Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new OssApiError(`signedS3Download Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`signedS3Download Request failed with no response received: ${error.request}`);
            throw new OssApiError(`signedS3Download Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Gets a signed URL to upload an object directly to S3, bypassing OSS servers. You can also request an array of signed URLs which lets you upload an object in chunks.  This signed URL expires in 2 minutes by default, but you can change this duration if needed.  You must start the upload before the signed URL expires. The upload itself can take longer. If the upload fails after the validity period of the signed URL has elapsed, you can call this operation again to obtain a fresh signed URL (or an array of signed URLs as the case may be). However, you must use the same ``uploadKey`` that was returned when you originally called this operation.   Only applications that own the bucket can call this operation.  **Note:** Once you upload all chunks you must call the [Complete Upload to S3 Signed URL](/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-POST/) operation to indicate completion. This instructs OSS to assemble the chunks and reconstitute the object on OSS. You must call this operation even when using a single signed URL.   In addition to this operation that generates S3 signed URLs, OSS provides an operation to generate OSS signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications.     
     * @summary Generate Signed S3 Upload URL
     * @param {string} bucketKey The bucket key of the bucket that contains the objects you are operating on.
     * @param {string} objectKey The URL-encoded human friendly name of the object.
     * @param {string} [xAdsAcmScopes] Optional OSS-compliant scope reference to increase bucket search performance
     * @param {number} [parts] The number of parts you intend to chunk the object for uploading. OSS will return that many signed URLs, one URL for each chunk. If you do not specify a value you\&#39;ll get only one URL to upload the entire object.              
     * @param {number} [firstPart] The index of the first chunk to be uploaded.
     * @param {string} [uploadKey] The &#x60;&#x60;uploadKey&#x60;&#x60; of a previously-initiated upload, in order to request more chunk upload URLs for the same upload. If you do not specify a value, OSS will initiate a new upload entirely.
     * @param {number} [minutesExpiration] The time window (in minutes) the signed URL will remain usable. Acceptable values &#x3D; 1-60 minutes. Default &#x3D; 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
     * @param {boolean} [useAcceleration] &#x60;&#x60;true&#x60;&#x60; : (Default) Generates a faster S3 signed URL using Transfer Acceleration.  &#x60;&#x60;false&#x60;&#x60;: Generates a standard S3 signed URL. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public async signedS3Upload(accessToken: string, bucketKey: string, objectKey: string,  parts?: number, firstPart?: number, uploadKey?: string, minutesExpiration?: number, useAcceleration?: boolean, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into signedS3Upload ");
      try {
        const request =  await ObjectsApiFp(this.sdkManager).signedS3Upload(accessToken, bucketKey, objectKey, parts, firstPart, uploadKey, minutesExpiration, useAcceleration,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`signedS3Upload Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`signedS3Upload Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new OssApiError(`signedS3Upload Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`signedS3Upload Request failed with no response received: ${error.request}`);
            throw new OssApiError(`signedS3Upload Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Replaces an object that already exists on OSS, using an OSS signed URL.   The signed URL must fulfil the following conditions:  - The signed URL is valid (it has not expired as yet). - It was generated with ``write`` or ``readwrite`` for the ``access`` parameter. 
     * @summary Replace Object Using Signed URL
     * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
     * @param {number} contentLength The size of the data contained in the request body, in bytes.
     * @param {File} body The object to upload.
     * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
     * @param {string} [contentDisposition] The suggested file name to use when this object is downloaded as a file.
     * @param {Region} [xAdsRegion] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
     * @param {string} [ifMatch] The current value of the &#x60;&#x60;sha1&#x60;&#x60; attribute of the object you want to replace. OSS checks the &#x60;&#x60;If-Match&#x60;&#x60; header against the &#x60;&#x60;sha1&#x60;&#x60; attribute of the object in OSS. If they match, OSS allows the object to be overwritten. Otherwise, it means that the object on OSS has been modified since you retrieved the &#x60;&#x60;sha1&#x60;&#x60; and the request fails. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public async uploadSignedResource(accessToken: string, hash: string, contentLength: number, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: Region, ifMatch?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into uploadSignedResource ");
      try {
        const request =  await ObjectsApiFp(this.sdkManager).uploadSignedResource(accessToken, hash, contentLength, body, contentType, contentDisposition, xAdsRegion, ifMatch,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`uploadSignedResource Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`uploadSignedResource Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new OssApiError(`uploadSignedResource Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`uploadSignedResource Request failed with no response received: ${error.request}`);
            throw new OssApiError(`uploadSignedResource Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Performs a resumable upload using an OSS signed URL. Use this operation to upload an object in chunks.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains the ``hash`` as a URI parameter.  
     * @summary Upload Object Using Signed URL
     * @param {string} hash The ID component of the signed URL.  **Note:** The signed URL returned by [Generate OSS Signed URL](/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains &#x60;&#x60;hash&#x60;&#x60; as a URI parameter. 
     * @param {string} contentRange The byte range to upload, specified in the form &#x60;&#x60;bytes&#x3D;&lt;START_BYTE&gt;-&lt;END_BYTE&gt;&#x60;&#x60;.
     * @param {string} sessionId An ID to uniquely identify the file upload session.
     * @param {File} body The chunk to upload.
     * @param {string} [contentType] The MIME type of the object to upload; can be any type except \&#39;multipart/form-data\&#39;. This can be omitted, but we recommend adding it.
     * @param {string} [contentDisposition] The suggested file name to use when this object is downloaded as a file.
     * @param {Region} [xAdsRegion] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public async uploadSignedResourcesChunk(accessToken: string, hash: string, contentRange: string, sessionId: string, body: File, contentType?: string, contentDisposition?: string, xAdsRegion?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into uploadSignedResourcesChunk ");
      try {
        const request =  await ObjectsApiFp(this.sdkManager).uploadSignedResourcesChunk(accessToken, hash, contentRange, sessionId, body, contentType, contentDisposition, xAdsRegion,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`uploadSignedResourcesChunk Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`uploadSignedResourcesChunk Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new OssApiError(`uploadSignedResourcesChunk Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`uploadSignedResourcesChunk Request failed with no response received: ${error.request}`);
            throw new OssApiError(`uploadSignedResourcesChunk Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

