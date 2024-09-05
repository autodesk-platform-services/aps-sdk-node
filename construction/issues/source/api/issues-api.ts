/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ConstructionIssuesApiError } from '../base';
import { Fields } from '../model';
import { Issue } from '../model';
import { IssuePayload } from '../model';
import { IssuesPage } from '../model';
import { Region } from '../model';
import { SortBy } from '../model';
/**
 * IssuesApi - axios parameter creator
 * @export
 */
export const IssuesApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Adds an issue to a project.
         * @summary 
         * @param {string} projectId The ID of the project.
         * @param {Region} [xAdsRegion] 
         * @param {IssuePayload} [issuePayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createIssue: async (accessToken: string, projectId: string, xAdsRegion?: Region, issuePayload?: IssuePayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createIssue', 'projectId', projectId)
            const localVarPath = `/construction/issues/v1/projects/{projectId}/issues`
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

            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ISSUES/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(issuePayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves detailed information about a single issue. For general information about all the issues in a project.
         * @summary Your GET endpoint
         * @param {string} projectId The ID of the project.
         * @param {string} issueId The unique identifier of the issue.
         * @param {Region} [xAdsRegion] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getIssueDetails: async (accessToken: string, projectId: string, issueId: string, xAdsRegion?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getIssueDetails', 'projectId', projectId)
            // verify required parameter 'issueId' is not null or undefined
            assertParamExists('getIssueDetails', 'issueId', issueId)
            const localVarPath = `/construction/issues/v1/projects/{projectId}/issues/{issueId}`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"issueId"}}`, encodeURIComponent(String(issueId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ISSUES/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves information about all the issues in a project, including details about their associated comments and attachments.
         * @summary Your GET endpoint
         * @param {string} projectId The ID of the project.
         * @param {Array<string>} [filterId] Filter issues by the unique issue ID. Separate multiple values with commas.
         * @param {Array<string>} [filterIssueTypeId] Filter issues by the unique identifier of the category of the issue. Note that the API name for category is type. Separate multiple values with commas.
         * @param {Array<string>} [filterIssueSubtypeId] Filter issues by the unique identifier of the type of the issue. Note that the API name for type is subtype. Separate multiple values with commas.
         * @param {string} [filterStatus] Filter issues by their status. Separate multiple values with commas.
         * @param {Array<string>} [filterLinkedDocumentUrn] Retrieves pushpin issues associated with the specified files. We support all file types that are compatible with the Files tool. You need to specify the URL-encoded file item IDs.
         * @param {Region} [xAdsRegion] 
         * @param {string} [filterDueDate] Filter issues by due date, in one of the following URL-encoded format: YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterStartDate] Filter issues by start date, in one of the following URL-encoded format: YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterCreatedAt] Filter issues created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas
         * @param {Array<string>} [filterCreatedBy] Filter issues by the unique identifier of the user who created the issue. Separate multiple values with commas.
         * @param {string} [filterUpdatedAt] Filter issues updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas. 
         * @param {Array<string>} [filterUpdatedBy] Filter issues by the unique identifier of the user who updated the issue. Separate multiple values with commas.
         * @param {Array<string>} [filterAssignedTo] Filter issues by the unique Autodesk ID of the User/Company/Role identifier of the current assignee of this issue. Separate multiple values with commas.
         * @param {Array<string>} [filterRootCauseId] Filter issues by the unique identifier of the type of root cause for the issue. Separate multiple values with commas.
         * @param {Array<string>} [filterLocationId] Retrieves issues associated with the specified location but not the location’s sublocations. To also retrieve issues that relate to the locations’s sublocations use the sublocationId filter. Separate multiple values with commas.
         * @param {Array<string>} [filterSubLocationId] Retrieves issues associated with the specified unique LBS (Location Breakdown Structure) identifier, as well as issues associated with the sub locations of the LBS identifier. Separate multiple values with commas.
         * @param {Array<string>} [filterClosedBy] Filter issues by the unique identifier of the user who closed the issue. Separate multiple values with commas. For Example: A3RGM375QTZ7.
         * @param {string} [filterClosedAt] Filter issues closed at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterSearch] Filter issues using ‘search’ criteria. this will filter both title and issues display ID. For example, use filter[search]&#x3D;300
         * @param {number} [filterDisplayId] Filter issues by the chronological user-friendly identifier. Separate multiple values with commas.
         * @param {string} [filterAssignedToType] Filter issues by the type of the current assignee of this issue. Separate multiple values with commas. Possible values: Possible values: user, company, role, null. For Example: user.
         * @param {Array<string>} [filterCustomAttributes] Filter issues by the custom attributes. Each custom attribute filter should be defined by it’s uuid. For example: filter[customAttributes][f227d940-ae9b-4722-9297-389f4411f010]&#x3D;1,2,3. Separate multiple values with commas.
         * @param {boolean} [filterValid] Only return valid issues (&#x3D;no empty type/subtype). Default value: undefined (meaning will return both valid &amp; invalid issues).
         * @param {number} [limit] Return specified number of issues. Acceptable values are 1-100. Default value: 100.
         * @param {number} [offset] Return issues starting from the specified offset number. Default value: 0.
         * @param {Array<SortBy>} [sortBy] Sort issue comments by specified fields. Separate multiple values with commas. To sort in descending order add a - (minus sign) before the sort criteria
         * @param {Array<Fields>} [fields] Return only specific fields in issue object. Separate multiple values with commas.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getIssues: async (accessToken: string, projectId: string, filterId?: Array<string>, filterIssueTypeId?: Array<string>, filterIssueSubtypeId?: Array<string>, filterStatus?: string, filterLinkedDocumentUrn?: Array<string>, xAdsRegion?: Region, filterDueDate?: string, filterStartDate?: string, filterCreatedAt?: string, filterCreatedBy?: Array<string>, filterUpdatedAt?: string, filterUpdatedBy?: Array<string>, filterAssignedTo?: Array<string>, filterRootCauseId?: Array<string>, filterLocationId?: Array<string>, filterSubLocationId?: Array<string>, filterClosedBy?: Array<string>, filterClosedAt?: string, filterSearch?: string, filterDisplayId?: number, filterAssignedToType?: string, filterCustomAttributes?: Array<string>, filterValid?: boolean, limit?: number, offset?: number, sortBy?: Array<SortBy>, fields?: Array<Fields>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getIssues', 'projectId', projectId)
            const localVarPath = `/construction/issues/v1/projects/{projectId}/issues`
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

            if (filterId) {
                localVarQueryParameter['filter[id]'] = filterId;
            }

            if (filterIssueTypeId) {
                localVarQueryParameter['filter[issueTypeId]'] = filterIssueTypeId;
            }

            if (filterIssueSubtypeId) {
                localVarQueryParameter['filter[issueSubtypeId]'] = filterIssueSubtypeId;
            }

            if (filterStatus !== undefined) {
                localVarQueryParameter['filter[status]'] = filterStatus;
            }

            if (filterLinkedDocumentUrn) {
                localVarQueryParameter['filter[linkedDocumentUrn]'] = filterLinkedDocumentUrn;
            }

            if (filterDueDate !== undefined) {
                localVarQueryParameter['filter[dueDate]'] = filterDueDate;
            }

            if (filterStartDate !== undefined) {
                localVarQueryParameter['filter[startDate]'] = filterStartDate;
            }

            if (filterCreatedAt !== undefined) {
                localVarQueryParameter['filter[createdAt]'] = filterCreatedAt;
            }

            if (filterCreatedBy) {
                localVarQueryParameter['filter[createdBy]'] = filterCreatedBy;
            }

            if (filterUpdatedAt !== undefined) {
                localVarQueryParameter['filter[updatedAt]'] = filterUpdatedAt;
            }

            if (filterUpdatedBy) {
                localVarQueryParameter['filter[updatedBy]'] = filterUpdatedBy;
            }

            if (filterAssignedTo) {
                localVarQueryParameter['filter[assignedTo]'] = filterAssignedTo;
            }

            if (filterRootCauseId) {
                localVarQueryParameter['filter[rootCauseId]'] = filterRootCauseId;
            }

            if (filterLocationId) {
                localVarQueryParameter['filter[locationId]'] = filterLocationId;
            }

            if (filterSubLocationId) {
                localVarQueryParameter['filter[subLocationId]'] = filterSubLocationId;
            }

            if (filterClosedBy) {
                localVarQueryParameter['filter[closedBy]'] = filterClosedBy;
            }

            if (filterClosedAt !== undefined) {
                localVarQueryParameter['filter[closedAt]'] = filterClosedAt;
            }

            if (filterSearch !== undefined) {
                localVarQueryParameter['filter[search]'] = filterSearch;
            }

            if (filterDisplayId !== undefined) {
                localVarQueryParameter['filter[displayId]'] = filterDisplayId;
            }

            if (filterAssignedToType !== undefined) {
                localVarQueryParameter['filter[assignedToType]'] = filterAssignedToType;
            }

            if (filterCustomAttributes) {
                localVarQueryParameter['filter[customAttributes]'] = filterCustomAttributes;
            }

            if (filterValid !== undefined) {
                localVarQueryParameter['filter[valid]'] = filterValid;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (sortBy) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ISSUES/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates an issue.  To verify whether a user can update issues for a specific project, call GET users/me.  To verify which attributes the user can update, call GET issues/:id and check the permittedAttributes and permittedStatuses lists.
         * @summary 
         * @param {string} projectId The ID of the project.
         * @param {string} issueId The unique identifier of the issue.
         * @param {Region} [xAdsRegion] 
         * @param {IssuePayload} [issuePayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchIssueDetails: async (accessToken: string, projectId: string, issueId: string, xAdsRegion?: Region, issuePayload?: IssuePayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('patchIssueDetails', 'projectId', projectId)
            // verify required parameter 'issueId' is not null or undefined
            assertParamExists('patchIssueDetails', 'issueId', issueId)
            const localVarPath = `/construction/issues/v1/projects/{projectId}/issues/{issueId}`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"issueId"}}`, encodeURIComponent(String(issueId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ISSUES/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(issuePayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * IssuesApi - functional programming interface
 * @export
 */
export const IssuesApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = IssuesApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Adds an issue to a project.
         * @summary 
         * @param {string} projectId The ID of the project.
         * @param {Region} [xAdsRegion] 
         * @param {IssuePayload} [issuePayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createIssue(accessToken: string, projectId: string, xAdsRegion?: Region, issuePayload?: IssuePayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Issue>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createIssue(accessToken, projectId, xAdsRegion, issuePayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves detailed information about a single issue. For general information about all the issues in a project.
         * @summary Your GET endpoint
         * @param {string} projectId The ID of the project.
         * @param {string} issueId The unique identifier of the issue.
         * @param {Region} [xAdsRegion] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getIssueDetails(accessToken: string, projectId: string, issueId: string, xAdsRegion?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Issue>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIssueDetails(accessToken, projectId, issueId, xAdsRegion,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves information about all the issues in a project, including details about their associated comments and attachments.
         * @summary Your GET endpoint
         * @param {string} projectId The ID of the project.
         * @param {Array<string>} [filterId] Filter issues by the unique issue ID. Separate multiple values with commas.
         * @param {Array<string>} [filterIssueTypeId] Filter issues by the unique identifier of the category of the issue. Note that the API name for category is type. Separate multiple values with commas.
         * @param {Array<string>} [filterIssueSubtypeId] Filter issues by the unique identifier of the type of the issue. Note that the API name for type is subtype. Separate multiple values with commas.
         * @param {string} [filterStatus] Filter issues by their status. Separate multiple values with commas.
         * @param {Array<string>} [filterLinkedDocumentUrn] Retrieves pushpin issues associated with the specified files. We support all file types that are compatible with the Files tool. You need to specify the URL-encoded file item IDs.
         * @param {Region} [xAdsRegion] 
         * @param {string} [filterDueDate] Filter issues by due date, in one of the following URL-encoded format: YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterStartDate] Filter issues by start date, in one of the following URL-encoded format: YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterCreatedAt] Filter issues created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas
         * @param {Array<string>} [filterCreatedBy] Filter issues by the unique identifier of the user who created the issue. Separate multiple values with commas.
         * @param {string} [filterUpdatedAt] Filter issues updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas. 
         * @param {Array<string>} [filterUpdatedBy] Filter issues by the unique identifier of the user who updated the issue. Separate multiple values with commas.
         * @param {Array<string>} [filterAssignedTo] Filter issues by the unique Autodesk ID of the User/Company/Role identifier of the current assignee of this issue. Separate multiple values with commas.
         * @param {Array<string>} [filterRootCauseId] Filter issues by the unique identifier of the type of root cause for the issue. Separate multiple values with commas.
         * @param {Array<string>} [filterLocationId] Retrieves issues associated with the specified location but not the location’s sublocations. To also retrieve issues that relate to the locations’s sublocations use the sublocationId filter. Separate multiple values with commas.
         * @param {Array<string>} [filterSubLocationId] Retrieves issues associated with the specified unique LBS (Location Breakdown Structure) identifier, as well as issues associated with the sub locations of the LBS identifier. Separate multiple values with commas.
         * @param {Array<string>} [filterClosedBy] Filter issues by the unique identifier of the user who closed the issue. Separate multiple values with commas. For Example: A3RGM375QTZ7.
         * @param {string} [filterClosedAt] Filter issues closed at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterSearch] Filter issues using ‘search’ criteria. this will filter both title and issues display ID. For example, use filter[search]&#x3D;300
         * @param {number} [filterDisplayId] Filter issues by the chronological user-friendly identifier. Separate multiple values with commas.
         * @param {string} [filterAssignedToType] Filter issues by the type of the current assignee of this issue. Separate multiple values with commas. Possible values: Possible values: user, company, role, null. For Example: user.
         * @param {Array<string>} [filterCustomAttributes] Filter issues by the custom attributes. Each custom attribute filter should be defined by it’s uuid. For example: filter[customAttributes][f227d940-ae9b-4722-9297-389f4411f010]&#x3D;1,2,3. Separate multiple values with commas.
         * @param {boolean} [filterValid] Only return valid issues (&#x3D;no empty type/subtype). Default value: undefined (meaning will return both valid &amp; invalid issues).
         * @param {number} [limit] Return specified number of issues. Acceptable values are 1-100. Default value: 100.
         * @param {number} [offset] Return issues starting from the specified offset number. Default value: 0.
         * @param {Array<SortBy>} [sortBy] Sort issue comments by specified fields. Separate multiple values with commas. To sort in descending order add a - (minus sign) before the sort criteria
         * @param {Array<Fields>} [fields] Return only specific fields in issue object. Separate multiple values with commas.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getIssues(accessToken: string, projectId: string, filterId?: Array<string>, filterIssueTypeId?: Array<string>, filterIssueSubtypeId?: Array<string>, filterStatus?: string, filterLinkedDocumentUrn?: Array<string>, xAdsRegion?: Region, filterDueDate?: string, filterStartDate?: string, filterCreatedAt?: string, filterCreatedBy?: Array<string>, filterUpdatedAt?: string, filterUpdatedBy?: Array<string>, filterAssignedTo?: Array<string>, filterRootCauseId?: Array<string>, filterLocationId?: Array<string>, filterSubLocationId?: Array<string>, filterClosedBy?: Array<string>, filterClosedAt?: string, filterSearch?: string, filterDisplayId?: number, filterAssignedToType?: string, filterCustomAttributes?: Array<string>, filterValid?: boolean, limit?: number, offset?: number, sortBy?: Array<SortBy>, fields?: Array<Fields>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IssuesPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIssues(accessToken, projectId, filterId, filterIssueTypeId, filterIssueSubtypeId, filterStatus, filterLinkedDocumentUrn, xAdsRegion, filterDueDate, filterStartDate, filterCreatedAt, filterCreatedBy, filterUpdatedAt, filterUpdatedBy, filterAssignedTo, filterRootCauseId, filterLocationId, filterSubLocationId, filterClosedBy, filterClosedAt, filterSearch, filterDisplayId, filterAssignedToType, filterCustomAttributes, filterValid, limit, offset, sortBy, fields,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Updates an issue.  To verify whether a user can update issues for a specific project, call GET users/me.  To verify which attributes the user can update, call GET issues/:id and check the permittedAttributes and permittedStatuses lists.
         * @summary 
         * @param {string} projectId The ID of the project.
         * @param {string} issueId The unique identifier of the issue.
         * @param {Region} [xAdsRegion] 
         * @param {IssuePayload} [issuePayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchIssueDetails(accessToken: string, projectId: string, issueId: string, xAdsRegion?: Region, issuePayload?: IssuePayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Issue>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchIssueDetails(accessToken, projectId, issueId, xAdsRegion, issuePayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * IssuesApi - interface
 * @export
 * @interface IssuesApi
 */
export interface IssuesApiInterface {
    /**
     * Adds an issue to a project.
     * @summary 
     * @param {string} projectId The ID of the project.
     * @param {Region} [xAdsRegion] 
     * @param {IssuePayload} [issuePayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuesApiInterface
     */
    createIssue(accessToken: string,projectId: string, xAdsRegion?: Region, issuePayload?: IssuePayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves detailed information about a single issue. For general information about all the issues in a project.
     * @summary Your GET endpoint
     * @param {string} projectId The ID of the project.
     * @param {string} issueId The unique identifier of the issue.
     * @param {Region} [xAdsRegion] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuesApiInterface
     */
    getIssueDetails(accessToken: string,projectId: string, issueId: string, xAdsRegion?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves information about all the issues in a project, including details about their associated comments and attachments.
     * @summary Your GET endpoint
     * @param {string} projectId The ID of the project.
     * @param {Array<string>} [filterId] Filter issues by the unique issue ID. Separate multiple values with commas.
     * @param {Array<string>} [filterIssueTypeId] Filter issues by the unique identifier of the category of the issue. Note that the API name for category is type. Separate multiple values with commas.
     * @param {Array<string>} [filterIssueSubtypeId] Filter issues by the unique identifier of the type of the issue. Note that the API name for type is subtype. Separate multiple values with commas.
     * @param {string} [filterStatus] Filter issues by their status. Separate multiple values with commas.
     * @param {Array<string>} [filterLinkedDocumentUrn] Retrieves pushpin issues associated with the specified files. We support all file types that are compatible with the Files tool. You need to specify the URL-encoded file item IDs.
     * @param {Region} [xAdsRegion] 
     * @param {string} [filterDueDate] Filter issues by due date, in one of the following URL-encoded format: YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterStartDate] Filter issues by start date, in one of the following URL-encoded format: YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterCreatedAt] Filter issues created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas
     * @param {Array<string>} [filterCreatedBy] Filter issues by the unique identifier of the user who created the issue. Separate multiple values with commas.
     * @param {string} [filterUpdatedAt] Filter issues updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas. 
     * @param {Array<string>} [filterUpdatedBy] Filter issues by the unique identifier of the user who updated the issue. Separate multiple values with commas.
     * @param {Array<string>} [filterAssignedTo] Filter issues by the unique Autodesk ID of the User/Company/Role identifier of the current assignee of this issue. Separate multiple values with commas.
     * @param {Array<string>} [filterRootCauseId] Filter issues by the unique identifier of the type of root cause for the issue. Separate multiple values with commas.
     * @param {Array<string>} [filterLocationId] Retrieves issues associated with the specified location but not the location’s sublocations. To also retrieve issues that relate to the locations’s sublocations use the sublocationId filter. Separate multiple values with commas.
     * @param {Array<string>} [filterSubLocationId] Retrieves issues associated with the specified unique LBS (Location Breakdown Structure) identifier, as well as issues associated with the sub locations of the LBS identifier. Separate multiple values with commas.
     * @param {Array<string>} [filterClosedBy] Filter issues by the unique identifier of the user who closed the issue. Separate multiple values with commas. For Example: A3RGM375QTZ7.
     * @param {string} [filterClosedAt] Filter issues closed at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterSearch] Filter issues using ‘search’ criteria. this will filter both title and issues display ID. For example, use filter[search]&#x3D;300
     * @param {number} [filterDisplayId] Filter issues by the chronological user-friendly identifier. Separate multiple values with commas.
     * @param {string} [filterAssignedToType] Filter issues by the type of the current assignee of this issue. Separate multiple values with commas. Possible values: Possible values: user, company, role, null. For Example: user.
     * @param {Array<string>} [filterCustomAttributes] Filter issues by the custom attributes. Each custom attribute filter should be defined by it’s uuid. For example: filter[customAttributes][f227d940-ae9b-4722-9297-389f4411f010]&#x3D;1,2,3. Separate multiple values with commas.
     * @param {boolean} [filterValid] Only return valid issues (&#x3D;no empty type/subtype). Default value: undefined (meaning will return both valid &amp; invalid issues).
     * @param {number} [limit] Return specified number of issues. Acceptable values are 1-100. Default value: 100.
     * @param {number} [offset] Return issues starting from the specified offset number. Default value: 0.
     * @param {Array<SortBy>} [sortBy] Sort issue comments by specified fields. Separate multiple values with commas. To sort in descending order add a - (minus sign) before the sort criteria
     * @param {Array<Fields>} [fields] Return only specific fields in issue object. Separate multiple values with commas.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuesApiInterface
     */
    getIssues(accessToken: string,projectId: string, filterId?: Array<string>, filterIssueTypeId?: Array<string>, filterIssueSubtypeId?: Array<string>, filterStatus?: string, filterLinkedDocumentUrn?: Array<string>, xAdsRegion?: Region, filterDueDate?: string, filterStartDate?: string, filterCreatedAt?: string, filterCreatedBy?: Array<string>, filterUpdatedAt?: string, filterUpdatedBy?: Array<string>, filterAssignedTo?: Array<string>, filterRootCauseId?: Array<string>, filterLocationId?: Array<string>, filterSubLocationId?: Array<string>, filterClosedBy?: Array<string>, filterClosedAt?: string, filterSearch?: string, filterDisplayId?: number, filterAssignedToType?: string, filterCustomAttributes?: Array<string>, filterValid?: boolean, limit?: number, offset?: number, sortBy?: Array<SortBy>, fields?: Array<Fields>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Updates an issue.  To verify whether a user can update issues for a specific project, call GET users/me.  To verify which attributes the user can update, call GET issues/:id and check the permittedAttributes and permittedStatuses lists.
     * @summary 
     * @param {string} projectId The ID of the project.
     * @param {string} issueId The unique identifier of the issue.
     * @param {Region} [xAdsRegion] 
     * @param {IssuePayload} [issuePayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuesApiInterface
     */
    patchIssueDetails(accessToken: string,projectId: string, issueId: string, xAdsRegion?: Region, issuePayload?: IssuePayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * IssuesApi - object-oriented interface
 * @export
 * @class IssuesApi
 * @extends {BaseApi}
 */
export class IssuesApi extends BaseApi implements IssuesApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Adds an issue to a project.
     * @summary 
     * @param {string} projectId The ID of the project.
     * @param {Region} [xAdsRegion] 
     * @param {IssuePayload} [issuePayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuesApi
     */
    public async createIssue(accessToken: string, projectId: string, xAdsRegion?: Region, issuePayload?: IssuePayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createIssue ");
      try {
        const request =  await IssuesApiFp(this.sdkManager).createIssue(accessToken, projectId, xAdsRegion, issuePayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createIssue Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createIssue Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionIssuesApiError(`createIssue Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createIssue Request failed with no response received: ${error.request}`);
            throw new ConstructionIssuesApiError(`createIssue Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves detailed information about a single issue. For general information about all the issues in a project.
     * @summary Your GET endpoint
     * @param {string} projectId The ID of the project.
     * @param {string} issueId The unique identifier of the issue.
     * @param {Region} [xAdsRegion] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuesApi
     */
    public async getIssueDetails(accessToken: string, projectId: string, issueId: string, xAdsRegion?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getIssueDetails ");
      try {
        const request =  await IssuesApiFp(this.sdkManager).getIssueDetails(accessToken, projectId, issueId, xAdsRegion,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getIssueDetails Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getIssueDetails Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionIssuesApiError(`getIssueDetails Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getIssueDetails Request failed with no response received: ${error.request}`);
            throw new ConstructionIssuesApiError(`getIssueDetails Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves information about all the issues in a project, including details about their associated comments and attachments.
     * @summary Your GET endpoint
     * @param {string} projectId The ID of the project.
     * @param {Array<string>} [filterId] Filter issues by the unique issue ID. Separate multiple values with commas.
     * @param {Array<string>} [filterIssueTypeId] Filter issues by the unique identifier of the category of the issue. Note that the API name for category is type. Separate multiple values with commas.
     * @param {Array<string>} [filterIssueSubtypeId] Filter issues by the unique identifier of the type of the issue. Note that the API name for type is subtype. Separate multiple values with commas.
     * @param {string} [filterStatus] Filter issues by their status. Separate multiple values with commas.
     * @param {Array<string>} [filterLinkedDocumentUrn] Retrieves pushpin issues associated with the specified files. We support all file types that are compatible with the Files tool. You need to specify the URL-encoded file item IDs.
     * @param {Region} [xAdsRegion] 
     * @param {string} [filterDueDate] Filter issues by due date, in one of the following URL-encoded format: YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterStartDate] Filter issues by start date, in one of the following URL-encoded format: YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterCreatedAt] Filter issues created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas
     * @param {Array<string>} [filterCreatedBy] Filter issues by the unique identifier of the user who created the issue. Separate multiple values with commas.
     * @param {string} [filterUpdatedAt] Filter issues updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas. 
     * @param {Array<string>} [filterUpdatedBy] Filter issues by the unique identifier of the user who updated the issue. Separate multiple values with commas.
     * @param {Array<string>} [filterAssignedTo] Filter issues by the unique Autodesk ID of the User/Company/Role identifier of the current assignee of this issue. Separate multiple values with commas.
     * @param {Array<string>} [filterRootCauseId] Filter issues by the unique identifier of the type of root cause for the issue. Separate multiple values with commas.
     * @param {Array<string>} [filterLocationId] Retrieves issues associated with the specified location but not the location’s sublocations. To also retrieve issues that relate to the locations’s sublocations use the sublocationId filter. Separate multiple values with commas.
     * @param {Array<string>} [filterSubLocationId] Retrieves issues associated with the specified unique LBS (Location Breakdown Structure) identifier, as well as issues associated with the sub locations of the LBS identifier. Separate multiple values with commas.
     * @param {Array<string>} [filterClosedBy] Filter issues by the unique identifier of the user who closed the issue. Separate multiple values with commas. For Example: A3RGM375QTZ7.
     * @param {string} [filterClosedAt] Filter issues closed at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterSearch] Filter issues using ‘search’ criteria. this will filter both title and issues display ID. For example, use filter[search]&#x3D;300
     * @param {number} [filterDisplayId] Filter issues by the chronological user-friendly identifier. Separate multiple values with commas.
     * @param {string} [filterAssignedToType] Filter issues by the type of the current assignee of this issue. Separate multiple values with commas. Possible values: Possible values: user, company, role, null. For Example: user.
     * @param {Array<string>} [filterCustomAttributes] Filter issues by the custom attributes. Each custom attribute filter should be defined by it’s uuid. For example: filter[customAttributes][f227d940-ae9b-4722-9297-389f4411f010]&#x3D;1,2,3. Separate multiple values with commas.
     * @param {boolean} [filterValid] Only return valid issues (&#x3D;no empty type/subtype). Default value: undefined (meaning will return both valid &amp; invalid issues).
     * @param {number} [limit] Return specified number of issues. Acceptable values are 1-100. Default value: 100.
     * @param {number} [offset] Return issues starting from the specified offset number. Default value: 0.
     * @param {Array<SortBy>} [sortBy] Sort issue comments by specified fields. Separate multiple values with commas. To sort in descending order add a - (minus sign) before the sort criteria
     * @param {Array<Fields>} [fields] Return only specific fields in issue object. Separate multiple values with commas.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuesApi
     */
    public async getIssues(accessToken: string, projectId: string, filterId?: Array<string>, filterIssueTypeId?: Array<string>, filterIssueSubtypeId?: Array<string>, filterStatus?: string, filterLinkedDocumentUrn?: Array<string>, xAdsRegion?: Region, filterDueDate?: string, filterStartDate?: string, filterCreatedAt?: string, filterCreatedBy?: Array<string>, filterUpdatedAt?: string, filterUpdatedBy?: Array<string>, filterAssignedTo?: Array<string>, filterRootCauseId?: Array<string>, filterLocationId?: Array<string>, filterSubLocationId?: Array<string>, filterClosedBy?: Array<string>, filterClosedAt?: string, filterSearch?: string, filterDisplayId?: number, filterAssignedToType?: string, filterCustomAttributes?: Array<string>, filterValid?: boolean, limit?: number, offset?: number, sortBy?: Array<SortBy>, fields?: Array<Fields>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getIssues ");
      try {
        const request =  await IssuesApiFp(this.sdkManager).getIssues(accessToken, projectId, filterId, filterIssueTypeId, filterIssueSubtypeId, filterStatus, filterLinkedDocumentUrn, xAdsRegion, filterDueDate, filterStartDate, filterCreatedAt, filterCreatedBy, filterUpdatedAt, filterUpdatedBy, filterAssignedTo, filterRootCauseId, filterLocationId, filterSubLocationId, filterClosedBy, filterClosedAt, filterSearch, filterDisplayId, filterAssignedToType, filterCustomAttributes, filterValid, limit, offset, sortBy, fields,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getIssues Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getIssues Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionIssuesApiError(`getIssues Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getIssues Request failed with no response received: ${error.request}`);
            throw new ConstructionIssuesApiError(`getIssues Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Updates an issue.  To verify whether a user can update issues for a specific project, call GET users/me.  To verify which attributes the user can update, call GET issues/:id and check the permittedAttributes and permittedStatuses lists.
     * @summary 
     * @param {string} projectId The ID of the project.
     * @param {string} issueId The unique identifier of the issue.
     * @param {Region} [xAdsRegion] 
     * @param {IssuePayload} [issuePayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuesApi
     */
    public async patchIssueDetails(accessToken: string, projectId: string, issueId: string, xAdsRegion?: Region, issuePayload?: IssuePayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into patchIssueDetails ");
      try {
        const request =  await IssuesApiFp(this.sdkManager).patchIssueDetails(accessToken, projectId, issueId, xAdsRegion, issuePayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`patchIssueDetails Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`patchIssueDetails Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionIssuesApiError(`patchIssueDetails Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`patchIssueDetails Request failed with no response received: ${error.request}`);
            throw new ConstructionIssuesApiError(`patchIssueDetails Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

