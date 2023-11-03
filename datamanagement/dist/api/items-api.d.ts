import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
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
export declare const ItemsApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
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
    createItem: (accessToken: string, projectId: string, xUserId?: string, copyFrom?: string, itemPayload?: ItemPayload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    createItemRelationshipsRef: (accessToken: string, projectId: string, itemId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getItem: (accessToken: string, projectId: string, itemId: string, xUserId?: string, includePathInProject?: boolean, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getItemParentFolder: (accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getItemRefs: (accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getItemRelationshipsLinks: (accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getItemRelationshipsRefs: (accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterRefType?: GetItemRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetItemRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getItemTip: (accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    getItemVersions: (accessToken: string, projectId: string, itemId: string, xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, filterVersionNumber?: Array<number>, pageNumber?: number, pageLimit?: number, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    patchItem: (accessToken: string, projectId: string, itemId: string, xUserId?: string, modifyItemPayload?: ModifyItemPayload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * ItemsApi - functional programming interface
 * @export
 */
export declare const ItemsApiFp: (sdkManager?: SDKManager) => {
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
    createItem(accessToken: string, projectId: string, xUserId?: string, copyFrom?: string, itemPayload?: ItemPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>>;
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
    createItemRelationshipsRef(accessToken: string, projectId: string, itemId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
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
    getItem(accessToken: string, projectId: string, itemId: string, xUserId?: string, includePathInProject?: boolean, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>>;
    /**
     * Returns the \"parent\" folder for the given item.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the \"parent\" folder for the given item
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getItemParentFolder(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Folder>>;
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
    getItemRefs(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Refs>>;
    /**
     * Returns a collection of links for the given item_id. Custom relationships can be established between an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access a resource.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of links for the given item_id
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getItemRelationshipsLinks(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelationshipLinks>>;
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
    getItemRelationshipsRefs(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterRefType?: GetItemRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetItemRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelationshipRefs>>;
    /**
     * Returns the “tip” version for the given item. Multiple versions of a resource item can be uploaded in a project. The tip version is the most recent one.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the “tip” version for the given item
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getItemTip(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ItemTip>>;
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
    getItemVersions(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, filterVersionNumber?: Array<number>, pageNumber?: number, pageLimit?: number, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Versions>>;
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
    patchItem(accessToken: string, projectId: string, itemId: string, xUserId?: string, modifyItemPayload?: ModifyItemPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>>;
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
    createItem(accessToken: string, projectId: string, xUserId?: string, copyFrom?: string, itemPayload?: ItemPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    createItemRelationshipsRef(accessToken: string, projectId: string, itemId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getItem(accessToken: string, projectId: string, itemId: string, xUserId?: string, includePathInProject?: boolean, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getItemParentFolder(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getItemRefs(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getItemRelationshipsLinks(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getItemRelationshipsRefs(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterRefType?: GetItemRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetItemRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getItemTip(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getItemVersions(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, filterVersionNumber?: Array<number>, pageNumber?: number, pageLimit?: number, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    patchItem(accessToken: string, projectId: string, itemId: string, xUserId?: string, modifyItemPayload?: ModifyItemPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * ItemsApi - object-oriented interface
 * @export
 * @class ItemsApi
 * @extends {BaseAPI}
 */
export declare class ItemsApi extends BaseAPI implements ItemsApiInterface {
    private logger;
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
    createItem(accessToken: string, projectId: string, xUserId?: string, copyFrom?: string, itemPayload?: ItemPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    createItemRelationshipsRef(accessToken: string, projectId: string, itemId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getItem(accessToken: string, projectId: string, itemId: string, xUserId?: string, includePathInProject?: boolean, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getItemParentFolder(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getItemRefs(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getItemRelationshipsLinks(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getItemRelationshipsRefs(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterRefType?: GetItemRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetItemRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getItemTip(accessToken: string, projectId: string, itemId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getItemVersions(accessToken: string, projectId: string, itemId: string, xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, filterVersionNumber?: Array<number>, pageNumber?: number, pageLimit?: number, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    patchItem(accessToken: string, projectId: string, itemId: string, xUserId?: string, modifyItemPayload?: ModifyItemPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * @export
 */
export declare const GetItemRelationshipsRefsFilterRefTypeEnum: {
    readonly Derived: "derived";
    readonly Dependencies: "dependencies";
    readonly Auxiliary: "auxiliary";
    readonly Xrefs: "xrefs";
    readonly Includes: "includes";
};
export type GetItemRelationshipsRefsFilterRefTypeEnum = typeof GetItemRelationshipsRefsFilterRefTypeEnum[keyof typeof GetItemRelationshipsRefsFilterRefTypeEnum];
/**
 * @export
 */
export declare const GetItemRelationshipsRefsFilterDirectionEnum: {
    readonly From: "from";
    readonly To: "to";
};
export type GetItemRelationshipsRefsFilterDirectionEnum = typeof GetItemRelationshipsRefsFilterDirectionEnum[keyof typeof GetItemRelationshipsRefsFilterDirectionEnum];
