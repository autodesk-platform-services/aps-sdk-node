/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ConstructionAccountAdminApiError } from '../base';
import { FilterProductField } from '../model';
import { FilterProductKey } from '../model';
import { FilterProductSort } from '../model';
import { FilterRoleField } from '../model';
import { FilterRoleSort } from '../model';
import { FilterRoleStatus } from '../model';
import { FilterTextMatch } from '../model';
import { ProductsPage } from '../model';
import { Region } from '../model';
import { RolesPage } from '../model';
import { User } from '../model';
import { UserImport } from '../model';
import { UserPatchPayload } from '../model';
import { UserPayload } from '../model';
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
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {UserPayload} [userPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser: async (accessToken: string, accountId: string, region?: Region, userPayload?: UserPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('createUser', 'accountId', accountId)
            const localVarPath = `/hq/v1/accounts/{account_id}/users`
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

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
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
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (accessToken: string, accountId: string, userId: string, region?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getUser', 'accountId', accountId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUser', 'userId', userId)
            const localVarPath = `/hq/v1/accounts/{account_id}/users/{user_id}`
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

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of ACC products the user is associated with in their assigned projects.
 * 
 * Only account administrators can call this endpoint.
 * 
 * Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Get user products
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} userId The ID of the user. To find the ID call GET users. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
         * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page.
         * @param {string} [userId2] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
         * @param {Array<string>} [filterProjectId] A list of project IDs. Only results where the user is associated with one or more of the specified projects are returned.
         * @param {Array<FilterProductKey>} [filterKey] Filters the list of products by product key — a machine-readable identifier for an ACC product (such as docs, build, or cost). You can specify one or more keys to return only those products the user is associated with.  Example: filter[key]=docs,build  Possible values: accountAdministration, autoSpecs, build, buildingConnected, capitalPlanning, cloudWorksharing, cost, designCollaboration, docs, financials, insight, modelCoordination, projectAdministration, takeoff, and workshopxr.
         * @param {Array<FilterProductField>} [fields] List of fields to return in the response. Defaults to all fields. Possible values: projectIds, name and icon.
         * @param {Array<FilterProductSort>} [sort] The list of fields to sort by. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). The default is asc.  Possible values: name.  Default is the order in database.
         * @param {number} [limit] The maximum number of records to return in the response. Default: 20  Minimum: 1  Maximum: 200 (If a larger value is provided, only 200 records are returned)
         * @param {number} [offset] The index of the first record to return. Used for pagination in combination with the limit parameter.  Example: limit=20 and offset=40 returns records 41–60.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserProducts: async (accessToken: string, accountId: string, userId: string, region?: Region, userId2?: string, filterProjectId?: Array<string>, filterKey?: Array<FilterProductKey>, fields?: Array<FilterProductField>, sort?: Array<FilterProductSort>, limit?: number, offset?: number,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getUserProducts', 'accountId', accountId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUserProducts', 'userId', userId)
            const localVarPath = `/construction/admin/v1/accounts/{accountId}/users/{userId}/products`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (filterProjectId) {
                localVarQueryParameter['filter[projectId]'] = filterProjectId;
            }

            if (filterKey) {
                localVarQueryParameter['filter[key]'] = filterKey;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (region != null) {
                localVarHeaderParameter['Region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }

            if (userId2 != null) {
                localVarHeaderParameter['User-Id'] = String(userId2);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the roles assigned to a specific user across the projects they belong to.
 * 
 * Only users with account admin permissions can call this endpoint. To verify a user’s permissions, call GET users.
 * 
 * Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Get user roles
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} userId The ID of the user. To find the ID call GET users. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
         * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page.
         * @param {string} [userId2] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
         * @param {Array<string>} [filterProjectId] A list of project IDs. Only results where the user is associated with one or more of the specified projects are returned.
         * @param {Array<FilterRoleStatus>} [filterStatus] Filters roles by their status. Accepts one or more of the following values: active – The role is currently in use.  inactive – The role has been removed or is no longer in use.
         * @param {string} [filterName] Filters roles by name. By default, this performs a partial match (case-insensitive).  You can control how the match behaves by using the filterTextMatch parameter. For example, to match only names that start with (startsWith), end with (endsWith), or exactly equal (equals) the provided value.
         * @param {FilterTextMatch} [filterTextMatch] Specifies how text-based filters should match values in supported fields. This parameter can be used in any endpoint that supports text-based filtering (e.g., filter[name], filter[jobNumber], filter[companyName], etc.).  Possible values:  contains (default) – Matches if the field contains the specified text anywhere  startsWith – Matches if the field starts with the specified text  endsWith – Matches if the field ends with the specified text  equals – Matches only if the field exactly matches the specified text  Matching is case-insensitive.  Wildcards and regular expressions are not supported.
         * @param {Array<FilterRoleField>} [fields] A comma-separated list of response fields to include. Defaults to all fields if not specified. Use this parameter to reduce the response size by retrieving only the fields you need.  Possible values:  projectIds – Projects where the user holds this role  name – Role name  status – Role status (active or inactive)  key – Internal key used to translate the role name  createdAt – Timestamp when the role was created  updatedAt – Timestamp when the role was last updated
         * @param {Array<FilterRoleSort>} [sort] Sorts the results by one or more fields. Each field can be followed by a direction modifier:  asc – Ascending order (default)  desc – Descending order  Possible values: name, createdAt, updatedAt.  Default sort: name asc  Example: sort=name,updatedAt desc
         * @param {number} [limit] The maximum number of records to return in the response. Default: 20  Minimum: 1  Maximum: 200 (If a larger value is provided, only 200 records are returned)
         * @param {number} [offset] The index of the first record to return. Used for pagination in combination with the limit parameter.  Example: limit=20 and offset=40 returns records 41–60.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserRoles: async (accessToken: string, accountId: string, userId: string, region?: Region, userId2?: string, filterProjectId?: Array<string>, filterStatus?: Array<FilterRoleStatus>, filterName?: string, filterTextMatch?: FilterTextMatch, fields?: Array<FilterRoleField>, sort?: Array<FilterRoleSort>, limit?: number, offset?: number,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getUserRoles', 'accountId', accountId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUserRoles', 'userId', userId)
            const localVarPath = `/construction/admin/v1/accounts/{accountId}/users/{userId}/roles`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (filterProjectId) {
                localVarQueryParameter['filter[projectId]'] = filterProjectId;
            }

            if (filterStatus) {
                localVarQueryParameter['filter[status]'] = filterStatus;
            }

            if (filterName !== undefined) {
                localVarQueryParameter['filter[name]'] = filterName;
            }

            if (filterTextMatch !== undefined) {
                localVarQueryParameter['filterTextMatch'] = filterTextMatch;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (region != null) {
                localVarHeaderParameter['Region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }

            if (userId2 != null) {
                localVarHeaderParameter['User-Id'] = String(userId2);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
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
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
            const localVarPath = `/hq/v1/accounts/{account_id}/users`
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

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
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
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {Array<UserPayload>} [userPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importUsers: async (accessToken: string, accountId: string, region?: Region, userPayload?: Array<UserPayload>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('importUsers', 'accountId', accountId)
            const localVarPath = `/hq/v1/accounts/{account_id}/users/import`
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

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
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
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
            const localVarPath = `/hq/v1/accounts/{account_id}/users/{user_id}`
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

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
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
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
            const localVarPath = `/hq/v1/accounts/{account_id}/users/search`
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

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
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
export const AccountUsersApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = AccountUsersApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Create a new user in the BIM 360 member directory.
         * @summary Create User
         * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(accessToken: string, accountId: string, userId: string, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(accessToken, accountId, userId, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a list of ACC products the user is associated with in their assigned projects.
 * 
 * Only account administrators can call this endpoint.
 * 
 * Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Get user products
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} userId The ID of the user. To find the ID call GET users. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
         * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page.
         * @param {string} [userId2] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
         * @param {Array<string>} [filterProjectId] A list of project IDs. Only results where the user is associated with one or more of the specified projects are returned.
         * @param {Array<FilterProductKey>} [filterKey] Filters the list of products by product key — a machine-readable identifier for an ACC product (such as docs, build, or cost). You can specify one or more keys to return only those products the user is associated with.  Example: filter[key]=docs,build  Possible values: accountAdministration, autoSpecs, build, buildingConnected, capitalPlanning, cloudWorksharing, cost, designCollaboration, docs, financials, insight, modelCoordination, projectAdministration, takeoff, and workshopxr.
         * @param {Array<FilterProductField>} [fields] List of fields to return in the response. Defaults to all fields. Possible values: projectIds, name and icon.
         * @param {Array<FilterProductSort>} [sort] The list of fields to sort by. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). The default is asc.  Possible values: name.  Default is the order in database.
         * @param {number} [limit] The maximum number of records to return in the response. Default: 20  Minimum: 1  Maximum: 200 (If a larger value is provided, only 200 records are returned)
         * @param {number} [offset] The index of the first record to return. Used for pagination in combination with the limit parameter.  Example: limit=20 and offset=40 returns records 41–60.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserProducts(accessToken: string, accountId: string, userId: string, region?: Region, userId2?: string, filterProjectId?: Array<string>, filterKey?: Array<FilterProductKey>, fields?: Array<FilterProductField>, sort?: Array<FilterProductSort>, limit?: number, offset?: number, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductsPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserProducts(accessToken, accountId, userId, region, userId2, filterProjectId, filterKey, fields, sort, limit, offset,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the roles assigned to a specific user across the projects they belong to.
 * 
 * Only users with account admin permissions can call this endpoint. To verify a user’s permissions, call GET users.
 * 
 * Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Get user roles
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} userId The ID of the user. To find the ID call GET users. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
         * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page.
         * @param {string} [userId2] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
         * @param {Array<string>} [filterProjectId] A list of project IDs. Only results where the user is associated with one or more of the specified projects are returned.
         * @param {Array<FilterRoleStatus>} [filterStatus] Filters roles by their status. Accepts one or more of the following values: active – The role is currently in use.  inactive – The role has been removed or is no longer in use.
         * @param {string} [filterName] Filters roles by name. By default, this performs a partial match (case-insensitive).  You can control how the match behaves by using the filterTextMatch parameter. For example, to match only names that start with (startsWith), end with (endsWith), or exactly equal (equals) the provided value.
         * @param {FilterTextMatch} [filterTextMatch] Specifies how text-based filters should match values in supported fields. This parameter can be used in any endpoint that supports text-based filtering (e.g., filter[name], filter[jobNumber], filter[companyName], etc.).  Possible values:  contains (default) – Matches if the field contains the specified text anywhere  startsWith – Matches if the field starts with the specified text  endsWith – Matches if the field ends with the specified text  equals – Matches only if the field exactly matches the specified text  Matching is case-insensitive.  Wildcards and regular expressions are not supported.
         * @param {Array<FilterRoleField>} [fields] A comma-separated list of response fields to include. Defaults to all fields if not specified. Use this parameter to reduce the response size by retrieving only the fields you need.  Possible values:  projectIds – Projects where the user holds this role  name – Role name  status – Role status (active or inactive)  key – Internal key used to translate the role name  createdAt – Timestamp when the role was created  updatedAt – Timestamp when the role was last updated
         * @param {Array<FilterRoleSort>} [sort] Sorts the results by one or more fields. Each field can be followed by a direction modifier:  asc – Ascending order (default)  desc – Descending order  Possible values: name, createdAt, updatedAt.  Default sort: name asc  Example: sort=name,updatedAt desc
         * @param {number} [limit] The maximum number of records to return in the response. Default: 20  Minimum: 1  Maximum: 200 (If a larger value is provided, only 200 records are returned)
         * @param {number} [offset] The index of the first record to return. Used for pagination in combination with the limit parameter.  Example: limit=20 and offset=40 returns records 41–60.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserRoles(accessToken: string, accountId: string, userId: string, region?: Region, userId2?: string, filterProjectId?: Array<string>, filterStatus?: Array<FilterRoleStatus>, filterName?: string, filterTextMatch?: FilterTextMatch, fields?: Array<FilterRoleField>, sort?: Array<FilterRoleSort>, limit?: number, offset?: number, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RolesPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserRoles(accessToken, accountId, userId, region, userId2, filterProjectId, filterStatus, filterName, filterTextMatch, fields, sort, limit, offset,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Query all the users in a specific BIM 360 account.
         * @summary Get account users
         * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {Array<UserPayload>} [userPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async importUsers(accessToken: string, accountId: string, region?: Region, userPayload?: Array<UserPayload>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserImport>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.importUsers(accessToken, accountId, region, userPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Update a specific user’s status or default company.
         * @summary Update User
         * @param {string} accountId The account ID of the user.
         * @param {string} userId User ID
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApiInterface
     */
    getUser(accessToken: string,accountId: string, userId: string, region?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a list of ACC products the user is associated with in their assigned projects.
 * 
 * Only account administrators can call this endpoint.
 * 
 * Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Get user products
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} userId The ID of the user. To find the ID call GET users. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page.
     * @param {string} [userId2] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
     * @param {Array<string>} [filterProjectId] A list of project IDs. Only results where the user is associated with one or more of the specified projects are returned.
     * @param {Array<FilterProductKey>} [filterKey] Filters the list of products by product key — a machine-readable identifier for an ACC product (such as docs, build, or cost). You can specify one or more keys to return only those products the user is associated with.  Example: filter[key]=docs,build  Possible values: accountAdministration, autoSpecs, build, buildingConnected, capitalPlanning, cloudWorksharing, cost, designCollaboration, docs, financials, insight, modelCoordination, projectAdministration, takeoff, and workshopxr.
     * @param {Array<FilterProductField>} [fields] List of fields to return in the response. Defaults to all fields. Possible values: projectIds, name and icon.
     * @param {Array<FilterProductSort>} [sort] The list of fields to sort by. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). The default is asc.  Possible values: name.  Default is the order in database.
     * @param {number} [limit] The maximum number of records to return in the response. Default: 20  Minimum: 1  Maximum: 200 (If a larger value is provided, only 200 records are returned)
     * @param {number} [offset] The index of the first record to return. Used for pagination in combination with the limit parameter.  Example: limit=20 and offset=40 returns records 41–60.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApiInterface
     */
    getUserProducts(accessToken: string,accountId: string, userId: string, region?: Region, userId2?: string, filterProjectId?: Array<string>, filterKey?: Array<FilterProductKey>, fields?: Array<FilterProductField>, sort?: Array<FilterProductSort>, limit?: number, offset?: number,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the roles assigned to a specific user across the projects they belong to.
 * 
 * Only users with account admin permissions can call this endpoint. To verify a user’s permissions, call GET users.
 * 
 * Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Get user roles
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} userId The ID of the user. To find the ID call GET users. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page.
     * @param {string} [userId2] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
     * @param {Array<string>} [filterProjectId] A list of project IDs. Only results where the user is associated with one or more of the specified projects are returned.
     * @param {Array<FilterRoleStatus>} [filterStatus] Filters roles by their status. Accepts one or more of the following values: active – The role is currently in use.  inactive – The role has been removed or is no longer in use.
     * @param {string} [filterName] Filters roles by name. By default, this performs a partial match (case-insensitive).  You can control how the match behaves by using the filterTextMatch parameter. For example, to match only names that start with (startsWith), end with (endsWith), or exactly equal (equals) the provided value.
     * @param {FilterTextMatch} [filterTextMatch] Specifies how text-based filters should match values in supported fields. This parameter can be used in any endpoint that supports text-based filtering (e.g., filter[name], filter[jobNumber], filter[companyName], etc.).  Possible values:  contains (default) – Matches if the field contains the specified text anywhere  startsWith – Matches if the field starts with the specified text  endsWith – Matches if the field ends with the specified text  equals – Matches only if the field exactly matches the specified text  Matching is case-insensitive.  Wildcards and regular expressions are not supported.
     * @param {Array<FilterRoleField>} [fields] A comma-separated list of response fields to include. Defaults to all fields if not specified. Use this parameter to reduce the response size by retrieving only the fields you need.  Possible values:  projectIds – Projects where the user holds this role  name – Role name  status – Role status (active or inactive)  key – Internal key used to translate the role name  createdAt – Timestamp when the role was created  updatedAt – Timestamp when the role was last updated
     * @param {Array<FilterRoleSort>} [sort] Sorts the results by one or more fields. Each field can be followed by a direction modifier:  asc – Ascending order (default)  desc – Descending order  Possible values: name, createdAt, updatedAt.  Default sort: name asc  Example: sort=name,updatedAt desc
     * @param {number} [limit] The maximum number of records to return in the response. Default: 20  Minimum: 1  Maximum: 200 (If a larger value is provided, only 200 records are returned)
     * @param {number} [offset] The index of the first record to return. Used for pagination in combination with the limit parameter.  Example: limit=20 and offset=40 returns records 41–60.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApiInterface
     */
    getUserRoles(accessToken: string,accountId: string, userId: string, region?: Region, userId2?: string, filterProjectId?: Array<string>, filterStatus?: Array<FilterRoleStatus>, filterName?: string, filterTextMatch?: FilterTextMatch, fields?: Array<FilterRoleField>, sort?: Array<FilterRoleSort>, limit?: number, offset?: number,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Query all the users in a specific BIM 360 account.
     * @summary Get account users
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
 * @extends {BaseApi}
 */
export class AccountUsersApi extends BaseApi implements AccountUsersApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Create a new user in the BIM 360 member directory.
     * @summary Create User
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createUser Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`createUser Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createUser Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`createUser Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Query the details of a specific user.
     * @summary Get the details of a user
     * @param {string} accountId The account ID of the user.
     * @param {string} userId User ID
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getUser Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`getUser Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getUser Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`getUser Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

      /**
     * Returns a list of ACC products the user is associated with in their assigned projects.
 * 
 * Only account administrators can call this endpoint.
 * 
 * Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Get user products
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} userId The ID of the user. To find the ID call GET users. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page.
     * @param {string} [userId2] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
     * @param {Array<string>} [filterProjectId] A list of project IDs. Only results where the user is associated with one or more of the specified projects are returned.
     * @param {Array<FilterProductKey>} [filterKey] Filters the list of products by product key — a machine-readable identifier for an ACC product (such as docs, build, or cost). You can specify one or more keys to return only those products the user is associated with.  Example: filter[key]=docs,build  Possible values: accountAdministration, autoSpecs, build, buildingConnected, capitalPlanning, cloudWorksharing, cost, designCollaboration, docs, financials, insight, modelCoordination, projectAdministration, takeoff, and workshopxr.
     * @param {Array<FilterProductField>} [fields] List of fields to return in the response. Defaults to all fields. Possible values: projectIds, name and icon.
     * @param {Array<FilterProductSort>} [sort] The list of fields to sort by. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). The default is asc.  Possible values: name.  Default is the order in database.
     * @param {number} [limit] The maximum number of records to return in the response. Default: 20  Minimum: 1  Maximum: 200 (If a larger value is provided, only 200 records are returned)
     * @param {number} [offset] The index of the first record to return. Used for pagination in combination with the limit parameter.  Example: limit=20 and offset=40 returns records 41–60.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    public async getUserProducts(accessToken: string, accountId: string, userId: string, region?: Region, userId2?: string, filterProjectId?: Array<string>, filterKey?: Array<FilterProductKey>, fields?: Array<FilterProductField>, sort?: Array<FilterProductSort>, limit?: number, offset?: number, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getUserProducts ");
      try {
        const request =  await AccountUsersApiFp(this.sdkManager).getUserProducts(accessToken, accountId, userId, region, userId2, filterProjectId, filterKey, fields, sort, limit, offset,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getUserProducts Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getUserProducts Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`getUserProducts Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getUserProducts Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`getUserProducts Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the roles assigned to a specific user across the projects they belong to.
 * 
 * Only users with account admin permissions can call this endpoint. To verify a user’s permissions, call GET users.
 * 
 * Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Get user roles
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} userId The ID of the user. To find the ID call GET users. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page.
     * @param {string} [userId2] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
     * @param {Array<string>} [filterProjectId] A list of project IDs. Only results where the user is associated with one or more of the specified projects are returned.
     * @param {Array<FilterRoleStatus>} [filterStatus] Filters roles by their status. Accepts one or more of the following values: active – The role is currently in use.  inactive – The role has been removed or is no longer in use.
     * @param {string} [filterName] Filters roles by name. By default, this performs a partial match (case-insensitive).  You can control how the match behaves by using the filterTextMatch parameter. For example, to match only names that start with (startsWith), end with (endsWith), or exactly equal (equals) the provided value.
     * @param {FilterTextMatch} [filterTextMatch] Specifies how text-based filters should match values in supported fields. This parameter can be used in any endpoint that supports text-based filtering (e.g., filter[name], filter[jobNumber], filter[companyName], etc.).  Possible values:  contains (default) – Matches if the field contains the specified text anywhere  startsWith – Matches if the field starts with the specified text  endsWith – Matches if the field ends with the specified text  equals – Matches only if the field exactly matches the specified text  Matching is case-insensitive.  Wildcards and regular expressions are not supported.
     * @param {Array<FilterRoleField>} [fields] A comma-separated list of response fields to include. Defaults to all fields if not specified. Use this parameter to reduce the response size by retrieving only the fields you need.  Possible values:  projectIds – Projects where the user holds this role  name – Role name  status – Role status (active or inactive)  key – Internal key used to translate the role name  createdAt – Timestamp when the role was created  updatedAt – Timestamp when the role was last updated
     * @param {Array<FilterRoleSort>} [sort] Sorts the results by one or more fields. Each field can be followed by a direction modifier:  asc – Ascending order (default)  desc – Descending order  Possible values: name, createdAt, updatedAt.  Default sort: name asc  Example: sort=name,updatedAt desc
     * @param {number} [limit] The maximum number of records to return in the response. Default: 20  Minimum: 1  Maximum: 200 (If a larger value is provided, only 200 records are returned)
     * @param {number} [offset] The index of the first record to return. Used for pagination in combination with the limit parameter.  Example: limit=20 and offset=40 returns records 41–60.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    public async getUserRoles(accessToken: string, accountId: string, userId: string, region?: Region, userId2?: string, filterProjectId?: Array<string>, filterStatus?: Array<FilterRoleStatus>, filterName?: string, filterTextMatch?: FilterTextMatch, fields?: Array<FilterRoleField>, sort?: Array<FilterRoleSort>, limit?: number, offset?: number, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getUserRoles ");
      try {
        const request =  await AccountUsersApiFp(this.sdkManager).getUserRoles(accessToken, accountId, userId, region, userId2, filterProjectId, filterStatus, filterName, filterTextMatch, fields, sort, limit, offset,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getUserRoles Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getUserRoles Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`getUserRoles Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getUserRoles Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`getUserRoles Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Query all the users in a specific BIM 360 account.
     * @summary Get account users
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getUsers Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`getUsers Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getUsers Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`getUsers Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Bulk import users to the master member directory in a BIM 360 account. (50 users maximum can be included in each call.)
     * @summary Bulk import users
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`importUsers Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`importUsers Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`importUsers Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`importUsers Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Update a specific user’s status or default company.
     * @summary Update User
     * @param {string} accountId The account ID of the user.
     * @param {string} userId User ID
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`patchUserDetails Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`patchUserDetails Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`patchUserDetails Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`patchUserDetails Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Search users in the master member directory of a specific BIM 360 account by specified fields.
     * @summary Search Users
     * @param {string} accountId The account ID of the users.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
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
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`searchUsers Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`searchUsers Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`searchUsers Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`searchUsers Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

