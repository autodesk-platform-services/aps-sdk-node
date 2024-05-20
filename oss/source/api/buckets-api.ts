/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, OssApiError } from '../base';
import { Bucket } from '../model';
import { Buckets } from '../model';
import { CreateBucketsPayload } from '../model';
import { Reason } from '../model';
import { Region } from '../model';
/**
 * BucketsApi - axios parameter creator
 * @export
 */
export const BucketsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Creates a bucket.   Buckets are virtual container within the Object Storage Service (OSS), which you can use to store and manage objects (files) in the cloud. The application creating the bucket is the owner of the bucket.  **Note:** Do not use this operation to create buckets for BIM360 Document Management. Use [POST projects/{project_id}/storage](/en/docs/data/v2/reference/http/projects-project_id-storage-POST>) instead. For details, see [Upload Files to BIM 360 Document Management](/en/docs/bim360/v1/tutorials/document-management/upload-document). 
         * @summary Create Bucket
         * @param {CreateBucketsPayload} policyKey 
         * @param {Region} [xAdsRegion] Specifies where the bucket must be stored. Possible values are: - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia. **Note:** Beta features are subject to change. Please do not use in production environments. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBucket: async (accessToken: string, policyKey: CreateBucketsPayload, xAdsRegion: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'policyKey' is not null or undefined
            assertParamExists('createBucket', 'policyKey', policyKey)
            const localVarPath = `/oss/v2/buckets`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0-beta1';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(policyKey, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the specified bucket. Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error.   The initial processing of a bucket deletion request can be time-consuming. So, we recommend only deleting buckets containing a few objects, like those typically used for acceptance testing and prototyping.   **Note:** Bucket keys will not be immediately available for reuse.  
         * @summary Delete Bucket
         * @param {string} bucketKey The bucket key of the bucket to delete.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBucket: async (accessToken: string, bucketKey: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bucketKey' is not null or undefined
            assertParamExists('deleteBucket', 'bucketKey', bucketKey)
            const localVarPath = `/oss/v2/buckets/{bucketKey}`
                .replace(`{${"bucketKey"}}`, encodeURIComponent(String(bucketKey)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0-beta1';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns detailed information about the specified bucket.  **Note:** Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error.  
         * @summary Get Bucket Details
         * @param {string} bucketKey The bucket key of the bucket to query.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBucketDetails: async (accessToken: string, bucketKey: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bucketKey' is not null or undefined
            assertParamExists('getBucketDetails', 'bucketKey', bucketKey)
            const localVarPath = `/oss/v2/buckets/{bucketKey}/details`
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


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0-beta1';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of buckets owned by the application.  
         * @summary List Buckets
         * @param {Region} [region] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
         * @param {number} [limit] The number of items you want per page. Acceptable values &#x3D; 1-100. Default &#x3D; 10. 
         * @param {string} [startAt] The ID of the last item that was returned in the previous result set.  It enables the system to return subsequent items starting from the next one after the specified ID. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBuckets: async (accessToken: string, region?: Region, limit?: number, startAt?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/oss/v2/buckets`;
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

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (startAt !== undefined) {
                localVarQueryParameter['startAt'] = startAt;
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/OSS/TypeScript/1.0.0-beta1';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BucketsApi - functional programming interface
 * @export
 */
export const BucketsApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = BucketsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Creates a bucket.   Buckets are virtual container within the Object Storage Service (OSS), which you can use to store and manage objects (files) in the cloud. The application creating the bucket is the owner of the bucket.  **Note:** Do not use this operation to create buckets for BIM360 Document Management. Use [POST projects/{project_id}/storage](/en/docs/data/v2/reference/http/projects-project_id-storage-POST>) instead. For details, see [Upload Files to BIM 360 Document Management](/en/docs/bim360/v1/tutorials/document-management/upload-document). 
         * @summary Create Bucket
         * @param {CreateBucketsPayload} policyKey 
         * @param {Region} [xAdsRegion] Specifies where the bucket must be stored. Possible values are: - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia. **Note:** Beta features are subject to change. Please do not use in production environments. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createBucket(accessToken: string, policyKey: CreateBucketsPayload, xAdsRegion: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Bucket>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createBucket(accessToken, policyKey, xAdsRegion,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Deletes the specified bucket. Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error.   The initial processing of a bucket deletion request can be time-consuming. So, we recommend only deleting buckets containing a few objects, like those typically used for acceptance testing and prototyping.   **Note:** Bucket keys will not be immediately available for reuse.  
         * @summary Delete Bucket
         * @param {string} bucketKey The bucket key of the bucket to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteBucket(accessToken: string, bucketKey: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteBucket(accessToken, bucketKey,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns detailed information about the specified bucket.  **Note:** Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error.  
         * @summary Get Bucket Details
         * @param {string} bucketKey The bucket key of the bucket to query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBucketDetails(accessToken: string, bucketKey: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Bucket>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBucketDetails(accessToken, bucketKey,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a list of buckets owned by the application.  
         * @summary List Buckets
         * @param {Region} [region] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
         * @param {number} [limit] The number of items you want per page. Acceptable values &#x3D; 1-100. Default &#x3D; 10. 
         * @param {string} [startAt] The ID of the last item that was returned in the previous result set.  It enables the system to return subsequent items starting from the next one after the specified ID. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBuckets(accessToken: string, region?: Region, limit?: number, startAt?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Buckets>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBuckets(accessToken, region, limit, startAt,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * BucketsApi - interface
 * @export
 * @interface BucketsApi
 */
export interface BucketsApiInterface {
    /**
     * Creates a bucket.   Buckets are virtual container within the Object Storage Service (OSS), which you can use to store and manage objects (files) in the cloud. The application creating the bucket is the owner of the bucket.  **Note:** Do not use this operation to create buckets for BIM360 Document Management. Use [POST projects/{project_id}/storage](/en/docs/data/v2/reference/http/projects-project_id-storage-POST>) instead. For details, see [Upload Files to BIM 360 Document Management](/en/docs/bim360/v1/tutorials/document-management/upload-document). 
     * @summary Create Bucket
     * @param {CreateBucketsPayload} policyKey 
     * @param {Region} [xAdsRegion] Specifies where the bucket must be stored. Possible values are: - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia. **Note:** Beta features are subject to change. Please do not use in production environments. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BucketsApiInterface
     */
    createBucket(accessToken: string,policyKey: CreateBucketsPayload, xAdsRegion: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Deletes the specified bucket. Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error.   The initial processing of a bucket deletion request can be time-consuming. So, we recommend only deleting buckets containing a few objects, like those typically used for acceptance testing and prototyping.   **Note:** Bucket keys will not be immediately available for reuse.  
     * @summary Delete Bucket
     * @param {string} bucketKey The bucket key of the bucket to delete.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BucketsApiInterface
     */
    deleteBucket(accessToken: string,bucketKey: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns detailed information about the specified bucket.  **Note:** Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error.  
     * @summary Get Bucket Details
     * @param {string} bucketKey The bucket key of the bucket to query.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BucketsApiInterface
     */
    getBucketDetails(accessToken: string,bucketKey: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a list of buckets owned by the application.  
     * @summary List Buckets
     * @param {Region} [region] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
     * @param {number} [limit] The number of items you want per page. Acceptable values &#x3D; 1-100. Default &#x3D; 10. 
     * @param {string} [startAt] The ID of the last item that was returned in the previous result set.  It enables the system to return subsequent items starting from the next one after the specified ID. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BucketsApiInterface
     */
    getBuckets(accessToken: string,region?: Region, limit?: number, startAt?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * BucketsApi - object-oriented interface
 * @export
 * @class BucketsApi
 * @extends {BaseApi}
 */
export class BucketsApi extends BaseApi implements BucketsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Creates a bucket.   Buckets are virtual container within the Object Storage Service (OSS), which you can use to store and manage objects (files) in the cloud. The application creating the bucket is the owner of the bucket.  **Note:** Do not use this operation to create buckets for BIM360 Document Management. Use [POST projects/{project_id}/storage](/en/docs/data/v2/reference/http/projects-project_id-storage-POST>) instead. For details, see [Upload Files to BIM 360 Document Management](/en/docs/bim360/v1/tutorials/document-management/upload-document). 
     * @summary Create Bucket
     * @param {CreateBucketsPayload} policyKey 
     * @param {Region} [xAdsRegion] Specifies where the bucket must be stored. Possible values are: - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia. **Note:** Beta features are subject to change. Please do not use in production environments. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BucketsApi
     */
    public async createBucket(accessToken: string, policyKey: CreateBucketsPayload, xAdsRegion: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createBucket ");
      try {
        const request =  await BucketsApiFp(this.sdkManager).createBucket(accessToken, policyKey, xAdsRegion,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createBucket Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`createBucket Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new OssApiError(`createBucket Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`createBucket Request failed with no response received: ${error.request}`);
            throw new OssApiError(`createBucket Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Deletes the specified bucket. Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error.   The initial processing of a bucket deletion request can be time-consuming. So, we recommend only deleting buckets containing a few objects, like those typically used for acceptance testing and prototyping.   **Note:** Bucket keys will not be immediately available for reuse.  
     * @summary Delete Bucket
     * @param {string} bucketKey The bucket key of the bucket to delete.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BucketsApi
     */
    public async deleteBucket(accessToken: string, bucketKey: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into deleteBucket ");
      try {
        const request =  await BucketsApiFp(this.sdkManager).deleteBucket(accessToken, bucketKey,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`deleteBucket Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`deleteBucket Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new OssApiError(`deleteBucket Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`deleteBucket Request failed with no response received: ${error.request}`);
            throw new OssApiError(`deleteBucket Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns detailed information about the specified bucket.  **Note:** Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a \"403 Forbidden\" error.  
     * @summary Get Bucket Details
     * @param {string} bucketKey The bucket key of the bucket to query.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BucketsApi
     */
    public async getBucketDetails(accessToken: string, bucketKey: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getBucketDetails ");
      try {
        const request =  await BucketsApiFp(this.sdkManager).getBucketDetails(accessToken, bucketKey,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getBucketDetails Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getBucketDetails Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new OssApiError(`getBucketDetails Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getBucketDetails Request failed with no response received: ${error.request}`);
            throw new OssApiError(`getBucketDetails Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a list of buckets owned by the application.  
     * @summary List Buckets
     * @param {Region} [region] Specifies where the bucket containing the object stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa. - &#x60;&#x60;APAC&#x60;&#x60; -  (Beta) Data center for Australia.  **Note:** Beta features are subject to change. Please do not use in production environments. 
     * @param {number} [limit] The number of items you want per page. Acceptable values &#x3D; 1-100. Default &#x3D; 10. 
     * @param {string} [startAt] The ID of the last item that was returned in the previous result set.  It enables the system to return subsequent items starting from the next one after the specified ID. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BucketsApi
     */
    public async getBuckets(accessToken: string, region?: Region, limit?: number, startAt?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getBuckets ");
      try {
        const request =  await BucketsApiFp(this.sdkManager).getBuckets(accessToken, region, limit, startAt,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getBuckets Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getBuckets Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new OssApiError(`getBuckets Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getBuckets Request failed with no response received: ${error.request}`);
            throw new OssApiError(`getBuckets Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

