import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "@aps_sdk/autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { Region } from '../model';
import { User } from '../model';
import { UserImportResponse } from '../model';
import { UserPatchPayload } from '../model';
import { UserPayload } from '../model';
/**
 * AccountUsersApi - axios parameter creator
 * @export
 */
export declare const AccountUsersApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
    /**
     * Create a new user in the BIM 360 member directory.
     * @summary Create User
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {UserPayload} [userPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUser: (accessToken: string, accountId: string, region?: Region, userPayload?: UserPayload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Query the details of a specific user.
     * @summary Get the details of a user
     * @param {string} accountId The account ID of the user.
     * @param {string} userId User ID
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUser: (accessToken: string, accountId: string, userId: string, region?: Region, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Query all the users in a specific BIM 360 account.
     * @summary Get account users
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsers: (accessToken: string, accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Bulk import users to the master member directory in a BIM 360 account. (50 users maximum can be included in each call.)
     * @summary Bulk import users
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {Array<UserPayload>} [userPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importUsers: (accessToken: string, accountId: string, region?: Region, userPayload?: Array<UserPayload>, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Update a specific user’s status or default company.
     * @summary Update User
     * @param {string} accountId The account ID of the user.
     * @param {string} userId User ID
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {UserPatchPayload} [userPatchPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchUserDetails: (accessToken: string, accountId: string, userId: string, region?: Region, userPatchPayload?: UserPatchPayload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Search users in the master member directory of a specific BIM 360 account by specified fields.
     * @summary Search Users
     * @param {string} accountId The account ID of the users.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {string} [name] User name to match Max length: 255
     * @param {string} [email] User email to match Max length: 255
     * @param {string} [companyName] User company to match Max length: 255
     * @param {string} [operator] Boolean operator to use: OR (default) or AND
     * @param {boolean} [partial] If true (default), perform a fuzzy match
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchUsers: (accessToken: string, accountId: string, region?: Region, name?: string, email?: string, companyName?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * AccountUsersApi - functional programming interface
 * @export
 */
export declare const AccountUsersApiFp: (sdkManager?: SDKManager) => {
    /**
     * Create a new user in the BIM 360 member directory.
     * @summary Create User
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {UserPayload} [userPayload]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUser(accessToken: string, accountId: string, region?: Region, userPayload?: UserPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>>;
    /**
     * Query the details of a specific user.
     * @summary Get the details of a user
     * @param {string} accountId The account ID of the user.
     * @param {string} userId User ID
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUser(accessToken: string, accountId: string, userId: string, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>>;
    /**
     * Query all the users in a specific BIM 360 account.
     * @summary Get account users
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsers(accessToken: string, accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>>;
    /**
     * Bulk import users to the master member directory in a BIM 360 account. (50 users maximum can be included in each call.)
     * @summary Bulk import users
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {Array<UserPayload>} [userPayload]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importUsers(accessToken: string, accountId: string, region?: Region, userPayload?: Array<UserPayload>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserImportResponse>>;
    /**
     * Update a specific user’s status or default company.
     * @summary Update User
     * @param {string} accountId The account ID of the user.
     * @param {string} userId User ID
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {UserPatchPayload} [userPatchPayload]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchUserDetails(accessToken: string, accountId: string, userId: string, region?: Region, userPatchPayload?: UserPatchPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>>;
    /**
     * Search users in the master member directory of a specific BIM 360 account by specified fields.
     * @summary Search Users
     * @param {string} accountId The account ID of the users.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {string} [name] User name to match Max length: 255
     * @param {string} [email] User email to match Max length: 255
     * @param {string} [companyName] User company to match Max length: 255
     * @param {string} [operator] Boolean operator to use: OR (default) or AND
     * @param {boolean} [partial] If true (default), perform a fuzzy match
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchUsers(accessToken: string, accountId: string, region?: Region, name?: string, email?: string, companyName?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>>;
};
/**
 * AccountUsersApi - interface
 * @export
 * @interface AccountUsersApi
 */
export interface AccountUsersApiInterface {
    /**
     * Create a new user in the BIM 360 member directory.
     * @summary Create User
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {UserPayload} [userPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApiInterface
     */
    createUser(accessToken: string, accountId: string, region?: Region, userPayload?: UserPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Query the details of a specific user.
     * @summary Get the details of a user
     * @param {string} accountId The account ID of the user.
     * @param {string} userId User ID
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApiInterface
     */
    getUser(accessToken: string, accountId: string, userId: string, region?: Region, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Query all the users in a specific BIM 360 account.
     * @summary Get account users
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApiInterface
     */
    getUsers(accessToken: string, accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Bulk import users to the master member directory in a BIM 360 account. (50 users maximum can be included in each call.)
     * @summary Bulk import users
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {Array<UserPayload>} [userPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApiInterface
     */
    importUsers(accessToken: string, accountId: string, region?: Region, userPayload?: Array<UserPayload>, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Update a specific user’s status or default company.
     * @summary Update User
     * @param {string} accountId The account ID of the user.
     * @param {string} userId User ID
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {UserPatchPayload} [userPatchPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApiInterface
     */
    patchUserDetails(accessToken: string, accountId: string, userId: string, region?: Region, userPatchPayload?: UserPatchPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Search users in the master member directory of a specific BIM 360 account by specified fields.
     * @summary Search Users
     * @param {string} accountId The account ID of the users.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {string} [name] User name to match Max length: 255
     * @param {string} [email] User email to match Max length: 255
     * @param {string} [companyName] User company to match Max length: 255
     * @param {string} [operator] Boolean operator to use: OR (default) or AND
     * @param {boolean} [partial] If true (default), perform a fuzzy match
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApiInterface
     */
    searchUsers(accessToken: string, accountId: string, region?: Region, name?: string, email?: string, companyName?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * AccountUsersApi - object-oriented interface
 * @export
 * @class AccountUsersApi
 * @extends {BaseAPI}
 */
export declare class AccountUsersApi extends BaseAPI implements AccountUsersApiInterface {
    private logger;
    /**
     * Create a new user in the BIM 360 member directory.
     * @summary Create User
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {UserPayload} [userPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    createUser(accessToken: string, accountId: string, region?: Region, userPayload?: UserPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Query the details of a specific user.
     * @summary Get the details of a user
     * @param {string} accountId The account ID of the user.
     * @param {string} userId User ID
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    getUser(accessToken: string, accountId: string, userId: string, region?: Region, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Query all the users in a specific BIM 360 account.
     * @summary Get account users
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    getUsers(accessToken: string, accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Bulk import users to the master member directory in a BIM 360 account. (50 users maximum can be included in each call.)
     * @summary Bulk import users
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {Array<UserPayload>} [userPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    importUsers(accessToken: string, accountId: string, region?: Region, userPayload?: Array<UserPayload>, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Update a specific user’s status or default company.
     * @summary Update User
     * @param {string} accountId The account ID of the user.
     * @param {string} userId User ID
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {UserPatchPayload} [userPatchPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    patchUserDetails(accessToken: string, accountId: string, userId: string, region?: Region, userPatchPayload?: UserPatchPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Search users in the master member directory of a specific BIM 360 account by specified fields.
     * @summary Search Users
     * @param {string} accountId The account ID of the users.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {string} [name] User name to match Max length: 255
     * @param {string} [email] User email to match Max length: 255
     * @param {string} [companyName] User company to match Max length: 255
     * @param {string} [operator] Boolean operator to use: OR (default) or AND
     * @param {boolean} [partial] If true (default), perform a fuzzy match
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    searchUsers(accessToken: string, accountId: string, region?: Region, name?: string, email?: string, companyName?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
