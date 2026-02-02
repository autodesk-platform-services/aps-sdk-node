/* tslint:disable */
/* eslint-disable */

import { ApiResponse, ApsServiceRequestConfig, IApsConfiguration, SdkManager } from "@aps_sdk/autodesk-sdkmanager";
import type { AxiosInstance, AxiosPromise } from 'axios';
import { BaseApi, DataManagementApiError, RequestArgs, RequiredError } from '../base';
import { assertParamExists, createRequestFunction, serializeDataIfNeeded, setBearerAuthToObject, setSearchParams, toPathString } from '../common';
import { CreatedDownload, Download, DownloadPayload, Hub, Job, Project, Projects, Storage, StoragePayload, TopFolders } from '../model';
/**
 * ProjectsApi - axios parameter creator
 * @export
 */
export const ProjectsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Kicks off a job to generate the specified download format of the version. Once the job completes, the specified format becomes available for download.
	 * 
         * @summary Create Download
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {DownloadPayload} downloadPayload 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDownload: async (accessToken: string, projectId: string, xUserId?: string, downloadPayload?: DownloadPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createDownload', 'projectId', projectId)
            const localVarPath = `/data/v1/projects/{project_id}/downloads`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(downloadPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a placeholder for an item or a version of an item in the OSS. Later, you can upload the binary content for the item or version to this storage location.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary Create a Storage Location in OSS
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {StoragePayload} storagePayload 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createStorage: async (accessToken: string, projectId: string, xUserId?: string, storagePayload?: StoragePayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createStorage', 'projectId', projectId)
            const localVarPath = `/data/v1/projects/{project_id}/storage`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(storagePayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the details of a downloadable format of a version of an item.
	 * 
         * @summary Get Download Details
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} downloadId The Job ID of the job used to generate the download.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDownload: async (accessToken: string, projectId: string, downloadId: string, xUserId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getDownload', 'projectId', projectId)
            // verify required parameter 'downloadId' is not null or undefined
            assertParamExists('getDownload', 'downloadId', downloadId)
            const localVarPath = `/data/v1/projects/{project_id}/downloads/{download_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"download_id"}}`, encodeURIComponent(String(downloadId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Checks the status of a job that generates a downloadable format of a version of an item. 
	 * 
	 * **Note**: If the job has finished, this operation returns a HTTP status 303, with the ``location`` return header set to the URI that returns the details of the download.
	 * 
         * @summary Check Download Creation Progress
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} jobId The unique identifier of a job.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDownloadJob: async (accessToken: string, projectId: string, jobId: string, xUserId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getDownloadJob', 'projectId', projectId)
            // verify required parameter 'jobId' is not null or undefined
            assertParamExists('getDownloadJob', 'jobId', jobId)
            const localVarPath = `/data/v1/projects/{project_id}/jobs/{job_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"job_id"}}`, encodeURIComponent(String(jobId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a collection of active projects within the specified hub. The returned projects can be Forma, BIM 360, BIM 360 Team, Fusion Team, and A360 Personal projects. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary Get Projects
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
         * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
         * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHubProjects: async (accessToken: string, hubId: string, xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, pageNumber?: number, pageLimit?: number,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'hubId' is not null or undefined
            assertParamExists('getHubProjects', 'hubId', hubId)
            const localVarPath = `/project/v1/hubs/{hub_id}/projects`
                .replace(`{${"hub_id"}}`, encodeURIComponent(String(hubId)));
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

            if (filterExtensionType) {
                localVarQueryParameter['filter[extension.type]'] = filterExtensionType;
            }

            if (pageNumber !== undefined) {
                localVarQueryParameter['page[number]'] = pageNumber;
            }

            if (pageLimit !== undefined) {
                localVarQueryParameter['page[limit]'] = pageLimit;
            }

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the specified project from within the specified hub.
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary Get a Project
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProject: async (accessToken: string, hubId: string, projectId: string, xUserId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'hubId' is not null or undefined
            assertParamExists('getProject', 'hubId', hubId)
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getProject', 'projectId', projectId)
            const localVarPath = `/project/v1/hubs/{hub_id}/projects/{project_id}`
                .replace(`{${"hub_id"}}`, encodeURIComponent(String(hubId)))
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the hub that contains the project specified by the  ``project_id`` parameter.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary Get Hub for Project
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectHub: async (accessToken: string, hubId: string, projectId: string, xUserId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'hubId' is not null or undefined
            assertParamExists('getProjectHub', 'hubId', hubId)
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getProjectHub', 'projectId', projectId)
            const localVarPath = `/project/v1/hubs/{hub_id}/projects/{project_id}/hub`
                .replace(`{${"hub_id"}}`, encodeURIComponent(String(hubId)))
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the details of the highest level folders within a project that the user calling this operation has access to. The user must have at least read access to the folders.
	 * 
	 * If the user is a Project Admin, it returns all top-level folders in the project. Otherwise, it returns all the highest level folders in the folder hierarchy the user has access to.
	 * 
	 * Users with access permission to a folder has access permission to all its subfolders.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary List Top-level Project Folders
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {boolean} [excludeDeleted] Specifies whether deleted folders are excluded from the response for BIM 360 Docs and Forma Data Management projects, when user context is provided. 
	 * 
	 * - ``true``: Response excludes deleted folders.  
	 * - ``false``: (Default) Response will not exclude deleted folders.
	 * 
         * @param {boolean} [projectFilesOnly] Specifies whether deleted folders are excluded from the response for BIM 360 Docs and Forma Data Management projects, when user context is provided. 
	 * 
	 * - ``true``: Response will be restricted to folder and subfolders containing project files.  
	 * - ``false``: (Default) Response will include all available folders.
	 * 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectTopFolders: async (accessToken: string, hubId: string, projectId: string, xUserId?: string, excludeDeleted?: boolean, projectFilesOnly?: boolean,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'hubId' is not null or undefined
            assertParamExists('getProjectTopFolders', 'hubId', hubId)
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getProjectTopFolders', 'projectId', projectId)
            const localVarPath = `/project/v1/hubs/{hub_id}/projects/{project_id}/topFolders`
                .replace(`{${"hub_id"}}`, encodeURIComponent(String(hubId)))
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (excludeDeleted !== undefined) {
                localVarQueryParameter['excludeDeleted'] = excludeDeleted;
            }

            if (projectFilesOnly !== undefined) {
                localVarQueryParameter['projectFilesOnly'] = projectFilesOnly;
            }

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
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
 * ProjectsApi - functional programming interface
 * @export
 */
export const ProjectsApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = ProjectsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Kicks off a job to generate the specified download format of the version. Once the job completes, the specified format becomes available for download.
	 * 
         * @summary Create Download
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {DownloadPayload} downloadPayload 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDownload(accessToken: string, projectId: string, xUserId?: string, downloadPayload?: DownloadPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreatedDownload>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDownload(accessToken, projectId, xUserId, downloadPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Creates a placeholder for an item or a version of an item in the OSS. Later, you can upload the binary content for the item or version to this storage location.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary Create a Storage Location in OSS
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {StoragePayload} storagePayload 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createStorage(accessToken: string, projectId: string, xUserId?: string, storagePayload?: StoragePayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Storage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createStorage(accessToken, projectId, xUserId, storagePayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the details of a downloadable format of a version of an item.
	 * 
         * @summary Get Download Details
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} downloadId The Job ID of the job used to generate the download.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDownload(accessToken: string, projectId: string, downloadId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Download>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDownload(accessToken, projectId, downloadId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Checks the status of a job that generates a downloadable format of a version of an item. 
	 * 
	 * **Note**: If the job has finished, this operation returns a HTTP status 303, with the ``location`` return header set to the URI that returns the details of the download.
	 * 
         * @summary Check Download Creation Progress
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} jobId The unique identifier of a job.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDownloadJob(accessToken: string, projectId: string, jobId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Job>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDownloadJob(accessToken, projectId, jobId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a collection of active projects within the specified hub. The returned projects can be Forma, BIM 360, BIM 360 Team, Fusion Team, and A360 Personal projects. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary Get Projects
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
         * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
         * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHubProjects(accessToken: string, hubId: string, xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, pageNumber?: number, pageLimit?: number, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Projects>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHubProjects(accessToken, hubId, xUserId, filterId, filterExtensionType, pageNumber, pageLimit,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the specified project from within the specified hub.
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary Get a Project
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProject(accessToken: string, hubId: string, projectId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProject(accessToken, hubId, projectId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the hub that contains the project specified by the  ``project_id`` parameter.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary Get Hub for Project
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectHub(accessToken: string, hubId: string, projectId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hub>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectHub(accessToken, hubId, projectId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the details of the highest level folders within a project that the user calling this operation has access to. The user must have at least read access to the folders.
	 * 
	 * If the user is a Project Admin, it returns all top-level folders in the project. Otherwise, it returns all the highest level folders in the folder hierarchy the user has access to.
	 * 
	 * Users with access permission to a folder has access permission to all its subfolders.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary List Top-level Project Folders
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {boolean} [excludeDeleted] Specifies whether deleted folders are excluded from the response for BIM 360 Docs and Forma Data Management projects, when user context is provided. 
	 * 
	 * - ``true``: Response excludes deleted folders.  
	 * - ``false``: (Default) Response will not exclude deleted folders.
	 * 
         * @param {boolean} [projectFilesOnly] Specifies whether deleted folders are excluded from the response for BIM 360 Docs and Forma Data Management projects, when user context is provided. 
	 * 
	 * - ``true``: Response will be restricted to folder and subfolders containing project files.  
	 * - ``false``: (Default) Response will include all available folders.
	 * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectTopFolders(accessToken: string, hubId: string, projectId: string, xUserId?: string, excludeDeleted?: boolean, projectFilesOnly?: boolean, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TopFolders>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectTopFolders(accessToken, hubId, projectId, xUserId, excludeDeleted, projectFilesOnly,  options);
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
     * Kicks off a job to generate the specified download format of the version. Once the job completes, the specified format becomes available for download.
	 * 
     * @summary Create Download
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {DownloadPayload} downloadPayload 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createDownload(accessToken: string,projectId: string, xUserId?: string, downloadPayload?: DownloadPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Creates a placeholder for an item or a version of an item in the OSS. Later, you can upload the binary content for the item or version to this storage location.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary Create a Storage Location in OSS
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {StoragePayload} storagePayload 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createStorage(accessToken: string,projectId: string, xUserId?: string, storagePayload?: StoragePayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the details of a downloadable format of a version of an item.
	 * 
     * @summary Get Download Details
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} downloadId The Job ID of the job used to generate the download.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getDownload(accessToken: string,projectId: string, downloadId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Checks the status of a job that generates a downloadable format of a version of an item. 
	 * 
	 * **Note**: If the job has finished, this operation returns a HTTP status 303, with the ``location`` return header set to the URI that returns the details of the download.
	 * 
     * @summary Check Download Creation Progress
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} jobId The unique identifier of a job.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getDownloadJob(accessToken: string,projectId: string, jobId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a collection of active projects within the specified hub. The returned projects can be Forma, BIM 360, BIM 360 Team, Fusion Team, and A360 Personal projects. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary Get Projects
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
     * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
     * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getHubProjects(accessToken: string,hubId: string, xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, pageNumber?: number, pageLimit?: number,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the specified project from within the specified hub.
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary Get a Project
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProject(accessToken: string,hubId: string, projectId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the hub that contains the project specified by the  ``project_id`` parameter.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary Get Hub for Project
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProjectHub(accessToken: string,hubId: string, projectId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the details of the highest level folders within a project that the user calling this operation has access to. The user must have at least read access to the folders.
	 * 
	 * If the user is a Project Admin, it returns all top-level folders in the project. Otherwise, it returns all the highest level folders in the folder hierarchy the user has access to.
	 * 
	 * Users with access permission to a folder has access permission to all its subfolders.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary List Top-level Project Folders
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {boolean} [excludeDeleted] Specifies whether deleted folders are excluded from the response for BIM 360 Docs and Forma Data Management projects, when user context is provided. 
	 * 
	 * - ``true``: Response excludes deleted folders.  
	 * - ``false``: (Default) Response will not exclude deleted folders.
	 * 
     * @param {boolean} [projectFilesOnly] Specifies whether deleted folders are excluded from the response for BIM 360 Docs and Forma Data Management projects, when user context is provided. 
	 * 
	 * - ``true``: Response will be restricted to folder and subfolders containing project files.  
	 * - ``false``: (Default) Response will include all available folders.
	 * 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProjectTopFolders(accessToken: string,hubId: string, projectId: string, xUserId?: string, excludeDeleted?: boolean, projectFilesOnly?: boolean,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

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
     * Kicks off a job to generate the specified download format of the version. Once the job completes, the specified format becomes available for download.
	 * 
     * @summary Create Download
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {DownloadPayload} downloadPayload 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async createDownload(accessToken: string, projectId: string, xUserId?: string, downloadPayload?: DownloadPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createDownload ");
      try {
        const request =  await ProjectsApiFp(this.sdkManager).createDownload(accessToken, projectId, xUserId, downloadPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createDownload Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createDownload Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`createDownload Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createDownload Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`createDownload Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Creates a placeholder for an item or a version of an item in the OSS. Later, you can upload the binary content for the item or version to this storage location.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary Create a Storage Location in OSS
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {StoragePayload} storagePayload 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async createStorage(accessToken: string, projectId: string, xUserId?: string, storagePayload?: StoragePayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createStorage ");
      try {
        const request =  await ProjectsApiFp(this.sdkManager).createStorage(accessToken, projectId, xUserId, storagePayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createStorage Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createStorage Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`createStorage Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createStorage Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`createStorage Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the details of a downloadable format of a version of an item.
	 * 
     * @summary Get Download Details
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} downloadId The Job ID of the job used to generate the download.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async getDownload(accessToken: string, projectId: string, downloadId: string, xUserId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getDownload ");
      try {
        const request =  await ProjectsApiFp(this.sdkManager).getDownload(accessToken, projectId, downloadId, xUserId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getDownload Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getDownload Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getDownload Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getDownload Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getDownload Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Checks the status of a job that generates a downloadable format of a version of an item. 
	 * 
	 * **Note**: If the job has finished, this operation returns a HTTP status 303, with the ``location`` return header set to the URI that returns the details of the download.
	 * 
     * @summary Check Download Creation Progress
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} jobId The unique identifier of a job.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async getDownloadJob(accessToken: string, projectId: string, jobId: string, xUserId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getDownloadJob ");
      try {
        const request =  await ProjectsApiFp(this.sdkManager).getDownloadJob(accessToken, projectId, jobId, xUserId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getDownloadJob Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getDownloadJob Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getDownloadJob Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getDownloadJob Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getDownloadJob Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a collection of active projects within the specified hub. The returned projects can be Forma, BIM 360, BIM 360 Team, Fusion Team, and A360 Personal projects. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary Get Projects
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
     * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
     * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async getHubProjects(accessToken: string, hubId: string, xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, pageNumber?: number, pageLimit?: number, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getHubProjects ");
      try {
        const request =  await ProjectsApiFp(this.sdkManager).getHubProjects(accessToken, hubId, xUserId, filterId, filterExtensionType, pageNumber, pageLimit,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getHubProjects Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getHubProjects Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getHubProjects Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getHubProjects Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getHubProjects Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the specified project from within the specified hub.
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary Get a Project
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async getProject(accessToken: string, hubId: string, projectId: string, xUserId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getProject ");
      try {
        const request =  await ProjectsApiFp(this.sdkManager).getProject(accessToken, hubId, projectId, xUserId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getProject Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getProject Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getProject Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getProject Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getProject Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the hub that contains the project specified by the  ``project_id`` parameter.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary Get Hub for Project
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async getProjectHub(accessToken: string, hubId: string, projectId: string, xUserId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getProjectHub ");
      try {
        const request =  await ProjectsApiFp(this.sdkManager).getProjectHub(accessToken, hubId, projectId, xUserId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getProjectHub Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getProjectHub Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getProjectHub Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getProjectHub Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getProjectHub Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the details of the highest level folders within a project that the user calling this operation has access to. The user must have at least read access to the folders.
	 * 
	 * If the user is a Project Admin, it returns all top-level folders in the project. Otherwise, it returns all the highest level folders in the folder hierarchy the user has access to.
	 * 
	 * Users with access permission to a folder has access permission to all its subfolders.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary List Top-level Project Folders
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {boolean} [excludeDeleted] Specifies whether deleted folders are excluded from the response for BIM 360 Docs and Forma Data Management projects, when user context is provided. 
	 * 
	 * - ``true``: Response excludes deleted folders.  
	 * - ``false``: (Default) Response will not exclude deleted folders.
	 * 
     * @param {boolean} [projectFilesOnly] Specifies whether deleted folders are excluded from the response for BIM 360 Docs and Forma Data Management projects, when user context is provided. 
	 * 
	 * - ``true``: Response will be restricted to folder and subfolders containing project files.  
	 * - ``false``: (Default) Response will include all available folders.
	 * 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async getProjectTopFolders(accessToken: string, hubId: string, projectId: string, xUserId?: string, excludeDeleted?: boolean, projectFilesOnly?: boolean, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getProjectTopFolders ");
      try {
        const request =  await ProjectsApiFp(this.sdkManager).getProjectTopFolders(accessToken, hubId, projectId, xUserId, excludeDeleted, projectFilesOnly,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getProjectTopFolders Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getProjectTopFolders Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getProjectTopFolders Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getProjectTopFolders Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getProjectTopFolders Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

