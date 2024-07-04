/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ConstructionIssuesApiError } from '../base';
import { AttrMapping } from '../model';
import { Region } from '../model';
/**
 * IssueAttributeMappingsApi - axios parameter creator
 * @export
 */
export const IssueAttributeMappingsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Retrieves information about the issue custom attributes (custom fields) that are assigned to issue categories and issue types.
         * @summary Your GET endpoint
         * @param {string} projectId The ID of the project.
         * @param {Region} [xAdsRegion] 
         * @param {number} [limit] The number of custom attribute mappings to return in the response payload. For example, limit&#x3D;2. Acceptable values: 1-200. Default value: 200.
         * @param {number} [offset] The number of custom attribute mappings you want to begin retrieving results from.
         * @param {string} [filterCreatedAt] Retrieves items that were created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterUpdatedAt] Retrieves items that were last updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterDeletedAt] Retrieves types that were deleted at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterAttributeDefinitionId] Retrieves issue custom attribute mappings associated with the specified issue custom attribute definitions. Separate multiple values with commas. For example: filter[attributeDefinitionId]&#x3D;18ee5858-cbf1-451a-a525-7c6ff8156775.
         * @param {string} [filterMappedItemId] Retrieves issue custom attribute mappings associated with the specified items (project, type, or subtype). Separate multiple values with commas. For example: filter[mappedItemId]&#x3D;18ee5858-cbf1-451a-a525-7c6ff8156775. Note that this does not retrieve inherited custom attribute mappings or custom attribute mappings of descendants.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAttributeMappings: async (accessToken: string, projectId: string, xAdsRegion?: Region, limit?: number, offset?: number, filterCreatedAt?: string, filterUpdatedAt?: string, filterDeletedAt?: string, filterAttributeDefinitionId?: string, filterMappedItemId?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getAttributeMappings', 'projectId', projectId)
            const localVarPath = `/construction/issues/v1/projects/{projectId}/issue-attribute-mappings`
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

            if (filterAttributeDefinitionId !== undefined) {
                localVarQueryParameter['filter[attributeDefinitionId]'] = filterAttributeDefinitionId;
            }

            if (filterMappedItemId !== undefined) {
                localVarQueryParameter['filter[mappedItemId]'] = filterMappedItemId;
            }

            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ISSUES/TypeScript/1.0.0';
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
 * IssueAttributeMappingsApi - functional programming interface
 * @export
 */
export const IssueAttributeMappingsApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = IssueAttributeMappingsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Retrieves information about the issue custom attributes (custom fields) that are assigned to issue categories and issue types.
         * @summary Your GET endpoint
         * @param {string} projectId The ID of the project.
         * @param {Region} [xAdsRegion] 
         * @param {number} [limit] The number of custom attribute mappings to return in the response payload. For example, limit&#x3D;2. Acceptable values: 1-200. Default value: 200.
         * @param {number} [offset] The number of custom attribute mappings you want to begin retrieving results from.
         * @param {string} [filterCreatedAt] Retrieves items that were created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterUpdatedAt] Retrieves items that were last updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterDeletedAt] Retrieves types that were deleted at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param {string} [filterAttributeDefinitionId] Retrieves issue custom attribute mappings associated with the specified issue custom attribute definitions. Separate multiple values with commas. For example: filter[attributeDefinitionId]&#x3D;18ee5858-cbf1-451a-a525-7c6ff8156775.
         * @param {string} [filterMappedItemId] Retrieves issue custom attribute mappings associated with the specified items (project, type, or subtype). Separate multiple values with commas. For example: filter[mappedItemId]&#x3D;18ee5858-cbf1-451a-a525-7c6ff8156775. Note that this does not retrieve inherited custom attribute mappings or custom attribute mappings of descendants.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAttributeMappings(accessToken: string, projectId: string, xAdsRegion?: Region, limit?: number, offset?: number, filterCreatedAt?: string, filterUpdatedAt?: string, filterDeletedAt?: string, filterAttributeDefinitionId?: string, filterMappedItemId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttrMapping>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAttributeMappings(accessToken, projectId, xAdsRegion, limit, offset, filterCreatedAt, filterUpdatedAt, filterDeletedAt, filterAttributeDefinitionId, filterMappedItemId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * IssueAttributeMappingsApi - interface
 * @export
 * @interface IssueAttributeMappingsApi
 */
