
import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ConstructionIssuesApiError } from '../base';
import { Region } from '../model';
import { User } from '../model';
/**
 * IssuesProfileApi - axios parameter creator
 * @export
 */
export const IssuesProfileApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Returns the current user permissions.
         * @summary Your GET endpoint
         * @param {string} projectId 
         * @param {Region} [xAdsRegion] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserProfile: async (accessToken: string, projectId: string, xAdsRegion?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getUserProfile', 'projectId', projectId)
            const localVarPath = `/construction/issues/v1/projects/{projectId}/users/me`
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
 * IssuesProfileApi - functional programming interface
 * @export
 */
export const IssuesProfileApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = IssuesProfileApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Returns the current user permissions.
         * @summary Your GET endpoint
         * @param {string} projectId 
         * @param {Region} [xAdsRegion] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserProfile(accessToken: string, projectId: string, xAdsRegion?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserProfile(accessToken, projectId, xAdsRegion,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * IssuesProfileApi - interface
 * @export
 * @interface IssuesProfileApi
 */
export interface IssuesProfileApiInterface {
    /**
     * Returns the current user permissions.
     * @summary Your GET endpoint
     * @param {string} projectId 
     * @param {Region} [xAdsRegion] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuesProfileApiInterface
     */
    getUserProfile(accessToken: string,projectId: string, xAdsRegion?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * IssuesProfileApi - object-oriented interface
 * @export
 * @class IssuesProfileApi
 * @extends {BaseApi}
 */
export class IssuesProfileApi extends BaseApi implements IssuesProfileApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Returns the current user permissions.
     * @summary Your GET endpoint
     * @param {string} projectId 
     * @param {Region} [xAdsRegion] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuesProfileApi
     */
    public async getUserProfile(accessToken: string, projectId: string, xAdsRegion?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getUserProfile ");
      try {
        const request =  await IssuesProfileApiFp(this.sdkManager).getUserProfile(accessToken, projectId, xAdsRegion,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getUserProfile Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getUserProfile Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionIssuesApiError(`getUserProfile Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getUserProfile Request failed with no response received: ${error.request}`);
            throw new ConstructionIssuesApiError(`getUserProfile Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

