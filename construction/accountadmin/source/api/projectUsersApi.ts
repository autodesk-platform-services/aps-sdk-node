/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ConstructionAccountAdminApiError } from '../base';
import { AccessLevels } from '../model';
import { FilterTextMatch } from '../model';
import { OrFilters } from '../model';
import { Products } from '../model';
import { ProjectUser } from '../model';
import { ProjectUserPayload } from '../model';
import { ProjectUserResponse } from '../model';
import { ProjectUsers } from '../model';
import { ProjectUsersImportPayload } from '../model';
import { ProjectUsersImportResponse } from '../model';
import { ProjectUsersUpdatePayload } from '../model';
import { Region } from '../model';
import { StatusFilter } from '../model';
import { UserFields } from '../model';
import { UserSortBy } from '../model';
/**
 * ProjectUsersApi - axios parameter creator
 * @export
 */
export const ProjectUsersApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Assigns a user to the specified project.
         * @summary Assigns a user to the specified project
         * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {ProjectUserPayload} [projectUserPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignProjectUser: async (accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUserPayload?: ProjectUserPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('assignProjectUser', 'projectId', projectId)
            const localVarPath = `/construction/admin/v1/projects/{projectId}/users`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (acceptLanguage != null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            if (region != null) {
                localVarHeaderParameter['Region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }

            if (userId != null) {
                localVarHeaderParameter['User-Id'] = String(userId);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(projectUserPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves detailed information about the specified user in a project.  There are two primary reasons to do this:  To verify that a user assigned to the specified project has been activated as a member of the project. To check other information about the user, such as their project user ID, roles, and products.
         * @summary Get project user
         * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {Array<UserFields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectUser: async (accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, fields?: Array<UserFields>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getProjectUser', 'projectId', projectId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getProjectUser', 'userId', userId)
            const localVarPath = `/construction/admin/v1/projects/{projectId}/users/{userId}`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
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

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
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
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves information about a filtered subset of users in the specified project.  There are two primary reasons to do this:  To verify that all users assigned to the project have been activated as members of the project. To check other information about users, such as their project user ID, roles, and products. Note that if you want to retrieve information about users associated with a particular Autodesk account, call the GET users endpoint.
         * @summary Get project users
         * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
         * @param {string} [filterName] A user name or name pattern to filter users by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]&#x3D;ABCco filterTextMatch&#x3D;startsWith.  Max length: 255
         * @param {string} [filterEmail] A user email address or address pattern that the returned users must have. This can be a partial match based on the value of filterTextMatch that you provide. For example:  filter[email]&#x3D;sample filterTextMatch&#x3D;startsWith  Max length: 255
         * @param {Array<StatusFilter>} [filterStatus] A list of statuses that the returned project users must be in. The default values are active and pending.
         * @param {Array<AccessLevels>} [filterAccessLevels] A list of user access levels that the returned users must have.
         * @param {string} [filterCompanyId] The ID of a company that the returned users must represent.
         * @param {string} [filterCompanyName] The name of a company that returned users must be associated with. Can be a partial match based on the value of filterTextMatch that you provide. For example: filter[companyName]&#x3D;Sample filterTextMatch&#x3D;startsWith  Max length: 255
         * @param {Array<string>} [filterAutodeskId] A list of the Autodesk IDs of users to retrieve.
         * @param {Array<string>} [filterId] A list of the ACC IDs of users to retrieve.
         * @param {string} [filterRoleId] The ID of a user role that the returned users must have. To obtain a role ID for this filter, you can inspect the roleId field in previous responses to this endpoint or to the GET projects/:projectId/users/:userId endpoint.  Max length: 255
         * @param {Array<string>} [filterRoleIds] A list of the IDs of user roles that the returned users must have. To obtain a role ID for this filter, you can inspect the roleId field in previous responses to this endpoint or to the GET projects/:projectId/users/:userId endpoint.
         * @param {Array<UserSortBy>} [sort] A list of fields to sort the returned users by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field.
         * @param {Array<UserFields>} [fields] A list of the project fields to include in the response. Default value: all fields.
         * @param {Array<OrFilters>} [orFilters] A list of user fields to combine with the SQL OR operator for filtering the returned project users. The OR is automatically incorporated between the fields; any one of them can produce a valid match.
         * @param {FilterTextMatch} [filterTextMatch] When filtering on a text-based field, this value indicates how to do the matching. Default value: contains. Possible values: contains, startsWith, endsWith and equals.
         * @param {number} [limit] The maximum number of records to return in a single request. Possible range: 1-200. Default value: 20.
         * @param {number} [offset] The record number that the returned page should start with. When the total number of records exceeds the value of limit, increase the offset value in subsequent requests to continue getting the remaining results.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectUsers: async (accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, filterProducts?: Array<Products>, filterName?: string, filterEmail?: string, filterStatus?: Array<StatusFilter>, filterAccessLevels?: Array<AccessLevels>, filterCompanyId?: string, filterCompanyName?: string, filterAutodeskId?: Array<string>, filterId?: Array<string>, filterRoleId?: string, filterRoleIds?: Array<string>, sort?: Array<UserSortBy>, fields?: Array<UserFields>, orFilters?: Array<OrFilters>, filterTextMatch?: FilterTextMatch, limit?: number, offset?: number,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getProjectUsers', 'projectId', projectId)
            const localVarPath = `/construction/admin/v1/projects/{projectId}/users`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (filterProducts) {
                localVarQueryParameter['filter[products]'] = filterProducts;
            }

            if (filterName !== undefined) {
                localVarQueryParameter['filter[name]'] = filterName;
            }

            if (filterEmail !== undefined) {
                localVarQueryParameter['filter[email]'] = filterEmail;
            }

            if (filterStatus) {
                localVarQueryParameter['filter[status]'] = filterStatus;
            }

            if (filterAccessLevels) {
                localVarQueryParameter['filter[accessLevels]'] = filterAccessLevels;
            }

            if (filterCompanyId !== undefined) {
                localVarQueryParameter['filter[companyId]'] = filterCompanyId;
            }

            if (filterCompanyName !== undefined) {
                localVarQueryParameter['filter[companyName]'] = filterCompanyName;
            }

            if (filterAutodeskId) {
                localVarQueryParameter['filter[autodeskId]'] = filterAutodeskId;
            }

            if (filterId) {
                localVarQueryParameter['filter[id]'] = filterId;
            }

            if (filterRoleId !== undefined) {
                localVarQueryParameter['filter[roleId]'] = filterRoleId;
            }

            if (filterRoleIds) {
                localVarQueryParameter['filter[roleIds]'] = filterRoleIds;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (orFilters) {
                localVarQueryParameter['orFilters'] = orFilters;
            }

            if (filterTextMatch !== undefined) {
                localVarQueryParameter['filterTextMatch'] = filterTextMatch;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            if (region != null) {
                localVarHeaderParameter['Region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }

            if (userId != null) {
                localVarHeaderParameter['User-Id'] = String(userId);
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
         * Assigns multiple users to a project at once. This endpoint can assign up to 200 users per request.
         * @summary Assigns multiple users to a project
         * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {ProjectUsersImportPayload} [projectUsersImportPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importProjectUsers: async (accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUsersImportPayload?: ProjectUsersImportPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('importProjectUsers', 'projectId', projectId)
            const localVarPath = `/construction/admin/v2/projects/{projectId}/users:import`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (acceptLanguage != null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            if (region != null) {
                localVarHeaderParameter['Region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }

            if (userId != null) {
                localVarHeaderParameter['User-Id'] = String(userId);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(projectUsersImportPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes the specified user from a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
         * @summary Remove Project User
         * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeProjectUser: async (accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('removeProjectUser', 'projectId', projectId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('removeProjectUser', 'userId', userId)
            const localVarPath = `/construction/admin/v1/projects/{projectId}/users/{userId}`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (acceptLanguage != null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
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
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates information about the specified user in a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
         * @summary Update user in project
         * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {ProjectUsersUpdatePayload} [projectUsersUpdatePayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProjectUser: async (accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, projectUsersUpdatePayload?: ProjectUsersUpdatePayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('updateProjectUser', 'projectId', projectId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateProjectUser', 'userId', userId)
            const localVarPath = `/construction/admin/v1/projects/{projectId}/users/{userId}`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (acceptLanguage != null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            if (region != null) {
                localVarHeaderParameter['Region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }

            if (userId2 != null) {
                localVarHeaderParameter['User-Id'] = String(userId2);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(projectUsersUpdatePayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProjectUsersApi - functional programming interface
 * @export
 */
export const ProjectUsersApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = ProjectUsersApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Assigns a user to the specified project.
         * @summary Assigns a user to the specified project
         * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {ProjectUserPayload} [projectUserPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async assignProjectUser(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUserPayload?: ProjectUserPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectUserResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.assignProjectUser(accessToken, projectId, acceptLanguage, region, userId, projectUserPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves detailed information about the specified user in a project.  There are two primary reasons to do this:  To verify that a user assigned to the specified project has been activated as a member of the project. To check other information about the user, such as their project user ID, roles, and products.
         * @summary Get project user
         * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {Array<UserFields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectUser(accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, fields?: Array<UserFields>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectUser(accessToken, projectId, userId, acceptLanguage, region, userId2, fields,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves information about a filtered subset of users in the specified project.  There are two primary reasons to do this:  To verify that all users assigned to the project have been activated as members of the project. To check other information about users, such as their project user ID, roles, and products. Note that if you want to retrieve information about users associated with a particular Autodesk account, call the GET users endpoint.
         * @summary Get project users
         * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
         * @param {string} [filterName] A user name or name pattern to filter users by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]&#x3D;ABCco filterTextMatch&#x3D;startsWith.  Max length: 255
         * @param {string} [filterEmail] A user email address or address pattern that the returned users must have. This can be a partial match based on the value of filterTextMatch that you provide. For example:  filter[email]&#x3D;sample filterTextMatch&#x3D;startsWith  Max length: 255
         * @param {Array<StatusFilter>} [filterStatus] A list of statuses that the returned project users must be in. The default values are active and pending.
         * @param {Array<AccessLevels>} [filterAccessLevels] A list of user access levels that the returned users must have.
         * @param {string} [filterCompanyId] The ID of a company that the returned users must represent.
         * @param {string} [filterCompanyName] The name of a company that returned users must be associated with. Can be a partial match based on the value of filterTextMatch that you provide. For example: filter[companyName]&#x3D;Sample filterTextMatch&#x3D;startsWith  Max length: 255
         * @param {Array<string>} [filterAutodeskId] A list of the Autodesk IDs of users to retrieve.
         * @param {Array<string>} [filterId] A list of the ACC IDs of users to retrieve.
         * @param {string} [filterRoleId] The ID of a user role that the returned users must have. To obtain a role ID for this filter, you can inspect the roleId field in previous responses to this endpoint or to the GET projects/:projectId/users/:userId endpoint.  Max length: 255
         * @param {Array<string>} [filterRoleIds] A list of the IDs of user roles that the returned users must have. To obtain a role ID for this filter, you can inspect the roleId field in previous responses to this endpoint or to the GET projects/:projectId/users/:userId endpoint.
         * @param {Array<UserSortBy>} [sort] A list of fields to sort the returned users by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field.
         * @param {Array<UserFields>} [fields] A list of the project fields to include in the response. Default value: all fields.
         * @param {Array<OrFilters>} [orFilters] A list of user fields to combine with the SQL OR operator for filtering the returned project users. The OR is automatically incorporated between the fields; any one of them can produce a valid match.
         * @param {FilterTextMatch} [filterTextMatch] When filtering on a text-based field, this value indicates how to do the matching. Default value: contains. Possible values: contains, startsWith, endsWith and equals.
         * @param {number} [limit] The maximum number of records to return in a single request. Possible range: 1-200. Default value: 20.
         * @param {number} [offset] The record number that the returned page should start with. When the total number of records exceeds the value of limit, increase the offset value in subsequent requests to continue getting the remaining results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectUsers(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, filterProducts?: Array<Products>, filterName?: string, filterEmail?: string, filterStatus?: Array<StatusFilter>, filterAccessLevels?: Array<AccessLevels>, filterCompanyId?: string, filterCompanyName?: string, filterAutodeskId?: Array<string>, filterId?: Array<string>, filterRoleId?: string, filterRoleIds?: Array<string>, sort?: Array<UserSortBy>, fields?: Array<UserFields>, orFilters?: Array<OrFilters>, filterTextMatch?: FilterTextMatch, limit?: number, offset?: number, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectUsers>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectUsers(accessToken, projectId, acceptLanguage, region, userId, filterProducts, filterName, filterEmail, filterStatus, filterAccessLevels, filterCompanyId, filterCompanyName, filterAutodeskId, filterId, filterRoleId, filterRoleIds, sort, fields, orFilters, filterTextMatch, limit, offset,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Assigns multiple users to a project at once. This endpoint can assign up to 200 users per request.
         * @summary Assigns multiple users to a project
         * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {ProjectUsersImportPayload} [projectUsersImportPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async importProjectUsers(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUsersImportPayload?: ProjectUsersImportPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectUsersImportResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.importProjectUsers(accessToken, projectId, acceptLanguage, region, userId, projectUsersImportPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Removes the specified user from a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
         * @summary Remove Project User
         * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeProjectUser(accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeProjectUser(accessToken, projectId, userId, acceptLanguage, region, userId2,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Updates information about the specified user in a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
         * @summary Update user in project
         * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {ProjectUsersUpdatePayload} [projectUsersUpdatePayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProjectUser(accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, projectUsersUpdatePayload?: ProjectUsersUpdatePayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectUserResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProjectUser(accessToken, projectId, userId, acceptLanguage, region, userId2, projectUsersUpdatePayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * ProjectUsersApi - interface
 * @export
 * @interface ProjectUsersApi
 */
export interface ProjectUsersApiInterface {
    /**
     * Assigns a user to the specified project.
     * @summary Assigns a user to the specified project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUserPayload} [projectUserPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApiInterface
     */
    assignProjectUser(accessToken: string,projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUserPayload?: ProjectUserPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves detailed information about the specified user in a project.  There are two primary reasons to do this:  To verify that a user assigned to the specified project has been activated as a member of the project. To check other information about the user, such as their project user ID, roles, and products.
     * @summary Get project user
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<UserFields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApiInterface
     */
    getProjectUser(accessToken: string,projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, fields?: Array<UserFields>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves information about a filtered subset of users in the specified project.  There are two primary reasons to do this:  To verify that all users assigned to the project have been activated as members of the project. To check other information about users, such as their project user ID, roles, and products. Note that if you want to retrieve information about users associated with a particular Autodesk account, call the GET users endpoint.
     * @summary Get project users
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
     * @param {string} [filterName] A user name or name pattern to filter users by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]&#x3D;ABCco filterTextMatch&#x3D;startsWith.  Max length: 255
     * @param {string} [filterEmail] A user email address or address pattern that the returned users must have. This can be a partial match based on the value of filterTextMatch that you provide. For example:  filter[email]&#x3D;sample filterTextMatch&#x3D;startsWith  Max length: 255
     * @param {Array<StatusFilter>} [filterStatus] A list of statuses that the returned project users must be in. The default values are active and pending.
     * @param {Array<AccessLevels>} [filterAccessLevels] A list of user access levels that the returned users must have.
     * @param {string} [filterCompanyId] The ID of a company that the returned users must represent.
     * @param {string} [filterCompanyName] The name of a company that returned users must be associated with. Can be a partial match based on the value of filterTextMatch that you provide. For example: filter[companyName]&#x3D;Sample filterTextMatch&#x3D;startsWith  Max length: 255
     * @param {Array<string>} [filterAutodeskId] A list of the Autodesk IDs of users to retrieve.
     * @param {Array<string>} [filterId] A list of the ACC IDs of users to retrieve.
     * @param {string} [filterRoleId] The ID of a user role that the returned users must have. To obtain a role ID for this filter, you can inspect the roleId field in previous responses to this endpoint or to the GET projects/:projectId/users/:userId endpoint.  Max length: 255
     * @param {Array<string>} [filterRoleIds] A list of the IDs of user roles that the returned users must have. To obtain a role ID for this filter, you can inspect the roleId field in previous responses to this endpoint or to the GET projects/:projectId/users/:userId endpoint.
     * @param {Array<UserSortBy>} [sort] A list of fields to sort the returned users by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field.
     * @param {Array<UserFields>} [fields] A list of the project fields to include in the response. Default value: all fields.
     * @param {Array<OrFilters>} [orFilters] A list of user fields to combine with the SQL OR operator for filtering the returned project users. The OR is automatically incorporated between the fields; any one of them can produce a valid match.
     * @param {FilterTextMatch} [filterTextMatch] When filtering on a text-based field, this value indicates how to do the matching. Default value: contains. Possible values: contains, startsWith, endsWith and equals.
     * @param {number} [limit] The maximum number of records to return in a single request. Possible range: 1-200. Default value: 20.
     * @param {number} [offset] The record number that the returned page should start with. When the total number of records exceeds the value of limit, increase the offset value in subsequent requests to continue getting the remaining results.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApiInterface
     */
    getProjectUsers(accessToken: string,projectId: string, acceptLanguage?: string, region?: Region, userId?: string, filterProducts?: Array<Products>, filterName?: string, filterEmail?: string, filterStatus?: Array<StatusFilter>, filterAccessLevels?: Array<AccessLevels>, filterCompanyId?: string, filterCompanyName?: string, filterAutodeskId?: Array<string>, filterId?: Array<string>, filterRoleId?: string, filterRoleIds?: Array<string>, sort?: Array<UserSortBy>, fields?: Array<UserFields>, orFilters?: Array<OrFilters>, filterTextMatch?: FilterTextMatch, limit?: number, offset?: number,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Assigns multiple users to a project at once. This endpoint can assign up to 200 users per request.
     * @summary Assigns multiple users to a project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUsersImportPayload} [projectUsersImportPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApiInterface
     */
    importProjectUsers(accessToken: string,projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUsersImportPayload?: ProjectUsersImportPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Removes the specified user from a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
     * @summary Remove Project User
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApiInterface
     */
    removeProjectUser(accessToken: string,projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Updates information about the specified user in a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
     * @summary Update user in project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUsersUpdatePayload} [projectUsersUpdatePayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApiInterface
     */
    updateProjectUser(accessToken: string,projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, projectUsersUpdatePayload?: ProjectUsersUpdatePayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * ProjectUsersApi - object-oriented interface
 * @export
 * @class ProjectUsersApi
 * @extends {BaseApi}
 */
export class ProjectUsersApi extends BaseApi implements ProjectUsersApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Assigns a user to the specified project.
     * @summary Assigns a user to the specified project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUserPayload} [projectUserPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    public async assignProjectUser(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUserPayload?: ProjectUserPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into assignProjectUser ");
      try {
        const request =  await ProjectUsersApiFp(this.sdkManager).assignProjectUser(accessToken, projectId, acceptLanguage, region, userId, projectUserPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`assignProjectUser Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`assignProjectUser Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`assignProjectUser Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`assignProjectUser Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`assignProjectUser Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves detailed information about the specified user in a project.  There are two primary reasons to do this:  To verify that a user assigned to the specified project has been activated as a member of the project. To check other information about the user, such as their project user ID, roles, and products.
     * @summary Get project user
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<UserFields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    public async getProjectUser(accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, fields?: Array<UserFields>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getProjectUser ");
      try {
        const request =  await ProjectUsersApiFp(this.sdkManager).getProjectUser(accessToken, projectId, userId, acceptLanguage, region, userId2, fields,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getProjectUser Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getProjectUser Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`getProjectUser Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getProjectUser Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`getProjectUser Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves information about a filtered subset of users in the specified project.  There are two primary reasons to do this:  To verify that all users assigned to the project have been activated as members of the project. To check other information about users, such as their project user ID, roles, and products. Note that if you want to retrieve information about users associated with a particular Autodesk account, call the GET users endpoint.
     * @summary Get project users
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
     * @param {string} [filterName] A user name or name pattern to filter users by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]&#x3D;ABCco filterTextMatch&#x3D;startsWith.  Max length: 255
     * @param {string} [filterEmail] A user email address or address pattern that the returned users must have. This can be a partial match based on the value of filterTextMatch that you provide. For example:  filter[email]&#x3D;sample filterTextMatch&#x3D;startsWith  Max length: 255
     * @param {Array<StatusFilter>} [filterStatus] A list of statuses that the returned project users must be in. The default values are active and pending.
     * @param {Array<AccessLevels>} [filterAccessLevels] A list of user access levels that the returned users must have.
     * @param {string} [filterCompanyId] The ID of a company that the returned users must represent.
     * @param {string} [filterCompanyName] The name of a company that returned users must be associated with. Can be a partial match based on the value of filterTextMatch that you provide. For example: filter[companyName]&#x3D;Sample filterTextMatch&#x3D;startsWith  Max length: 255
     * @param {Array<string>} [filterAutodeskId] A list of the Autodesk IDs of users to retrieve.
     * @param {Array<string>} [filterId] A list of the ACC IDs of users to retrieve.
     * @param {string} [filterRoleId] The ID of a user role that the returned users must have. To obtain a role ID for this filter, you can inspect the roleId field in previous responses to this endpoint or to the GET projects/:projectId/users/:userId endpoint.  Max length: 255
     * @param {Array<string>} [filterRoleIds] A list of the IDs of user roles that the returned users must have. To obtain a role ID for this filter, you can inspect the roleId field in previous responses to this endpoint or to the GET projects/:projectId/users/:userId endpoint.
     * @param {Array<UserSortBy>} [sort] A list of fields to sort the returned users by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field.
     * @param {Array<UserFields>} [fields] A list of the project fields to include in the response. Default value: all fields.
     * @param {Array<OrFilters>} [orFilters] A list of user fields to combine with the SQL OR operator for filtering the returned project users. The OR is automatically incorporated between the fields; any one of them can produce a valid match.
     * @param {FilterTextMatch} [filterTextMatch] When filtering on a text-based field, this value indicates how to do the matching. Default value: contains. Possible values: contains, startsWith, endsWith and equals.
     * @param {number} [limit] The maximum number of records to return in a single request. Possible range: 1-200. Default value: 20.
     * @param {number} [offset] The record number that the returned page should start with. When the total number of records exceeds the value of limit, increase the offset value in subsequent requests to continue getting the remaining results.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    public async getProjectUsers(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, filterProducts?: Array<Products>, filterName?: string, filterEmail?: string, filterStatus?: Array<StatusFilter>, filterAccessLevels?: Array<AccessLevels>, filterCompanyId?: string, filterCompanyName?: string, filterAutodeskId?: Array<string>, filterId?: Array<string>, filterRoleId?: string, filterRoleIds?: Array<string>, sort?: Array<UserSortBy>, fields?: Array<UserFields>, orFilters?: Array<OrFilters>, filterTextMatch?: FilterTextMatch, limit?: number, offset?: number, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getProjectUsers ");
      try {
        const request =  await ProjectUsersApiFp(this.sdkManager).getProjectUsers(accessToken, projectId, acceptLanguage, region, userId, filterProducts, filterName, filterEmail, filterStatus, filterAccessLevels, filterCompanyId, filterCompanyName, filterAutodeskId, filterId, filterRoleId, filterRoleIds, sort, fields, orFilters, filterTextMatch, limit, offset,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getProjectUsers Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getProjectUsers Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`getProjectUsers Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getProjectUsers Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`getProjectUsers Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Assigns multiple users to a project at once. This endpoint can assign up to 200 users per request.
     * @summary Assigns multiple users to a project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUsersImportPayload} [projectUsersImportPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    public async importProjectUsers(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUsersImportPayload?: ProjectUsersImportPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into importProjectUsers ");
      try {
        const request =  await ProjectUsersApiFp(this.sdkManager).importProjectUsers(accessToken, projectId, acceptLanguage, region, userId, projectUsersImportPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`importProjectUsers Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`importProjectUsers Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`importProjectUsers Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`importProjectUsers Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`importProjectUsers Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Removes the specified user from a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
     * @summary Remove Project User
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    public async removeProjectUser(accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into removeProjectUser ");
      try {
        const request =  await ProjectUsersApiFp(this.sdkManager).removeProjectUser(accessToken, projectId, userId, acceptLanguage, region, userId2,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`removeProjectUser Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`removeProjectUser Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`removeProjectUser Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`removeProjectUser Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`removeProjectUser Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Updates information about the specified user in a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
     * @summary Update user in project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUsersUpdatePayload} [projectUsersUpdatePayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    public async updateProjectUser(accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, projectUsersUpdatePayload?: ProjectUsersUpdatePayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into updateProjectUser ");
      try {
        const request =  await ProjectUsersApiFp(this.sdkManager).updateProjectUser(accessToken, projectId, userId, acceptLanguage, region, userId2, projectUsersUpdatePayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`updateProjectUser Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`updateProjectUser Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`updateProjectUser Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`updateProjectUser Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`updateProjectUser Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

