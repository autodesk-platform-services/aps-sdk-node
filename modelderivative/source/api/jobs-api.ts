/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ModelDerivativeApiError } from '../base';
import { Job } from '../model';
import { JobPayload } from '../model';
import { Region } from '../model';
import { SpecifyReferences } from '../model';
import { SpecifyReferencesPayload } from '../model';
import { XAdsDerivativeFormat } from '../model';
/**
 * JobsApi - axios parameter creator
 * @export
 */
export const JobsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Specifies the location of the files referenced by the specified source design.  When you call `Create Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_, set  ``checkReferences`` to ``true``.   The Model Derivative service will then use the details you specify in this operation to locate and download the referenced files. 
         * @summary Specify References
         * @param {string} urn The Base64 (URL Safe) encoded design URN.
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
         * @param {SpecifyReferencesPayload} [specifyReferencesPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        specifyReferences: async (accessToken: string, urn: string, region?: Region, specifyReferencesPayload?: SpecifyReferencesPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'urn' is not null or undefined
            assertParamExists('specifyReferences', 'urn', urn)
            const localVarPath = `/modelderivative/v2/designdata/{urn}/references`
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

            if (region != null) {
                localVarHeaderParameter['region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/MODEL-DERIVATIVE/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(specifyReferencesPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionaly:  - Extract selected parts of a design and export the set of geometries in OBJ format. - Generate different-sized thumbnails.  When the translation job runs, details about the process and generated derivatives are logged to a JSON file known as a manifest. This manifest is typically created during the first translation of a source design. Subsequently, the system updates the same manifest whenever a translation is performed for that design.   If necessary, you can set the ``x-ads-force`` parameter to ``true``. Then, the system will delete the existing manifest and create a new one. However, be aware that doing so will also delete all previously generated derivatives.
         * @summary Create Translation Job
         * @param {boolean} [xAdsForce] &#x60;&#x60;true&#x60;&#x60;: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.  &#x60;&#x60;false&#x60;&#x60;: (Default) Use previously parsed property data to extract the object tree. 
         * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:    - &#x60;&#x60;latest&#x60;&#x60; - (Default) Return SVF2 Object IDs.  - &#x60;&#x60;fallback&#x60;&#x60; - Return SVF Object IDs.    **Note:**    1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service.  2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.  3. If you use this parameter with one derivative (URN), you must use it consistently across the following:      - &#x60;Create Translation Job &lt;/en/docs/model-derivative/v2/reference/http/job-POST&gt;&#x60;_ (for OBJ output)     - &#x60;Fetch Object Tree &lt;/en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET&gt;&#x60;_    - &#x60;Fetch All Properties &lt;/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET&gt;&#x60;_    - &#x60;Fetch Specific Properties &lt;en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-query-POST&gt;&#x60;_ 
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
         * @param {JobPayload} [jobPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startJob: async (accessToken: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, region?: Region, jobPayload?: JobPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/modelderivative/v2/designdata/job`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

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

            if (region != null) {
                localVarHeaderParameter['region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/MODEL-DERIVATIVE/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jobPayload, localVarRequestOptions, apsConfiguration)

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
export const JobsApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = JobsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Specifies the location of the files referenced by the specified source design.  When you call `Create Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_, set  ``checkReferences`` to ``true``.   The Model Derivative service will then use the details you specify in this operation to locate and download the referenced files. 
         * @summary Specify References
         * @param {string} urn The Base64 (URL Safe) encoded design URN.
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
         * @param {SpecifyReferencesPayload} [specifyReferencesPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async specifyReferences(accessToken: string, urn: string, region?: Region, specifyReferencesPayload?: SpecifyReferencesPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SpecifyReferences>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.specifyReferences(accessToken, urn, region, specifyReferencesPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionaly:  - Extract selected parts of a design and export the set of geometries in OBJ format. - Generate different-sized thumbnails.  When the translation job runs, details about the process and generated derivatives are logged to a JSON file known as a manifest. This manifest is typically created during the first translation of a source design. Subsequently, the system updates the same manifest whenever a translation is performed for that design.   If necessary, you can set the ``x-ads-force`` parameter to ``true``. Then, the system will delete the existing manifest and create a new one. However, be aware that doing so will also delete all previously generated derivatives.
         * @summary Create Translation Job
         * @param {boolean} [xAdsForce] &#x60;&#x60;true&#x60;&#x60;: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.  &#x60;&#x60;false&#x60;&#x60;: (Default) Use previously parsed property data to extract the object tree. 
         * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:    - &#x60;&#x60;latest&#x60;&#x60; - (Default) Return SVF2 Object IDs.  - &#x60;&#x60;fallback&#x60;&#x60; - Return SVF Object IDs.    **Note:**    1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service.  2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.  3. If you use this parameter with one derivative (URN), you must use it consistently across the following:      - &#x60;Create Translation Job &lt;/en/docs/model-derivative/v2/reference/http/job-POST&gt;&#x60;_ (for OBJ output)     - &#x60;Fetch Object Tree &lt;/en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET&gt;&#x60;_    - &#x60;Fetch All Properties &lt;/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET&gt;&#x60;_    - &#x60;Fetch Specific Properties &lt;en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-query-POST&gt;&#x60;_ 
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
         * @param {JobPayload} [jobPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startJob(accessToken: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, region?: Region, jobPayload?: JobPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Job>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startJob(accessToken, xAdsForce, xAdsDerivativeFormat, region, jobPayload,  options);
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
     * Specifies the location of the files referenced by the specified source design.  When you call `Create Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_, set  ``checkReferences`` to ``true``.   The Model Derivative service will then use the details you specify in this operation to locate and download the referenced files. 
     * @summary Specify References
     * @param {string} urn The Base64 (URL Safe) encoded design URN.
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
     * @param {SpecifyReferencesPayload} [specifyReferencesPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiInterface
     */
    specifyReferences(accessToken: string,urn: string, region?: Region, specifyReferencesPayload?: SpecifyReferencesPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionaly:  - Extract selected parts of a design and export the set of geometries in OBJ format. - Generate different-sized thumbnails.  When the translation job runs, details about the process and generated derivatives are logged to a JSON file known as a manifest. This manifest is typically created during the first translation of a source design. Subsequently, the system updates the same manifest whenever a translation is performed for that design.   If necessary, you can set the ``x-ads-force`` parameter to ``true``. Then, the system will delete the existing manifest and create a new one. However, be aware that doing so will also delete all previously generated derivatives.
     * @summary Create Translation Job
     * @param {boolean} [xAdsForce] &#x60;&#x60;true&#x60;&#x60;: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.  &#x60;&#x60;false&#x60;&#x60;: (Default) Use previously parsed property data to extract the object tree. 
     * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:    - &#x60;&#x60;latest&#x60;&#x60; - (Default) Return SVF2 Object IDs.  - &#x60;&#x60;fallback&#x60;&#x60; - Return SVF Object IDs.    **Note:**    1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service.  2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.  3. If you use this parameter with one derivative (URN), you must use it consistently across the following:      - &#x60;Create Translation Job &lt;/en/docs/model-derivative/v2/reference/http/job-POST&gt;&#x60;_ (for OBJ output)     - &#x60;Fetch Object Tree &lt;/en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET&gt;&#x60;_    - &#x60;Fetch All Properties &lt;/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET&gt;&#x60;_    - &#x60;Fetch Specific Properties &lt;en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-query-POST&gt;&#x60;_ 
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
     * @param {JobPayload} [jobPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiInterface
     */
    startJob(accessToken: string,xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, region?: Region, jobPayload?: JobPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * JobsApi - object-oriented interface
 * @export
 * @class JobsApi
 * @extends {BaseApi}
 */
export class JobsApi extends BaseApi implements JobsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Specifies the location of the files referenced by the specified source design.  When you call `Create Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_, set  ``checkReferences`` to ``true``.   The Model Derivative service will then use the details you specify in this operation to locate and download the referenced files. 
     * @summary Specify References
     * @param {string} urn The Base64 (URL Safe) encoded design URN.
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
     * @param {SpecifyReferencesPayload} [specifyReferencesPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    public async specifyReferences(accessToken: string, urn: string, region?: Region, specifyReferencesPayload?: SpecifyReferencesPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into specifyReferences ");
      try {
        const request =  await JobsApiFp(this.sdkManager).specifyReferences(accessToken, urn, region, specifyReferencesPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`specifyReferences Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`specifyReferences Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ModelDerivativeApiError(`specifyReferences Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`specifyReferences Request failed with no response received: ${error.request}`);
            throw new ModelDerivativeApiError(`specifyReferences Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionaly:  - Extract selected parts of a design and export the set of geometries in OBJ format. - Generate different-sized thumbnails.  When the translation job runs, details about the process and generated derivatives are logged to a JSON file known as a manifest. This manifest is typically created during the first translation of a source design. Subsequently, the system updates the same manifest whenever a translation is performed for that design.   If necessary, you can set the ``x-ads-force`` parameter to ``true``. Then, the system will delete the existing manifest and create a new one. However, be aware that doing so will also delete all previously generated derivatives.
     * @summary Create Translation Job
     * @param {boolean} [xAdsForce] &#x60;&#x60;true&#x60;&#x60;: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.  &#x60;&#x60;false&#x60;&#x60;: (Default) Use previously parsed property data to extract the object tree. 
     * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:    - &#x60;&#x60;latest&#x60;&#x60; - (Default) Return SVF2 Object IDs.  - &#x60;&#x60;fallback&#x60;&#x60; - Return SVF Object IDs.    **Note:**    1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service.  2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.  3. If you use this parameter with one derivative (URN), you must use it consistently across the following:      - &#x60;Create Translation Job &lt;/en/docs/model-derivative/v2/reference/http/job-POST&gt;&#x60;_ (for OBJ output)     - &#x60;Fetch Object Tree &lt;/en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET&gt;&#x60;_    - &#x60;Fetch All Properties &lt;/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET&gt;&#x60;_    - &#x60;Fetch Specific Properties &lt;en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-query-POST&gt;&#x60;_ 
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
     * @param {JobPayload} [jobPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    public async startJob(accessToken: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, region?: Region, jobPayload?: JobPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into startJob ");
      try {
        const request =  await JobsApiFp(this.sdkManager).startJob(accessToken, xAdsForce, xAdsDerivativeFormat, region, jobPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`startJob Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`startJob Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ModelDerivativeApiError(`startJob Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`startJob Request failed with no response received: ${error.request}`);
            throw new ModelDerivativeApiError(`startJob Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

