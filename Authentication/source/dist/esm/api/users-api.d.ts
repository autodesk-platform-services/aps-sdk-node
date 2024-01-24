import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "@aps_sdk/autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { UserInfo } from '../model';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export declare const UsersApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
    /**
     * Retrieves basic information for the given authenticated user. Only supports 3-legged access tokens.
     * @summary GET User Info
     * @param {string} [authorization] YOUR_3_LEGGED_ACCESS_TOKEN
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserinfo: (authorization?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * UsersApi - functional programming interface
 * @export
 */
export declare const UsersApiFp: (sdkManager?: SDKManager) => {
    /**
     * Retrieves basic information for the given authenticated user. Only supports 3-legged access tokens.
     * @summary GET User Info
     * @param {string} [authorization] YOUR_3_LEGGED_ACCESS_TOKEN
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserinfo(authorization?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserInfo>>;
};
/**
 * UsersApi - interface
 * @export
 * @interface UsersApi
 */
export interface UsersApiInterface {
    /**
     * Retrieves basic information for the given authenticated user. Only supports 3-legged access tokens.
     * @summary GET User Info
     * @param {string} [authorization] YOUR_3_LEGGED_ACCESS_TOKEN
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    getUserinfo(/* accessToken:  string*/ authorization?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export declare class UsersApi extends BaseAPI implements UsersApiInterface {
    private logger;
    /**
     * Retrieves basic information for the given authenticated user. Only supports 3-legged access tokens.
     * @summary GET User Info
     * @param {string} [authorization] YOUR_3_LEGGED_ACCESS_TOKEN
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    getUserinfo(/* accessToken: string, */ authorization?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
