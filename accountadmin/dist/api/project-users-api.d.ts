import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "@aps_sdk/autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
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
export declare const ProjectUsersApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
    /**
     * Assigns a user to the specified project.
     * @summary Assigns a user to the specified project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUserPayload} [projectUserPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    assignProjectUser: (accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUserPayload?: ProjectUserPayload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Retrieves detailed information about the specified user in a project.  There are two primary reasons to do this:  To verify that a user assigned to the specified project has been activated as a member of the project. To check other information about the user, such as their project user ID, roles, and products.
     * @summary Get project user
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<UserFields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectUser: (accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, fields?: Array<UserFields>, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Retrieves information about a filtered subset of users in the specified project.  There are two primary reasons to do this:  To verify that all users assigned to the project have been activated as members of the project. To check other information about users, such as their project user ID, roles, and products. Note that if you want to retrieve information about users associated with a particular Autodesk account, call the GET users endpoint.
     * @summary Get project users
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
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
    getProjectUsers: (accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, filterProducts?: Array<Products>, filterName?: string, filterEmail?: string, filterStatus?: Array<StatusFilter>, filterAccessLevels?: Array<AccessLevels>, filterCompanyId?: string, filterCompanyName?: string, filterAutodeskId?: Array<string>, filterId?: Array<string>, filterRoleId?: string, filterRoleIds?: Array<string>, sort?: Array<UserSortBy>, fields?: Array<UserFields>, orFilters?: Array<OrFilters>, filterTextMatch?: FilterTextMatch, limit?: number, offset?: number, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Assigns multiple users to a project at once. This endpoint can assign up to 200 users per request.
     * @summary Assigns multiple users to a project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUsersImportPayload} [projectUsersImportPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importProjectUsers: (accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUsersImportPayload?: ProjectUsersImportPayload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Removes the specified user from a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
     * @summary Remove Project User
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeProjectUser: (accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Updates information about the specified user in a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
     * @summary Update user in project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUsersUpdatePayload} [projectUsersUpdatePayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProjectUser: (accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, projectUsersUpdatePayload?: ProjectUsersUpdatePayload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * ProjectUsersApi - functional programming interface
 * @export
 */
