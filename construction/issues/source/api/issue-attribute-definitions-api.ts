/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ConstructionIssuesApiError } from '../base';
import { AttrDefinition } from '../model';
import { DataType } from '../model';
import { Region } from '../model';
/**
 * IssueAttributeDefinitionsApi - axios parameter creator
 * @export
 */
export const IssueAttributeDefinitionsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Retrieves information about issue custom attributes (custom fields) for a project, including the custom attribute title, description and type.
         * @summary Your GET endpoint
         * @param {string} projectId 
         * @param {Region} [xAdsRegion] 
         * @param {number} [limit] The number of custom attribute definitions to return in the response payload. For example, limit&#x3D;2. Acceptable values: 1-200. Default value: 200.
         * @param {number} [offset] The number of custom attribute definitions you want to begin retrieving results from.
         * @param {string} [filterCreatedAt] Retrieves items that were created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterUpdatedAt] Retrieves items that were last updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterDeletedAt] Retrieves types that were deleted at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas. 
         * @param {Array<DataType>} [filterDataType] Retrieves issue custom attribute definitions with the specified data type. Possible values: list (this corresponds to dropdown in the UI), text, paragraph, numeric. For example, filter[dataType]&#x3D;text,numeric.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAttributeDefinitions: async (accessToken: string, projectId: string, xAdsRegion?: Region, limit?: number, offset?: number, filterCreatedAt?: string, filterUpdatedAt?: string, filterDeletedAt?: string, filterDataType?: Array<DataType>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getAttributeDefinitions', 'projectId', projectId)
            const localVarPath = `/construction/issues/v1/projects/{projectId}/issue-attribute-definitions`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (filterCreatedAt !== undefined) {
                localVarQueryParameter['filter[createdAt]'] = filterCreatedAt;
            }

            if (filterUpdatedAt !== undefined) {
                localVarQueryParameter['filter[updatedAt]'] = filterUpdatedAt;
            }

            if (filterDeletedAt !== undefined) {
                localVarQueryParameter['filter[deletedAt]'] = filterDeletedAt;
            }

            if (filterDataType) {
                localVarQueryParameter['filter[dataType]'] = filterDataType;
            }

            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ISSUES/TypeScript/1.0.0-beta1';
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
 * IssueAttributeDefinitionsApi - functional programming interface
 * @export
 */
export const IssueAttributeDefinitionsApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = IssueAttributeDefinitionsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Retrieves information about issue custom attributes (custom fields) for a project, including the custom attribute title, description and type.
         * @summary Your GET endpoint
         * @param {string} projectId 
         * @param {Region} [xAdsRegion] 
         * @param {number} [limit] The number of custom attribute definitions to return in the response payload. For example, limit&#x3D;2. Acceptable values: 1-200. Default value: 200.
         * @param {number} [offset] The number of custom attribute definitions you want to begin retrieving results from.
         * @param {string} [filterCreatedAt] Retrieves items that were created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterUpdatedAt] Retrieves items that were last updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterDeletedAt] Retrieves types that were deleted at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas. 
         * @param {Array<DataType>} [filterDataType] Retrieves issue custom attribute definitions with the specified data type. Possible values: list (this corresponds to dropdown in the UI), text, paragraph, numeric. For example, filter[dataType]&#x3D;text,numeric.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAttributeDefinitions(accessToken: string, projectId: string, xAdsRegion?: Region, limit?: number, offset?: number, filterCreatedAt?: string, filterUpdatedAt?: string, filterDeletedAt?: string, filterDataType?: Array<DataType>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttrDefinition>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAttributeDefinitions(accessToken, projectId, xAdsRegion, limit, offset, filterCreatedAt, filterUpdatedAt, filterDeletedAt, filterDataType,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * IssueAttributeDefinitionsApi - interface
 * @export
 * @interface IssueAttributeDefinitionsApi
 */
export interface IssueAttributeDefinitionsApiInterface {
    /**
     * Retrieves information about issue custom attributes (custom fields) for a project, including the custom attribute title, description and type.
     * @summary Your GET endpoint
     * @param {string} projectId 
     * @param {Region} [xAdsRegion] 
     * @param {number} [limit] The number of custom attribute definitions to return in the response payload. For example, limit&#x3D;2. Acceptable values: 1-200. Default value: 200.
     * @param {number} [offset] The number of custom attribute definitions you want to begin retrieving results from.
     * @param {string} [filterCreatedAt] Retrieves items that were created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterUpdatedAt] Retrieves items that were last updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterDeletedAt] Retrieves types that were deleted at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas. 
     * @param {Array<DataType>} [filterDataType] Retrieves issue custom attribute definitions with the specified data type. Possible values: list (this corresponds to dropdown in the UI), text, paragraph, numeric. For example, filter[dataType]&#x3D;text,numeric.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueAttributeDefinitionsApiInterface
     */
    getAttributeDefinitions(accessToken: string,projectId: string, xAdsRegion?: Region, limit?: number, offset?: number, filterCreatedAt?: string, filterUpdatedAt?: string, filterDeletedAt?: string, filterDataType?: Array<DataType>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * IssueAttributeDefinitionsApi - object-oriented interface
 * @export
 * @class IssueAttributeDefinitionsApi
 * @extends {BaseApi}
 */
export class IssueAttributeDefinitionsApi extends BaseApi implements IssueAttributeDefinitionsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Retrieves information about issue custom attributes (custom fields) for a project, including the custom attribute title, description and type.
     * @summary Your GET endpoint
     * @param {string} projectId 
     * @param {Region} [xAdsRegion] 
     * @param {number} [limit] The number of custom attribute definitions to return in the response payload. For example, limit&#x3D;2. Acceptable values: 1-200. Default value: 200.
     * @param {number} [offset] The number of custom attribute definitions you want to begin retrieving results from.
     * @param {string} [filterCreatedAt] Retrieves items that were created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterUpdatedAt] Retrieves items that were last updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterDeletedAt] Retrieves types that were deleted at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas. 
     * @param {Array<DataType>} [filterDataType] Retrieves issue custom attribute definitions with the specified data type. Possible values: list (this corresponds to dropdown in the UI), text, paragraph, numeric. For example, filter[dataType]&#x3D;text,numeric.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueAttributeDefinitionsApi
     */
    public async getAttributeDefinitions(accessToken: string, projectId: string, xAdsRegion?: Region, limit?: number, offset?: number, filterCreatedAt?: string, filterUpdatedAt?: string, filterDeletedAt?: string, filterDataType?: Array<DataType>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getAttributeDefinitions ");
      try {
        const request =  await IssueAttributeDefinitionsApiFp(this.sdkManager).getAttributeDefinitions(accessToken, projectId, xAdsRegion, limit, offset, filterCreatedAt, filterUpdatedAt, filterDeletedAt, filterDataType,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getAttributeDefinitions Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getAttributeDefinitions Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionIssuesApiError(`getAttributeDefinitions Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getAttributeDefinitions Request failed with no response received: ${error.request}`);
            throw new ConstructionIssuesApiError(`getAttributeDefinitions Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

