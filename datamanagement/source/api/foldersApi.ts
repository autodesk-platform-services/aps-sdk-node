/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, DataManagementApiError } from '../base';
import { FilterDirection } from '../model';
import { FilterRefType } from '../model';
import { FilterType } from '../model';
import { FilterTypeVersion } from '../model';
import { Folder } from '../model';
import { FolderContents } from '../model';
import { FolderPayload } from '../model';
import { FolderRefs } from '../model';
import { ModifyFolderPayload } from '../model';
import { RelationshipLinks } from '../model';
import { RelationshipRefs } from '../model';
import { RelationshipRefsPayload } from '../model';
import { Search } from '../model';
import { ComparisonTypes } from '../model';
/**
 * FoldersApi - axios parameter creator
 * @export
 */
export const FoldersApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Creates a new folder in the specified project. Use the ``parent`` attribute in the request body to specify where in the hierarchy the new folder should be located. Folders can be nested up to 25 levels deep.  Use the `Modify a Folder </en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-PATCH/>`_ operation to delete and restore folders.  Before you use the Data Management API to access BIM 360 Docs folders, provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Create a Folder
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {FolderPayload} [folderPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFolder: async (accessToken: string, projectId: string, xUserId?: string, folderPayload?: FolderPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createFolder', 'projectId', projectId)
            const localVarPath = `/data/v1/projects/{project_id}/folders`
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
            localVarRequestOptions.data = serializeDataIfNeeded(folderPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a custom relationship between a folder and another resource within the data domain service (folder, item, or version).
         * @summary Create a Custom Relationship for a Folder
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {RelationshipRefsPayload} [relationshipRefsPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFolderRelationshipsRef: async (accessToken: string, folderId: string, projectId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createFolderRelationshipsRef', 'folderId', folderId)
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createFolderRelationshipsRef', 'projectId', projectId)
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs`
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)))
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
            localVarRequestOptions.data = serializeDataIfNeeded(relationshipRefsPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the folder specified by the ``folder_id`` parameter from within the project identified by the ``project_id`` parameter. All folders and subfolders within a project (including the root folder) have a unique ID.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Get a Folder
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [ifModifiedSince] Specify a date in the &#x60;&#x60;YYYY-MM-DDThh:mm:ss.sz&#x60;&#x60; format. If the resource has not been modified since the specified date/time, the response will return a HTTP status of 304 without any response body; the &#x60;&#x60;Last-Modified&#x60;&#x60; response header will contain the date of last modification.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolder: async (accessToken: string, projectId: string, folderId: string, ifModifiedSince?: string, xUserId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getFolder', 'projectId', projectId)
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolder', 'folderId', folderId)
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (ifModifiedSince != null) {
                localVarHeaderParameter['If-Modified-Since'] = typeof ifModifiedSince === 'string'
                    ? ifModifiedSince
                    : JSON.stringify(ifModifiedSince);
            }

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of items and folders within the specified folder. Items represent word documents, fusion design files, drawings, spreadsheets, etc.  The resources contained in the ``included`` array of the response are their tip versions.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Folder Contents
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<FilterType>} [filterType] Filter by the type of the objects in the folder. Supported values are &#x60;&#x60;folders&#x60;&#x60; and &#x60;&#x60;items&#x60;&#x60;.
         * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
         * @param {Array<string>} [filterLastModifiedTimeRollup] Filter by the &#x60;&#x60;lastModifiedTimeRollup&#x60;&#x60; attribute. Supported values are date-time string in the form &#x60;&#x60;YYYY-MM-DDTHH:MM:SS.000000Z&#x60;&#x60; or &#x60;&#x60;YYYY-MM-DDTHH:MM:SS&#x60;&#x60; based on RFC3339.
         * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
         * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
         * @param {boolean} [includeHidden] &#x60;&#x60;true&#x60;&#x60;: Response will contain items and folders that were deleted from BIM 360 Docs projects.   &#x60;&#x60;false&#x60;&#x60;: (Default): Response will not contain items and folders that were deleted from BIM 360 Docs projects.    To return only items and folders that were deleted from BIM 360 Docs projects, see the documentation on [Filtering](/en/docs/data/v2/overview/filtering/). 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderContents: async (accessToken: string, projectId: string, folderId: string, xUserId?: string, filterType?: Array<FilterType>, filterId?: Array<string>, filterExtensionType?: Array<string>, filterLastModifiedTimeRollup?: Array<string>, pageNumber?: number, pageLimit?: number, includeHidden?: boolean,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getFolderContents', 'projectId', projectId)
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderContents', 'folderId', folderId)
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}/contents`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (filterType) {
                localVarQueryParameter['filter[type]'] = filterType;
            }

            if (filterId) {
                localVarQueryParameter['filter[id]'] = filterId;
            }

            if (filterExtensionType) {
                localVarQueryParameter['filter[extension.type]'] = filterExtensionType;
            }

            if (filterLastModifiedTimeRollup) {
                localVarQueryParameter['filter[lastModifiedTimeRollup]'] = filterLastModifiedTimeRollup;
            }

            if (pageNumber !== undefined) {
                localVarQueryParameter['page[number]'] = pageNumber;
            }

            if (pageLimit !== undefined) {
                localVarQueryParameter['page[limit]'] = pageLimit;
            }

            if (includeHidden !== undefined) {
                localVarQueryParameter['includeHidden'] = includeHidden;
            }

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the parent folder of the specified folder. In a project, folders are organized in a hierarchy. Each folder except for the root folder has a parent folder.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Get Parent of a Folder
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderParent: async (accessToken: string, projectId: string, folderId: string, xUserId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getFolderParent', 'projectId', projectId)
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderParent', 'folderId', folderId)
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}/parent`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)));
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
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the resources (items, folders, and versions) that have a custom relationship with the specified folder. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Related Resources for a Folder
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<FilterTypeVersion>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
         * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderRefs: async (accessToken: string, projectId: string, folderId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterExtensionType?: Array<string>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getFolderRefs', 'projectId', projectId)
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderRefs', 'folderId', folderId)
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}/refs`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (filterType) {
                localVarQueryParameter['filter[type]'] = filterType;
            }

            if (filterId) {
                localVarQueryParameter['filter[id]'] = filterId;
            }

            if (filterExtensionType) {
                localVarQueryParameter['filter[extension.type]'] = filterExtensionType;
            }

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of links for the specified folder.   Custom relationships can be established between a folder and other external resources residing outside the data domain service. A link’s ``href`` attribute defines the target URI to access a resource.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Relationship Links for a Folder
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderRelationshipsLinks: async (accessToken: string, projectId: string, folderId: string, xUserId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getFolderRelationshipsLinks', 'projectId', projectId)
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderRelationshipsLinks', 'folderId', folderId)
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}/relationships/links`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)));
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
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the custom relationships associated with the specified folder. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Each relationship is defined by the ID of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in. The response body will have an included array that contains the resources in the relationship, which is essentially what is returned by the [List Related Resources for a Folder](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-refs-GET/) operation.    **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Custom Relationships for a Folder
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<FilterTypeVersion>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
         * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
         * @param {FilterRefType} [filterRefType] Filter by &#x60;&#x60;refType&#x60;&#x60;. Possible values: &#x60;&#x60;derived&#x60;&#x60;, &#x60;&#x60;dependencies&#x60;&#x60;, &#x60;&#x60;auxiliary&#x60;&#x60;, &#x60;&#x60;xrefs&#x60;&#x60;, and &#x60;&#x60;includes&#x60;&#x60;.
         * @param {FilterDirection} [filterDirection] Filter by the direction of the reference. Possible values: &#x60;&#x60;from&#x60;&#x60; and &#x60;&#x60;to&#x60;&#x60;.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderRelationshipsRefs: async (accessToken: string, folderId: string, projectId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterRefType?: FilterRefType, filterDirection?: FilterDirection, filterExtensionType?: Array<string>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderRelationshipsRefs', 'folderId', folderId)
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getFolderRelationshipsRefs', 'projectId', projectId)
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs`
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)))
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

            if (filterType) {
                localVarQueryParameter['filter[type]'] = filterType;
            }

            if (filterId) {
                localVarQueryParameter['filter[id]'] = filterId;
            }

            if (filterRefType !== undefined) {
                localVarQueryParameter['filter[refType]'] = filterRefType;
            }

            if (filterDirection !== undefined) {
                localVarQueryParameter['filter[direction]'] = filterDirection;
            }

            if (filterExtensionType) {
                localVarQueryParameter['filter[extension.type]'] = filterExtensionType;
            }

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Searches the specified folder and its subfolders and returns a list of the latest versions of the items you can access.   Use the ``filter`` query string parameter to narrow down the list as appropriate. You can filter by the following properties of the version payload:   - ``type`` property,  - ``id`` property,  - any of the attributes object properties.   For example, you can filter by ``createTime`` and ``mimeType``. It returns tip versions (latest versions) of properties where the filter conditions are satisfied. To verify the properties of the attributes object for a specific version, use the [Get a Version](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-GET/) operation.  To list the immediate contents of the folder without parsing subfolders, use the [List Folder Contents](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) operation.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Folder and Subfolder Contents
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} folderId The unique identifier of a folder.
         * @param {Array<string>} [filter] Filter the data. See the [Filtering](/en/docs/data/v2/overview/filtering/) section for details.
         * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderSearch: async (
            accessToken: string,
            projectId: string,
            folderId: string,
            filters?: { field: string; operator?: ComparisonTypes; value: string }[], // Operator is optional
            pageNumber?: number,
            options: ApsServiceRequestConfig = {}
        ): Promise<RequestArgs> => {
            // Verify required parameters
            assertParamExists('getFolderSearch', 'projectId', projectId);
            assertParamExists('getFolderSearch', 'folderId', folderId);
        
            // Construct the endpoint path
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}/search`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
        
            // Base options
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
        
            // Request options
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
        
            // Set Bearer Auth
            await setBearerAuthToObject(localVarHeaderParameter, accessToken);
        
            // Process filters
            if (filters && filters.length > 0) {
                filters.forEach(filter => {
                    const operator = filter.operator || ComparisonTypes.EqualTo; // Default to 'eq' if no operator is provided
                    const filterKey = `filter[${filter.field}]-${operator}`;
                    localVarQueryParameter[filterKey] = filter.value;
                });
            }
        
            // Page number
            if (pageNumber !== undefined) {
                localVarQueryParameter['page[number]'] = pageNumber;
            }
        
            // Set headers
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions?.headers ?? {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
        
            // Return request args
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },        
        /**
         * Renames, moves, hides, or unhides a folder. Marking a BIM 360 Docs folder as hidden effectively deletes it. You can restore it by changing its ``hidden`` attribute. You can also move BIM 360 Docs folders by changing their parent folder.  You cannot permanently delete BIM 360 Docs folders. They are tagged as hidden folders and are removed from the BIM 360 Docs UI and from regular Data Management API responses. You can use the hidden filter (``filter[hidden]=true``) to get a list of deleted folders with the [List Folder Contents](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) operation.  Before you use the Data Management API to access BIM 360 Docs folders, provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](/en.docs.acc.v1/overview/introduction/). 
         * @summary Modify a Folder
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {ModifyFolderPayload} [modifyFolderPayload] Describe the folder to be patched.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchFolder: async (accessToken: string, projectId: string, folderId: string, xUserId?: string, modifyFolderPayload?: ModifyFolderPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('patchFolder', 'projectId', projectId)
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('patchFolder', 'folderId', folderId)
            const localVarPath = `/data/v1/projects/{project_id}/folders/{folder_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(modifyFolderPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FoldersApi - functional programming interface
 * @export
 */
export const FoldersApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = FoldersApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Creates a new folder in the specified project. Use the ``parent`` attribute in the request body to specify where in the hierarchy the new folder should be located. Folders can be nested up to 25 levels deep.  Use the `Modify a Folder </en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-PATCH/>`_ operation to delete and restore folders.  Before you use the Data Management API to access BIM 360 Docs folders, provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Create a Folder
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {FolderPayload} [folderPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createFolder(accessToken: string, projectId: string, xUserId?: string, folderPayload?: FolderPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Folder>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFolder(accessToken, projectId, xUserId, folderPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Creates a custom relationship between a folder and another resource within the data domain service (folder, item, or version).
         * @summary Create a Custom Relationship for a Folder
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {RelationshipRefsPayload} [relationshipRefsPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createFolderRelationshipsRef(accessToken: string, folderId: string, projectId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFolderRelationshipsRef(accessToken, folderId, projectId, xUserId, relationshipRefsPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the folder specified by the ``folder_id`` parameter from within the project identified by the ``project_id`` parameter. All folders and subfolders within a project (including the root folder) have a unique ID.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Get a Folder
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [ifModifiedSince] Specify a date in the &#x60;&#x60;YYYY-MM-DDThh:mm:ss.sz&#x60;&#x60; format. If the resource has not been modified since the specified date/time, the response will return a HTTP status of 304 without any response body; the &#x60;&#x60;Last-Modified&#x60;&#x60; response header will contain the date of last modification.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFolder(accessToken: string, projectId: string, folderId: string, ifModifiedSince?: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Folder>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolder(accessToken, projectId, folderId, ifModifiedSince, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a list of items and folders within the specified folder. Items represent word documents, fusion design files, drawings, spreadsheets, etc.  The resources contained in the ``included`` array of the response are their tip versions.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Folder Contents
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<FilterType>} [filterType] Filter by the type of the objects in the folder. Supported values are &#x60;&#x60;folders&#x60;&#x60; and &#x60;&#x60;items&#x60;&#x60;.
         * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
         * @param {Array<string>} [filterLastModifiedTimeRollup] Filter by the &#x60;&#x60;lastModifiedTimeRollup&#x60;&#x60; attribute. Supported values are date-time string in the form &#x60;&#x60;YYYY-MM-DDTHH:MM:SS.000000Z&#x60;&#x60; or &#x60;&#x60;YYYY-MM-DDTHH:MM:SS&#x60;&#x60; based on RFC3339.
         * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
         * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
         * @param {boolean} [includeHidden] &#x60;&#x60;true&#x60;&#x60;: Response will contain items and folders that were deleted from BIM 360 Docs projects.   &#x60;&#x60;false&#x60;&#x60;: (Default): Response will not contain items and folders that were deleted from BIM 360 Docs projects.    To return only items and folders that were deleted from BIM 360 Docs projects, see the documentation on [Filtering](/en/docs/data/v2/overview/filtering/). 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFolderContents(accessToken: string, projectId: string, folderId: string, xUserId?: string, filterType?: Array<FilterType>, filterId?: Array<string>, filterExtensionType?: Array<string>, filterLastModifiedTimeRollup?: Array<string>, pageNumber?: number, pageLimit?: number, includeHidden?: boolean, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContents>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderContents(accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType, filterLastModifiedTimeRollup, pageNumber, pageLimit, includeHidden,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the parent folder of the specified folder. In a project, folders are organized in a hierarchy. Each folder except for the root folder has a parent folder.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Get Parent of a Folder
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFolderParent(accessToken: string, projectId: string, folderId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Folder>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderParent(accessToken, projectId, folderId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the resources (items, folders, and versions) that have a custom relationship with the specified folder. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Related Resources for a Folder
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<FilterTypeVersion>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
         * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFolderRefs(accessToken: string, projectId: string, folderId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderRefs>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderRefs(accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a list of links for the specified folder.   Custom relationships can be established between a folder and other external resources residing outside the data domain service. A link’s ``href`` attribute defines the target URI to access a resource.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Relationship Links for a Folder
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFolderRelationshipsLinks(accessToken: string, projectId: string, folderId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelationshipLinks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderRelationshipsLinks(accessToken, projectId, folderId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the custom relationships associated with the specified folder. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Each relationship is defined by the ID of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in. The response body will have an included array that contains the resources in the relationship, which is essentially what is returned by the [List Related Resources for a Folder](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-refs-GET/) operation.    **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Custom Relationships for a Folder
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<FilterTypeVersion>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
         * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
         * @param {FilterRefType} [filterRefType] Filter by &#x60;&#x60;refType&#x60;&#x60;. Possible values: &#x60;&#x60;derived&#x60;&#x60;, &#x60;&#x60;dependencies&#x60;&#x60;, &#x60;&#x60;auxiliary&#x60;&#x60;, &#x60;&#x60;xrefs&#x60;&#x60;, and &#x60;&#x60;includes&#x60;&#x60;.
         * @param {FilterDirection} [filterDirection] Filter by the direction of the reference. Possible values: &#x60;&#x60;from&#x60;&#x60; and &#x60;&#x60;to&#x60;&#x60;.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFolderRelationshipsRefs(accessToken: string, folderId: string, projectId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterRefType?: FilterRefType, filterDirection?: FilterDirection, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelationshipRefs>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderRelationshipsRefs(accessToken, folderId, projectId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Searches the specified folder and its subfolders and returns a list of the latest versions of the items you can access.   Use the ``filter`` query string parameter to narrow down the list as appropriate. You can filter by the following properties of the version payload:   - ``type`` property,  - ``id`` property,  - any of the attributes object properties.   For example, you can filter by ``createTime`` and ``mimeType``. It returns tip versions (latest versions) of properties where the filter conditions are satisfied. To verify the properties of the attributes object for a specific version, use the [Get a Version](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-GET/) operation.  To list the immediate contents of the folder without parsing subfolders, use the [List Folder Contents](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) operation.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Folder and Subfolder Contents
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} folderId The unique identifier of a folder.
         * @param {Array<string>} [filter] Filter the data. See the [Filtering](/en/docs/data/v2/overview/filtering/) section for details.
         * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFolderSearch(accessToken: string, projectId: string, folderId: string, filters?: { field: string; operator?: ComparisonTypes; value: string }[], pageNumber?: number, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Search>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderSearch(accessToken, projectId, folderId, filters, pageNumber,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Renames, moves, hides, or unhides a folder. Marking a BIM 360 Docs folder as hidden effectively deletes it. You can restore it by changing its ``hidden`` attribute. You can also move BIM 360 Docs folders by changing their parent folder.  You cannot permanently delete BIM 360 Docs folders. They are tagged as hidden folders and are removed from the BIM 360 Docs UI and from regular Data Management API responses. You can use the hidden filter (``filter[hidden]=true``) to get a list of deleted folders with the [List Folder Contents](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) operation.  Before you use the Data Management API to access BIM 360 Docs folders, provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](/en.docs.acc.v1/overview/introduction/). 
         * @summary Modify a Folder
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} folderId The unique identifier of a folder.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {ModifyFolderPayload} [modifyFolderPayload] Describe the folder to be patched.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchFolder(accessToken: string, projectId: string, folderId: string, xUserId?: string, modifyFolderPayload?: ModifyFolderPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Folder>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchFolder(accessToken, projectId, folderId, xUserId, modifyFolderPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * FoldersApi - interface
 * @export
 * @interface FoldersApi
 */
export interface FoldersApiInterface {
    /**
     * Creates a new folder in the specified project. Use the ``parent`` attribute in the request body to specify where in the hierarchy the new folder should be located. Folders can be nested up to 25 levels deep.  Use the `Modify a Folder </en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-PATCH/>`_ operation to delete and restore folders.  Before you use the Data Management API to access BIM 360 Docs folders, provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Create a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {FolderPayload} [folderPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApiInterface
     */
    createFolder(accessToken: string,projectId: string, xUserId?: string, folderPayload?: FolderPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Creates a custom relationship between a folder and another resource within the data domain service (folder, item, or version).
     * @summary Create a Custom Relationship for a Folder
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {RelationshipRefsPayload} [relationshipRefsPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApiInterface
     */
    createFolderRelationshipsRef(accessToken: string,folderId: string, projectId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the folder specified by the ``folder_id`` parameter from within the project identified by the ``project_id`` parameter. All folders and subfolders within a project (including the root folder) have a unique ID.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [ifModifiedSince] Specify a date in the &#x60;&#x60;YYYY-MM-DDThh:mm:ss.sz&#x60;&#x60; format. If the resource has not been modified since the specified date/time, the response will return a HTTP status of 304 without any response body; the &#x60;&#x60;Last-Modified&#x60;&#x60; response header will contain the date of last modification.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApiInterface
     */
    getFolder(accessToken: string,projectId: string, folderId: string, ifModifiedSince?: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a list of items and folders within the specified folder. Items represent word documents, fusion design files, drawings, spreadsheets, etc.  The resources contained in the ``included`` array of the response are their tip versions.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Folder Contents
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterType>} [filterType] Filter by the type of the objects in the folder. Supported values are &#x60;&#x60;folders&#x60;&#x60; and &#x60;&#x60;items&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param {Array<string>} [filterLastModifiedTimeRollup] Filter by the &#x60;&#x60;lastModifiedTimeRollup&#x60;&#x60; attribute. Supported values are date-time string in the form &#x60;&#x60;YYYY-MM-DDTHH:MM:SS.000000Z&#x60;&#x60; or &#x60;&#x60;YYYY-MM-DDTHH:MM:SS&#x60;&#x60; based on RFC3339.
     * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
     * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
     * @param {boolean} [includeHidden] &#x60;&#x60;true&#x60;&#x60;: Response will contain items and folders that were deleted from BIM 360 Docs projects.   &#x60;&#x60;false&#x60;&#x60;: (Default): Response will not contain items and folders that were deleted from BIM 360 Docs projects.    To return only items and folders that were deleted from BIM 360 Docs projects, see the documentation on [Filtering](/en/docs/data/v2/overview/filtering/). 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApiInterface
     */
    getFolderContents(accessToken: string,projectId: string, folderId: string, xUserId?: string, filterType?: Array<FilterType>, filterId?: Array<string>, filterExtensionType?: Array<string>, filterLastModifiedTimeRollup?: Array<string>, pageNumber?: number, pageLimit?: number, includeHidden?: boolean,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the parent folder of the specified folder. In a project, folders are organized in a hierarchy. Each folder except for the root folder has a parent folder.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get Parent of a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApiInterface
     */
    getFolderParent(accessToken: string,projectId: string, folderId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the resources (items, folders, and versions) that have a custom relationship with the specified folder. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Related Resources for a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterTypeVersion>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApiInterface
     */
    getFolderRefs(accessToken: string,projectId: string, folderId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterExtensionType?: Array<string>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a list of links for the specified folder.   Custom relationships can be established between a folder and other external resources residing outside the data domain service. A link’s ``href`` attribute defines the target URI to access a resource.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Relationship Links for a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApiInterface
     */
    getFolderRelationshipsLinks(accessToken: string,projectId: string, folderId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the custom relationships associated with the specified folder. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Each relationship is defined by the ID of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in. The response body will have an included array that contains the resources in the relationship, which is essentially what is returned by the [List Related Resources for a Folder](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-refs-GET/) operation.    **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Custom Relationships for a Folder
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterTypeVersion>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {FilterRefType} [filterRefType] Filter by &#x60;&#x60;refType&#x60;&#x60;. Possible values: &#x60;&#x60;derived&#x60;&#x60;, &#x60;&#x60;dependencies&#x60;&#x60;, &#x60;&#x60;auxiliary&#x60;&#x60;, &#x60;&#x60;xrefs&#x60;&#x60;, and &#x60;&#x60;includes&#x60;&#x60;.
     * @param {FilterDirection} [filterDirection] Filter by the direction of the reference. Possible values: &#x60;&#x60;from&#x60;&#x60; and &#x60;&#x60;to&#x60;&#x60;.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApiInterface
     */
    getFolderRelationshipsRefs(accessToken: string,folderId: string, projectId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterRefType?: FilterRefType, filterDirection?: FilterDirection, filterExtensionType?: Array<string>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Searches the specified folder and its subfolders and returns a list of the latest versions of the items you can access.   Use the ``filter`` query string parameter to narrow down the list as appropriate. You can filter by the following properties of the version payload:   - ``type`` property,  - ``id`` property,  - any of the attributes object properties.   For example, you can filter by ``createTime`` and ``mimeType``. It returns tip versions (latest versions) of properties where the filter conditions are satisfied. To verify the properties of the attributes object for a specific version, use the [Get a Version](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-GET/) operation.  To list the immediate contents of the folder without parsing subfolders, use the [List Folder Contents](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) operation.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Folder and Subfolder Contents
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {Array<string>} [filter] Filter the data. See the [Filtering](/en/docs/data/v2/overview/filtering/) section for details.
     * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApiInterface
     */
    getFolderSearch(accessToken: string,projectId: string, folderId: string, filters?: { field: string; operator?: ComparisonTypes; value: string }[], pageNumber?: number,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Renames, moves, hides, or unhides a folder. Marking a BIM 360 Docs folder as hidden effectively deletes it. You can restore it by changing its ``hidden`` attribute. You can also move BIM 360 Docs folders by changing their parent folder.  You cannot permanently delete BIM 360 Docs folders. They are tagged as hidden folders and are removed from the BIM 360 Docs UI and from regular Data Management API responses. You can use the hidden filter (``filter[hidden]=true``) to get a list of deleted folders with the [List Folder Contents](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) operation.  Before you use the Data Management API to access BIM 360 Docs folders, provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](/en.docs.acc.v1/overview/introduction/). 
     * @summary Modify a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {ModifyFolderPayload} [modifyFolderPayload] Describe the folder to be patched.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApiInterface
     */
    patchFolder(accessToken: string,projectId: string, folderId: string, xUserId?: string, modifyFolderPayload?: ModifyFolderPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * FoldersApi - object-oriented interface
 * @export
 * @class FoldersApi
 * @extends {BaseApi}
 */
export class FoldersApi extends BaseApi implements FoldersApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Creates a new folder in the specified project. Use the ``parent`` attribute in the request body to specify where in the hierarchy the new folder should be located. Folders can be nested up to 25 levels deep.  Use the `Modify a Folder </en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-PATCH/>`_ operation to delete and restore folders.  Before you use the Data Management API to access BIM 360 Docs folders, provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Create a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {FolderPayload} [folderPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public async createFolder(accessToken: string, projectId: string, xUserId?: string, folderPayload?: FolderPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createFolder ");
      try {
        const request =  await FoldersApiFp(this.sdkManager).createFolder(accessToken, projectId, xUserId, folderPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createFolder Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createFolder Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`createFolder Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createFolder Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`createFolder Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Creates a custom relationship between a folder and another resource within the data domain service (folder, item, or version).
     * @summary Create a Custom Relationship for a Folder
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {RelationshipRefsPayload} [relationshipRefsPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public async createFolderRelationshipsRef(accessToken: string, folderId: string, projectId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createFolderRelationshipsRef ");
      try {
        const request =  await FoldersApiFp(this.sdkManager).createFolderRelationshipsRef(accessToken, folderId, projectId, xUserId, relationshipRefsPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createFolderRelationshipsRef Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createFolderRelationshipsRef Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`createFolderRelationshipsRef Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createFolderRelationshipsRef Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`createFolderRelationshipsRef Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the folder specified by the ``folder_id`` parameter from within the project identified by the ``project_id`` parameter. All folders and subfolders within a project (including the root folder) have a unique ID.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [ifModifiedSince] Specify a date in the &#x60;&#x60;YYYY-MM-DDThh:mm:ss.sz&#x60;&#x60; format. If the resource has not been modified since the specified date/time, the response will return a HTTP status of 304 without any response body; the &#x60;&#x60;Last-Modified&#x60;&#x60; response header will contain the date of last modification.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public async getFolder(accessToken: string, projectId: string, folderId: string, ifModifiedSince?: string, xUserId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getFolder ");
      try {
        const request =  await FoldersApiFp(this.sdkManager).getFolder(accessToken, projectId, folderId, ifModifiedSince, xUserId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getFolder Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getFolder Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getFolder Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getFolder Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getFolder Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a list of items and folders within the specified folder. Items represent word documents, fusion design files, drawings, spreadsheets, etc.  The resources contained in the ``included`` array of the response are their tip versions.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Folder Contents
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterType>} [filterType] Filter by the type of the objects in the folder. Supported values are &#x60;&#x60;folders&#x60;&#x60; and &#x60;&#x60;items&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param {Array<string>} [filterLastModifiedTimeRollup] Filter by the &#x60;&#x60;lastModifiedTimeRollup&#x60;&#x60; attribute. Supported values are date-time string in the form &#x60;&#x60;YYYY-MM-DDTHH:MM:SS.000000Z&#x60;&#x60; or &#x60;&#x60;YYYY-MM-DDTHH:MM:SS&#x60;&#x60; based on RFC3339.
     * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
     * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
     * @param {boolean} [includeHidden] &#x60;&#x60;true&#x60;&#x60;: Response will contain items and folders that were deleted from BIM 360 Docs projects.   &#x60;&#x60;false&#x60;&#x60;: (Default): Response will not contain items and folders that were deleted from BIM 360 Docs projects.    To return only items and folders that were deleted from BIM 360 Docs projects, see the documentation on [Filtering](/en/docs/data/v2/overview/filtering/). 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public async getFolderContents(accessToken: string, projectId: string, folderId: string, xUserId?: string, filterType?: Array<FilterType>, filterId?: Array<string>, filterExtensionType?: Array<string>, filterLastModifiedTimeRollup?: Array<string>, pageNumber?: number, pageLimit?: number, includeHidden?: boolean, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getFolderContents ");
      try {
        const request =  await FoldersApiFp(this.sdkManager).getFolderContents(accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType, filterLastModifiedTimeRollup, pageNumber, pageLimit, includeHidden,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getFolderContents Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getFolderContents Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getFolderContents Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getFolderContents Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getFolderContents Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the parent folder of the specified folder. In a project, folders are organized in a hierarchy. Each folder except for the root folder has a parent folder.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get Parent of a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public async getFolderParent(accessToken: string, projectId: string, folderId: string, xUserId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getFolderParent ");
      try {
        const request =  await FoldersApiFp(this.sdkManager).getFolderParent(accessToken, projectId, folderId, xUserId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getFolderParent Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getFolderParent Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getFolderParent Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getFolderParent Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getFolderParent Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the resources (items, folders, and versions) that have a custom relationship with the specified folder. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Related Resources for a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterTypeVersion>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public async getFolderRefs(accessToken: string, projectId: string, folderId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getFolderRefs ");
      try {
        const request =  await FoldersApiFp(this.sdkManager).getFolderRefs(accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getFolderRefs Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getFolderRefs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getFolderRefs Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getFolderRefs Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getFolderRefs Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a list of links for the specified folder.   Custom relationships can be established between a folder and other external resources residing outside the data domain service. A link’s ``href`` attribute defines the target URI to access a resource.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Relationship Links for a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public async getFolderRelationshipsLinks(accessToken: string, projectId: string, folderId: string, xUserId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getFolderRelationshipsLinks ");
      try {
        const request =  await FoldersApiFp(this.sdkManager).getFolderRelationshipsLinks(accessToken, projectId, folderId, xUserId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getFolderRelationshipsLinks Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getFolderRelationshipsLinks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getFolderRelationshipsLinks Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getFolderRelationshipsLinks Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getFolderRelationshipsLinks Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the custom relationships associated with the specified folder. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Each relationship is defined by the ID of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in. The response body will have an included array that contains the resources in the relationship, which is essentially what is returned by the [List Related Resources for a Folder](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-refs-GET/) operation.    **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Custom Relationships for a Folder
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterTypeVersion>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {FilterRefType} [filterRefType] Filter by &#x60;&#x60;refType&#x60;&#x60;. Possible values: &#x60;&#x60;derived&#x60;&#x60;, &#x60;&#x60;dependencies&#x60;&#x60;, &#x60;&#x60;auxiliary&#x60;&#x60;, &#x60;&#x60;xrefs&#x60;&#x60;, and &#x60;&#x60;includes&#x60;&#x60;.
     * @param {FilterDirection} [filterDirection] Filter by the direction of the reference. Possible values: &#x60;&#x60;from&#x60;&#x60; and &#x60;&#x60;to&#x60;&#x60;.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public async getFolderRelationshipsRefs(accessToken: string, folderId: string, projectId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterRefType?: FilterRefType, filterDirection?: FilterDirection, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getFolderRelationshipsRefs ");
      try {
        const request =  await FoldersApiFp(this.sdkManager).getFolderRelationshipsRefs(accessToken, folderId, projectId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getFolderRelationshipsRefs Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getFolderRelationshipsRefs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getFolderRelationshipsRefs Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getFolderRelationshipsRefs Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getFolderRelationshipsRefs Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Searches the specified folder and its subfolders and returns a list of the latest versions of the items you can access.   Use the ``filter`` query string parameter to narrow down the list as appropriate. You can filter by the following properties of the version payload:   - ``type`` property,  - ``id`` property,  - any of the attributes object properties.   For example, you can filter by ``createTime`` and ``mimeType``. It returns tip versions (latest versions) of properties where the filter conditions are satisfied. To verify the properties of the attributes object for a specific version, use the [Get a Version](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-GET/) operation.  To list the immediate contents of the folder without parsing subfolders, use the [List Folder Contents](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) operation.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Folder and Subfolder Contents
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {Array<string>} [filter] Filter the data. See the [Filtering](/en/docs/data/v2/overview/filtering/) section for details.
     * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public async getFolderSearch(accessToken: string, projectId: string, folderId: string, filters?: { field: string; operator?: ComparisonTypes; value: string }[], pageNumber?: number, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getFolderSearch ");
      try {
        const request =  await FoldersApiFp(this.sdkManager).getFolderSearch(accessToken, projectId, folderId, filters, pageNumber,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getFolderSearch Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getFolderSearch Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getFolderSearch Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getFolderSearch Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getFolderSearch Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Renames, moves, hides, or unhides a folder. Marking a BIM 360 Docs folder as hidden effectively deletes it. You can restore it by changing its ``hidden`` attribute. You can also move BIM 360 Docs folders by changing their parent folder.  You cannot permanently delete BIM 360 Docs folders. They are tagged as hidden folders and are removed from the BIM 360 Docs UI and from regular Data Management API responses. You can use the hidden filter (``filter[hidden]=true``) to get a list of deleted folders with the [List Folder Contents](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) operation.  Before you use the Data Management API to access BIM 360 Docs folders, provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](/en.docs.acc.v1/overview/introduction/). 
     * @summary Modify a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {ModifyFolderPayload} [modifyFolderPayload] Describe the folder to be patched.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public async patchFolder(accessToken: string, projectId: string, folderId: string, xUserId?: string, modifyFolderPayload?: ModifyFolderPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into patchFolder ");
      try {
        const request =  await FoldersApiFp(this.sdkManager).patchFolder(accessToken, projectId, folderId, xUserId, modifyFolderPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`patchFolder Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`patchFolder Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`patchFolder Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`patchFolder Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`patchFolder Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