export interface IssueAttributeMappingsApiInterface {
    /**
     * Retrieves information about the issue custom attributes (custom fields) that are assigned to issue categories and issue types.
     * @summary Your GET endpoint
     * @param {string} projectId The ID of the project.
     * @param {Region} [xAdsRegion] 
     * @param {number} [limit] The number of custom attribute mappings to return in the response payload. For example, limit&#x3D;2. Acceptable values: 1-200. Default value: 200.
     * @param {number} [offset] The number of custom attribute mappings you want to begin retrieving results from.
     * @param {string} [filterCreatedAt] Retrieves items that were created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterUpdatedAt] Retrieves items that were last updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterDeletedAt] Retrieves types that were deleted at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterAttributeDefinitionId] Retrieves issue custom attribute mappings associated with the specified issue custom attribute definitions. Separate multiple values with commas. For example: filter[attributeDefinitionId]&#x3D;18ee5858-cbf1-451a-a525-7c6ff8156775.
     * @param {string} [filterMappedItemId] Retrieves issue custom attribute mappings associated with the specified items (project, type, or subtype). Separate multiple values with commas. For example: filter[mappedItemId]&#x3D;18ee5858-cbf1-451a-a525-7c6ff8156775. Note that this does not retrieve inherited custom attribute mappings or custom attribute mappings of descendants.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueAttributeMappingsApiInterface
     */
    getAttributeMappings(accessToken: string,projectId: string, xAdsRegion?: Region, limit?: number, offset?: number, filterCreatedAt?: string, filterUpdatedAt?: string, filterDeletedAt?: string, filterAttributeDefinitionId?: string, filterMappedItemId?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * IssueAttributeMappingsApi - object-oriented interface
 * @export
 * @class IssueAttributeMappingsApi
 * @extends {BaseApi}
 */
export class IssueAttributeMappingsApi extends BaseApi implements IssueAttributeMappingsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Retrieves information about the issue custom attributes (custom fields) that are assigned to issue categories and issue types.
     * @summary Your GET endpoint
     * @param {string} projectId The ID of the project.
     * @param {Region} [xAdsRegion] 
     * @param {number} [limit] The number of custom attribute mappings to return in the response payload. For example, limit&#x3D;2. Acceptable values: 1-200. Default value: 200.
     * @param {number} [offset] The number of custom attribute mappings you want to begin retrieving results from.
     * @param {string} [filterCreatedAt] Retrieves items that were created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterUpdatedAt] Retrieves items that were last updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterDeletedAt] Retrieves types that were deleted at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param {string} [filterAttributeDefinitionId] Retrieves issue custom attribute mappings associated with the specified issue custom attribute definitions. Separate multiple values with commas. For example: filter[attributeDefinitionId]&#x3D;18ee5858-cbf1-451a-a525-7c6ff8156775.
     * @param {string} [filterMappedItemId] Retrieves issue custom attribute mappings associated with the specified items (project, type, or subtype). Separate multiple values with commas. For example: filter[mappedItemId]&#x3D;18ee5858-cbf1-451a-a525-7c6ff8156775. Note that this does not retrieve inherited custom attribute mappings or custom attribute mappings of descendants.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueAttributeMappingsApi
     */
    public async getAttributeMappings(accessToken: string, projectId: string, xAdsRegion?: Region, limit?: number, offset?: number, filterCreatedAt?: string, filterUpdatedAt?: string, filterDeletedAt?: string, filterAttributeDefinitionId?: string, filterMappedItemId?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getAttributeMappings ");
      try {
        const request =  await IssueAttributeMappingsApiFp(this.sdkManager).getAttributeMappings(accessToken, projectId, xAdsRegion, limit, offset, filterCreatedAt, filterUpdatedAt, filterDeletedAt, filterAttributeDefinitionId, filterMappedItemId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getAttributeMappings Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getAttributeMappings Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionIssuesApiError(`getAttributeMappings Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getAttributeMappings Request failed with no response received: ${error.request}`);
            throw new ConstructionIssuesApiError(`getAttributeMappings Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

