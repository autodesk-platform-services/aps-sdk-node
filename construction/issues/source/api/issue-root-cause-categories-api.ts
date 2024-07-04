/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ConstructionIssuesApiError } from '../base';
import { IssueRootCause } from '../model';
import { Region } from '../model';
/**
 * IssueRootCauseCategoriesApi - axios parameter creator
 * @export
 */
export const IssueRootCauseCategoriesApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Retrieves a list of supported root cause categories and root causes that you can allocate to an issue. For example, communication and coordination.
         * @summary Your GET endpoint
         * @param {string} projectId The ID of the project.
         * @param {Region} [xAdsRegion] 
         * @param {string} [include] Add ‘include&#x3D;rootcauses’ to add the root causes for each category.
         * @param {number} [limit] Add limit&#x3D;20 to limit the results count (together with the offset to support pagination).
         * @param {number} [offset] Add offset&#x3D;20 to get partial results (together with the limit to support pagination)
         * @param {string} [filterUpdatedAt] Retrieves root cause categories updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRootCauseCategories: async (accessToken: string, projectId: string, xAdsRegion?: Region, include?: string, limit?: number, offset?: number, filterUpdatedAt?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getRootCauseCategories', 'projectId', projectId)
            const localVarPath = `/construction/issues/v1/projects/{projectId}/issue-root-cause-categories`
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
 * IssueRootCauseCategoriesApi - functional programming interface
 * @export
 */
export const IssueRootCauseCategoriesApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = IssueRootCauseCategoriesApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Retrieves a list of supported root cause categories and root causes that you can allocate to an issue. For example, communication and coordination.
         * @summary Your GET endpoint
         * @param {string} projectId The ID of the project.
         * @param {Region} [xAdsRegion] 
         * @param {string} [include] Add ‘include&#x3D;rootcauses’ to add the root causes for each category.
         * @param {number} [limit] Add limit&#x3D;20 to limit the results count (together with the offset to support pagination).
         * @param {number} [offset] Add offset&#x3D;20 to get partial results (together with the limit to support pagination)
         * @param {string} [filterUpdatedAt] Retrieves root cause categories updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRootCauseCategories(accessToken: string, projectId: string, xAdsRegion?: Region, include?: string, limit?: number, offset?: number, filterUpdatedAt?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IssueRootCause>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRootCauseCategories(accessToken, projectId, xAdsRegion, include, limit, offset, filterUpdatedAt,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * IssueRootCauseCategoriesApi - interface
 * @export
 * @interface IssueRootCauseCategoriesApi
 */
export interface IssueRootCauseCategoriesApiInterface {
    /**
     * Retrieves a list of supported root cause categories and root causes that you can allocate to an issue. For example, communication and coordination.
     * @summary Your GET endpoint
     * @param {string} projectId The ID of the project.
     * @param {Region} [xAdsRegion] 
     * @param {string} [include] Add ‘include&#x3D;rootcauses’ to add the root causes for each category.
     * @param {number} [limit] Add limit&#x3D;20 to limit the results count (together with the offset to support pagination).
     * @param {number} [offset] Add offset&#x3D;20 to get partial results (together with the limit to support pagination)
     * @param {string} [filterUpdatedAt] Retrieves root cause categories updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueRootCauseCategoriesApiInterface
     */
    getRootCauseCategories(accessToken: string,projectId: string, xAdsRegion?: Region, include?: string, limit?: number, offset?: number, filterUpdatedAt?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * IssueRootCauseCategoriesApi - object-oriented interface
 * @export
 * @class IssueRootCauseCategoriesApi
 * @extends {BaseApi}
 */
export class IssueRootCauseCategoriesApi extends BaseApi implements IssueRootCauseCategoriesApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Retrieves a list of supported root cause categories and root causes that you can allocate to an issue. For example, communication and coordination.
     * @summary Your GET endpoint
     * @param {string} projectId The ID of the project.
     * @param {Region} [xAdsRegion] 
     * @param {string} [include] Add ‘include&#x3D;rootcauses’ to add the root causes for each category.
     * @param {number} [limit] Add limit&#x3D;20 to limit the results count (together with the offset to support pagination).
     * @param {number} [offset] Add offset&#x3D;20 to get partial results (together with the limit to support pagination)
     * @param {string} [filterUpdatedAt] Retrieves root cause categories updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueRootCauseCategoriesApi
     */
    public async getRootCauseCategories(accessToken: string, projectId: string, xAdsRegion?: Region, include?: string, limit?: number, offset?: number, filterUpdatedAt?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getRootCauseCategories ");
      try {
        const request =  await IssueRootCauseCategoriesApiFp(this.sdkManager).getRootCauseCategories(accessToken, projectId, xAdsRegion, include, limit, offset, filterUpdatedAt,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getRootCauseCategories Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getRootCauseCategories Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionIssuesApiError(`getRootCauseCategories Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getRootCauseCategories Request failed with no response received: ${error.request}`);
            throw new ConstructionIssuesApiError(`getRootCauseCategories Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

