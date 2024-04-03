/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse } from "@aps_sdk/autodesk-sdkmanager";
import { createRequestFunctionforUserInfo } from '../common';
import { RequestArgs, BaseApi, AuthenticationApiError } from '../base';
import { UserInfo } from '../model';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Retrieves information about the authenticated user.
         * @summary Get User Info
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserInfo: async (/* accessToken: string, */ authorization?: string, options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/userinfo`;
            const localVarUrlObj = new URL(localVarPath, "https://api.userprofile.autodesk.com");
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            // const localVarQueryParameter = {} as any;

            //  await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }

            // setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            //localVarRequestOptions.baseURL = "https://api.userprofile.autodesk.com";
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
export const UsersApiFp = function (sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Retrieves information about the authenticated user.
         * @summary Get User Info
         * @param {string} [authorization] YOUR_3_LEGGED_ACCESS_TOKEN
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserInfo(/* accessToken: string, */ authorization?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserInfo(/* accessToken, */ authorization, options);
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
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    getUserInfo(/* accessToken:  string*/authorization?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseApi implements UsersApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Retrieves information about the authenticated user.
     * @summary Get User Info
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public async getUserInfo(/* accessToken: string, */ authorization?: string, options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into getUserInfo ");
        try {
            const request = await UsersApiFp(this.sdkManager).getUserInfo(/* accessToken, */ authorization, options);
            const response = await request(this.axios);
            this.logger.logInfo(`getUserInfo Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response.data);
        } catch (error) {
            if (error.response) {
                this.logger.logError(`getUserInfo Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                throw new AuthenticationApiError(`getUserInfo Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
            } else if (error.request) {
                this.logger.logError(`getUserInfo Request failed with no response received: ${error.request}`);
                throw new AuthenticationApiError(`getUserInfo Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }
}

