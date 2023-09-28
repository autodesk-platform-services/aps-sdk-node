/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse} from "autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, ModelDerivativeApiApiError } from '../base';
import { Formats400Response } from '../model';
import { Formats401Response } from '../model';
import { Formats403Response } from '../model';
/**
 * ThumbnailsApi - axios parameter creator
 * @export
 */
export const ThumbnailsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Downloads a thumbnail of the specified source design.
         * @summary Fetch Thumbnail
         * @param {string} urn The URL safe Base64 encoded URN of the source design.
         * @param {GetUrnThumbnailWidthEnum} [width] Width of thumbnail.    Possible values: 100, 200, 400    If &#x60;&#x60;width&#x60;&#x60; is omitted, but &#x60;&#x60;height&#x60;&#x60; is specified, &#x60;&#x60;width&#x60;&#x60; defaults to &#x60;&#x60;height&#x60;&#x60;. If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available. 
         * @param {GetUrnThumbnailHeightEnum} [height] Height of thumbnails.  Possible values: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;.  If &#x60;&#x60;height&#x60;&#x60; is omitted, but &#x60;&#x60;width&#x60;&#x60; is specified, &#x60;&#x60;height&#x60;&#x60; defaults to &#x60;&#x60;width&#x60;&#x60;.  If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUrnThumbnail: async (accessToken: string, urn: string, width?: GetUrnThumbnailWidthEnum, height?: GetUrnThumbnailHeightEnum,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'urn' is not null or undefined
            assertParamExists('getUrnThumbnail', 'urn', urn)
            const localVarPath = `/designdata/{urn}/thumbnail`
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
export const ThumbnailsApiFp = function(sdkManager?: SDKManager) {
    const localVarAxiosParamCreator = ThumbnailsApiAxiosParamCreator(sdkManager.apsconfiguration)
    return {
        /**
         * Downloads a thumbnail of the specified source design.
         * @summary Fetch Thumbnail
         * @param {string} urn The URL safe Base64 encoded URN of the source design.
         * @param {GetUrnThumbnailWidthEnum} [width] Width of thumbnail.    Possible values: 100, 200, 400    If &#x60;&#x60;width&#x60;&#x60; is omitted, but &#x60;&#x60;height&#x60;&#x60; is specified, &#x60;&#x60;width&#x60;&#x60; defaults to &#x60;&#x60;height&#x60;&#x60;. If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available. 
         * @param {GetUrnThumbnailHeightEnum} [height] Height of thumbnails.  Possible values: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;.  If &#x60;&#x60;height&#x60;&#x60; is omitted, but &#x60;&#x60;width&#x60;&#x60; is specified, &#x60;&#x60;height&#x60;&#x60; defaults to &#x60;&#x60;width&#x60;&#x60;.  If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUrnThumbnail(accessToken: string, urn: string, width?: GetUrnThumbnailWidthEnum, height?: GetUrnThumbnailHeightEnum, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUrnThumbnail(accessToken, urn, width, height,  options);
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
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {GetUrnThumbnailWidthEnum} [width] Width of thumbnail.    Possible values: 100, 200, 400    If &#x60;&#x60;width&#x60;&#x60; is omitted, but &#x60;&#x60;height&#x60;&#x60; is specified, &#x60;&#x60;width&#x60;&#x60; defaults to &#x60;&#x60;height&#x60;&#x60;. If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available. 
     * @param {GetUrnThumbnailHeightEnum} [height] Height of thumbnails.  Possible values: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;.  If &#x60;&#x60;height&#x60;&#x60; is omitted, but &#x60;&#x60;width&#x60;&#x60; is specified, &#x60;&#x60;height&#x60;&#x60; defaults to &#x60;&#x60;width&#x60;&#x60;.  If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThumbnailsApiInterface
     */
    getUrnThumbnail(accessToken: string,urn: string, width?: GetUrnThumbnailWidthEnum, height?: GetUrnThumbnailHeightEnum,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * ThumbnailsApi - object-oriented interface
 * @export
 * @class ThumbnailsApi
 * @extends {BaseAPI}
 */
export class ThumbnailsApi extends BaseAPI implements ThumbnailsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Downloads a thumbnail of the specified source design.
     * @summary Fetch Thumbnail
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {GetUrnThumbnailWidthEnum} [width] Width of thumbnail.    Possible values: 100, 200, 400    If &#x60;&#x60;width&#x60;&#x60; is omitted, but &#x60;&#x60;height&#x60;&#x60; is specified, &#x60;&#x60;width&#x60;&#x60; defaults to &#x60;&#x60;height&#x60;&#x60;. If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available. 
     * @param {GetUrnThumbnailHeightEnum} [height] Height of thumbnails.  Possible values: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;.  If &#x60;&#x60;height&#x60;&#x60; is omitted, but &#x60;&#x60;width&#x60;&#x60; is specified, &#x60;&#x60;height&#x60;&#x60; defaults to &#x60;&#x60;width&#x60;&#x60;.  If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThumbnailsApi
     */
    public async getUrnThumbnail(accessToken: string, urn: string, width?: GetUrnThumbnailWidthEnum, height?: GetUrnThumbnailHeightEnum, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getUrnThumbnail ");
      try {
        const request =  await ThumbnailsApiFp(this.sdkManager).getUrnThumbnail(accessToken, urn, width, height,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getUrnThumbnail Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getUrnThumbnail Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new ModelDerivativeApiApiError(`getUrnThumbnail Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getUrnThumbnail Request failed with no response received: ${error.request}`);
            throw new ModelDerivativeApiApiError(`getUrnThumbnail Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

/**
 * @export
 */
export const GetUrnThumbnailWidthEnum = {
    NUMBER_100: 100,
    NUMBER_200: 200,
    NUMBER_400: 400
} as const;
export type GetUrnThumbnailWidthEnum = typeof GetUrnThumbnailWidthEnum[keyof typeof GetUrnThumbnailWidthEnum];
/**
 * @export
 */
export const GetUrnThumbnailHeightEnum = {
    NUMBER_100: 100,
    NUMBER_200: 200,
    NUMBER_400: 400
} as const;
export type GetUrnThumbnailHeightEnum = typeof GetUrnThumbnailHeightEnum[keyof typeof GetUrnThumbnailHeightEnum];
