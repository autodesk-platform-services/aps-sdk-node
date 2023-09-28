/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse} from "autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, WebhooksApiApiError } from '../base';
import { EventDefinitions } from '../model';
import { GetSystemsSystemEventsEventHooksHookId400Response } from '../model';
/**
 * EventDefinitionsApi - axios parameter creator
 * @export
 */
export const EventDefinitionsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
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
        getEventDefinitionsSystemsSystemId: async (accessToken: string, system: GetEventDefinitionsSystemsSystemIdSystemEnum, region?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'system' is not null or undefined
            assertParamExists('getEventDefinitionsSystemsSystemId', 'system', system)
            const localVarPath = `/event-definitions/systems/{system}`
                .replace(`{${"system"}}`, encodeURIComponent(String(system)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (region !== undefined) {
                localVarQueryParameter['region'] = region;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EventDefinitionsApi - functional programming interface
 * @export
 */
export const EventDefinitionsApiFp = function(sdkManager?: SDKManager) {
    const localVarAxiosParamCreator = EventDefinitionsApiAxiosParamCreator(sdkManager.apsconfiguration)
    return {
        /**
         * Retrieves the latest version of the event definition based on the system ID.
         * @summary Your GET endpoint
         * @param {GetEventDefinitionsSystemsSystemIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
         * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEventDefinitionsSystemsSystemId(accessToken: string, system: GetEventDefinitionsSystemsSystemIdSystemEnum, region?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventDefinitions>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEventDefinitionsSystemsSystemId(accessToken, system, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * EventDefinitionsApi - interface
 * @export
 * @interface EventDefinitionsApi
 */
export interface EventDefinitionsApiInterface {
    /**
     * Retrieves the latest version of the event definition based on the system ID.
     * @summary Your GET endpoint
     * @param {GetEventDefinitionsSystemsSystemIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventDefinitionsApiInterface
     */
    getEventDefinitionsSystemsSystemId(accessToken: string,system: GetEventDefinitionsSystemsSystemIdSystemEnum, region?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * EventDefinitionsApi - object-oriented interface
 * @export
 * @class EventDefinitionsApi
 * @extends {BaseAPI}
 */
export class EventDefinitionsApi extends BaseAPI implements EventDefinitionsApiInterface {
    private logger = this.sdkManager.logger;
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
    public async getEventDefinitionsSystemsSystemId(accessToken: string, system: GetEventDefinitionsSystemsSystemIdSystemEnum, region?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getEventDefinitionsSystemsSystemId ");
      try {
        const request =  await EventDefinitionsApiFp(this.sdkManager).getEventDefinitionsSystemsSystemId(accessToken, system, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getEventDefinitionsSystemsSystemId Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getEventDefinitionsSystemsSystemId Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new WebhooksApiApiError(`getEventDefinitionsSystemsSystemId Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getEventDefinitionsSystemsSystemId Request failed with no response received: ${error.request}`);
            throw new WebhooksApiApiError(`getEventDefinitionsSystemsSystemId Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
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
} as const;
export type GetEventDefinitionsSystemsSystemIdSystemEnum = typeof GetEventDefinitionsSystemsSystemIdSystemEnum[keyof typeof GetEventDefinitionsSystemsSystemIdSystemEnum];
