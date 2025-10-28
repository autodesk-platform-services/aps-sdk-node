
import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ConstructionIssuesApiError } from '../base';
import { Comment, CommentsPage } from '../model';
import { CommentsPayload } from '../model';
import { Region } from '../model';
import { SortBy } from '../model';
/**
 * IssueCommentsApi - axios parameter creator
 * @export
 */
export const IssueCommentsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Creates a new comment under a specific issue.
         * @summary 
         * @param {string} projectId The ID of the project.
         * @param {string} issueId The unique identifier of the issue.
         * @param {Region} [xAdsRegion] 
         * @param {CommentsPayload} [commentsPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createComments: async (accessToken: string, projectId: string, issueId: string, xAdsRegion?: Region, commentsPayload?: CommentsPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('createComments', 'projectId', projectId)
            // verify required parameter 'issueId' is not null or undefined
            assertParamExists('createComments', 'issueId', issueId)
            const localVarPath = `/construction/issues/v1/projects/{projectId}/issues/{issueId}/comments`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"issueId"}}`, encodeURIComponent(String(issueId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (xAdsRegion != null) {
                localVarHeaderParameter['x-ads-region'] = typeof xAdsRegion === 'string'
                    ? xAdsRegion
                    : JSON.stringify(xAdsRegion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ISSUES/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(commentsPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all the comments for a specific issue.
         * @summary Your GET endpoint
         * @param {string} projectId The ID of the project.
         * @param {string} issueId The unique identifier of the issue.
         * @param {Region} [xAdsRegion] 
         * @param {string} [limit] Add limit&#x3D;20 to limit the results count (together with the offset to support pagination).
         * @param {string} [offset] Add offset&#x3D;20 to get partial results (together with the limit to support pagination).
         * @param {Array<SortBy>} [sortBy] Sort issue comments by specified fields. Separate multiple values with commas. To sort in descending order add a - (minus sign) before the sort criteria
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getComments: async (accessToken: string, projectId: string, issueId: string, xAdsRegion?: Region, limit?: string, offset?: string, sortBy?: Array<SortBy>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getComments', 'projectId', projectId)
            // verify required parameter 'issueId' is not null or undefined
            assertParamExists('getComments', 'issueId', issueId)
            const localVarPath = `/construction/issues/v1/projects/{projectId}/issues/{issueId}/comments`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"issueId"}}`, encodeURIComponent(String(issueId)));
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

            if (sortBy) {
                localVarQueryParameter['sortBy'] = sortBy;
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
 * IssueCommentsApi - functional programming interface
 * @export
 */
export const IssueCommentsApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = IssueCommentsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Creates a new comment under a specific issue.
         * @summary 
         * @param {string} projectId The ID of the project.
         * @param {string} issueId The unique identifier of the issue.
         * @param {Region} [xAdsRegion] 
         * @param {CommentsPayload} [commentsPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createComments(accessToken: string, projectId: string, issueId: string, xAdsRegion?: Region, commentsPayload?: CommentsPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Comment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createComments(accessToken, projectId, issueId, xAdsRegion, commentsPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Get all the comments for a specific issue.
         * @summary Your GET endpoint
         * @param {string} projectId The ID of the project.
         * @param {string} issueId The unique identifier of the issue.
         * @param {Region} [xAdsRegion] 
         * @param {string} [limit] Add limit&#x3D;20 to limit the results count (together with the offset to support pagination).
         * @param {string} [offset] Add offset&#x3D;20 to get partial results (together with the limit to support pagination).
         * @param {Array<SortBy>} [sortBy] Sort issue comments by specified fields. Separate multiple values with commas. To sort in descending order add a - (minus sign) before the sort criteria
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getComments(accessToken: string, projectId: string, issueId: string, xAdsRegion?: Region, limit?: string, offset?: string, sortBy?: Array<SortBy>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CommentsPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getComments(accessToken, projectId, issueId, xAdsRegion, limit, offset, sortBy,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * IssueCommentsApi - interface
 * @export
 * @interface IssueCommentsApi
 */
export interface IssueCommentsApiInterface {
    /**
     * Creates a new comment under a specific issue.
     * @summary 
     * @param {string} projectId The ID of the project.
     * @param {string} issueId The unique identifier of the issue.
     * @param {Region} [xAdsRegion] 
     * @param {CommentsPayload} [commentsPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueCommentsApiInterface
     */
    createComments(accessToken: string,projectId: string, issueId: string, xAdsRegion?: Region, commentsPayload?: CommentsPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Get all the comments for a specific issue.
     * @summary Your GET endpoint
     * @param {string} projectId The ID of the project.
     * @param {string} issueId The unique identifier of the issue.
     * @param {Region} [xAdsRegion] 
     * @param {string} [limit] Add limit&#x3D;20 to limit the results count (together with the offset to support pagination).
     * @param {string} [offset] Add offset&#x3D;20 to get partial results (together with the limit to support pagination).
     * @param {Array<SortBy>} [sortBy] Sort issue comments by specified fields. Separate multiple values with commas. To sort in descending order add a - (minus sign) before the sort criteria
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueCommentsApiInterface
     */
    getComments(accessToken: string,projectId: string, issueId: string, xAdsRegion?: Region, limit?: string, offset?: string, sortBy?: Array<SortBy>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * IssueCommentsApi - object-oriented interface
 * @export
 * @class IssueCommentsApi
 * @extends {BaseApi}
 */
export class IssueCommentsApi extends BaseApi implements IssueCommentsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Creates a new comment under a specific issue.
     * @summary 
     * @param {string} projectId The ID of the project.
     * @param {string} issueId The unique identifier of the issue.
     * @param {Region} [xAdsRegion] 
     * @param {CommentsPayload} [commentsPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueCommentsApi
     */
    public async createComments(accessToken: string, projectId: string, issueId: string, xAdsRegion?: Region, commentsPayload?: CommentsPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createComments ");
      try {
        const request =  await IssueCommentsApiFp(this.sdkManager).createComments(accessToken, projectId, issueId, xAdsRegion, commentsPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createComments Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createComments Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionIssuesApiError(`createComments Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createComments Request failed with no response received: ${error.request}`);
            throw new ConstructionIssuesApiError(`createComments Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Get all the comments for a specific issue.
     * @summary Your GET endpoint
     * @param {string} projectId The ID of the project.
     * @param {string} issueId The unique identifier of the issue.
     * @param {Region} [xAdsRegion] 
     * @param {string} [limit] Add limit&#x3D;20 to limit the results count (together with the offset to support pagination).
     * @param {string} [offset] Add offset&#x3D;20 to get partial results (together with the limit to support pagination).
     * @param {Array<SortBy>} [sortBy] Sort issue comments by specified fields. Separate multiple values with commas. To sort in descending order add a - (minus sign) before the sort criteria
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueCommentsApi
     */
    public async getComments(accessToken: string, projectId: string, issueId: string, xAdsRegion?: Region, limit?: string, offset?: string, sortBy?: Array<SortBy>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getComments ");
      try {
        const request =  await IssueCommentsApiFp(this.sdkManager).getComments(accessToken, projectId, issueId, xAdsRegion, limit, offset, sortBy,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getComments Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getComments Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionIssuesApiError(`getComments Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getComments Request failed with no response received: ${error.request}`);
            throw new ConstructionIssuesApiError(`getComments Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

