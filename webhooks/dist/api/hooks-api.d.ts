import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { CreateHook } from '../model';
import { CreateHookResponse } from '../model';
import { Hook } from '../model';
import { Hooks } from '../model';
import { UpdateHook } from '../model';
/**
 * HooksApi - axios parameter creator
 * @export
 */
export declare const HooksApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
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
    deleteSystemsSystemEventsEventHooksHookId: (accessToken: string, system: DeleteSystemsSystemEventsEventHooksHookIdSystemEnum, event: DeleteSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getSystemsSystemEventsEventHooks: (accessToken: string, system: GetSystemsSystemEventsEventHooksSystemEnum, event: GetSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, scopeName?: string, pageState?: string, status?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getSystemsSystemEventsEventHooksHookId: (accessToken: string, system: GetSystemsSystemEventsEventHooksHookIdSystemEnum, event: GetSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getSystemsSystemHooks: (accessToken: string, system: GetSystemsSystemHooksSystemEnum, xAdsRegion?: string, status?: string, pageState?: string, region?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    patchSystemsSystemEventsEventHooksHookId: (accessToken: string, system: PatchSystemsSystemEventsEventHooksHookIdSystemEnum, event: PatchSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, updateHook?: UpdateHook, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    postSystemsSystemEventsEventHooks: (accessToken: string, system: PostSystemsSystemEventsEventHooksSystemEnum, event: PostSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    postSystemsSystemHooks: (accessToken: string, system: PostSystemsSystemHooksSystemEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * HooksApi - functional programming interface
 * @export
 */
export declare const HooksApiFp: (sdkManager?: SDKManager) => {
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
    deleteSystemsSystemEventsEventHooksHookId(accessToken: string, system: DeleteSystemsSystemEventsEventHooksHookIdSystemEnum, event: DeleteSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
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
    getSystemsSystemEventsEventHooks(accessToken: string, system: GetSystemsSystemEventsEventHooksSystemEnum, event: GetSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, scopeName?: string, pageState?: string, status?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hooks>>;
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
    getSystemsSystemEventsEventHooksHookId(accessToken: string, system: GetSystemsSystemEventsEventHooksHookIdSystemEnum, event: GetSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hook>>;
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
    getSystemsSystemHooks(accessToken: string, system: GetSystemsSystemHooksSystemEnum, xAdsRegion?: string, status?: string, pageState?: string, region?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hooks>>;
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
    patchSystemsSystemEventsEventHooksHookId(accessToken: string, system: PatchSystemsSystemEventsEventHooksHookIdSystemEnum, event: PatchSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, updateHook?: UpdateHook, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
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
    postSystemsSystemEventsEventHooks(accessToken: string, system: PostSystemsSystemEventsEventHooksSystemEnum, event: PostSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
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
    postSystemsSystemHooks(accessToken: string, system: PostSystemsSystemHooksSystemEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateHookResponse>>;
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
    deleteSystemsSystemEventsEventHooksHookId(accessToken: string, system: DeleteSystemsSystemEventsEventHooksHookIdSystemEnum, event: DeleteSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getSystemsSystemEventsEventHooks(accessToken: string, system: GetSystemsSystemEventsEventHooksSystemEnum, event: GetSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, scopeName?: string, pageState?: string, status?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getSystemsSystemEventsEventHooksHookId(accessToken: string, system: GetSystemsSystemEventsEventHooksHookIdSystemEnum, event: GetSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getSystemsSystemHooks(accessToken: string, system: GetSystemsSystemHooksSystemEnum, xAdsRegion?: string, status?: string, pageState?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    patchSystemsSystemEventsEventHooksHookId(accessToken: string, system: PatchSystemsSystemEventsEventHooksHookIdSystemEnum, event: PatchSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, updateHook?: UpdateHook, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    postSystemsSystemEventsEventHooks(accessToken: string, system: PostSystemsSystemEventsEventHooksSystemEnum, event: PostSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    postSystemsSystemHooks(accessToken: string, system: PostSystemsSystemHooksSystemEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    deleteSystemsSystemEventsEventHooksHookId(accessToken: string, system: DeleteSystemsSystemEventsEventHooksHookIdSystemEnum, event: DeleteSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getSystemsSystemEventsEventHooks(accessToken: string, system: GetSystemsSystemEventsEventHooksSystemEnum, event: GetSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, scopeName?: string, pageState?: string, status?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getSystemsSystemEventsEventHooksHookId(accessToken: string, system: GetSystemsSystemEventsEventHooksHookIdSystemEnum, event: GetSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getSystemsSystemHooks(accessToken: string, system: GetSystemsSystemHooksSystemEnum, xAdsRegion?: string, status?: string, pageState?: string, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    patchSystemsSystemEventsEventHooksHookId(accessToken: string, system: PatchSystemsSystemEventsEventHooksHookIdSystemEnum, event: PatchSystemsSystemEventsEventHooksHookIdEventEnum, hookId: string, xAdsRegion?: string, region?: string, updateHook?: UpdateHook, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    postSystemsSystemEventsEventHooks(accessToken: string, system: PostSystemsSystemEventsEventHooksSystemEnum, event: PostSystemsSystemEventsEventHooksEventEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    postSystemsSystemHooks(accessToken: string, system: PostSystemsSystemHooksSystemEnum, xAdsRegion?: string, region?: string, createHook?: CreateHook, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * @export
 */
export declare const DeleteSystemsSystemEventsEventHooksHookIdSystemEnum: {
    readonly Data: "data";
    readonly AdskContent: "adsk.content";
    readonly AdskC4r: "adsk.c4r";
    readonly AdskFlcProduction: "adsk.flc.production";
    readonly AutodeskConstructionCost: "autodesk.construction.cost";
};
export type DeleteSystemsSystemEventsEventHooksHookIdSystemEnum = typeof DeleteSystemsSystemEventsEventHooksHookIdSystemEnum[keyof typeof DeleteSystemsSystemEventsEventHooksHookIdSystemEnum];
/**
 * @export
 */
export declare const DeleteSystemsSystemEventsEventHooksHookIdEventEnum: {
    readonly DmVersionAdded: "dm.version.added";
    readonly DmVersionModified: "dm.version.modified";
    readonly DmVersionDeleted: "dm.version.deleted";
    readonly DmVersionMoved: "dm.version.moved";
    readonly DmVersionMovedOut: "dm.version.moved.out";
    readonly DmVersionCopied: "dm.version.copied";
    readonly DmVersionCopiedOut: "dm.version.copied.out";
    readonly DmLineageReserved: "dm.lineage.reserved";
    readonly DmLineageUnreserved: "dm.lineage.unreserved";
    readonly DmLineageUpdated: "dm.lineage.updated";
    readonly DmFolderAdded: "dm.folder.added";
    readonly DmFolderModified: "dm.folder.modified";
    readonly DmFolderDeleted: "dm.folder.deleted";
    readonly DmFolderMoved: "dm.folder.moved";
    readonly DmFolderMovedOut: "dm.folder.moved.out";
    readonly DmFolderCopied: "dm.folder.copied";
    readonly DmFolderCopiedOut: "dm.folder.copied.out";
    readonly DmOperationStarted: "dm.operation.started";
    readonly DmOperationCompleted: "dm.operation.completed";
    readonly ExtractionFinished: "extraction.finished";
    readonly ExtractionUpdated: "extraction.updated";
    readonly ModelSync: "model.sync";
    readonly ModelPublish: "model.publish";
    readonly ItemClone: "item.clone";
    readonly ItemCreate: "item.create";
    readonly ItemLock: "item.lock";
    readonly ItemRelease: "item.release";
    readonly ItemUnlock: "item.unlock";
    readonly ItemUpdate: "item.update";
    readonly WorkflowTransition: "workflow.transition";
};
export type DeleteSystemsSystemEventsEventHooksHookIdEventEnum = typeof DeleteSystemsSystemEventsEventHooksHookIdEventEnum[keyof typeof DeleteSystemsSystemEventsEventHooksHookIdEventEnum];
/**
 * @export
 */
export declare const GetSystemsSystemEventsEventHooksSystemEnum: {
    readonly Data: "data";
    readonly AdskContent: "adsk.content";
    readonly AdskC4r: "adsk.c4r";
    readonly AdskFlcProduction: "adsk.flc.production";
    readonly AutodeskConstructionCost: "autodesk.construction.cost";
};
export type GetSystemsSystemEventsEventHooksSystemEnum = typeof GetSystemsSystemEventsEventHooksSystemEnum[keyof typeof GetSystemsSystemEventsEventHooksSystemEnum];
/**
 * @export
 */
export declare const GetSystemsSystemEventsEventHooksEventEnum: {
    readonly DmVersionAdded: "dm.version.added";
    readonly DmVersionModified: "dm.version.modified";
    readonly DmVersionDeleted: "dm.version.deleted";
    readonly DmVersionMoved: "dm.version.moved";
    readonly DmVersionMovedOut: "dm.version.moved.out";
    readonly DmVersionCopied: "dm.version.copied";
    readonly DmVersionCopiedOut: "dm.version.copied.out";
    readonly DmLineageReserved: "dm.lineage.reserved";
    readonly DmLineageUnreserved: "dm.lineage.unreserved";
    readonly DmLineageUpdated: "dm.lineage.updated";
    readonly DmFolderAdded: "dm.folder.added";
    readonly DmFolderModified: "dm.folder.modified";
    readonly DmFolderDeleted: "dm.folder.deleted";
    readonly DmFolderMoved: "dm.folder.moved";
    readonly DmFolderMovedOut: "dm.folder.moved.out";
    readonly DmFolderCopied: "dm.folder.copied";
    readonly DmFolderCopiedOut: "dm.folder.copied.out";
    readonly DmOperationStarted: "dm.operation.started";
    readonly DmOperationCompleted: "dm.operation.completed";
    readonly ExtractionFinished: "extraction.finished";
    readonly ExtractionUpdated: "extraction.updated";
    readonly ModelSync: "model.sync";
    readonly ModelPublish: "model.publish";
    readonly ItemClone: "item.clone";
    readonly ItemCreate: "item.create";
    readonly ItemLock: "item.lock";
    readonly ItemRelease: "item.release";
    readonly ItemUnlock: "item.unlock";
    readonly ItemUpdate: "item.update";
    readonly WorkflowTransition: "workflow.transition";
};
export type GetSystemsSystemEventsEventHooksEventEnum = typeof GetSystemsSystemEventsEventHooksEventEnum[keyof typeof GetSystemsSystemEventsEventHooksEventEnum];
/**
 * @export
 */
export declare const GetSystemsSystemEventsEventHooksHookIdSystemEnum: {
    readonly Data: "data";
    readonly AdskContent: "adsk.content";
    readonly AdskC4r: "adsk.c4r";
    readonly AdskFlcProduction: "adsk.flc.production";
    readonly AutodeskConstructionCost: "autodesk.construction.cost";
};
export type GetSystemsSystemEventsEventHooksHookIdSystemEnum = typeof GetSystemsSystemEventsEventHooksHookIdSystemEnum[keyof typeof GetSystemsSystemEventsEventHooksHookIdSystemEnum];
/**
 * @export
 */
export declare const GetSystemsSystemEventsEventHooksHookIdEventEnum: {
    readonly DmVersionAdded: "dm.version.added";
    readonly DmVersionModified: "dm.version.modified";
    readonly DmVersionDeleted: "dm.version.deleted";
    readonly DmVersionMoved: "dm.version.moved";
    readonly DmVersionMovedOut: "dm.version.moved.out";
    readonly DmVersionCopied: "dm.version.copied";
    readonly DmVersionCopiedOut: "dm.version.copied.out";
    readonly DmLineageReserved: "dm.lineage.reserved";
    readonly DmLineageUnreserved: "dm.lineage.unreserved";
    readonly DmLineageUpdated: "dm.lineage.updated";
    readonly DmFolderAdded: "dm.folder.added";
    readonly DmFolderModified: "dm.folder.modified";
    readonly DmFolderDeleted: "dm.folder.deleted";
    readonly DmFolderMoved: "dm.folder.moved";
    readonly DmFolderMovedOut: "dm.folder.moved.out";
    readonly DmFolderCopied: "dm.folder.copied";
    readonly DmFolderCopiedOut: "dm.folder.copied.out";
    readonly DmOperationStarted: "dm.operation.started";
    readonly DmOperationCompleted: "dm.operation.completed";
    readonly ExtractionFinished: "extraction.finished";
    readonly ExtractionUpdated: "extraction.updated";
    readonly ModelSync: "model.sync";
    readonly ModelPublish: "model.publish";
    readonly ItemClone: "item.clone";
    readonly ItemCreate: "item.create";
    readonly ItemLock: "item.lock";
    readonly ItemRelease: "item.release";
    readonly ItemUnlock: "item.unlock";
    readonly ItemUpdate: "item.update";
    readonly WorkflowTransition: "workflow.transition";
};
export type GetSystemsSystemEventsEventHooksHookIdEventEnum = typeof GetSystemsSystemEventsEventHooksHookIdEventEnum[keyof typeof GetSystemsSystemEventsEventHooksHookIdEventEnum];
/**
 * @export
 */
export declare const GetSystemsSystemHooksSystemEnum: {
    readonly Data: "data";
    readonly AdskContent: "adsk.content";
    readonly AdskC4r: "adsk.c4r";
    readonly AdskFlcProduction: "adsk.flc.production";
    readonly AutodeskConstructionCost: "autodesk.construction.cost";
};
export type GetSystemsSystemHooksSystemEnum = typeof GetSystemsSystemHooksSystemEnum[keyof typeof GetSystemsSystemHooksSystemEnum];
/**
 * @export
 */
export declare const PatchSystemsSystemEventsEventHooksHookIdSystemEnum: {
    readonly Data: "data";
    readonly AdskContent: "adsk.content";
    readonly AdskC4r: "adsk.c4r";
    readonly AdskFlcProduction: "adsk.flc.production";
    readonly AutodeskConstructionCost: "autodesk.construction.cost";
};
export type PatchSystemsSystemEventsEventHooksHookIdSystemEnum = typeof PatchSystemsSystemEventsEventHooksHookIdSystemEnum[keyof typeof PatchSystemsSystemEventsEventHooksHookIdSystemEnum];
/**
 * @export
 */
export declare const PatchSystemsSystemEventsEventHooksHookIdEventEnum: {
    readonly DmVersionAdded: "dm.version.added";
    readonly DmVersionModified: "dm.version.modified";
    readonly DmVersionDeleted: "dm.version.deleted";
    readonly DmVersionMoved: "dm.version.moved";
    readonly DmVersionMovedOut: "dm.version.moved.out";
    readonly DmVersionCopied: "dm.version.copied";
    readonly DmVersionCopiedOut: "dm.version.copied.out";
    readonly DmLineageReserved: "dm.lineage.reserved";
    readonly DmLineageUnreserved: "dm.lineage.unreserved";
    readonly DmLineageUpdated: "dm.lineage.updated";
    readonly DmFolderAdded: "dm.folder.added";
    readonly DmFolderModified: "dm.folder.modified";
    readonly DmFolderDeleted: "dm.folder.deleted";
    readonly DmFolderMoved: "dm.folder.moved";
    readonly DmFolderMovedOut: "dm.folder.moved.out";
    readonly DmFolderCopied: "dm.folder.copied";
    readonly DmFolderCopiedOut: "dm.folder.copied.out";
    readonly DmOperationStarted: "dm.operation.started";
    readonly DmOperationCompleted: "dm.operation.completed";
    readonly ExtractionFinished: "extraction.finished";
    readonly ExtractionUpdated: "extraction.updated";
    readonly ModelSync: "model.sync";
    readonly ModelPublish: "model.publish";
    readonly ItemClone: "item.clone";
    readonly ItemCreate: "item.create";
    readonly ItemLock: "item.lock";
    readonly ItemRelease: "item.release";
    readonly ItemUnlock: "item.unlock";
    readonly ItemUpdate: "item.update";
    readonly WorkflowTransition: "workflow.transition";
};
export type PatchSystemsSystemEventsEventHooksHookIdEventEnum = typeof PatchSystemsSystemEventsEventHooksHookIdEventEnum[keyof typeof PatchSystemsSystemEventsEventHooksHookIdEventEnum];
/**
 * @export
 */
export declare const PostSystemsSystemEventsEventHooksSystemEnum: {
    readonly Data: "data";
    readonly AdskContent: "adsk.content";
    readonly AdskC4r: "adsk.c4r";
    readonly AdskFlcProduction: "adsk.flc.production";
    readonly AutodeskConstructionCost: "autodesk.construction.cost";
};
export type PostSystemsSystemEventsEventHooksSystemEnum = typeof PostSystemsSystemEventsEventHooksSystemEnum[keyof typeof PostSystemsSystemEventsEventHooksSystemEnum];
/**
 * @export
 */
export declare const PostSystemsSystemEventsEventHooksEventEnum: {
    readonly DmVersionAdded: "dm.version.added";
    readonly DmVersionModified: "dm.version.modified";
    readonly DmVersionDeleted: "dm.version.deleted";
    readonly DmVersionMoved: "dm.version.moved";
    readonly DmVersionMovedOut: "dm.version.moved.out";
    readonly DmVersionCopied: "dm.version.copied";
    readonly DmVersionCopiedOut: "dm.version.copied.out";
    readonly DmLineageReserved: "dm.lineage.reserved";
    readonly DmLineageUnreserved: "dm.lineage.unreserved";
    readonly DmLineageUpdated: "dm.lineage.updated";
    readonly DmFolderAdded: "dm.folder.added";
    readonly DmFolderModified: "dm.folder.modified";
    readonly DmFolderDeleted: "dm.folder.deleted";
    readonly DmFolderMoved: "dm.folder.moved";
    readonly DmFolderMovedOut: "dm.folder.moved.out";
    readonly DmFolderCopied: "dm.folder.copied";
    readonly DmFolderCopiedOut: "dm.folder.copied.out";
    readonly DmOperationStarted: "dm.operation.started";
    readonly DmOperationCompleted: "dm.operation.completed";
    readonly ExtractionFinished: "extraction.finished";
    readonly ExtractionUpdated: "extraction.updated";
    readonly ModelSync: "model.sync";
    readonly ModelPublish: "model.publish";
    readonly ItemClone: "item.clone";
    readonly ItemCreate: "item.create";
    readonly ItemLock: "item.lock";
    readonly ItemRelease: "item.release";
    readonly ItemUnlock: "item.unlock";
    readonly ItemUpdate: "item.update";
    readonly WorkflowTransition: "workflow.transition";
};
export type PostSystemsSystemEventsEventHooksEventEnum = typeof PostSystemsSystemEventsEventHooksEventEnum[keyof typeof PostSystemsSystemEventsEventHooksEventEnum];
/**
 * @export
 */
export declare const PostSystemsSystemHooksSystemEnum: {
    readonly Data: "data";
    readonly AdskContent: "adsk.content";
    readonly AdskC4r: "adsk.c4r";
    readonly AdskFlcProduction: "adsk.flc.production";
    readonly AutodeskConstructionCost: "autodesk.construction.cost";
};
export type PostSystemsSystemHooksSystemEnum = typeof PostSystemsSystemHooksSystemEnum[keyof typeof PostSystemsSystemHooksSystemEnum];
