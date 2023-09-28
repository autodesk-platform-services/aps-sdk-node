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
exports.GetEventDefinitionsSystemsSystemIdSystemEnum = exports.EventDefinitionsApi = exports.EventDefinitionsApiFp = exports.EventDefinitionsApiAxiosParamCreator = void 0;
const autodesk_sdkmanager_1 = require("autodesk-sdkmanager");
const common_1 = require("../common");
const base_1 = require("../base");
/**
 * EventDefinitionsApi - axios parameter creator
 * @export
 */
const EventDefinitionsApiAxiosParamCreator = function (apsConfiguration) {
    return {
        /**
         * Retrieves the latest version of the event definition based on the system ID.
         * @summary Your GET endpoint
         * @param {GetEventDefinitionsSystemsSystemIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventDefinitionsSystemsSystemId: (accessToken, system, region, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'system' is not null or undefined
            (0, common_1.assertParamExists)('getEventDefinitionsSystemsSystemId', 'system', system);
            const localVarPath = `/event-definitions/systems/{system}`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
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
exports.EventDefinitionsApiAxiosParamCreator = EventDefinitionsApiAxiosParamCreator;
/**
 * EventDefinitionsApi - functional programming interface
 * @export
 */
const EventDefinitionsApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = (0, exports.EventDefinitionsApiAxiosParamCreator)(sdkManager.apsconfiguration);
    return {
        /**
         * Retrieves the latest version of the event definition based on the system ID.
         * @summary Your GET endpoint
         * @param {GetEventDefinitionsSystemsSystemIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventDefinitionsSystemsSystemId(accessToken, system, region, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getEventDefinitionsSystemsSystemId(accessToken, system, region, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
exports.EventDefinitionsApiFp = EventDefinitionsApiFp;
/**
 * EventDefinitionsApi - object-oriented interface
 * @export
 * @class EventDefinitionsApi
 * @extends {BaseAPI}
 */
class EventDefinitionsApi extends base_1.BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
    /**
     * Retrieves the latest version of the event definition based on the system ID.
     * @summary Your GET endpoint
     * @param {GetEventDefinitionsSystemsSystemIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventDefinitionsApi
     */
    getEventDefinitionsSystemsSystemId(accessToken, system, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getEventDefinitionsSystemsSystemId ");
            try {
                const request = yield (0, exports.EventDefinitionsApiFp)(this.sdkManager).getEventDefinitionsSystemsSystemId(accessToken, system, region, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getEventDefinitionsSystemsSystemId Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getEventDefinitionsSystemsSystemId Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.WebhooksApiApiError(`getEventDefinitionsSystemsSystemId Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getEventDefinitionsSystemsSystemId Request failed with no response received: ${error.request}`);
                    throw new base_1.WebhooksApiApiError(`getEventDefinitionsSystemsSystemId Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
exports.EventDefinitionsApi = EventDefinitionsApi;
/**
 * @export
 */
exports.GetEventDefinitionsSystemsSystemIdSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
};
