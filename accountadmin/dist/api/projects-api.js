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
exports.ProjectsApi = exports.ProjectsApiFp = exports.ProjectsApiAxiosParamCreator = void 0;
const autodesk_sdkmanager_1 = require("@aps_sdk/autodesk-sdkmanager");
const common_1 = require("../common");
const base_1 = require("../base");
const model_1 = require("../model");
const Utils_1 = require("../custom-code/Utils");
/**
 * ProjectsApi - axios parameter creator
 * @export
 */
const ProjectsApiAxiosParamCreator = function (apsConfiguration) {
    return {
        /**
         * Creates a new project in the specified account. You can create the project directly, or clone the project from a project template.
         * @summary Create new Project
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {ProjectPayload} [projectPayload]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProject: (accessToken, accountId, acceptLanguage, region, userId, projectPayload, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'accountId' is not null or undefined
            (0, common_1.assertParamExists)('createProject', 'accountId', accountId);
            const localVarPath = `/construction/admin/v1/accounts/{accountId}/projects`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (acceptLanguage != null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            if (region != null) {
                localVarHeaderParameter['Region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }
            if (userId != null) {
                localVarHeaderParameter['User-Id'] = String(userId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/ACCOUNT-ADMIN/TypeScript/1.0.0-beta1';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(projectPayload, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Create or update a project’s image.
         * @summary Create or update a project’s image
         * @param {string} projectId The account ID of the project. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} accountId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the BIM 360 API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProjectImage: (accessToken, projectId, accountId, body, region, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            (0, common_1.assertParamExists)('createProjectImage', 'projectId', projectId);
            // verify required parameter 'accountId' is not null or undefined
            (0, common_1.assertParamExists)('createProjectImage', 'accountId', accountId);
            // verify required parameter 'body' is not null or undefined
            (0, common_1.assertParamExists)('createProjectImage', 'body', body);
            const regionPath = Utils_1.Utils.GetPathfromRegion(region !== null && region !== void 0 ? region : model_1.Region.Us);
            const localVarPath = (regionPath + `{account_id}/projects/{project_id}/image`)
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PATCH' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const formData = new FormData();
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            // if (region != null) {
            //     localVarHeaderParameter['Region'] = typeof region === 'string'
            //         ? region
            //         : JSON.stringify(region);
            // }
            if (body !== undefined) {
                formData.set('chunk', body);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = formData;
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Retrieves a project specified by project ID.
         * @summary Get a project by ID
         * @param {string} projectId
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProject: (accessToken, projectId, acceptLanguage, region, userId, fields, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'projectId' is not null or undefined
            (0, common_1.assertParamExists)('getProject', 'projectId', projectId);
            const localVarPath = `/construction/admin/v1/projects/{projectId}`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            if (region != null) {
                localVarHeaderParameter['Region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }
            if (userId != null) {
                localVarHeaderParameter['User-Id'] = String(userId);
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
         * Retrieves a list of the projects in the specified account.
         * @summary Get Project in account
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
         * @param {Array<Classification>} [filterClassification] A list of the classifications of projects to include in the response. Possible values: production, template, component, sample.
         * @param {Array<Platform>} [filterPlatform] Filter resource by platform. Possible values: acc and bim360.
         * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
         * @param {string} [filterName] A project name or name pattern to filter projects by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]&#x3D;ABCco filterTextMatch&#x3D;startsWith.  Max length: 255
         * @param {Array<string>} [filterType] A list of project types to filter projects by. To exclude a project type from the response, prefix it with - (a hyphen); for example, -Bridge excludes bridge projects.
         * @param {Array<Status>} [filterStatus] A list of the statuses of projects to include in the response. Possible values:  active pending archived suspended
         * @param {string} [filterBusinessUnitId] The ID of the business unit that returned projects must be associated with.
         * @param {string} [filterJobNumber] The user-defined identifier for a project to be returned. This ID was defined when the project was created. This filter accepts a partial match based on the value of filterTextMatch that you provide.
         * @param {string} [filterUpdatedAt] A range of dates during which the desired projects were updated. The range must be specified with dates in ISO 8601 format with time required. Separate multiple values with commas.
         * @param {FilterTextMatch} [filterTextMatch] When filtering on a text-based field, this value indicates how to do the matching. Default value: contains. Possible values: contains, startsWith, endsWith and equals.
         * @param {Array<SortBy>} [sort] A list of fields to sort the returned projects by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field.
         * @param {number} [limit] The maximum number of records to return in a single request. Possible range: 1-200. Default value: 20.
         * @param {number} [offset] The record number that the returned page should start with. When the total number of records exceeds the value of limit, increase the offset value in subsequent requests to continue getting the remaining results.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjects: (accessToken, accountId, acceptLanguage, region, userId, fields, filterClassification, filterPlatform, filterProducts, filterName, filterType, filterStatus, filterBusinessUnitId, filterJobNumber, filterUpdatedAt, filterTextMatch, sort, limit, offset, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'accountId' is not null or undefined
            (0, common_1.assertParamExists)('getProjects', 'accountId', accountId);
            const localVarPath = `/construction/admin/v1/accounts/{accountId}/projects`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }
            if (filterClassification) {
                localVarQueryParameter['filter[classification]'] = filterClassification;
            }
            if (filterPlatform) {
                localVarQueryParameter['filter[platform]'] = filterPlatform;
            }
            if (filterProducts) {
                localVarQueryParameter['filter[products]'] = filterProducts;
            }
            if (filterName !== undefined) {
                localVarQueryParameter['filter[name]'] = filterName;
            }
            if (filterType) {
                localVarQueryParameter['filter[type]'] = filterType;
            }
            if (filterStatus) {
                localVarQueryParameter['filter[status]'] = filterStatus;
            }
            if (filterBusinessUnitId !== undefined) {
                localVarQueryParameter['filter[businessUnitId]'] = filterBusinessUnitId;
            }
            if (filterJobNumber !== undefined) {
                localVarQueryParameter['filter[jobNumber]'] = filterJobNumber;
            }
            if (filterUpdatedAt !== undefined) {
                localVarQueryParameter['filter[updatedAt]'] = filterUpdatedAt;
            }
            if (filterTextMatch !== undefined) {
                localVarQueryParameter['filterTextMatch'] = filterTextMatch;
            }
            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            if (region != null) {
                localVarHeaderParameter['Region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }
            if (userId != null) {
                localVarHeaderParameter['User-Id'] = String(userId);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.ProjectsApiAxiosParamCreator = ProjectsApiAxiosParamCreator;
/**
 * ProjectsApi - functional programming interface
 * @export
 */
const ProjectsApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = (0, exports.ProjectsApiAxiosParamCreator)(sdkManager.apsconfiguration);
    return {
        /**
         * Creates a new project in the specified account. You can create the project directly, or clone the project from a project template.
         * @summary Create new Project
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {ProjectPayload} [projectPayload]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProject(accessToken, accountId, acceptLanguage, region, userId, projectPayload, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.createProject(accessToken, accountId, acceptLanguage, region, userId, projectPayload, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Create or update a project’s image.
         * @summary Create or update a project’s image
         * @param {string} projectId The account ID of the project. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} accountId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the BIM 360 API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProjectImage(accessToken, projectId, accountId, body, region, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.createProjectImage(accessToken, projectId, accountId, body, region, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Retrieves a project specified by project ID.
         * @summary Get a project by ID
         * @param {string} projectId
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProject(accessToken, projectId, acceptLanguage, region, userId, fields, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getProject(accessToken, projectId, acceptLanguage, region, userId, fields, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Retrieves a list of the projects in the specified account.
         * @summary Get Project in account
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
         * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
         * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
         * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
         * @param {Array<Classification>} [filterClassification] A list of the classifications of projects to include in the response. Possible values: production, template, component, sample.
         * @param {Array<Platform>} [filterPlatform] Filter resource by platform. Possible values: acc and bim360.
         * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
         * @param {string} [filterName] A project name or name pattern to filter projects by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]&#x3D;ABCco filterTextMatch&#x3D;startsWith.  Max length: 255
         * @param {Array<string>} [filterType] A list of project types to filter projects by. To exclude a project type from the response, prefix it with - (a hyphen); for example, -Bridge excludes bridge projects.
         * @param {Array<Status>} [filterStatus] A list of the statuses of projects to include in the response. Possible values:  active pending archived suspended
         * @param {string} [filterBusinessUnitId] The ID of the business unit that returned projects must be associated with.
         * @param {string} [filterJobNumber] The user-defined identifier for a project to be returned. This ID was defined when the project was created. This filter accepts a partial match based on the value of filterTextMatch that you provide.
         * @param {string} [filterUpdatedAt] A range of dates during which the desired projects were updated. The range must be specified with dates in ISO 8601 format with time required. Separate multiple values with commas.
         * @param {FilterTextMatch} [filterTextMatch] When filtering on a text-based field, this value indicates how to do the matching. Default value: contains. Possible values: contains, startsWith, endsWith and equals.
         * @param {Array<SortBy>} [sort] A list of fields to sort the returned projects by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field.
         * @param {number} [limit] The maximum number of records to return in a single request. Possible range: 1-200. Default value: 20.
         * @param {number} [offset] The record number that the returned page should start with. When the total number of records exceeds the value of limit, increase the offset value in subsequent requests to continue getting the remaining results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjects(accessToken, accountId, acceptLanguage, region, userId, fields, filterClassification, filterPlatform, filterProducts, filterName, filterType, filterStatus, filterBusinessUnitId, filterJobNumber, filterUpdatedAt, filterTextMatch, sort, limit, offset, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getProjects(accessToken, accountId, acceptLanguage, region, userId, fields, filterClassification, filterPlatform, filterProducts, filterName, filterType, filterStatus, filterBusinessUnitId, filterJobNumber, filterUpdatedAt, filterTextMatch, sort, limit, offset, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
exports.ProjectsApiFp = ProjectsApiFp;
/**
 * ProjectsApi - object-oriented interface
 * @export
 * @class ProjectsApi
 * @extends {BaseAPI}
 */
class ProjectsApi extends base_1.BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
    /**
     * Creates a new project in the specified account. You can create the project directly, or clone the project from a project template.
     * @summary Create new Project
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectPayload} [projectPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    createProject(accessToken, accountId, acceptLanguage, region, userId, projectPayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into createProject ");
            try {
                const request = yield (0, exports.ProjectsApiFp)(this.sdkManager).createProject(accessToken, accountId, acceptLanguage, region, userId, projectPayload, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`createProject Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`createProject Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.AccountAdminApiError(`createProject Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`createProject Request failed with no response received: ${error.request}`);
                    throw new base_1.AccountAdminApiError(`createProject Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Create or update a project’s image.
     * @summary Create or update a project’s image
     * @param {string} projectId The account ID of the project. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} accountId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the BIM 360 API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    createProjectImage(accessToken, projectId, accountId, body, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into createProjectImage ");
            try {
                const request = yield (0, exports.ProjectsApiFp)(this.sdkManager).createProjectImage(accessToken, projectId, accountId, body, region, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`createProjectImage Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`createProjectImage Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.AccountAdminApiError(`createProjectImage Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`createProjectImage Request failed with no response received: ${error.request}`);
                    throw new base_1.AccountAdminApiError(`createProjectImage Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Retrieves a project specified by project ID.
     * @summary Get a project by ID
     * @param {string} projectId
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    getProject(accessToken, projectId, acceptLanguage, region, userId, fields, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getProject ");
            try {
                const request = yield (0, exports.ProjectsApiFp)(this.sdkManager).getProject(accessToken, projectId, acceptLanguage, region, userId, fields, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getProject Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getProject Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.AccountAdminApiError(`getProject Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getProject Request failed with no response received: ${error.request}`);
                    throw new base_1.AccountAdminApiError(`getProject Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Retrieves a list of the projects in the specified account.
     * @summary Get Project in account
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} [acceptLanguage] This header is not currently supported in the Account Admin API.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA.
     * @param {string} [userId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param {Array<Classification>} [filterClassification] A list of the classifications of projects to include in the response. Possible values: production, template, component, sample.
     * @param {Array<Platform>} [filterPlatform] Filter resource by platform. Possible values: acc and bim360.
     * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
     * @param {string} [filterName] A project name or name pattern to filter projects by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]&#x3D;ABCco filterTextMatch&#x3D;startsWith.  Max length: 255
     * @param {Array<string>} [filterType] A list of project types to filter projects by. To exclude a project type from the response, prefix it with - (a hyphen); for example, -Bridge excludes bridge projects.
     * @param {Array<Status>} [filterStatus] A list of the statuses of projects to include in the response. Possible values:  active pending archived suspended
     * @param {string} [filterBusinessUnitId] The ID of the business unit that returned projects must be associated with.
     * @param {string} [filterJobNumber] The user-defined identifier for a project to be returned. This ID was defined when the project was created. This filter accepts a partial match based on the value of filterTextMatch that you provide.
     * @param {string} [filterUpdatedAt] A range of dates during which the desired projects were updated. The range must be specified with dates in ISO 8601 format with time required. Separate multiple values with commas.
     * @param {FilterTextMatch} [filterTextMatch] When filtering on a text-based field, this value indicates how to do the matching. Default value: contains. Possible values: contains, startsWith, endsWith and equals.
     * @param {Array<SortBy>} [sort] A list of fields to sort the returned projects by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field.
     * @param {number} [limit] The maximum number of records to return in a single request. Possible range: 1-200. Default value: 20.
     * @param {number} [offset] The record number that the returned page should start with. When the total number of records exceeds the value of limit, increase the offset value in subsequent requests to continue getting the remaining results.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    getProjects(accessToken, accountId, acceptLanguage, region, userId, fields, filterClassification, filterPlatform, filterProducts, filterName, filterType, filterStatus, filterBusinessUnitId, filterJobNumber, filterUpdatedAt, filterTextMatch, sort, limit, offset, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getProjects ");
            try {
                const request = yield (0, exports.ProjectsApiFp)(this.sdkManager).getProjects(accessToken, accountId, acceptLanguage, region, userId, fields, filterClassification, filterPlatform, filterProducts, filterName, filterType, filterStatus, filterBusinessUnitId, filterJobNumber, filterUpdatedAt, filterTextMatch, sort, limit, offset, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getProjects Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getProjects Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.AccountAdminApiError(`getProjects Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getProjects Request failed with no response received: ${error.request}`);
                    throw new base_1.AccountAdminApiError(`getProjects Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
exports.ProjectsApi = ProjectsApi;
