/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, createRequestFunctionforUserInfo } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, AuthenticationApiError } from '../base';
import { UserInfo } from '../model';
import { Url } from 'url';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Retrieves information about the authenticated user.
         * @summary Get User Info
         * @param authorization Three Legged access token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserInfo: async (authorization: string, baseAddress:URL | string, options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/userinfo`;
            const localVarUrlObj = new URL(localVarPath, baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

           // await setBearerAuthToObject(localVarHeaderParameter, accessToken)
           if (authorization != null) {
            localVarHeaderParameter['Authorization'] = authorization;
        }
    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/AUTHENTICATION/TypeScript/1.0.0';
          //  setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.toString(),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Retrieves information about the authenticated user.
         * @summary Get User Info
         * @param {string} [authorization] YOUR_3_LEGGED_ACCESS_TOKEN
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserInfo(authorization?: string, baseAddress?:URL | string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserInfo(authorization, baseAddress, options);
            return createRequestFunctionforUserInfo(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * UsersApi - interface
 * @export
 * @interface UsersApi
 */
export interface UsersApiInterface {
    /**
     * Retrieves information about the authenticated user.
     * @summary Get User Info
     * @param authorization bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    getUserInfo(authorization:string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseApi}
 */
export class UsersApi extends BaseApi implements UsersApiInterface {
    private logger = this.sdkManager.logger;
    public baseAddress: URL | string = new URL( "https://api.userprofile.autodesk.com");
    /**
     * Retrieves information about the authenticated user.
     * @summary Get User Info
     * @param authorization bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public async getUserInfo(authorization: string,  options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getUserInfo ");
      try {
        const request =  await UsersApiFp(this.sdkManager).getUserInfo(authorization, this.baseAddress,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getUserInfo Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getUserInfo Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new AuthenticationApiError(`getUserInfo Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getUserInfo Request failed with no response received: ${error.request}`);
            throw new AuthenticationApiError(`getUserInfo Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

