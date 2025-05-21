/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ConstructionAccountAdminApiError } from '../base';
import { Classification } from '../model';
import { Fields } from '../model';
import { FilterTextMatch } from '../model';
import { Platform } from '../model';
import { Products } from '../model';
import { Project } from '../model';
import { ProjectPatch } from '../model';
import { ProjectPayload } from '../model';
import { ProjectsPage } from '../model';
import { Region } from '../model';
import { SortBy } from '../model';
import { Status } from '../model';
/**
 * ProjectsApi - axios parameter creator
 * @export
 */
export const ProjectsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Creates a new project in the specified account. You can create the project directly, or clone the project from a project template.
         * @summary Create new Project
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {ProjectPayload} [projectPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProject: async (accessToken: string, accountId: string, acceptLanguage?: string, region?: Region, userId?: string, projectPayload?: ProjectPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('createProject', 'accountId', accountId)
            const localVarPath = `/construction/admin/v1/accounts/{accountId}/projects`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(projectPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create or update a project’s image.
         * @summary Create or update a project’s image
         * @param {string} projectId The account ID of the project. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} accountId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the BIM 360 API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProjectImage: async (accessToken: string, projectId: string, accountId: string, body: File, region?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createProjectImage', 'projectId', projectId)
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('createProjectImage', 'accountId', accountId)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('createProjectImage', 'body', body)
            const localVarPath = `/hq/v1/accounts/{account_id}/projects/{project_id}/image`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const formData = new FormData();

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            // if (region != null) {
                //     localVarHeaderParameter['Region'] = typeof region === 'string'
                    //         ? region
                    //         : JSON.stringify(region);
            // }


            if (body !== undefined) { 
                formData.set('chunk', body);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/multipart/form-data';
    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = formData;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a project specified by project ID.
         * @summary Get a project by ID
         * @param {string} projectId 
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProject: async (accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getProject', 'projectId', projectId)
            const localVarPath = `/construction/admin/v1/projects/{projectId}`
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
         * Retrieves a list of the projects in the specified account.
         * @summary Get Project in account
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
         * @param {Array<Classification>} [filterClassification] A list of the classifications of projects to include in the response. Possible values: production, template, component, sample.
         * @param {Array<Platform>} [filterPlatform] Filter resource by platform. Possible values: acc and bim360.
         * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
         * @param {string} [filterName] A project name or name pattern to filter projects by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]=ABCco filterTextMatch=startsWith.  Max length: 255
         * @param {Array<string>} [filterType] A list of project types to filter projects by. To exclude a project type from the response, prefix it with - (a hyphen); for example, -Bridge excludes bridge projects.
         * @param {Array<Status>} [filterStatus] A list of the statuses of projects to include in the response. Possible values:  active pending archived suspended
         * @param {string} [filterBusinessUnitId] The ID of the business unit that returned projects must be associated with.
         * @param {string} [filterJobNumber] The user-defined identifier for a project to be returned. This ID was defined when the project was created. This filter accepts a partial match based on the value of filterTextMatch that you provide.
         * @param {string} [filterUpdatedAt] A range of dates during which the desired projects were updated. The range must be specified with dates in ISO 8601 format with time required. Separate multiple values with commas.
         * @param {FilterTextMatch} [filterTextMatch] When filtering on a text-based field, this value indicates how to do the matching. Default value: contains. Possible values: contains, startsWith, endsWith and equals.
         * @param {Array<SortBy>} [sort] A list of fields to sort the returned projects by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field.
         * @param {number} [limit] The maximum number of records to return in a single request. Possible range: 1-200. Default value: 20.
         * @param {number} [offset] The record number that the returned page should start with. When the total number of records exceeds the value of limit, increase the offset value in subsequent requests to continue getting the remaining results.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjects: async (accessToken: string, accountId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>, filterClassification?: Array<Classification>, filterPlatform?: Array<Platform>, filterProducts?: Array<Products>, filterName?: string, filterType?: Array<string>, filterStatus?: Array<Status>, filterBusinessUnitId?: string, filterJobNumber?: string, filterUpdatedAt?: string, filterTextMatch?: FilterTextMatch, sort?: Array<SortBy>, limit?: number, offset?: number,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getProjects', 'accountId', accountId)
            const localVarPath = `/construction/admin/v1/accounts/{accountId}/projects`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
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

            if (filterClassification) {
                localVarQueryParameter['filter[classification]'] = filterClassification;
            }

            if (filterPlatform) {
                localVarQueryParameter['filter[platform]'] = filterPlatform;
            }

            if (filterProducts) {
                localVarQueryParameter['filter[products]'] = filterProducts;
            }

            if (filterName !== undefined) {
                localVarQueryParameter['filter[name]'] = filterName;
            }

            if (filterType) {
                localVarQueryParameter['filter[type]'] = filterType;
            }

            if (filterStatus) {
                localVarQueryParameter['filter[status]'] = filterStatus;
            }

            if (filterBusinessUnitId !== undefined) {
                localVarQueryParameter['filter[businessUnitId]'] = filterBusinessUnitId;
            }

            if (filterJobNumber !== undefined) {
                localVarQueryParameter['filter[jobNumber]'] = filterJobNumber;
            }

            if (filterUpdatedAt !== undefined) {
                localVarQueryParameter['filter[updatedAt]'] = filterUpdatedAt;
            }

            if (filterTextMatch !== undefined) {
                localVarQueryParameter['filterTextMatch'] = filterTextMatch;
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
    }
};

/**
 * ProjectsApi - functional programming interface
 * @export
 */
export const ProjectsApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = ProjectsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Creates a new project in the specified account. You can create the project directly, or clone the project from a project template.
         * @summary Create new Project
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {ProjectPayload} [projectPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProject(accessToken: string, accountId: string, acceptLanguage?: string, region?: Region, userId?: string, projectPayload?: ProjectPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProject(accessToken, accountId, acceptLanguage, region, userId, projectPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Create or update a project’s image.
         * @summary Create or update a project’s image
         * @param {string} projectId The account ID of the project. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} accountId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the BIM 360 API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProjectImage(accessToken: string, projectId: string, accountId: string, body: File, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectPatch>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProjectImage(accessToken, projectId, accountId, body, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves a project specified by project ID.
         * @summary Get a project by ID
         * @param {string} projectId 
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProject(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProject(accessToken, projectId, acceptLanguage, region, userId, fields,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves a list of the projects in the specified account.
         * @summary Get Project in account
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
         * @param {Array<Classification>} [filterClassification] A list of the classifications of projects to include in the response. Possible values: production, template, component, sample.
         * @param {Array<Platform>} [filterPlatform] Filter resource by platform. Possible values: acc and bim360.
         * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
         * @param {string} [filterName] A project name or name pattern to filter projects by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]=ABCco filterTextMatch=startsWith.  Max length: 255
         * @param {Array<string>} [filterType] A list of project types to filter projects by. To exclude a project type from the response, prefix it with - (a hyphen); for example, -Bridge excludes bridge projects.
         * @param {Array<Status>} [filterStatus] A list of the statuses of projects to include in the response. Possible values:  active pending archived suspended
         * @param {string} [filterBusinessUnitId] The ID of the business unit that returned projects must be associated with.
         * @param {string} [filterJobNumber] The user-defined identifier for a project to be returned. This ID was defined when the project was created. This filter accepts a partial match based on the value of filterTextMatch that you provide.
         * @param {string} [filterUpdatedAt] A range of dates during which the desired projects were updated. The range must be specified with dates in ISO 8601 format with time required. Separate multiple values with commas.
         * @param {FilterTextMatch} [filterTextMatch] When filtering on a text-based field, this value indicates how to do the matching. Default value: contains. Possible values: contains, startsWith, endsWith and equals.
         * @param {Array<SortBy>} [sort] A list of fields to sort the returned projects by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field.
         * @param {number} [limit] The maximum number of records to return in a single request. Possible range: 1-200. Default value: 20.
         * @param {number} [offset] The record number that the returned page should start with. When the total number of records exceeds the value of limit, increase the offset value in subsequent requests to continue getting the remaining results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjects(accessToken: string, accountId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>, filterClassification?: Array<Classification>, filterPlatform?: Array<Platform>, filterProducts?: Array<Products>, filterName?: string, filterType?: Array<string>, filterStatus?: Array<Status>, filterBusinessUnitId?: string, filterJobNumber?: string, filterUpdatedAt?: string, filterTextMatch?: FilterTextMatch, sort?: Array<SortBy>, limit?: number, offset?: number, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectsPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjects(accessToken, accountId, acceptLanguage, region, userId, fields, filterClassification, filterPlatform, filterProducts, filterName, filterType, filterStatus, filterBusinessUnitId, filterJobNumber, filterUpdatedAt, filterTextMatch, sort, limit, offset,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * ProjectsApi - interface
 * @export
 * @interface ProjectsApi
 */
export interface ProjectsApiInterface {
    /**
     * Creates a new project in the specified account. You can create the project directly, or clone the project from a project template.
     * @summary Create new Project
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectPayload} [projectPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createProject(accessToken: string,accountId: string, acceptLanguage?: string, region?: Region, userId?: string, projectPayload?: ProjectPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Create or update a project’s image.
     * @summary Create or update a project’s image
     * @param {string} projectId The account ID of the project. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} accountId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the BIM 360 API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createProjectImage(accessToken: string,projectId: string, accountId: string, body: File, region?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves a project specified by project ID.
     * @summary Get a project by ID
     * @param {string} projectId 
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProject(accessToken: string,projectId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves a list of the projects in the specified account.
     * @summary Get Project in account
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param {Array<Classification>} [filterClassification] A list of the classifications of projects to include in the response. Possible values: production, template, component, sample.
     * @param {Array<Platform>} [filterPlatform] Filter resource by platform. Possible values: acc and bim360.
     * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
     * @param {string} [filterName] A project name or name pattern to filter projects by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]=ABCco filterTextMatch=startsWith.  Max length: 255
     * @param {Array<string>} [filterType] A list of project types to filter projects by. To exclude a project type from the response, prefix it with - (a hyphen); for example, -Bridge excludes bridge projects.
     * @param {Array<Status>} [filterStatus] A list of the statuses of projects to include in the response. Possible values:  active pending archived suspended
     * @param {string} [filterBusinessUnitId] The ID of the business unit that returned projects must be associated with.
     * @param {string} [filterJobNumber] The user-defined identifier for a project to be returned. This ID was defined when the project was created. This filter accepts a partial match based on the value of filterTextMatch that you provide.
     * @param {string} [filterUpdatedAt] A range of dates during which the desired projects were updated. The range must be specified with dates in ISO 8601 format with time required. Separate multiple values with commas.
     * @param {FilterTextMatch} [filterTextMatch] When filtering on a text-based field, this value indicates how to do the matching. Default value: contains. Possible values: contains, startsWith, endsWith and equals.
     * @param {Array<SortBy>} [sort] A list of fields to sort the returned projects by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field.
     * @param {number} [limit] The maximum number of records to return in a single request. Possible range: 1-200. Default value: 20.
     * @param {number} [offset] The record number that the returned page should start with. When the total number of records exceeds the value of limit, increase the offset value in subsequent requests to continue getting the remaining results.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProjects(accessToken: string,accountId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>, filterClassification?: Array<Classification>, filterPlatform?: Array<Platform>, filterProducts?: Array<Products>, filterName?: string, filterType?: Array<string>, filterStatus?: Array<Status>, filterBusinessUnitId?: string, filterJobNumber?: string, filterUpdatedAt?: string, filterTextMatch?: FilterTextMatch, sort?: Array<SortBy>, limit?: number, offset?: number,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * ProjectsApi - object-oriented interface
 * @export
 * @class ProjectsApi
 * @extends {BaseApi}
 */
export class ProjectsApi extends BaseApi implements ProjectsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Creates a new project in the specified account. You can create the project directly, or clone the project from a project template.
     * @summary Create new Project
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectPayload} [projectPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async createProject(accessToken: string, accountId: string, acceptLanguage?: string, region?: Region, userId?: string, projectPayload?: ProjectPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createProject ");
      try {
        const request =  await ProjectsApiFp(this.sdkManager).createProject(accessToken, accountId, acceptLanguage, region, userId, projectPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createProject Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createProject Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`createProject Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createProject Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`createProject Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Create or update a project’s image.
     * @summary Create or update a project’s image
     * @param {string} projectId The account ID of the project. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} accountId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the BIM 360 API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async createProjectImage(accessToken: string, projectId: string, accountId: string, body: File, region?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createProjectImage ");
      try {
        const request =  await ProjectsApiFp(this.sdkManager).createProjectImage(accessToken, projectId, accountId, body, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createProjectImage Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createProjectImage Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`createProjectImage Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createProjectImage Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`createProjectImage Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves a project specified by project ID.
     * @summary Get a project by ID
     * @param {string} projectId 
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async getProject(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getProject ");
      try {
        const request =  await ProjectsApiFp(this.sdkManager).getProject(accessToken, projectId, acceptLanguage, region, userId, fields,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getProject Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getProject Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`getProject Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getProject Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`getProject Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves a list of the projects in the specified account.
     * @summary Get Project in account
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param {Array<Classification>} [filterClassification] A list of the classifications of projects to include in the response. Possible values: production, template, component, sample.
     * @param {Array<Platform>} [filterPlatform] Filter resource by platform. Possible values: acc and bim360.
     * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
     * @param {string} [filterName] A project name or name pattern to filter projects by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]=ABCco filterTextMatch=startsWith.  Max length: 255
     * @param {Array<string>} [filterType] A list of project types to filter projects by. To exclude a project type from the response, prefix it with - (a hyphen); for example, -Bridge excludes bridge projects.
     * @param {Array<Status>} [filterStatus] A list of the statuses of projects to include in the response. Possible values:  active pending archived suspended
     * @param {string} [filterBusinessUnitId] The ID of the business unit that returned projects must be associated with.
     * @param {string} [filterJobNumber] The user-defined identifier for a project to be returned. This ID was defined when the project was created. This filter accepts a partial match based on the value of filterTextMatch that you provide.
     * @param {string} [filterUpdatedAt] A range of dates during which the desired projects were updated. The range must be specified with dates in ISO 8601 format with time required. Separate multiple values with commas.
     * @param {FilterTextMatch} [filterTextMatch] When filtering on a text-based field, this value indicates how to do the matching. Default value: contains. Possible values: contains, startsWith, endsWith and equals.
     * @param {Array<SortBy>} [sort] A list of fields to sort the returned projects by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field.
     * @param {number} [limit] The maximum number of records to return in a single request. Possible range: 1-200. Default value: 20.
     * @param {number} [offset] The record number that the returned page should start with. When the total number of records exceeds the value of limit, increase the offset value in subsequent requests to continue getting the remaining results.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async getProjects(accessToken: string, accountId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>, filterClassification?: Array<Classification>, filterPlatform?: Array<Platform>, filterProducts?: Array<Products>, filterName?: string, filterType?: Array<string>, filterStatus?: Array<Status>, filterBusinessUnitId?: string, filterJobNumber?: string, filterUpdatedAt?: string, filterTextMatch?: FilterTextMatch, sort?: Array<SortBy>, limit?: number, offset?: number, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getProjects ");
      try {
        const request =  await ProjectsApiFp(this.sdkManager).getProjects(accessToken, accountId, acceptLanguage, region, userId, fields, filterClassification, filterPlatform, filterProducts, filterName, filterType, filterStatus, filterBusinessUnitId, filterJobNumber, filterUpdatedAt, filterTextMatch, sort, limit, offset,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getProjects Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getProjects Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`getProjects Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getProjects Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`getProjects Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

