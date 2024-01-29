/// <reference types="node" />
import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { Classification } from '../model';
import { Fields } from '../model';
import { FilterTextMatch } from '../model';
import { Platform } from '../model';
import { Products } from '../model';
import { Project } from '../model';
import { ProjectPatchResponse } from '../model';
import { ProjectPayload } from '../model';
import { Projects } from '../model';
import { Region } from '../model';
import { SortBy } from '../model';
import { Status } from '../model';
import { Type } from '../model';
/**
 * ProjectsApi - axios parameter creator
 * @export
 */
export declare const ProjectsApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
    /**
     * Creates a new project in the specified account. You can create the project directly, or clone the project from a project template.
     * @summary Create new Project
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectPayload} [projectPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProject: (accessToken: string, accountId: string, acceptLanguage?: string, region?: Region, userId?: string, projectPayload?: ProjectPayload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Create or update a project’s image.
     * @summary Create or update a project’s image
     * @param {string} projectId The account ID of the project. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} accountId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the BIM 360 API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProjectImage: (accessToken: string, projectId: string, accountId: string, body: Buffer, region?: Region, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Retrieves a project specified by project ID.
     * @summary Get a project by ID
     * @param {string} projectId
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProject: (accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Retrieves a list of the projects in the specified account.
     * @summary Get Project in account
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param {Array<Classification>} [filterClassification] A list of the classifications of projects to include in the response. Possible values: production, template, component, sample.
     * @param {Array<Platform>} [filterPlatform] Filter resource by platform. Possible values: acc and bim360.
     * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
     * @param {string} [filterName] A project name or name pattern to filter projects by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]&#x3D;ABCco filterTextMatch&#x3D;startsWith.  Max length: 255
     * @param {Array<Type>} [filterType] A list of project types to filter projects by. To exclude a project type from the response, prefix it with - (a hyphen); for example, -Bridge excludes bridge projects.
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
    getProjects: (accessToken: string, accountId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>, filterClassification?: Array<Classification>, filterPlatform?: Array<Platform>, filterProducts?: Array<Products>, filterName?: string, filterType?: Array<Type>, filterStatus?: Array<Status>, filterBusinessUnitId?: string, filterJobNumber?: string, filterUpdatedAt?: string, filterTextMatch?: FilterTextMatch, sort?: Array<SortBy>, limit?: number, offset?: number, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * ProjectsApi - functional programming interface
 * @export
 */
