/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse} from "autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, DataManagementApiError } from '../base';
import { Download } from '../model';
import { DownloadDetails } from '../model';
import { DownloadPayload } from '../model';
import { GetHubs401Response } from '../model';
import { Hub } from '../model';
import { Job } from '../model';
import { Project } from '../model';
import { Projects } from '../model';
import { Storage } from '../model';
import { StoragePayload } from '../model';
import { TopFolders } from '../model';
/**
 * ProjectsApi - axios parameter creator
 * @export
 */
export const ProjectsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Request the creation of a new download for a specific and supported file type. The fileType specified in the POST body needs to be contained in the list of supported file types returned by the GET /data/v1/projects/:project_id/downloads endpoint for the specified version_id.
         * @summary Request the creation of a new download for a specific and supported file type
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {DownloadPayload} [downloadPayload] Describe the download to be created.
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
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(downloadPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a storage location in the OSS where data can be uploaded to.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Creates a storage location in the OSS where data can be uploaded to
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {StoragePayload} [storagePayload] Describe the file the storage is created for.
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
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(storagePayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the details for a specific ``download``. 
         * @summary Returns the details for a specific download
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} downloadId The unique identifier of a download job.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the ``job_id`` object. 
         * @summary Returns the job_id object
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} jobId The unique identifier of a job.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a collection of projects for a given hub_id. A project represents a BIM 360 Team project, a Fusion Team project, a BIM 360 Docs project, or an A360 Personal project. Multiple projects can be created within a single hub. Only active projects are listed.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  Similarly, for BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a \"b.\" prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a collection of projects for a given hub_id
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
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
                localVarQueryParameter['filter_id'] = filterId;
            }

            if (filterExtensionType) {
                localVarQueryParameter['filter_extension_type'] = filterExtensionType;
            }

            if (pageNumber !== undefined) {
                localVarQueryParameter['page_number'] = pageNumber;
            }

            if (pageLimit !== undefined) {
                localVarQueryParameter['page_limit'] = pageLimit;
            }

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a project for a given project_id.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  Similarly, for BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a \"b.\" prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a project for a given project_id
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the hub for a given project_id.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the hub for a given project_id
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the details of the highest level folders the user has access to for a given project. The user must have at least read access to the folders.  If the user is a Project Admin, it returns all top level folders in the project. Otherwise, it returns all the highest level folders in the folder hierarchy the user has access to.  Note that when users have access to a folder, access is automatically granted to its subfolders.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the details of the highest level folders the user has access to for a given project
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {boolean} [excludeDeleted] Specify whether to exclude deleted folders in response for BIM 360 Docs projects when user context is provided. true: response will exclude deleted folders for BIM 360 Docs projects.  false (default): response will not exclude deleted folders for BIM 360 Docs projects.
         * @param {boolean} [projectFilesOnly] Specify whether only Project Files folder or its subfolders will be returned for BIM 360 Docs projects when user context is provided. true: response will include only Project Files folder and its subfolders for BIM 360 Docs projects.  false (default): response will include all available folders.
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
export const ProjectsApiFp = function(sdkManager?: SDKManager) {
    const localVarAxiosParamCreator = ProjectsApiAxiosParamCreator(sdkManager.apsconfiguration)
    return {
        /**
         * Request the creation of a new download for a specific and supported file type. The fileType specified in the POST body needs to be contained in the list of supported file types returned by the GET /data/v1/projects/:project_id/downloads endpoint for the specified version_id.
         * @summary Request the creation of a new download for a specific and supported file type
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {DownloadPayload} [downloadPayload] Describe the download to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDownload(accessToken: string, projectId: string, xUserId?: string, downloadPayload?: DownloadPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Download>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDownload(accessToken, projectId, xUserId, downloadPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Creates a storage location in the OSS where data can be uploaded to.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Creates a storage location in the OSS where data can be uploaded to
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {StoragePayload} [storagePayload] Describe the file the storage is created for.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createStorage(accessToken: string, projectId: string, xUserId?: string, storagePayload?: StoragePayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Storage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createStorage(accessToken, projectId, xUserId, storagePayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the details for a specific ``download``. 
         * @summary Returns the details for a specific download
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} downloadId The unique identifier of a download job.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDownload(accessToken: string, projectId: string, downloadId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DownloadDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDownload(accessToken, projectId, downloadId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the ``job_id`` object. 
         * @summary Returns the job_id object
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} jobId The unique identifier of a job.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDownloadJob(accessToken: string, projectId: string, jobId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Job>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDownloadJob(accessToken, projectId, jobId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a collection of projects for a given hub_id. A project represents a BIM 360 Team project, a Fusion Team project, a BIM 360 Docs project, or an A360 Personal project. Multiple projects can be created within a single hub. Only active projects are listed.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  Similarly, for BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a \"b.\" prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a collection of projects for a given hub_id
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
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
         * Returns a project for a given project_id.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  Similarly, for BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a \"b.\" prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a project for a given project_id
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProject(accessToken: string, hubId: string, projectId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProject(accessToken, hubId, projectId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the hub for a given project_id.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the hub for a given project_id
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectHub(accessToken: string, hubId: string, projectId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Hub>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectHub(accessToken, hubId, projectId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the details of the highest level folders the user has access to for a given project. The user must have at least read access to the folders.  If the user is a Project Admin, it returns all top level folders in the project. Otherwise, it returns all the highest level folders in the folder hierarchy the user has access to.  Note that when users have access to a folder, access is automatically granted to its subfolders.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the details of the highest level folders the user has access to for a given project
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {boolean} [excludeDeleted] Specify whether to exclude deleted folders in response for BIM 360 Docs projects when user context is provided. true: response will exclude deleted folders for BIM 360 Docs projects.  false (default): response will not exclude deleted folders for BIM 360 Docs projects.
         * @param {boolean} [projectFilesOnly] Specify whether only Project Files folder or its subfolders will be returned for BIM 360 Docs projects when user context is provided. true: response will include only Project Files folder and its subfolders for BIM 360 Docs projects.  false (default): response will include all available folders.
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
     * Request the creation of a new download for a specific and supported file type. The fileType specified in the POST body needs to be contained in the list of supported file types returned by the GET /data/v1/projects/:project_id/downloads endpoint for the specified version_id.
     * @summary Request the creation of a new download for a specific and supported file type
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {DownloadPayload} [downloadPayload] Describe the download to be created.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createDownload(accessToken: string,projectId: string, xUserId?: string, downloadPayload?: DownloadPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Creates a storage location in the OSS where data can be uploaded to.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Creates a storage location in the OSS where data can be uploaded to
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {StoragePayload} [storagePayload] Describe the file the storage is created for.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    createStorage(accessToken: string,projectId: string, xUserId?: string, storagePayload?: StoragePayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the details for a specific ``download``. 
     * @summary Returns the details for a specific download
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} downloadId The unique identifier of a download job.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getDownload(accessToken: string,projectId: string, downloadId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the ``job_id`` object. 
     * @summary Returns the job_id object
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} jobId The unique identifier of a job.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getDownloadJob(accessToken: string,projectId: string, jobId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a collection of projects for a given hub_id. A project represents a BIM 360 Team project, a Fusion Team project, a BIM 360 Docs project, or an A360 Personal project. Multiple projects can be created within a single hub. Only active projects are listed.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  Similarly, for BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a \"b.\" prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of projects for a given hub_id
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
     * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getHubProjects(accessToken: string,hubId: string, xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, pageNumber?: number, pageLimit?: number,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a project for a given project_id.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  Similarly, for BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a \"b.\" prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a project for a given project_id
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProject(accessToken: string,hubId: string, projectId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the hub for a given project_id.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the hub for a given project_id
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    getProjectHub(accessToken: string,hubId: string, projectId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the details of the highest level folders the user has access to for a given project. The user must have at least read access to the folders.  If the user is a Project Admin, it returns all top level folders in the project. Otherwise, it returns all the highest level folders in the folder hierarchy the user has access to.  Note that when users have access to a folder, access is automatically granted to its subfolders.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the details of the highest level folders the user has access to for a given project
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {boolean} [excludeDeleted] Specify whether to exclude deleted folders in response for BIM 360 Docs projects when user context is provided. true: response will exclude deleted folders for BIM 360 Docs projects.  false (default): response will not exclude deleted folders for BIM 360 Docs projects.
     * @param {boolean} [projectFilesOnly] Specify whether only Project Files folder or its subfolders will be returned for BIM 360 Docs projects when user context is provided. true: response will include only Project Files folder and its subfolders for BIM 360 Docs projects.  false (default): response will include all available folders.
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
 * @extends {BaseAPI}
 */
export class ProjectsApi extends BaseAPI implements ProjectsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Request the creation of a new download for a specific and supported file type. The fileType specified in the POST body needs to be contained in the list of supported file types returned by the GET /data/v1/projects/:project_id/downloads endpoint for the specified version_id.
     * @summary Request the creation of a new download for a specific and supported file type
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {DownloadPayload} [downloadPayload] Describe the download to be created.
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
            this.logger.logError(`createDownload Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`createDownload Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`createDownload Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`createDownload Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Creates a storage location in the OSS where data can be uploaded to.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Creates a storage location in the OSS where data can be uploaded to
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {StoragePayload} [storagePayload] Describe the file the storage is created for.
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
            this.logger.logError(`createStorage Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`createStorage Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`createStorage Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`createStorage Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the details for a specific ``download``. 
     * @summary Returns the details for a specific download
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} downloadId The unique identifier of a download job.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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
            this.logger.logError(`getDownload Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getDownload Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getDownload Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getDownload Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the ``job_id`` object. 
     * @summary Returns the job_id object
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} jobId The unique identifier of a job.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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
            this.logger.logError(`getDownloadJob Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getDownloadJob Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getDownloadJob Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getDownloadJob Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a collection of projects for a given hub_id. A project represents a BIM 360 Team project, a Fusion Team project, a BIM 360 Docs project, or an A360 Personal project. Multiple projects can be created within a single hub. Only active projects are listed.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  Similarly, for BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a \"b.\" prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of projects for a given hub_id
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
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
            this.logger.logError(`getHubProjects Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getHubProjects Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getHubProjects Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getHubProjects Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a project for a given project_id.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  Similarly, for BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a \"b.\" prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a project for a given project_id
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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
            this.logger.logError(`getProject Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getProject Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getProject Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getProject Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the hub for a given project_id.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the hub for a given project_id
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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
            this.logger.logError(`getProjectHub Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getProjectHub Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getProjectHub Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getProjectHub Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the details of the highest level folders the user has access to for a given project. The user must have at least read access to the folders.  If the user is a Project Admin, it returns all top level folders in the project. Otherwise, it returns all the highest level folders in the folder hierarchy the user has access to.  Note that when users have access to a folder, access is automatically granted to its subfolders.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the details of the highest level folders the user has access to for a given project
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {boolean} [excludeDeleted] Specify whether to exclude deleted folders in response for BIM 360 Docs projects when user context is provided. true: response will exclude deleted folders for BIM 360 Docs projects.  false (default): response will not exclude deleted folders for BIM 360 Docs projects.
     * @param {boolean} [projectFilesOnly] Specify whether only Project Files folder or its subfolders will be returned for BIM 360 Docs projects when user context is provided. true: response will include only Project Files folder and its subfolders for BIM 360 Docs projects.  false (default): response will include all available folders.
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
            this.logger.logError(`getProjectTopFolders Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getProjectTopFolders Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getProjectTopFolders Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getProjectTopFolders Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

