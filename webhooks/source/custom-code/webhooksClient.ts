import { Systems, Events, HookPayload, Hook, Hooks, HookDetails, ModifyHookPayload, TokenPayload, Token, Region, StatusFilter, Sort } from '../model'; 
import { SdkManager, ApsServiceRequestConfig, SdkManagerBuilder, IAuthenticationProvider, BaseClient } from '@aps_sdk/autodesk-sdkmanager';
import { HooksApi, TokensApi } from '../api'; 



export class WebhooksClient extends BaseClient {
    public hooksApi: HooksApi;
    public tokensApi: TokensApi;

    constructor(optionalArgs?: { sdkManager?: SdkManager, authenticationProvider?: IAuthenticationProvider }) {
        super(optionalArgs?.authenticationProvider);
        if (!optionalArgs?.sdkManager) {
            (optionalArgs ??= {}).sdkManager = SdkManagerBuilder.create().build();
        }
        this.hooksApi = new HooksApi(optionalArgs.sdkManager);
        this.tokensApi = new TokensApi(optionalArgs.sdkManager);
    }

    //#region HooksAPi
    /**
      * Adds a new webhook to receive notifications of the occurrence of a specified event for the specified system.
      * @remarks Create a Webhook for an Event
      * @param {Systems} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs.
      * 
      * @param {Events} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
      * @param {HookPayload} hookPayload 
      * @param {Region} [optionalArgs.region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:
      * 
      * - ``US`` - (Default) Data center dedicated to serve the United States region.
      * - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions.
      * - ``AUS`` - (Beta) Data center dedicated to serve the Australia region.
      * - ``CAN`` - Data center dedicated to serve the Canada region.
      * - ``DEU`` - Data center dedicated to serve the Germany region.
      * - ``IND`` - Data center dedicated to serve the India region.
      * - ``JPN`` - Data center dedicated to serve the Japan region.
      * - ``GBR`` - Data center dedicated to serve the United Kingdom region.
      * 
      * **Note:** 
      * 
      * 1. Beta features are subject to change. Please avoid using them in production environments.
      * 2. You can also use the ``x-ads-region`` header to specify the region. If you specify the ``region`` query string parameter as well as the ``x-ads-region`` header, the ``x-ads-region`` header takes precedence.
      * 
      * @param {*} [optionalArgs.options] Override http request option.
      * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
      * @throws {@link WebhooksApiError}
      */
    public async createSystemEventHook(system: Systems | string, event: Events | string, hookPayload: HookPayload, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<void> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.hooksApi.createSystemEventHook(optionalArgs?.accessToken, system, event, optionalArgs?.region, null, hookPayload, optionalArgs?.options);
        return response.content;
    }

    /**
      * Adds a new webhook to receive notifications of all events for the specified system.
      * @remarks Create Webhooks for All Events
      * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs.
      * 
      * @param {HookPayload} hookPayload 
      * @param {Region} [optionalArgs.region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:
      * 
      * - ``US`` - (Default) Data center dedicated to serve the United States region.
      * - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions.
      * - ``AUS`` - (Beta) Data center dedicated to serve the Australia region.
      * - ``CAN`` - Data center dedicated to serve the Canada region.
      * - ``DEU`` - Data center dedicated to serve the Germany region.
      * - ``IND`` - Data center dedicated to serve the India region.
      * - ``JPN`` - Data center dedicated to serve the Japan region.
      * - ``GBR`` - Data center dedicated to serve the United Kingdom region.
      * 
      * **Note:** 
      * 
      * 1. Beta features are subject to change. Please avoid using them in production environments.
      * 2. You can also use the ``x-ads-region`` header to specify the region. If you specify the ``region`` query string parameter as well as the ``x-ads-region`` header, the ``x-ads-region`` header takes precedence.
      * 
      * @param {*} [optionalArgs.options] Override http request option.
      * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
      * @throws {@link WebhooksApiError}
      */
    public async createSystemHook(system: Systems | string, hookPayload: HookPayload, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Hook> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.hooksApi.createSystemHook(optionalArgs?.accessToken, system, optionalArgs?.region, null, hookPayload, optionalArgs?.options);
        return response.content;
    }