export declare const ProjectsApiFp: (sdkManager?: SDKManager) => {
    /**
     * Creates a new project in the specified account. You can create the project directly, or clone the project from a project template.
     * @summary Create new Project
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectPayload} [projectPayload]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProject(accessToken: string, accountId: string, acceptLanguage?: string, region?: Region, userId?: string, projectPayload?: ProjectPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>>;
    /**
     * Create or update a project’s image.
     * @summary Create or update a project’s image
     * @param {string} projectId The account ID of the project. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} accountId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the BIM 360 API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProjectImage(accessToken: string, projectId: string, accountId: string, body: Buffer, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectPatchResponse>>;
    /**
     * Retrieves a project specified by project ID.
     * @summary Get a project by ID
     * @param {string} projectId
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProject(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>>;
    /**
     * Retrieves a list of the projects in the specified account.
     * @summary Get Project in account
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param {Array<Classification>} [filterClassification] A list of the classifications of projects to include in the response. Possible values: production, template, component, sample.
     * @param {Array<Platform>} [filterPlatform] Filter resource by platform. Possible values: acc and bim360.
     * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
     * @param {string} [filterName] A project name or name pattern to filter projects by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]&#x3D;ABCco filterTextMatch&#x3D;startsWith.  Max length: 255
     * @param {Array<Type>} [filterType] A list of project types to filter projects by. To exclude a project type from the response, prefix it with - (a hyphen); for example, -Bridge excludes bridge projects.
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
    getProjects(accessToken: string, accountId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>, filterClassification?: Array<Classification>, filterPlatform?: Array<Platform>, filterProducts?: Array<Products>, filterName?: string, filterType?: Array<Type>, filterStatus?: Array<Status>, filterBusinessUnitId?: string, filterJobNumber?: string, filterUpdatedAt?: string, filterTextMatch?: FilterTextMatch, sort?: Array<SortBy>, limit?: number, offset?: number, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Projects>>;
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
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectPayload} [projectPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createProject(accessToken: string, accountId: string, acceptLanguage?: string, region?: Region, userId?: string, projectPayload?: ProjectPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Create or update a project’s image.
     * @summary Create or update a project’s image
     * @param {string} projectId The account ID of the project. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} accountId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the BIM 360 API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createProjectImage(accessToken: string, projectId: string, accountId: string, body: Buffer, region?: Region, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Retrieves a project specified by project ID.
     * @summary Get a project by ID
     * @param {string} projectId
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProject(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Retrieves a list of the projects in the specified account.
     * @summary Get Project in account
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param {Array<Classification>} [filterClassification] A list of the classifications of projects to include in the response. Possible values: production, template, component, sample.
     * @param {Array<Platform>} [filterPlatform] Filter resource by platform. Possible values: acc and bim360.
     * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
     * @param {string} [filterName] A project name or name pattern to filter projects by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]&#x3D;ABCco filterTextMatch&#x3D;startsWith.  Max length: 255
     * @param {Array<Type>} [filterType] A list of project types to filter projects by. To exclude a project type from the response, prefix it with - (a hyphen); for example, -Bridge excludes bridge projects.
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
    getProjects(accessToken: string, accountId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>, filterClassification?: Array<Classification>, filterPlatform?: Array<Platform>, filterProducts?: Array<Products>, filterName?: string, filterType?: Array<Type>, filterStatus?: Array<Status>, filterBusinessUnitId?: string, filterJobNumber?: string, filterUpdatedAt?: string, filterTextMatch?: FilterTextMatch, sort?: Array<SortBy>, limit?: number, offset?: number, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * ProjectsApi - object-oriented interface
 * @export
 * @class ProjectsApi
 * @extends {BaseAPI}
 */
export declare class ProjectsApi extends BaseAPI implements ProjectsApiInterface {
    private logger;
    /**
     * Creates a new project in the specified account. You can create the project directly, or clone the project from a project template.
     * @summary Create new Project
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectPayload} [projectPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    createProject(accessToken: string, accountId: string, acceptLanguage?: string, region?: Region, userId?: string, projectPayload?: ProjectPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Create or update a project’s image.
     * @summary Create or update a project’s image
     * @param {string} projectId The account ID of the project. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} accountId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the BIM 360 API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    createProjectImage(accessToken: string, projectId: string, accountId: string, body: Buffer, region?: Region, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Retrieves a project specified by project ID.
     * @summary Get a project by ID
     * @param {string} projectId
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    getProject(accessToken: string, projectId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Retrieves a list of the projects in the specified account.
     * @summary Get Project in account
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param {Array<Classification>} [filterClassification] A list of the classifications of projects to include in the response. Possible values: production, template, component, sample.
     * @param {Array<Platform>} [filterPlatform] Filter resource by platform. Possible values: acc and bim360.
     * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
     * @param {string} [filterName] A project name or name pattern to filter projects by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]&#x3D;ABCco filterTextMatch&#x3D;startsWith.  Max length: 255
     * @param {Array<Type>} [filterType] A list of project types to filter projects by. To exclude a project type from the response, prefix it with - (a hyphen); for example, -Bridge excludes bridge projects.
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
    getProjects(accessToken: string, accountId: string, acceptLanguage?: string, region?: Region, userId?: string, fields?: Array<Fields>, filterClassification?: Array<Classification>, filterPlatform?: Array<Platform>, filterProducts?: Array<Products>, filterName?: string, filterType?: Array<Type>, filterStatus?: Array<Status>, filterBusinessUnitId?: string, filterJobNumber?: string, filterUpdatedAt?: string, filterTextMatch?: FilterTextMatch, sort?: Array<SortBy>, limit?: number, offset?: number, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
