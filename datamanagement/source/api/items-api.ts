/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse} from "autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, DataManagementApiError } from '../base';
import { Folder } from '../model';
import { GetHubs401Response } from '../model';
import { Item } from '../model';
import { ItemPayload } from '../model';
import { ItemTip } from '../model';
import { ModifyItemPayload } from '../model';
import { Refs } from '../model';
import { RelationshipLinks } from '../model';
import { RelationshipRefs } from '../model';
import { RelationshipRefsPayload } from '../model';
import { Versions } from '../model';
/**
 * ItemsApi - axios parameter creator
 * @export
 */
export const ItemsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Creates the first version of a file (item). To create additional versions of an item, use POST versions.  Before you create the first version you need to create a storage location for the file, and upload the file to the storage object. For more details about the workflow, see the tutorial on uploading a file.  This endpoint also copies versions of items to other folders in the same project. The endpoint creates a new item and a first version of the item in the target folder. You cannot copy versions of items across different projects and accounts.  To copy versions of items to existng items in other folders, use POST versions. POST versions creates a new version of the existing item in the target folder.  Note that to access BIM 360 Docs files using the Data Management API you need to provision your app in the BIM 360 Account Administrator portal. For more details, see the Manage Access to Docs tutorial.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Creates the first version of a file (item)
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {string} [copyFrom] Only relevant for copying files to BIM 360 Docs - the version ID (URN) of the file to copy. For details about finding the URN, follow the initial steps in the Download a File tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an item:autodesk.bim360:Document item extension type, and you can only copy files to the Project Files folder or to subfolders of the Project Files folder with an item:autodesk.bim360:File item extension type.  To verify an item’s extension type, use GET item, and check the attributes.extension.type attribute.  Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if the end user did not have permission to download files in the source folder, but does have permission to download files in the target folder, he/she will not be able to download the copied file.  Note that you cannot copy a file if it is in the middle of being uploaded, updated, or copied. To verify the current process state of a file, call GET item, and check the attributes.extension.data.processState attribute.
         * @param {ItemPayload} [itemPayload] Describe the item to be created.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createItem: async (accessToken: string, projectId: string, xUserId?: string, copyFrom?: string, itemPayload?: ItemPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createItem', 'projectId', projectId)
            const localVarPath = `/data/v1/projects/{project_id}/items`
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

            if (copyFrom !== undefined) {
                localVarQueryParameter['copyFrom'] = copyFrom;
            }

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(itemPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version)
         * @summary Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version)
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {RelationshipRefsPayload} [relationshipRefsPayload] Describe the ref to be created.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createItemRelationshipsRef: async (accessToken: string, projectId: string, itemId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createItemRelationshipsRef', 'projectId', projectId)
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('createItemRelationshipsRef', 'itemId', itemId)
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}/relationships/refs`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
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
         * Retrieves metadata for a specified item. Items represent word documents, fusion design files, drawings, spreadsheets, etc.  Notes:  The tip version for the item is included in the included array of the payload. To retrieve metadata for multiple items, see the ListItems command. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Retrieves metadata for a specified item
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {boolean} [includePathInProject] Specify whether to return pathInProject attribute in response for BIM 360 Docs projects. pathInProject is the relative path of the item starting from project’s root folder. true: response will include pathInProject attribute for BIM 360 Docs projects.  false (default): response will not include pathInProject attribute for BIM 360 Docs projects.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItem: async (accessToken: string, projectId: string, itemId: string, xUserId?: string, includePathInProject?: boolean,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getItem', 'projectId', projectId)
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getItem', 'itemId', itemId)
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (includePathInProject !== undefined) {
                localVarQueryParameter['includePathInProject'] = includePathInProject;
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
         * Returns the \"parent\" folder for the given item.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the \"parent\" folder for the given item
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemParentFolder: async (accessToken: string, projectId: string, itemId: string, xUserId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getItemParentFolder', 'projectId', projectId)
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getItemParentFolder', 'itemId', itemId)
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}/parent`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
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
         * Returns the resources (items, folders, and versions) that have a custom relationship with the given item_id. Custom relationships can be established between an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the ref resources that are involved in the relationship, which is essentially the GET projects/:project_id/items/:item_id/relationships/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the resources (items, folders, and versions) that have a custom relationship with the given item_id
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemRefs: async (accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterExtensionType?: Array<string>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getItemRefs', 'projectId', projectId)
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getItemRefs', 'itemId', itemId)
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}/refs`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
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
                localVarQueryParameter['filter_type'] = filterType;
            }

            if (filterId) {
                localVarQueryParameter['filter_id'] = filterId;
            }

            if (filterExtensionType) {
                localVarQueryParameter['filter_extension_type'] = filterExtensionType;
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
         * Returns a collection of links for the given item_id. Custom relationships can be established between an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access a resource.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a collection of links for the given item_id
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemRelationshipsLinks: async (accessToken: string, projectId: string, itemId: string, xUserId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getItemRelationshipsLinks', 'projectId', projectId)
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getItemRelationshipsLinks', 'itemId', itemId)
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}/relationships/links`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
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
         * Returns the custom relationships that are associated with the given item_id. Custom relationships can be established between an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the resources that are involved in the relationship, which is essentially the GET projects/:project_id/items/:item_id/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the custom relationships that are associated with the given item_id
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {GetItemRelationshipsRefsFilterRefTypeEnum} [filterRefType] Filter by refType. Possible values: derived, dependencies, auxiliary, xrefs, includes
         * @param {GetItemRelationshipsRefsFilterDirectionEnum} [filterDirection] Filter by the direction of the reference. Possible values: from, to
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemRelationshipsRefs: async (accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterRefType?: GetItemRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetItemRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getItemRelationshipsRefs', 'projectId', projectId)
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getItemRelationshipsRefs', 'itemId', itemId)
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}/relationships/refs`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
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
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the “tip” version for the given item. Multiple versions of a resource item can be uploaded in a project. The tip version is the most recent one.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the “tip” version for the given item
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemTip: async (accessToken: string, projectId: string, itemId: string, xUserId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getItemTip', 'projectId', projectId)
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getItemTip', 'itemId', itemId)
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}/tip`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
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
         * Returns versions for the given item. Multiple versions of a resource item can be uploaded in a project.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns versions for the given item
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param {Array<number>} [filterVersionNumber] Filter by versionNumber.
         * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
         * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemVersions: async (accessToken: string, projectId: string, itemId: string, xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, filterVersionNumber?: Array<number>, pageNumber?: number, pageLimit?: number,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getItemVersions', 'projectId', projectId)
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getItemVersions', 'itemId', itemId)
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}/versions`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
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

            if (filterVersionNumber) {
                localVarQueryParameter['filter_versionNumber'] = filterVersionNumber;
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
         * Updates the properties of the given item_id object.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Updates the properties of the given item_id object
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {ModifyItemPayload} [modifyItemPayload] Describe the item to be patched.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchItem: async (accessToken: string, projectId: string, itemId: string, xUserId?: string, modifyItemPayload?: ModifyItemPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('patchItem', 'projectId', projectId)
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('patchItem', 'itemId', itemId)
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(modifyItemPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ItemsApi - functional programming interface
 * @export
 */
export const ItemsApiFp = function(sdkManager?: SDKManager) {
    const localVarAxiosParamCreator = ItemsApiAxiosParamCreator(sdkManager.apsconfiguration)
    return {
        /**
         * Creates the first version of a file (item). To create additional versions of an item, use POST versions.  Before you create the first version you need to create a storage location for the file, and upload the file to the storage object. For more details about the workflow, see the tutorial on uploading a file.  This endpoint also copies versions of items to other folders in the same project. The endpoint creates a new item and a first version of the item in the target folder. You cannot copy versions of items across different projects and accounts.  To copy versions of items to existng items in other folders, use POST versions. POST versions creates a new version of the existing item in the target folder.  Note that to access BIM 360 Docs files using the Data Management API you need to provision your app in the BIM 360 Account Administrator portal. For more details, see the Manage Access to Docs tutorial.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Creates the first version of a file (item)
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {string} [copyFrom] Only relevant for copying files to BIM 360 Docs - the version ID (URN) of the file to copy. For details about finding the URN, follow the initial steps in the Download a File tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an item:autodesk.bim360:Document item extension type, and you can only copy files to the Project Files folder or to subfolders of the Project Files folder with an item:autodesk.bim360:File item extension type.  To verify an item’s extension type, use GET item, and check the attributes.extension.type attribute.  Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if the end user did not have permission to download files in the source folder, but does have permission to download files in the target folder, he/she will not be able to download the copied file.  Note that you cannot copy a file if it is in the middle of being uploaded, updated, or copied. To verify the current process state of a file, call GET item, and check the attributes.extension.data.processState attribute.
         * @param {ItemPayload} [itemPayload] Describe the item to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createItem(accessToken: string, projectId: string, xUserId?: string, copyFrom?: string, itemPayload?: ItemPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createItem(accessToken, projectId, xUserId, copyFrom, itemPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version)
         * @summary Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version)
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {RelationshipRefsPayload} [relationshipRefsPayload] Describe the ref to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createItemRelationshipsRef(accessToken: string, projectId: string, itemId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createItemRelationshipsRef(accessToken, projectId, itemId, xUserId, relationshipRefsPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves metadata for a specified item. Items represent word documents, fusion design files, drawings, spreadsheets, etc.  Notes:  The tip version for the item is included in the included array of the payload. To retrieve metadata for multiple items, see the ListItems command. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Retrieves metadata for a specified item
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {boolean} [includePathInProject] Specify whether to return pathInProject attribute in response for BIM 360 Docs projects. pathInProject is the relative path of the item starting from project’s root folder. true: response will include pathInProject attribute for BIM 360 Docs projects.  false (default): response will not include pathInProject attribute for BIM 360 Docs projects.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItem(accessToken: string, projectId: string, itemId: string, xUserId?: string, includePathInProject?: boolean, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItem(accessToken, projectId, itemId, xUserId, includePathInProject,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the \"parent\" folder for the given item.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the \"parent\" folder for the given item
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemParentFolder(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Folder>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemParentFolder(accessToken, projectId, itemId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the resources (items, folders, and versions) that have a custom relationship with the given item_id. Custom relationships can be established between an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the ref resources that are involved in the relationship, which is essentially the GET projects/:project_id/items/:item_id/relationships/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the resources (items, folders, and versions) that have a custom relationship with the given item_id
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemRefs(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Refs>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterExtensionType,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a collection of links for the given item_id. Custom relationships can be established between an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access a resource.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a collection of links for the given item_id
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemRelationshipsLinks(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelationshipLinks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemRelationshipsLinks(accessToken, projectId, itemId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the custom relationships that are associated with the given item_id. Custom relationships can be established between an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the resources that are involved in the relationship, which is essentially the GET projects/:project_id/items/:item_id/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the custom relationships that are associated with the given item_id
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {GetItemRelationshipsRefsFilterRefTypeEnum} [filterRefType] Filter by refType. Possible values: derived, dependencies, auxiliary, xrefs, includes
         * @param {GetItemRelationshipsRefsFilterDirectionEnum} [filterDirection] Filter by the direction of the reference. Possible values: from, to
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemRelationshipsRefs(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterRefType?: GetItemRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetItemRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelationshipRefs>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemRelationshipsRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the “tip” version for the given item. Multiple versions of a resource item can be uploaded in a project. The tip version is the most recent one.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the “tip” version for the given item
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemTip(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ItemTip>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemTip(accessToken, projectId, itemId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns versions for the given item. Multiple versions of a resource item can be uploaded in a project.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns versions for the given item
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param {Array<number>} [filterVersionNumber] Filter by versionNumber.
         * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
         * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemVersions(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, filterVersionNumber?: Array<number>, pageNumber?: number, pageLimit?: number, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Versions>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemVersions(accessToken, projectId, itemId, xUserId, filterId, filterExtensionType, filterVersionNumber, pageNumber, pageLimit,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Updates the properties of the given item_id object.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Updates the properties of the given item_id object
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {ModifyItemPayload} [modifyItemPayload] Describe the item to be patched.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchItem(accessToken: string, projectId: string, itemId: string, xUserId?: string, modifyItemPayload?: ModifyItemPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchItem(accessToken, projectId, itemId, xUserId, modifyItemPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * ItemsApi - interface
 * @export
 * @interface ItemsApi
 */
export interface ItemsApiInterface {
    /**
     * Creates the first version of a file (item). To create additional versions of an item, use POST versions.  Before you create the first version you need to create a storage location for the file, and upload the file to the storage object. For more details about the workflow, see the tutorial on uploading a file.  This endpoint also copies versions of items to other folders in the same project. The endpoint creates a new item and a first version of the item in the target folder. You cannot copy versions of items across different projects and accounts.  To copy versions of items to existng items in other folders, use POST versions. POST versions creates a new version of the existing item in the target folder.  Note that to access BIM 360 Docs files using the Data Management API you need to provision your app in the BIM 360 Account Administrator portal. For more details, see the Manage Access to Docs tutorial.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Creates the first version of a file (item)
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {string} [copyFrom] Only relevant for copying files to BIM 360 Docs - the version ID (URN) of the file to copy. For details about finding the URN, follow the initial steps in the Download a File tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an item:autodesk.bim360:Document item extension type, and you can only copy files to the Project Files folder or to subfolders of the Project Files folder with an item:autodesk.bim360:File item extension type.  To verify an item’s extension type, use GET item, and check the attributes.extension.type attribute.  Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if the end user did not have permission to download files in the source folder, but does have permission to download files in the target folder, he/she will not be able to download the copied file.  Note that you cannot copy a file if it is in the middle of being uploaded, updated, or copied. To verify the current process state of a file, call GET item, and check the attributes.extension.data.processState attribute.
     * @param {ItemPayload} [itemPayload] Describe the item to be created.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    createItem(accessToken: string,projectId: string, xUserId?: string, copyFrom?: string, itemPayload?: ItemPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version)
     * @summary Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version)
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {RelationshipRefsPayload} [relationshipRefsPayload] Describe the ref to be created.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    createItemRelationshipsRef(accessToken: string,projectId: string, itemId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves metadata for a specified item. Items represent word documents, fusion design files, drawings, spreadsheets, etc.  Notes:  The tip version for the item is included in the included array of the payload. To retrieve metadata for multiple items, see the ListItems command. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Retrieves metadata for a specified item
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {boolean} [includePathInProject] Specify whether to return pathInProject attribute in response for BIM 360 Docs projects. pathInProject is the relative path of the item starting from project’s root folder. true: response will include pathInProject attribute for BIM 360 Docs projects.  false (default): response will not include pathInProject attribute for BIM 360 Docs projects.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    getItem(accessToken: string,projectId: string, itemId: string, xUserId?: string, includePathInProject?: boolean,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the \"parent\" folder for the given item.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the \"parent\" folder for the given item
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    getItemParentFolder(accessToken: string,projectId: string, itemId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the resources (items, folders, and versions) that have a custom relationship with the given item_id. Custom relationships can be established between an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the ref resources that are involved in the relationship, which is essentially the GET projects/:project_id/items/:item_id/relationships/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the resources (items, folders, and versions) that have a custom relationship with the given item_id
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    getItemRefs(accessToken: string,projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterExtensionType?: Array<string>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a collection of links for the given item_id. Custom relationships can be established between an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access a resource.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of links for the given item_id
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    getItemRelationshipsLinks(accessToken: string,projectId: string, itemId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the custom relationships that are associated with the given item_id. Custom relationships can be established between an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the resources that are involved in the relationship, which is essentially the GET projects/:project_id/items/:item_id/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the custom relationships that are associated with the given item_id
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {GetItemRelationshipsRefsFilterRefTypeEnum} [filterRefType] Filter by refType. Possible values: derived, dependencies, auxiliary, xrefs, includes
     * @param {GetItemRelationshipsRefsFilterDirectionEnum} [filterDirection] Filter by the direction of the reference. Possible values: from, to
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    getItemRelationshipsRefs(accessToken: string,projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterRefType?: GetItemRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetItemRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the “tip” version for the given item. Multiple versions of a resource item can be uploaded in a project. The tip version is the most recent one.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the “tip” version for the given item
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    getItemTip(accessToken: string,projectId: string, itemId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns versions for the given item. Multiple versions of a resource item can be uploaded in a project.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns versions for the given item
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param {Array<number>} [filterVersionNumber] Filter by versionNumber.
     * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
     * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    getItemVersions(accessToken: string,projectId: string, itemId: string, xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, filterVersionNumber?: Array<number>, pageNumber?: number, pageLimit?: number,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Updates the properties of the given item_id object.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Updates the properties of the given item_id object
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {ModifyItemPayload} [modifyItemPayload] Describe the item to be patched.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    patchItem(accessToken: string,projectId: string, itemId: string, xUserId?: string, modifyItemPayload?: ModifyItemPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * ItemsApi - object-oriented interface
 * @export
 * @class ItemsApi
 * @extends {BaseAPI}
 */
export class ItemsApi extends BaseAPI implements ItemsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Creates the first version of a file (item). To create additional versions of an item, use POST versions.  Before you create the first version you need to create a storage location for the file, and upload the file to the storage object. For more details about the workflow, see the tutorial on uploading a file.  This endpoint also copies versions of items to other folders in the same project. The endpoint creates a new item and a first version of the item in the target folder. You cannot copy versions of items across different projects and accounts.  To copy versions of items to existng items in other folders, use POST versions. POST versions creates a new version of the existing item in the target folder.  Note that to access BIM 360 Docs files using the Data Management API you need to provision your app in the BIM 360 Account Administrator portal. For more details, see the Manage Access to Docs tutorial.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Creates the first version of a file (item)
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {string} [copyFrom] Only relevant for copying files to BIM 360 Docs - the version ID (URN) of the file to copy. For details about finding the URN, follow the initial steps in the Download a File tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an item:autodesk.bim360:Document item extension type, and you can only copy files to the Project Files folder or to subfolders of the Project Files folder with an item:autodesk.bim360:File item extension type.  To verify an item’s extension type, use GET item, and check the attributes.extension.type attribute.  Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if the end user did not have permission to download files in the source folder, but does have permission to download files in the target folder, he/she will not be able to download the copied file.  Note that you cannot copy a file if it is in the middle of being uploaded, updated, or copied. To verify the current process state of a file, call GET item, and check the attributes.extension.data.processState attribute.
     * @param {ItemPayload} [itemPayload] Describe the item to be created.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public async createItem(accessToken: string, projectId: string, xUserId?: string, copyFrom?: string, itemPayload?: ItemPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createItem ");
      try {
        const request =  await ItemsApiFp(this.sdkManager).createItem(accessToken, projectId, xUserId, copyFrom, itemPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createItem Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`createItem Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`createItem Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`createItem Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`createItem Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version)
     * @summary Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version)
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {RelationshipRefsPayload} [relationshipRefsPayload] Describe the ref to be created.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public async createItemRelationshipsRef(accessToken: string, projectId: string, itemId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createItemRelationshipsRef ");
      try {
        const request =  await ItemsApiFp(this.sdkManager).createItemRelationshipsRef(accessToken, projectId, itemId, xUserId, relationshipRefsPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createItemRelationshipsRef Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`createItemRelationshipsRef Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`createItemRelationshipsRef Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`createItemRelationshipsRef Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`createItemRelationshipsRef Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves metadata for a specified item. Items represent word documents, fusion design files, drawings, spreadsheets, etc.  Notes:  The tip version for the item is included in the included array of the payload. To retrieve metadata for multiple items, see the ListItems command. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Retrieves metadata for a specified item
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {boolean} [includePathInProject] Specify whether to return pathInProject attribute in response for BIM 360 Docs projects. pathInProject is the relative path of the item starting from project’s root folder. true: response will include pathInProject attribute for BIM 360 Docs projects.  false (default): response will not include pathInProject attribute for BIM 360 Docs projects.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public async getItem(accessToken: string, projectId: string, itemId: string, xUserId?: string, includePathInProject?: boolean, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getItem ");
      try {
        const request =  await ItemsApiFp(this.sdkManager).getItem(accessToken, projectId, itemId, xUserId, includePathInProject,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getItem Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getItem Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getItem Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getItem Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getItem Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the \"parent\" folder for the given item.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the \"parent\" folder for the given item
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public async getItemParentFolder(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getItemParentFolder ");
      try {
        const request =  await ItemsApiFp(this.sdkManager).getItemParentFolder(accessToken, projectId, itemId, xUserId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getItemParentFolder Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getItemParentFolder Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getItemParentFolder Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getItemParentFolder Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getItemParentFolder Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the resources (items, folders, and versions) that have a custom relationship with the given item_id. Custom relationships can be established between an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the ref resources that are involved in the relationship, which is essentially the GET projects/:project_id/items/:item_id/relationships/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the resources (items, folders, and versions) that have a custom relationship with the given item_id
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public async getItemRefs(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getItemRefs ");
      try {
        const request =  await ItemsApiFp(this.sdkManager).getItemRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterExtensionType,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getItemRefs Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getItemRefs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getItemRefs Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getItemRefs Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getItemRefs Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a collection of links for the given item_id. Custom relationships can be established between an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access a resource.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of links for the given item_id
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public async getItemRelationshipsLinks(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getItemRelationshipsLinks ");
      try {
        const request =  await ItemsApiFp(this.sdkManager).getItemRelationshipsLinks(accessToken, projectId, itemId, xUserId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getItemRelationshipsLinks Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getItemRelationshipsLinks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getItemRelationshipsLinks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getItemRelationshipsLinks Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getItemRelationshipsLinks Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the custom relationships that are associated with the given item_id. Custom relationships can be established between an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the resources that are involved in the relationship, which is essentially the GET projects/:project_id/items/:item_id/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the custom relationships that are associated with the given item_id
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {GetItemRelationshipsRefsFilterRefTypeEnum} [filterRefType] Filter by refType. Possible values: derived, dependencies, auxiliary, xrefs, includes
     * @param {GetItemRelationshipsRefsFilterDirectionEnum} [filterDirection] Filter by the direction of the reference. Possible values: from, to
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public async getItemRelationshipsRefs(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterRefType?: GetItemRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetItemRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getItemRelationshipsRefs ");
      try {
        const request =  await ItemsApiFp(this.sdkManager).getItemRelationshipsRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getItemRelationshipsRefs Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getItemRelationshipsRefs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getItemRelationshipsRefs Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getItemRelationshipsRefs Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getItemRelationshipsRefs Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the “tip” version for the given item. Multiple versions of a resource item can be uploaded in a project. The tip version is the most recent one.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the “tip” version for the given item
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public async getItemTip(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getItemTip ");
      try {
        const request =  await ItemsApiFp(this.sdkManager).getItemTip(accessToken, projectId, itemId, xUserId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getItemTip Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getItemTip Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getItemTip Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getItemTip Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getItemTip Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns versions for the given item. Multiple versions of a resource item can be uploaded in a project.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns versions for the given item
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param {Array<number>} [filterVersionNumber] Filter by versionNumber.
     * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
     * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public async getItemVersions(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, filterVersionNumber?: Array<number>, pageNumber?: number, pageLimit?: number, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getItemVersions ");
      try {
        const request =  await ItemsApiFp(this.sdkManager).getItemVersions(accessToken, projectId, itemId, xUserId, filterId, filterExtensionType, filterVersionNumber, pageNumber, pageLimit,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getItemVersions Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getItemVersions Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getItemVersions Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getItemVersions Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getItemVersions Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Updates the properties of the given item_id object.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Updates the properties of the given item_id object
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {ModifyItemPayload} [modifyItemPayload] Describe the item to be patched.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public async patchItem(accessToken: string, projectId: string, itemId: string, xUserId?: string, modifyItemPayload?: ModifyItemPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into patchItem ");
      try {
        const request =  await ItemsApiFp(this.sdkManager).patchItem(accessToken, projectId, itemId, xUserId, modifyItemPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`patchItem Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`patchItem Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`patchItem Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`patchItem Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`patchItem Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

/**
 * @export
 */
export const GetItemRelationshipsRefsFilterRefTypeEnum = {
    Derived: 'derived',
    Dependencies: 'dependencies',
    Auxiliary: 'auxiliary',
    Xrefs: 'xrefs',
    Includes: 'includes'
} as const;
export type GetItemRelationshipsRefsFilterRefTypeEnum = typeof GetItemRelationshipsRefsFilterRefTypeEnum[keyof typeof GetItemRelationshipsRefsFilterRefTypeEnum];
/**
 * @export
 */
export const GetItemRelationshipsRefsFilterDirectionEnum = {
    From: 'from',
    To: 'to'
} as const;
export type GetItemRelationshipsRefsFilterDirectionEnum = typeof GetItemRelationshipsRefsFilterDirectionEnum[keyof typeof GetItemRelationshipsRefsFilterDirectionEnum];
