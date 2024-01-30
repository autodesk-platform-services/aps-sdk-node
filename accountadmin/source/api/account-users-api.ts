/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse} from "autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, AccountAdminApiError } from '../base';
import { Region } from '../model';
import { User } from '../model';
import { UserImportResponse } from '../model';
import { UserPatchPayload } from '../model';
import { UserPayload } from '../model';
import { Utils } from '../custom-code/Utils';
/**
 * AccountUsersApi - axios parameter creator
 * @export
 */
export const AccountUsersApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
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
        createUser: async (accessToken: string, accountId: string, region?: Region, userPayload?: UserPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('createUser', 'accountId', accountId)
            const regionPath = Utils.GetPathfromRegion(region ?? Region.Us);

            const localVarPath = (regionPath + `{account_id}/users`)
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            // if (region != null) {
            //     localVarHeaderParameter['Region'] = typeof region === 'string'
            //         ? region
            //         : JSON.stringify(region);
            // }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/ACCOUNT-ADMIN/TypeScript/1.0.0-beta1';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
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
        getUser: async (accessToken: string, accountId: string, userId: string, region?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getUser', 'accountId', accountId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUser', 'userId', userId)
            const regionPath = Utils.GetPathfromRegion(region ?? Region.Us);

            const localVarPath = (regionPath + `{account_id}/users/{user_id}`)
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            // if (region != null) {
            //     localVarHeaderParameter['Region'] = typeof region === 'string'
            //         ? region
            //         : JSON.stringify(region);
            // }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
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
        getUsers: async (accessToken: string, accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getUsers', 'accountId', accountId)
            const regionPath = Utils.GetPathfromRegion(region ?? Region.Us);

            const localVarPath = (regionPath + `{account_id}/users`)
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (field !== undefined) {
                localVarQueryParameter['field'] = field;
            }

            // if (region != null) {
            //     localVarHeaderParameter['Region'] = typeof region === 'string'
            //         ? region
            //         : JSON.stringify(region);
            // }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
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
        importUsers: async (accessToken: string, accountId: string, region?: Region, userPayload?: Array<UserPayload>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('importUsers', 'accountId', accountId)
            const regionPath = Utils.GetPathfromRegion(region ?? Region.Us);

            const localVarPath = (regionPath + `{account_id}/users/import`)
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            // if (region != null) {
            //     localVarHeaderParameter['Region'] = typeof region === 'string'
            //         ? region
            //         : JSON.stringify(region);
            // }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/ACCOUNT-ADMIN/TypeScript/1.0.0-beta1';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
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
        patchUserDetails: async (accessToken: string, accountId: string, userId: string, region?: Region, userPatchPayload?: UserPatchPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('patchUserDetails', 'accountId', accountId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('patchUserDetails', 'userId', userId)
            const regionPath = Utils.GetPathfromRegion(region ?? Region.Us);

            const localVarPath = (regionPath + `{account_id}/users/{user_id}`)
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            // if (region != null) {
            //     localVarHeaderParameter['Region'] = typeof region === 'string'
            //         ? region
            //         : JSON.stringify(region);
            // }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/ACCOUNT-ADMIN/TypeScript/1.0.0-beta1';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userPatchPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
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
        searchUsers: async (accessToken: string, accountId: string, region?: Region, name?: string, email?: string, companyName?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('searchUsers', 'accountId', accountId)
            const regionPath = Utils.GetPathfromRegion(region ?? Region.Us);

            const localVarPath = (regionPath + `{account_id}/users/search`)
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (companyName !== undefined) {
                localVarQueryParameter['company_name'] = companyName;
            }

            if (operator !== undefined) {
                localVarQueryParameter['operator'] = operator;
            }

            if (partial !== undefined) {
                localVarQueryParameter['partial'] = partial;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (field !== undefined) {
                localVarQueryParameter['field'] = field;
            }

            // if (region != null) {
            //     localVarHeaderParameter['Region'] = typeof region === 'string'
            //         ? region
            //         : JSON.stringify(region);
            // }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccountUsersApi - functional programming interface
 * @export
 */
export const AccountUsersApiFp = function(sdkManager?: SDKManager) {
    const localVarAxiosParamCreator = AccountUsersApiAxiosParamCreator(sdkManager.apsconfiguration)
    return {
        /**
         * Create a new user in the BIM 360 member directory.
         * @summary Create User
         * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {UserPayload} [userPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUser(accessToken: string, accountId: string, region?: Region, userPayload?: UserPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUser(accessToken, accountId, region, userPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Query the details of a specific user.
         * @summary Get the details of a user
         * @param {string} accountId The account ID of the user.
         * @param {string} userId User ID
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(accessToken: string, accountId: string, userId: string, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(accessToken, accountId, userId, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
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
        async getUsers(accessToken: string, accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsers(accessToken, accountId, region, limit, offset, sort, field,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Bulk import users to the master member directory in a BIM 360 account. (50 users maximum can be included in each call.)
         * @summary Bulk import users
         * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {Array<UserPayload>} [userPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async importUsers(accessToken: string, accountId: string, region?: Region, userPayload?: Array<UserPayload>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserImportResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.importUsers(accessToken, accountId, region, userPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
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
        async patchUserDetails(accessToken: string, accountId: string, userId: string, region?: Region, userPatchPayload?: UserPatchPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchUserDetails(accessToken, accountId, userId, region, userPatchPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
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
        async searchUsers(accessToken: string, accountId: string, region?: Region, name?: string, email?: string, companyName?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchUsers(accessToken, accountId, region, name, email, companyName, operator, partial, limit, offset, sort, field,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
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
    createUser(accessToken: string,accountId: string, region?: Region, userPayload?: UserPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

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
    getUser(accessToken: string,accountId: string, userId: string, region?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

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
    getUsers(accessToken: string,accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

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
    importUsers(accessToken: string,accountId: string, region?: Region, userPayload?: Array<UserPayload>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

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
    patchUserDetails(accessToken: string,accountId: string, userId: string, region?: Region, userPatchPayload?: UserPatchPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

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
    searchUsers(accessToken: string,accountId: string, region?: Region, name?: string, email?: string, companyName?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * AccountUsersApi - object-oriented interface
 * @export
 * @class AccountUsersApi
 * @extends {BaseAPI}
 */
export class AccountUsersApi extends BaseAPI implements AccountUsersApiInterface {
    private logger = this.sdkManager.logger;
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
    public async createUser(accessToken: string, accountId: string, region?: Region, userPayload?: UserPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createUser ");
      try {
        const request =  await AccountUsersApiFp(this.sdkManager).createUser(accessToken, accountId, region, userPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createUser Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`createUser Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new AccountAdminApiError(`createUser Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`createUser Request failed with no response received: ${error.request}`);
            throw new AccountAdminApiError(`createUser Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

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
    public async getUser(accessToken: string, accountId: string, userId: string, region?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getUser ");
      try {
        const request =  await AccountUsersApiFp(this.sdkManager).getUser(accessToken, accountId, userId, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getUser Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getUser Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new AccountAdminApiError(`getUser Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getUser Request failed with no response received: ${error.request}`);
            throw new AccountAdminApiError(`getUser Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

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
    public async getUsers(accessToken: string, accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getUsers ");
      try {
        const request =  await AccountUsersApiFp(this.sdkManager).getUsers(accessToken, accountId, region, limit, offset, sort, field,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getUsers Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getUsers Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new AccountAdminApiError(`getUsers Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getUsers Request failed with no response received: ${error.request}`);
            throw new AccountAdminApiError(`getUsers Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

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
    public async importUsers(accessToken: string, accountId: string, region?: Region, userPayload?: Array<UserPayload>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into importUsers ");
      try {
        const request =  await AccountUsersApiFp(this.sdkManager).importUsers(accessToken, accountId, region, userPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`importUsers Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`importUsers Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new AccountAdminApiError(`importUsers Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`importUsers Request failed with no response received: ${error.request}`);
            throw new AccountAdminApiError(`importUsers Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

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
    public async patchUserDetails(accessToken: string, accountId: string, userId: string, region?: Region, userPatchPayload?: UserPatchPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into patchUserDetails ");
      try {
        const request =  await AccountUsersApiFp(this.sdkManager).patchUserDetails(accessToken, accountId, userId, region, userPatchPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`patchUserDetails Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`patchUserDetails Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new AccountAdminApiError(`patchUserDetails Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`patchUserDetails Request failed with no response received: ${error.request}`);
            throw new AccountAdminApiError(`patchUserDetails Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

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
    public async searchUsers(accessToken: string, accountId: string, region?: Region, name?: string, email?: string, companyName?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into searchUsers ");
      try {
        const request =  await AccountUsersApiFp(this.sdkManager).searchUsers(accessToken, accountId, region, name, email, companyName, operator, partial, limit, offset, sort, field,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`searchUsers Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`searchUsers Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new AccountAdminApiError(`searchUsers Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`searchUsers Request failed with no response received: ${error.request}`);
            throw new AccountAdminApiError(`searchUsers Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

