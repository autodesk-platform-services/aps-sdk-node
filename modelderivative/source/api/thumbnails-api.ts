/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ModelDerivativeApiError } from '../base';
import { Height } from '../model';
import { Region } from '../model';
import { Width } from '../model';
import { XAdsJobStatus } from '../model';
import { XAdsRole } from '../model';
/**
 * ThumbnailsApi - axios parameter creator
 * @export
 */
export const ThumbnailsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Downloads a thumbnail of the specified source design.
         * @summary Fetch Thumbnail
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
         * @param {Width} [width] Width of thumbnail in pixels.  Possible values are: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;  If &#x60;&#x60;width&#x60;&#x60; is omitted, but &#x60;&#x60;height&#x60;&#x60; is specified, &#x60;&#x60;width&#x60;&#x60; defaults to &#x60;&#x60;height&#x60;&#x60;. If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to &#x60;&#x60;200&#x60;&#x60;, if such a thumbnail is available.
         * @param {Height} [height] Height of thumbnails. Possible values are: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;.If &#x60;&#x60;height&#x60;&#x60; is omitted, but &#x60;&#x60;width&#x60;&#x60; is specified, &#x60;&#x60;height&#x60;&#x60; defaults to &#x60;&#x60;width&#x60;&#x60;.  If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to &#x60;&#x60;200&#x60;&#x60;, if such a thumbnail is available
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getThumbnail: async (accessToken: string, urn: string, region?: Region, width?: Width, height?: Height,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'urn' is not null or undefined
            assertParamExists('getThumbnail', 'urn', urn)
            const localVarPath = `/modelderivative/v2/designdata/{urn}/thumbnail`
                .replace(`{${"urn"}}`, encodeURIComponent(String(urn)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (width !== undefined) {
                localVarQueryParameter['width'] = width;
            }

            if (height !== undefined) {
                localVarQueryParameter['height'] = height;
            }

            if (region != null) {
                localVarHeaderParameter['region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/MODEL-DERIVATIVE/TypeScript/1.0.0';
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
 * ThumbnailsApi - functional programming interface
 * @export
 */
export const ThumbnailsApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = ThumbnailsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Downloads a thumbnail of the specified source design.
         * @summary Fetch Thumbnail
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
         * @param {Width} [width] Width of thumbnail in pixels.  Possible values are: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;  If &#x60;&#x60;width&#x60;&#x60; is omitted, but &#x60;&#x60;height&#x60;&#x60; is specified, &#x60;&#x60;width&#x60;&#x60; defaults to &#x60;&#x60;height&#x60;&#x60;. If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to &#x60;&#x60;200&#x60;&#x60;, if such a thumbnail is available.
         * @param {Height} [height] Height of thumbnails. Possible values are: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;.If &#x60;&#x60;height&#x60;&#x60; is omitted, but &#x60;&#x60;width&#x60;&#x60; is specified, &#x60;&#x60;height&#x60;&#x60; defaults to &#x60;&#x60;width&#x60;&#x60;.  If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to &#x60;&#x60;200&#x60;&#x60;, if such a thumbnail is available
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getThumbnail(accessToken: string, urn: string, region?: Region, width?: Width, height?: Height, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getThumbnail(accessToken, urn, region, width, height,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * ThumbnailsApi - interface
 * @export
 * @interface ThumbnailsApi
 */
export interface ThumbnailsApiInterface {
    /**
     * Downloads a thumbnail of the specified source design.
     * @summary Fetch Thumbnail
     * @param {string} urn The URL-safe Base64 encoded URN of the source design.
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
     * @param {Width} [width] Width of thumbnail in pixels.  Possible values are: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;  If &#x60;&#x60;width&#x60;&#x60; is omitted, but &#x60;&#x60;height&#x60;&#x60; is specified, &#x60;&#x60;width&#x60;&#x60; defaults to &#x60;&#x60;height&#x60;&#x60;. If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to &#x60;&#x60;200&#x60;&#x60;, if such a thumbnail is available.
     * @param {Height} [height] Height of thumbnails. Possible values are: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;.If &#x60;&#x60;height&#x60;&#x60; is omitted, but &#x60;&#x60;width&#x60;&#x60; is specified, &#x60;&#x60;height&#x60;&#x60; defaults to &#x60;&#x60;width&#x60;&#x60;.  If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to &#x60;&#x60;200&#x60;&#x60;, if such a thumbnail is available
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThumbnailsApiInterface
     */
    getThumbnail(accessToken: string,urn: string, region?: Region, width?: Width, height?: Height,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * ThumbnailsApi - object-oriented interface
 * @export
 * @class ThumbnailsApi
 * @extends {BaseApi}
 */
export class ThumbnailsApi extends BaseApi implements ThumbnailsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Downloads a thumbnail of the specified source design.
     * @summary Fetch Thumbnail
     * @param {string} urn The URL-safe Base64 encoded URN of the source design.
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for the European Union, Middle East, and Africa.  - &#x60;&#x60;APAC&#x60;&#x60; - (Beta) Data center for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
     * @param {Width} [width] Width of thumbnail in pixels.  Possible values are: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;  If &#x60;&#x60;width&#x60;&#x60; is omitted, but &#x60;&#x60;height&#x60;&#x60; is specified, &#x60;&#x60;width&#x60;&#x60; defaults to &#x60;&#x60;height&#x60;&#x60;. If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to &#x60;&#x60;200&#x60;&#x60;, if such a thumbnail is available.
     * @param {Height} [height] Height of thumbnails. Possible values are: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;.If &#x60;&#x60;height&#x60;&#x60; is omitted, but &#x60;&#x60;width&#x60;&#x60; is specified, &#x60;&#x60;height&#x60;&#x60; defaults to &#x60;&#x60;width&#x60;&#x60;.  If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to &#x60;&#x60;200&#x60;&#x60;, if such a thumbnail is available
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThumbnailsApi
     */
    public async getThumbnail(accessToken: string, urn: string, region?: Region, width?: Width, height?: Height, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getThumbnail ");
      try {
        const request =  await ThumbnailsApiFp(this.sdkManager).getThumbnail(accessToken, urn, region, width, height,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getThumbnail Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getThumbnail Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ModelDerivativeApiError(`getThumbnail Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getThumbnail Request failed with no response received: ${error.request}`);
            throw new ModelDerivativeApiError(`getThumbnail Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

