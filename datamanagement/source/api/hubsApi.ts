
import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { CollectionFormats, RequestArgs, BaseApi, RequiredError, DataManagementApiError } from '../base';
import { GetHubs401Response } from '../model';
import { GetHubs403Response } from '../model';
import { Hub } from '../model';
import { Hubs } from '../model';
/**
 * HubsApi - axios parameter creator
 * @export
 */
export const HubsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Returns the hub specified by the ``hub_id`` parameter.  For BIM 360 Docs, a hub ID corresponds to a BIM 360 account ID. To convert a BIM 360 account ID to a hub ID, prefix the account ID with ``b.``. For example, an account ID of ```c8b0c73d-3ae9``` translates to a hub ID of ``b.c8b0c73d-3ae9``.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Get a Hub
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHub: async (accessToken: string, hubId: string, xUserId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'hubId' is not null or undefined
            assertParamExists('getHub', 'hubId', hubId)
            const localVarPath = `/project/v1/hubs/{hub_id}`
                .replace(`{${"hub_id"}}`, encodeURIComponent(String(hubId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT-API/TypeScript/2.0.3';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a collection of hubs that the user of your app can access.  The returned hubs can be BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, ACC Docs (Autodesk Docs) accounts, or BIM 360 Docs accounts. Only active hubs are returned.  For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with ``b.``. For example, an Account ID of ```c8b0c73d-3ae9``` translates to a hub ID of ``b.c8b0c73d-3ae9``.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Hubs
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
         * @param {Array<string>} [filterName] Filter by the &#x60;&#x60;name&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHubs: async (accessToken: string, xUserId?: string, filterId?: Array<string>, filterName?: Array<string>, filterExtensionType?: Array<string>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/project/v1/hubs`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (filterId) {
                localVarQueryParameter['filter[id]'] = filterId;
            }

            if (filterName) {
                localVarQueryParameter['filter[name]'] = filterName;
            }

            if (filterExtensionType) {
                localVarQueryParameter['filter[extension.type]'] = filterExtensionType;
            }

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT-API/TypeScript/2.0.3';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HubsApi - functional programming interface
 * @export
 */
export const HubsApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = HubsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Returns the hub specified by the ``hub_id`` parameter.  For BIM 360 Docs, a hub ID corresponds to a BIM 360 account ID. To convert a BIM 360 account ID to a hub ID, prefix the account ID with ``b.``. For example, an account ID of ```c8b0c73d-3ae9``` translates to a hub ID of ``b.c8b0c73d-3ae9``.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Get a Hub
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHub(accessToken: string, hubId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hub>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHub(accessToken, hubId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a collection of hubs that the user of your app can access.  The returned hubs can be BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, ACC Docs (Autodesk Docs) accounts, or BIM 360 Docs accounts. Only active hubs are returned.  For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with ``b.``. For example, an Account ID of ```c8b0c73d-3ae9``` translates to a hub ID of ``b.c8b0c73d-3ae9``.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Hubs
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
         * @param {Array<string>} [filterName] Filter by the &#x60;&#x60;name&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHubs(accessToken: string, xUserId?: string, filterId?: Array<string>, filterName?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hubs>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHubs(accessToken, xUserId, filterId, filterName, filterExtensionType,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * HubsApi - interface
 * @export
 * @interface HubsApi
 */
export interface HubsApiInterface {
    /**
     * Returns the hub specified by the ``hub_id`` parameter.  For BIM 360 Docs, a hub ID corresponds to a BIM 360 account ID. To convert a BIM 360 account ID to a hub ID, prefix the account ID with ``b.``. For example, an account ID of ```c8b0c73d-3ae9``` translates to a hub ID of ``b.c8b0c73d-3ae9``.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get a Hub
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HubsApiInterface
     */
    getHub(accessToken: string,hubId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a collection of hubs that the user of your app can access.  The returned hubs can be BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, ACC Docs (Autodesk Docs) accounts, or BIM 360 Docs accounts. Only active hubs are returned.  For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with ``b.``. For example, an Account ID of ```c8b0c73d-3ae9``` translates to a hub ID of ``b.c8b0c73d-3ae9``.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Hubs
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterName] Filter by the &#x60;&#x60;name&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HubsApiInterface
     */
    getHubs(accessToken: string,xUserId?: string, filterId?: Array<string>, filterName?: Array<string>, filterExtensionType?: Array<string>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * HubsApi - object-oriented interface
 * @export
 * @class HubsApi
 * @extends {BaseApi}
 */
export class HubsApi extends BaseApi implements HubsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Returns the hub specified by the ``hub_id`` parameter.  For BIM 360 Docs, a hub ID corresponds to a BIM 360 account ID. To convert a BIM 360 account ID to a hub ID, prefix the account ID with ``b.``. For example, an account ID of ```c8b0c73d-3ae9``` translates to a hub ID of ``b.c8b0c73d-3ae9``.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get a Hub
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HubsApi
     */
    public async getHub(accessToken: string, hubId: string, xUserId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getHub ");
      try {
        const request =  await HubsApiFp(this.sdkManager).getHub(accessToken, hubId, xUserId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getHub Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getHub Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getHub Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getHub Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getHub Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a collection of hubs that the user of your app can access.  The returned hubs can be BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, ACC Docs (Autodesk Docs) accounts, or BIM 360 Docs accounts. Only active hubs are returned.  For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with ``b.``. For example, an Account ID of ```c8b0c73d-3ae9``` translates to a hub ID of ``b.c8b0c73d-3ae9``.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Hubs
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterName] Filter by the &#x60;&#x60;name&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HubsApi
     */
    public async getHubs(accessToken: string, xUserId?: string, filterId?: Array<string>, filterName?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getHubs ");
      try {
        const request =  await HubsApiFp(this.sdkManager).getHubs(accessToken, xUserId, filterId, filterName, filterExtensionType,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getHubs Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getHubs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getHubs Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getHubs Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getHubs Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

