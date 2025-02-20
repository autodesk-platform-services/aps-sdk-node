/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, WebhooksApiError } from '../base';
import { Region } from '../model';
import { Token } from '../model';
import { TokenPayload } from '../model';
import { XAdsRegion } from '../model';
/**
 * TokensApi - axios parameter creator
 * @export
 */
export const TokensApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Sets a secret token to verify the authenticity of webhook payloads.   When a webhook event occurs, the service calculates a hash signature using the token and includes it in the event notification. The receiving application listening at the callback URL can verify the payload\'s integrity by comparing the calculated signature to the one received.  The webhooks affected by this operation are determined by the type of access token you use.  - Two-legged Access Token: Sets the secret token for all webhooks owned by calling the app. - Three-legged Access Token: Sets the secret token for all webhooks owned by the calling user  **Note:** Use the [Update Webhook operation](/en/docs/webhooks/v1/reference/http/webhooks/systems-system-events-event-hooks-hook_id-PATCH/) to set a token for a specific webhook.   See the [Secret Token](/en/docs/webhooks/v1/developers_guide/basics/#secret-token) section in API Basics for more information.
         * @summary Create Secret Token
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {TokenPayload} [tokenPayload] The request payload for a Create Secret request
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createToken: async (accessToken: string, xAdsRegion?: XAdsRegion, region?: Region, tokenPayload?: TokenPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/webhooks/v1/tokens`;
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
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/WEBHOOKS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(tokenPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes an existing secret token from the webhooks impacted by this operation.   The webhooks affected by this operation are determined by the type of access token you use.  - Two-legged Access Token: Sets the secret token for all webhooks owned by calling the app. - Three-legged Access Token: Sets the secrety token for all webhooks owned by the calling user  Note that there can be a delay of up to 10 minutes while the change takes effect. We recommend that your callback accept both secret token values for a period of time to allow all requests to go through.  See the [Secret Token](/en/docs/webhooks/v1/developers_guide/basics/#secret-token) section in API Basics for more information.
         * @summary Delete Secret Token
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteToken: async (accessToken: string, xAdsRegion?: XAdsRegion, region?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/webhooks/v1/tokens/@me`;
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
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/WEBHOOKS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces an existing secret token with a new one.   Note that there can be a delay of up to 10 minutes while the change takes effect. We recommend that your callback accept both secret token values for a period of time to allow all requests to go through.  The webhooks affected by this operation are determined by the type of access token you use.  - Two-legged Access Token: Sets the secret token for all webhooks owned by calling the app. - Three-legged Access Token: Sets the secrety token for all webhooks owned by the calling user  **Note:** Use the [Update Webhook operation](/en/docs/webhooks/v1/reference/http/webhooks/systems-system-events-event-hooks-hook_id-PATCH/) to set a token for a specific webhook.   See the [Secret Token](/en/docs/webhooks/v1/developers_guide/basics/#secret-token) section in API Basics for more information.
         * @summary Update Secret Token
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {TokenPayload} [tokenPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putToken: async (accessToken: string, xAdsRegion?: XAdsRegion, region?: Region, tokenPayload?: TokenPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/webhooks/v1/tokens/@me`;
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
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/WEBHOOKS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(tokenPayload, localVarRequestOptions, apsConfiguration)

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
export const TokensApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = TokensApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Sets a secret token to verify the authenticity of webhook payloads.   When a webhook event occurs, the service calculates a hash signature using the token and includes it in the event notification. The receiving application listening at the callback URL can verify the payload\'s integrity by comparing the calculated signature to the one received.  The webhooks affected by this operation are determined by the type of access token you use.  - Two-legged Access Token: Sets the secret token for all webhooks owned by calling the app. - Three-legged Access Token: Sets the secret token for all webhooks owned by the calling user  **Note:** Use the [Update Webhook operation](/en/docs/webhooks/v1/reference/http/webhooks/systems-system-events-event-hooks-hook_id-PATCH/) to set a token for a specific webhook.   See the [Secret Token](/en/docs/webhooks/v1/developers_guide/basics/#secret-token) section in API Basics for more information.
         * @summary Create Secret Token
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {TokenPayload} [tokenPayload] The request payload for a Create Secret request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createToken(accessToken: string, xAdsRegion?: XAdsRegion, region?: Region, tokenPayload?: TokenPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Token>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createToken(accessToken, xAdsRegion, region, tokenPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Removes an existing secret token from the webhooks impacted by this operation.   The webhooks affected by this operation are determined by the type of access token you use.  - Two-legged Access Token: Sets the secret token for all webhooks owned by calling the app. - Three-legged Access Token: Sets the secrety token for all webhooks owned by the calling user  Note that there can be a delay of up to 10 minutes while the change takes effect. We recommend that your callback accept both secret token values for a period of time to allow all requests to go through.  See the [Secret Token](/en/docs/webhooks/v1/developers_guide/basics/#secret-token) section in API Basics for more information.
         * @summary Delete Secret Token
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteToken(accessToken: string, xAdsRegion?: XAdsRegion, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteToken(accessToken, xAdsRegion, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Replaces an existing secret token with a new one.   Note that there can be a delay of up to 10 minutes while the change takes effect. We recommend that your callback accept both secret token values for a period of time to allow all requests to go through.  The webhooks affected by this operation are determined by the type of access token you use.  - Two-legged Access Token: Sets the secret token for all webhooks owned by calling the app. - Three-legged Access Token: Sets the secrety token for all webhooks owned by the calling user  **Note:** Use the [Update Webhook operation](/en/docs/webhooks/v1/reference/http/webhooks/systems-system-events-event-hooks-hook_id-PATCH/) to set a token for a specific webhook.   See the [Secret Token](/en/docs/webhooks/v1/developers_guide/basics/#secret-token) section in API Basics for more information.
         * @summary Update Secret Token
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {TokenPayload} [tokenPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putToken(accessToken: string, xAdsRegion?: XAdsRegion, region?: Region, tokenPayload?: TokenPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putToken(accessToken, xAdsRegion, region, tokenPayload,  options);
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
     * Sets a secret token to verify the authenticity of webhook payloads.   When a webhook event occurs, the service calculates a hash signature using the token and includes it in the event notification. The receiving application listening at the callback URL can verify the payload\'s integrity by comparing the calculated signature to the one received.  The webhooks affected by this operation are determined by the type of access token you use.  - Two-legged Access Token: Sets the secret token for all webhooks owned by calling the app. - Three-legged Access Token: Sets the secret token for all webhooks owned by the calling user  **Note:** Use the [Update Webhook operation](/en/docs/webhooks/v1/reference/http/webhooks/systems-system-events-event-hooks-hook_id-PATCH/) to set a token for a specific webhook.   See the [Secret Token](/en/docs/webhooks/v1/developers_guide/basics/#secret-token) section in API Basics for more information.
     * @summary Create Secret Token
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {TokenPayload} [tokenPayload] The request payload for a Create Secret request
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApiInterface
     */
    createToken(accessToken: string,xAdsRegion?: XAdsRegion, region?: Region, tokenPayload?: TokenPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Removes an existing secret token from the webhooks impacted by this operation.   The webhooks affected by this operation are determined by the type of access token you use.  - Two-legged Access Token: Sets the secret token for all webhooks owned by calling the app. - Three-legged Access Token: Sets the secrety token for all webhooks owned by the calling user  Note that there can be a delay of up to 10 minutes while the change takes effect. We recommend that your callback accept both secret token values for a period of time to allow all requests to go through.  See the [Secret Token](/en/docs/webhooks/v1/developers_guide/basics/#secret-token) section in API Basics for more information.
     * @summary Delete Secret Token
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApiInterface
     */
    deleteToken(accessToken: string,xAdsRegion?: XAdsRegion, region?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Replaces an existing secret token with a new one.   Note that there can be a delay of up to 10 minutes while the change takes effect. We recommend that your callback accept both secret token values for a period of time to allow all requests to go through.  The webhooks affected by this operation are determined by the type of access token you use.  - Two-legged Access Token: Sets the secret token for all webhooks owned by calling the app. - Three-legged Access Token: Sets the secrety token for all webhooks owned by the calling user  **Note:** Use the [Update Webhook operation](/en/docs/webhooks/v1/reference/http/webhooks/systems-system-events-event-hooks-hook_id-PATCH/) to set a token for a specific webhook.   See the [Secret Token](/en/docs/webhooks/v1/developers_guide/basics/#secret-token) section in API Basics for more information.
     * @summary Update Secret Token
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {TokenPayload} [tokenPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApiInterface
     */
    putToken(accessToken: string,xAdsRegion?: XAdsRegion, region?: Region, tokenPayload?: TokenPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * TokensApi - object-oriented interface
 * @export
 * @class TokensApi
 * @extends {BaseApi}
 */
export class TokensApi extends BaseApi implements TokensApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Sets a secret token to verify the authenticity of webhook payloads.   When a webhook event occurs, the service calculates a hash signature using the token and includes it in the event notification. The receiving application listening at the callback URL can verify the payload\'s integrity by comparing the calculated signature to the one received.  The webhooks affected by this operation are determined by the type of access token you use.  - Two-legged Access Token: Sets the secret token for all webhooks owned by calling the app. - Three-legged Access Token: Sets the secret token for all webhooks owned by the calling user  **Note:** Use the [Update Webhook operation](/en/docs/webhooks/v1/reference/http/webhooks/systems-system-events-event-hooks-hook_id-PATCH/) to set a token for a specific webhook.   See the [Secret Token](/en/docs/webhooks/v1/developers_guide/basics/#secret-token) section in API Basics for more information.
     * @summary Create Secret Token
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {TokenPayload} [tokenPayload] The request payload for a Create Secret request
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApi
     */
    public async createToken(accessToken: string, xAdsRegion?: XAdsRegion, region?: Region, tokenPayload?: TokenPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createToken ");
      try {
        const request =  await TokensApiFp(this.sdkManager).createToken(accessToken, xAdsRegion, region, tokenPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createToken Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createToken Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new WebhooksApiError(`createToken Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createToken Request failed with no response received: ${error.request}`);
            throw new WebhooksApiError(`createToken Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Removes an existing secret token from the webhooks impacted by this operation.   The webhooks affected by this operation are determined by the type of access token you use.  - Two-legged Access Token: Sets the secret token for all webhooks owned by calling the app. - Three-legged Access Token: Sets the secrety token for all webhooks owned by the calling user  Note that there can be a delay of up to 10 minutes while the change takes effect. We recommend that your callback accept both secret token values for a period of time to allow all requests to go through.  See the [Secret Token](/en/docs/webhooks/v1/developers_guide/basics/#secret-token) section in API Basics for more information.
     * @summary Delete Secret Token
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApi
     */
    public async deleteToken(accessToken: string, xAdsRegion?: XAdsRegion, region?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into deleteToken ");
      try {
        const request =  await TokensApiFp(this.sdkManager).deleteToken(accessToken, xAdsRegion, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`deleteToken Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`deleteToken Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new WebhooksApiError(`deleteToken Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`deleteToken Request failed with no response received: ${error.request}`);
            throw new WebhooksApiError(`deleteToken Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Replaces an existing secret token with a new one.   Note that there can be a delay of up to 10 minutes while the change takes effect. We recommend that your callback accept both secret token values for a period of time to allow all requests to go through.  The webhooks affected by this operation are determined by the type of access token you use.  - Two-legged Access Token: Sets the secret token for all webhooks owned by calling the app. - Three-legged Access Token: Sets the secrety token for all webhooks owned by the calling user  **Note:** Use the [Update Webhook operation](/en/docs/webhooks/v1/reference/http/webhooks/systems-system-events-event-hooks-hook_id-PATCH/) to set a token for a specific webhook.   See the [Secret Token](/en/docs/webhooks/v1/developers_guide/basics/#secret-token) section in API Basics for more information.
     * @summary Update Secret Token
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {TokenPayload} [tokenPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApi
     */
    public async putToken(accessToken: string, xAdsRegion?: XAdsRegion, region?: Region, tokenPayload?: TokenPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into putToken ");
      try {
        const request =  await TokensApiFp(this.sdkManager).putToken(accessToken, xAdsRegion, region, tokenPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`putToken Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`putToken Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new WebhooksApiError(`putToken Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`putToken Request failed with no response received: ${error.request}`);
            throw new WebhooksApiError(`putToken Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

