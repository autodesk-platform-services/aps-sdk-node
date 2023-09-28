"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSystemsSystemHooksSystemEnum = exports.PostSystemsSystemEventsEventHooksEventEnum = exports.PostSystemsSystemEventsEventHooksSystemEnum = exports.PatchSystemsSystemEventsEventHooksHookIdEventEnum = exports.PatchSystemsSystemEventsEventHooksHookIdSystemEnum = exports.GetSystemsSystemHooksSystemEnum = exports.GetSystemsSystemEventsEventHooksHookIdEventEnum = exports.GetSystemsSystemEventsEventHooksHookIdSystemEnum = exports.GetSystemsSystemEventsEventHooksEventEnum = exports.GetSystemsSystemEventsEventHooksSystemEnum = exports.DeleteSystemsSystemEventsEventHooksHookIdEventEnum = exports.DeleteSystemsSystemEventsEventHooksHookIdSystemEnum = exports.HooksApi = exports.HooksApiFp = exports.HooksApiAxiosParamCreator = void 0;
const autodesk_sdkmanager_1 = require("autodesk-sdkmanager");
const common_1 = require("../common");
const base_1 = require("../base");
/**
 * HooksApi - axios parameter creator
 * @export
 */
const HooksApiAxiosParamCreator = function (apsConfiguration) {
    return {
        /**
         * Deletes a webhook based on webhook ID
         * @summary Deletes a webhook based on webhook ID
         * @param {DeleteSystemsSystemEventsEventHooksHookIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {DeleteSystemsSystemEventsEventHooksHookIdEventEnum} event Type of event. See &#x60;&#x60;Supported Events&#x60;&#x60;
         * @param {string} hookId Id of the webhook to retrieve
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSystemsSystemEventsEventHooksHookId: (accessToken, system, event, hookId, xAdsRegion, region, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'system' is not null or undefined
            (0, common_1.assertParamExists)('deleteSystemsSystemEventsEventHooksHookId', 'system', system);
            // verify required parameter 'event' is not null or undefined
            (0, common_1.assertParamExists)('deleteSystemsSystemEventsEventHooksHookId', 'event', event);
            // verify required parameter 'hookId' is not null or undefined
            (0, common_1.assertParamExists)('deleteSystemsSystemEventsEventHooksHookId', 'hookId', hookId);
            const localVarPath = `/systems/{system}/events/{event}/hooks/{hook_id}`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)))
                .replace(`{${"event"}}`, encodeURIComponent(String(event)))
                .replace(`{${"hook_id"}}`, encodeURIComponent(String(hookId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = String(xAdsRegion);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        getAppHooks: (accessToken, xAdsRegion, pageState, status, sort, region, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/app/hooks`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
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
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        getHooks: (accessToken, pageState, status, region, xAdsRegion, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/hooks`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
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
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Retrieves a paginated list of all the webhooks for a specified event. If the pageState query string is not specified, the first page is returned.
         * @summary Retrieves a paginated list of all the webhooks for a specified event. If the pageState query string is not specified, the first page is returned.
         * @param {GetSystemsSystemEventsEventHooksSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {GetSystemsSystemEventsEventHooksEventEnum} event Type of event. See &#x60;&#x60;Supported Events&#x60;&#x60;
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {string} [scopeName] Scope name used to create hook. For example : folder
         * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the &#x60;&#x60;next&#x60;&#x60; field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
         * @param {string} [status] Status of the hooks. Options: &#x60;&#x60;active&#x60;&#x60;, &#x60;&#x60;inactive&#x60;&#x60;
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemsSystemEventsEventHooks: (accessToken, system, event, xAdsRegion, region, scopeName, pageState, status, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'system' is not null or undefined
            (0, common_1.assertParamExists)('getSystemsSystemEventsEventHooks', 'system', system);
            // verify required parameter 'event' is not null or undefined
            (0, common_1.assertParamExists)('getSystemsSystemEventsEventHooks', 'event', event);
            const localVarPath = `/systems/{system}/events/{event}/hooks`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)))
                .replace(`{${"event"}}`, encodeURIComponent(String(event)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
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
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Get details of a webhook based on its webhook ID
         * @summary Get details of a webhook based on its webhook ID
         * @param {GetSystemsSystemEventsEventHooksHookIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {GetSystemsSystemEventsEventHooksHookIdEventEnum} event Type of event. See &#x60;&#x60;Supported Events&#x60;&#x60;
         * @param {string} hookId Id of the webhook to retrieve
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemsSystemEventsEventHooksHookId: (accessToken, system, event, hookId, xAdsRegion, region, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'system' is not null or undefined
            (0, common_1.assertParamExists)('getSystemsSystemEventsEventHooksHookId', 'system', system);
            // verify required parameter 'event' is not null or undefined
            (0, common_1.assertParamExists)('getSystemsSystemEventsEventHooksHookId', 'event', event);
            // verify required parameter 'hookId' is not null or undefined
            (0, common_1.assertParamExists)('getSystemsSystemEventsEventHooksHookId', 'hookId', hookId);
            const localVarPath = `/systems/{system}/events/{event}/hooks/{hook_id}`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)))
                .replace(`{${"event"}}`, encodeURIComponent(String(event)))
                .replace(`{${"hook_id"}}`, encodeURIComponent(String(hookId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = String(xAdsRegion);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Retrieves a paginated list of all the webhooks for a specified system. If the pageState query string is not specified, the first page is returned.
         * @summary Retrieves a paginated list of all the webhooks for a specified system. If the pageState query string is not specified, the first page is returned.
         * @param {GetSystemsSystemHooksSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [status] Status of the hooks. Options: &#x60;&#x60;active&#x60;&#x60;, &#x60;&#x60;inactive&#x60;&#x60;
         * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the &#x60;&#x60;next&#x60;&#x60; field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemsSystemHooks: (accessToken, system, xAdsRegion, status, pageState, region, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'system' is not null or undefined
            (0, common_1.assertParamExists)('getSystemsSystemHooks', 'system', system);
            const localVarPath = `/systems/{system}/hooks`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
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
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Partially update a webhook based on its webhook ID. The only fields that may be updated are: status, filter, hookAttribute, and hookExpiry.
         * @summary Partially update a webhook based on its webhook ID. The only fields that may be updated are: status, filter, hookAttribute, and hookExpiry.
         * @param {PatchSystemsSystemEventsEventHooksHookIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {PatchSystemsSystemEventsEventHooksHookIdEventEnum} event Type of event. See &#x60;&#x60;Supported Events&#x60;&#x60;
         * @param {string} hookId Id of the webhook to retrieve
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {UpdateHook} [updateHook]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSystemsSystemEventsEventHooksHookId: (accessToken, system, event, hookId, xAdsRegion, region, updateHook, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'system' is not null or undefined
            (0, common_1.assertParamExists)('patchSystemsSystemEventsEventHooksHookId', 'system', system);
            // verify required parameter 'event' is not null or undefined
            (0, common_1.assertParamExists)('patchSystemsSystemEventsEventHooksHookId', 'event', event);
            // verify required parameter 'hookId' is not null or undefined
            (0, common_1.assertParamExists)('patchSystemsSystemEventsEventHooksHookId', 'hookId', hookId);
            const localVarPath = `/systems/{system}/events/{event}/hooks/{hook_id}`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)))
                .replace(`{${"event"}}`, encodeURIComponent(String(event)))
                .replace(`{${"hook_id"}}`, encodeURIComponent(String(hookId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PATCH' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = String(xAdsRegion);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/WEBHOOKS-API/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(updateHook, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Add new webhook to receive the notification on a specified event.
         * @summary Add new webhook to receive the notification on a specified event.
         * @param {PostSystemsSystemEventsEventHooksSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {PostSystemsSystemEventsEventHooksEventEnum} event Type of event. See &#x60;&#x60;Supported Events&#x60;&#x60;
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {CreateHook} [createHook]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSystemsSystemEventsEventHooks: (accessToken, system, event, xAdsRegion, region, createHook, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'system' is not null or undefined
            (0, common_1.assertParamExists)('postSystemsSystemEventsEventHooks', 'system', system);
            // verify required parameter 'event' is not null or undefined
            (0, common_1.assertParamExists)('postSystemsSystemEventsEventHooks', 'event', event);
            const localVarPath = `/systems/{system}/events/{event}/hooks`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)))
                .replace(`{${"event"}}`, encodeURIComponent(String(event)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = String(xAdsRegion);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/WEBHOOKS-API/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createHook, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Add new webhooks to receive the notification on all the events.
         * @summary Add new webhooks to receive the notification on all the events.
         * @param {PostSystemsSystemHooksSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {CreateHook} [createHook]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSystemsSystemHooks: (accessToken, system, xAdsRegion, region, createHook, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'system' is not null or undefined
            (0, common_1.assertParamExists)('postSystemsSystemHooks', 'system', system);
            const localVarPath = `/systems/{system}/hooks`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = String(xAdsRegion);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/WEBHOOKS-API/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createHook, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.HooksApiAxiosParamCreator = HooksApiAxiosParamCreator;
/**
 * HooksApi - functional programming interface
 * @export
 */
const HooksApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = (0, exports.HooksApiAxiosParamCreator)(sdkManager.apsconfiguration);
    return {
        /**
         * Deletes a webhook based on webhook ID
         * @summary Deletes a webhook based on webhook ID
         * @param {DeleteSystemsSystemEventsEventHooksHookIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {DeleteSystemsSystemEventsEventHooksHookIdEventEnum} event Type of event. See &#x60;&#x60;Supported Events&#x60;&#x60;
         * @param {string} hookId Id of the webhook to retrieve
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.deleteSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
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
        getAppHooks(accessToken, xAdsRegion, pageState, status, sort, region, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getAppHooks(accessToken, xAdsRegion, pageState, status, sort, region, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
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
        getHooks(accessToken, pageState, status, region, xAdsRegion, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getHooks(accessToken, pageState, status, region, xAdsRegion, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Retrieves a paginated list of all the webhooks for a specified event. If the pageState query string is not specified, the first page is returned.
         * @summary Retrieves a paginated list of all the webhooks for a specified event. If the pageState query string is not specified, the first page is returned.
         * @param {GetSystemsSystemEventsEventHooksSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {GetSystemsSystemEventsEventHooksEventEnum} event Type of event. See &#x60;&#x60;Supported Events&#x60;&#x60;
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {string} [scopeName] Scope name used to create hook. For example : folder
         * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the &#x60;&#x60;next&#x60;&#x60; field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
         * @param {string} [status] Status of the hooks. Options: &#x60;&#x60;active&#x60;&#x60;, &#x60;&#x60;inactive&#x60;&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemsSystemEventsEventHooks(accessToken, system, event, xAdsRegion, region, scopeName, pageState, status, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getSystemsSystemEventsEventHooks(accessToken, system, event, xAdsRegion, region, scopeName, pageState, status, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Get details of a webhook based on its webhook ID
         * @summary Get details of a webhook based on its webhook ID
         * @param {GetSystemsSystemEventsEventHooksHookIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {GetSystemsSystemEventsEventHooksHookIdEventEnum} event Type of event. See &#x60;&#x60;Supported Events&#x60;&#x60;
         * @param {string} hookId Id of the webhook to retrieve
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Retrieves a paginated list of all the webhooks for a specified system. If the pageState query string is not specified, the first page is returned.
         * @summary Retrieves a paginated list of all the webhooks for a specified system. If the pageState query string is not specified, the first page is returned.
         * @param {GetSystemsSystemHooksSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [status] Status of the hooks. Options: &#x60;&#x60;active&#x60;&#x60;, &#x60;&#x60;inactive&#x60;&#x60;
         * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the &#x60;&#x60;next&#x60;&#x60; field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemsSystemHooks(accessToken, system, xAdsRegion, status, pageState, region, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getSystemsSystemHooks(accessToken, system, xAdsRegion, status, pageState, region, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Partially update a webhook based on its webhook ID. The only fields that may be updated are: status, filter, hookAttribute, and hookExpiry.
         * @summary Partially update a webhook based on its webhook ID. The only fields that may be updated are: status, filter, hookAttribute, and hookExpiry.
         * @param {PatchSystemsSystemEventsEventHooksHookIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {PatchSystemsSystemEventsEventHooksHookIdEventEnum} event Type of event. See &#x60;&#x60;Supported Events&#x60;&#x60;
         * @param {string} hookId Id of the webhook to retrieve
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {UpdateHook} [updateHook]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region, updateHook, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.patchSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region, updateHook, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Add new webhook to receive the notification on a specified event.
         * @summary Add new webhook to receive the notification on a specified event.
         * @param {PostSystemsSystemEventsEventHooksSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {PostSystemsSystemEventsEventHooksEventEnum} event Type of event. See &#x60;&#x60;Supported Events&#x60;&#x60;
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {CreateHook} [createHook]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSystemsSystemEventsEventHooks(accessToken, system, event, xAdsRegion, region, createHook, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.postSystemsSystemEventsEventHooks(accessToken, system, event, xAdsRegion, region, createHook, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Add new webhooks to receive the notification on all the events.
         * @summary Add new webhooks to receive the notification on all the events.
         * @param {PostSystemsSystemHooksSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {CreateHook} [createHook]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSystemsSystemHooks(accessToken, system, xAdsRegion, region, createHook, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.postSystemsSystemHooks(accessToken, system, xAdsRegion, region, createHook, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
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
class HooksApi extends base_1.BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
    /**
     * Deletes a webhook based on webhook ID
     * @summary Deletes a webhook based on webhook ID
     * @param {DeleteSystemsSystemEventsEventHooksHookIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
     * @param {DeleteSystemsSystemEventsEventHooksHookIdEventEnum} event Type of event. See &#x60;&#x60;Supported Events&#x60;&#x60;
     * @param {string} hookId Id of the webhook to retrieve
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    deleteSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into deleteSystemsSystemEventsEventHooksHookId ");
            try {
                const request = yield (0, exports.HooksApiFp)(this.sdkManager).deleteSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`deleteSystemsSystemEventsEventHooksHookId Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`deleteSystemsSystemEventsEventHooksHookId Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.WebhooksApiApiError(`deleteSystemsSystemEventsEventHooksHookId Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`deleteSystemsSystemEventsEventHooksHookId Request failed with no response received: ${error.request}`);
                    throw new base_1.WebhooksApiApiError(`deleteSystemsSystemEventsEventHooksHookId Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
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
    getAppHooks(accessToken, xAdsRegion, pageState, status, sort, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getAppHooks ");
            try {
                const request = yield (0, exports.HooksApiFp)(this.sdkManager).getAppHooks(accessToken, xAdsRegion, pageState, status, sort, region, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getAppHooks Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getAppHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.WebhooksApiApiError(`getAppHooks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getAppHooks Request failed with no response received: ${error.request}`);
                    throw new base_1.WebhooksApiApiError(`getAppHooks Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
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
    getHooks(accessToken, pageState, status, region, xAdsRegion, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getHooks ");
            try {
                const request = yield (0, exports.HooksApiFp)(this.sdkManager).getHooks(accessToken, pageState, status, region, xAdsRegion, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getHooks Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.WebhooksApiApiError(`getHooks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getHooks Request failed with no response received: ${error.request}`);
                    throw new base_1.WebhooksApiApiError(`getHooks Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Retrieves a paginated list of all the webhooks for a specified event. If the pageState query string is not specified, the first page is returned.
     * @summary Retrieves a paginated list of all the webhooks for a specified event. If the pageState query string is not specified, the first page is returned.
     * @param {GetSystemsSystemEventsEventHooksSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
     * @param {GetSystemsSystemEventsEventHooksEventEnum} event Type of event. See &#x60;&#x60;Supported Events&#x60;&#x60;
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
    getSystemsSystemEventsEventHooks(accessToken, system, event, xAdsRegion, region, scopeName, pageState, status, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getSystemsSystemEventsEventHooks ");
            try {
                const request = yield (0, exports.HooksApiFp)(this.sdkManager).getSystemsSystemEventsEventHooks(accessToken, system, event, xAdsRegion, region, scopeName, pageState, status, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getSystemsSystemEventsEventHooks Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getSystemsSystemEventsEventHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.WebhooksApiApiError(`getSystemsSystemEventsEventHooks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getSystemsSystemEventsEventHooks Request failed with no response received: ${error.request}`);
                    throw new base_1.WebhooksApiApiError(`getSystemsSystemEventsEventHooks Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Get details of a webhook based on its webhook ID
     * @summary Get details of a webhook based on its webhook ID
     * @param {GetSystemsSystemEventsEventHooksHookIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
     * @param {GetSystemsSystemEventsEventHooksHookIdEventEnum} event Type of event. See &#x60;&#x60;Supported Events&#x60;&#x60;
     * @param {string} hookId Id of the webhook to retrieve
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    getSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getSystemsSystemEventsEventHooksHookId ");
            try {
                const request = yield (0, exports.HooksApiFp)(this.sdkManager).getSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getSystemsSystemEventsEventHooksHookId Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getSystemsSystemEventsEventHooksHookId Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.WebhooksApiApiError(`getSystemsSystemEventsEventHooksHookId Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getSystemsSystemEventsEventHooksHookId Request failed with no response received: ${error.request}`);
                    throw new base_1.WebhooksApiApiError(`getSystemsSystemEventsEventHooksHookId Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Retrieves a paginated list of all the webhooks for a specified system. If the pageState query string is not specified, the first page is returned.
     * @summary Retrieves a paginated list of all the webhooks for a specified system. If the pageState query string is not specified, the first page is returned.
     * @param {GetSystemsSystemHooksSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [status] Status of the hooks. Options: &#x60;&#x60;active&#x60;&#x60;, &#x60;&#x60;inactive&#x60;&#x60;
     * @param {string} [pageState] Base64 encoded string used to return the next page of the list of webhooks. This can be obtained from the &#x60;&#x60;next&#x60;&#x60; field of the previous page. PagingState instances are not portable and implementation is subject to change across versions. Default page size is 200.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    getSystemsSystemHooks(accessToken, system, xAdsRegion, status, pageState, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getSystemsSystemHooks ");
            try {
                const request = yield (0, exports.HooksApiFp)(this.sdkManager).getSystemsSystemHooks(accessToken, system, xAdsRegion, status, pageState, region, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getSystemsSystemHooks Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getSystemsSystemHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.WebhooksApiApiError(`getSystemsSystemHooks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getSystemsSystemHooks Request failed with no response received: ${error.request}`);
                    throw new base_1.WebhooksApiApiError(`getSystemsSystemHooks Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Partially update a webhook based on its webhook ID. The only fields that may be updated are: status, filter, hookAttribute, and hookExpiry.
     * @summary Partially update a webhook based on its webhook ID. The only fields that may be updated are: status, filter, hookAttribute, and hookExpiry.
     * @param {PatchSystemsSystemEventsEventHooksHookIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
     * @param {PatchSystemsSystemEventsEventHooksHookIdEventEnum} event Type of event. See &#x60;&#x60;Supported Events&#x60;&#x60;
     * @param {string} hookId Id of the webhook to retrieve
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param {UpdateHook} [updateHook]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    patchSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region, updateHook, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into patchSystemsSystemEventsEventHooksHookId ");
            try {
                const request = yield (0, exports.HooksApiFp)(this.sdkManager).patchSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region, updateHook, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`patchSystemsSystemEventsEventHooksHookId Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`patchSystemsSystemEventsEventHooksHookId Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.WebhooksApiApiError(`patchSystemsSystemEventsEventHooksHookId Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`patchSystemsSystemEventsEventHooksHookId Request failed with no response received: ${error.request}`);
                    throw new base_1.WebhooksApiApiError(`patchSystemsSystemEventsEventHooksHookId Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Add new webhook to receive the notification on a specified event.
     * @summary Add new webhook to receive the notification on a specified event.
     * @param {PostSystemsSystemEventsEventHooksSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
     * @param {PostSystemsSystemEventsEventHooksEventEnum} event Type of event. See &#x60;&#x60;Supported Events&#x60;&#x60;
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param {CreateHook} [createHook]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    postSystemsSystemEventsEventHooks(accessToken, system, event, xAdsRegion, region, createHook, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into postSystemsSystemEventsEventHooks ");
            try {
                const request = yield (0, exports.HooksApiFp)(this.sdkManager).postSystemsSystemEventsEventHooks(accessToken, system, event, xAdsRegion, region, createHook, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`postSystemsSystemEventsEventHooks Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`postSystemsSystemEventsEventHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.WebhooksApiApiError(`postSystemsSystemEventsEventHooks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`postSystemsSystemEventsEventHooks Request failed with no response received: ${error.request}`);
                    throw new base_1.WebhooksApiApiError(`postSystemsSystemEventsEventHooks Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Add new webhooks to receive the notification on all the events.
     * @summary Add new webhooks to receive the notification on all the events.
     * @param {PostSystemsSystemHooksSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
     * @param {string} [xAdsRegion] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param {CreateHook} [createHook]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    postSystemsSystemHooks(accessToken, system, xAdsRegion, region, createHook, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into postSystemsSystemHooks ");
            try {
                const request = yield (0, exports.HooksApiFp)(this.sdkManager).postSystemsSystemHooks(accessToken, system, xAdsRegion, region, createHook, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`postSystemsSystemHooks Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`postSystemsSystemHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.WebhooksApiApiError(`postSystemsSystemHooks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`postSystemsSystemHooks Request failed with no response received: ${error.request}`);
                    throw new base_1.WebhooksApiApiError(`postSystemsSystemHooks Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
exports.HooksApi = HooksApi;
/**
 * @export
 */
exports.DeleteSystemsSystemEventsEventHooksHookIdSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
};
/**
 * @export
 */
exports.DeleteSystemsSystemEventsEventHooksHookIdEventEnum = {
    DmVersionAdded: 'dm.version.added',
    DmVersionModified: 'dm.version.modified',
    DmVersionDeleted: 'dm.version.deleted',
    DmVersionMoved: 'dm.version.moved',
    DmVersionMovedOut: 'dm.version.moved.out',
    DmVersionCopied: 'dm.version.copied',
    DmVersionCopiedOut: 'dm.version.copied.out',
    DmLineageReserved: 'dm.lineage.reserved',
    DmLineageUnreserved: 'dm.lineage.unreserved',
    DmLineageUpdated: 'dm.lineage.updated',
    DmFolderAdded: 'dm.folder.added',
    DmFolderModified: 'dm.folder.modified',
    DmFolderDeleted: 'dm.folder.deleted',
    DmFolderMoved: 'dm.folder.moved',
    DmFolderMovedOut: 'dm.folder.moved.out',
    DmFolderCopied: 'dm.folder.copied',
    DmFolderCopiedOut: 'dm.folder.copied.out',
    DmOperationStarted: 'dm.operation.started',
    DmOperationCompleted: 'dm.operation.completed',
    ExtractionFinished: 'extraction.finished',
    ExtractionUpdated: 'extraction.updated',
    ModelSync: 'model.sync',
    ModelPublish: 'model.publish',
    ItemClone: 'item.clone',
    ItemCreate: 'item.create',
    ItemLock: 'item.lock',
    ItemRelease: 'item.release',
    ItemUnlock: 'item.unlock',
    ItemUpdate: 'item.update',
    WorkflowTransition: 'workflow.transition'
};
/**
 * @export
 */
exports.GetSystemsSystemEventsEventHooksSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
};
/**
 * @export
 */
exports.GetSystemsSystemEventsEventHooksEventEnum = {
    DmVersionAdded: 'dm.version.added',
    DmVersionModified: 'dm.version.modified',
    DmVersionDeleted: 'dm.version.deleted',
    DmVersionMoved: 'dm.version.moved',
    DmVersionMovedOut: 'dm.version.moved.out',
    DmVersionCopied: 'dm.version.copied',
    DmVersionCopiedOut: 'dm.version.copied.out',
    DmLineageReserved: 'dm.lineage.reserved',
    DmLineageUnreserved: 'dm.lineage.unreserved',
    DmLineageUpdated: 'dm.lineage.updated',
    DmFolderAdded: 'dm.folder.added',
    DmFolderModified: 'dm.folder.modified',
    DmFolderDeleted: 'dm.folder.deleted',
    DmFolderMoved: 'dm.folder.moved',
    DmFolderMovedOut: 'dm.folder.moved.out',
    DmFolderCopied: 'dm.folder.copied',
    DmFolderCopiedOut: 'dm.folder.copied.out',
    DmOperationStarted: 'dm.operation.started',
    DmOperationCompleted: 'dm.operation.completed',
    ExtractionFinished: 'extraction.finished',
    ExtractionUpdated: 'extraction.updated',
    ModelSync: 'model.sync',
    ModelPublish: 'model.publish',
    ItemClone: 'item.clone',
    ItemCreate: 'item.create',
    ItemLock: 'item.lock',
    ItemRelease: 'item.release',
    ItemUnlock: 'item.unlock',
    ItemUpdate: 'item.update',
    WorkflowTransition: 'workflow.transition'
};
/**
 * @export
 */
exports.GetSystemsSystemEventsEventHooksHookIdSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
};
/**
 * @export
 */
