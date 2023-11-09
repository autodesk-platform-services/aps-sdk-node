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
exports.HooksApi = exports.HooksApiFp = exports.HooksApiAxiosParamCreator = void 0;
var autodesk_sdkmanager_1 = require("autodesk-sdkmanager");
var common_1 = require("../common");
var base_1 = require("../base");
/**
 * HooksApi - axios parameter creator
 * @export
 */
var HooksApiAxiosParamCreator = function (apsConfiguration) {
    var _this = this;
    return {
        /**
         * Add new webhook to receive the notification on a specified event.
         * @summary Add new webhook to receive the notification on a specified event.
         * @param {Systems} system string A system for example data for Data Management
         * @param {Events} event string A system for example data for Data Management
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {HookPayload} [hookPayload]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSystemEventHook: function (accessToken, system, event, xAdsRegion, region, hookPayload, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'system' is not null or undefined
                            (0, common_1.assertParamExists)('createSystemEventHook', 'system', system);
                            // verify required parameter 'event' is not null or undefined
                            (0, common_1.assertParamExists)('createSystemEventHook', 'event', event);
                            localVarPath = "/webhooks/v1/systems/{system}/events/{event}/hooks"
                                .replace("{".concat("system", "}"), encodeURIComponent(String(system)))
                                .replace("{".concat("event", "}"), encodeURIComponent(String(event)));
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
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(hookPayload, localVarRequestOptions, apsConfiguration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Add new webhooks to receive the notification on all the events.
         * @summary Add new webhooks to receive the notification on all the events.
         * @param {Systems} system string A system for example data for Data Management
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {HookPayload} [hookPayload]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSystemHook: function (accessToken, system, xAdsRegion, region, hookPayload, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'system' is not null or undefined
                            (0, common_1.assertParamExists)('createSystemHook', 'system', system);
                            localVarPath = "/webhooks/v1/systems/{system}/hooks"
                                .replace("{".concat("system", "}"), encodeURIComponent(String(system)));
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
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(hookPayload, localVarRequestOptions, apsConfiguration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Deletes a webhook based on webhook ID
         * @summary Deletes a webhook based on webhook ID
         * @param {Systems} system string A system for example data for Data Management
         * @param {Events} event string A system for example data for Data Management
         * @param {string} hookId Id of the webhook to retrieve
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSystemEventHook: function (accessToken, system, event, hookId, xAdsRegion, region, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'system' is not null or undefined
                            (0, common_1.assertParamExists)('deleteSystemEventHook', 'system', system);
                            // verify required parameter 'event' is not null or undefined
                            (0, common_1.assertParamExists)('deleteSystemEventHook', 'event', event);
                            // verify required parameter 'hookId' is not null or undefined
                            (0, common_1.assertParamExists)('deleteSystemEventHook', 'hookId', hookId);
                            localVarPath = "/webhooks/v1/systems/{system}/events/{event}/hooks/{hook_id}"
                                .replace("{".concat("system", "}"), encodeURIComponent(String(system)))
                                .replace("{".concat("event", "}"), encodeURIComponent(String(event)))
                                .replace("{".concat("hook_id", "}"), encodeURIComponent(String(hookId)));
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
         * Retrieves a paginated list of webhooks created in the context of a Client or Application. This API accepts 2-legged token of the application only. If the pageState query string is not specified, the first page is returned.
         * @summary Retrieves a paginated list of webhooks created in the context of a Client or Application. This API accepts 2-legged token of the application only. If the pageState query string is not specified, the first page is returned.
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the &#x60;&#x60;next&#x60;&#x60; field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
         * @param {string} [status] Status of the hooks. Options: &#x60;&#x60;active&#x60;&#x60;, &#x60;&#x60;inactive&#x60;&#x60;
         * @param {string} [sort] Sort order of the hooks based on last updated time. Options: ‘asc’, ‘desc’. Default is ‘desc’.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppHooks: function (accessToken, xAdsRegion, pageState, status, sort, region, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/webhooks/v1/app/hooks";
                            localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
                            if (apsConfiguration) {
                                baseOptions = apsConfiguration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            return [4 /*yield*/, (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken)];
                        case 1:
                            _a.sent();
                            if (pageState !== undefined) {
                                localVarQueryParameter['pageState'] = pageState;
                            }
                            if (status !== undefined) {
                                localVarQueryParameter['status'] = status;
                            }
                            if (sort !== undefined) {
                                localVarQueryParameter['sort'] = sort;
                            }
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
         * Get details of a webhook based on its webhook ID
         * @summary Get details of a webhook based on its webhook ID
         * @param {Systems} system string A system for example data for Data Management
         * @param {Events} event string A system for example data for Data Management
         * @param {string} hookId Id of the webhook to retrieve
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHookDetails: function (accessToken, system, event, hookId, xAdsRegion, region, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'system' is not null or undefined
                            (0, common_1.assertParamExists)('getHookDetails', 'system', system);
                            // verify required parameter 'event' is not null or undefined
                            (0, common_1.assertParamExists)('getHookDetails', 'event', event);
                            // verify required parameter 'hookId' is not null or undefined
                            (0, common_1.assertParamExists)('getHookDetails', 'hookId', hookId);
                            localVarPath = "/webhooks/v1/systems/{system}/events/{event}/hooks/{hook_id}"
                                .replace("{".concat("system", "}"), encodeURIComponent(String(system)))
                                .replace("{".concat("event", "}"), encodeURIComponent(String(event)))
                                .replace("{".concat("hook_id", "}"), encodeURIComponent(String(hookId)));
                            localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
                            if (apsConfiguration) {
                                baseOptions = apsConfiguration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
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
         * Retrieves a paginated list of all the webhooks. If the pageState query string is not specified, the first page is returned.
         * @summary Retrieves a paginated list of all the webhooks. If the pageState query string is not specified, the first page is returned.
         * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the next field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
         * @param {string} [status] Status of the hooks. Options: ‘active’, ‘inactive’
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: EMEA, US. Default is US.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHooks: function (accessToken, pageState, status, region, xAdsRegion, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/webhooks/v1/hooks";
                            localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
                            if (apsConfiguration) {
                                baseOptions = apsConfiguration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            return [4 /*yield*/, (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken)];
                        case 1:
                            _a.sent();
                            if (pageState !== undefined) {
                                localVarQueryParameter['pageState'] = pageState;
                            }
                            if (status !== undefined) {
                                localVarQueryParameter['status'] = status;
                            }
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
         * Retrieves a paginated list of all the webhooks for a specified event. If the pageState query string is not specified, the first page is returned.
         * @summary Retrieves a paginated list of all the webhooks for a specified event. If the pageState query string is not specified, the first page is returned.
         * @param {Systems} system string A system for example data for Data Management
         * @param {Events} event string A system for example data for Data Management
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {string} [scopeName] Scope name used to create hook. For example : folder
         * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the &#x60;&#x60;next&#x60;&#x60; field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
         * @param {string} [status] Status of the hooks. Options: &#x60;&#x60;active&#x60;&#x60;, &#x60;&#x60;inactive&#x60;&#x60;
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemEventHooks: function (accessToken, system, event, xAdsRegion, region, scopeName, pageState, status, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'system' is not null or undefined
                            (0, common_1.assertParamExists)('getSystemEventHooks', 'system', system);
                            // verify required parameter 'event' is not null or undefined
                            (0, common_1.assertParamExists)('getSystemEventHooks', 'event', event);
                            localVarPath = "/webhooks/v1/systems/{system}/events/{event}/hooks"
                                .replace("{".concat("system", "}"), encodeURIComponent(String(system)))
                                .replace("{".concat("event", "}"), encodeURIComponent(String(event)));
                            localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
                            if (apsConfiguration) {
                                baseOptions = apsConfiguration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            return [4 /*yield*/, (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken)];
                        case 1:
                            _a.sent();
                            if (region !== undefined) {
                                localVarQueryParameter['region'] = region;
                            }
                            if (scopeName !== undefined) {
                                localVarQueryParameter['scopeName'] = scopeName;
                            }
                            if (pageState !== undefined) {
                                localVarQueryParameter['pageState'] = pageState;
                            }
                            if (status !== undefined) {
                                localVarQueryParameter['status'] = status;
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
         * Retrieves a paginated list of all the webhooks for a specified system. If the pageState query string is not specified, the first page is returned.
         * @summary Retrieves a paginated list of all the webhooks for a specified system. If the pageState query string is not specified, the first page is returned.
         * @param {Systems} system string A system for example data for Data Management
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [status] Status of the hooks. Options: &#x60;&#x60;active&#x60;&#x60;, &#x60;&#x60;inactive&#x60;&#x60;
         * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the &#x60;&#x60;next&#x60;&#x60; field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemHooks: function (accessToken, system, xAdsRegion, status, pageState, region, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'system' is not null or undefined
                            (0, common_1.assertParamExists)('getSystemHooks', 'system', system);
                            localVarPath = "/webhooks/v1/systems/{system}/hooks"
                                .replace("{".concat("system", "}"), encodeURIComponent(String(system)));
                            localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
                            if (apsConfiguration) {
                                baseOptions = apsConfiguration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            return [4 /*yield*/, (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken)];
                        case 1:
                            _a.sent();
                            if (status !== undefined) {
                                localVarQueryParameter['status'] = status;
                            }
                            if (pageState !== undefined) {
                                localVarQueryParameter['pageState'] = pageState;
                            }
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
         * Partially update a webhook based on its webhook ID. The only fields that may be updated are: status, filter, hookAttribute, and hookExpiry.
         * @summary Partially update a webhook based on its webhook ID. The only fields that may be updated are: status, filter, hookAttribute, and hookExpiry.
         * @param {Systems} system string A system for example data for Data Management
         * @param {Events} event string A system for example data for Data Management
         * @param {string} hookId Id of the webhook to retrieve
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {ModifyHookPayload} [modifyHookPayload]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSystemEventHook: function (accessToken, system, event, hookId, xAdsRegion, region, modifyHookPayload, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'system' is not null or undefined
                            (0, common_1.assertParamExists)('patchSystemEventHook', 'system', system);
                            // verify required parameter 'event' is not null or undefined
                            (0, common_1.assertParamExists)('patchSystemEventHook', 'event', event);
                            // verify required parameter 'hookId' is not null or undefined
                            (0, common_1.assertParamExists)('patchSystemEventHook', 'hookId', hookId);
                            localVarPath = "/webhooks/v1/systems/{system}/events/{event}/hooks/{hook_id}"
                                .replace("{".concat("system", "}"), encodeURIComponent(String(system)))
                                .replace("{".concat("event", "}"), encodeURIComponent(String(event)))
                                .replace("{".concat("hook_id", "}"), encodeURIComponent(String(hookId)));
                            localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
                            if (apsConfiguration) {
                                baseOptions = apsConfiguration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'PATCH' }, baseOptions), options);
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
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(modifyHookPayload, localVarRequestOptions, apsConfiguration);
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
exports.HooksApiAxiosParamCreator = HooksApiAxiosParamCreator;
/**
 * HooksApi - functional programming interface
 * @export
 */
var HooksApiFp = function (sdkManager) {
    var localVarAxiosParamCreator = (0, exports.HooksApiAxiosParamCreator)(sdkManager.apsconfiguration);
    return {
        /**
         * Add new webhook to receive the notification on a specified event.
         * @summary Add new webhook to receive the notification on a specified event.
         * @param {Systems} system string A system for example data for Data Management
         * @param {Events} event string A system for example data for Data Management
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {HookPayload} [hookPayload]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSystemEventHook: function (accessToken, system, event, xAdsRegion, region, hookPayload, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.createSystemEventHook(accessToken, system, event, xAdsRegion, region, hookPayload, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager)];
                    }
                });
            });
        },
        /**
         * Add new webhooks to receive the notification on all the events.
         * @summary Add new webhooks to receive the notification on all the events.
         * @param {Systems} system string A system for example data for Data Management
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {HookPayload} [hookPayload]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSystemHook: function (accessToken, system, xAdsRegion, region, hookPayload, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.createSystemHook(accessToken, system, xAdsRegion, region, hookPayload, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager)];
                    }
                });
            });
        },
        /**
         * Deletes a webhook based on webhook ID
         * @summary Deletes a webhook based on webhook ID
         * @param {Systems} system string A system for example data for Data Management
         * @param {Events} event string A system for example data for Data Management
         * @param {string} hookId Id of the webhook to retrieve
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSystemEventHook: function (accessToken, system, event, hookId, xAdsRegion, region, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.deleteSystemEventHook(accessToken, system, event, hookId, xAdsRegion, region, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager)];
                    }
                });
            });
        },
        /**
         * Retrieves a paginated list of webhooks created in the context of a Client or Application. This API accepts 2-legged token of the application only. If the pageState query string is not specified, the first page is returned.
         * @summary Retrieves a paginated list of webhooks created in the context of a Client or Application. This API accepts 2-legged token of the application only. If the pageState query string is not specified, the first page is returned.
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the &#x60;&#x60;next&#x60;&#x60; field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
         * @param {string} [status] Status of the hooks. Options: &#x60;&#x60;active&#x60;&#x60;, &#x60;&#x60;inactive&#x60;&#x60;
         * @param {string} [sort] Sort order of the hooks based on last updated time. Options: ‘asc’, ‘desc’. Default is ‘desc’.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppHooks: function (accessToken, xAdsRegion, pageState, status, sort, region, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getAppHooks(accessToken, xAdsRegion, pageState, status, sort, region, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager)];
                    }
                });
            });
        },
        /**
         * Get details of a webhook based on its webhook ID
         * @summary Get details of a webhook based on its webhook ID
         * @param {Systems} system string A system for example data for Data Management
         * @param {Events} event string A system for example data for Data Management
         * @param {string} hookId Id of the webhook to retrieve
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHookDetails: function (accessToken, system, event, hookId, xAdsRegion, region, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getHookDetails(accessToken, system, event, hookId, xAdsRegion, region, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager)];
                    }
                });
            });
        },
        /**
         * Retrieves a paginated list of all the webhooks. If the pageState query string is not specified, the first page is returned.
         * @summary Retrieves a paginated list of all the webhooks. If the pageState query string is not specified, the first page is returned.
         * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the next field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
         * @param {string} [status] Status of the hooks. Options: ‘active’, ‘inactive’
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: EMEA, US. Default is US.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHooks: function (accessToken, pageState, status, region, xAdsRegion, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getHooks(accessToken, pageState, status, region, xAdsRegion, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager)];
                    }
                });
            });
        },
        /**
         * Retrieves a paginated list of all the webhooks for a specified event. If the pageState query string is not specified, the first page is returned.
         * @summary Retrieves a paginated list of all the webhooks for a specified event. If the pageState query string is not specified, the first page is returned.
         * @param {Systems} system string A system for example data for Data Management
         * @param {Events} event string A system for example data for Data Management
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {string} [scopeName] Scope name used to create hook. For example : folder
         * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the &#x60;&#x60;next&#x60;&#x60; field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
         * @param {string} [status] Status of the hooks. Options: &#x60;&#x60;active&#x60;&#x60;, &#x60;&#x60;inactive&#x60;&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemEventHooks: function (accessToken, system, event, xAdsRegion, region, scopeName, pageState, status, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getSystemEventHooks(accessToken, system, event, xAdsRegion, region, scopeName, pageState, status, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager)];
                    }
                });
            });
        },
        /**
         * Retrieves a paginated list of all the webhooks for a specified system. If the pageState query string is not specified, the first page is returned.
         * @summary Retrieves a paginated list of all the webhooks for a specified system. If the pageState query string is not specified, the first page is returned.
         * @param {Systems} system string A system for example data for Data Management
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [status] Status of the hooks. Options: &#x60;&#x60;active&#x60;&#x60;, &#x60;&#x60;inactive&#x60;&#x60;
         * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the &#x60;&#x60;next&#x60;&#x60; field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemHooks: function (accessToken, system, xAdsRegion, status, pageState, region, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getSystemHooks(accessToken, system, xAdsRegion, status, pageState, region, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager)];
                    }
                });
            });
        },
        /**
         * Partially update a webhook based on its webhook ID. The only fields that may be updated are: status, filter, hookAttribute, and hookExpiry.
         * @summary Partially update a webhook based on its webhook ID. The only fields that may be updated are: status, filter, hookAttribute, and hookExpiry.
         * @param {Systems} system string A system for example data for Data Management
         * @param {Events} event string A system for example data for Data Management
         * @param {string} hookId Id of the webhook to retrieve
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {ModifyHookPayload} [modifyHookPayload]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSystemEventHook: function (accessToken, system, event, hookId, xAdsRegion, region, modifyHookPayload, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.patchSystemEventHook(accessToken, system, event, hookId, xAdsRegion, region, modifyHookPayload, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager)];
                    }
                });
            });
        },
    };
};
exports.HooksApiFp = HooksApiFp;
/**
 * HooksApi - object-oriented interface
 * @export
 * @class HooksApi
 * @extends {BaseAPI}
 */
var HooksApi = /** @class */ (function (_super) {
    __extends(HooksApi, _super);
    function HooksApi() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logger = _this.sdkManager.logger;
        return _this;
    }
    /**
     * Add new webhook to receive the notification on a specified event.
     * @summary Add new webhook to receive the notification on a specified event.
     * @param {Systems} system string A system for example data for Data Management
     * @param {Events} event string A system for example data for Data Management
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param {HookPayload} [hookPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    HooksApi.prototype.createSystemEventHook = function (accessToken, system, event, xAdsRegion, region, hookPayload, options) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.logInfo("Entered into createSystemEventHook ");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, (0, exports.HooksApiFp)(this.sdkManager).createSystemEventHook(accessToken, system, event, xAdsRegion, region, hookPayload, options)];
                    case 2:
                        request = _a.sent();
                        return [4 /*yield*/, request(this.axios)];
                    case 3:
                        response = _a.sent();
                        this.logger.logInfo("createSystemEventHook Request completed successfully with status code: ".concat(response.status));
                        return [2 /*return*/, new autodesk_sdkmanager_1.ApiResponse(response, response.data)];
                    case 4:
                        error_1 = _a.sent();
                        if (error_1.response) {
                            this.logger.logError("createSystemEventHook Request failed with status : ".concat(error_1.response.status, " and statusText : ").concat(error_1.response.statusText, " and error message: ").concat(error_1.response.data.reason));
                            throw new base_1.WebhooksApiError("createSystemEventHook Request failed with status : ".concat(error_1.response.status, " and error message: ").concat(error_1.response.data.reason), error_1);
                        }
                        else if (error_1.request) {
                            this.logger.logError("createSystemEventHook Request failed with no response received: ".concat(error_1.request));
                            throw new base_1.WebhooksApiError("createSystemEventHook Request failed with no response received: ".concat(error_1.request), error_1);
                        }
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Add new webhooks to receive the notification on all the events.
     * @summary Add new webhooks to receive the notification on all the events.
     * @param {Systems} system string A system for example data for Data Management
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param {HookPayload} [hookPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    HooksApi.prototype.createSystemHook = function (accessToken, system, xAdsRegion, region, hookPayload, options) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.logInfo("Entered into createSystemHook ");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, (0, exports.HooksApiFp)(this.sdkManager).createSystemHook(accessToken, system, xAdsRegion, region, hookPayload, options)];
                    case 2:
                        request = _a.sent();
                        return [4 /*yield*/, request(this.axios)];
                    case 3:
                        response = _a.sent();
                        this.logger.logInfo("createSystemHook Request completed successfully with status code: ".concat(response.status));
                        return [2 /*return*/, new autodesk_sdkmanager_1.ApiResponse(response, response.data)];
                    case 4:
                        error_2 = _a.sent();
                        if (error_2.response) {
                            this.logger.logError("createSystemHook Request failed with status : ".concat(error_2.response.status, " and statusText : ").concat(error_2.response.statusText, " and error message: ").concat(error_2.response.data.reason));
                            throw new base_1.WebhooksApiError("createSystemHook Request failed with status : ".concat(error_2.response.status, " and error message: ").concat(error_2.response.data.reason), error_2);
                        }
                        else if (error_2.request) {
                            this.logger.logError("createSystemHook Request failed with no response received: ".concat(error_2.request));
                            throw new base_1.WebhooksApiError("createSystemHook Request failed with no response received: ".concat(error_2.request), error_2);
                        }
                        throw error_2;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Deletes a webhook based on webhook ID
     * @summary Deletes a webhook based on webhook ID
     * @param {Systems} system string A system for example data for Data Management
     * @param {Events} event string A system for example data for Data Management
     * @param {string} hookId Id of the webhook to retrieve
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    HooksApi.prototype.deleteSystemEventHook = function (accessToken, system, event, hookId, xAdsRegion, region, options) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.logInfo("Entered into deleteSystemEventHook ");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, (0, exports.HooksApiFp)(this.sdkManager).deleteSystemEventHook(accessToken, system, event, hookId, xAdsRegion, region, options)];
                    case 2:
                        request = _a.sent();
                        return [4 /*yield*/, request(this.axios)];
                    case 3:
                        response = _a.sent();
                        this.logger.logInfo("deleteSystemEventHook Request completed successfully with status code: ".concat(response.status));
                        return [2 /*return*/, new autodesk_sdkmanager_1.ApiResponse(response, response.data)];
                    case 4:
                        error_3 = _a.sent();
                        if (error_3.response) {
                            this.logger.logError("deleteSystemEventHook Request failed with status : ".concat(error_3.response.status, " and statusText : ").concat(error_3.response.statusText, " and error message: ").concat(error_3.response.data.reason));
                            throw new base_1.WebhooksApiError("deleteSystemEventHook Request failed with status : ".concat(error_3.response.status, " and error message: ").concat(error_3.response.data.reason), error_3);
                        }
                        else if (error_3.request) {
                            this.logger.logError("deleteSystemEventHook Request failed with no response received: ".concat(error_3.request));
                            throw new base_1.WebhooksApiError("deleteSystemEventHook Request failed with no response received: ".concat(error_3.request), error_3);
                        }
                        throw error_3;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves a paginated list of webhooks created in the context of a Client or Application. This API accepts 2-legged token of the application only. If the pageState query string is not specified, the first page is returned.
     * @summary Retrieves a paginated list of webhooks created in the context of a Client or Application. This API accepts 2-legged token of the application only. If the pageState query string is not specified, the first page is returned.
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the &#x60;&#x60;next&#x60;&#x60; field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
     * @param {string} [status] Status of the hooks. Options: &#x60;&#x60;active&#x60;&#x60;, &#x60;&#x60;inactive&#x60;&#x60;
     * @param {string} [sort] Sort order of the hooks based on last updated time. Options: ‘asc’, ‘desc’. Default is ‘desc’.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    HooksApi.prototype.getAppHooks = function (accessToken, xAdsRegion, pageState, status, sort, region, options) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.logInfo("Entered into getAppHooks ");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, (0, exports.HooksApiFp)(this.sdkManager).getAppHooks(accessToken, xAdsRegion, pageState, status, sort, region, options)];
                    case 2:
                        request = _a.sent();
                        return [4 /*yield*/, request(this.axios)];
                    case 3:
                        response = _a.sent();
                        this.logger.logInfo("getAppHooks Request completed successfully with status code: ".concat(response.status));
                        return [2 /*return*/, new autodesk_sdkmanager_1.ApiResponse(response, response.data)];
                    case 4:
                        error_4 = _a.sent();
                        if (error_4.response) {
                            this.logger.logError("getAppHooks Request failed with status : ".concat(error_4.response.status, " and statusText : ").concat(error_4.response.statusText, " and error message: ").concat(error_4.response.data.reason));
                            throw new base_1.WebhooksApiError("getAppHooks Request failed with status : ".concat(error_4.response.status, " and error message: ").concat(error_4.response.data.reason), error_4);
                        }
                        else if (error_4.request) {
                            this.logger.logError("getAppHooks Request failed with no response received: ".concat(error_4.request));
                            throw new base_1.WebhooksApiError("getAppHooks Request failed with no response received: ".concat(error_4.request), error_4);
                        }
                        throw error_4;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get details of a webhook based on its webhook ID
     * @summary Get details of a webhook based on its webhook ID
     * @param {Systems} system string A system for example data for Data Management
     * @param {Events} event string A system for example data for Data Management
     * @param {string} hookId Id of the webhook to retrieve
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    HooksApi.prototype.getHookDetails = function (accessToken, system, event, hookId, xAdsRegion, region, options) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.logInfo("Entered into getHookDetails ");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, (0, exports.HooksApiFp)(this.sdkManager).getHookDetails(accessToken, system, event, hookId, xAdsRegion, region, options)];
                    case 2:
                        request = _a.sent();
                        return [4 /*yield*/, request(this.axios)];
                    case 3:
                        response = _a.sent();
                        this.logger.logInfo("getHookDetails Request completed successfully with status code: ".concat(response.status));
                        return [2 /*return*/, new autodesk_sdkmanager_1.ApiResponse(response, response.data)];
                    case 4:
                        error_5 = _a.sent();
                        if (error_5.response) {
                            this.logger.logError("getHookDetails Request failed with status : ".concat(error_5.response.status, " and statusText : ").concat(error_5.response.statusText, " and error message: ").concat(error_5.response.data.reason));
                            throw new base_1.WebhooksApiError("getHookDetails Request failed with status : ".concat(error_5.response.status, " and error message: ").concat(error_5.response.data.reason), error_5);
                        }
                        else if (error_5.request) {
                            this.logger.logError("getHookDetails Request failed with no response received: ".concat(error_5.request));
                            throw new base_1.WebhooksApiError("getHookDetails Request failed with no response received: ".concat(error_5.request), error_5);
                        }
                        throw error_5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves a paginated list of all the webhooks. If the pageState query string is not specified, the first page is returned.
     * @summary Retrieves a paginated list of all the webhooks. If the pageState query string is not specified, the first page is returned.
     * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the next field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
     * @param {string} [status] Status of the hooks. Options: ‘active’, ‘inactive’
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: EMEA, US. Default is US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    HooksApi.prototype.getHooks = function (accessToken, pageState, status, region, xAdsRegion, options) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.logInfo("Entered into getHooks ");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, (0, exports.HooksApiFp)(this.sdkManager).getHooks(accessToken, pageState, status, region, xAdsRegion, options)];
                    case 2:
                        request = _a.sent();
                        return [4 /*yield*/, request(this.axios)];
                    case 3:
                        response = _a.sent();
                        this.logger.logInfo("getHooks Request completed successfully with status code: ".concat(response.status));
                        return [2 /*return*/, new autodesk_sdkmanager_1.ApiResponse(response, response.data)];
                    case 4:
                        error_6 = _a.sent();
                        if (error_6.response) {
                            this.logger.logError("getHooks Request failed with status : ".concat(error_6.response.status, " and statusText : ").concat(error_6.response.statusText, " and error message: ").concat(error_6.response.data.reason));
                            throw new base_1.WebhooksApiError("getHooks Request failed with status : ".concat(error_6.response.status, " and error message: ").concat(error_6.response.data.reason), error_6);
                        }
                        else if (error_6.request) {
                            this.logger.logError("getHooks Request failed with no response received: ".concat(error_6.request));
                            throw new base_1.WebhooksApiError("getHooks Request failed with no response received: ".concat(error_6.request), error_6);
                        }
                        throw error_6;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves a paginated list of all the webhooks for a specified event. If the pageState query string is not specified, the first page is returned.
     * @summary Retrieves a paginated list of all the webhooks for a specified event. If the pageState query string is not specified, the first page is returned.
     * @param {Systems} system string A system for example data for Data Management
     * @param {Events} event string A system for example data for Data Management
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param {string} [scopeName] Scope name used to create hook. For example : folder
     * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the &#x60;&#x60;next&#x60;&#x60; field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
     * @param {string} [status] Status of the hooks. Options: &#x60;&#x60;active&#x60;&#x60;, &#x60;&#x60;inactive&#x60;&#x60;
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    HooksApi.prototype.getSystemEventHooks = function (accessToken, system, event, xAdsRegion, region, scopeName, pageState, status, options) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.logInfo("Entered into getSystemEventHooks ");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, (0, exports.HooksApiFp)(this.sdkManager).getSystemEventHooks(accessToken, system, event, xAdsRegion, region, scopeName, pageState, status, options)];
                    case 2:
                        request = _a.sent();
                        return [4 /*yield*/, request(this.axios)];
                    case 3:
                        response = _a.sent();
                        this.logger.logInfo("getSystemEventHooks Request completed successfully with status code: ".concat(response.status));
                        return [2 /*return*/, new autodesk_sdkmanager_1.ApiResponse(response, response.data)];
                    case 4:
                        error_7 = _a.sent();
                        if (error_7.response) {
                            this.logger.logError("getSystemEventHooks Request failed with status : ".concat(error_7.response.status, " and statusText : ").concat(error_7.response.statusText, " and error message: ").concat(error_7.response.data.reason));
                            throw new base_1.WebhooksApiError("getSystemEventHooks Request failed with status : ".concat(error_7.response.status, " and error message: ").concat(error_7.response.data.reason), error_7);
                        }
                        else if (error_7.request) {
                            this.logger.logError("getSystemEventHooks Request failed with no response received: ".concat(error_7.request));
                            throw new base_1.WebhooksApiError("getSystemEventHooks Request failed with no response received: ".concat(error_7.request), error_7);
                        }
                        throw error_7;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves a paginated list of all the webhooks for a specified system. If the pageState query string is not specified, the first page is returned.
     * @summary Retrieves a paginated list of all the webhooks for a specified system. If the pageState query string is not specified, the first page is returned.
     * @param {Systems} system string A system for example data for Data Management
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [status] Status of the hooks. Options: &#x60;&#x60;active&#x60;&#x60;, &#x60;&#x60;inactive&#x60;&#x60;
     * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the &#x60;&#x60;next&#x60;&#x60; field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    HooksApi.prototype.getSystemHooks = function (accessToken, system, xAdsRegion, status, pageState, region, options) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.logInfo("Entered into getSystemHooks ");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, (0, exports.HooksApiFp)(this.sdkManager).getSystemHooks(accessToken, system, xAdsRegion, status, pageState, region, options)];
                    case 2:
                        request = _a.sent();
                        return [4 /*yield*/, request(this.axios)];
                    case 3:
                        response = _a.sent();
                        this.logger.logInfo("getSystemHooks Request completed successfully with status code: ".concat(response.status));
                        return [2 /*return*/, new autodesk_sdkmanager_1.ApiResponse(response, response.data)];
                    case 4:
                        error_8 = _a.sent();
                        if (error_8.response) {
                            this.logger.logError("getSystemHooks Request failed with status : ".concat(error_8.response.status, " and statusText : ").concat(error_8.response.statusText, " and error message: ").concat(error_8.response.data.reason));
                            throw new base_1.WebhooksApiError("getSystemHooks Request failed with status : ".concat(error_8.response.status, " and error message: ").concat(error_8.response.data.reason), error_8);
                        }
                        else if (error_8.request) {
                            this.logger.logError("getSystemHooks Request failed with no response received: ".concat(error_8.request));
                            throw new base_1.WebhooksApiError("getSystemHooks Request failed with no response received: ".concat(error_8.request), error_8);
                        }
                        throw error_8;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Partially update a webhook based on its webhook ID. The only fields that may be updated are: status, filter, hookAttribute, and hookExpiry.
     * @summary Partially update a webhook based on its webhook ID. The only fields that may be updated are: status, filter, hookAttribute, and hookExpiry.
     * @param {Systems} system string A system for example data for Data Management
     * @param {Events} event string A system for example data for Data Management
     * @param {string} hookId Id of the webhook to retrieve
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param {ModifyHookPayload} [modifyHookPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    HooksApi.prototype.patchSystemEventHook = function (accessToken, system, event, hookId, xAdsRegion, region, modifyHookPayload, options) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.logInfo("Entered into patchSystemEventHook ");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, (0, exports.HooksApiFp)(this.sdkManager).patchSystemEventHook(accessToken, system, event, hookId, xAdsRegion, region, modifyHookPayload, options)];
                    case 2:
                        request = _a.sent();
                        return [4 /*yield*/, request(this.axios)];
                    case 3:
                        response = _a.sent();
                        this.logger.logInfo("patchSystemEventHook Request completed successfully with status code: ".concat(response.status));
                        return [2 /*return*/, new autodesk_sdkmanager_1.ApiResponse(response, response.data)];
                    case 4:
                        error_9 = _a.sent();
                        if (error_9.response) {
                            this.logger.logError("patchSystemEventHook Request failed with status : ".concat(error_9.response.status, " and statusText : ").concat(error_9.response.statusText, " and error message: ").concat(error_9.response.data.reason));
                            throw new base_1.WebhooksApiError("patchSystemEventHook Request failed with status : ".concat(error_9.response.status, " and error message: ").concat(error_9.response.data.reason), error_9);
                        }
                        else if (error_9.request) {
                            this.logger.logError("patchSystemEventHook Request failed with no response received: ".concat(error_9.request));
                            throw new base_1.WebhooksApiError("patchSystemEventHook Request failed with no response received: ".concat(error_9.request), error_9);
                        }
                        throw error_9;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return HooksApi;
}(base_1.BaseAPI));
exports.HooksApi = HooksApi;
