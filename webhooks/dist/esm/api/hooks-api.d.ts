import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { Events } from '../model';
import { Hook } from '../model';
import { HookDetails } from '../model';
import { HookPayload } from '../model';
import { Hooks } from '../model';
import { ModifyHookPayload } from '../model';
import { Systems } from '../model';
/**
 * HooksApi - axios parameter creator
 * @export
 */
export declare const HooksApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
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
    createSystemEventHook: (accessToken: string, system: Systems, event: Events, xAdsRegion?: string, region?: string, hookPayload?: HookPayload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    createSystemHook: (accessToken: string, system: Systems, xAdsRegion?: string, region?: string, hookPayload?: HookPayload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    deleteSystemEventHook: (accessToken: string, system: Systems, event: Events, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getAppHooks: (accessToken: string, xAdsRegion?: string, pageState?: string, status?: string, sort?: string, region?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getHookDetails: (accessToken: string, system: Systems, event: Events, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getHooks: (accessToken: string, pageState?: string, status?: string, region?: string, xAdsRegion?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getSystemEventHooks: (accessToken: string, system: Systems, event: Events, xAdsRegion?: string, region?: string, scopeName?: string, pageState?: string, status?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getSystemHooks: (accessToken: string, system: Systems, xAdsRegion?: string, status?: string, pageState?: string, region?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    patchSystemEventHook: (accessToken: string, system: Systems, event: Events, hookId: string, xAdsRegion?: string, region?: string, modifyHookPayload?: ModifyHookPayload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * HooksApi - functional programming interface
 * @export
 */
export declare const HooksApiFp: (sdkManager?: SDKManager) => {
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
    createSystemEventHook(accessToken: string, system: Systems, event: Events, xAdsRegion?: string, region?: string, hookPayload?: HookPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
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
    createSystemHook(accessToken: string, system: Systems, xAdsRegion?: string, region?: string, hookPayload?: HookPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hook>>;
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
    deleteSystemEventHook(accessToken: string, system: Systems, event: Events, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
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
    getAppHooks(accessToken: string, xAdsRegion?: string, pageState?: string, status?: string, sort?: string, region?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hooks>>;
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
    getHookDetails(accessToken: string, system: Systems, event: Events, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HookDetails>>;
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
    getHooks(accessToken: string, pageState?: string, status?: string, region?: string, xAdsRegion?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hooks>>;
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
    getSystemEventHooks(accessToken: string, system: Systems, event: Events, xAdsRegion?: string, region?: string, scopeName?: string, pageState?: string, status?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hooks>>;
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
    getSystemHooks(accessToken: string, system: Systems, xAdsRegion?: string, status?: string, pageState?: string, region?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hooks>>;
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
    patchSystemEventHook(accessToken: string, system: Systems, event: Events, hookId: string, xAdsRegion?: string, region?: string, modifyHookPayload?: ModifyHookPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
/**
 * HooksApi - interface
 * @export
 * @interface HooksApi
 */
export interface HooksApiInterface {
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
     * @memberof HooksApiInterface
     */
    createSystemEventHook(accessToken: string, system: Systems, event: Events, xAdsRegion?: string, region?: string, hookPayload?: HookPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof HooksApiInterface
     */
    createSystemHook(accessToken: string, system: Systems, xAdsRegion?: string, region?: string, hookPayload?: HookPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof HooksApiInterface
     */
    deleteSystemEventHook(accessToken: string, system: Systems, event: Events, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getAppHooks(accessToken: string, xAdsRegion?: string, pageState?: string, status?: string, sort?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof HooksApiInterface
     */
    getHookDetails(accessToken: string, system: Systems, event: Events, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getHooks(accessToken: string, pageState?: string, status?: string, region?: string, xAdsRegion?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof HooksApiInterface
     */
    getSystemEventHooks(accessToken: string, system: Systems, event: Events, xAdsRegion?: string, region?: string, scopeName?: string, pageState?: string, status?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof HooksApiInterface
     */
    getSystemHooks(accessToken: string, system: Systems, xAdsRegion?: string, status?: string, pageState?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
     * @memberof HooksApiInterface
     */
    patchSystemEventHook(accessToken: string, system: Systems, event: Events, hookId: string, xAdsRegion?: string, region?: string, modifyHookPayload?: ModifyHookPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * HooksApi - object-oriented interface
 * @export
 * @class HooksApi
 * @extends {BaseAPI}
 */
export declare class HooksApi extends BaseAPI implements HooksApiInterface {
    private logger;
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
    createSystemEventHook(accessToken: string, system: Systems, event: Events, xAdsRegion?: string, region?: string, hookPayload?: HookPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    createSystemHook(accessToken: string, system: Systems, xAdsRegion?: string, region?: string, hookPayload?: HookPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    deleteSystemEventHook(accessToken: string, system: Systems, event: Events, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getAppHooks(accessToken: string, xAdsRegion?: string, pageState?: string, status?: string, sort?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getHookDetails(accessToken: string, system: Systems, event: Events, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getHooks(accessToken: string, pageState?: string, status?: string, region?: string, xAdsRegion?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getSystemEventHooks(accessToken: string, system: Systems, event: Events, xAdsRegion?: string, region?: string, scopeName?: string, pageState?: string, status?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getSystemHooks(accessToken: string, system: Systems, xAdsRegion?: string, status?: string, pageState?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    patchSystemEventHook(accessToken: string, system: Systems, event: Events, hookId: string, xAdsRegion?: string, region?: string, modifyHookPayload?: ModifyHookPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
