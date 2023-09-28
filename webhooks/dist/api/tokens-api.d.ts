import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { CreateToken } from '../model';
import { CreateTokenResponse } from '../model';
/**
 * TokensApi - axios parameter creator
 * @export
 */
export declare const TokensApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
    /**
     * Delete a Webhook secret token
     * @summary Delete a Webhook secret token
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTokensme: (accessToken: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    postTokens: (accessToken: string, xAdsRegion?: string, region?: string, createToken?: CreateToken, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    putTokensme: (accessToken: string, xAdsRegion?: string, region?: string, createToken?: CreateToken, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * TokensApi - functional programming interface
 * @export
 */
export declare const TokensApiFp: (sdkManager?: SDKManager) => {
    /**
     * Delete a Webhook secret token
     * @summary Delete a Webhook secret token
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTokensme(accessToken: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Add a new Webhook secret token
     * @summary Add a new Webhook secret token
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param {CreateToken} [createToken] A secret token that is used to generate a hash signature, which is passed along with notification requests to the callback URL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postTokens(accessToken: string, xAdsRegion?: string, region?: string, createToken?: CreateToken, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateTokenResponse>>;
    /**
     * Update an existing Webhook secret token
     * @summary Update an existing Webhook secret token
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param {CreateToken} [createToken]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putTokensme(accessToken: string, xAdsRegion?: string, region?: string, createToken?: CreateToken, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
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
    deleteTokensme(accessToken: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    postTokens(accessToken: string, xAdsRegion?: string, region?: string, createToken?: CreateToken, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    putTokensme(accessToken: string, xAdsRegion?: string, region?: string, createToken?: CreateToken, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * TokensApi - object-oriented interface
 * @export
 * @class TokensApi
 * @extends {BaseAPI}
 */
export declare class TokensApi extends BaseAPI implements TokensApiInterface {
    private logger;
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
    deleteTokensme(accessToken: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    postTokens(accessToken: string, xAdsRegion?: string, region?: string, createToken?: CreateToken, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    putTokensme(accessToken: string, xAdsRegion?: string, region?: string, createToken?: CreateToken, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
