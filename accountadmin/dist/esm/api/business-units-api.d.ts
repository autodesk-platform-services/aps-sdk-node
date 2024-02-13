import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "@aps_sdk/autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { BusinessUnitsRequestPyload } from '../model';
import { BusinessUnitsResponse } from '../model';
import { Region } from '../model';
/**
 * BusinessUnitsApi - axios parameter creator
 * @export
 */
export declare const BusinessUnitsApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
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
    createBusinessUnits: (accessToken: string, accountId: string, region?: Region, businessUnitsRequestPyload?: BusinessUnitsRequestPyload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Query all the business units in a specific BIM 360 account.
     * @summary Get Business Units
     * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBusinessUnits: (accessToken: string, accountId: string, region?: Region, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * BusinessUnitsApi - functional programming interface
 * @export
 */
export declare const BusinessUnitsApiFp: (sdkManager?: SDKManager) => {
    /**
     * Query all the business units in a specific BIM 360 account.
     * @summary Create Business Units
     * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {BusinessUnitsRequestPyload} [businessUnitsRequestPyload]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBusinessUnits(accessToken: string, accountId: string, region?: Region, businessUnitsRequestPyload?: BusinessUnitsRequestPyload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BusinessUnitsResponse>>;
    /**
     * Query all the business units in a specific BIM 360 account.
     * @summary Get Business Units
     * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBusinessUnits(accessToken: string, accountId: string, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BusinessUnitsResponse>>;
};
/**
 * BusinessUnitsApi - interface
 * @export
 * @interface BusinessUnitsApi
 */
export interface BusinessUnitsApiInterface {
    /**
     * Query all the business units in a specific BIM 360 account.
     * @summary Create Business Units
     * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {BusinessUnitsRequestPyload} [businessUnitsRequestPyload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessUnitsApiInterface
     */
    createBusinessUnits(accessToken: string, accountId: string, region?: Region, businessUnitsRequestPyload?: BusinessUnitsRequestPyload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Query all the business units in a specific BIM 360 account.
     * @summary Get Business Units
     * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessUnitsApiInterface
     */
    getBusinessUnits(accessToken: string, accountId: string, region?: Region, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * BusinessUnitsApi - object-oriented interface
 * @export
 * @class BusinessUnitsApi
 * @extends {BaseAPI}
 */
export declare class BusinessUnitsApi extends BaseAPI implements BusinessUnitsApiInterface {
    private logger;
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
    createBusinessUnits(accessToken: string, accountId: string, region?: Region, businessUnitsRequestPyload?: BusinessUnitsRequestPyload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    getBusinessUnits(accessToken: string, accountId: string, region?: Region, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
