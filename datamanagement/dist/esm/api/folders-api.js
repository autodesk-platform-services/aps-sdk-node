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
 * FoldersApi - axios parameter creator
 * @export
 */
export const FoldersApiAxiosParamCreator = function (apsConfiguration) {
    return {
        /**
         * Creates a new folder. To delete and restore folders, use the PATCH projects/:project_id/folders/:folder_id endpoint.  BIM 360 and ACC  To access Docs folders using the Data Management API you need to provision your app in the Account Administrator portal. For more details, see the Manage Access to Docs tutorial. The number of subfolder levels is limited to 25. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Creates a new folder. To delete and restore folders, use the PATCH projects/:project_id/folders/:folder_id endpoint
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {FolderPayload} [folderPayload] Describe the folder to be created.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFolder: (accessToken, projectId, xUserId, folderPayload, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createFolder', 'projectId', projectId);
            const localVarPath = `/data/v1/projects/{project_id}/folders`
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
            localVarRequestOptions.data = serializeDataIfNeeded(folderPayload, localVarRequestOptions, apsConfiguration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Creates a custom relationship between a folder and another resource within the data domain service (folder, item, or version).
         * @summary Creates a custom relationship between a folder and another resource within the data
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {RelationshipRefsPayload} [relationshipRefsPayload] Describe the ref to be created.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFolderRelationshipsRef: (accessToken, folderId, projectId, xUserId, relationshipRefsPayload, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createFolderRelationshipsRef', 'folderId', folderId);
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createFolderRelationshipsRef', 'projectId', projectId);
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs`
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)))
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
            localVarRequestOptions.data = serializeDataIfNeeded(relationshipRefsPayload, localVarRequestOptions, apsConfiguration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Returns the folder by ID for any folder within a given project. All folders or sub-folders within a project are associated with their own unique ID, including the root folder.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the folder by ID for any folder within a given project
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [ifModifiedSince] If the resource has not been modified since, the response will be a 304 without any body; the Last-Modified response header will contain the date of last modification.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolder: (accessToken, projectId, folderId, ifModifiedSince, xUserId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getFolder', 'projectId', projectId);
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolder', 'folderId', folderId);
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (ifModifiedSince != null) {
                localVarHeaderParameter['If-Modified-Since'] = String(ifModifiedSince);
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
         * Returns a collection of items and folders within a folder. Items represent word documents, fusion design files, drawings, spreadsheets, etc.  Notes:  The tip version for each item resource is included by default in the included array of the payload. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a collection of items and folders within a folder
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param {Array<string>} [filterLastModifiedTimeRollup] Filter by the lastModifiedTimeRollup in attributes Supported values are date-time string in the form YYYY-MM-DDTHH:MM:SS.000000Z or YYYY-MM-DDTHH:MM:SS based on RFC3339
         * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
         * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
         * @param {boolean} [includeHidden] true: response will also include items and folders that were deleted from BIM 360 Docs projects. false (default): response will not include items and folders that were deleted from BIM 360 Docs projects.  To return only items and folders that were deleted from BIM 360 Docs projects, see the Filtering section.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderContents: (accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType, filterLastModifiedTimeRollup, pageNumber, pageLimit, includeHidden, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getFolderContents', 'projectId', projectId);
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderContents', 'folderId', folderId);
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}/contents`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (filterType) {
                localVarQueryParameter['filter_type'] = filterType;
            }
            if (filterId) {
                localVarQueryParameter['filter_id'] = filterId;
            }
            if (filterExtensionType) {
                localVarQueryParameter['filter_extension_type'] = filterExtensionType;
            }
            if (filterLastModifiedTimeRollup) {
                localVarQueryParameter['filter_lastModifiedTimeRollup'] = filterLastModifiedTimeRollup;
            }
            if (pageNumber !== undefined) {
                localVarQueryParameter['page_number'] = pageNumber;
            }
            if (pageLimit !== undefined) {
                localVarQueryParameter['page_limit'] = pageLimit;
            }
            if (includeHidden !== undefined) {
                localVarQueryParameter['includeHidden'] = includeHidden;
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
         * Returns the parent folder (if it exists). In a project, subfolders and resource items are stored under a folder except the root folder which does not have a parent of its own.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary nt folder (if it exists)
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderParent: (accessToken, projectId, folderId, xUserId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getFolderParent', 'projectId', projectId);
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderParent', 'folderId', folderId);
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}/parent`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)));
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
         * Returns the resources (items, folders, and versions) that have a custom relationship with the given folder_id. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the ref resources that are involved in the relationship, which is essentially the GET projects/:project_id/folders/:folder_id/relationships/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the resources (items, folders, and versions)
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {string} [filterType] Filter by the type of the ref target. Supported values include folders, items, and versions.
         * @param {string} [filterId] Filter by the id of the ref target.
         * @param {string} [filterExtensionType] Filter by the extension type.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderRefs: (accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getFolderRefs', 'projectId', projectId);
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderRefs', 'folderId', folderId);
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}/refs`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (filterType !== undefined) {
                localVarQueryParameter['filter[type]'] = filterType;
            }
            if (filterId !== undefined) {
                localVarQueryParameter['filter[id]'] = filterId;
            }
            if (filterExtensionType !== undefined) {
                localVarQueryParameter['filter[extension.type]'] = filterExtensionType;
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
         * Returns a collection of links for the given folder_id. Custom relationships can be established between a folder and other external resources residing outside the data domain service. A link’s href defines the target URI to access a resource.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a collection of links for the given folder_id
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderRelationshipsLinks: (accessToken, projectId, folderId, xUserId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getFolderRelationshipsLinks', 'projectId', projectId);
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderRelationshipsLinks', 'folderId', folderId);
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}/relationships/links`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)));
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
         * Returns the custom relationships that are associated with the given folder_id. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the resources that are involved in the relationship, which is essentially the GET projects/:project_id/folders/:folder_id/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the custom relationships that are associated with the given folder_id
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {GetFolderRelationshipsRefsFilterRefTypeEnum} [filterRefType] Filter by refType. Possible values: derived, dependencies, auxiliary, xrefs, includes
         * @param {GetFolderRelationshipsRefsFilterDirectionEnum} [filterDirection] Filter by the direction of the reference. Possible values: from, to
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderRelationshipsRefs: (accessToken, folderId, projectId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderRelationshipsRefs', 'folderId', folderId);
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getFolderRelationshipsRefs', 'projectId', projectId);
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs`
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)))
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
            if (filterType) {
                localVarQueryParameter['filter_type'] = filterType;
            }
            if (filterId) {
                localVarQueryParameter['filter_id'] = filterId;
            }
            if (filterRefType !== undefined) {
                localVarQueryParameter['filter_refType'] = filterRefType;
            }
            if (filterDirection !== undefined) {
                localVarQueryParameter['filter_direction'] = filterDirection;
            }
            if (filterExtensionType) {
                localVarQueryParameter['filter_extension_type'] = filterExtensionType;
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
         * Filters the data of a folder and recursively in the subfolders of any project accessible to you, using the filter query string parameter. You can filter the following properties from the version payload: the type property, the id property, and any of the attributes object properties. For example, you can filter createTime, mimeType. It returns tip versions (latest versions) of properties where the filter conditions are satisfied. To verify the properties of the attributes object for a specific version, see the GET projects/:project_id/versions/:version_id.  To filter a folder\'s data without recursively filtering its subfolders, see the GET projects/:project_id/folders/:folder_id/contents endpoint.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Filters the data of a folder and recursively in the subfolders
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [filter] Filter the data. See the Filtering section for details.
         * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderSearch: (accessToken, projectId, folderId, filter, pageNumber, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getFolderSearch', 'projectId', projectId);
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderSearch', 'folderId', folderId);
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}/search`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (pageNumber !== undefined) {
                localVarQueryParameter['page_number'] = pageNumber;
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
         * Modifies folder names. You can also use this endpoint to delete and restore BIM 360 Docs folders by using the hidden attribute, or move BIM 360 Docs folders by using parent relationships.  Note that you cannot permanently delete BIM 360 Docs folders. They are tagged as hidden folders and are removed from the BIM 360 Docs UI and from regular Data Management API responses until you restore them. You can use the hidden filter (filter[hidden]=true) to get a list of deleted folders with the GET projects/:project_id/folders/:folder_id/contents endpoint.  Note that to access BIM 360 Docs folders using the Data Management API you need to provision your app in the BIM 360 Account Administrator portal. For more details, see the Manage Access to Docs tutorial.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Modifies folder names
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {ModifyFolderPayload} [modifyFolderPayload] Describe the folder to be patched.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchFolder: (accessToken, projectId, folderId, xUserId, modifyFolderPayload, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('patchFolder', 'projectId', projectId);
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('patchFolder', 'folderId', folderId);
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PATCH' }, baseOptions), options);
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
            localVarRequestOptions.data = serializeDataIfNeeded(modifyFolderPayload, localVarRequestOptions, apsConfiguration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * FoldersApi - functional programming interface
 * @export
 */
export const FoldersApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = FoldersApiAxiosParamCreator(sdkManager.apsconfiguration);
    return {
        /**
         * Creates a new folder. To delete and restore folders, use the PATCH projects/:project_id/folders/:folder_id endpoint.  BIM 360 and ACC  To access Docs folders using the Data Management API you need to provision your app in the Account Administrator portal. For more details, see the Manage Access to Docs tutorial. The number of subfolder levels is limited to 25. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Creates a new folder. To delete and restore folders, use the PATCH projects/:project_id/folders/:folder_id endpoint
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {FolderPayload} [folderPayload] Describe the folder to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFolder(accessToken, projectId, xUserId, folderPayload, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.createFolder(accessToken, projectId, xUserId, folderPayload, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Creates a custom relationship between a folder and another resource within the data domain service (folder, item, or version).
         * @summary Creates a custom relationship between a folder and another resource within the data
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {RelationshipRefsPayload} [relationshipRefsPayload] Describe the ref to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFolderRelationshipsRef(accessToken, folderId, projectId, xUserId, relationshipRefsPayload, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.createFolderRelationshipsRef(accessToken, folderId, projectId, xUserId, relationshipRefsPayload, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Returns the folder by ID for any folder within a given project. All folders or sub-folders within a project are associated with their own unique ID, including the root folder.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the folder by ID for any folder within a given project
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [ifModifiedSince] If the resource has not been modified since, the response will be a 304 without any body; the Last-Modified response header will contain the date of last modification.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolder(accessToken, projectId, folderId, ifModifiedSince, xUserId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getFolder(accessToken, projectId, folderId, ifModifiedSince, xUserId, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Returns a collection of items and folders within a folder. Items represent word documents, fusion design files, drawings, spreadsheets, etc.  Notes:  The tip version for each item resource is included by default in the included array of the payload. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a collection of items and folders within a folder
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param {Array<string>} [filterLastModifiedTimeRollup] Filter by the lastModifiedTimeRollup in attributes Supported values are date-time string in the form YYYY-MM-DDTHH:MM:SS.000000Z or YYYY-MM-DDTHH:MM:SS based on RFC3339
         * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
         * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
         * @param {boolean} [includeHidden] true: response will also include items and folders that were deleted from BIM 360 Docs projects. false (default): response will not include items and folders that were deleted from BIM 360 Docs projects.  To return only items and folders that were deleted from BIM 360 Docs projects, see the Filtering section.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderContents(accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType, filterLastModifiedTimeRollup, pageNumber, pageLimit, includeHidden, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getFolderContents(accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType, filterLastModifiedTimeRollup, pageNumber, pageLimit, includeHidden, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Returns the parent folder (if it exists). In a project, subfolders and resource items are stored under a folder except the root folder which does not have a parent of its own.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary nt folder (if it exists)
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderParent(accessToken, projectId, folderId, xUserId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getFolderParent(accessToken, projectId, folderId, xUserId, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Returns the resources (items, folders, and versions) that have a custom relationship with the given folder_id. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the ref resources that are involved in the relationship, which is essentially the GET projects/:project_id/folders/:folder_id/relationships/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the resources (items, folders, and versions)
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {string} [filterType] Filter by the type of the ref target. Supported values include folders, items, and versions.
         * @param {string} [filterId] Filter by the id of the ref target.
         * @param {string} [filterExtensionType] Filter by the extension type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderRefs(accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getFolderRefs(accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Returns a collection of links for the given folder_id. Custom relationships can be established between a folder and other external resources residing outside the data domain service. A link’s href defines the target URI to access a resource.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a collection of links for the given folder_id
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderRelationshipsLinks(accessToken, projectId, folderId, xUserId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getFolderRelationshipsLinks(accessToken, projectId, folderId, xUserId, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Returns the custom relationships that are associated with the given folder_id. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the resources that are involved in the relationship, which is essentially the GET projects/:project_id/folders/:folder_id/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the custom relationships that are associated with the given folder_id
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {GetFolderRelationshipsRefsFilterRefTypeEnum} [filterRefType] Filter by refType. Possible values: derived, dependencies, auxiliary, xrefs, includes
         * @param {GetFolderRelationshipsRefsFilterDirectionEnum} [filterDirection] Filter by the direction of the reference. Possible values: from, to
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderRelationshipsRefs(accessToken, folderId, projectId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getFolderRelationshipsRefs(accessToken, folderId, projectId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Filters the data of a folder and recursively in the subfolders of any project accessible to you, using the filter query string parameter. You can filter the following properties from the version payload: the type property, the id property, and any of the attributes object properties. For example, you can filter createTime, mimeType. It returns tip versions (latest versions) of properties where the filter conditions are satisfied. To verify the properties of the attributes object for a specific version, see the GET projects/:project_id/versions/:version_id.  To filter a folder\'s data without recursively filtering its subfolders, see the GET projects/:project_id/folders/:folder_id/contents endpoint.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Filters the data of a folder and recursively in the subfolders
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [filter] Filter the data. See the Filtering section for details.
         * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderSearch(accessToken, projectId, folderId, filter, pageNumber, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getFolderSearch(accessToken, projectId, folderId, filter, pageNumber, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Modifies folder names. You can also use this endpoint to delete and restore BIM 360 Docs folders by using the hidden attribute, or move BIM 360 Docs folders by using parent relationships.  Note that you cannot permanently delete BIM 360 Docs folders. They are tagged as hidden folders and are removed from the BIM 360 Docs UI and from regular Data Management API responses until you restore them. You can use the hidden filter (filter[hidden]=true) to get a list of deleted folders with the GET projects/:project_id/folders/:folder_id/contents endpoint.  Note that to access BIM 360 Docs folders using the Data Management API you need to provision your app in the BIM 360 Account Administrator portal. For more details, see the Manage Access to Docs tutorial.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Modifies folder names
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {ModifyFolderPayload} [modifyFolderPayload] Describe the folder to be patched.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchFolder(accessToken, projectId, folderId, xUserId, modifyFolderPayload, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.patchFolder(accessToken, projectId, folderId, xUserId, modifyFolderPayload, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
/**
 * FoldersApi - object-oriented interface
 * @export
 * @class FoldersApi
 * @extends {BaseAPI}
 */
export class FoldersApi extends BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
    /**
     * Creates a new folder. To delete and restore folders, use the PATCH projects/:project_id/folders/:folder_id endpoint.  BIM 360 and ACC  To access Docs folders using the Data Management API you need to provision your app in the Account Administrator portal. For more details, see the Manage Access to Docs tutorial. The number of subfolder levels is limited to 25. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Creates a new folder. To delete and restore folders, use the PATCH projects/:project_id/folders/:folder_id endpoint
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {FolderPayload} [folderPayload] Describe the folder to be created.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    createFolder(accessToken, projectId, xUserId, folderPayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into createFolder ");
            try {
                const request = yield FoldersApiFp(this.sdkManager).createFolder(accessToken, projectId, xUserId, folderPayload, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`createFolder Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`createFolder Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`createFolder Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`createFolder Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`createFolder Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Creates a custom relationship between a folder and another resource within the data domain service (folder, item, or version).
     * @summary Creates a custom relationship between a folder and another resource within the data
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {RelationshipRefsPayload} [relationshipRefsPayload] Describe the ref to be created.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    createFolderRelationshipsRef(accessToken, folderId, projectId, xUserId, relationshipRefsPayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into createFolderRelationshipsRef ");
            try {
                const request = yield FoldersApiFp(this.sdkManager).createFolderRelationshipsRef(accessToken, folderId, projectId, xUserId, relationshipRefsPayload, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`createFolderRelationshipsRef Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`createFolderRelationshipsRef Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`createFolderRelationshipsRef Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`createFolderRelationshipsRef Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`createFolderRelationshipsRef Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Returns the folder by ID for any folder within a given project. All folders or sub-folders within a project are associated with their own unique ID, including the root folder.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the folder by ID for any folder within a given project
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [ifModifiedSince] If the resource has not been modified since, the response will be a 304 without any body; the Last-Modified response header will contain the date of last modification.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    getFolder(accessToken, projectId, folderId, ifModifiedSince, xUserId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getFolder ");
            try {
                const request = yield FoldersApiFp(this.sdkManager).getFolder(accessToken, projectId, folderId, ifModifiedSince, xUserId, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getFolder Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getFolder Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`getFolder Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getFolder Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`getFolder Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Returns a collection of items and folders within a folder. Items represent word documents, fusion design files, drawings, spreadsheets, etc.  Notes:  The tip version for each item resource is included by default in the included array of the payload. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of items and folders within a folder
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param {Array<string>} [filterLastModifiedTimeRollup] Filter by the lastModifiedTimeRollup in attributes Supported values are date-time string in the form YYYY-MM-DDTHH:MM:SS.000000Z or YYYY-MM-DDTHH:MM:SS based on RFC3339
     * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
     * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
     * @param {boolean} [includeHidden] true: response will also include items and folders that were deleted from BIM 360 Docs projects. false (default): response will not include items and folders that were deleted from BIM 360 Docs projects.  To return only items and folders that were deleted from BIM 360 Docs projects, see the Filtering section.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    getFolderContents(accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType, filterLastModifiedTimeRollup, pageNumber, pageLimit, includeHidden, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getFolderContents ");
            try {
                const request = yield FoldersApiFp(this.sdkManager).getFolderContents(accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType, filterLastModifiedTimeRollup, pageNumber, pageLimit, includeHidden, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getFolderContents Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getFolderContents Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`getFolderContents Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getFolderContents Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`getFolderContents Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Returns the parent folder (if it exists). In a project, subfolders and resource items are stored under a folder except the root folder which does not have a parent of its own.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary nt folder (if it exists)
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    getFolderParent(accessToken, projectId, folderId, xUserId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getFolderParent ");
            try {
                const request = yield FoldersApiFp(this.sdkManager).getFolderParent(accessToken, projectId, folderId, xUserId, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getFolderParent Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getFolderParent Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`getFolderParent Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getFolderParent Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`getFolderParent Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Returns the resources (items, folders, and versions) that have a custom relationship with the given folder_id. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the ref resources that are involved in the relationship, which is essentially the GET projects/:project_id/folders/:folder_id/relationships/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the resources (items, folders, and versions)
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {string} [filterType] Filter by the type of the ref target. Supported values include folders, items, and versions.
     * @param {string} [filterId] Filter by the id of the ref target.
     * @param {string} [filterExtensionType] Filter by the extension type.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    getFolderRefs(accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getFolderRefs ");
            try {
                const request = yield FoldersApiFp(this.sdkManager).getFolderRefs(accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getFolderRefs Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getFolderRefs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`getFolderRefs Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getFolderRefs Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`getFolderRefs Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Returns a collection of links for the given folder_id. Custom relationships can be established between a folder and other external resources residing outside the data domain service. A link’s href defines the target URI to access a resource.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of links for the given folder_id
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    getFolderRelationshipsLinks(accessToken, projectId, folderId, xUserId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getFolderRelationshipsLinks ");
            try {
                const request = yield FoldersApiFp(this.sdkManager).getFolderRelationshipsLinks(accessToken, projectId, folderId, xUserId, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getFolderRelationshipsLinks Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getFolderRelationshipsLinks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`getFolderRelationshipsLinks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getFolderRelationshipsLinks Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`getFolderRelationshipsLinks Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Returns the custom relationships that are associated with the given folder_id. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the resources that are involved in the relationship, which is essentially the GET projects/:project_id/folders/:folder_id/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the custom relationships that are associated with the given folder_id
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {GetFolderRelationshipsRefsFilterRefTypeEnum} [filterRefType] Filter by refType. Possible values: derived, dependencies, auxiliary, xrefs, includes
     * @param {GetFolderRelationshipsRefsFilterDirectionEnum} [filterDirection] Filter by the direction of the reference. Possible values: from, to
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    getFolderRelationshipsRefs(accessToken, folderId, projectId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getFolderRelationshipsRefs ");
            try {
                const request = yield FoldersApiFp(this.sdkManager).getFolderRelationshipsRefs(accessToken, folderId, projectId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getFolderRelationshipsRefs Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getFolderRelationshipsRefs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`getFolderRelationshipsRefs Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getFolderRelationshipsRefs Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`getFolderRelationshipsRefs Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Filters the data of a folder and recursively in the subfolders of any project accessible to you, using the filter query string parameter. You can filter the following properties from the version payload: the type property, the id property, and any of the attributes object properties. For example, you can filter createTime, mimeType. It returns tip versions (latest versions) of properties where the filter conditions are satisfied. To verify the properties of the attributes object for a specific version, see the GET projects/:project_id/versions/:version_id.  To filter a folder\'s data without recursively filtering its subfolders, see the GET projects/:project_id/folders/:folder_id/contents endpoint.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Filters the data of a folder and recursively in the subfolders
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [filter] Filter the data. See the Filtering section for details.
     * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    getFolderSearch(accessToken, projectId, folderId, filter, pageNumber, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getFolderSearch ");
            try {
                const request = yield FoldersApiFp(this.sdkManager).getFolderSearch(accessToken, projectId, folderId, filter, pageNumber, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getFolderSearch Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getFolderSearch Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`getFolderSearch Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getFolderSearch Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`getFolderSearch Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Modifies folder names. You can also use this endpoint to delete and restore BIM 360 Docs folders by using the hidden attribute, or move BIM 360 Docs folders by using parent relationships.  Note that you cannot permanently delete BIM 360 Docs folders. They are tagged as hidden folders and are removed from the BIM 360 Docs UI and from regular Data Management API responses until you restore them. You can use the hidden filter (filter[hidden]=true) to get a list of deleted folders with the GET projects/:project_id/folders/:folder_id/contents endpoint.  Note that to access BIM 360 Docs folders using the Data Management API you need to provision your app in the BIM 360 Account Administrator portal. For more details, see the Manage Access to Docs tutorial.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Modifies folder names
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {ModifyFolderPayload} [modifyFolderPayload] Describe the folder to be patched.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    patchFolder(accessToken, projectId, folderId, xUserId, modifyFolderPayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into patchFolder ");
            try {
                const request = yield FoldersApiFp(this.sdkManager).patchFolder(accessToken, projectId, folderId, xUserId, modifyFolderPayload, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`patchFolder Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`patchFolder Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new DataManagementApiError(`patchFolder Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`patchFolder Request failed with no response received: ${error.request}`);
                    throw new DataManagementApiError(`patchFolder Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
/**
 * @export
 */
export const GetFolderRelationshipsRefsFilterRefTypeEnum = {
    Derived: 'derived',
    Dependencies: 'dependencies',
    Auxiliary: 'auxiliary',
    Xrefs: 'xrefs',
    Includes: 'includes'
};
/**
 * @export
 */
export const GetFolderRelationshipsRefsFilterDirectionEnum = {
    From: 'from',
    To: 'to'
};
