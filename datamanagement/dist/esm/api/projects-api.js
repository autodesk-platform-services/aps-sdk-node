/* tslint:disable */
/* eslint-disable */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ApiResponse } from "autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { BaseAPI, DataManagementApiError } from '../base';
/**
 * ProjectsApi - axios parameter creator
 * @export
 */
export const ProjectsApiAxiosParamCreator = function (apsConfiguration) {
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
        createDownload: (accessToken, projectId, xUserId, downloadPayload, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createDownload', 'projectId', projectId);
            const localVarPath = `/data/v1/projects/{project_id}/downloads`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = serializeDataIfNeeded(downloadPayload, localVarRequestOptions, apsConfiguration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        createStorage: (accessToken, projectId, xUserId, storagePayload, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createStorage', 'projectId', projectId);
            const localVarPath = `/data/v1/projects/{project_id}/storage`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = serializeDataIfNeeded(storagePayload, localVarRequestOptions, apsConfiguration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        getDownload: (accessToken, projectId, downloadId, xUserId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getDownload', 'projectId', projectId);
            // verify required parameter 'downloadId' is not null or undefined
            assertParamExists('getDownload', 'downloadId', downloadId);
            const localVarPath = `/data/v1/projects/{project_id}/downloads/{download_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"download_id"}}`, encodeURIComponent(String(downloadId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        getDownloadJob: (accessToken, projectId, jobId, xUserId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getDownloadJob', 'projectId', projectId);
            // verify required parameter 'jobId' is not null or undefined
            assertParamExists('getDownloadJob', 'jobId', jobId);
            const localVarPath = `/data/v1/projects/{project_id}/jobs/{job_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"job_id"}}`, encodeURIComponent(String(jobId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        getHubProjects: (accessToken, hubId, xUserId, filterId, filterExtensionType, pageNumber, pageLimit, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'hubId' is not null or undefined
            assertParamExists('getHubProjects', 'hubId', hubId);
            const localVarPath = `/project/v1/hubs/{hub_id}/projects`
                .replace(`{${"hub_id"}}`, encodeURIComponent(String(hubId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
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
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        getProject: (accessToken, hubId, projectId, xUserId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'hubId' is not null or undefined
            assertParamExists('getProject', 'hubId', hubId);
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getProject', 'projectId', projectId);
            const localVarPath = `/project/v1/hubs/{hub_id}/projects/{project_id}`
                .replace(`{${"hub_id"}}`, encodeURIComponent(String(hubId)))
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        getProjectHub: (accessToken, hubId, projectId, xUserId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'hubId' is not null or undefined
            assertParamExists('getProjectHub', 'hubId', hubId);
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getProjectHub', 'projectId', projectId);
            const localVarPath = `/project/v1/hubs/{hub_id}/projects/{project_id}/hub`
                .replace(`{${"hub_id"}}`, encodeURIComponent(String(hubId)))
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        getProjectTopFolders: (accessToken, hubId, projectId, xUserId, excludeDeleted, projectFilesOnly, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'hubId' is not null or undefined
            assertParamExists('getProjectTopFolders', 'hubId', hubId);
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getProjectTopFolders', 'projectId', projectId);
            const localVarPath = `/project/v1/hubs/{hub_id}/projects/{project_id}/topFolders`
                .replace(`{${"hub_id"}}`, encodeURIComponent(String(hubId)))
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
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
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * ProjectsApi - functional programming interface
 * @export
 */
export const ProjectsApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = ProjectsApiAxiosParamCreator(sdkManager.apsconfiguration);
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
        createDownload(accessToken, projectId, xUserId, downloadPayload, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.createDownload(accessToken, projectId, xUserId, downloadPayload, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
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
        createStorage(accessToken, projectId, xUserId, storagePayload, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.createStorage(accessToken, projectId, xUserId, storagePayload, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
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
        getDownload(accessToken, projectId, downloadId, xUserId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getDownload(accessToken, projectId, downloadId, xUserId, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
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
        getDownloadJob(accessToken, projectId, jobId, xUserId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getDownloadJob(accessToken, projectId, jobId, xUserId, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
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
        getHubProjects(accessToken, hubId, xUserId, filterId, filterExtensionType, pageNumber, pageLimit, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getHubProjects(accessToken, hubId, xUserId, filterId, filterExtensionType, pageNumber, pageLimit, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
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
        getProject(accessToken, hubId, projectId, xUserId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getProject(accessToken, hubId, projectId, xUserId, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
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
        getProjectHub(accessToken, hubId, projectId, xUserId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getProjectHub(accessToken, hubId, projectId, xUserId, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
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
        getProjectTopFolders(accessToken, hubId, projectId, xUserId, excludeDeleted, projectFilesOnly, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getProjectTopFolders(accessToken, hubId, projectId, xUserId, excludeDeleted, projectFilesOnly, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
/**
 * ProjectsApi - object-oriented interface
 * @export
 * @class ProjectsApi
 * @extends {BaseAPI}
 */
export class ProjectsApi extends BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
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
    createDownload(accessToken, projectId, xUserId, downloadPayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into createDownload ");
            try {
                const request = yield ProjectsApiFp(this.sdkManager).createDownload(accessToken, projectId, xUserId, downloadPayload, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`createDownload Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`createDownload Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`createDownload Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`createDownload Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`createDownload Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
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
    createStorage(accessToken, projectId, xUserId, storagePayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into createStorage ");
            try {
                const request = yield ProjectsApiFp(this.sdkManager).createStorage(accessToken, projectId, xUserId, storagePayload, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`createStorage Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`createStorage Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`createStorage Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`createStorage Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`createStorage Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
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
    getDownload(accessToken, projectId, downloadId, xUserId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getDownload ");
            try {
                const request = yield ProjectsApiFp(this.sdkManager).getDownload(accessToken, projectId, downloadId, xUserId, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getDownload Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getDownload Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`getDownload Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getDownload Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`getDownload Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
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
    getDownloadJob(accessToken, projectId, jobId, xUserId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getDownloadJob ");
            try {
                const request = yield ProjectsApiFp(this.sdkManager).getDownloadJob(accessToken, projectId, jobId, xUserId, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getDownloadJob Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getDownloadJob Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`getDownloadJob Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getDownloadJob Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`getDownloadJob Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
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
    getHubProjects(accessToken, hubId, xUserId, filterId, filterExtensionType, pageNumber, pageLimit, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getHubProjects ");
            try {
                const request = yield ProjectsApiFp(this.sdkManager).getHubProjects(accessToken, hubId, xUserId, filterId, filterExtensionType, pageNumber, pageLimit, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getHubProjects Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getHubProjects Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`getHubProjects Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getHubProjects Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`getHubProjects Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
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
    getProject(accessToken, hubId, projectId, xUserId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getProject ");
            try {
                const request = yield ProjectsApiFp(this.sdkManager).getProject(accessToken, hubId, projectId, xUserId, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getProject Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getProject Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`getProject Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getProject Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`getProject Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
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
    getProjectHub(accessToken, hubId, projectId, xUserId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getProjectHub ");
            try {
                const request = yield ProjectsApiFp(this.sdkManager).getProjectHub(accessToken, hubId, projectId, xUserId, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getProjectHub Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getProjectHub Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`getProjectHub Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getProjectHub Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`getProjectHub Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
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
    getProjectTopFolders(accessToken, hubId, projectId, xUserId, excludeDeleted, projectFilesOnly, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getProjectTopFolders ");
            try {
                const request = yield ProjectsApiFp(this.sdkManager).getProjectTopFolders(accessToken, hubId, projectId, xUserId, excludeDeleted, projectFilesOnly, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getProjectTopFolders Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getProjectTopFolders Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`getProjectTopFolders Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getProjectTopFolders Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`getProjectTopFolders Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
