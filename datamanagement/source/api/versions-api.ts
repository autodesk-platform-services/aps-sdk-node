/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse} from "autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, DataManagementApiError } from '../base';
import { DownloadFormats } from '../model';
import { Downloads } from '../model';
import { GetHubs401Response } from '../model';
import { Item } from '../model';
import { ModifyVersionPayload } from '../model';
import { Refs } from '../model';
import { RelationshipLinks } from '../model';
import { RelationshipRefs } from '../model';
import { RelationshipRefsPayload } from '../model';
import { Version } from '../model';
import { VersionDetails } from '../model';
import { VersionPayload } from '../model';
/**
 * VersionsApi - axios parameter creator
 * @export
 */
export const VersionsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Creates new versions of a file (item), except for the first version of the item. To create the first version of the item, use POST items.  Before creating each version you need to create a new storage location for the version, and upload the file to the storage object. For more details about the workflow, see the tutorial on uploading a file.  This endpoint also copies versions of items to exisitng items in other folders. The endpoint creates a new version of the existing item in the target folder. You cannot copy versions of items across different projects and accounts.  To copy versions of items to other folders and create a new item and a first version of the item in the target folder, use POST versions.  This endpoint can also be used to delete files on BIM360 Document Management. For more information, please refer to the delete and restore a file turorial.  Note that to access BIM 360 Docs files using the Data Management API you need to provision your app in the BIM 360 Account Administrator portal. For more details, see the Manage Access to Docs tutorial.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Creates new versions of a file (item), except for the first version of the item
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {string} [copyFrom] Only relevant for copying files to BIM 360 Docs - the version ID (URN) of the file to copy. For details about finding the URN, follow the initial steps in the Download a File tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an item:autodesk.bim360:Document item extension type, and you can only copy files to the Project Files folder or to subfolders of the Project Files folder with an item:autodesk.bim360:File item extension type.  To verify an item’s extension type, use GET item, and check the attributes.extension.type attribute.  Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if the end user did not have permission to download files in the source folder, but does have permission to download files in the target folder, he/she will not be able to download the copied file.  Note that you cannot copy a file if it is in the middle of being uploaded, updated, or copied. To verify the current process state of a file, call GET item, and check the attributes.extension.data.processState attribute.
         * @param {VersionPayload} [versionPayload] Describe the version to be created.
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
         * Creates a custom relationship between a version and another resource within the data domain service (folder, item, or version).
         * @summary Creates a custom relationship between a version and another resource within the data domain service (folder, item, or version)
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {RelationshipRefsPayload} [relationshipRefsPayload] Describe the ref to be created.
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
         * Returns the version with the given version_id.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the version with the given version_id
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a collection of file formats this version could be converted to and downloaded as.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a collection of file formats this version could be converted to and downloaded as
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a set of already available downloads for this version.
         * @summary Returns a set of already available downloads for this version
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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
                localVarQueryParameter['filter_format_fileType'] = filterFormatFileType;
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
         * Returns the item the given version is associated with.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the item the given version is associated with
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the resources (items, folders, and versions) that have a custom relationship with the given version_id. Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the ref resources that are involved in the relationship, which is essentially the GET projects/:project_id/versions/:version_id/relationships/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the resources (items, folders, and versions) that have a custom relationship with the given version_id
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersionRefs: async (accessToken: string, projectId: string, versionId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterExtensionType?: Array<string>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns a collection of links for the given item_id-version_id object. Custom relationships can be established between a version of an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access a resource.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a collection of links for the given item_id-version_id object
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the custom relationships that are associated with the given version_id. Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the resources that are involved in the relationship, which is essentially the GET projects/:project_id/versions/:version_id/refs endpoint. To get custom relationships for multiple versions, see the ListRefs command. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the custom relationships that are associated with the given version_id
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {GetVersionRelationshipsRefsFilterRefTypeEnum} [filterRefType] Filter by refType. Possible values: derived, dependencies, auxiliary, xrefs, includes
         * @param {GetVersionRelationshipsRefsFilterDirectionEnum} [filterDirection] Filter by the direction of the reference. Possible values: from, to
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersionRelationshipsRefs: async (accessToken: string, projectId: string, versionId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterRefType?: GetVersionRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetVersionRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
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
         * Updates the properties of the given version_id object. 
         * @summary Updates the properties of the given version_id object
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {ModifyVersionPayload} [modifyVersionPayload] Describe the version to be patched.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchVersion: async (accessToken: string, projectId: string, versionId: string, modifyVersionPayload?: ModifyVersionPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('patchVersion', 'projectId', projectId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('patchVersion', 'versionId', versionId)
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
export const VersionsApiFp = function(sdkManager?: SDKManager) {
    const localVarAxiosParamCreator = VersionsApiAxiosParamCreator(sdkManager.apsconfiguration)
    return {
        /**
         * Creates new versions of a file (item), except for the first version of the item. To create the first version of the item, use POST items.  Before creating each version you need to create a new storage location for the version, and upload the file to the storage object. For more details about the workflow, see the tutorial on uploading a file.  This endpoint also copies versions of items to exisitng items in other folders. The endpoint creates a new version of the existing item in the target folder. You cannot copy versions of items across different projects and accounts.  To copy versions of items to other folders and create a new item and a first version of the item in the target folder, use POST versions.  This endpoint can also be used to delete files on BIM360 Document Management. For more information, please refer to the delete and restore a file turorial.  Note that to access BIM 360 Docs files using the Data Management API you need to provision your app in the BIM 360 Account Administrator portal. For more details, see the Manage Access to Docs tutorial.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Creates new versions of a file (item), except for the first version of the item
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {string} [copyFrom] Only relevant for copying files to BIM 360 Docs - the version ID (URN) of the file to copy. For details about finding the URN, follow the initial steps in the Download a File tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an item:autodesk.bim360:Document item extension type, and you can only copy files to the Project Files folder or to subfolders of the Project Files folder with an item:autodesk.bim360:File item extension type.  To verify an item’s extension type, use GET item, and check the attributes.extension.type attribute.  Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if the end user did not have permission to download files in the source folder, but does have permission to download files in the target folder, he/she will not be able to download the copied file.  Note that you cannot copy a file if it is in the middle of being uploaded, updated, or copied. To verify the current process state of a file, call GET item, and check the attributes.extension.data.processState attribute.
         * @param {VersionPayload} [versionPayload] Describe the version to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createVersion(accessToken: string, projectId: string, xUserId?: string, copyFrom?: string, versionPayload?: VersionPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Version>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createVersion(accessToken, projectId, xUserId, copyFrom, versionPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Creates a custom relationship between a version and another resource within the data domain service (folder, item, or version).
         * @summary Creates a custom relationship between a version and another resource within the data domain service (folder, item, or version)
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {RelationshipRefsPayload} [relationshipRefsPayload] Describe the ref to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createVersionRelationshipsRef(accessToken: string, projectId: string, versionId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createVersionRelationshipsRef(accessToken, projectId, versionId, xUserId, relationshipRefsPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the version with the given version_id.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the version with the given version_id
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersion(accessToken: string, projectId: string, versionId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VersionDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersion(accessToken, projectId, versionId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a collection of file formats this version could be converted to and downloaded as.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a collection of file formats this version could be converted to and downloaded as
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersionDownloadFormats(accessToken: string, projectId: string, versionId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DownloadFormats>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersionDownloadFormats(accessToken, projectId, versionId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a set of already available downloads for this version.
         * @summary Returns a set of already available downloads for this version
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterFormatFileType] Filter by the file type of the download object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersionDownloads(accessToken: string, projectId: string, versionId: string, xUserId?: string, filterFormatFileType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Downloads>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersionDownloads(accessToken, projectId, versionId, xUserId, filterFormatFileType,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the item the given version is associated with.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the item the given version is associated with
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersionItem(accessToken: string, projectId: string, versionId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersionItem(accessToken, projectId, versionId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the resources (items, folders, and versions) that have a custom relationship with the given version_id. Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the ref resources that are involved in the relationship, which is essentially the GET projects/:project_id/versions/:version_id/relationships/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the resources (items, folders, and versions) that have a custom relationship with the given version_id
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersionRefs(accessToken: string, projectId: string, versionId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Refs>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersionRefs(accessToken, projectId, versionId, xUserId, filterType, filterId, filterExtensionType,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a collection of links for the given item_id-version_id object. Custom relationships can be established between a version of an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access a resource.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a collection of links for the given item_id-version_id object
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersionRelationshipsLinks(accessToken: string, projectId: string, versionId: string, xUserId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelationshipLinks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersionRelationshipsLinks(accessToken, projectId, versionId, xUserId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns the custom relationships that are associated with the given version_id. Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the resources that are involved in the relationship, which is essentially the GET projects/:project_id/versions/:version_id/refs endpoint. To get custom relationships for multiple versions, see the ListRefs command. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns the custom relationships that are associated with the given version_id
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {GetVersionRelationshipsRefsFilterRefTypeEnum} [filterRefType] Filter by refType. Possible values: derived, dependencies, auxiliary, xrefs, includes
         * @param {GetVersionRelationshipsRefsFilterDirectionEnum} [filterDirection] Filter by the direction of the reference. Possible values: from, to
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersionRelationshipsRefs(accessToken: string, projectId: string, versionId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterRefType?: GetVersionRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetVersionRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelationshipRefs>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersionRelationshipsRefs(accessToken, projectId, versionId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Updates the properties of the given version_id object. 
         * @summary Updates the properties of the given version_id object
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} versionId The unique identifier of a version.
         * @param {ModifyVersionPayload} [modifyVersionPayload] Describe the version to be patched.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchVersion(accessToken: string, projectId: string, versionId: string, modifyVersionPayload?: ModifyVersionPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VersionDetails>> {
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
     * Creates new versions of a file (item), except for the first version of the item. To create the first version of the item, use POST items.  Before creating each version you need to create a new storage location for the version, and upload the file to the storage object. For more details about the workflow, see the tutorial on uploading a file.  This endpoint also copies versions of items to exisitng items in other folders. The endpoint creates a new version of the existing item in the target folder. You cannot copy versions of items across different projects and accounts.  To copy versions of items to other folders and create a new item and a first version of the item in the target folder, use POST versions.  This endpoint can also be used to delete files on BIM360 Document Management. For more information, please refer to the delete and restore a file turorial.  Note that to access BIM 360 Docs files using the Data Management API you need to provision your app in the BIM 360 Account Administrator portal. For more details, see the Manage Access to Docs tutorial.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Creates new versions of a file (item), except for the first version of the item
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {string} [copyFrom] Only relevant for copying files to BIM 360 Docs - the version ID (URN) of the file to copy. For details about finding the URN, follow the initial steps in the Download a File tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an item:autodesk.bim360:Document item extension type, and you can only copy files to the Project Files folder or to subfolders of the Project Files folder with an item:autodesk.bim360:File item extension type.  To verify an item’s extension type, use GET item, and check the attributes.extension.type attribute.  Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if the end user did not have permission to download files in the source folder, but does have permission to download files in the target folder, he/she will not be able to download the copied file.  Note that you cannot copy a file if it is in the middle of being uploaded, updated, or copied. To verify the current process state of a file, call GET item, and check the attributes.extension.data.processState attribute.
     * @param {VersionPayload} [versionPayload] Describe the version to be created.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    createVersion(accessToken: string,projectId: string, xUserId?: string, copyFrom?: string, versionPayload?: VersionPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Creates a custom relationship between a version and another resource within the data domain service (folder, item, or version).
     * @summary Creates a custom relationship between a version and another resource within the data domain service (folder, item, or version)
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {RelationshipRefsPayload} [relationshipRefsPayload] Describe the ref to be created.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    createVersionRelationshipsRef(accessToken: string,projectId: string, versionId: string, xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the version with the given version_id.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the version with the given version_id
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    getVersion(accessToken: string,projectId: string, versionId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a collection of file formats this version could be converted to and downloaded as.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of file formats this version could be converted to and downloaded as
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    getVersionDownloadFormats(accessToken: string,projectId: string, versionId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a set of already available downloads for this version.
     * @summary Returns a set of already available downloads for this version
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterFormatFileType] Filter by the file type of the download object.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    getVersionDownloads(accessToken: string,projectId: string, versionId: string, xUserId?: string, filterFormatFileType?: Array<string>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the item the given version is associated with.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the item the given version is associated with
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    getVersionItem(accessToken: string,projectId: string, versionId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the resources (items, folders, and versions) that have a custom relationship with the given version_id. Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the ref resources that are involved in the relationship, which is essentially the GET projects/:project_id/versions/:version_id/relationships/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the resources (items, folders, and versions) that have a custom relationship with the given version_id
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    getVersionRefs(accessToken: string,projectId: string, versionId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterExtensionType?: Array<string>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a collection of links for the given item_id-version_id object. Custom relationships can be established between a version of an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access a resource.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of links for the given item_id-version_id object
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    getVersionRelationshipsLinks(accessToken: string,projectId: string, versionId: string, xUserId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns the custom relationships that are associated with the given version_id. Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the resources that are involved in the relationship, which is essentially the GET projects/:project_id/versions/:version_id/refs endpoint. To get custom relationships for multiple versions, see the ListRefs command. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the custom relationships that are associated with the given version_id
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {GetVersionRelationshipsRefsFilterRefTypeEnum} [filterRefType] Filter by refType. Possible values: derived, dependencies, auxiliary, xrefs, includes
     * @param {GetVersionRelationshipsRefsFilterDirectionEnum} [filterDirection] Filter by the direction of the reference. Possible values: from, to
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    getVersionRelationshipsRefs(accessToken: string,projectId: string, versionId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterRefType?: GetVersionRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetVersionRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Updates the properties of the given version_id object. 
     * @summary Updates the properties of the given version_id object
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {ModifyVersionPayload} [modifyVersionPayload] Describe the version to be patched.
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
 * @extends {BaseAPI}
 */
export class VersionsApi extends BaseAPI implements VersionsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Creates new versions of a file (item), except for the first version of the item. To create the first version of the item, use POST items.  Before creating each version you need to create a new storage location for the version, and upload the file to the storage object. For more details about the workflow, see the tutorial on uploading a file.  This endpoint also copies versions of items to exisitng items in other folders. The endpoint creates a new version of the existing item in the target folder. You cannot copy versions of items across different projects and accounts.  To copy versions of items to other folders and create a new item and a first version of the item in the target folder, use POST versions.  This endpoint can also be used to delete files on BIM360 Document Management. For more information, please refer to the delete and restore a file turorial.  Note that to access BIM 360 Docs files using the Data Management API you need to provision your app in the BIM 360 Account Administrator portal. For more details, see the Manage Access to Docs tutorial.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Creates new versions of a file (item), except for the first version of the item
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {string} [copyFrom] Only relevant for copying files to BIM 360 Docs - the version ID (URN) of the file to copy. For details about finding the URN, follow the initial steps in the Download a File tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an item:autodesk.bim360:Document item extension type, and you can only copy files to the Project Files folder or to subfolders of the Project Files folder with an item:autodesk.bim360:File item extension type.  To verify an item’s extension type, use GET item, and check the attributes.extension.type attribute.  Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if the end user did not have permission to download files in the source folder, but does have permission to download files in the target folder, he/she will not be able to download the copied file.  Note that you cannot copy a file if it is in the middle of being uploaded, updated, or copied. To verify the current process state of a file, call GET item, and check the attributes.extension.data.processState attribute.
     * @param {VersionPayload} [versionPayload] Describe the version to be created.
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
            this.logger.logError(`createVersion Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`createVersion Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`createVersion Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`createVersion Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Creates a custom relationship between a version and another resource within the data domain service (folder, item, or version).
     * @summary Creates a custom relationship between a version and another resource within the data domain service (folder, item, or version)
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {RelationshipRefsPayload} [relationshipRefsPayload] Describe the ref to be created.
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
            this.logger.logError(`createVersionRelationshipsRef Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`createVersionRelationshipsRef Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`createVersionRelationshipsRef Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`createVersionRelationshipsRef Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the version with the given version_id.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the version with the given version_id
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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
            this.logger.logError(`getVersion Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getVersion Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getVersion Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getVersion Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a collection of file formats this version could be converted to and downloaded as.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of file formats this version could be converted to and downloaded as
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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
            this.logger.logError(`getVersionDownloadFormats Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getVersionDownloadFormats Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getVersionDownloadFormats Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getVersionDownloadFormats Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a set of already available downloads for this version.
     * @summary Returns a set of already available downloads for this version
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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
            this.logger.logError(`getVersionDownloads Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getVersionDownloads Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getVersionDownloads Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getVersionDownloads Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the item the given version is associated with.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the item the given version is associated with
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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
            this.logger.logError(`getVersionItem Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getVersionItem Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getVersionItem Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getVersionItem Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the resources (items, folders, and versions) that have a custom relationship with the given version_id. Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the ref resources that are involved in the relationship, which is essentially the GET projects/:project_id/versions/:version_id/relationships/refs endpoint. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the resources (items, folders, and versions) that have a custom relationship with the given version_id
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApi
     */
    public async getVersionRefs(accessToken: string, projectId: string, versionId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getVersionRefs ");
      try {
        const request =  await VersionsApiFp(this.sdkManager).getVersionRefs(accessToken, projectId, versionId, xUserId, filterType, filterId, filterExtensionType,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getVersionRefs Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getVersionRefs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getVersionRefs Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getVersionRefs Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getVersionRefs Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a collection of links for the given item_id-version_id object. Custom relationships can be established between a version of an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access a resource.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of links for the given item_id-version_id object
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
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
            this.logger.logError(`getVersionRelationshipsLinks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getVersionRelationshipsLinks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getVersionRelationshipsLinks Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getVersionRelationshipsLinks Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns the custom relationships that are associated with the given version_id. Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).  Notes:  Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (filter[meta.refType]) they are interested in. The response body will have an included array which contains the resources that are involved in the relationship, which is essentially the GET projects/:project_id/versions/:version_id/refs endpoint. To get custom relationships for multiple versions, see the ListRefs command. New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns the custom relationships that are associated with the given version_id
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterType] Filter by the type of the objects in the folder. Supported values include folders and items.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {GetVersionRelationshipsRefsFilterRefTypeEnum} [filterRefType] Filter by refType. Possible values: derived, dependencies, auxiliary, xrefs, includes
     * @param {GetVersionRelationshipsRefsFilterDirectionEnum} [filterDirection] Filter by the direction of the reference. Possible values: from, to
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApi
     */
    public async getVersionRelationshipsRefs(accessToken: string, projectId: string, versionId: string, xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterRefType?: GetVersionRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetVersionRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getVersionRelationshipsRefs ");
      try {
        const request =  await VersionsApiFp(this.sdkManager).getVersionRelationshipsRefs(accessToken, projectId, versionId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getVersionRelationshipsRefs Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getVersionRelationshipsRefs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`getVersionRelationshipsRefs Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getVersionRelationshipsRefs Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`getVersionRelationshipsRefs Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Updates the properties of the given version_id object. 
     * @summary Updates the properties of the given version_id object
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} versionId The unique identifier of a version.
     * @param {ModifyVersionPayload} [modifyVersionPayload] Describe the version to be patched.
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
            this.logger.logError(`patchVersion Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`patchVersion Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`patchVersion Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`patchVersion Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

/**
 * @export
 */
export const GetVersionRelationshipsRefsFilterRefTypeEnum = {
    Derived: 'derived',
    Dependencies: 'dependencies',
    Auxiliary: 'auxiliary',
    Xrefs: 'xrefs',
    Includes: 'includes'
} as const;
export type GetVersionRelationshipsRefsFilterRefTypeEnum = typeof GetVersionRelationshipsRefsFilterRefTypeEnum[keyof typeof GetVersionRelationshipsRefsFilterRefTypeEnum];
/**
 * @export
 */
export const GetVersionRelationshipsRefsFilterDirectionEnum = {
    From: 'from',
    To: 'to'
} as const;
export type GetVersionRelationshipsRefsFilterDirectionEnum = typeof GetVersionRelationshipsRefsFilterDirectionEnum[keyof typeof GetVersionRelationshipsRefsFilterDirectionEnum];
