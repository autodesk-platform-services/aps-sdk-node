/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, WebhooksApiError } from '../base';
import { Hook } from '../model';
import { HookDetails } from '../model';
import { HookPayload } from '../model';
import { Hooks } from '../model';
import { ModifyHookPayload } from '../model';
import { Region } from '../model';
import { Sort } from '../model';
import { StatusFilter } from '../model';
import { XAdsRegion } from '../model';
/**
 * HooksApi - axios parameter creator
 * @export
 */
export const HooksApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Adds a new webhook to receive notifications of the occurrence of a specified event for the specified system.
         * @summary Create a Webhook for an Event
         * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
         * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {HookPayload} [hookPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSystemEventHook: async (accessToken: string, system: string, event: string, region?: Region, xAdsRegion?: XAdsRegion, hookPayload?: HookPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'system' is not null or undefined
            assertParamExists('createSystemEventHook', 'system', system)
            // verify required parameter 'event' is not null or undefined
            assertParamExists('createSystemEventHook', 'event', event)
            const localVarPath = `/webhooks/v1/systems/{system}/events/{event}/hooks`
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
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/WEBHOOKS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(hookPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds a new webhook to receive notifications of all events for the specified system.
         * @summary Create Webhooks for All Events
         * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {HookPayload} [hookPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSystemHook: async (accessToken: string, system: string, xAdsRegion?: XAdsRegion, region?: Region, hookPayload?: HookPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'system' is not null or undefined
            assertParamExists('createSystemHook', 'system', system)
            const localVarPath = `/webhooks/v1/systems/{system}/hooks`
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
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/WEBHOOKS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(hookPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the webhook specified by its ID.
         * @summary Delete a Webhook
         * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
         * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
         * @param {string} hookId The ID of the webhook to delete.
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSystemEventHook: async (accessToken: string, system: string, event: string, hookId: string, xAdsRegion?: XAdsRegion, region?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'system' is not null or undefined
            assertParamExists('deleteSystemEventHook', 'system', system)
            // verify required parameter 'event' is not null or undefined
            assertParamExists('deleteSystemEventHook', 'event', event)
            // verify required parameter 'hookId' is not null or undefined
            assertParamExists('deleteSystemEventHook', 'hookId', hookId)
            const localVarPath = `/webhooks/v1/systems/{system}/events/{event}/hooks/{hook_id}`
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
         * Retrieves a paginated list of webhooks created by the calling application. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.  **Note:** This operation requires an access token through a Client Credentials flow (two-legged OAuth). 
         * @summary List All Webhooks for an App
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
         * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
         * @param {Sort} [sort] Specifies the sorting order of the list of webhooks by their &#x60;&#x60;lastUpdatedDate&#x60;&#x60; attribute.   - &#x60;&#x60;asc&#x60;&#x60; - Ascending order. - &#x60;&#x60;desc&#x60;&#x60; - (Default) Descending order.  
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppHooks: async (accessToken: string, xAdsRegion?: XAdsRegion, pageState?: string, status?: StatusFilter, sort?: Sort, region?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/webhooks/v1/app/hooks`;
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
         * Retrieves the details of the webhook for the specified event within the specified system.
         * @summary Get Webhook Details
         * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
         * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
         * @param {string} hookId The ID of the webhook to delete.
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHookDetails: async (accessToken: string, system: string, event: string, hookId: string, xAdsRegion?: XAdsRegion, region?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'system' is not null or undefined
            assertParamExists('getHookDetails', 'system', system)
            // verify required parameter 'event' is not null or undefined
            assertParamExists('getHookDetails', 'event', event)
            // verify required parameter 'hookId' is not null or undefined
            assertParamExists('getHookDetails', 'hookId', hookId)
            const localVarPath = `/webhooks/v1/systems/{system}/events/{event}/hooks/{hook_id}`
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
         * Retrieves a paginated list of webhooks available to the provided access token within the specified region. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
         * @summary List All Webhooks
         * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
         * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHooks: async (accessToken: string, pageState?: string, status?: StatusFilter, region?: Region, xAdsRegion?: XAdsRegion,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/webhooks/v1/hooks`;
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
         * Retrieves a paginated list of webhooks for the specified event. The returned list contains a subset of webhooks accessible to the provided access token within the specified region. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
         * @summary List All Webhooks for an Event
         * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
         * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {string} [scopeName] Filters retrieved webhooks by the scope name used to create hook. For example : &#x60;&#x60;folder&#x60;&#x60;.  If this parameter is not specified, the filter is not applied.
         * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
         * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemEventHooks: async (accessToken: string, system: string, event: string, xAdsRegion?: XAdsRegion, region?: Region, scopeName?: string, pageState?: string, status?: StatusFilter,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'system' is not null or undefined
            assertParamExists('getSystemEventHooks', 'system', system)
            // verify required parameter 'event' is not null or undefined
            assertParamExists('getSystemEventHooks', 'event', event)
            const localVarPath = `/webhooks/v1/systems/{system}/events/{event}/hooks`
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
         * Retrieves a paginated list of webhooks for the specified system. The returned list contains a subset of webhooks accessible to the provided access token within the specified region. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
         * @summary List All Webhooks for a System
         * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
         * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemHooks: async (accessToken: string, system: string, xAdsRegion?: XAdsRegion, status?: StatusFilter, pageState?: string, region?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'system' is not null or undefined
            assertParamExists('getSystemHooks', 'system', system)
            const localVarPath = `/webhooks/v1/systems/{system}/hooks`
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
         * Updates the webhook specified by the ``hook_id`` parameter. Currently the only attributes you can update are:   - filter - status - hook attribute - token - auto-reactivate hook flag - hook expiry - callbackWithEventPaylaod flag   See the request body documentation for more information.
         * @summary Update a Webhook
         * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
         * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
         * @param {string} hookId The ID of the webhook to delete.
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {ModifyHookPayload} [modifyHookPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSystemEventHook: async (accessToken: string, system: string, event: string, hookId: string, xAdsRegion?: XAdsRegion, region?: Region, modifyHookPayload?: ModifyHookPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'system' is not null or undefined
            assertParamExists('patchSystemEventHook', 'system', system)
            // verify required parameter 'event' is not null or undefined
            assertParamExists('patchSystemEventHook', 'event', event)
            // verify required parameter 'hookId' is not null or undefined
            assertParamExists('patchSystemEventHook', 'hookId', hookId)
            const localVarPath = `/webhooks/v1/systems/{system}/events/{event}/hooks/{hook_id}`
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
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/WEBHOOKS/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(modifyHookPayload, localVarRequestOptions, apsConfiguration)

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
export const HooksApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = HooksApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Adds a new webhook to receive notifications of the occurrence of a specified event for the specified system.
         * @summary Create a Webhook for an Event
         * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
         * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {HookPayload} [hookPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSystemEventHook(accessToken: string, system: string, event: string, region?: Region, xAdsRegion?: XAdsRegion, hookPayload?: HookPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSystemEventHook(accessToken, system, event, region, xAdsRegion, hookPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Adds a new webhook to receive notifications of all events for the specified system.
         * @summary Create Webhooks for All Events
         * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {HookPayload} [hookPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSystemHook(accessToken: string, system: string, xAdsRegion?: XAdsRegion, region?: Region, hookPayload?: HookPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSystemHook(accessToken, system, xAdsRegion, region, hookPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Deletes the webhook specified by its ID.
         * @summary Delete a Webhook
         * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
         * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
         * @param {string} hookId The ID of the webhook to delete.
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSystemEventHook(accessToken: string, system: string, event: string, hookId: string, xAdsRegion?: XAdsRegion, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSystemEventHook(accessToken, system, event, hookId, xAdsRegion, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves a paginated list of webhooks created by the calling application. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.  **Note:** This operation requires an access token through a Client Credentials flow (two-legged OAuth). 
         * @summary List All Webhooks for an App
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
         * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
         * @param {Sort} [sort] Specifies the sorting order of the list of webhooks by their &#x60;&#x60;lastUpdatedDate&#x60;&#x60; attribute.   - &#x60;&#x60;asc&#x60;&#x60; - Ascending order. - &#x60;&#x60;desc&#x60;&#x60; - (Default) Descending order.  
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAppHooks(accessToken: string, xAdsRegion?: XAdsRegion, pageState?: string, status?: StatusFilter, sort?: Sort, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hooks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAppHooks(accessToken, xAdsRegion, pageState, status, sort, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves the details of the webhook for the specified event within the specified system.
         * @summary Get Webhook Details
         * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
         * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
         * @param {string} hookId The ID of the webhook to delete.
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHookDetails(accessToken: string, system: string, event: string, hookId: string, xAdsRegion?: XAdsRegion, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HookDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHookDetails(accessToken, system, event, hookId, xAdsRegion, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves a paginated list of webhooks available to the provided access token within the specified region. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
         * @summary List All Webhooks
         * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
         * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHooks(accessToken: string, pageState?: string, status?: StatusFilter, region?: Region, xAdsRegion?: XAdsRegion, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hooks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHooks(accessToken, pageState, status, region, xAdsRegion,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves a paginated list of webhooks for the specified event. The returned list contains a subset of webhooks accessible to the provided access token within the specified region. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
         * @summary List All Webhooks for an Event
         * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
         * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {string} [scopeName] Filters retrieved webhooks by the scope name used to create hook. For example : &#x60;&#x60;folder&#x60;&#x60;.  If this parameter is not specified, the filter is not applied.
         * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
         * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSystemEventHooks(accessToken: string, system: string, event: string, xAdsRegion?: XAdsRegion, region?: Region, scopeName?: string, pageState?: string, status?: StatusFilter, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hooks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSystemEventHooks(accessToken, system, event, xAdsRegion, region, scopeName, pageState, status,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves a paginated list of webhooks for the specified system. The returned list contains a subset of webhooks accessible to the provided access token within the specified region. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
         * @summary List All Webhooks for a System
         * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
         * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSystemHooks(accessToken: string, system: string, xAdsRegion?: XAdsRegion, status?: StatusFilter, pageState?: string, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hooks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSystemHooks(accessToken, system, xAdsRegion, status, pageState, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Updates the webhook specified by the ``hook_id`` parameter. Currently the only attributes you can update are:   - filter - status - hook attribute - token - auto-reactivate hook flag - hook expiry - callbackWithEventPaylaod flag   See the request body documentation for more information.
         * @summary Update a Webhook
         * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
         * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
         * @param {string} hookId The ID of the webhook to delete.
         * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
         * @param {ModifyHookPayload} [modifyHookPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchSystemEventHook(accessToken: string, system: string, event: string, hookId: string, xAdsRegion?: XAdsRegion, region?: Region, modifyHookPayload?: ModifyHookPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchSystemEventHook(accessToken, system, event, hookId, xAdsRegion, region, modifyHookPayload,  options);
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
     * Adds a new webhook to receive notifications of the occurrence of a specified event for the specified system.
     * @summary Create a Webhook for an Event
     * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
     * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {HookPayload} [hookPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApiInterface
     */
    createSystemEventHook(accessToken: string,system: string, event: string, region?: Region, xAdsRegion?: XAdsRegion, hookPayload?: HookPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Adds a new webhook to receive notifications of all events for the specified system.
     * @summary Create Webhooks for All Events
     * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {HookPayload} [hookPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApiInterface
     */
    createSystemHook(accessToken: string,system: string, xAdsRegion?: XAdsRegion, region?: Region, hookPayload?: HookPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Deletes the webhook specified by its ID.
     * @summary Delete a Webhook
     * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
     * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
     * @param {string} hookId The ID of the webhook to delete.
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApiInterface
     */
    deleteSystemEventHook(accessToken: string,system: string, event: string, hookId: string, xAdsRegion?: XAdsRegion, region?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves a paginated list of webhooks created by the calling application. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.  **Note:** This operation requires an access token through a Client Credentials flow (two-legged OAuth). 
     * @summary List All Webhooks for an App
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
     * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
     * @param {Sort} [sort] Specifies the sorting order of the list of webhooks by their &#x60;&#x60;lastUpdatedDate&#x60;&#x60; attribute.   - &#x60;&#x60;asc&#x60;&#x60; - Ascending order. - &#x60;&#x60;desc&#x60;&#x60; - (Default) Descending order.  
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApiInterface
     */
    getAppHooks(accessToken: string,xAdsRegion?: XAdsRegion, pageState?: string, status?: StatusFilter, sort?: Sort, region?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves the details of the webhook for the specified event within the specified system.
     * @summary Get Webhook Details
     * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
     * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
     * @param {string} hookId The ID of the webhook to delete.
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApiInterface
     */
    getHookDetails(accessToken: string,system: string, event: string, hookId: string, xAdsRegion?: XAdsRegion, region?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves a paginated list of webhooks available to the provided access token within the specified region. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
     * @summary List All Webhooks
     * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
     * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApiInterface
     */
    getHooks(accessToken: string,pageState?: string, status?: StatusFilter, region?: Region, xAdsRegion?: XAdsRegion,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves a paginated list of webhooks for the specified event. The returned list contains a subset of webhooks accessible to the provided access token within the specified region. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
     * @summary List All Webhooks for an Event
     * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
     * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {string} [scopeName] Filters retrieved webhooks by the scope name used to create hook. For example : &#x60;&#x60;folder&#x60;&#x60;.  If this parameter is not specified, the filter is not applied.
     * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
     * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApiInterface
     */
    getSystemEventHooks(accessToken: string,system: string, event: string, xAdsRegion?: XAdsRegion, region?: Region, scopeName?: string, pageState?: string, status?: StatusFilter,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves a paginated list of webhooks for the specified system. The returned list contains a subset of webhooks accessible to the provided access token within the specified region. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
     * @summary List All Webhooks for a System
     * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
     * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApiInterface
     */
    getSystemHooks(accessToken: string,system: string, xAdsRegion?: XAdsRegion, status?: StatusFilter, pageState?: string, region?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Updates the webhook specified by the ``hook_id`` parameter. Currently the only attributes you can update are:   - filter - status - hook attribute - token - auto-reactivate hook flag - hook expiry - callbackWithEventPaylaod flag   See the request body documentation for more information.
     * @summary Update a Webhook
     * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
     * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
     * @param {string} hookId The ID of the webhook to delete.
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {ModifyHookPayload} [modifyHookPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApiInterface
     */
    patchSystemEventHook(accessToken: string,system: string, event: string, hookId: string, xAdsRegion?: XAdsRegion, region?: Region, modifyHookPayload?: ModifyHookPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * HooksApi - object-oriented interface
 * @export
 * @class HooksApi
 * @extends {BaseApi}
 */
export class HooksApi extends BaseApi implements HooksApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Adds a new webhook to receive notifications of the occurrence of a specified event for the specified system.
     * @summary Create a Webhook for an Event
     * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
     * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {HookPayload} [hookPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    public async createSystemEventHook(accessToken: string, system: string, event: string, region?: Region, xAdsRegion?: XAdsRegion, hookPayload?: HookPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createSystemEventHook ");
      try {
        const request =  await HooksApiFp(this.sdkManager).createSystemEventHook(accessToken, system, event, region, xAdsRegion, hookPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createSystemEventHook Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createSystemEventHook Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new WebhooksApiError(`createSystemEventHook Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createSystemEventHook Request failed with no response received: ${error.request}`);
            throw new WebhooksApiError(`createSystemEventHook Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Adds a new webhook to receive notifications of all events for the specified system.
     * @summary Create Webhooks for All Events
     * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {HookPayload} [hookPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    public async createSystemHook(accessToken: string, system: string, xAdsRegion?: XAdsRegion, region?: Region, hookPayload?: HookPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createSystemHook ");
      try {
        const request =  await HooksApiFp(this.sdkManager).createSystemHook(accessToken, system, xAdsRegion, region, hookPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createSystemHook Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createSystemHook Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new WebhooksApiError(`createSystemHook Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createSystemHook Request failed with no response received: ${error.request}`);
            throw new WebhooksApiError(`createSystemHook Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Deletes the webhook specified by its ID.
     * @summary Delete a Webhook
     * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
     * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
     * @param {string} hookId The ID of the webhook to delete.
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    public async deleteSystemEventHook(accessToken: string, system: string, event: string, hookId: string, xAdsRegion?: XAdsRegion, region?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into deleteSystemEventHook ");
      try {
        const request =  await HooksApiFp(this.sdkManager).deleteSystemEventHook(accessToken, system, event, hookId, xAdsRegion, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`deleteSystemEventHook Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`deleteSystemEventHook Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new WebhooksApiError(`deleteSystemEventHook Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`deleteSystemEventHook Request failed with no response received: ${error.request}`);
            throw new WebhooksApiError(`deleteSystemEventHook Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves a paginated list of webhooks created by the calling application. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.  **Note:** This operation requires an access token through a Client Credentials flow (two-legged OAuth). 
     * @summary List All Webhooks for an App
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
     * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
     * @param {Sort} [sort] Specifies the sorting order of the list of webhooks by their &#x60;&#x60;lastUpdatedDate&#x60;&#x60; attribute.   - &#x60;&#x60;asc&#x60;&#x60; - Ascending order. - &#x60;&#x60;desc&#x60;&#x60; - (Default) Descending order.  
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    public async getAppHooks(accessToken: string, xAdsRegion?: XAdsRegion, pageState?: string, status?: StatusFilter, sort?: Sort, region?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getAppHooks ");
      try {
        const request =  await HooksApiFp(this.sdkManager).getAppHooks(accessToken, xAdsRegion, pageState, status, sort, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getAppHooks Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getAppHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new WebhooksApiError(`getAppHooks Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getAppHooks Request failed with no response received: ${error.request}`);
            throw new WebhooksApiError(`getAppHooks Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves the details of the webhook for the specified event within the specified system.
     * @summary Get Webhook Details
     * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
     * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
     * @param {string} hookId The ID of the webhook to delete.
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    public async getHookDetails(accessToken: string, system: string, event: string, hookId: string, xAdsRegion?: XAdsRegion, region?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getHookDetails ");
      try {
        const request =  await HooksApiFp(this.sdkManager).getHookDetails(accessToken, system, event, hookId, xAdsRegion, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getHookDetails Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getHookDetails Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new WebhooksApiError(`getHookDetails Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getHookDetails Request failed with no response received: ${error.request}`);
            throw new WebhooksApiError(`getHookDetails Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves a paginated list of webhooks available to the provided access token within the specified region. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
     * @summary List All Webhooks
     * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
     * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    public async getHooks(accessToken: string, pageState?: string, status?: StatusFilter, region?: Region, xAdsRegion?: XAdsRegion, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getHooks ");
      try {
        const request =  await HooksApiFp(this.sdkManager).getHooks(accessToken, pageState, status, region, xAdsRegion,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getHooks Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new WebhooksApiError(`getHooks Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getHooks Request failed with no response received: ${error.request}`);
            throw new WebhooksApiError(`getHooks Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves a paginated list of webhooks for the specified event. The returned list contains a subset of webhooks accessible to the provided access token within the specified region. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
     * @summary List All Webhooks for an Event
     * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
     * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {string} [scopeName] Filters retrieved webhooks by the scope name used to create hook. For example : &#x60;&#x60;folder&#x60;&#x60;.  If this parameter is not specified, the filter is not applied.
     * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
     * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    public async getSystemEventHooks(accessToken: string, system: string, event: string, xAdsRegion?: XAdsRegion, region?: Region, scopeName?: string, pageState?: string, status?: StatusFilter, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getSystemEventHooks ");
      try {
        const request =  await HooksApiFp(this.sdkManager).getSystemEventHooks(accessToken, system, event, xAdsRegion, region, scopeName, pageState, status,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getSystemEventHooks Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getSystemEventHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new WebhooksApiError(`getSystemEventHooks Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getSystemEventHooks Request failed with no response received: ${error.request}`);
            throw new WebhooksApiError(`getSystemEventHooks Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves a paginated list of webhooks for the specified system. The returned list contains a subset of webhooks accessible to the provided access token within the specified region. Each page includes up to 200 webhooks.  If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
     * @summary List All Webhooks for a System
     * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {StatusFilter} [status] Filters retrieved webhooks by their current state. Possible values are   - &#x60;&#x60;active&#x60;&#x60; - Successfully delivered most recent event notifications.  - &#x60;&#x60;inactive&#x60;&#x60; - Failed to deliver most recent event notification and has been deactivated. - &#x60;&#x60;reactivated&#x60;&#x60; - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. 
     * @param {string} [pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the &#x60;&#x60;next&#x60;&#x60; value from the previous response to fetch subsequent pages.
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    public async getSystemHooks(accessToken: string, system: string, xAdsRegion?: XAdsRegion, status?: StatusFilter, pageState?: string, region?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getSystemHooks ");
      try {
        const request =  await HooksApiFp(this.sdkManager).getSystemHooks(accessToken, system, xAdsRegion, status, pageState, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getSystemHooks Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getSystemHooks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new WebhooksApiError(`getSystemHooks Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getSystemHooks Request failed with no response received: ${error.request}`);
            throw new WebhooksApiError(`getSystemHooks Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Updates the webhook specified by the ``hook_id`` parameter. Currently the only attributes you can update are:   - filter - status - hook attribute - token - auto-reactivate hook flag - hook expiry - callbackWithEventPaylaod flag   See the request body documentation for more information.
     * @summary Update a Webhook
     * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs. 
     * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
     * @param {string} hookId The ID of the webhook to delete.
     * @param {XAdsRegion} [xAdsRegion] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;region&#x60;&#x60; query string parameter to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {Region} [region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center dedicated to serve the United States region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center dedicated to serve the European Union, Middle East, and Africa regions. - &#x60;&#x60;AUS&#x60;&#x60; - (Beta) Data center dedicated to serve the Australia region.  **Note:**   1. Beta features are subject to change. Please avoid using them in production environments. 2. You can also use the &#x60;&#x60;x-ads-region&#x60;&#x60; header to specify the region. If you specify the &#x60;&#x60;region&#x60;&#x60; query string parameter as well as the &#x60;&#x60;x-ads-region&#x60;&#x60; header, the &#x60;&#x60;x-ads-region&#x60;&#x60; header takes precedence. 
     * @param {ModifyHookPayload} [modifyHookPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    public async patchSystemEventHook(accessToken: string, system: string, event: string, hookId: string, xAdsRegion?: XAdsRegion, region?: Region, modifyHookPayload?: ModifyHookPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into patchSystemEventHook ");
      try {
        const request =  await HooksApiFp(this.sdkManager).patchSystemEventHook(accessToken, system, event, hookId, xAdsRegion, region, modifyHookPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`patchSystemEventHook Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`patchSystemEventHook Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new WebhooksApiError(`patchSystemEventHook Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`patchSystemEventHook Request failed with no response received: ${error.request}`);
            throw new WebhooksApiError(`patchSystemEventHook Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

