"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetItemRelationshipsRefsFilterDirectionEnum = exports.GetItemRelationshipsRefsFilterRefTypeEnum = exports.ItemsApi = exports.ItemsApiFp = exports.ItemsApiAxiosParamCreator = void 0;
const autodesk_sdkmanager_1 = require("autodesk-sdkmanager");
const common_1 = require("../common");
const base_1 = require("../base");
/**
 * ItemsApi - axios parameter creator
 * @export
 */
const ItemsApiAxiosParamCreator = function (apsConfiguration) {
    return {
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
        getItem: (accessToken, projectId, itemId, xUserId, includePathInProject, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            (0, common_1.assertParamExists)('getItem', 'projectId', projectId);
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getItem', 'itemId', itemId);
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (includePathInProject !== undefined) {
                localVarQueryParameter['includePathInProject'] = includePathInProject;
            }
            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        getItemParentFolder: (accessToken, projectId, itemId, xUserId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            (0, common_1.assertParamExists)('getItemParentFolder', 'projectId', projectId);
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getItemParentFolder', 'itemId', itemId);
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}/parent`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        getItemRefs: (accessToken, projectId, itemId, xUserId, filterType, filterId, filterExtensionType, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            (0, common_1.assertParamExists)('getItemRefs', 'projectId', projectId);
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getItemRefs', 'itemId', itemId);
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}/refs`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
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
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        getItemRelationshipsLinks: (accessToken, projectId, itemId, xUserId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            (0, common_1.assertParamExists)('getItemRelationshipsLinks', 'projectId', projectId);
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getItemRelationshipsLinks', 'itemId', itemId);
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}/relationships/links`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        getItemRelationshipsRefs: (accessToken, projectId, itemId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            (0, common_1.assertParamExists)('getItemRelationshipsRefs', 'projectId', projectId);
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getItemRelationshipsRefs', 'itemId', itemId);
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}/relationships/refs`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
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
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        getItemTip: (accessToken, projectId, itemId, xUserId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            (0, common_1.assertParamExists)('getItemTip', 'projectId', projectId);
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getItemTip', 'itemId', itemId);
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}/tip`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
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
        getItemVersions: (accessToken, projectId, itemId, xUserId, filterId, filterExtensionType, filterVersionNumber, pageNumber, pageLimit, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            (0, common_1.assertParamExists)('getItemVersions', 'projectId', projectId);
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getItemVersions', 'itemId', itemId);
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}/versions`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
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
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Updates the properties of the given item_id object.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Updates the properties of the given item_id object
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {ItemRequest} [itemRequest] Describe the item to be patched.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchItem: (accessToken, projectId, itemId, xUserId, itemRequest, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            (0, common_1.assertParamExists)('patchItem', 'projectId', projectId);
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('patchItem', 'itemId', itemId);
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PATCH' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT-API/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(itemRequest, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Creates the first version of a file (item). To create additional versions of an item, use POST versions.  Before you create the first version you need to create a storage location for the file, and upload the file to the storage object. For more details about the workflow, see the tutorial on uploading a file.  This endpoint also copies versions of items to other folders in the same project. The endpoint creates a new item and a first version of the item in the target folder. You cannot copy versions of items across different projects and accounts.  To copy versions of items to existng items in other folders, use POST versions. POST versions creates a new version of the existing item in the target folder.  Note that to access BIM 360 Docs files using the Data Management API you need to provision your app in the BIM 360 Account Administrator portal. For more details, see the Manage Access to Docs tutorial.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Creates the first version of a file (item)
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {string} [copyFrom] Only relevant for copying files to BIM 360 Docs - the version ID (URN) of the file to copy. For details about finding the URN, follow the initial steps in the Download a File tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an item:autodesk.bim360:Document item extension type, and you can only copy files to the Project Files folder or to subfolders of the Project Files folder with an item:autodesk.bim360:File item extension type.  To verify an item’s extension type, use GET item, and check the attributes.extension.type attribute.  Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if the end user did not have permission to download files in the source folder, but does have permission to download files in the target folder, he/she will not be able to download the copied file.  Note that you cannot copy a file if it is in the middle of being uploaded, updated, or copied. To verify the current process state of a file, call GET item, and check the attributes.extension.data.processState attribute.
         * @param {CreateItem} [createItem] Describe the item to be created.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postItem: (accessToken, projectId, xUserId, copyFrom, createItem, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            (0, common_1.assertParamExists)('postItem', 'projectId', projectId);
            const localVarPath = `/data/v1/projects/{project_id}/items`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (copyFrom !== undefined) {
                localVarQueryParameter['copyFrom'] = copyFrom;
            }
            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT-API/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createItem, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version)
         * @summary Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version)
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {RelationshipRefsRequest} [relationshipRefsRequest] Describe the ref to be created.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postItemRelationshipsRef: (accessToken, projectId, itemId, xUserId, relationshipRefsRequest, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            (0, common_1.assertParamExists)('postItemRelationshipsRef', 'projectId', projectId);
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('postItemRelationshipsRef', 'itemId', itemId);
            const localVarPath = `/data/v1/projects/{project_id}/items/{item_id}/relationships/refs`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT-API/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(relationshipRefsRequest, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.ItemsApiAxiosParamCreator = ItemsApiAxiosParamCreator;
/**
 * ItemsApi - functional programming interface
 * @export
 */
const ItemsApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = (0, exports.ItemsApiAxiosParamCreator)(sdkManager.apsconfiguration);
    return {
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
        getItem(accessToken, projectId, itemId, xUserId, includePathInProject, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getItem(accessToken, projectId, itemId, xUserId, includePathInProject, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
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
        getItemParentFolder(accessToken, projectId, itemId, xUserId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getItemParentFolder(accessToken, projectId, itemId, xUserId, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
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
        getItemRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterExtensionType, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getItemRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterExtensionType, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
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
        getItemRelationshipsLinks(accessToken, projectId, itemId, xUserId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getItemRelationshipsLinks(accessToken, projectId, itemId, xUserId, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
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
        getItemRelationshipsRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getItemRelationshipsRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
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
        getItemTip(accessToken, projectId, itemId, xUserId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getItemTip(accessToken, projectId, itemId, xUserId, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
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
        getItemVersions(accessToken, projectId, itemId, xUserId, filterId, filterExtensionType, filterVersionNumber, pageNumber, pageLimit, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getItemVersions(accessToken, projectId, itemId, xUserId, filterId, filterExtensionType, filterVersionNumber, pageNumber, pageLimit, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Updates the properties of the given item_id object.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Updates the properties of the given item_id object
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {ItemRequest} [itemRequest] Describe the item to be patched.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchItem(accessToken, projectId, itemId, xUserId, itemRequest, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.patchItem(accessToken, projectId, itemId, xUserId, itemRequest, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Creates the first version of a file (item). To create additional versions of an item, use POST versions.  Before you create the first version you need to create a storage location for the file, and upload the file to the storage object. For more details about the workflow, see the tutorial on uploading a file.  This endpoint also copies versions of items to other folders in the same project. The endpoint creates a new item and a first version of the item in the target folder. You cannot copy versions of items across different projects and accounts.  To copy versions of items to existng items in other folders, use POST versions. POST versions creates a new version of the existing item in the target folder.  Note that to access BIM 360 Docs files using the Data Management API you need to provision your app in the BIM 360 Account Administrator portal. For more details, see the Manage Access to Docs tutorial.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Creates the first version of a file (item)
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {string} [copyFrom] Only relevant for copying files to BIM 360 Docs - the version ID (URN) of the file to copy. For details about finding the URN, follow the initial steps in the Download a File tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an item:autodesk.bim360:Document item extension type, and you can only copy files to the Project Files folder or to subfolders of the Project Files folder with an item:autodesk.bim360:File item extension type.  To verify an item’s extension type, use GET item, and check the attributes.extension.type attribute.  Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if the end user did not have permission to download files in the source folder, but does have permission to download files in the target folder, he/she will not be able to download the copied file.  Note that you cannot copy a file if it is in the middle of being uploaded, updated, or copied. To verify the current process state of a file, call GET item, and check the attributes.extension.data.processState attribute.
         * @param {CreateItem} [createItem] Describe the item to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postItem(accessToken, projectId, xUserId, copyFrom, createItem, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.postItem(accessToken, projectId, xUserId, copyFrom, createItem, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version)
         * @summary Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version)
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} itemId The unique identifier of an item.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {RelationshipRefsRequest} [relationshipRefsRequest] Describe the ref to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postItemRelationshipsRef(accessToken, projectId, itemId, xUserId, relationshipRefsRequest, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.postItemRelationshipsRef(accessToken, projectId, itemId, xUserId, relationshipRefsRequest, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
exports.ItemsApiFp = ItemsApiFp;
/**
 * ItemsApi - object-oriented interface
 * @export
 * @class ItemsApi
 * @extends {BaseAPI}
 */
class ItemsApi extends base_1.BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
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
    getItem(accessToken, projectId, itemId, xUserId, includePathInProject, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getItem ");
            try {
                const request = yield (0, exports.ItemsApiFp)(this.sdkManager).getItem(accessToken, projectId, itemId, xUserId, includePathInProject, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getItem Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getItem Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.DataManagementApiApiError(`getItem Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getItem Request failed with no response received: ${error.request}`);
                    throw new base_1.DataManagementApiApiError(`getItem Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
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
    getItemParentFolder(accessToken, projectId, itemId, xUserId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getItemParentFolder ");
            try {
                const request = yield (0, exports.ItemsApiFp)(this.sdkManager).getItemParentFolder(accessToken, projectId, itemId, xUserId, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getItemParentFolder Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getItemParentFolder Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.DataManagementApiApiError(`getItemParentFolder Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getItemParentFolder Request failed with no response received: ${error.request}`);
                    throw new base_1.DataManagementApiApiError(`getItemParentFolder Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
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
    getItemRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterExtensionType, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getItemRefs ");
            try {
                const request = yield (0, exports.ItemsApiFp)(this.sdkManager).getItemRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterExtensionType, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getItemRefs Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getItemRefs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.DataManagementApiApiError(`getItemRefs Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getItemRefs Request failed with no response received: ${error.request}`);
                    throw new base_1.DataManagementApiApiError(`getItemRefs Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
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
    getItemRelationshipsLinks(accessToken, projectId, itemId, xUserId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getItemRelationshipsLinks ");
            try {
                const request = yield (0, exports.ItemsApiFp)(this.sdkManager).getItemRelationshipsLinks(accessToken, projectId, itemId, xUserId, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getItemRelationshipsLinks Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getItemRelationshipsLinks Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.DataManagementApiApiError(`getItemRelationshipsLinks Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getItemRelationshipsLinks Request failed with no response received: ${error.request}`);
                    throw new base_1.DataManagementApiApiError(`getItemRelationshipsLinks Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
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
    getItemRelationshipsRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getItemRelationshipsRefs ");
            try {
                const request = yield (0, exports.ItemsApiFp)(this.sdkManager).getItemRelationshipsRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getItemRelationshipsRefs Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getItemRelationshipsRefs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.DataManagementApiApiError(`getItemRelationshipsRefs Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getItemRelationshipsRefs Request failed with no response received: ${error.request}`);
                    throw new base_1.DataManagementApiApiError(`getItemRelationshipsRefs Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
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
    getItemTip(accessToken, projectId, itemId, xUserId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getItemTip ");
            try {
                const request = yield (0, exports.ItemsApiFp)(this.sdkManager).getItemTip(accessToken, projectId, itemId, xUserId, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getItemTip Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getItemTip Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.DataManagementApiApiError(`getItemTip Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getItemTip Request failed with no response received: ${error.request}`);
                    throw new base_1.DataManagementApiApiError(`getItemTip Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
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
    getItemVersions(accessToken, projectId, itemId, xUserId, filterId, filterExtensionType, filterVersionNumber, pageNumber, pageLimit, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getItemVersions ");
            try {
                const request = yield (0, exports.ItemsApiFp)(this.sdkManager).getItemVersions(accessToken, projectId, itemId, xUserId, filterId, filterExtensionType, filterVersionNumber, pageNumber, pageLimit, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getItemVersions Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getItemVersions Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.DataManagementApiApiError(`getItemVersions Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getItemVersions Request failed with no response received: ${error.request}`);
                    throw new base_1.DataManagementApiApiError(`getItemVersions Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Updates the properties of the given item_id object.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Updates the properties of the given item_id object
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {ItemRequest} [itemRequest] Describe the item to be patched.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    patchItem(accessToken, projectId, itemId, xUserId, itemRequest, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into patchItem ");
            try {
                const request = yield (0, exports.ItemsApiFp)(this.sdkManager).patchItem(accessToken, projectId, itemId, xUserId, itemRequest, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`patchItem Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`patchItem Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.DataManagementApiApiError(`patchItem Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`patchItem Request failed with no response received: ${error.request}`);
                    throw new base_1.DataManagementApiApiError(`patchItem Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Creates the first version of a file (item). To create additional versions of an item, use POST versions.  Before you create the first version you need to create a storage location for the file, and upload the file to the storage object. For more details about the workflow, see the tutorial on uploading a file.  This endpoint also copies versions of items to other folders in the same project. The endpoint creates a new item and a first version of the item in the target folder. You cannot copy versions of items across different projects and accounts.  To copy versions of items to existng items in other folders, use POST versions. POST versions creates a new version of the existing item in the target folder.  Note that to access BIM 360 Docs files using the Data Management API you need to provision your app in the BIM 360 Account Administrator portal. For more details, see the Manage Access to Docs tutorial.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Creates the first version of a file (item)
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {string} [copyFrom] Only relevant for copying files to BIM 360 Docs - the version ID (URN) of the file to copy. For details about finding the URN, follow the initial steps in the Download a File tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an item:autodesk.bim360:Document item extension type, and you can only copy files to the Project Files folder or to subfolders of the Project Files folder with an item:autodesk.bim360:File item extension type.  To verify an item’s extension type, use GET item, and check the attributes.extension.type attribute.  Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if the end user did not have permission to download files in the source folder, but does have permission to download files in the target folder, he/she will not be able to download the copied file.  Note that you cannot copy a file if it is in the middle of being uploaded, updated, or copied. To verify the current process state of a file, call GET item, and check the attributes.extension.data.processState attribute.
     * @param {CreateItem} [createItem] Describe the item to be created.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    postItem(accessToken, projectId, xUserId, copyFrom, createItem, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into postItem ");
            try {
                const request = yield (0, exports.ItemsApiFp)(this.sdkManager).postItem(accessToken, projectId, xUserId, copyFrom, createItem, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`postItem Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`postItem Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.DataManagementApiApiError(`postItem Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`postItem Request failed with no response received: ${error.request}`);
                    throw new base_1.DataManagementApiApiError(`postItem Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version)
     * @summary Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version)
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {RelationshipRefsRequest} [relationshipRefsRequest] Describe the ref to be created.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    postItemRelationshipsRef(accessToken, projectId, itemId, xUserId, relationshipRefsRequest, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into postItemRelationshipsRef ");
            try {
                const request = yield (0, exports.ItemsApiFp)(this.sdkManager).postItemRelationshipsRef(accessToken, projectId, itemId, xUserId, relationshipRefsRequest, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`postItemRelationshipsRef Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`postItemRelationshipsRef Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.DataManagementApiApiError(`postItemRelationshipsRef Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`postItemRelationshipsRef Request failed with no response received: ${error.request}`);
                    throw new base_1.DataManagementApiApiError(`postItemRelationshipsRef Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
exports.ItemsApi = ItemsApi;
/**
 * @export
 */
exports.GetItemRelationshipsRefsFilterRefTypeEnum = {
    Derived: 'derived',
    Dependencies: 'dependencies',
    Auxiliary: 'auxiliary',
    Xrefs: 'xrefs',
    Includes: 'includes'
};
/**
 * @export
 */
exports.GetItemRelationshipsRefsFilterDirectionEnum = {
    From: 'from',
    To: 'to'
};