export declare const ProjectUsersApiFp: (sdkManager?: SDKManager) => {
    /**
     * Assigns a user to the specified project.
     * @summary Assigns a user to the specified project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUserPayload} [projectUserPayload]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    assignProjectUser(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUserPayload?: ProjectUserPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectUserResponse>>;
    /**
     * Retrieves detailed information about the specified user in a project.  There are two primary reasons to do this:  To verify that a user assigned to the specified project has been activated as a member of the project. To check other information about the user, such as their project user ID, roles, and products.
     * @summary Get project user
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<UserFields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectUser(accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, fields?: Array<UserFields>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectUser>>;
    /**
     * Retrieves information about a filtered subset of users in the specified project.  There are two primary reasons to do this:  To verify that all users assigned to the project have been activated as members of the project. To check other information about users, such as their project user ID, roles, and products. Note that if you want to retrieve information about users associated with a particular Autodesk account, call the GET users endpoint.
     * @summary Get project users
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
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
    getProjectUsers(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, filterProducts?: Array<Products>, filterName?: string, filterEmail?: string, filterStatus?: Array<StatusFilter>, filterAccessLevels?: Array<AccessLevels>, filterCompanyId?: string, filterCompanyName?: string, filterAutodeskId?: Array<string>, filterId?: Array<string>, filterRoleId?: string, filterRoleIds?: Array<string>, sort?: Array<UserSortBy>, fields?: Array<UserFields>, orFilters?: Array<OrFilters>, filterTextMatch?: FilterTextMatch, limit?: number, offset?: number, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectUsers>>;
    /**
     * Assigns multiple users to a project at once. This endpoint can assign up to 200 users per request.
     * @summary Assigns multiple users to a project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUsersImportPayload} [projectUsersImportPayload]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importProjectUsers(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUsersImportPayload?: ProjectUsersImportPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectUsersImportResponse>>;
    /**
     * Removes the specified user from a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
     * @summary Remove Project User
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeProjectUser(accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Updates information about the specified user in a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
     * @summary Update user in project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUsersUpdatePayload} [projectUsersUpdatePayload]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProjectUser(accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, projectUsersUpdatePayload?: ProjectUsersUpdatePayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectUserResponse>>;
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
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUserPayload} [projectUserPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApiInterface
     */
    assignProjectUser(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUserPayload?: ProjectUserPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Retrieves detailed information about the specified user in a project.  There are two primary reasons to do this:  To verify that a user assigned to the specified project has been activated as a member of the project. To check other information about the user, such as their project user ID, roles, and products.
     * @summary Get project user
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<UserFields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApiInterface
     */
    getProjectUser(accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, fields?: Array<UserFields>, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Retrieves information about a filtered subset of users in the specified project.  There are two primary reasons to do this:  To verify that all users assigned to the project have been activated as members of the project. To check other information about users, such as their project user ID, roles, and products. Note that if you want to retrieve information about users associated with a particular Autodesk account, call the GET users endpoint.
     * @summary Get project users
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
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
    getProjectUsers(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, filterProducts?: Array<Products>, filterName?: string, filterEmail?: string, filterStatus?: Array<StatusFilter>, filterAccessLevels?: Array<AccessLevels>, filterCompanyId?: string, filterCompanyName?: string, filterAutodeskId?: Array<string>, filterId?: Array<string>, filterRoleId?: string, filterRoleIds?: Array<string>, sort?: Array<UserSortBy>, fields?: Array<UserFields>, orFilters?: Array<OrFilters>, filterTextMatch?: FilterTextMatch, limit?: number, offset?: number, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Assigns multiple users to a project at once. This endpoint can assign up to 200 users per request.
     * @summary Assigns multiple users to a project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUsersImportPayload} [projectUsersImportPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApiInterface
     */
    importProjectUsers(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUsersImportPayload?: ProjectUsersImportPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Removes the specified user from a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
     * @summary Remove Project User
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApiInterface
     */
    removeProjectUser(accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Updates information about the specified user in a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
     * @summary Update user in project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUsersUpdatePayload} [projectUsersUpdatePayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApiInterface
     */
    updateProjectUser(accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, projectUsersUpdatePayload?: ProjectUsersUpdatePayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * ProjectUsersApi - object-oriented interface
 * @export
 * @class ProjectUsersApi
 * @extends {BaseAPI}
 */
export declare class ProjectUsersApi extends BaseAPI implements ProjectUsersApiInterface {
    private logger;
    /**
     * Assigns a user to the specified project.
     * @summary Assigns a user to the specified project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUserPayload} [projectUserPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    assignProjectUser(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUserPayload?: ProjectUserPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Retrieves detailed information about the specified user in a project.  There are two primary reasons to do this:  To verify that a user assigned to the specified project has been activated as a member of the project. To check other information about the user, such as their project user ID, roles, and products.
     * @summary Get project user
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<UserFields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    getProjectUser(accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, fields?: Array<UserFields>, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Retrieves information about a filtered subset of users in the specified project.  There are two primary reasons to do this:  To verify that all users assigned to the project have been activated as members of the project. To check other information about users, such as their project user ID, roles, and products. Note that if you want to retrieve information about users associated with a particular Autodesk account, call the GET users endpoint.
     * @summary Get project users
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
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
    getProjectUsers(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, filterProducts?: Array<Products>, filterName?: string, filterEmail?: string, filterStatus?: Array<StatusFilter>, filterAccessLevels?: Array<AccessLevels>, filterCompanyId?: string, filterCompanyName?: string, filterAutodeskId?: Array<string>, filterId?: Array<string>, filterRoleId?: string, filterRoleIds?: Array<string>, sort?: Array<UserSortBy>, fields?: Array<UserFields>, orFilters?: Array<OrFilters>, filterTextMatch?: FilterTextMatch, limit?: number, offset?: number, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Assigns multiple users to a project at once. This endpoint can assign up to 200 users per request.
     * @summary Assigns multiple users to a project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUsersImportPayload} [projectUsersImportPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    importProjectUsers(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, projectUsersImportPayload?: ProjectUsersImportPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Removes the specified user from a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
     * @summary Remove Project User
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    removeProjectUser(accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Updates information about the specified user in a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
     * @summary Update user in project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId2] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUsersUpdatePayload} [projectUsersUpdatePayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    updateProjectUser(accessToken: string, projectId: string, userId: string, acceptLanguage?: string, region?: Region, userId2?: string, projectUsersUpdatePayload?: ProjectUsersUpdatePayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
