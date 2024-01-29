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
exports.BusinessUnitsApi = exports.BusinessUnitsApiFp = exports.BusinessUnitsApiAxiosParamCreator = void 0;
const autodesk_sdkmanager_1 = require("autodesk-sdkmanager");
const common_1 = require("../common");
const base_1 = require("../base");
const model_1 = require("../model");
const Utils_1 = require("../custom-code/Utils");
/**
 * BusinessUnitsApi - axios parameter creator
 * @export
 */
const BusinessUnitsApiAxiosParamCreator = function (apsConfiguration) {
    return {
        /**
         * Query all the business units in a specific BIM 360 account.
         * @summary Create Business Units
         * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {BusinessUnitsRequestPyload} [businessUnitsRequestPyload]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBusinessUnits: (accessToken, accountId, region, businessUnitsRequestPyload, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'accountId' is not null or undefined
            (0, common_1.assertParamExists)('createBusinessUnits', 'accountId', accountId);
            const regionPath = Utils_1.Utils.GetPathfromRegion(region !== null && region !== void 0 ? region : model_1.Region.Us);
            const localVarPath = (regionPath + `{account_id}/business_units_structure`)
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (region != null) {
                localVarHeaderParameter['Region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTIONADMIN/TypeScript/1.0.0-beta1';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(businessUnitsRequestPyload, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Query all the business units in a specific BIM 360 account.
         * @summary Get Business Units
         * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBusinessUnits: (accessToken, accountId, region, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'accountId' is not null or undefined
            (0, common_1.assertParamExists)('getBusinessUnits', 'accountId', accountId);
            const regionPath = Utils_1.Utils.GetPathfromRegion(region !== null && region !== void 0 ? region : model_1.Region.Us);
            const localVarPath = (regionPath + `{account_id}/business_units_structure`)
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (region != null) {
                localVarHeaderParameter['Region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
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
exports.BusinessUnitsApiAxiosParamCreator = BusinessUnitsApiAxiosParamCreator;
/**
 * BusinessUnitsApi - functional programming interface
 * @export
 */
const BusinessUnitsApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = (0, exports.BusinessUnitsApiAxiosParamCreator)(sdkManager.apsconfiguration);
    return {
        /**
         * Query all the business units in a specific BIM 360 account.
         * @summary Create Business Units
         * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {BusinessUnitsRequestPyload} [businessUnitsRequestPyload]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBusinessUnits(accessToken, accountId, region, businessUnitsRequestPyload, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.createBusinessUnits(accessToken, accountId, region, businessUnitsRequestPyload, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Query all the business units in a specific BIM 360 account.
         * @summary Get Business Units
         * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBusinessUnits(accessToken, accountId, region, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getBusinessUnits(accessToken, accountId, region, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
exports.BusinessUnitsApiFp = BusinessUnitsApiFp;
/**
 * BusinessUnitsApi - object-oriented interface
 * @export
 * @class BusinessUnitsApi
 * @extends {BaseAPI}
 */
class BusinessUnitsApi extends base_1.BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
    /**
     * Query all the business units in a specific BIM 360 account.
     * @summary Create Business Units
     * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {BusinessUnitsRequestPyload} [businessUnitsRequestPyload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessUnitsApi
     */
    createBusinessUnits(accessToken, accountId, region, businessUnitsRequestPyload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into createBusinessUnits ");
            try {
                const request = yield (0, exports.BusinessUnitsApiFp)(this.sdkManager).createBusinessUnits(accessToken, accountId, region, businessUnitsRequestPyload, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`createBusinessUnits Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`createBusinessUnits Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.ConstructionadminApiError(`createBusinessUnits Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`createBusinessUnits Request failed with no response received: ${error.request}`);
                    throw new base_1.ConstructionadminApiError(`createBusinessUnits Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Query all the business units in a specific BIM 360 account.
     * @summary Get Business Units
     * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessUnitsApi
     */
    getBusinessUnits(accessToken, accountId, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getBusinessUnits ");
            try {
                const request = yield (0, exports.BusinessUnitsApiFp)(this.sdkManager).getBusinessUnits(accessToken, accountId, region, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getBusinessUnits Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getBusinessUnits Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.ConstructionadminApiError(`getBusinessUnits Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getBusinessUnits Request failed with no response received: ${error.request}`);
                    throw new base_1.ConstructionadminApiError(`getBusinessUnits Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
exports.BusinessUnitsApi = BusinessUnitsApi;
