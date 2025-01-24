/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ConstructionAccountAdminApiError } from '../base';
import { BusinessUnitsRequestPayload } from '../model';
import { BusinessUnitsResponse } from '../model';
import { Region } from '../model';
/**
 * BusinessUnitsApi - axios parameter creator
 * @export
 */
export const BusinessUnitsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Query all the business units in a specific BIM 360 account.
         * @summary Create Business Units
         * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
         * @param {BusinessUnitsRequestPyload} [businessUnitsRequestPyload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBusinessUnits: async (accessToken: string, accountId: string, region?: Region, businessUnitsRequestPyload?: BusinessUnitsRequestPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('createBusinessUnits', 'accountId', accountId)
            const localVarPath = `/hq/v1/accounts/{account_id}/business_units_structure`
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(businessUnitsRequestPyload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Query all the business units in a specific BIM 360 account.
         * @summary Get Business Units
         * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBusinessUnits: async (accessToken: string, accountId: string, region?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getBusinessUnits', 'accountId', accountId)
            const localVarPath = `/hq/v1/accounts/{account_id}/business_units_structure`
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
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
 * BusinessUnitsApi - functional programming interface
 * @export
 */
export const BusinessUnitsApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = BusinessUnitsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Query all the business units in a specific BIM 360 account.
         * @summary Create Business Units
         * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
         * @param {BusinessUnitsRequestPyload} [businessUnitsRequestPyload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createBusinessUnits(accessToken: string, accountId: string, region?: Region, businessUnitsRequestPyload?: BusinessUnitsRequestPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BusinessUnitsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createBusinessUnits(accessToken, accountId, region, businessUnitsRequestPyload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Query all the business units in a specific BIM 360 account.
         * @summary Get Business Units
         * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBusinessUnits(accessToken: string, accountId: string, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BusinessUnitsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBusinessUnits(accessToken, accountId, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
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
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param {BusinessUnitsRequestPyload} [businessUnitsRequestPyload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessUnitsApiInterface
     */
    createBusinessUnits(accessToken: string,accountId: string, region?: Region, businessUnitsRequestPyload?: BusinessUnitsRequestPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Query all the business units in a specific BIM 360 account.
     * @summary Get Business Units
     * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessUnitsApiInterface
     */
    getBusinessUnits(accessToken: string,accountId: string, region?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * BusinessUnitsApi - object-oriented interface
 * @export
 * @class BusinessUnitsApi
 * @extends {BaseApi}
 */
export class BusinessUnitsApi extends BaseApi implements BusinessUnitsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Query all the business units in a specific BIM 360 account.
     * @summary Create Business Units
     * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param {BusinessUnitsRequestPyload} [businessUnitsRequestPyload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessUnitsApi
     */
    public async createBusinessUnits(accessToken: string, accountId: string, region?: Region, businessUnitsRequestPyload?: BusinessUnitsRequestPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createBusinessUnits ");
      try {
        const request =  await BusinessUnitsApiFp(this.sdkManager).createBusinessUnits(accessToken, accountId, region, businessUnitsRequestPyload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createBusinessUnits Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createBusinessUnits Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`createBusinessUnits Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createBusinessUnits Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`createBusinessUnits Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Query all the business units in a specific BIM 360 account.
     * @summary Get Business Units
     * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessUnitsApi
     */
    public async getBusinessUnits(accessToken: string, accountId: string, region?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getBusinessUnits ");
      try {
        const request =  await BusinessUnitsApiFp(this.sdkManager).getBusinessUnits(accessToken, accountId, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getBusinessUnits Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getBusinessUnits Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`getBusinessUnits Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getBusinessUnits Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`getBusinessUnits Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

