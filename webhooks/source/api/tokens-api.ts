/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse} from "autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, WebhooksApiApiError } from '../base';
import { CreateToken } from '../model';
import { CreateTokenResponse } from '../model';
import { GetSystemsSystemEventsEventHooksHookId400Response } from '../model';
/**
 * TokensApi - axios parameter creator
 * @export
 */
export const TokensApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Delete a Webhook secret token
         * @summary Delete a Webhook secret token
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTokensme: async (accessToken: string, xAdsRegion?: string, region?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/tokens/@me`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }

            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = String(xAdsRegion);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Add a new Webhook secret token
         * @summary Add a new Webhook secret token
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence. 
         * @param {CreateToken} [createToken] A secret token that is used to generate a hash signature, which is passed along with notification requests to the callback URL
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTokens: async (accessToken: string, xAdsRegion?: string, region?: string, createToken?: CreateToken,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/tokens`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }

            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = String(xAdsRegion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/WEBHOOKS-API/TypeScript/1.0.0';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createToken, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update an existing Webhook secret token
         * @summary Update an existing Webhook secret token
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence. 
         * @param {CreateToken} [createToken] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTokensme: async (accessToken: string, xAdsRegion?: string, region?: string, createToken?: CreateToken,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/tokens/@me`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }

            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = String(xAdsRegion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/WEBHOOKS-API/TypeScript/1.0.0';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createToken, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TokensApi - functional programming interface
 * @export
 */
export const TokensApiFp = function(sdkManager?: SDKManager) {
    const localVarAxiosParamCreator = TokensApiAxiosParamCreator(sdkManager.apsconfiguration)
    return {
        /**
         * Delete a Webhook secret token
         * @summary Delete a Webhook secret token
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTokensme(accessToken: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTokensme(accessToken, xAdsRegion, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Add a new Webhook secret token
         * @summary Add a new Webhook secret token
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence. 
         * @param {CreateToken} [createToken] A secret token that is used to generate a hash signature, which is passed along with notification requests to the callback URL
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postTokens(accessToken: string, xAdsRegion?: string, region?: string, createToken?: CreateToken, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateTokenResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postTokens(accessToken, xAdsRegion, region, createToken,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Update an existing Webhook secret token
         * @summary Update an existing Webhook secret token
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence. 
         * @param {CreateToken} [createToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putTokensme(accessToken: string, xAdsRegion?: string, region?: string, createToken?: CreateToken, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putTokensme(accessToken, xAdsRegion, region, createToken,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * TokensApi - interface
 * @export
 * @interface TokensApi
 */
export interface TokensApiInterface {
    /**
     * Delete a Webhook secret token
     * @summary Delete a Webhook secret token
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApiInterface
     */
    deleteTokensme(accessToken: string,xAdsRegion?: string, region?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Add a new Webhook secret token
     * @summary Add a new Webhook secret token
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence. 
     * @param {CreateToken} [createToken] A secret token that is used to generate a hash signature, which is passed along with notification requests to the callback URL
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApiInterface
     */
    postTokens(accessToken: string,xAdsRegion?: string, region?: string, createToken?: CreateToken,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Update an existing Webhook secret token
     * @summary Update an existing Webhook secret token
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence. 
     * @param {CreateToken} [createToken] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApiInterface
     */
    putTokensme(accessToken: string,xAdsRegion?: string, region?: string, createToken?: CreateToken,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * TokensApi - object-oriented interface
 * @export
 * @class TokensApi
 * @extends {BaseAPI}
 */
export class TokensApi extends BaseAPI implements TokensApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Delete a Webhook secret token
     * @summary Delete a Webhook secret token
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApi
     */
    public async deleteTokensme(accessToken: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into deleteTokensme ");
      try {
        const request =  await TokensApiFp(this.sdkManager).deleteTokensme(accessToken, xAdsRegion, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`deleteTokensme Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`deleteTokensme Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new WebhooksApiApiError(`deleteTokensme Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`deleteTokensme Request failed with no response received: ${error.request}`);
            throw new WebhooksApiApiError(`deleteTokensme Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Add a new Webhook secret token
     * @summary Add a new Webhook secret token
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence. 
     * @param {CreateToken} [createToken] A secret token that is used to generate a hash signature, which is passed along with notification requests to the callback URL
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApi
     */
    public async postTokens(accessToken: string, xAdsRegion?: string, region?: string, createToken?: CreateToken, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into postTokens ");
      try {
        const request =  await TokensApiFp(this.sdkManager).postTokens(accessToken, xAdsRegion, region, createToken,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`postTokens Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`postTokens Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new WebhooksApiApiError(`postTokens Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`postTokens Request failed with no response received: ${error.request}`);
            throw new WebhooksApiApiError(`postTokens Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Update an existing Webhook secret token
     * @summary Update an existing Webhook secret token
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence. 
     * @param {CreateToken} [createToken] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApi
     */
    public async putTokensme(accessToken: string, xAdsRegion?: string, region?: string, createToken?: CreateToken, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into putTokensme ");
      try {
        const request =  await TokensApiFp(this.sdkManager).putTokensme(accessToken, xAdsRegion, region, createToken,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`putTokensme Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`putTokensme Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new WebhooksApiApiError(`putTokensme Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`putTokensme Request failed with no response received: ${error.request}`);
            throw new WebhooksApiApiError(`putTokensme Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

