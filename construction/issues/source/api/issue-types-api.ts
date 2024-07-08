/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ConstructionIssuesApiError } from '../base';
import { IssueType } from '../model';
import { Region } from '../model';
/**
 * IssueTypesApi - axios parameter creator
 * @export
 */
export const IssueTypesApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Retrieves a project’s categories and types.
         * @summary Your GET endpoint
         * @param {string} projectId 
         * @param {string} [include] Use include&#x3D;subtypes to include the types (subtypes) for each category (type).
         * @param {number} [limit] Add limit&#x3D;20 to limit the results count (together with the offset to support pagination).
         * @param {number} [offset] Add offset&#x3D;20 to get partial results (together with the limit to support pagination).
         * @param {string} [filterUpdatedAt] Retrieves types that were last updated at the specified date and time, in in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param {boolean} [filterIsActive] Filter types by status e.g. filter[isActive]&#x3D;true will only return active types. Default value: undefined (meaning both active &amp; inactive issue type categories will return).
         * @param {Region} [xAdsRegion] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getIssuesTypes: async (accessToken: string, projectId: string, include?: string, limit?: number, offset?: number, filterUpdatedAt?: string, filterIsActive?: boolean, xAdsRegion?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getIssuesTypes', 'projectId', projectId)
            const localVarPath = `/construction/issues/v1/projects/{projectId}/issue-types`
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

            if (include !== undefined) {
                localVarQueryParameter['include'] = include;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (filterUpdatedAt !== undefined) {
                localVarQueryParameter['filter[updatedAt]'] = filterUpdatedAt;
            }

            if (filterIsActive !== undefined) {
                localVarQueryParameter['filter[isActive]'] = filterIsActive;
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
 * IssueTypesApi - functional programming interface
 * @export
 */
export const IssueTypesApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = IssueTypesApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Retrieves a project’s categories and types.
         * @summary Your GET endpoint
         * @param {string} projectId 
         * @param {string} [include] Use include&#x3D;subtypes to include the types (subtypes) for each category (type).
         * @param {number} [limit] Add limit&#x3D;20 to limit the results count (together with the offset to support pagination).
         * @param {number} [offset] Add offset&#x3D;20 to get partial results (together with the limit to support pagination).
         * @param {string} [filterUpdatedAt] Retrieves types that were last updated at the specified date and time, in in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param {boolean} [filterIsActive] Filter types by status e.g. filter[isActive]&#x3D;true will only return active types. Default value: undefined (meaning both active &amp; inactive issue type categories will return).
         * @param {Region} [xAdsRegion] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getIssuesTypes(accessToken: string, projectId: string, include?: string, limit?: number, offset?: number, filterUpdatedAt?: string, filterIsActive?: boolean, xAdsRegion?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IssueType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIssuesTypes(accessToken, projectId, include, limit, offset, filterUpdatedAt, filterIsActive, xAdsRegion,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * IssueTypesApi - interface
 * @export
 * @interface IssueTypesApi
 */
export interface IssueTypesApiInterface {
    /**
     * Retrieves a project’s categories and types.
     * @summary Your GET endpoint
     * @param {string} projectId 
     * @param {string} [include] Use include&#x3D;subtypes to include the types (subtypes) for each category (type).
     * @param {number} [limit] Add limit&#x3D;20 to limit the results count (together with the offset to support pagination).
     * @param {number} [offset] Add offset&#x3D;20 to get partial results (together with the limit to support pagination).
     * @param {string} [filterUpdatedAt] Retrieves types that were last updated at the specified date and time, in in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param {boolean} [filterIsActive] Filter types by status e.g. filter[isActive]&#x3D;true will only return active types. Default value: undefined (meaning both active &amp; inactive issue type categories will return).
     * @param {Region} [xAdsRegion] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueTypesApiInterface
     */
    getIssuesTypes(accessToken: string,projectId: string, include?: string, limit?: number, offset?: number, filterUpdatedAt?: string, filterIsActive?: boolean, xAdsRegion?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * IssueTypesApi - object-oriented interface
 * @export
 * @class IssueTypesApi
 * @extends {BaseApi}
 */
export class IssueTypesApi extends BaseApi implements IssueTypesApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Retrieves a project’s categories and types.
     * @summary Your GET endpoint
     * @param {string} projectId 
     * @param {string} [include] Use include&#x3D;subtypes to include the types (subtypes) for each category (type).
     * @param {number} [limit] Add limit&#x3D;20 to limit the results count (together with the offset to support pagination).
     * @param {number} [offset] Add offset&#x3D;20 to get partial results (together with the limit to support pagination).
     * @param {string} [filterUpdatedAt] Retrieves types that were last updated at the specified date and time, in in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param {boolean} [filterIsActive] Filter types by status e.g. filter[isActive]&#x3D;true will only return active types. Default value: undefined (meaning both active &amp; inactive issue type categories will return).
     * @param {Region} [xAdsRegion] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueTypesApi
     */
    public async getIssuesTypes(accessToken: string, projectId: string, include?: string, limit?: number, offset?: number, filterUpdatedAt?: string, filterIsActive?: boolean, xAdsRegion?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getIssuesTypes ");
      try {
        const request =  await IssueTypesApiFp(this.sdkManager).getIssuesTypes(accessToken, projectId, include, limit, offset, filterUpdatedAt, filterIsActive, xAdsRegion,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getIssuesTypes Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getIssuesTypes Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionIssuesApiError(`getIssuesTypes Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getIssuesTypes Request failed with no response received: ${error.request}`);
            throw new ConstructionIssuesApiError(`getIssuesTypes Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