    /**
      * Deletes the webhook specified by its ID.
      * @remarks Delete a Webhook
      * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs.
      * 
      * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
      * @param {string} hookId The ID of the webhook to delete.
      * @param {Region} [optionalArgs.region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:
      * 
      * - ``US`` - (Default) Data center dedicated to serve the United States region.
      * - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions.
      * - ``AUS`` - (Beta) Data center dedicated to serve the Australia region.
      * - ``CAN`` - Data center dedicated to serve the Canada region.
      * - ``DEU`` - Data center dedicated to serve the Germany region.
      * - ``IND`` - Data center dedicated to serve the India region.
      * - ``JPN`` - Data center dedicated to serve the Japan region.
      * - ``GBR`` - Data center dedicated to serve the United Kingdom region.
      * 
      * **Note:** 
      * 
      * 1. Beta features are subject to change. Please avoid using them in production environments.
      * 2. You can also use the ``x-ads-region`` header to specify the region. If you specify the ``region`` query string parameter as well as the ``x-ads-region`` header, the ``x-ads-region`` header takes precedence.
      * 
      * @param {*} [optionalArgs.options] Override http request option.
      * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
      * @throws {@link WebhooksApiError}
      */
    public async deleteSystemEventHook(system: Systems | string, event: Events | string, hookId: string, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<void> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.hooksApi.deleteSystemEventHook(optionalArgs?.accessToken, system, event, hookId, optionalArgs?.region, null, optionalArgs?.options);
        return response.content;
    }

