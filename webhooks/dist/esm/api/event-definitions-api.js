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
import { ApiResponse } from "autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, toPathString, createRequestFunction } from '../common';
import { BaseAPI, WebhooksApiApiError } from '../base';
/**
 * EventDefinitionsApi - axios parameter creator
 * @export
 */
export const EventDefinitionsApiAxiosParamCreator = function (apsConfiguration) {
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
            assertParamExists('getEventDefinitionsSystemsSystemId', 'system', system);
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
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * EventDefinitionsApi - functional programming interface
 * @export
 */
export const EventDefinitionsApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = EventDefinitionsApiAxiosParamCreator(sdkManager.apsconfiguration);
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
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
/**
 * EventDefinitionsApi - object-oriented interface
 * @export
 * @class EventDefinitionsApi
 * @extends {BaseAPI}
 */
export class EventDefinitionsApi extends BaseAPI {
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
                const request = yield EventDefinitionsApiFp(this.sdkManager).getEventDefinitionsSystemsSystemId(accessToken, system, region, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getEventDefinitionsSystemsSystemId Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getEventDefinitionsSystemsSystemId Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new WebhooksApiApiError(`getEventDefinitionsSystemsSystemId Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getEventDefinitionsSystemsSystemId Request failed with no response received: ${error.request}`);
                    throw new WebhooksApiApiError(`getEventDefinitionsSystemsSystemId Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
/**
 * @export
 */
export const GetEventDefinitionsSystemsSystemIdSystemEnum = {
    Data: 'data',
    AdskContent: 'adsk.content',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
};
