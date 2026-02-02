/* tslint:disable */
/* eslint-disable */

import { ApiResponse, ApsServiceRequestConfig, IApsConfiguration, SdkManager } from "@aps_sdk/autodesk-sdkmanager";
import type { AxiosInstance, AxiosPromise } from 'axios';
import { BaseApi, DataManagementApiError, RequestArgs, RequiredError } from '../base';
import { assertParamExists, createRequestFunction, setBearerAuthToObject, setSearchParams, toPathString } from '../common';
import { Hub, Hubs } from '../model';
/**
 * HubsApi - axios parameter creator
 * @export
 */
export const HubsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Returns the hub specified by the ``hub_id`` parameter.
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
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


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a collection of hubs that the user of your app can access.
	 * 
	 * The returned hubs can be BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, Forma Hubs, or BIM 360 Docs accounts. Only active hubs are returned.
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary List Hubs
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
         * @param {Array<string>} [filterName] Filter by the ``name`` of the ``ref`` target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
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


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
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
         * Returns the hub specified by the ``hub_id`` parameter.
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
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
         * Returns a collection of hubs that the user of your app can access.
	 * 
	 * The returned hubs can be BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, Forma Hubs, or BIM 360 Docs accounts. Only active hubs are returned.
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary List Hubs
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
         * @param {Array<string>} [filterName] Filter by the ``name`` of the ``ref`` target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
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
     * Returns the hub specified by the ``hub_id`` parameter.
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
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
     * Returns a collection of hubs that the user of your app can access.
	 * 
	 * The returned hubs can be BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, Forma Hubs, or BIM 360 Docs accounts. Only active hubs are returned.
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary List Hubs
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
     * @param {Array<string>} [filterName] Filter by the ``name`` of the ``ref`` target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
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
     * Returns the hub specified by the ``hub_id`` parameter.
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
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
            const errorMessage = JSON.stringify(error.response.data);
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
     * Returns a collection of hubs that the user of your app can access.
	 * 
	 * The returned hubs can be BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, Forma Hubs, or BIM 360 Docs accounts. Only active hubs are returned.
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary List Hubs
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
     * @param {Array<string>} [filterName] Filter by the ``name`` of the ``ref`` target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
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
            const errorMessage = JSON.stringify(error.response.data);
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

