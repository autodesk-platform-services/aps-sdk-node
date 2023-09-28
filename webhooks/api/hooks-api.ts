/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse} from "autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, WebhooksApiApiError } from '../base';
import { CreateHook } from '../model';
import { CreateHookResponse } from '../model';
import { GetSystemsSystemEventsEventHooksHookId400Response } from '../model';
import { Hook } from '../model';
import { Hooks } from '../model';
import { UpdateHook } from '../model';
/**
 * HooksApi - axios parameter creator
 * @export
 */
export const HooksApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
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
        deleteSystemsSystemEventsEventHooksHookId: async (accessToken: string, system: DeleteSystemsSystemEventsEventHooksHookIdSystemEnum, event: DeleteSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'system' is not null or undefined
            assertParamExists('deleteSystemsSystemEventsEventHooksHookId', 'system', system)
            // verify required parameter 'event' is not null or undefined
            assertParamExists('deleteSystemsSystemEventsEventHooksHookId', 'event', event)
            // verify required parameter 'hookId' is not null or undefined
            assertParamExists('deleteSystemsSystemEventsEventHooksHookId', 'hookId', hookId)
            const localVarPath = `/systems/{system}/events/{event}/hooks/{hook_id}`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)))
                .replace(`{${"event"}}`, encodeURIComponent(String(event)))
                .replace(`{${"hook_id"}}`, encodeURIComponent(String(hookId)));
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
        getAppHooks: async (accessToken: string, xAdsRegion?: string, pageState?: string, status?: string, sort?: string, region?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/app/hooks`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
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
        getHooks: async (accessToken: string, pageState?: string, status?: string, region?: string, xAdsRegion?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/hooks`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
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
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemsSystemEventsEventHooks: async (accessToken: string, system: GetSystemsSystemEventsEventHooksSystemEnum, event: GetSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, scopeName?: string, pageState?: string, status?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'system' is not null or undefined
            assertParamExists('getSystemsSystemEventsEventHooks', 'system', system)
            // verify required parameter 'event' is not null or undefined
            assertParamExists('getSystemsSystemEventsEventHooks', 'event', event)
            const localVarPath = `/systems/{system}/events/{event}/hooks`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)))
                .replace(`{${"event"}}`, encodeURIComponent(String(event)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
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
        getSystemsSystemEventsEventHooksHookId: async (accessToken: string, system: GetSystemsSystemEventsEventHooksHookIdSystemEnum, event: GetSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'system' is not null or undefined
            assertParamExists('getSystemsSystemEventsEventHooksHookId', 'system', system)
            // verify required parameter 'event' is not null or undefined
            assertParamExists('getSystemsSystemEventsEventHooksHookId', 'event', event)
            // verify required parameter 'hookId' is not null or undefined
            assertParamExists('getSystemsSystemEventsEventHooksHookId', 'hookId', hookId)
            const localVarPath = `/systems/{system}/events/{event}/hooks/{hook_id}`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)))
                .replace(`{${"event"}}`, encodeURIComponent(String(event)))
                .replace(`{${"hook_id"}}`, encodeURIComponent(String(hookId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
        getSystemsSystemHooks: async (accessToken: string, system: GetSystemsSystemHooksSystemEnum, xAdsRegion?: string, status?: string, pageState?: string, region?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'system' is not null or undefined
            assertParamExists('getSystemsSystemHooks', 'system', system)
            const localVarPath = `/systems/{system}/hooks`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
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
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSystemsSystemEventsEventHooksHookId: async (accessToken: string, system: PatchSystemsSystemEventsEventHooksHookIdSystemEnum, event: PatchSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, updateHook?: UpdateHook,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'system' is not null or undefined
            assertParamExists('patchSystemsSystemEventsEventHooksHookId', 'system', system)
            // verify required parameter 'event' is not null or undefined
            assertParamExists('patchSystemsSystemEventsEventHooksHookId', 'event', event)
            // verify required parameter 'hookId' is not null or undefined
            assertParamExists('patchSystemsSystemEventsEventHooksHookId', 'hookId', hookId)
            const localVarPath = `/systems/{system}/events/{event}/hooks/{hook_id}`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)))
                .replace(`{${"event"}}`, encodeURIComponent(String(event)))
                .replace(`{${"hook_id"}}`, encodeURIComponent(String(hookId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateHook, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
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
        postSystemsSystemEventsEventHooks: async (accessToken: string, system: PostSystemsSystemEventsEventHooksSystemEnum, event: PostSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'system' is not null or undefined
            assertParamExists('postSystemsSystemEventsEventHooks', 'system', system)
            // verify required parameter 'event' is not null or undefined
            assertParamExists('postSystemsSystemEventsEventHooks', 'event', event)
            const localVarPath = `/systems/{system}/events/{event}/hooks`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)))
                .replace(`{${"event"}}`, encodeURIComponent(String(event)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(createHook, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
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
        postSystemsSystemHooks: async (accessToken: string, system: PostSystemsSystemHooksSystemEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'system' is not null or undefined
            assertParamExists('postSystemsSystemHooks', 'system', system)
            const localVarPath = `/systems/{system}/hooks`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(createHook, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HooksApi - functional programming interface
 * @export
 */
export const HooksApiFp = function(sdkManager?: SDKManager) {
    const localVarAxiosParamCreator = HooksApiAxiosParamCreator(sdkManager.apsconfiguration)
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
        async deleteSystemsSystemEventsEventHooksHookId(accessToken: string, system: DeleteSystemsSystemEventsEventHooksHookIdSystemEnum, event: DeleteSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
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
        async getAppHooks(accessToken: string, xAdsRegion?: string, pageState?: string, status?: string, sort?: string, region?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hooks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAppHooks(accessToken, xAdsRegion, pageState, status, sort, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
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
        async getHooks(accessToken: string, pageState?: string, status?: string, region?: string, xAdsRegion?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hooks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHooks(accessToken, pageState, status, region, xAdsRegion,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
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
        async getSystemsSystemEventsEventHooks(accessToken: string, system: GetSystemsSystemEventsEventHooksSystemEnum, event: GetSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, scopeName?: string, pageState?: string, status?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hooks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSystemsSystemEventsEventHooks(accessToken, system, event, xAdsRegion, region, scopeName, pageState, status,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
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
        async getSystemsSystemEventsEventHooksHookId(accessToken: string, system: GetSystemsSystemEventsEventHooksHookIdSystemEnum, event: GetSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
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
        async getSystemsSystemHooks(accessToken: string, system: GetSystemsSystemHooksSystemEnum, xAdsRegion?: string, status?: string, pageState?: string, region?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hooks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSystemsSystemHooks(accessToken, system, xAdsRegion, status, pageState, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
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
        async patchSystemsSystemEventsEventHooksHookId(accessToken: string, system: PatchSystemsSystemEventsEventHooksHookIdSystemEnum, event: PatchSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, updateHook?: UpdateHook, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region, updateHook,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
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
        async postSystemsSystemEventsEventHooks(accessToken: string, system: PostSystemsSystemEventsEventHooksSystemEnum, event: PostSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postSystemsSystemEventsEventHooks(accessToken, system, event, xAdsRegion, region, createHook,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
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
        async postSystemsSystemHooks(accessToken: string, system: PostSystemsSystemHooksSystemEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateHookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postSystemsSystemHooks(accessToken, system, xAdsRegion, region, createHook,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * HooksApi - interface
 * @export
 * @interface HooksApi
 */
export interface HooksApiInterface {
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
     * @memberof HooksApiInterface
     */
    deleteSystemsSystemEventsEventHooksHookId(accessToken: string,system: DeleteSystemsSystemEventsEventHooksHookIdSystemEnum, event: DeleteSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

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
     * @memberof HooksApiInterface
     */
    getAppHooks(accessToken: string,xAdsRegion?: string, pageState?: string, status?: string, sort?: string, region?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

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
     * @memberof HooksApiInterface
     */
    getHooks(accessToken: string,pageState?: string, status?: string, region?: string, xAdsRegion?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

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
     * @memberof HooksApiInterface
     */
    getSystemsSystemEventsEventHooks(accessToken: string,system: GetSystemsSystemEventsEventHooksSystemEnum, event: GetSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, scopeName?: string, pageState?: string, status?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

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
     * @memberof HooksApiInterface
     */
    getSystemsSystemEventsEventHooksHookId(accessToken: string,system: GetSystemsSystemEventsEventHooksHookIdSystemEnum, event: GetSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

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
     * @memberof HooksApiInterface
     */
    getSystemsSystemHooks(accessToken: string,system: GetSystemsSystemHooksSystemEnum, xAdsRegion?: string, status?: string, pageState?: string, region?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

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
     * @memberof HooksApiInterface
     */
    patchSystemsSystemEventsEventHooksHookId(accessToken: string,system: PatchSystemsSystemEventsEventHooksHookIdSystemEnum, event: PatchSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, updateHook?: UpdateHook,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

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
     * @memberof HooksApiInterface
     */
    postSystemsSystemEventsEventHooks(accessToken: string,system: PostSystemsSystemEventsEventHooksSystemEnum, event: PostSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

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
     * @memberof HooksApiInterface
     */
    postSystemsSystemHooks(accessToken: string,system: PostSystemsSystemHooksSystemEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * HooksApi - object-oriented interface
 * @export
 * @class HooksApi
 * @extends {BaseAPI}
 */
export class HooksApi extends BaseAPI implements HooksApiInterface {
    private logger = this.sdkManager.logger;
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
    public async deleteSystemsSystemEventsEventHooksHookId(accessToken: string, system: DeleteSystemsSystemEventsEventHooksHookIdSystemEnum, event: DeleteSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into deleteSystemsSystemEventsEventHooksHookId ");
      try {
        const request =  await HooksApiFp(this.sdkManager).deleteSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`deleteSystemsSystemEventsEventHooksHookId Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`deleteSystemsSystemEventsEventHooksHookId Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new WebhooksApiApiError(`deleteSystemsSystemEventsEventHooksHookId Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`deleteSystemsSystemEventsEventHooksHookId Request failed with no response received: ${error.request}`);
            throw new WebhooksApiApiError(`deleteSystemsSystemEventsEventHooksHookId Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
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
    public async getAppHooks(accessToken: string, xAdsRegion?: string, pageState?: string, status?: string, sort?: string, region?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getAppHooks ");
      try {
        const request =  await HooksApiFp(this.sdkManager).getAppHooks(accessToken, xAdsRegion, pageState, status, sort, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getAppHooks Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getAppHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new WebhooksApiApiError(`getAppHooks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getAppHooks Request failed with no response received: ${error.request}`);
            throw new WebhooksApiApiError(`getAppHooks Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
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
    public async getHooks(accessToken: string, pageState?: string, status?: string, region?: string, xAdsRegion?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getHooks ");
      try {
        const request =  await HooksApiFp(this.sdkManager).getHooks(accessToken, pageState, status, region, xAdsRegion,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getHooks Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new WebhooksApiApiError(`getHooks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getHooks Request failed with no response received: ${error.request}`);
            throw new WebhooksApiApiError(`getHooks Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
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
    public async getSystemsSystemEventsEventHooks(accessToken: string, system: GetSystemsSystemEventsEventHooksSystemEnum, event: GetSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, scopeName?: string, pageState?: string, status?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getSystemsSystemEventsEventHooks ");
      try {
        const request =  await HooksApiFp(this.sdkManager).getSystemsSystemEventsEventHooks(accessToken, system, event, xAdsRegion, region, scopeName, pageState, status,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getSystemsSystemEventsEventHooks Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getSystemsSystemEventsEventHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new WebhooksApiApiError(`getSystemsSystemEventsEventHooks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getSystemsSystemEventsEventHooks Request failed with no response received: ${error.request}`);
            throw new WebhooksApiApiError(`getSystemsSystemEventsEventHooks Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
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
    public async getSystemsSystemEventsEventHooksHookId(accessToken: string, system: GetSystemsSystemEventsEventHooksHookIdSystemEnum, event: GetSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getSystemsSystemEventsEventHooksHookId ");
      try {
        const request =  await HooksApiFp(this.sdkManager).getSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getSystemsSystemEventsEventHooksHookId Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getSystemsSystemEventsEventHooksHookId Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new WebhooksApiApiError(`getSystemsSystemEventsEventHooksHookId Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getSystemsSystemEventsEventHooksHookId Request failed with no response received: ${error.request}`);
            throw new WebhooksApiApiError(`getSystemsSystemEventsEventHooksHookId Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
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
    public async getSystemsSystemHooks(accessToken: string, system: GetSystemsSystemHooksSystemEnum, xAdsRegion?: string, status?: string, pageState?: string, region?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getSystemsSystemHooks ");
      try {
        const request =  await HooksApiFp(this.sdkManager).getSystemsSystemHooks(accessToken, system, xAdsRegion, status, pageState, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getSystemsSystemHooks Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getSystemsSystemHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new WebhooksApiApiError(`getSystemsSystemHooks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getSystemsSystemHooks Request failed with no response received: ${error.request}`);
            throw new WebhooksApiApiError(`getSystemsSystemHooks Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
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
    public async patchSystemsSystemEventsEventHooksHookId(accessToken: string, system: PatchSystemsSystemEventsEventHooksHookIdSystemEnum, event: PatchSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, updateHook?: UpdateHook, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into patchSystemsSystemEventsEventHooksHookId ");
      try {
        const request =  await HooksApiFp(this.sdkManager).patchSystemsSystemEventsEventHooksHookId(accessToken, system, event, hookId, xAdsRegion, region, updateHook,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`patchSystemsSystemEventsEventHooksHookId Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`patchSystemsSystemEventsEventHooksHookId Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new WebhooksApiApiError(`patchSystemsSystemEventsEventHooksHookId Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`patchSystemsSystemEventsEventHooksHookId Request failed with no response received: ${error.request}`);
            throw new WebhooksApiApiError(`patchSystemsSystemEventsEventHooksHookId Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
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
    public async postSystemsSystemEventsEventHooks(accessToken: string, system: PostSystemsSystemEventsEventHooksSystemEnum, event: PostSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into postSystemsSystemEventsEventHooks ");
      try {
        const request =  await HooksApiFp(this.sdkManager).postSystemsSystemEventsEventHooks(accessToken, system, event, xAdsRegion, region, createHook,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`postSystemsSystemEventsEventHooks Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`postSystemsSystemEventsEventHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new WebhooksApiApiError(`postSystemsSystemEventsEventHooks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`postSystemsSystemEventsEventHooks Request failed with no response received: ${error.request}`);
            throw new WebhooksApiApiError(`postSystemsSystemEventsEventHooks Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
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
    public async postSystemsSystemHooks(accessToken: string, system: PostSystemsSystemHooksSystemEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into postSystemsSystemHooks ");
      try {
        const request =  await HooksApiFp(this.sdkManager).postSystemsSystemHooks(accessToken, system, xAdsRegion, region, createHook,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`postSystemsSystemHooks Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`postSystemsSystemHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new WebhooksApiApiError(`postSystemsSystemHooks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`postSystemsSystemHooks Request failed with no response received: ${error.request}`);
            throw new WebhooksApiApiError(`postSystemsSystemHooks Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

/**
 * @export
 */
export const DeleteSystemsSystemEventsEventHooksHookIdSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
} as const;
export type DeleteSystemsSystemEventsEventHooksHookIdSystemEnum = typeof DeleteSystemsSystemEventsEventHooksHookIdSystemEnum[keyof typeof DeleteSystemsSystemEventsEventHooksHookIdSystemEnum];
/**
 * @export
 */
export const DeleteSystemsSystemEventsEventHooksHookIdEventEnum = {
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
} as const;
export type DeleteSystemsSystemEventsEventHooksHookIdEventEnum = typeof DeleteSystemsSystemEventsEventHooksHookIdEventEnum[keyof typeof DeleteSystemsSystemEventsEventHooksHookIdEventEnum];
/**
 * @export
 */
export const GetSystemsSystemEventsEventHooksSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
} as const;
export type GetSystemsSystemEventsEventHooksSystemEnum = typeof GetSystemsSystemEventsEventHooksSystemEnum[keyof typeof GetSystemsSystemEventsEventHooksSystemEnum];
/**
 * @export
 */
export const GetSystemsSystemEventsEventHooksEventEnum = {
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
} as const;
export type GetSystemsSystemEventsEventHooksEventEnum = typeof GetSystemsSystemEventsEventHooksEventEnum[keyof typeof GetSystemsSystemEventsEventHooksEventEnum];
/**
 * @export
 */
export const GetSystemsSystemEventsEventHooksHookIdSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
} as const;
export type GetSystemsSystemEventsEventHooksHookIdSystemEnum = typeof GetSystemsSystemEventsEventHooksHookIdSystemEnum[keyof typeof GetSystemsSystemEventsEventHooksHookIdSystemEnum];
/**
 * @export
 */
export const GetSystemsSystemEventsEventHooksHookIdEventEnum = {
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
} as const;
export type GetSystemsSystemEventsEventHooksHookIdEventEnum = typeof GetSystemsSystemEventsEventHooksHookIdEventEnum[keyof typeof GetSystemsSystemEventsEventHooksHookIdEventEnum];
/**
 * @export
 */
export const GetSystemsSystemHooksSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
} as const;
export type GetSystemsSystemHooksSystemEnum = typeof GetSystemsSystemHooksSystemEnum[keyof typeof GetSystemsSystemHooksSystemEnum];
/**
 * @export
 */
export const PatchSystemsSystemEventsEventHooksHookIdSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
} as const;
export type PatchSystemsSystemEventsEventHooksHookIdSystemEnum = typeof PatchSystemsSystemEventsEventHooksHookIdSystemEnum[keyof typeof PatchSystemsSystemEventsEventHooksHookIdSystemEnum];
/**
 * @export
 */
export const PatchSystemsSystemEventsEventHooksHookIdEventEnum = {
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
} as const;
export type PatchSystemsSystemEventsEventHooksHookIdEventEnum = typeof PatchSystemsSystemEventsEventHooksHookIdEventEnum[keyof typeof PatchSystemsSystemEventsEventHooksHookIdEventEnum];
/**
 * @export
 */
export const PostSystemsSystemEventsEventHooksSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
} as const;
export type PostSystemsSystemEventsEventHooksSystemEnum = typeof PostSystemsSystemEventsEventHooksSystemEnum[keyof typeof PostSystemsSystemEventsEventHooksSystemEnum];
/**
 * @export
 */
export const PostSystemsSystemEventsEventHooksEventEnum = {
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
} as const;
export type PostSystemsSystemEventsEventHooksEventEnum = typeof PostSystemsSystemEventsEventHooksEventEnum[keyof typeof PostSystemsSystemEventsEventHooksEventEnum];
/**
 * @export
 */
export const PostSystemsSystemHooksSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
} as const;
export type PostSystemsSystemHooksSystemEnum = typeof PostSystemsSystemHooksSystemEnum[keyof typeof PostSystemsSystemHooksSystemEnum];
