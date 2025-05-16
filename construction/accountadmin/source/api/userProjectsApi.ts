
import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { RequestArgs, BaseApi, RequiredError, ConstructionAccountAdminApiError } from '../base';
import { Classification } from '../model';
import { FilterTextMatch } from '../model';
import { FilterUserProjectsAccessLevels } from '../model';
import { Platform } from '../model';
import { Region } from '../model';
import { Status } from '../model';
import { UserProjectFields } from '../model';
import { UserProjectSortBy } from '../model';
import { UserProjectsPage } from '../model';
/**
 * UserProjectsApi - axios parameter creator
 * @export
 */
export const UserProjectsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Returns a list of projects for a specified user within an Autodesk Construction Cloud (ACC) or BIM 360 account. Only projects the user participates in will be returned. The calling user must be an account administrator.
         * @summary Get user projects
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
         * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page.
         * @param {string} [userId2] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
         * @param {Array<string>} [filterId] A list of project IDs to filter by.
         * @param {Array<UserProjectFields>} [fields] A comma-separated list of user project fields to include in the response. If not specified, all available fields are included by default. Possible values: accessLevels, accountId, addressLine1, addressLine2, city, constructionType, country, createdAt, classification, deliveryMethod, endDate, imageUrl, jobNumber, latitude, longitude, name, platform, postalCode, projectValue, sheetCount, startDate, stateOrProvince, status, thumbnailImageUrl, timezone, type, updatedAt, contractType and currentPhase.
         * @param {Array<Classification>} [filterClassification] Filters projects by classification. Possible values: production – Standard production projects. template – Project templates that can be cloned to create production projects. component – Placeholder projects that contain standardized components (e.g., forms) for use across projects. Only one component project is permitted per account. Known as a library in the ACC unified products UI. sample – The single sample project automatically created upon ACC trial setup. Only one sample project is permitted per account.  Max length: 255
         * @param {string} [filterName] Filters projects by name. Supports partial matches when used with filterTextMatch. For example filter[name]=ABCco&filterTextMatch=startsWith returns projects whose names start with “ABCco”. Max length: 255
         * @param {Array<Platform>} [filterPlatform] Filters by platform. Possible values: acc (Autodesk Construction Cloud) and bim360 (BIM 360). Max length: 255
         * @param {Array<Status>} [filterStatus] Filters projects by status. Possible values: active, pending, archived, suspended.
         * @param {Array<string>} [filterType] Filters by project type. To exclude a type, prefix it with - (e.g., -Bridge excludes bridge projects). Possible values: Airport, Assisted Living / Nursing Home, Bridge, Canal / Waterway, Convention Center, Court House, Data Center, Dams / Flood Control / Reservoirs, Demonstration Project, Dormitory, Education Facility, Government Building, Harbor / River Development, Hospital, Hotel / Motel, Library, Manufacturing / Factory, Medical Laboratory, Medical Office, Military Facility, Mining Facility, Multi-Family Housing, Museum, Oil & Gas,``Plant``, Office, OutPatient Surgery Center, Parking Structure / Garage, Performing Arts, Power Plant, Prison / Correctional Facility, Rail, Recreation Building, Religious Building, Research Facility / Laboratory, Restaurant, Retail, Seaport, Single-Family Housing, Solar Farm, Stadium/Arena, Streets / Roads / Highways, Template Project, Theme Park, Training Project, Transportation Building, Tunnel, Utilities, Warehouse (non-manufacturing), Waste Water / Sewers, Water Supply, Wind Farm.
         * @param {string} [filterJobNumber] Filters by a user-defined project identifier. Supports partial matches when used with filterTextMatch. For example, filter[jobNumber]=HP-0002&filterTextMatch=equals returns projects where the job number is exactly “HP-0002”. Max length: 255
         * @param {string} [filterUpdatedAt] Filters projects updated within a specific date range in ISO 8601 format. For example: Date range: 2023-03-02T00:00:00.000Z..2023-03-03T23:59:59 .999Z Specific start date: 2023-03-02T00:00:00.000Z.. Specific end date: ..2023-03-02T23:59:59.999Z  For more details, see JSON API Filtering.  Max length: 100
         * @param {Array<FilterUserProjectsAccessLevels>} [filterAccessLevels] Filters projects by user access level. Possible values: projectAdmin, projectMember. Max length: 255
         * @param {FilterTextMatch} [filterTextMatch] Defines how text-based filters should match results. Possible values: contains (default) – Returns results where the text appears anywhere in the field. startsWith – Matches only if the field starts with the given value. endsWith – Matches only if the field ends with the given value. equals – Matches only if the field is an exact match.
         * @param {Array<UserProjectSortBy>} [sort] A list of fields to sort the returned user projects by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). The default is asc.  Possible values: name (the default), startDate, endDate, type, status, jobNumber, constructionType, deliveryMethod, contractType, currentPhase, createdAt, updatedAt and platform.
         * @param {number} [limit] The maximum number of records per request. Default: 20. Minimum: 1, Maximum: 200. If a value greater than 200 is provided, only 200 records are returned.
         * @param {number} [offset] The record number to start returning results from, used for pagination. For example, if limit=20 and offset=20, the request retrieves the second page of results.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserProjects: async (accessToken: string, accountId: string, userId: string, region?: Region, userId2?: string, filterId?: Array<string>, fields?: Array<UserProjectFields>, filterClassification?: Array<Classification>, filterName?: string, filterPlatform?: Array<Platform>, filterStatus?: Array<Status>, filterType?: Array<string>, filterJobNumber?: string, filterUpdatedAt?: string, filterAccessLevels?: Array<FilterUserProjectsAccessLevels>, filterTextMatch?: FilterTextMatch, sort?: Array<UserProjectSortBy>, limit?: number, offset?: number,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getUserProjects', 'accountId', accountId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUserProjects', 'userId', userId)
            const localVarPath = `/construction/admin/v1/accounts/{accountId}/users/{userId}/projects`
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

            if (filterId) {
                localVarQueryParameter['filter[id]'] = filterId;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (filterClassification) {
                localVarQueryParameter['filter[classification]'] = filterClassification;
            }

            if (filterName !== undefined) {
                localVarQueryParameter['filter[name]'] = filterName;
            }

            if (filterPlatform) {
                localVarQueryParameter['filter[platform]'] = filterPlatform;
            }

            if (filterStatus) {
                localVarQueryParameter['filter[status]'] = filterStatus;
            }

            if (filterType) {
                localVarQueryParameter['filter[type]'] = filterType;
            }

            if (filterJobNumber !== undefined) {
                localVarQueryParameter['filter[jobNumber]'] = filterJobNumber;
            }

            if (filterUpdatedAt !== undefined) {
                localVarQueryParameter['filter[updatedAt]'] = filterUpdatedAt;
            }

            if (filterAccessLevels) {
                localVarQueryParameter['filter[accessLevels]'] = filterAccessLevels;
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

            if (region != null) {
                localVarHeaderParameter['Region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }

            if (userId2 != null) {
                localVarHeaderParameter['User-Id'] = String(userId2);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTIONACCOUNTADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserProjectsApi - functional programming interface
 * @export
 */
export const UserProjectsApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = UserProjectsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Returns a list of projects for a specified user within an Autodesk Construction Cloud (ACC) or BIM 360 account. Only projects the user participates in will be returned. The calling user must be an account administrator.
         * @summary Get user projects
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
         * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page.
         * @param {string} [userId2] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
         * @param {Array<string>} [filterId] A list of project IDs to filter by.
         * @param {Array<UserProjectFields>} [fields] A comma-separated list of user project fields to include in the response. If not specified, all available fields are included by default. Possible values: accessLevels, accountId, addressLine1, addressLine2, city, constructionType, country, createdAt, classification, deliveryMethod, endDate, imageUrl, jobNumber, latitude, longitude, name, platform, postalCode, projectValue, sheetCount, startDate, stateOrProvince, status, thumbnailImageUrl, timezone, type, updatedAt, contractType and currentPhase.
         * @param {Array<Classification>} [filterClassification] Filters projects by classification. Possible values: production – Standard production projects. template – Project templates that can be cloned to create production projects. component – Placeholder projects that contain standardized components (e.g., forms) for use across projects. Only one component project is permitted per account. Known as a library in the ACC unified products UI. sample – The single sample project automatically created upon ACC trial setup. Only one sample project is permitted per account.  Max length: 255
         * @param {string} [filterName] Filters projects by name. Supports partial matches when used with filterTextMatch. For example filter[name]=ABCco&filterTextMatch=startsWith returns projects whose names start with “ABCco”. Max length: 255
         * @param {Array<Platform>} [filterPlatform] Filters by platform. Possible values: acc (Autodesk Construction Cloud) and bim360 (BIM 360). Max length: 255
         * @param {Array<Status>} [filterStatus] Filters projects by status. Possible values: active, pending, archived, suspended.
         * @param {Array<string>} [filterType] Filters by project type. To exclude a type, prefix it with - (e.g., -Bridge excludes bridge projects). Possible values: Airport, Assisted Living / Nursing Home, Bridge, Canal / Waterway, Convention Center, Court House, Data Center, Dams / Flood Control / Reservoirs, Demonstration Project, Dormitory, Education Facility, Government Building, Harbor / River Development, Hospital, Hotel / Motel, Library, Manufacturing / Factory, Medical Laboratory, Medical Office, Military Facility, Mining Facility, Multi-Family Housing, Museum, Oil & Gas,``Plant``, Office, OutPatient Surgery Center, Parking Structure / Garage, Performing Arts, Power Plant, Prison / Correctional Facility, Rail, Recreation Building, Religious Building, Research Facility / Laboratory, Restaurant, Retail, Seaport, Single-Family Housing, Solar Farm, Stadium/Arena, Streets / Roads / Highways, Template Project, Theme Park, Training Project, Transportation Building, Tunnel, Utilities, Warehouse (non-manufacturing), Waste Water / Sewers, Water Supply, Wind Farm.
         * @param {string} [filterJobNumber] Filters by a user-defined project identifier. Supports partial matches when used with filterTextMatch. For example, filter[jobNumber]=HP-0002&filterTextMatch=equals returns projects where the job number is exactly “HP-0002”. Max length: 255
         * @param {string} [filterUpdatedAt] Filters projects updated within a specific date range in ISO 8601 format. For example: Date range: 2023-03-02T00:00:00.000Z..2023-03-03T23:59:59 .999Z Specific start date: 2023-03-02T00:00:00.000Z.. Specific end date: ..2023-03-02T23:59:59.999Z  For more details, see JSON API Filtering.  Max length: 100
         * @param {Array<FilterUserProjectsAccessLevels>} [filterAccessLevels] Filters projects by user access level. Possible values: projectAdmin, projectMember. Max length: 255
         * @param {FilterTextMatch} [filterTextMatch] Defines how text-based filters should match results. Possible values: contains (default) – Returns results where the text appears anywhere in the field. startsWith – Matches only if the field starts with the given value. endsWith – Matches only if the field ends with the given value. equals – Matches only if the field is an exact match.
         * @param {Array<UserProjectSortBy>} [sort] A list of fields to sort the returned user projects by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). The default is asc.  Possible values: name (the default), startDate, endDate, type, status, jobNumber, constructionType, deliveryMethod, contractType, currentPhase, createdAt, updatedAt and platform.
         * @param {number} [limit] The maximum number of records per request. Default: 20. Minimum: 1, Maximum: 200. If a value greater than 200 is provided, only 200 records are returned.
         * @param {number} [offset] The record number to start returning results from, used for pagination. For example, if limit=20 and offset=20, the request retrieves the second page of results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserProjects(accessToken: string, accountId: string, userId: string, region?: Region, userId2?: string, filterId?: Array<string>, fields?: Array<UserProjectFields>, filterClassification?: Array<Classification>, filterName?: string, filterPlatform?: Array<Platform>, filterStatus?: Array<Status>, filterType?: Array<string>, filterJobNumber?: string, filterUpdatedAt?: string, filterAccessLevels?: Array<FilterUserProjectsAccessLevels>, filterTextMatch?: FilterTextMatch, sort?: Array<UserProjectSortBy>, limit?: number, offset?: number, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserProjectsPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserProjects(accessToken, accountId, userId, region, userId2, filterId, fields, filterClassification, filterName, filterPlatform, filterStatus, filterType, filterJobNumber, filterUpdatedAt, filterAccessLevels, filterTextMatch, sort, limit, offset,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * UserProjectsApi - interface
 * @export
 * @interface UserProjectsApi
 */
export interface UserProjectsApiInterface {
    /**
     * Returns a list of projects for a specified user within an Autodesk Construction Cloud (ACC) or BIM 360 account. Only projects the user participates in will be returned. The calling user must be an account administrator.
     * @summary Get user projects
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page.
     * @param {string} [userId2] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
     * @param {Array<string>} [filterId] A list of project IDs to filter by.
     * @param {Array<UserProjectFields>} [fields] A comma-separated list of user project fields to include in the response. If not specified, all available fields are included by default. Possible values: accessLevels, accountId, addressLine1, addressLine2, city, constructionType, country, createdAt, classification, deliveryMethod, endDate, imageUrl, jobNumber, latitude, longitude, name, platform, postalCode, projectValue, sheetCount, startDate, stateOrProvince, status, thumbnailImageUrl, timezone, type, updatedAt, contractType and currentPhase.
     * @param {Array<Classification>} [filterClassification] Filters projects by classification. Possible values: production – Standard production projects. template – Project templates that can be cloned to create production projects. component – Placeholder projects that contain standardized components (e.g., forms) for use across projects. Only one component project is permitted per account. Known as a library in the ACC unified products UI. sample – The single sample project automatically created upon ACC trial setup. Only one sample project is permitted per account.  Max length: 255
     * @param {string} [filterName] Filters projects by name. Supports partial matches when used with filterTextMatch. For example filter[name]=ABCco&filterTextMatch=startsWith returns projects whose names start with “ABCco”. Max length: 255
     * @param {Array<Platform>} [filterPlatform] Filters by platform. Possible values: acc (Autodesk Construction Cloud) and bim360 (BIM 360). Max length: 255
     * @param {Array<Status>} [filterStatus] Filters projects by status. Possible values: active, pending, archived, suspended.
     * @param {Array<string>} [filterType] Filters by project type. To exclude a type, prefix it with - (e.g., -Bridge excludes bridge projects). Possible values: Airport, Assisted Living / Nursing Home, Bridge, Canal / Waterway, Convention Center, Court House, Data Center, Dams / Flood Control / Reservoirs, Demonstration Project, Dormitory, Education Facility, Government Building, Harbor / River Development, Hospital, Hotel / Motel, Library, Manufacturing / Factory, Medical Laboratory, Medical Office, Military Facility, Mining Facility, Multi-Family Housing, Museum, Oil & Gas,``Plant``, Office, OutPatient Surgery Center, Parking Structure / Garage, Performing Arts, Power Plant, Prison / Correctional Facility, Rail, Recreation Building, Religious Building, Research Facility / Laboratory, Restaurant, Retail, Seaport, Single-Family Housing, Solar Farm, Stadium/Arena, Streets / Roads / Highways, Template Project, Theme Park, Training Project, Transportation Building, Tunnel, Utilities, Warehouse (non-manufacturing), Waste Water / Sewers, Water Supply, Wind Farm.
     * @param {string} [filterJobNumber] Filters by a user-defined project identifier. Supports partial matches when used with filterTextMatch. For example, filter[jobNumber]=HP-0002&filterTextMatch=equals returns projects where the job number is exactly “HP-0002”. Max length: 255
     * @param {string} [filterUpdatedAt] Filters projects updated within a specific date range in ISO 8601 format. For example: Date range: 2023-03-02T00:00:00.000Z..2023-03-03T23:59:59 .999Z Specific start date: 2023-03-02T00:00:00.000Z.. Specific end date: ..2023-03-02T23:59:59.999Z  For more details, see JSON API Filtering.  Max length: 100
     * @param {Array<FilterUserProjectsAccessLevels>} [filterAccessLevels] Filters projects by user access level. Possible values: projectAdmin, projectMember. Max length: 255
     * @param {FilterTextMatch} [filterTextMatch] Defines how text-based filters should match results. Possible values: contains (default) – Returns results where the text appears anywhere in the field. startsWith – Matches only if the field starts with the given value. endsWith – Matches only if the field ends with the given value. equals – Matches only if the field is an exact match.
     * @param {Array<UserProjectSortBy>} [sort] A list of fields to sort the returned user projects by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). The default is asc.  Possible values: name (the default), startDate, endDate, type, status, jobNumber, constructionType, deliveryMethod, contractType, currentPhase, createdAt, updatedAt and platform.
     * @param {number} [limit] The maximum number of records per request. Default: 20. Minimum: 1, Maximum: 200. If a value greater than 200 is provided, only 200 records are returned.
     * @param {number} [offset] The record number to start returning results from, used for pagination. For example, if limit=20 and offset=20, the request retrieves the second page of results.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserProjectsApiInterface
     */
    getUserProjects(accessToken: string,accountId: string, userId: string, region?: Region, userId2?: string, filterId?: Array<string>, fields?: Array<UserProjectFields>, filterClassification?: Array<Classification>, filterName?: string, filterPlatform?: Array<Platform>, filterStatus?: Array<Status>, filterType?: Array<string>, filterJobNumber?: string, filterUpdatedAt?: string, filterAccessLevels?: Array<FilterUserProjectsAccessLevels>, filterTextMatch?: FilterTextMatch, sort?: Array<UserProjectSortBy>, limit?: number, offset?: number,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * UserProjectsApi - object-oriented interface
 * @export
 * @class UserProjectsApi
 * @extends {BaseApi}
 */
export class UserProjectsApi extends BaseApi implements UserProjectsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Returns a list of projects for a specified user within an Autodesk Construction Cloud (ACC) or BIM 360 account. Only projects the user participates in will be returned. The calling user must be an account administrator.
     * @summary Get user projects
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page.
     * @param {string} [userId2] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
     * @param {Array<string>} [filterId] A list of project IDs to filter by.
     * @param {Array<UserProjectFields>} [fields] A comma-separated list of user project fields to include in the response. If not specified, all available fields are included by default. Possible values: accessLevels, accountId, addressLine1, addressLine2, city, constructionType, country, createdAt, classification, deliveryMethod, endDate, imageUrl, jobNumber, latitude, longitude, name, platform, postalCode, projectValue, sheetCount, startDate, stateOrProvince, status, thumbnailImageUrl, timezone, type, updatedAt, contractType and currentPhase.
     * @param {Array<Classification>} [filterClassification] Filters projects by classification. Possible values: production – Standard production projects. template – Project templates that can be cloned to create production projects. component – Placeholder projects that contain standardized components (e.g., forms) for use across projects. Only one component project is permitted per account. Known as a library in the ACC unified products UI. sample – The single sample project automatically created upon ACC trial setup. Only one sample project is permitted per account.  Max length: 255
     * @param {string} [filterName] Filters projects by name. Supports partial matches when used with filterTextMatch. For example filter[name]=ABCco&filterTextMatch=startsWith returns projects whose names start with “ABCco”. Max length: 255
     * @param {Array<Platform>} [filterPlatform] Filters by platform. Possible values: acc (Autodesk Construction Cloud) and bim360 (BIM 360). Max length: 255
     * @param {Array<Status>} [filterStatus] Filters projects by status. Possible values: active, pending, archived, suspended.
     * @param {Array<string>} [filterType] Filters by project type. To exclude a type, prefix it with - (e.g., -Bridge excludes bridge projects). Possible values: Airport, Assisted Living / Nursing Home, Bridge, Canal / Waterway, Convention Center, Court House, Data Center, Dams / Flood Control / Reservoirs, Demonstration Project, Dormitory, Education Facility, Government Building, Harbor / River Development, Hospital, Hotel / Motel, Library, Manufacturing / Factory, Medical Laboratory, Medical Office, Military Facility, Mining Facility, Multi-Family Housing, Museum, Oil & Gas,``Plant``, Office, OutPatient Surgery Center, Parking Structure / Garage, Performing Arts, Power Plant, Prison / Correctional Facility, Rail, Recreation Building, Religious Building, Research Facility / Laboratory, Restaurant, Retail, Seaport, Single-Family Housing, Solar Farm, Stadium/Arena, Streets / Roads / Highways, Template Project, Theme Park, Training Project, Transportation Building, Tunnel, Utilities, Warehouse (non-manufacturing), Waste Water / Sewers, Water Supply, Wind Farm.
     * @param {string} [filterJobNumber] Filters by a user-defined project identifier. Supports partial matches when used with filterTextMatch. For example, filter[jobNumber]=HP-0002&filterTextMatch=equals returns projects where the job number is exactly “HP-0002”. Max length: 255
     * @param {string} [filterUpdatedAt] Filters projects updated within a specific date range in ISO 8601 format. For example: Date range: 2023-03-02T00:00:00.000Z..2023-03-03T23:59:59 .999Z Specific start date: 2023-03-02T00:00:00.000Z.. Specific end date: ..2023-03-02T23:59:59.999Z  For more details, see JSON API Filtering.  Max length: 100
     * @param {Array<FilterUserProjectsAccessLevels>} [filterAccessLevels] Filters projects by user access level. Possible values: projectAdmin, projectMember. Max length: 255
     * @param {FilterTextMatch} [filterTextMatch] Defines how text-based filters should match results. Possible values: contains (default) – Returns results where the text appears anywhere in the field. startsWith – Matches only if the field starts with the given value. endsWith – Matches only if the field ends with the given value. equals – Matches only if the field is an exact match.
     * @param {Array<UserProjectSortBy>} [sort] A list of fields to sort the returned user projects by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). The default is asc.  Possible values: name (the default), startDate, endDate, type, status, jobNumber, constructionType, deliveryMethod, contractType, currentPhase, createdAt, updatedAt and platform.
     * @param {number} [limit] The maximum number of records per request. Default: 20. Minimum: 1, Maximum: 200. If a value greater than 200 is provided, only 200 records are returned.
     * @param {number} [offset] The record number to start returning results from, used for pagination. For example, if limit=20 and offset=20, the request retrieves the second page of results.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserProjectsApi
     */
    public async getUserProjects(accessToken: string, accountId: string, userId: string, region?: Region, userId2?: string, filterId?: Array<string>, fields?: Array<UserProjectFields>, filterClassification?: Array<Classification>, filterName?: string, filterPlatform?: Array<Platform>, filterStatus?: Array<Status>, filterType?: Array<string>, filterJobNumber?: string, filterUpdatedAt?: string, filterAccessLevels?: Array<FilterUserProjectsAccessLevels>, filterTextMatch?: FilterTextMatch, sort?: Array<UserProjectSortBy>, limit?: number, offset?: number, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getUserProjects ");
      try {
        const request =  await UserProjectsApiFp(this.sdkManager).getUserProjects(accessToken, accountId, userId, region, userId2, filterId, fields, filterClassification, filterName, filterPlatform, filterStatus, filterType, filterJobNumber, filterUpdatedAt, filterAccessLevels, filterTextMatch, sort, limit, offset,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getUserProjects Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getUserProjects Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`getUserProjects Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getUserProjects Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`getUserProjects Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

