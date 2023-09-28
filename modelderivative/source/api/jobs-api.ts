/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse} from "autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, ModelDerivativeApiApiError } from '../base';
import { Formats400Response } from '../model';
import { Formats401Response } from '../model';
import { Formats403Response } from '../model';
import { Job } from '../model';
import { JobPayload } from '../model';
import { PostReferences200Response } from '../model';
import { PostReferencesRequest } from '../model';
/**
 * JobsApi - axios parameter creator
 * @export
 */
export const JobsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionaly:  - Extract selected parts of a design and export the set of geometries in OBJ format. - Generate different-sized thumbnails.  When the translation job runs, progress information and details of the generated derivatives are logged to a JSON file that is called a manifest. A manifest is typically created the first time you translate the source design. Thereafter the system updates the same manifest each time a translation job is executed for that source design. If necessary, you can set the ``x-ads-force`` parameter to ``true``, which deletes the existing manifest and creates a fresh manifest. However, if you do so, all derivatives generated prior to this are deleted.
         * @summary Start Translation Job
         * @param {string} [contentType] Must be application/json
         * @param {boolean} [xAdsForce] - &#x60;&#x60;true&#x60;&#x60;: Deletes the existing manifest and derivatives of the source design before translation. - &#x60;&#x60;false&#x60;&#x60;: (Default) Updates existing manfest and generates derivatives only for the formats that the source design has no derivatives. 
         * @param {boolean} [xAdsDerivativeFormat] Specifies how to interpret the &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; request body attribute for OBJ output. Possible values are:  - &#x60;&#x60;latest&#x60;&#x60;: (Default) Consider &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; to be  SVF2 Object IDs. - &#x60;&#x60;fallback&#x60;&#x60;: Consider &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; to be SVF Object IDs. 
         * @param {JobPayload} [jobPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postJob: async (accessToken: string, contentType?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: boolean, jobPayload?: JobPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/designdata/job`;
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

            if (xAdsForce != null) {
                localVarHeaderParameter['x-ads-force'] = typeof xAdsForce === 'string'
                    ? xAdsForce
                    : JSON.stringify(xAdsForce);
            }

            if (xAdsDerivativeFormat != null) {
                localVarHeaderParameter['x-ads-derivative-format'] = typeof xAdsDerivativeFormat === 'string'
                    ? xAdsDerivativeFormat
                    : JSON.stringify(xAdsDerivativeFormat);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/MODEL-DERIVATIVE-API/TypeScript/1.0.0';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jobPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores the location of the files referenced by the source design with the Model Derivative service.  When you translate the source design with `Start Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_, and if  ``checkReferences`` is set to ``true``, the Model Derivative service uses this stored information to locate the referenced files.   Consider the following example. You have a design file like an Inventor assembly file, which contains references to the parts (part files) that make up the assembly. When the Model Derivative service translates the design to a derivative format, it needs to access the parts associated with the assembly. This operation stores information about the location of the part files with the Model Derivative service. When the assembly file is translated, the Model Derivative service uses this information to locate the referenced part files to generate the requested derivative.   
         * @summary Specify References
         * @param {string} urn The URL safe Base64 encoded URN of the source design.
         * @param {string} [contentType] Must be &#x60;application/json&#x60;
         * @param {PostReferencesRequest} [postReferencesRequest] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postReferences: async (accessToken: string, urn: string, contentType?: string, postReferencesRequest?: PostReferencesRequest,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'urn' is not null or undefined
            assertParamExists('postReferences', 'urn', urn)
            const localVarPath = `/designdata/{urn}/references`
                .replace(`{${"urn"}}`, encodeURIComponent(String(urn)));
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/MODEL-DERIVATIVE-API/TypeScript/1.0.0';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postReferencesRequest, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * JobsApi - functional programming interface
 * @export
 */
export const JobsApiFp = function(sdkManager?: SDKManager) {
    const localVarAxiosParamCreator = JobsApiAxiosParamCreator(sdkManager.apsconfiguration)
    return {
        /**
         * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionaly:  - Extract selected parts of a design and export the set of geometries in OBJ format. - Generate different-sized thumbnails.  When the translation job runs, progress information and details of the generated derivatives are logged to a JSON file that is called a manifest. A manifest is typically created the first time you translate the source design. Thereafter the system updates the same manifest each time a translation job is executed for that source design. If necessary, you can set the ``x-ads-force`` parameter to ``true``, which deletes the existing manifest and creates a fresh manifest. However, if you do so, all derivatives generated prior to this are deleted.
         * @summary Start Translation Job
         * @param {string} [contentType] Must be application/json
         * @param {boolean} [xAdsForce] - &#x60;&#x60;true&#x60;&#x60;: Deletes the existing manifest and derivatives of the source design before translation. - &#x60;&#x60;false&#x60;&#x60;: (Default) Updates existing manfest and generates derivatives only for the formats that the source design has no derivatives. 
         * @param {boolean} [xAdsDerivativeFormat] Specifies how to interpret the &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; request body attribute for OBJ output. Possible values are:  - &#x60;&#x60;latest&#x60;&#x60;: (Default) Consider &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; to be  SVF2 Object IDs. - &#x60;&#x60;fallback&#x60;&#x60;: Consider &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; to be SVF Object IDs. 
         * @param {JobPayload} [jobPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postJob(accessToken: string, contentType?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: boolean, jobPayload?: JobPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Job>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postJob(accessToken, contentType, xAdsForce, xAdsDerivativeFormat, jobPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Stores the location of the files referenced by the source design with the Model Derivative service.  When you translate the source design with `Start Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_, and if  ``checkReferences`` is set to ``true``, the Model Derivative service uses this stored information to locate the referenced files.   Consider the following example. You have a design file like an Inventor assembly file, which contains references to the parts (part files) that make up the assembly. When the Model Derivative service translates the design to a derivative format, it needs to access the parts associated with the assembly. This operation stores information about the location of the part files with the Model Derivative service. When the assembly file is translated, the Model Derivative service uses this information to locate the referenced part files to generate the requested derivative.   
         * @summary Specify References
         * @param {string} urn The URL safe Base64 encoded URN of the source design.
         * @param {string} [contentType] Must be &#x60;application/json&#x60;
         * @param {PostReferencesRequest} [postReferencesRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postReferences(accessToken: string, urn: string, contentType?: string, postReferencesRequest?: PostReferencesRequest, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostReferences200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postReferences(accessToken, urn, contentType, postReferencesRequest,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * JobsApi - interface
 * @export
 * @interface JobsApi
 */
export interface JobsApiInterface {
    /**
     * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionaly:  - Extract selected parts of a design and export the set of geometries in OBJ format. - Generate different-sized thumbnails.  When the translation job runs, progress information and details of the generated derivatives are logged to a JSON file that is called a manifest. A manifest is typically created the first time you translate the source design. Thereafter the system updates the same manifest each time a translation job is executed for that source design. If necessary, you can set the ``x-ads-force`` parameter to ``true``, which deletes the existing manifest and creates a fresh manifest. However, if you do so, all derivatives generated prior to this are deleted.
     * @summary Start Translation Job
     * @param {string} [contentType] Must be application/json
     * @param {boolean} [xAdsForce] - &#x60;&#x60;true&#x60;&#x60;: Deletes the existing manifest and derivatives of the source design before translation. - &#x60;&#x60;false&#x60;&#x60;: (Default) Updates existing manfest and generates derivatives only for the formats that the source design has no derivatives. 
     * @param {boolean} [xAdsDerivativeFormat] Specifies how to interpret the &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; request body attribute for OBJ output. Possible values are:  - &#x60;&#x60;latest&#x60;&#x60;: (Default) Consider &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; to be  SVF2 Object IDs. - &#x60;&#x60;fallback&#x60;&#x60;: Consider &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; to be SVF Object IDs. 
     * @param {JobPayload} [jobPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiInterface
     */
    postJob(accessToken: string,contentType?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: boolean, jobPayload?: JobPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Stores the location of the files referenced by the source design with the Model Derivative service.  When you translate the source design with `Start Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_, and if  ``checkReferences`` is set to ``true``, the Model Derivative service uses this stored information to locate the referenced files.   Consider the following example. You have a design file like an Inventor assembly file, which contains references to the parts (part files) that make up the assembly. When the Model Derivative service translates the design to a derivative format, it needs to access the parts associated with the assembly. This operation stores information about the location of the part files with the Model Derivative service. When the assembly file is translated, the Model Derivative service uses this information to locate the referenced part files to generate the requested derivative.   
     * @summary Specify References
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {string} [contentType] Must be &#x60;application/json&#x60;
     * @param {PostReferencesRequest} [postReferencesRequest] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiInterface
     */
    postReferences(accessToken: string,urn: string, contentType?: string, postReferencesRequest?: PostReferencesRequest,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * JobsApi - object-oriented interface
 * @export
 * @class JobsApi
 * @extends {BaseAPI}
 */
export class JobsApi extends BaseAPI implements JobsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionaly:  - Extract selected parts of a design and export the set of geometries in OBJ format. - Generate different-sized thumbnails.  When the translation job runs, progress information and details of the generated derivatives are logged to a JSON file that is called a manifest. A manifest is typically created the first time you translate the source design. Thereafter the system updates the same manifest each time a translation job is executed for that source design. If necessary, you can set the ``x-ads-force`` parameter to ``true``, which deletes the existing manifest and creates a fresh manifest. However, if you do so, all derivatives generated prior to this are deleted.
     * @summary Start Translation Job
     * @param {string} [contentType] Must be application/json
     * @param {boolean} [xAdsForce] - &#x60;&#x60;true&#x60;&#x60;: Deletes the existing manifest and derivatives of the source design before translation. - &#x60;&#x60;false&#x60;&#x60;: (Default) Updates existing manfest and generates derivatives only for the formats that the source design has no derivatives. 
     * @param {boolean} [xAdsDerivativeFormat] Specifies how to interpret the &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; request body attribute for OBJ output. Possible values are:  - &#x60;&#x60;latest&#x60;&#x60;: (Default) Consider &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; to be  SVF2 Object IDs. - &#x60;&#x60;fallback&#x60;&#x60;: Consider &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; to be SVF Object IDs. 
     * @param {JobPayload} [jobPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    public async postJob(accessToken: string, contentType?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: boolean, jobPayload?: JobPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into postJob ");
      try {
        const request =  await JobsApiFp(this.sdkManager).postJob(accessToken, contentType, xAdsForce, xAdsDerivativeFormat, jobPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`postJob Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`postJob Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new ModelDerivativeApiApiError(`postJob Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`postJob Request failed with no response received: ${error.request}`);
            throw new ModelDerivativeApiApiError(`postJob Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Stores the location of the files referenced by the source design with the Model Derivative service.  When you translate the source design with `Start Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_, and if  ``checkReferences`` is set to ``true``, the Model Derivative service uses this stored information to locate the referenced files.   Consider the following example. You have a design file like an Inventor assembly file, which contains references to the parts (part files) that make up the assembly. When the Model Derivative service translates the design to a derivative format, it needs to access the parts associated with the assembly. This operation stores information about the location of the part files with the Model Derivative service. When the assembly file is translated, the Model Derivative service uses this information to locate the referenced part files to generate the requested derivative.   
     * @summary Specify References
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {string} [contentType] Must be &#x60;application/json&#x60;
     * @param {PostReferencesRequest} [postReferencesRequest] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    public async postReferences(accessToken: string, urn: string, contentType?: string, postReferencesRequest?: PostReferencesRequest, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into postReferences ");
      try {
        const request =  await JobsApiFp(this.sdkManager).postReferences(accessToken, urn, contentType, postReferencesRequest,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`postReferences Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`postReferences Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new ModelDerivativeApiApiError(`postReferences Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`postReferences Request failed with no response received: ${error.request}`);
            throw new ModelDerivativeApiApiError(`postReferences Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

