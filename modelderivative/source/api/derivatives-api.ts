/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ModelDerivativeApiError } from '../base';
import { DerivativeDownload } from '../model';
import { Region } from '../model';
/**
 * DerivativesApi - axios parameter creator
 * @export
 */
export const DerivativesApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Returns a download URL and a set of signed cookies, which lets you securely download the derivative specified by the ``derivativeUrn`` URI parameter. The signed cookies have a lifetime of 6 hours. You can use range headers with the returned download URL to download the derivative in chunks, in parallel.
         * @summary Fetch Derivative Download URL
         * @param {string} derivativeUrn The URL-encoded URN of the derivative. Use the &#x60;Fetch Manifest operation &lt;/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/&gt;&#x60;_to obtain the URNs of derivatives for the specified source design.
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {number} [minutesExpiration] Specifies how many minutes the signed cookies should remain valid. Default value is 360 minutes. The value you specify must be lower than the default value for this parameter. If you specify a value greater than the default value, the Model Derivative service will return an error with an HTTP status code of &#x60;&#x60;400&#x60;&#x60;.
         * @param {string} [responseContentDisposition] The value that must be specified as the &#x60;&#x60;response-content-disposition&#x60;&#x60; query string parameter with the download URL. Must begin with &#x60;&#x60;attachment&#x60;&#x60;. This value defaults to the default value corresponding to the derivative/file.
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDerivativeUrl: async (accessToken: string, derivativeUrn: string, urn: string, minutesExpiration?: number, responseContentDisposition?: string, region?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'derivativeUrn' is not null or undefined
            assertParamExists('getDerivativeUrl', 'derivativeUrn', derivativeUrn)
            // verify required parameter 'urn' is not null or undefined
            assertParamExists('getDerivativeUrl', 'urn', urn)
            const localVarPath = `/modelderivative/v2/designdata/{urn}/manifest/{derivativeUrn}/signedcookies`
                .replace(`{${"derivativeUrn"}}`, encodeURIComponent(String(derivativeUrn)))
                .replace(`{${"urn"}}`, encodeURIComponent(String(urn)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (minutesExpiration !== undefined) {
                localVarQueryParameter['minutes-expiration'] = minutesExpiration;
            }

            if (responseContentDisposition !== undefined) {
                localVarQueryParameter['response-content-disposition'] = responseContentDisposition;
            }

            if (region != null) {
                localVarHeaderParameter['region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/MODEL-DERIVATIVE/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns information about the specified derivative.  Use this operation to determine the total content length of a derivative before you download it. If the derivative is large, you can choose to download the derivative in chunks, by specifying a chunk size using the ``Range`` header parameter.
         * @summary Check Derivative Details
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} derivativeUrn The URL-encoded URN of the derivative. Check the manifest of the source design to get the URNs of the derivatives available for download.
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        headCheckDerivative: async (accessToken: string, urn: string, derivativeUrn: string, region?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'urn' is not null or undefined
            assertParamExists('headCheckDerivative', 'urn', urn)
            // verify required parameter 'derivativeUrn' is not null or undefined
            assertParamExists('headCheckDerivative', 'derivativeUrn', derivativeUrn)
            const localVarPath = `/modelderivative/v2/designdata/{urn}/manifest/{derivativeUrn}`
                .replace(`{${"urn"}}`, encodeURIComponent(String(urn)))
                .replace(`{${"derivativeUrn"}}`, encodeURIComponent(String(derivativeUrn)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'HEAD', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (region != null) {
                localVarHeaderParameter['region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/MODEL-DERIVATIVE/TypeScript/1.0.0';
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
 * DerivativesApi - functional programming interface
 * @export
 */
export const DerivativesApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = DerivativesApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Returns a download URL and a set of signed cookies, which lets you securely download the derivative specified by the ``derivativeUrn`` URI parameter. The signed cookies have a lifetime of 6 hours. You can use range headers with the returned download URL to download the derivative in chunks, in parallel.
         * @summary Fetch Derivative Download URL
         * @param {string} derivativeUrn The URL-encoded URN of the derivative. Use the &#x60;Fetch Manifest operation &lt;/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/&gt;&#x60;_to obtain the URNs of derivatives for the specified source design.
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {number} [minutesExpiration] Specifies how many minutes the signed cookies should remain valid. Default value is 360 minutes. The value you specify must be lower than the default value for this parameter. If you specify a value greater than the default value, the Model Derivative service will return an error with an HTTP status code of &#x60;&#x60;400&#x60;&#x60;.
         * @param {string} [responseContentDisposition] The value that must be specified as the &#x60;&#x60;response-content-disposition&#x60;&#x60; query string parameter with the download URL. Must begin with &#x60;&#x60;attachment&#x60;&#x60;. This value defaults to the default value corresponding to the derivative/file.
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDerivativeUrl(accessToken: string, derivativeUrn: string, urn: string, minutesExpiration?: number, responseContentDisposition?: string, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DerivativeDownload>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDerivativeUrl(accessToken, derivativeUrn, urn, minutesExpiration, responseContentDisposition, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns information about the specified derivative.  Use this operation to determine the total content length of a derivative before you download it. If the derivative is large, you can choose to download the derivative in chunks, by specifying a chunk size using the ``Range`` header parameter.
         * @summary Check Derivative Details
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} derivativeUrn The URL-encoded URN of the derivative. Check the manifest of the source design to get the URNs of the derivatives available for download.
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async headCheckDerivative(accessToken: string, urn: string, derivativeUrn: string, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.headCheckDerivative(accessToken, urn, derivativeUrn, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * DerivativesApi - interface
 * @export
 * @interface DerivativesApi
 */
export interface DerivativesApiInterface {
    /**
     * Returns a download URL and a set of signed cookies, which lets you securely download the derivative specified by the ``derivativeUrn`` URI parameter. The signed cookies have a lifetime of 6 hours. You can use range headers with the returned download URL to download the derivative in chunks, in parallel.
     * @summary Fetch Derivative Download URL
     * @param {string} derivativeUrn The URL-encoded URN of the derivative. Use the &#x60;Fetch Manifest operation &lt;/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/&gt;&#x60;_to obtain the URNs of derivatives for the specified source design.
     * @param {string} urn The URL-safe Base64 encoded URN of the source design.
     * @param {number} [minutesExpiration] Specifies how many minutes the signed cookies should remain valid. Default value is 360 minutes. The value you specify must be lower than the default value for this parameter. If you specify a value greater than the default value, the Model Derivative service will return an error with an HTTP status code of &#x60;&#x60;400&#x60;&#x60;.
     * @param {string} [responseContentDisposition] The value that must be specified as the &#x60;&#x60;response-content-disposition&#x60;&#x60; query string parameter with the download URL. Must begin with &#x60;&#x60;attachment&#x60;&#x60;. This value defaults to the default value corresponding to the derivative/file.
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DerivativesApiInterface
     */
    getDerivativeUrl(accessToken: string,derivativeUrn: string, urn: string, minutesExpiration?: number, responseContentDisposition?: string, region?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns information about the specified derivative.  Use this operation to determine the total content length of a derivative before you download it. If the derivative is large, you can choose to download the derivative in chunks, by specifying a chunk size using the ``Range`` header parameter.
     * @summary Check Derivative Details
     * @param {string} urn The URL-safe Base64 encoded URN of the source design.
     * @param {string} derivativeUrn The URL-encoded URN of the derivative. Check the manifest of the source design to get the URNs of the derivatives available for download.
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DerivativesApiInterface
     */
    headCheckDerivative(accessToken: string,urn: string, derivativeUrn: string, region?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * DerivativesApi - object-oriented interface
 * @export
 * @class DerivativesApi
 * @extends {BaseApi}
 */
export class DerivativesApi extends BaseApi implements DerivativesApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Returns a download URL and a set of signed cookies, which lets you securely download the derivative specified by the ``derivativeUrn`` URI parameter. The signed cookies have a lifetime of 6 hours. You can use range headers with the returned download URL to download the derivative in chunks, in parallel.
     * @summary Fetch Derivative Download URL
     * @param {string} derivativeUrn The URL-encoded URN of the derivative. Use the &#x60;Fetch Manifest operation &lt;/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/&gt;&#x60;_to obtain the URNs of derivatives for the specified source design.
     * @param {string} urn The URL-safe Base64 encoded URN of the source design.
     * @param {number} [minutesExpiration] Specifies how many minutes the signed cookies should remain valid. Default value is 360 minutes. The value you specify must be lower than the default value for this parameter. If you specify a value greater than the default value, the Model Derivative service will return an error with an HTTP status code of &#x60;&#x60;400&#x60;&#x60;.
     * @param {string} [responseContentDisposition] The value that must be specified as the &#x60;&#x60;response-content-disposition&#x60;&#x60; query string parameter with the download URL. Must begin with &#x60;&#x60;attachment&#x60;&#x60;. This value defaults to the default value corresponding to the derivative/file.
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DerivativesApi
     */
    public async getDerivativeUrl(accessToken: string, derivativeUrn: string, urn: string, minutesExpiration?: number, responseContentDisposition?: string, region?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getDerivativeUrl ");
      try {
        const request =  await DerivativesApiFp(this.sdkManager).getDerivativeUrl(accessToken, derivativeUrn, urn, minutesExpiration, responseContentDisposition, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getDerivativeUrl Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getDerivativeUrl Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ModelDerivativeApiError(`getDerivativeUrl Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getDerivativeUrl Request failed with no response received: ${error.request}`);
            throw new ModelDerivativeApiError(`getDerivativeUrl Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns information about the specified derivative.  Use this operation to determine the total content length of a derivative before you download it. If the derivative is large, you can choose to download the derivative in chunks, by specifying a chunk size using the ``Range`` header parameter.
     * @summary Check Derivative Details
     * @param {string} urn The URL-safe Base64 encoded URN of the source design.
     * @param {string} derivativeUrn The URL-encoded URN of the derivative. Check the manifest of the source design to get the URNs of the derivatives available for download.
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DerivativesApi
     */
    public async headCheckDerivative(accessToken: string, urn: string, derivativeUrn: string, region?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into headCheckDerivative ");
      try {
        const request =  await DerivativesApiFp(this.sdkManager).headCheckDerivative(accessToken, urn, derivativeUrn, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`headCheckDerivative Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`headCheckDerivative Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ModelDerivativeApiError(`headCheckDerivative Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`headCheckDerivative Request failed with no response received: ${error.request}`);
            throw new ModelDerivativeApiError(`headCheckDerivative Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

