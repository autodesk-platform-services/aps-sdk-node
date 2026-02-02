/* tslint:disable */
/* eslint-disable */

import { ApiResponse, ApsServiceRequestConfig, IApsConfiguration, SdkManager } from "@aps_sdk/autodesk-sdkmanager";
import type { AxiosInstance, AxiosPromise } from 'axios';
import { BaseApi, DataManagementApiError, RequestArgs, RequiredError } from '../base';
import { assertParamExists, createRequestFunction, serializeDataIfNeeded, setBearerAuthToObject, setSearchParams, toPathString } from '../common';
import { CreatedVersion, DownloadFormats, Downloads, FilterDirection, FilterRefType, FilterTypeVersion, Item, ModifyVersionPayload, Refs, RelationshipLinks, RelationshipRefs, RelationshipRefsPayload, Version, VersionPayload } from '../model';
/**
 * VersionsApi - axios parameter creator
 * @export
 */
export const VersionsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Creates a new versions of an existing item.
	 * 
	 * Before creating a new version you must create a storage location for the version in OSS, and upload the file to that location. For more details about the workflow, see the tutorial on uploading a file.
	 * 
	 * This operation also allows you to create a new version of an item by copying a specific version of an existing item from another folder within the project. The new version becomes the tip version of the item.
	 * 
	 * Use the [Create an Item](/en/docs/data/v2/reference/http/projects-project_id-items-POST/) operation to copy a specific version of an existing item as a new item in another folder.
	 * 
	 * This operation can also be used to delete files on BIM360 Document Management. For more information, please refer to the delete and restore a file tutorial.
	 * 
	 * Before using the Data Management API to access BIM 360 Docs files, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).
	 * 
	 * Access to Forma Data Management files requires a different provisioning process. Apps must be registered and approved as custom integrations before they can access Forma data. For instructions, see the [Custom Integrations documentation](https://help.autodesk.com/view/DOCS/ENU/?guid=Custom_Integrations).
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary Create a Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {VersionPayload} versionPayload 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {string} [copyFrom] The Version ID (URN) of the version to copy from. 
	 * 
	 * **Note**: This parameter is relevant only for copying files to BIM 360 Docs.
	 * 
	 * For information on how to find the URN, see the initial steps of the [Download a File](/en/docs/data/v2/tutorials/download-file/) tutorial.
	 * 
	 * You can only copy files to the Plans folder or to subfolders of the Plans folder with an ``item:autodesk.bim360:Document`` item extension type. You can only copy files to the Project Files folder or to subfolders of the Project Files folder with an ``item:autodesk.bim360:File`` item extension type.  
	 * 
	 * To verify an item’s extension type, use the [Get an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation, and check the ``attributes.extension.type`` attribute.  
	 * 
	 * Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if users of your app did not have permission to download files in the source folder, but does have permission to download files in the target folder, they will not be able to download the copied file.  
	 * 
	 * Note that you cannot copy a file while it is being uploaded, updated, or copied. To verify the current process state of a file, call the [Get an Item](en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation , and check the ``attributes.extension.data.processState`` attribute.
	 * 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createVersion: async (accessToken: string, projectId: string, xUserId?: string, copyFrom?: string, versionPayload?: VersionPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createVersion', 'projectId', projectId)
            const localVarPath = `/data/v1/projects/{project_id}/versions`
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
            localVarRequestOptions.data = serializeDataIfNeeded(versionPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a custom relationship between a version of an item and another resource within the data domain service (folder, item, or version).
         * @summary Create a Custom Relationship for a Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {RelationshipRefsPayload} relationshipRefsPayload 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createVersionRelationshipsRef: async (accessToken: string, projectId: string, versionId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createVersionRelationshipsRef', 'projectId', projectId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('createVersionRelationshipsRef', 'versionId', versionId)
            const localVarPath = `/data/v1/projects/{project_id}/versions/{version_id}/relationships/refs`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"version_id"}}`, encodeURIComponent(String(versionId)));
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
         * Returns the specified version of an item.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary Get a Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersion: async (accessToken: string, projectId: string, versionId: string, xUserId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getVersion', 'projectId', projectId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('getVersion', 'versionId', versionId)
            const localVarPath = `/data/v1/projects/{project_id}/versions/{version_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"version_id"}}`, encodeURIComponent(String(versionId)));
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
         * Returns a list of file formats the specified version of an item can be downloaded as.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary List Supported Download Formats
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersionDownloadFormats: async (accessToken: string, projectId: string, versionId: string, xUserId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getVersionDownloadFormats', 'projectId', projectId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('getVersionDownloadFormats', 'versionId', versionId)
            const localVarPath = `/data/v1/projects/{project_id}/versions/{version_id}/downloadFormats`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"version_id"}}`, encodeURIComponent(String(versionId)));
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
         * Returns the list of file formats of the specified version of an item currently available for download.
	 * 
	 * **Note:** This operation is not fully implemented as yet. It currently returns an empty data object.
         * @summary List Available Download Formats
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<string>} [filterFormatFileType] Filter by the file type of the download object.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersionDownloads: async (accessToken: string, projectId: string, versionId: string, xUserId?: string, filterFormatFileType?: Array<string>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getVersionDownloads', 'projectId', projectId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('getVersionDownloads', 'versionId', versionId)
            const localVarPath = `/data/v1/projects/{project_id}/versions/{version_id}/downloads`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"version_id"}}`, encodeURIComponent(String(versionId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (filterFormatFileType) {
                localVarQueryParameter['filter[format.fileType]'] = filterFormatFileType;
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
         * Returns the item corresponding to the specified version.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary Get Item by Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersionItem: async (accessToken: string, projectId: string, versionId: string, xUserId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getVersionItem', 'projectId', projectId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('getVersionItem', 'versionId', versionId)
            const localVarPath = `/data/v1/projects/{project_id}/versions/{version_id}/item`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"version_id"}}`, encodeURIComponent(String(versionId)));
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
         * Returns the resources (items, folders, and versions) that have a custom relationship with the specified version.
	 * 
	 * Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).
	 * 
	 * - Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links.
	 * - Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.
	 * - The response body will have an included array that contains the ref resources that are involved in the relationship, which is essentially the response to the [List Custom Relationships for a Version](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-GET/) operation. 
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary List Related Resources for a Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<FilterTypeVersion>} [filterType] Filter by the ``type`` of the ``ref`` target. Supported values include ``folders``, ``items``, and ``versions``.
         * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersionRefs: async (accessToken: string, projectId: string, versionId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterExtensionType?: Array<string>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getVersionRefs', 'projectId', projectId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('getVersionRefs', 'versionId', versionId)
            const localVarPath = `/data/v1/projects/{project_id}/versions/{version_id}/refs`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"version_id"}}`, encodeURIComponent(String(versionId)));
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
         * Returns a collection of links for the specified version of an item. Custom relationships can be established between a version of an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access the resource.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary List Links for a Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersionRelationshipsLinks: async (accessToken: string, projectId: string, versionId: string, xUserId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getVersionRelationshipsLinks', 'projectId', projectId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('getVersionRelationshipsLinks', 'versionId', versionId)
            const localVarPath = `/projects/{project_id}/versions/{version_id}/relationships/links`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"version_id"}}`, encodeURIComponent(String(versionId)));
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
         * Returns the custom relationships for the specified version. 
	 * 
	 * Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).
	 * 
	 * - Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data.
	 * - Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.
	 * - The response body will have an included array that contains the resources in the relationship, which is essentially the response to the [List Related Resources operation](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-POST/).
	 * - To get custom relationships for multiple versions, see the ListRefs command.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary List Custom Relationships for a Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<FilterTypeVersion>} [filterType] Filter by the ``type`` of the ``ref`` target. Supported values include ``folders``, ``items``, and ``versions``.
         * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
         * @param {FilterRefType} [filterRefType] Filter by ``refType``. Possible values: ``derived``, ``dependencies``, ``auxiliary``, ``xrefs``, and ``includes``.
         * @param {FilterDirection} [filterDirection] Filter by the direction of the reference. Possible values: ``from`` and ``to``.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersionRelationshipsRefs: async (accessToken: string, projectId: string, versionId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterRefType?: FilterRefType, filterDirection?: FilterDirection, filterExtensionType?: Array<string>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getVersionRelationshipsRefs', 'projectId', projectId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('getVersionRelationshipsRefs', 'versionId', versionId)
            const localVarPath = `/data/v1/projects/{project_id}/versions/{version_id}/relationships/refs`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"version_id"}}`, encodeURIComponent(String(versionId)));
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
         * Updates the properties of the specified version of an  item. Currently, you can only change the name of the version.
	 * 
	 * **Note:** This operation is not supported for BIM 360 and ACC. If you want to rename a version, create a new version with a new name.
	 * 
         * @summary Update a Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {ModifyVersionPayload} modifyVersionPayload 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchVersion: async (accessToken: string, projectId: string, versionId: string, modifyVersionPayload: ModifyVersionPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('patchVersion', 'projectId', projectId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('patchVersion', 'versionId', versionId)
            // verify required parameter 'modifyVersionPayload' is not null or undefined
            assertParamExists('patchVersion', 'modifyVersionPayload', modifyVersionPayload)
            const localVarPath = `/data/v1/projects/{project_id}/versions/{version_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"version_id"}}`, encodeURIComponent(String(versionId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)


    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(modifyVersionPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * VersionsApi - functional programming interface
 * @export
 */
export const VersionsApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = VersionsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Creates a new versions of an existing item.
	 * 
	 * Before creating a new version you must create a storage location for the version in OSS, and upload the file to that location. For more details about the workflow, see the tutorial on uploading a file.
	 * 
	 * This operation also allows you to create a new version of an item by copying a specific version of an existing item from another folder within the project. The new version becomes the tip version of the item.
	 * 
	 * Use the [Create an Item](/en/docs/data/v2/reference/http/projects-project_id-items-POST/) operation to copy a specific version of an existing item as a new item in another folder.
	 * 
	 * This operation can also be used to delete files on BIM360 Document Management. For more information, please refer to the delete and restore a file tutorial.
	 * 
	 * Before using the Data Management API to access BIM 360 Docs files, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).
	 * 
	 * Access to Forma Data Management files requires a different provisioning process. Apps must be registered and approved as custom integrations before they can access Forma data. For instructions, see the [Custom Integrations documentation](https://help.autodesk.com/view/DOCS/ENU/?guid=Custom_Integrations).
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary Create a Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {VersionPayload} versionPayload 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {string} [copyFrom] The Version ID (URN) of the version to copy from. 
	 * 
	 * **Note**: This parameter is relevant only for copying files to BIM 360 Docs.
	 * 
	 * For information on how to find the URN, see the initial steps of the [Download a File](/en/docs/data/v2/tutorials/download-file/) tutorial.
	 * 
	 * You can only copy files to the Plans folder or to subfolders of the Plans folder with an ``item:autodesk.bim360:Document`` item extension type. You can only copy files to the Project Files folder or to subfolders of the Project Files folder with an ``item:autodesk.bim360:File`` item extension type.  
	 * 
	 * To verify an item’s extension type, use the [Get an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation, and check the ``attributes.extension.type`` attribute.  
	 * 
	 * Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if users of your app did not have permission to download files in the source folder, but does have permission to download files in the target folder, they will not be able to download the copied file.  
	 * 
	 * Note that you cannot copy a file while it is being uploaded, updated, or copied. To verify the current process state of a file, call the [Get an Item](en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation , and check the ``attributes.extension.data.processState`` attribute.
	 * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createVersion(accessToken: string, projectId: string, xUserId?: string, copyFrom?: string, versionPayload?: VersionPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreatedVersion>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createVersion(accessToken, projectId, xUserId, copyFrom, versionPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Creates a custom relationship between a version of an item and another resource within the data domain service (folder, item, or version).
         * @summary Create a Custom Relationship for a Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {RelationshipRefsPayload} relationshipRefsPayload 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createVersionRelationshipsRef(accessToken: string, projectId: string, versionId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createVersionRelationshipsRef(accessToken, projectId, versionId, xUserId, relationshipRefsPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the specified version of an item.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary Get a Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersion(accessToken: string, projectId: string, versionId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Version>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersion(accessToken, projectId, versionId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a list of file formats the specified version of an item can be downloaded as.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary List Supported Download Formats
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersionDownloadFormats(accessToken: string, projectId: string, versionId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DownloadFormats>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersionDownloadFormats(accessToken, projectId, versionId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the list of file formats of the specified version of an item currently available for download.
	 * 
	 * **Note:** This operation is not fully implemented as yet. It currently returns an empty data object.
         * @summary List Available Download Formats
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<string>} [filterFormatFileType] Filter by the file type of the download object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersionDownloads(accessToken: string, projectId: string, versionId: string, xUserId?: string, filterFormatFileType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Downloads>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersionDownloads(accessToken, projectId, versionId, xUserId, filterFormatFileType,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the item corresponding to the specified version.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary Get Item by Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersionItem(accessToken: string, projectId: string, versionId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersionItem(accessToken, projectId, versionId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the resources (items, folders, and versions) that have a custom relationship with the specified version.
	 * 
	 * Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).
	 * 
	 * - Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links.
	 * - Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.
	 * - The response body will have an included array that contains the ref resources that are involved in the relationship, which is essentially the response to the [List Custom Relationships for a Version](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-GET/) operation. 
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary List Related Resources for a Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<FilterTypeVersion>} [filterType] Filter by the ``type`` of the ``ref`` target. Supported values include ``folders``, ``items``, and ``versions``.
         * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersionRefs(accessToken: string, projectId: string, versionId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Refs>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersionRefs(accessToken, projectId, versionId, xUserId, filterType, filterId, filterExtensionType,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a collection of links for the specified version of an item. Custom relationships can be established between a version of an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access the resource.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary List Links for a Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersionRelationshipsLinks(accessToken: string, projectId: string, versionId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelationshipLinks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersionRelationshipsLinks(accessToken, projectId, versionId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the custom relationships for the specified version. 
	 * 
	 * Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).
	 * 
	 * - Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data.
	 * - Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.
	 * - The response body will have an included array that contains the resources in the relationship, which is essentially the response to the [List Related Resources operation](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-POST/).
	 * - To get custom relationships for multiple versions, see the ListRefs command.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
         * @summary List Custom Relationships for a Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {Array<FilterTypeVersion>} [filterType] Filter by the ``type`` of the ``ref`` target. Supported values include ``folders``, ``items``, and ``versions``.
         * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
         * @param {FilterRefType} [filterRefType] Filter by ``refType``. Possible values: ``derived``, ``dependencies``, ``auxiliary``, ``xrefs``, and ``includes``.
         * @param {FilterDirection} [filterDirection] Filter by the direction of the reference. Possible values: ``from`` and ``to``.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersionRelationshipsRefs(accessToken: string, projectId: string, versionId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterRefType?: FilterRefType, filterDirection?: FilterDirection, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelationshipRefs>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersionRelationshipsRefs(accessToken, projectId, versionId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Updates the properties of the specified version of an  item. Currently, you can only change the name of the version.
	 * 
	 * **Note:** This operation is not supported for BIM 360 and ACC. If you want to rename a version, create a new version with a new name.
	 * 
         * @summary Update a Version
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {string} versionId The URL encoded unique identifier of a version.
         * @param {ModifyVersionPayload} modifyVersionPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchVersion(accessToken: string, projectId: string, versionId: string, modifyVersionPayload?: ModifyVersionPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Version>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchVersion(accessToken, projectId, versionId, modifyVersionPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * VersionsApi - interface
 * @export
 * @interface VersionsApi
 */
export interface VersionsApiInterface {
    /**
     * Creates a new versions of an existing item.
	 * 
	 * Before creating a new version you must create a storage location for the version in OSS, and upload the file to that location. For more details about the workflow, see the tutorial on uploading a file.
	 * 
	 * This operation also allows you to create a new version of an item by copying a specific version of an existing item from another folder within the project. The new version becomes the tip version of the item.
	 * 
	 * Use the [Create an Item](/en/docs/data/v2/reference/http/projects-project_id-items-POST/) operation to copy a specific version of an existing item as a new item in another folder.
	 * 
	 * This operation can also be used to delete files on BIM360 Document Management. For more information, please refer to the delete and restore a file tutorial.
	 * 
	 * Before using the Data Management API to access BIM 360 Docs files, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).
	 * 
	 * Access to Forma Data Management files requires a different provisioning process. Apps must be registered and approved as custom integrations before they can access Forma data. For instructions, see the [Custom Integrations documentation](https://help.autodesk.com/view/DOCS/ENU/?guid=Custom_Integrations).
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary Create a Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {VersionPayload} versionPayload 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {string} [copyFrom] The Version ID (URN) of the version to copy from. 
	 * 
	 * **Note**: This parameter is relevant only for copying files to BIM 360 Docs.
	 * 
	 * For information on how to find the URN, see the initial steps of the [Download a File](/en/docs/data/v2/tutorials/download-file/) tutorial.
	 * 
	 * You can only copy files to the Plans folder or to subfolders of the Plans folder with an ``item:autodesk.bim360:Document`` item extension type. You can only copy files to the Project Files folder or to subfolders of the Project Files folder with an ``item:autodesk.bim360:File`` item extension type.  
	 * 
	 * To verify an item’s extension type, use the [Get an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation, and check the ``attributes.extension.type`` attribute.  
	 * 
	 * Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if users of your app did not have permission to download files in the source folder, but does have permission to download files in the target folder, they will not be able to download the copied file.  
	 * 
	 * Note that you cannot copy a file while it is being uploaded, updated, or copied. To verify the current process state of a file, call the [Get an Item](en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation , and check the ``attributes.extension.data.processState`` attribute.
	 * 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    createVersion(accessToken: string,projectId: string, xUserId?: string, copyFrom?: string, versionPayload?: VersionPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Creates a custom relationship between a version of an item and another resource within the data domain service (folder, item, or version).
     * @summary Create a Custom Relationship for a Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {RelationshipRefsPayload} relationshipRefsPayload 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    createVersionRelationshipsRef(accessToken: string,projectId: string, versionId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the specified version of an item.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary Get a Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    getVersion(accessToken: string,projectId: string, versionId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a list of file formats the specified version of an item can be downloaded as.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary List Supported Download Formats
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    getVersionDownloadFormats(accessToken: string,projectId: string, versionId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the list of file formats of the specified version of an item currently available for download.
	 * 
	 * **Note:** This operation is not fully implemented as yet. It currently returns an empty data object.
     * @summary List Available Download Formats
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<string>} [filterFormatFileType] Filter by the file type of the download object.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    getVersionDownloads(accessToken: string,projectId: string, versionId: string, xUserId?: string, filterFormatFileType?: Array<string>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the item corresponding to the specified version.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary Get Item by Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    getVersionItem(accessToken: string,projectId: string, versionId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the resources (items, folders, and versions) that have a custom relationship with the specified version.
	 * 
	 * Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).
	 * 
	 * - Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links.
	 * - Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.
	 * - The response body will have an included array that contains the ref resources that are involved in the relationship, which is essentially the response to the [List Custom Relationships for a Version](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-GET/) operation. 
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary List Related Resources for a Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterTypeVersion>} [filterType] Filter by the ``type`` of the ``ref`` target. Supported values include ``folders``, ``items``, and ``versions``.
     * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    getVersionRefs(accessToken: string,projectId: string, versionId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterExtensionType?: Array<string>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a collection of links for the specified version of an item. Custom relationships can be established between a version of an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access the resource.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary List Links for a Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    getVersionRelationshipsLinks(accessToken: string,projectId: string, versionId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the custom relationships for the specified version. 
	 * 
	 * Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).
	 * 
	 * - Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data.
	 * - Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.
	 * - The response body will have an included array that contains the resources in the relationship, which is essentially the response to the [List Related Resources operation](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-POST/).
	 * - To get custom relationships for multiple versions, see the ListRefs command.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary List Custom Relationships for a Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterTypeVersion>} [filterType] Filter by the ``type`` of the ``ref`` target. Supported values include ``folders``, ``items``, and ``versions``.
     * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
     * @param {FilterRefType} [filterRefType] Filter by ``refType``. Possible values: ``derived``, ``dependencies``, ``auxiliary``, ``xrefs``, and ``includes``.
     * @param {FilterDirection} [filterDirection] Filter by the direction of the reference. Possible values: ``from`` and ``to``.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    getVersionRelationshipsRefs(accessToken: string,projectId: string, versionId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterRefType?: FilterRefType, filterDirection?: FilterDirection, filterExtensionType?: Array<string>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Updates the properties of the specified version of an  item. Currently, you can only change the name of the version.
	 * 
	 * **Note:** This operation is not supported for BIM 360 and ACC. If you want to rename a version, create a new version with a new name.
	 * 
     * @summary Update a Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {ModifyVersionPayload} modifyVersionPayload 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    patchVersion(accessToken: string,projectId: string, versionId: string, modifyVersionPayload?: ModifyVersionPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * VersionsApi - object-oriented interface
 * @export
 * @class VersionsApi
 * @extends {BaseApi}
 */
export class VersionsApi extends BaseApi implements VersionsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Creates a new versions of an existing item.
	 * 
	 * Before creating a new version you must create a storage location for the version in OSS, and upload the file to that location. For more details about the workflow, see the tutorial on uploading a file.
	 * 
	 * This operation also allows you to create a new version of an item by copying a specific version of an existing item from another folder within the project. The new version becomes the tip version of the item.
	 * 
	 * Use the [Create an Item](/en/docs/data/v2/reference/http/projects-project_id-items-POST/) operation to copy a specific version of an existing item as a new item in another folder.
	 * 
	 * This operation can also be used to delete files on BIM360 Document Management. For more information, please refer to the delete and restore a file tutorial.
	 * 
	 * Before using the Data Management API to access BIM 360 Docs files, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).
	 * 
	 * Access to Forma Data Management files requires a different provisioning process. Apps must be registered and approved as custom integrations before they can access Forma data. For instructions, see the [Custom Integrations documentation](https://help.autodesk.com/view/DOCS/ENU/?guid=Custom_Integrations).
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary Create a Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {VersionPayload} versionPayload 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {string} [copyFrom] The Version ID (URN) of the version to copy from. 
	 * 
	 * **Note**: This parameter is relevant only for copying files to BIM 360 Docs.
	 * 
	 * For information on how to find the URN, see the initial steps of the [Download a File](/en/docs/data/v2/tutorials/download-file/) tutorial.
	 * 
	 * You can only copy files to the Plans folder or to subfolders of the Plans folder with an ``item:autodesk.bim360:Document`` item extension type. You can only copy files to the Project Files folder or to subfolders of the Project Files folder with an ``item:autodesk.bim360:File`` item extension type.  
	 * 
	 * To verify an item’s extension type, use the [Get an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation, and check the ``attributes.extension.type`` attribute.  
	 * 
	 * Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if users of your app did not have permission to download files in the source folder, but does have permission to download files in the target folder, they will not be able to download the copied file.  
	 * 
	 * Note that you cannot copy a file while it is being uploaded, updated, or copied. To verify the current process state of a file, call the [Get an Item](en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation , and check the ``attributes.extension.data.processState`` attribute.
	 * 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApi
     */
    public async createVersion(accessToken: string, projectId: string, xUserId?: string, copyFrom?: string, versionPayload?: VersionPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createVersion ");
      try {
        const request =  await VersionsApiFp(this.sdkManager).createVersion(accessToken, projectId, xUserId, copyFrom, versionPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createVersion Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createVersion Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`createVersion Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createVersion Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`createVersion Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Creates a custom relationship between a version of an item and another resource within the data domain service (folder, item, or version).
     * @summary Create a Custom Relationship for a Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {RelationshipRefsPayload} relationshipRefsPayload 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApi
     */
    public async createVersionRelationshipsRef(accessToken: string, projectId: string, versionId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createVersionRelationshipsRef ");
      try {
        const request =  await VersionsApiFp(this.sdkManager).createVersionRelationshipsRef(accessToken, projectId, versionId, xUserId, relationshipRefsPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createVersionRelationshipsRef Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createVersionRelationshipsRef Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`createVersionRelationshipsRef Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createVersionRelationshipsRef Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`createVersionRelationshipsRef Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the specified version of an item.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary Get a Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApi
     */
    public async getVersion(accessToken: string, projectId: string, versionId: string, xUserId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getVersion ");
      try {
        const request =  await VersionsApiFp(this.sdkManager).getVersion(accessToken, projectId, versionId, xUserId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getVersion Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getVersion Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getVersion Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getVersion Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getVersion Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a list of file formats the specified version of an item can be downloaded as.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary List Supported Download Formats
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApi
     */
    public async getVersionDownloadFormats(accessToken: string, projectId: string, versionId: string, xUserId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getVersionDownloadFormats ");
      try {
        const request =  await VersionsApiFp(this.sdkManager).getVersionDownloadFormats(accessToken, projectId, versionId, xUserId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getVersionDownloadFormats Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getVersionDownloadFormats Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getVersionDownloadFormats Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getVersionDownloadFormats Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getVersionDownloadFormats Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the list of file formats of the specified version of an item currently available for download.
	 * 
	 * **Note:** This operation is not fully implemented as yet. It currently returns an empty data object.
     * @summary List Available Download Formats
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<string>} [filterFormatFileType] Filter by the file type of the download object.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApi
     */
    public async getVersionDownloads(accessToken: string, projectId: string, versionId: string, xUserId?: string, filterFormatFileType?: Array<string>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getVersionDownloads ");
      try {
        const request =  await VersionsApiFp(this.sdkManager).getVersionDownloads(accessToken, projectId, versionId, xUserId, filterFormatFileType,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getVersionDownloads Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getVersionDownloads Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getVersionDownloads Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getVersionDownloads Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getVersionDownloads Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the item corresponding to the specified version.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary Get Item by Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApi
     */
    public async getVersionItem(accessToken: string, projectId: string, versionId: string, xUserId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getVersionItem ");
      try {
        const request =  await VersionsApiFp(this.sdkManager).getVersionItem(accessToken, projectId, versionId, xUserId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getVersionItem Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getVersionItem Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getVersionItem Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getVersionItem Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getVersionItem Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the resources (items, folders, and versions) that have a custom relationship with the specified version.
	 * 
	 * Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).
	 * 
	 * - Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links.
	 * - Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.
	 * - The response body will have an included array that contains the ref resources that are involved in the relationship, which is essentially the response to the [List Custom Relationships for a Version](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-GET/) operation. 
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary List Related Resources for a Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterTypeVersion>} [filterType] Filter by the ``type`` of the ``ref`` target. Supported values include ``folders``, ``items``, and ``versions``.
     * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApi
     */
    public async getVersionRefs(accessToken: string, projectId: string, versionId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getVersionRefs ");
      try {
        const request =  await VersionsApiFp(this.sdkManager).getVersionRefs(accessToken, projectId, versionId, xUserId, filterType, filterId, filterExtensionType,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getVersionRefs Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getVersionRefs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getVersionRefs Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getVersionRefs Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getVersionRefs Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a collection of links for the specified version of an item. Custom relationships can be established between a version of an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access the resource.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary List Links for a Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApi
     */
    public async getVersionRelationshipsLinks(accessToken: string, projectId: string, versionId: string, xUserId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getVersionRelationshipsLinks ");
      try {
        const request =  await VersionsApiFp(this.sdkManager).getVersionRelationshipsLinks(accessToken, projectId, versionId, xUserId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getVersionRelationshipsLinks Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getVersionRelationshipsLinks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getVersionRelationshipsLinks Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getVersionRelationshipsLinks Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getVersionRelationshipsLinks Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the custom relationships for the specified version. 
	 * 
	 * Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).
	 * 
	 * - Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data.
	 * - Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.
	 * - The response body will have an included array that contains the resources in the relationship, which is essentially the response to the [List Related Resources operation](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-POST/).
	 * - To get custom relationships for multiple versions, see the ListRefs command.
	 * 
	 * **Note:** This operation works with both BIM 360 Projects and Forma Projects.
     * @summary List Custom Relationships for a Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterTypeVersion>} [filterType] Filter by the ``type`` of the ``ref`` target. Supported values include ``folders``, ``items``, and ``versions``.
     * @param {Array<string>} [filterId] Filter by the ``id`` of the ``ref`` target.
     * @param {FilterRefType} [filterRefType] Filter by ``refType``. Possible values: ``derived``, ``dependencies``, ``auxiliary``, ``xrefs``, and ``includes``.
     * @param {FilterDirection} [filterDirection] Filter by the direction of the reference. Possible values: ``from`` and ``to``.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
	 * 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApi
     */
    public async getVersionRelationshipsRefs(accessToken: string, projectId: string, versionId: string, xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterRefType?: FilterRefType, filterDirection?: FilterDirection, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getVersionRelationshipsRefs ");
      try {
        const request =  await VersionsApiFp(this.sdkManager).getVersionRelationshipsRefs(accessToken, projectId, versionId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getVersionRelationshipsRefs Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getVersionRelationshipsRefs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`getVersionRelationshipsRefs Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getVersionRelationshipsRefs Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getVersionRelationshipsRefs Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Updates the properties of the specified version of an  item. Currently, you can only change the name of the version.
	 * 
	 * **Note:** This operation is not supported for BIM 360 and ACC. If you want to rename a version, create a new version with a new name.
	 * 
     * @summary Update a Version
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {ModifyVersionPayload} modifyVersionPayload 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApi
     */
    public async patchVersion(accessToken: string, projectId: string, versionId: string, modifyVersionPayload?: ModifyVersionPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into patchVersion ");
      try {
        const request =  await VersionsApiFp(this.sdkManager).patchVersion(accessToken, projectId, versionId, modifyVersionPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`patchVersion Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`patchVersion Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`patchVersion Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`patchVersion Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`patchVersion Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

