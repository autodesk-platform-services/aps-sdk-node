"use strict";
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokensApi = exports.TokensApiFp = exports.TokensApiAxiosParamCreator = void 0;
var autodesk_sdkmanager_1 = require("autodesk-sdkmanager");
var common_1 = require("../common");
var base_1 = require("../base");
/**
 * TokensApi - axios parameter creator
 * @export
 */
var TokensApiAxiosParamCreator = function (apsConfiguration) {
    var _this = this;
    return {
        /**
         * Add a new Webhook secret token
         * @summary Add a new Webhook secret token
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {TokenPayload} [tokenPayload] A secret token that is used to generate a hash signature, which is passed along with notification requests to the callback URL
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createToken: function (accessToken, xAdsRegion, region, tokenPayload, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/webhooks/v1/tokens";
                            localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
                            if (apsConfiguration) {
                                baseOptions = apsConfiguration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            return [4 /*yield*/, (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken)];
                        case 1:
                            _a.sent();
                            if (region !== undefined) {
                                localVarQueryParameter['region'] = region;
                            }
                            if (xAdsRegion != null) {
                                localVarHeaderParameter['x-ads-region'] = String(xAdsRegion);
                            }
                            localVarHeaderParameter['Content-Type'] = 'application/json';
                            localVarHeaderParameter['User-Agent'] = 'APS SDK/WEBHOOKS/TypeScript/1.0.0';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(tokenPayload, localVarRequestOptions, apsConfiguration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Delete a Webhook secret token
         * @summary Delete a Webhook secret token
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteToken: function (accessToken, xAdsRegion, region, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/webhooks/v1/tokens/@me";
                            localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
                            if (apsConfiguration) {
                                baseOptions = apsConfiguration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'DELETE' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            return [4 /*yield*/, (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken)];
                        case 1:
                            _a.sent();
                            if (region !== undefined) {
                                localVarQueryParameter['region'] = region;
                            }
                            if (xAdsRegion != null) {
                                localVarHeaderParameter['x-ads-region'] = String(xAdsRegion);
                            }
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Update an existing Webhook secret token
         * @summary Update an existing Webhook secret token
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {TokenPayload} [tokenPayload]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putToken: function (accessToken, xAdsRegion, region, tokenPayload, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/webhooks/v1/tokens/@me";
                            localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
                            if (apsConfiguration) {
                                baseOptions = apsConfiguration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'PUT' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            return [4 /*yield*/, (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken)];
                        case 1:
                            _a.sent();
                            if (region !== undefined) {
                                localVarQueryParameter['region'] = region;
                            }
                            if (xAdsRegion != null) {
                                localVarHeaderParameter['x-ads-region'] = String(xAdsRegion);
                            }
                            localVarHeaderParameter['Content-Type'] = 'application/json';
                            localVarHeaderParameter['User-Agent'] = 'APS SDK/WEBHOOKS/TypeScript/1.0.0';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(tokenPayload, localVarRequestOptions, apsConfiguration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
    };
};
exports.TokensApiAxiosParamCreator = TokensApiAxiosParamCreator;
/**
 * TokensApi - functional programming interface
 * @export
 */
var TokensApiFp = function (sdkManager) {
    var localVarAxiosParamCreator = (0, exports.TokensApiAxiosParamCreator)(sdkManager.apsconfiguration);
    return {
        /**
         * Add a new Webhook secret token
         * @summary Add a new Webhook secret token
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {TokenPayload} [tokenPayload] A secret token that is used to generate a hash signature, which is passed along with notification requests to the callback URL
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createToken: function (accessToken, xAdsRegion, region, tokenPayload, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.createToken(accessToken, xAdsRegion, region, tokenPayload, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager)];
                    }
                });
            });
        },
        /**
         * Delete a Webhook secret token
         * @summary Delete a Webhook secret token
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteToken: function (accessToken, xAdsRegion, region, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.deleteToken(accessToken, xAdsRegion, region, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager)];
                    }
                });
            });
        },
        /**
         * Update an existing Webhook secret token
         * @summary Update an existing Webhook secret token
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {TokenPayload} [tokenPayload]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putToken: function (accessToken, xAdsRegion, region, tokenPayload, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.putToken(accessToken, xAdsRegion, region, tokenPayload, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager)];
                    }
                });
            });
        },
    };
};
exports.TokensApiFp = TokensApiFp;
/**
 * TokensApi - object-oriented interface
 * @export
 * @class TokensApi
 * @extends {BaseAPI}
 */
var TokensApi = /** @class */ (function (_super) {
    __extends(TokensApi, _super);
    function TokensApi() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logger = _this.sdkManager.logger;
        return _this;
    }
    /**
     * Add a new Webhook secret token
     * @summary Add a new Webhook secret token
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param {TokenPayload} [tokenPayload] A secret token that is used to generate a hash signature, which is passed along with notification requests to the callback URL
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApi
     */
    TokensApi.prototype.createToken = function (accessToken, xAdsRegion, region, tokenPayload, options) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.logInfo("Entered into createToken ");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, (0, exports.TokensApiFp)(this.sdkManager).createToken(accessToken, xAdsRegion, region, tokenPayload, options)];
                    case 2:
                        request = _a.sent();
                        return [4 /*yield*/, request(this.axios)];
                    case 3:
                        response = _a.sent();
                        this.logger.logInfo("createToken Request completed successfully with status code: ".concat(response.status));
                        return [2 /*return*/, new autodesk_sdkmanager_1.ApiResponse(response, response.data)];
                    case 4:
                        error_1 = _a.sent();
                        if (error_1.response) {
                            this.logger.logError("createToken Request failed with status : ".concat(error_1.response.status, " and statusText : ").concat(error_1.response.statusText, " and error message: ").concat(error_1.response.data.reason));
                            throw new base_1.WebhooksApiError("createToken Request failed with status : ".concat(error_1.response.status, " and error message: ").concat(error_1.response.data.reason), error_1);
                        }
                        else if (error_1.request) {
                            this.logger.logError("createToken Request failed with no response received: ".concat(error_1.request));
                            throw new base_1.WebhooksApiError("createToken Request failed with no response received: ".concat(error_1.request), error_1);
                        }
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
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
    TokensApi.prototype.deleteToken = function (accessToken, xAdsRegion, region, options) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.logInfo("Entered into deleteToken ");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, (0, exports.TokensApiFp)(this.sdkManager).deleteToken(accessToken, xAdsRegion, region, options)];
                    case 2:
                        request = _a.sent();
                        return [4 /*yield*/, request(this.axios)];
                    case 3:
                        response = _a.sent();
                        this.logger.logInfo("deleteToken Request completed successfully with status code: ".concat(response.status));
                        return [2 /*return*/, new autodesk_sdkmanager_1.ApiResponse(response, response.data)];
                    case 4:
                        error_2 = _a.sent();
                        if (error_2.response) {
                            this.logger.logError("deleteToken Request failed with status : ".concat(error_2.response.status, " and statusText : ").concat(error_2.response.statusText, " and error message: ").concat(error_2.response.data.reason));
                            throw new base_1.WebhooksApiError("deleteToken Request failed with status : ".concat(error_2.response.status, " and error message: ").concat(error_2.response.data.reason), error_2);
                        }
                        else if (error_2.request) {
                            this.logger.logError("deleteToken Request failed with no response received: ".concat(error_2.request));
                            throw new base_1.WebhooksApiError("deleteToken Request failed with no response received: ".concat(error_2.request), error_2);
                        }
                        throw error_2;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Update an existing Webhook secret token
     * @summary Update an existing Webhook secret token
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param {TokenPayload} [tokenPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApi
     */
    TokensApi.prototype.putToken = function (accessToken, xAdsRegion, region, tokenPayload, options) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.logInfo("Entered into putToken ");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, (0, exports.TokensApiFp)(this.sdkManager).putToken(accessToken, xAdsRegion, region, tokenPayload, options)];
                    case 2:
                        request = _a.sent();
                        return [4 /*yield*/, request(this.axios)];
                    case 3:
                        response = _a.sent();
                        this.logger.logInfo("putToken Request completed successfully with status code: ".concat(response.status));
                        return [2 /*return*/, new autodesk_sdkmanager_1.ApiResponse(response, response.data)];
                    case 4:
                        error_3 = _a.sent();
                        if (error_3.response) {
                            this.logger.logError("putToken Request failed with status : ".concat(error_3.response.status, " and statusText : ").concat(error_3.response.statusText, " and error message: ").concat(error_3.response.data.reason));
                            throw new base_1.WebhooksApiError("putToken Request failed with status : ".concat(error_3.response.status, " and error message: ").concat(error_3.response.data.reason), error_3);
                        }
                        else if (error_3.request) {
                            this.logger.logError("putToken Request failed with no response received: ".concat(error_3.request));
                            throw new base_1.WebhooksApiError("putToken Request failed with no response received: ".concat(error_3.request), error_3);
                        }
                        throw error_3;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return TokensApi;
}(base_1.BaseAPI));
exports.TokensApi = TokensApi;
