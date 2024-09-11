
import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { CollectionFormats, RequestArgs, BaseApi, RequiredError, DataManagementApiError } from '../base';
import { Folder } from '../model';
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
         * Creates the first version of a file (item). To create additional versions of an item, use POST versions.  Before you create the first version of an item, you must create a placeholder for the file, and upload the file to the placeholder. For more details about the workflow, see the tutorial on uploading a file.  This operation also allows you to create a new item by copying a specific version of an existing item to another folder. The copied version becomes the first version of the new item in the target folder.  **Note:** You cannot copy versions of items across different projects and accounts.  Use the [Create Version](/en/docs/data/v2/reference/http/projects-project_id-versions-POST/) operation with the ``copyFrom`` parameter if you want to create a new version of an item by copying a specific version of another item.   Before you use the Data Management API to access BIM 360 Docs files, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Create an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} [copyFrom] The Version ID (URN) of the version to copy from.   **Note**: This parameter is relevant only for copying files to BIM 360 Docs.  For information on how to find the URN, see the initial steps of the [Download a File](/en/docs/data/v2/tutorials/download-file/) tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an &#x60;&#x60;item:autodesk.bim360:Document&#x60;&#x60; item extension type. You can only copy files to the Project Files folder or to subfolders of the Project Files folder with an &#x60;&#x60;item:autodesk.bim360:File&#x60;&#x60; item extension type.    To verify an item’s extension type, use the [Get an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation, and check the &#x60;&#x60;attributes.extension.type&#x60;&#x60; attribute.    Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if users of your app did not have permission to download files in the source folder, but does have permission to download files in the target folder, they will not be able to download the copied file.    Note that you cannot copy a file while it is being uploaded, updated, or copied. To verify the current process state of a file, call the [Get an Item](en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation , and check the &#x60;&#x60;attributes.extension.data.processState&#x60;&#x60; attribute. 
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.          Note that for a three-legged OAuth flow or for a two-legged OAuth flow with user impersonation (&#x60;&#x60;x-user-id&#x60;&#x60;), the users of your app must have permission to upload files to the specified parent folder (&#x60;&#x60;data.attributes.relationships.parent.data.id&#x60;&#x60;).  For copying files, users of your app must have permission to view the source folder.   For information about managing and verifying folder permissions for BIM 360 Docs, see the section on [Managing Folder Permissions](http://help.autodesk.com/view/BIM360D/ENU/?guid&#x3D;GUID-2643FEEF-B48A-45A1-B354-797DAD628C37).\&#39; 
         * @param {ItemPayload} [itemPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createItem: async (accessToken: string, projectId: string, copyFrom?: string, xUserId?: string, itemPayload?: ItemPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
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

            if (xUserId !== undefined) {
                localVarQueryParameter['x-user-id'] = xUserId;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/2.0.3';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(itemPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version).
         * @summary Create a Custom Relationship for an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {RelationshipRefsPayload} [relationshipRefsPayload] 
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
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/2.0.3';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(relationshipRefsPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves an item. Items represent Word documents, Fusion 360 design files, drawings, spreadsheets, etc.  The tip version for the item is included in the included array of the payload. To retrieve multiple items, see the ListItems command.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Get an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {boolean} [includePathInProject] Specify whether to return &#x60;&#x60;pathInProject&#x60;&#x60; attribute in response for BIM 360 Docs projects. &#x60;&#x60;pathInProject&#x60;&#x60; is the relative path of the item starting from project’s root folder.   - &#x60;&#x60;true&#x60;&#x60;: Response will include the &#x60;&#x60;pathInProject&#x60;&#x60; attribute for BIM 360 Docs projects.   - &#x60;&#x60;false&#x60;&#x60;: (Default) Response will not include &#x60;&#x60;pathInProject&#x60;&#x60; attribute for BIM 360 Docs projects. 
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


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/2.0.3';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the parent folder of the specified item.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Get Parent of an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
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


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/2.0.3';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the resources (items, folders, and versions) that have a custom relationship with the specified item. Custom relationships can be established between an item and other resources within the data domain service (folders, items, and versions).   Each relationship is defined by the ID of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.   **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Related Resources for an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<GetItemRefsFilterTypeEnum>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
         * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemRefs: async (accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<GetItemRefsFilterTypeEnum>, filterId?: Array<string>, filterExtensionType?: Array<string>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
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


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/2.0.3';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of links for the specified item.   Custom relationships can be established between an item and other external resources residing outside the data domain service. A link’s ``href`` attribute defines the target URI to access a resource.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Relationship Links for an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
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


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/2.0.3';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the custom relationships that are associated with the specified item. Custom relationships can be established between an item and other resources within the ``data`` domain service (folders, items, and versions).  Each relationship is defined by the ID of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in. The response body will have an included array that contains the resources in the relationship, which is essentially what is returned by the [List Related Resources for an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-refs-GET/) operation.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Custom Relationships for an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<GetItemRelationshipsRefsFilterTypeEnum>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
         * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
         * @param {GetItemRelationshipsRefsFilterRefTypeEnum} [filterRefType] Filter by &#x60;&#x60;refType&#x60;&#x60;. Possible values: &#x60;&#x60;derived&#x60;&#x60;, &#x60;&#x60;dependencies&#x60;&#x60;, &#x60;&#x60;auxiliary&#x60;&#x60;, &#x60;&#x60;xrefs&#x60;&#x60;, and &#x60;&#x60;includes&#x60;&#x60;.
         * @param {GetItemRelationshipsRefsFilterDirectionEnum} [filterDirection] Filter by the direction of the reference. Possible values: &#x60;&#x60;from&#x60;&#x60; and &#x60;&#x60;to&#x60;&#x60;.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemRelationshipsRefs: async (accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<GetItemRelationshipsRefsFilterTypeEnum>, filterId?: Array<string>, filterRefType?: GetItemRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetItemRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
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


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/2.0.3';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the latest version of the specified item. A project can contain multiple versions of a resource item. The latest version is referred to as the tip version, which is returned by this operation.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Get Tip Version of an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
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


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/2.0.3';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists all versions of the specified item. A project can contain multiple versions of a resource item.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List all Versions of an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
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
                localVarQueryParameter['filter[id]'] = filterId;
            }

            if (filterExtensionType) {
                localVarQueryParameter['filter[extension.type]'] = filterExtensionType;
            }

            if (filterVersionNumber) {
                localVarQueryParameter['filter[versionNumber]'] = filterVersionNumber;
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


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/2.0.3';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the ``displayName`` of the specified item. Note that updating the ``displayName`` of an item is not supported for BIM 360 Docs or ACC items.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Update an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
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
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/2.0.3';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
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
export const ItemsApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = ItemsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Creates the first version of a file (item). To create additional versions of an item, use POST versions.  Before you create the first version of an item, you must create a placeholder for the file, and upload the file to the placeholder. For more details about the workflow, see the tutorial on uploading a file.  This operation also allows you to create a new item by copying a specific version of an existing item to another folder. The copied version becomes the first version of the new item in the target folder.  **Note:** You cannot copy versions of items across different projects and accounts.  Use the [Create Version](/en/docs/data/v2/reference/http/projects-project_id-versions-POST/) operation with the ``copyFrom`` parameter if you want to create a new version of an item by copying a specific version of another item.   Before you use the Data Management API to access BIM 360 Docs files, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Create an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} [copyFrom] The Version ID (URN) of the version to copy from.   **Note**: This parameter is relevant only for copying files to BIM 360 Docs.  For information on how to find the URN, see the initial steps of the [Download a File](/en/docs/data/v2/tutorials/download-file/) tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an &#x60;&#x60;item:autodesk.bim360:Document&#x60;&#x60; item extension type. You can only copy files to the Project Files folder or to subfolders of the Project Files folder with an &#x60;&#x60;item:autodesk.bim360:File&#x60;&#x60; item extension type.    To verify an item’s extension type, use the [Get an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation, and check the &#x60;&#x60;attributes.extension.type&#x60;&#x60; attribute.    Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if users of your app did not have permission to download files in the source folder, but does have permission to download files in the target folder, they will not be able to download the copied file.    Note that you cannot copy a file while it is being uploaded, updated, or copied. To verify the current process state of a file, call the [Get an Item](en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation , and check the &#x60;&#x60;attributes.extension.data.processState&#x60;&#x60; attribute. 
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.          Note that for a three-legged OAuth flow or for a two-legged OAuth flow with user impersonation (&#x60;&#x60;x-user-id&#x60;&#x60;), the users of your app must have permission to upload files to the specified parent folder (&#x60;&#x60;data.attributes.relationships.parent.data.id&#x60;&#x60;).  For copying files, users of your app must have permission to view the source folder.   For information about managing and verifying folder permissions for BIM 360 Docs, see the section on [Managing Folder Permissions](http://help.autodesk.com/view/BIM360D/ENU/?guid&#x3D;GUID-2643FEEF-B48A-45A1-B354-797DAD628C37).\&#39; 
         * @param {ItemPayload} [itemPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createItem(accessToken: string, projectId: string, copyFrom?: string, xUserId?: string, itemPayload?: ItemPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createItem(accessToken, projectId, copyFrom, xUserId, itemPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version).
         * @summary Create a Custom Relationship for an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {RelationshipRefsPayload} [relationshipRefsPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createItemRelationshipsRef(accessToken: string, projectId: string, itemId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createItemRelationshipsRef(accessToken, projectId, itemId, xUserId, relationshipRefsPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves an item. Items represent Word documents, Fusion 360 design files, drawings, spreadsheets, etc.  The tip version for the item is included in the included array of the payload. To retrieve multiple items, see the ListItems command.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Get an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {boolean} [includePathInProject] Specify whether to return &#x60;&#x60;pathInProject&#x60;&#x60; attribute in response for BIM 360 Docs projects. &#x60;&#x60;pathInProject&#x60;&#x60; is the relative path of the item starting from project’s root folder.   - &#x60;&#x60;true&#x60;&#x60;: Response will include the &#x60;&#x60;pathInProject&#x60;&#x60; attribute for BIM 360 Docs projects.   - &#x60;&#x60;false&#x60;&#x60;: (Default) Response will not include &#x60;&#x60;pathInProject&#x60;&#x60; attribute for BIM 360 Docs projects. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItem(accessToken: string, projectId: string, itemId: string, xUserId?: string, includePathInProject?: boolean, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItem(accessToken, projectId, itemId, xUserId, includePathInProject,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the parent folder of the specified item.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Get Parent of an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemParentFolder(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Folder>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemParentFolder(accessToken, projectId, itemId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the resources (items, folders, and versions) that have a custom relationship with the specified item. Custom relationships can be established between an item and other resources within the data domain service (folders, items, and versions).   Each relationship is defined by the ID of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.   **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Related Resources for an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<GetItemRefsFilterTypeEnum>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
         * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemRefs(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<GetItemRefsFilterTypeEnum>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Refs>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterExtensionType,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a list of links for the specified item.   Custom relationships can be established between an item and other external resources residing outside the data domain service. A link’s ``href`` attribute defines the target URI to access a resource.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Relationship Links for an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemRelationshipsLinks(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelationshipLinks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemRelationshipsLinks(accessToken, projectId, itemId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the custom relationships that are associated with the specified item. Custom relationships can be established between an item and other resources within the ``data`` domain service (folders, items, and versions).  Each relationship is defined by the ID of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in. The response body will have an included array that contains the resources in the relationship, which is essentially what is returned by the [List Related Resources for an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-refs-GET/) operation.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List Custom Relationships for an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<GetItemRelationshipsRefsFilterTypeEnum>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
         * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
         * @param {GetItemRelationshipsRefsFilterRefTypeEnum} [filterRefType] Filter by &#x60;&#x60;refType&#x60;&#x60;. Possible values: &#x60;&#x60;derived&#x60;&#x60;, &#x60;&#x60;dependencies&#x60;&#x60;, &#x60;&#x60;auxiliary&#x60;&#x60;, &#x60;&#x60;xrefs&#x60;&#x60;, and &#x60;&#x60;includes&#x60;&#x60;.
         * @param {GetItemRelationshipsRefsFilterDirectionEnum} [filterDirection] Filter by the direction of the reference. Possible values: &#x60;&#x60;from&#x60;&#x60; and &#x60;&#x60;to&#x60;&#x60;.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemRelationshipsRefs(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<GetItemRelationshipsRefsFilterTypeEnum>, filterId?: Array<string>, filterRefType?: GetItemRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetItemRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelationshipRefs>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemRelationshipsRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the latest version of the specified item. A project can contain multiple versions of a resource item. The latest version is referred to as the tip version, which is returned by this operation.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Get Tip Version of an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemTip(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ItemTip>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemTip(accessToken, projectId, itemId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Lists all versions of the specified item. A project can contain multiple versions of a resource item.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary List all Versions of an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
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
         * Updates the ``displayName`` of the specified item. Note that updating the ``displayName`` of an item is not supported for BIM 360 Docs or ACC items.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
         * @summary Update an Item
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
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
     * Creates the first version of a file (item). To create additional versions of an item, use POST versions.  Before you create the first version of an item, you must create a placeholder for the file, and upload the file to the placeholder. For more details about the workflow, see the tutorial on uploading a file.  This operation also allows you to create a new item by copying a specific version of an existing item to another folder. The copied version becomes the first version of the new item in the target folder.  **Note:** You cannot copy versions of items across different projects and accounts.  Use the [Create Version](/en/docs/data/v2/reference/http/projects-project_id-versions-POST/) operation with the ``copyFrom`` parameter if you want to create a new version of an item by copying a specific version of another item.   Before you use the Data Management API to access BIM 360 Docs files, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Create an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [copyFrom] The Version ID (URN) of the version to copy from.   **Note**: This parameter is relevant only for copying files to BIM 360 Docs.  For information on how to find the URN, see the initial steps of the [Download a File](/en/docs/data/v2/tutorials/download-file/) tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an &#x60;&#x60;item:autodesk.bim360:Document&#x60;&#x60; item extension type. You can only copy files to the Project Files folder or to subfolders of the Project Files folder with an &#x60;&#x60;item:autodesk.bim360:File&#x60;&#x60; item extension type.    To verify an item’s extension type, use the [Get an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation, and check the &#x60;&#x60;attributes.extension.type&#x60;&#x60; attribute.    Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if users of your app did not have permission to download files in the source folder, but does have permission to download files in the target folder, they will not be able to download the copied file.    Note that you cannot copy a file while it is being uploaded, updated, or copied. To verify the current process state of a file, call the [Get an Item](en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation , and check the &#x60;&#x60;attributes.extension.data.processState&#x60;&#x60; attribute. 
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.          Note that for a three-legged OAuth flow or for a two-legged OAuth flow with user impersonation (&#x60;&#x60;x-user-id&#x60;&#x60;), the users of your app must have permission to upload files to the specified parent folder (&#x60;&#x60;data.attributes.relationships.parent.data.id&#x60;&#x60;).  For copying files, users of your app must have permission to view the source folder.   For information about managing and verifying folder permissions for BIM 360 Docs, see the section on [Managing Folder Permissions](http://help.autodesk.com/view/BIM360D/ENU/?guid&#x3D;GUID-2643FEEF-B48A-45A1-B354-797DAD628C37).\&#39; 
     * @param {ItemPayload} [itemPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    createItem(accessToken: string,projectId: string, copyFrom?: string, xUserId?: string, itemPayload?: ItemPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version).
     * @summary Create a Custom Relationship for an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {RelationshipRefsPayload} [relationshipRefsPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    createItemRelationshipsRef(accessToken: string,projectId: string, itemId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves an item. Items represent Word documents, Fusion 360 design files, drawings, spreadsheets, etc.  The tip version for the item is included in the included array of the payload. To retrieve multiple items, see the ListItems command.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {boolean} [includePathInProject] Specify whether to return &#x60;&#x60;pathInProject&#x60;&#x60; attribute in response for BIM 360 Docs projects. &#x60;&#x60;pathInProject&#x60;&#x60; is the relative path of the item starting from project’s root folder.   - &#x60;&#x60;true&#x60;&#x60;: Response will include the &#x60;&#x60;pathInProject&#x60;&#x60; attribute for BIM 360 Docs projects.   - &#x60;&#x60;false&#x60;&#x60;: (Default) Response will not include &#x60;&#x60;pathInProject&#x60;&#x60; attribute for BIM 360 Docs projects. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    getItem(accessToken: string,projectId: string, itemId: string, xUserId?: string, includePathInProject?: boolean,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the parent folder of the specified item.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get Parent of an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    getItemParentFolder(accessToken: string,projectId: string, itemId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the resources (items, folders, and versions) that have a custom relationship with the specified item. Custom relationships can be established between an item and other resources within the data domain service (folders, items, and versions).   Each relationship is defined by the ID of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.   **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Related Resources for an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<GetItemRefsFilterTypeEnum>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    getItemRefs(accessToken: string,projectId: string, itemId: string, xUserId?: string, filterType?: Array<GetItemRefsFilterTypeEnum>, filterId?: Array<string>, filterExtensionType?: Array<string>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a list of links for the specified item.   Custom relationships can be established between an item and other external resources residing outside the data domain service. A link’s ``href`` attribute defines the target URI to access a resource.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Relationship Links for an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    getItemRelationshipsLinks(accessToken: string,projectId: string, itemId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the custom relationships that are associated with the specified item. Custom relationships can be established between an item and other resources within the ``data`` domain service (folders, items, and versions).  Each relationship is defined by the ID of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in. The response body will have an included array that contains the resources in the relationship, which is essentially what is returned by the [List Related Resources for an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-refs-GET/) operation.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Custom Relationships for an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<GetItemRelationshipsRefsFilterTypeEnum>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {GetItemRelationshipsRefsFilterRefTypeEnum} [filterRefType] Filter by &#x60;&#x60;refType&#x60;&#x60;. Possible values: &#x60;&#x60;derived&#x60;&#x60;, &#x60;&#x60;dependencies&#x60;&#x60;, &#x60;&#x60;auxiliary&#x60;&#x60;, &#x60;&#x60;xrefs&#x60;&#x60;, and &#x60;&#x60;includes&#x60;&#x60;.
     * @param {GetItemRelationshipsRefsFilterDirectionEnum} [filterDirection] Filter by the direction of the reference. Possible values: &#x60;&#x60;from&#x60;&#x60; and &#x60;&#x60;to&#x60;&#x60;.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    getItemRelationshipsRefs(accessToken: string,projectId: string, itemId: string, xUserId?: string, filterType?: Array<GetItemRelationshipsRefsFilterTypeEnum>, filterId?: Array<string>, filterRefType?: GetItemRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetItemRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the latest version of the specified item. A project can contain multiple versions of a resource item. The latest version is referred to as the tip version, which is returned by this operation.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get Tip Version of an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    getItemTip(accessToken: string,projectId: string, itemId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Lists all versions of the specified item. A project can contain multiple versions of a resource item.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List all Versions of an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
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
     * Updates the ``displayName`` of the specified item. Note that updating the ``displayName`` of an item is not supported for BIM 360 Docs or ACC items.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Update an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
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
 * @extends {BaseApi}
 */
export class ItemsApi extends BaseApi implements ItemsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Creates the first version of a file (item). To create additional versions of an item, use POST versions.  Before you create the first version of an item, you must create a placeholder for the file, and upload the file to the placeholder. For more details about the workflow, see the tutorial on uploading a file.  This operation also allows you to create a new item by copying a specific version of an existing item to another folder. The copied version becomes the first version of the new item in the target folder.  **Note:** You cannot copy versions of items across different projects and accounts.  Use the [Create Version](/en/docs/data/v2/reference/http/projects-project_id-versions-POST/) operation with the ``copyFrom`` parameter if you want to create a new version of an item by copying a specific version of another item.   Before you use the Data Management API to access BIM 360 Docs files, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Create an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [copyFrom] The Version ID (URN) of the version to copy from.   **Note**: This parameter is relevant only for copying files to BIM 360 Docs.  For information on how to find the URN, see the initial steps of the [Download a File](/en/docs/data/v2/tutorials/download-file/) tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an &#x60;&#x60;item:autodesk.bim360:Document&#x60;&#x60; item extension type. You can only copy files to the Project Files folder or to subfolders of the Project Files folder with an &#x60;&#x60;item:autodesk.bim360:File&#x60;&#x60; item extension type.    To verify an item’s extension type, use the [Get an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation, and check the &#x60;&#x60;attributes.extension.type&#x60;&#x60; attribute.    Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if users of your app did not have permission to download files in the source folder, but does have permission to download files in the target folder, they will not be able to download the copied file.    Note that you cannot copy a file while it is being uploaded, updated, or copied. To verify the current process state of a file, call the [Get an Item](en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation , and check the &#x60;&#x60;attributes.extension.data.processState&#x60;&#x60; attribute. 
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.          Note that for a three-legged OAuth flow or for a two-legged OAuth flow with user impersonation (&#x60;&#x60;x-user-id&#x60;&#x60;), the users of your app must have permission to upload files to the specified parent folder (&#x60;&#x60;data.attributes.relationships.parent.data.id&#x60;&#x60;).  For copying files, users of your app must have permission to view the source folder.   For information about managing and verifying folder permissions for BIM 360 Docs, see the section on [Managing Folder Permissions](http://help.autodesk.com/view/BIM360D/ENU/?guid&#x3D;GUID-2643FEEF-B48A-45A1-B354-797DAD628C37).\&#39; 
     * @param {ItemPayload} [itemPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public async createItem(accessToken: string, projectId: string, copyFrom?: string, xUserId?: string, itemPayload?: ItemPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createItem ");
      try {
        const request =  await ItemsApiFp(this.sdkManager).createItem(accessToken, projectId, copyFrom, xUserId, itemPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createItem Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`createItem Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`createItem Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createItem Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`createItem Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version).
     * @summary Create a Custom Relationship for an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {RelationshipRefsPayload} [relationshipRefsPayload] 
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
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`createItemRelationshipsRef Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`createItemRelationshipsRef Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createItemRelationshipsRef Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`createItemRelationshipsRef Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves an item. Items represent Word documents, Fusion 360 design files, drawings, spreadsheets, etc.  The tip version for the item is included in the included array of the payload. To retrieve multiple items, see the ListItems command.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {boolean} [includePathInProject] Specify whether to return &#x60;&#x60;pathInProject&#x60;&#x60; attribute in response for BIM 360 Docs projects. &#x60;&#x60;pathInProject&#x60;&#x60; is the relative path of the item starting from project’s root folder.   - &#x60;&#x60;true&#x60;&#x60;: Response will include the &#x60;&#x60;pathInProject&#x60;&#x60; attribute for BIM 360 Docs projects.   - &#x60;&#x60;false&#x60;&#x60;: (Default) Response will not include &#x60;&#x60;pathInProject&#x60;&#x60; attribute for BIM 360 Docs projects. 
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
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getItem Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getItem Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getItem Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getItem Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the parent folder of the specified item.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get Parent of an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
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
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getItemParentFolder Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getItemParentFolder Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getItemParentFolder Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getItemParentFolder Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the resources (items, folders, and versions) that have a custom relationship with the specified item. Custom relationships can be established between an item and other resources within the data domain service (folders, items, and versions).   Each relationship is defined by the ID of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.   **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Related Resources for an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<GetItemRefsFilterTypeEnum>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public async getItemRefs(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<GetItemRefsFilterTypeEnum>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getItemRefs ");
      try {
        const request =  await ItemsApiFp(this.sdkManager).getItemRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterExtensionType,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getItemRefs Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getItemRefs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getItemRefs Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getItemRefs Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getItemRefs Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a list of links for the specified item.   Custom relationships can be established between an item and other external resources residing outside the data domain service. A link’s ``href`` attribute defines the target URI to access a resource.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Relationship Links for an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
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
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getItemRelationshipsLinks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getItemRelationshipsLinks Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getItemRelationshipsLinks Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getItemRelationshipsLinks Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the custom relationships that are associated with the specified item. Custom relationships can be established between an item and other resources within the ``data`` domain service (folders, items, and versions).  Each relationship is defined by the ID of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in. The response body will have an included array that contains the resources in the relationship, which is essentially what is returned by the [List Related Resources for an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-refs-GET/) operation.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Custom Relationships for an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<GetItemRelationshipsRefsFilterTypeEnum>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {GetItemRelationshipsRefsFilterRefTypeEnum} [filterRefType] Filter by &#x60;&#x60;refType&#x60;&#x60;. Possible values: &#x60;&#x60;derived&#x60;&#x60;, &#x60;&#x60;dependencies&#x60;&#x60;, &#x60;&#x60;auxiliary&#x60;&#x60;, &#x60;&#x60;xrefs&#x60;&#x60;, and &#x60;&#x60;includes&#x60;&#x60;.
     * @param {GetItemRelationshipsRefsFilterDirectionEnum} [filterDirection] Filter by the direction of the reference. Possible values: &#x60;&#x60;from&#x60;&#x60; and &#x60;&#x60;to&#x60;&#x60;.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public async getItemRelationshipsRefs(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<GetItemRelationshipsRefsFilterTypeEnum>, filterId?: Array<string>, filterRefType?: GetItemRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetItemRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getItemRelationshipsRefs ");
      try {
        const request =  await ItemsApiFp(this.sdkManager).getItemRelationshipsRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getItemRelationshipsRefs Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getItemRelationshipsRefs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getItemRelationshipsRefs Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getItemRelationshipsRefs Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getItemRelationshipsRefs Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the latest version of the specified item. A project can contain multiple versions of a resource item. The latest version is referred to as the tip version, which is returned by this operation.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get Tip Version of an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
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
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getItemTip Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getItemTip Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getItemTip Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getItemTip Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Lists all versions of the specified item. A project can contain multiple versions of a resource item.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List all Versions of an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
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
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getItemVersions Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getItemVersions Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getItemVersions Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getItemVersions Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Updates the ``displayName`` of the specified item. Note that updating the ``displayName`` of an item is not supported for BIM 360 Docs or ACC items.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Update an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
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
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`patchItem Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`patchItem Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
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
export const GetItemRefsFilterTypeEnum = {
    Folders: 'folders',
    Items: 'items',
    Versions: 'versions'
} as const;
export type GetItemRefsFilterTypeEnum = typeof GetItemRefsFilterTypeEnum[keyof typeof GetItemRefsFilterTypeEnum];
/**
 * @export
 */
export const GetItemRelationshipsRefsFilterTypeEnum = {
    Folders: 'folders',
    Items: 'items',
    Versions: 'versions'
} as const;
export type GetItemRelationshipsRefsFilterTypeEnum = typeof GetItemRelationshipsRefsFilterTypeEnum[keyof typeof GetItemRelationshipsRefsFilterTypeEnum];
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
