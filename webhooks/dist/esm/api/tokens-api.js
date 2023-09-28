/* tslint:disable */
/* eslint-disable */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ApiResponse } from "autodesk-sdkmanager";
import { setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { BaseAPI, WebhooksApiApiError } from '../base';
/**
 * TokensApi - axios parameter creator
 * @export
 */
export const TokensApiAxiosParamCreator = function (apsConfiguration) {
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
        deleteTokensme: (accessToken, xAdsRegion, region, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/tokens/@me`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = String(xAdsRegion);
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        postTokens: (accessToken, xAdsRegion, region, createToken, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/tokens`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
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
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = serializeDataIfNeeded(createToken, localVarRequestOptions, apsConfiguration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        putTokensme: (accessToken, xAdsRegion, region, createToken, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/tokens/@me`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
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
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = serializeDataIfNeeded(createToken, localVarRequestOptions, apsConfiguration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * TokensApi - functional programming interface
 * @export
 */
export const TokensApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = TokensApiAxiosParamCreator(sdkManager.apsconfiguration);
    return {
        /**
         * Delete a Webhook secret token
         * @summary Delete a Webhook secret token
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTokensme(accessToken, xAdsRegion, region, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.deleteTokensme(accessToken, xAdsRegion, region, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
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
        postTokens(accessToken, xAdsRegion, region, createToken, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.postTokens(accessToken, xAdsRegion, region, createToken, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
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
        putTokensme(accessToken, xAdsRegion, region, createToken, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.putTokensme(accessToken, xAdsRegion, region, createToken, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
/**
 * TokensApi - object-oriented interface
 * @export
 * @class TokensApi
 * @extends {BaseAPI}
 */
export class TokensApi extends BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
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
    deleteTokensme(accessToken, xAdsRegion, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into deleteTokensme ");
            try {
                const request = yield TokensApiFp(this.sdkManager).deleteTokensme(accessToken, xAdsRegion, region, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`deleteTokensme Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`deleteTokensme Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new WebhooksApiApiError(`deleteTokensme Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`deleteTokensme Request failed with no response received: ${error.request}`);
                    throw new WebhooksApiApiError(`deleteTokensme Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
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
    postTokens(accessToken, xAdsRegion, region, createToken, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into postTokens ");
            try {
                const request = yield TokensApiFp(this.sdkManager).postTokens(accessToken, xAdsRegion, region, createToken, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`postTokens Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`postTokens Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new WebhooksApiApiError(`postTokens Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`postTokens Request failed with no response received: ${error.request}`);
                    throw new WebhooksApiApiError(`postTokens Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
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
    putTokensme(accessToken, xAdsRegion, region, createToken, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into putTokensme ");
            try {
                const request = yield TokensApiFp(this.sdkManager).putTokensme(accessToken, xAdsRegion, region, createToken, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`putTokensme Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`putTokensme Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new WebhooksApiApiError(`putTokensme Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`putTokensme Request failed with no response received: ${error.request}`);
                    throw new WebhooksApiApiError(`putTokensme Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
