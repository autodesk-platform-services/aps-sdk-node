import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { Hub } from '../model';
import { Hubs } from '../model';
/**
 * HubsApi - axios parameter creator
 * @export
 */
export declare const HubsApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
    /**
     * Returns data on a specific hub_id.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns data on a specific hub_id
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHub: (accessToken: string, hubId: string, xUserId?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a collection of accessible hubs for this member.  Hubs represent BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, or BIM 360 Docs accounts. Team hubs include **BIM 360** Team hubs and Fusion Team hubs (formerly known as A360 Team hubs). Personal hubs include A360 Personal hubs. Only active hubs are listed.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of accessible hubs for this member
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {string} [filterName] Filter by the name of the ref target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHubs: (accessToken: string, xUserId?: string, filterId?: Array<string>, filterName?: string, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * HubsApi - functional programming interface
 * @export
 */
export declare const HubsApiFp: (sdkManager?: SDKManager) => {
    /**
     * Returns data on a specific hub_id.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns data on a specific hub_id
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHub(accessToken: string, hubId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hub>>;
    /**
     * Returns a collection of accessible hubs for this member.  Hubs represent BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, or BIM 360 Docs accounts. Team hubs include **BIM 360** Team hubs and Fusion Team hubs (formerly known as A360 Team hubs). Personal hubs include A360 Personal hubs. Only active hubs are listed.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of accessible hubs for this member
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {string} [filterName] Filter by the name of the ref target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHubs(accessToken: string, xUserId?: string, filterId?: Array<string>, filterName?: string, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hubs>>;
};
/**
 * HubsApi - interface
 * @export
 * @interface HubsApi
 */
export interface HubsApiInterface {
    /**
     * Returns data on a specific hub_id.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns data on a specific hub_id
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HubsApiInterface
     */
    getHub(accessToken: string, hubId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Returns a collection of accessible hubs for this member.  Hubs represent BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, or BIM 360 Docs accounts. Team hubs include **BIM 360** Team hubs and Fusion Team hubs (formerly known as A360 Team hubs). Personal hubs include A360 Personal hubs. Only active hubs are listed.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of accessible hubs for this member
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {string} [filterName] Filter by the name of the ref target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HubsApiInterface
     */
    getHubs(accessToken: string, xUserId?: string, filterId?: Array<string>, filterName?: string, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * HubsApi - object-oriented interface
 * @export
 * @class HubsApi
 * @extends {BaseAPI}
 */
export declare class HubsApi extends BaseAPI implements HubsApiInterface {
    private logger;
    /**
     * Returns data on a specific hub_id.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns data on a specific hub_id
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HubsApi
     */
    getHub(accessToken: string, hubId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Returns a collection of accessible hubs for this member.  Hubs represent BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, or BIM 360 Docs accounts. Team hubs include **BIM 360** Team hubs and Fusion Team hubs (formerly known as A360 Team hubs). Personal hubs include A360 Personal hubs. Only active hubs are listed.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of accessible hubs for this member
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {string} [filterName] Filter by the name of the ref target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HubsApi
     */
    getHubs(accessToken: string, xUserId?: string, filterId?: Array<string>, filterName?: string, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