exports.GetSystemsSystemEventsEventHooksHookIdEventEnum = {
    DmVersionAdded: 'dm.version.added',
    DmVersionModified: 'dm.version.modified',
    DmVersionDeleted: 'dm.version.deleted',
    DmVersionMoved: 'dm.version.moved',
    DmVersionMovedOut: 'dm.version.moved.out',
    DmVersionCopied: 'dm.version.copied',
    DmVersionCopiedOut: 'dm.version.copied.out',
    DmLineageReserved: 'dm.lineage.reserved',
    DmLineageUnreserved: 'dm.lineage.unreserved',
    DmLineageUpdated: 'dm.lineage.updated',
    DmFolderAdded: 'dm.folder.added',
    DmFolderModified: 'dm.folder.modified',
    DmFolderDeleted: 'dm.folder.deleted',
    DmFolderMoved: 'dm.folder.moved',
    DmFolderMovedOut: 'dm.folder.moved.out',
    DmFolderCopied: 'dm.folder.copied',
    DmFolderCopiedOut: 'dm.folder.copied.out',
    DmOperationStarted: 'dm.operation.started',
    DmOperationCompleted: 'dm.operation.completed',
    ExtractionFinished: 'extraction.finished',
    ExtractionUpdated: 'extraction.updated',
    ModelSync: 'model.sync',
    ModelPublish: 'model.publish',
    ItemClone: 'item.clone',
    ItemCreate: 'item.create',
    ItemLock: 'item.lock',
    ItemRelease: 'item.release',
    ItemUnlock: 'item.unlock',
    ItemUpdate: 'item.update',
    WorkflowTransition: 'workflow.transition'
};
/**
 * @export
 */
exports.GetSystemsSystemHooksSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
};
/**
 * @export
 */
exports.PatchSystemsSystemEventsEventHooksHookIdSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
};
/**
 * @export
 */
exports.PatchSystemsSystemEventsEventHooksHookIdEventEnum = {
    DmVersionAdded: 'dm.version.added',
    DmVersionModified: 'dm.version.modified',
    DmVersionDeleted: 'dm.version.deleted',
    DmVersionMoved: 'dm.version.moved',
    DmVersionMovedOut: 'dm.version.moved.out',
    DmVersionCopied: 'dm.version.copied',
    DmVersionCopiedOut: 'dm.version.copied.out',
    DmLineageReserved: 'dm.lineage.reserved',
    DmLineageUnreserved: 'dm.lineage.unreserved',
    DmLineageUpdated: 'dm.lineage.updated',
    DmFolderAdded: 'dm.folder.added',
    DmFolderModified: 'dm.folder.modified',
    DmFolderDeleted: 'dm.folder.deleted',
    DmFolderMoved: 'dm.folder.moved',
    DmFolderMovedOut: 'dm.folder.moved.out',
    DmFolderCopied: 'dm.folder.copied',
    DmFolderCopiedOut: 'dm.folder.copied.out',
    DmOperationStarted: 'dm.operation.started',
    DmOperationCompleted: 'dm.operation.completed',
    ExtractionFinished: 'extraction.finished',
    ExtractionUpdated: 'extraction.updated',
    ModelSync: 'model.sync',
    ModelPublish: 'model.publish',
    ItemClone: 'item.clone',
    ItemCreate: 'item.create',
    ItemLock: 'item.lock',
    ItemRelease: 'item.release',
    ItemUnlock: 'item.unlock',
    ItemUpdate: 'item.update',
    WorkflowTransition: 'workflow.transition'
};
/**
 * @export
 */
exports.PostSystemsSystemEventsEventHooksSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
};
/**
 * @export
 */
exports.PostSystemsSystemEventsEventHooksEventEnum = {
    DmVersionAdded: 'dm.version.added',
    DmVersionModified: 'dm.version.modified',
    DmVersionDeleted: 'dm.version.deleted',
    DmVersionMoved: 'dm.version.moved',
    DmVersionMovedOut: 'dm.version.moved.out',
    DmVersionCopied: 'dm.version.copied',
    DmVersionCopiedOut: 'dm.version.copied.out',
    DmLineageReserved: 'dm.lineage.reserved',
    DmLineageUnreserved: 'dm.lineage.unreserved',
    DmLineageUpdated: 'dm.lineage.updated',
    DmFolderAdded: 'dm.folder.added',
    DmFolderModified: 'dm.folder.modified',
    DmFolderDeleted: 'dm.folder.deleted',
    DmFolderMoved: 'dm.folder.moved',
    DmFolderMovedOut: 'dm.folder.moved.out',
    DmFolderCopied: 'dm.folder.copied',
    DmFolderCopiedOut: 'dm.folder.copied.out',
    DmOperationStarted: 'dm.operation.started',
    DmOperationCompleted: 'dm.operation.completed',
    ExtractionFinished: 'extraction.finished',
    ExtractionUpdated: 'extraction.updated',
    ModelSync: 'model.sync',
    ModelPublish: 'model.publish',
    ItemClone: 'item.clone',
    ItemCreate: 'item.create',
    ItemLock: 'item.lock',
    ItemRelease: 'item.release',
    ItemUnlock: 'item.unlock',
    ItemUpdate: 'item.update',
    WorkflowTransition: 'workflow.transition'
};
/**
 * @export
 */
exports.PostSystemsSystemHooksSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
};