    /**
      * Retrieves a paginated list of webhooks created by the calling application. Each page includes up to 200 webhooks.
      * 
      * If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
      * 
      * **Note:** This operation requires an access token through a Client Credentials flow (two-legged OAuth). 
      * @remarks List All Webhooks for an App
      * @param {string} [optionalArgs.pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
      * @param {StatusFilter} [optionalArgs.status] Filters retrieved webhooks by their current state. Possible values are 
      * 
      * - ``active`` - Successfully delivered most recent event notifications. 
      * - ``inactive`` - Failed to deliver most recent event notification and has been deactivated.
      * 
      * If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes.
      * 
      * @param {Sort} [optionalArgs.sort] Specifies the sorting order of the list of webhooks by their ``lastUpdatedDate`` attribute. 
      * 
      * - ``asc`` - Ascending order.
      * - ``desc`` - (Default) Descending order. 
      * 
      * @param {Region} [optionalArgs.region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:
      * 
      * - ``US`` - (Default) Data center dedicated to serve the United States region.
      * - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions.
      * - ``AUS`` - (Beta) Data center dedicated to serve the Australia region.
      * - ``CAN`` - Data center dedicated to serve the Canada region.
      * - ``DEU`` - Data center dedicated to serve the Germany region.
      * - ``IND`` - Data center dedicated to serve the India region.
      * - ``JPN`` - Data center dedicated to serve the Japan region.
      * - ``GBR`` - Data center dedicated to serve the United Kingdom region.
      * 
      * **Note:** 
      * 
      * 1. Beta features are subject to change. Please avoid using them in production environments.
      * 2. You can also use the ``x-ads-region`` header to specify the region. If you specify the ``region`` query string parameter as well as the ``x-ads-region`` header, the ``x-ads-region`` header takes precedence.
      * 
      * @param {*} [optionalArgs.options] Override http request option.
      * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
      * @throws {@link WebhooksApiError}
      */
    public async getAppHooks(optionalArgs?: { pageState?: string, status?: StatusFilter, sort?: Sort, region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Hooks> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.hooksApi.getAppHooks(optionalArgs?.accessToken, optionalArgs?.region, optionalArgs?.pageState, optionalArgs?.status, optionalArgs?.sort, null, optionalArgs?.options);
        return response.content;
    }

    /**
      * Retrieves the details of the webhook for the specified event within the specified system.
      * @remarks Get Webhook Details
      * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs.
      * 
      * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
      * @param {string} hookId The ID of the webhook to delete.
      * @param {Region} [optionalArgs.region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:
      * 
      * - ``US`` - (Default) Data center dedicated to serve the United States region.
      * - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions.
      * - ``AUS`` - (Beta) Data center dedicated to serve the Australia region.
      * - ``CAN`` - Data center dedicated to serve the Canada region.
      * - ``DEU`` - Data center dedicated to serve the Germany region.
      * - ``IND`` - Data center dedicated to serve the India region.
      * - ``JPN`` - Data center dedicated to serve the Japan region.
      * - ``GBR`` - Data center dedicated to serve the United Kingdom region.
      * 
      * **Note:** 
      * 
      * 1. Beta features are subject to change. Please avoid using them in production environments.
      * 2. You can also use the ``x-ads-region`` header to specify the region. If you specify the ``region`` query string parameter as well as the ``x-ads-region`` header, the ``x-ads-region`` header takes precedence.
      * 
      * @param {*} [optionalArgs.options] Override http request option.
      * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
      * @throws {@link WebhooksApiError}
      */
    public async getHookDetails(system: Systems | string, event: Events | string, hookId: string, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<HookDetails> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.hooksApi.getHookDetails(optionalArgs?.accessToken, system, event, hookId, optionalArgs?.region, null, optionalArgs?.options);
        return response.content;
    }

    /**
      * Retrieves a paginated list of webhooks available to the provided access token within the specified region. Each page includes up to 200 webhooks.
      * 
      * If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
      * @remarks List All Webhooks
      * @param {string} [optionalArgs.pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
      * @param {StatusFilter} [optionalArgs.status] Filters retrieved webhooks by their current state. Possible values are 
      * 
      * - ``active`` - Successfully delivered most recent event notifications. 
      * - ``inactive`` - Failed to deliver most recent event notification and has been deactivated.
      * 
      * If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes.
      * 
      * @param {Region} [optionalArgs.region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:
      * 
      * - ``US`` - (Default) Data center dedicated to serve the United States region.
      * - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions.
      * - ``AUS`` - (Beta) Data center dedicated to serve the Australia region.
      * - ``CAN`` - Data center dedicated to serve the Canada region.
      * - ``DEU`` - Data center dedicated to serve the Germany region.
      * - ``IND`` - Data center dedicated to serve the India region.
      * - ``JPN`` - Data center dedicated to serve the Japan region.
      * - ``GBR`` - Data center dedicated to serve the United Kingdom region.
      * 
      * **Note:** 
      * 
      * 1. Beta features are subject to change. Please avoid using them in production environments.
      * @param {*} [optionalArgs.options] Override http request option.
      * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
      * @throws {@link WebhooksApiError}
      */
    public async getHooks(optionalArgs?: { pageState?: string, status?: StatusFilter, region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Hooks> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.hooksApi.getHooks(optionalArgs?.accessToken, optionalArgs?.pageState, optionalArgs?.status, null, optionalArgs?.region, optionalArgs?.options);
        return response.content;
    }

    /**
      * Retrieves a paginated list of webhooks for the specified event. The returned list contains a subset of webhooks accessible to the provided access token within the specified region. Each page includes up to 200 webhooks.
      * 
      * If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
      * @remarks List All Webhooks for an Event
      * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs.
      * 
      * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
      * @param {Region} [optionalArgs.region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:
      * 
      * - ``US`` - (Default) Data center dedicated to serve the United States region.
      * - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions.
      * - ``AUS`` - (Beta) Data center dedicated to serve the Australia region.
      * - ``CAN`` - Data center dedicated to serve the Canada region.
      * - ``DEU`` - Data center dedicated to serve the Germany region.
      * - ``IND`` - Data center dedicated to serve the India region.
      * - ``JPN`` - Data center dedicated to serve the Japan region.
      * - ``GBR`` - Data center dedicated to serve the United Kingdom region.
      * 
      * **Note:** 
      * 
      * 1. Beta features are subject to change. Please avoid using them in production environments.
      * 2. You can also use the ``x-ads-region`` header to specify the region. If you specify the ``region`` query string parameter as well as the ``x-ads-region`` header, the ``x-ads-region`` header takes precedence.
      * 
      * @param {string} [optionalArgs.scopeName] Filters retrieved webhooks by the scope name used to create hook. For example : ``folder``.  If this parameter is not specified, the filter is not applied.
      * @param {string} [optionalArgs.pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
      * @param {StatusFilter} [optionalArgs.status] Filters retrieved webhooks by their current state. Possible values are 
      * 
      * - ``active`` - Successfully delivered most recent event notifications. 
      * - ``inactive`` - Failed to deliver most recent event notification and has been deactivated.
      * 
      * If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes.
      * 
      * @param {*} [optionalArgs.options] Override http request option.
      * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
      * @throws {@link WebhooksApiError}
      */
    public async getSystemEventHooks(system: Systems | string, event: Events | string, optionalArgs?: { region?: Region, scopeName?: string, pageState?: string, status?: StatusFilter, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Hooks> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.hooksApi.getSystemEventHooks(optionalArgs?.accessToken, system, event, optionalArgs?.region, null, optionalArgs?.scopeName, optionalArgs?.pageState, optionalArgs?.status, optionalArgs?.options);
        return response.content;
    }

    /**
      * Retrieves a paginated list of webhooks for the specified system. The returned list contains a subset of webhooks accessible to the provided access token within the specified region. Each page includes up to 200 webhooks.
      * 
      * If the ``pageState`` query string parameter is not provided, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
      * @remarks List All Webhooks for a System
      * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs.
      * 
      * @param {StatusFilter} [optionalArgs.status] Filters retrieved webhooks by their current state. Possible values are 
      * 
      * - ``active`` - Successfully delivered most recent event notifications. 
      * - ``inactive`` - Failed to deliver most recent event notification and has been deactivated.
      * 
      * If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes.
      * 
      * @param {string} [optionalArgs.pageState] Base64 encoded string to fetch the next page of the list of webhooks. If you do not provide this parameter, the first page of results is returned. Use the ``next`` value from the previous response to fetch subsequent pages.
      * @param {Region} [optionalArgs.region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:
      * 
      * - ``US`` - (Default) Data center dedicated to serve the United States region.
      * - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions.
      * - ``AUS`` - (Beta) Data center dedicated to serve the Australia region.
      * - ``CAN`` - Data center dedicated to serve the Canada region.
      * - ``DEU`` - Data center dedicated to serve the Germany region.
      * - ``IND`` - Data center dedicated to serve the India region.
      * - ``JPN`` - Data center dedicated to serve the Japan region.
      * - ``GBR`` - Data center dedicated to serve the United Kingdom region.
      * 
      * **Note:** 
      * 
      * 1. Beta features are subject to change. Please avoid using them in production environments.
      * 2. You can also use the ``x-ads-region`` header to specify the region. If you specify the ``region`` query string parameter as well as the ``x-ads-region`` header, the ``x-ads-region`` header takes precedence.
      * 
      * @param {*} [optionalArgs.options] Override http request option.
      * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
      * @throws {@link WebhooksApiError}
      */
    public async getSystemHooks(system: Systems | string, optionalArgs?: { status?: StatusFilter, pageState?: string, region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Hooks> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.hooksApi.getSystemHooks(optionalArgs?.accessToken, system, optionalArgs?.region, optionalArgs?.status, optionalArgs?.pageState, null, optionalArgs?.options);
        return response.content;
    }

    /**
      * Updates the webhook specified by the ``hook_id`` parameter. Currently the only attributes you can update are: 
      * 
      * - filter
      * - status
      * - hook attribute
      * - token
      * - auto-reactivate hook flag
      * - hook expiry
      * - callbackWithEventPaylaod flag 
      * 
      * See the request body documentation for more information.
      * @remarks Update a Webhook
      * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs.
      * 
      * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
      * @param {string} hookId The ID of the webhook to delete.
      * @param {ModifyHookPayload} modifyHookPayload 
      * @param {Region} [optionalArgs.region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:
      * 
      * - ``US`` - (Default) Data center dedicated to serve the United States region.
      * - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions.
      * - ``AUS`` - (Beta) Data center dedicated to serve the Australia region.
      * - ``CAN`` - Data center dedicated to serve the Canada region.
      * - ``DEU`` - Data center dedicated to serve the Germany region.
      * - ``IND`` - Data center dedicated to serve the India region.
      * - ``JPN`` - Data center dedicated to serve the Japan region.
      * - ``GBR`` - Data center dedicated to serve the United Kingdom region.
      * 
      * **Note:** 
      * 
      * 1. Beta features are subject to change. Please avoid using them in production environments.
      * 2. You can also use the ``x-ads-region`` header to specify the region. If you specify the ``region`` query string parameter as well as the ``x-ads-region`` header, the ``x-ads-region`` header takes precedence.
      * 
      * @param {*} [optionalArgs.options] Override http request option.
      * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
      * @throws {@link WebhooksApiError}
      */
    public async patchSystemEventHook(system: Systems | string, event: Events | string, hookId: string, modifyHookPayload: ModifyHookPayload, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<void> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.hooksApi.patchSystemEventHook(optionalArgs?.accessToken, system, event, hookId, optionalArgs?.region, null, modifyHookPayload, optionalArgs?.options);
        return response.content;
    }
    
    //#region TokenApi
    /**
      * Sets a secret token to verify the authenticity of webhook payloads. 
      * 
      * When a webhook event occurs, the service calculates a hash signature using the token and includes it in the event notification. The receiving application listening at the callback URL can verify the payload's integrity by comparing the calculated signature to the one received.
      * 
      * The webhooks affected by this operation are determined by the type of access token you use.
      * 
      * - Two-legged Access Token: Sets the secret token for all webhooks owned by calling the app.
      * - Three-legged Access Token: Sets the secret token for all webhooks owned by the calling user
      * 
      * **Note:** Use the [Update Webhook operation](/en/docs/webhooks/v1/reference/http/webhooks/systems-system-events-event-hooks-hook_id-PATCH/) to set a token for a specific webhook.
      * 
      * See the [Secret Token](/en/docs/webhooks/v1/developers_guide/basics/#secret-token) section in API Basics for more information.
      * @remarks Create Secret Token
      * @param {TokenPayload} tokenPayload 
      * @param {Region} [optionalArgs.region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:
      * 
      * - ``US`` - (Default) Data center dedicated to serve the United States region.
      * - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions.
      * - ``AUS`` - (Beta) Data center dedicated to serve the Australia region.
      * - ``CAN`` - Data center dedicated to serve the Canada region.
      * - ``DEU`` - Data center dedicated to serve the Germany region.
      * - ``IND`` - Data center dedicated to serve the India region.
      * - ``JPN`` - Data center dedicated to serve the Japan region.
      * - ``GBR`` - Data center dedicated to serve the United Kingdom region.
      * 
      * **Note:** 
      * 
      * 1. Beta features are subject to change. Please avoid using them in production environments.
      * 2. You can also use the ``x-ads-region`` header to specify the region. If you specify the ``region`` query string parameter as well as the ``x-ads-region`` header, the ``x-ads-region`` header takes precedence.
      * 
      * @param {*} [optionalArgs.options] Override http request option.
      * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
      * @throws {@link WebhooksApiError}
      */
    public async createToken(tokenPayload: TokenPayload, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Token> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.tokensApi.createToken(optionalArgs?.accessToken, optionalArgs?.region, null, tokenPayload, optionalArgs?.options);
        return response.content;
    }

    /**
      * Deletes the webhook specified by its ID.
      * @remarks Delete a Webhook
      * @param {string} system The ID of the system the webhook applies to. For example data for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of supported systems and their IDs.
      * 
      * @param {string} event The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events.
      * @param {string} hookId The ID of the webhook to delete.
      * @param {Region} [optionalArgs.region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:
      * 
      * - ``US`` - (Default) Data center dedicated to serve the United States region.
      * - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions.
      * - ``AUS`` - (Beta) Data center dedicated to serve the Australia region.
      * - ``CAN`` - Data center dedicated to serve the Canada region.
      * - ``DEU`` - Data center dedicated to serve the Germany region.
      * - ``IND`` - Data center dedicated to serve the India region.
      * - ``JPN`` - Data center dedicated to serve the Japan region.
      * - ``GBR`` - Data center dedicated to serve the United Kingdom region.
      * 
      * **Note:** 
      * 
      * 1. Beta features are subject to change. Please avoid using them in production environments.
      * 2. You can also use the ``x-ads-region`` header to specify the region. If you specify the ``region`` query string parameter as well as the ``x-ads-region`` header, the ``x-ads-region`` header takes precedence.
      * 
      * @param {*} [optionalArgs.options] Override http request option.
      * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
      * @throws {@link WebhooksApiError}
      */

    public async deleteToken(optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<void> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.tokensApi.deleteToken(optionalArgs?.accessToken, optionalArgs?.region, null, optionalArgs?.options);
        return response.content;
    }

    /**
      * Replaces an existing secret token with a new one. 
      * 
      * Note that there can be a delay of up to 10 minutes while the change takes effect. We recommend that your callback accept both secret token values for a period of time to allow all requests to go through.
      * 
      * The webhooks affected by this operation are determined by the type of access token you use.
      * 
      * - Two-legged Access Token: Sets the secret token for all webhooks owned by calling the app.
      * - Three-legged Access Token: Sets the secrety token for all webhooks owned by the calling user
      * 
      * **Note:** Use the [Update Webhook operation](/en/docs/webhooks/v1/reference/http/webhooks/systems-system-events-event-hooks-hook_id-PATCH/) to set a token for a specific webhook.
      * 
      * See the [Secret Token](/en/docs/webhooks/v1/developers_guide/basics/#secret-token) section in API Basics for more information.
      * @remarks Update Secret Token
      * @param {TokenPayload} tokenPayload 
      * @param {Region} [optionalArgs.region] Specifies the geographical location (region) of the server the request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make request to your callback URL. Possible values:
      * 
      * - ``US`` - (Default) Data center dedicated to serve the United States region.
      * - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions.
      * - ``AUS`` - (Beta) Data center dedicated to serve the Australia region.
      * - ``CAN`` - Data center dedicated to serve the Canada region.
      * - ``DEU`` - Data center dedicated to serve the Germany region.
      * - ``IND`` - Data center dedicated to serve the India region.
      * - ``JPN`` - Data center dedicated to serve the Japan region.
      * - ``GBR`` - Data center dedicated to serve the United Kingdom region.
      * 
      * **Note:** 
      * 
      * 1. Beta features are subject to change. Please avoid using them in production environments.
      * 2. You can also use the ``x-ads-region`` header to specify the region. If you specify the ``region`` query string parameter as well as the ``x-ads-region`` header, the ``x-ads-region`` header takes precedence.
      * 
      * @param {*} [optionalArgs.options] Override http request option.
      * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
      * @throws {@link WebhooksApiError}
      */
    public async putToken(tokenPayload: TokenPayload, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<void> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.tokensApi.putToken(optionalArgs?.accessToken, optionalArgs?.region, null, tokenPayload, optionalArgs?.options);
        return response.content;
    }

}
