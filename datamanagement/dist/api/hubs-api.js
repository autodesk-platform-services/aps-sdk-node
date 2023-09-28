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
exports.HubsApi = exports.HubsApiFp = exports.HubsApiAxiosParamCreator = void 0;
const autodesk_sdkmanager_1 = require("autodesk-sdkmanager");
const common_1 = require("../common");
const base_1 = require("../base");
/**
 * HubsApi - axios parameter creator
 * @export
 */
const HubsApiAxiosParamCreator = function (apsConfiguration) {
    return {
        /**
         * Returns data on a specific hub_id.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns data on a specific hub_id
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHub: (accessToken, hubId, xUserId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'hubId' is not null or undefined
            (0, common_1.assertParamExists)('getHub', 'hubId', hubId);
            const localVarPath = `/project/v1/hubs/{hub_id}`
                .replace(`{${"hub_id"}}`, encodeURIComponent(String(hubId)));
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
         * Returns a collection of accessible hubs for this member.  Hubs represent BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, or BIM 360 Docs accounts. Team hubs include **BIM 360** Team hubs and Fusion Team hubs (formerly known as A360 Team hubs). Personal hubs include A360 Personal hubs. Only active hubs are listed.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a collection of accessible hubs for this member
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {string} [filterName] Filter by the name of the ref target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHubs: (accessToken, xUserId, filterId, filterName, filterExtensionType, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/project/v1/hubs`;
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
            if (filterName !== undefined) {
                localVarQueryParameter['filter_name'] = filterName;
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
    };
};
exports.HubsApiAxiosParamCreator = HubsApiAxiosParamCreator;
/**
 * HubsApi - functional programming interface
 * @export
 */
const HubsApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = (0, exports.HubsApiAxiosParamCreator)(sdkManager.apsconfiguration);
    return {
        /**
         * Returns data on a specific hub_id.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns data on a specific hub_id
         * @param {string} hubId The unique identifier of a hub.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHub(accessToken, hubId, xUserId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getHub(accessToken, hubId, xUserId, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Returns a collection of accessible hubs for this member.  Hubs represent BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, or BIM 360 Docs accounts. Team hubs include **BIM 360** Team hubs and Fusion Team hubs (formerly known as A360 Team hubs). Personal hubs include A360 Personal hubs. Only active hubs are listed.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
         * @summary Returns a collection of accessible hubs for this member
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {Array<string>} [filterId] Filter by the id of the ref target.
         * @param {string} [filterName] Filter by the name of the ref target.
         * @param {Array<string>} [filterExtensionType] Filter by the extension type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHubs(accessToken, xUserId, filterId, filterName, filterExtensionType, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getHubs(accessToken, xUserId, filterId, filterName, filterExtensionType, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
exports.HubsApiFp = HubsApiFp;
/**
 * HubsApi - object-oriented interface
 * @export
 * @class HubsApi
 * @extends {BaseAPI}
 */
class HubsApi extends base_1.BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
    /**
     * Returns data on a specific hub_id.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns data on a specific hub_id
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HubsApi
     */
    getHub(accessToken, hubId, xUserId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getHub ");
            try {
                const request = yield (0, exports.HubsApiFp)(this.sdkManager).getHub(accessToken, hubId, xUserId, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getHub Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getHub Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.DataManagementApiApiError(`getHub Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getHub Request failed with no response received: ${error.request}`);
                    throw new base_1.DataManagementApiApiError(`getHub Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Returns a collection of accessible hubs for this member.  Hubs represent BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, or BIM 360 Docs accounts. Team hubs include **BIM 360** Team hubs and Fusion Team hubs (formerly known as A360 Team hubs). Personal hubs include A360 Personal hubs. Only active hubs are listed.  Note that for BIM 360 Docs, a hub ID corresponds to an account ID in the BIM 360 API. To convert an account ID into a hub ID you need to add a \"b.\" prefix. For example, an account ID of c8b0c73d-3ae9 translates to a hub ID of b.c8b0c73d-3ae9.  New! Autodesk Construction Cloud platform (ACC). Note that this endpoint is compatible with ACC projects. For more information about the Autodesk Construction Cloud APIs, see the Autodesk Construction Cloud documentation.
     * @summary Returns a collection of accessible hubs for this member
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {Array<string>} [filterId] Filter by the id of the ref target.
     * @param {string} [filterName] Filter by the name of the ref target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HubsApi
     */
    getHubs(accessToken, xUserId, filterId, filterName, filterExtensionType, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getHubs ");
            try {
                const request = yield (0, exports.HubsApiFp)(this.sdkManager).getHubs(accessToken, xUserId, filterId, filterName, filterExtensionType, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getHubs Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getHubs Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.DataManagementApiApiError(`getHubs Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getHubs Request failed with no response received: ${error.request}`);
                    throw new base_1.DataManagementApiApiError(`getHubs Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
exports.HubsApi = HubsApi;
