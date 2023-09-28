import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { EventDefinitions } from '../model';
/**
 * EventDefinitionsApi - axios parameter creator
 * @export
 */
export declare const EventDefinitionsApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
    /**
     * Retrieves the latest version of the event definition based on the system ID.
     * @summary Your GET endpoint
     * @param {GetEventDefinitionsSystemsSystemIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEventDefinitionsSystemsSystemId: (accessToken: string, system: GetEventDefinitionsSystemsSystemIdSystemEnum, region?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * EventDefinitionsApi - functional programming interface
 * @export
 */
export declare const EventDefinitionsApiFp: (sdkManager?: SDKManager) => {
    /**
     * Retrieves the latest version of the event definition based on the system ID.
     * @summary Your GET endpoint
     * @param {GetEventDefinitionsSystemsSystemIdSystemEnum} system A system for example: &#x60;&#x60;data&#x60;&#x60; for Data Management
     * @param {string} [region] Specifies the geographical location (region) of the server that the request is executed on. Supported values are: &#x60;&#x60;EMEA&#x60;&#x60;, &#x60;&#x60;US&#x60;&#x60;. Default is &#x60;&#x60;US&#x60;&#x60;.  The &#x60;&#x60;x-ads-region&#x60;&#x60; header also specifies the region. If you specify both, &#x60;&#x60;x-ads-region&#x60;&#x60; has precedence.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEventDefinitionsSystemsSystemId(accessToken: string, system: GetEventDefinitionsSystemsSystemIdSystemEnum, region?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventDefinitions>>;
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
    getEventDefinitionsSystemsSystemId(accessToken: string, system: GetEventDefinitionsSystemsSystemIdSystemEnum, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * EventDefinitionsApi - object-oriented interface
 * @export
 * @class EventDefinitionsApi
 * @extends {BaseAPI}
 */
export declare class EventDefinitionsApi extends BaseAPI implements EventDefinitionsApiInterface {
    private logger;
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
    getEventDefinitionsSystemsSystemId(accessToken: string, system: GetEventDefinitionsSystemsSystemIdSystemEnum, region?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * @export
 */
export declare const GetEventDefinitionsSystemsSystemIdSystemEnum: {
    readonly Data: "data";
    readonly AdskContent: "adsk.content";
    readonly AdskC4r: "adsk.c4r";
    readonly AdskFlcProduction: "adsk.flc.production";
    readonly AutodeskConstructionCost: "autodesk.construction.cost";
};
export type GetEventDefinitionsSystemsSystemIdSystemEnum = typeof GetEventDefinitionsSystemsSystemIdSystemEnum[keyof typeof GetEventDefinitionsSystemsSystemIdSystemEnum];
