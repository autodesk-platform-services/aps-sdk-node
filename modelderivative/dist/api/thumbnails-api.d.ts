import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
/**
 * ThumbnailsApi - axios parameter creator
 * @export
 */
export declare const ThumbnailsApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
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
    getUrnThumbnail: (accessToken: string, urn: string, width?: GetUrnThumbnailWidthEnum, height?: GetUrnThumbnailHeightEnum, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * ThumbnailsApi - functional programming interface
 * @export
 */
export declare const ThumbnailsApiFp: (sdkManager?: SDKManager) => {
    /**
     * Downloads a thumbnail of the specified source design.
     * @summary Fetch Thumbnail
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {GetUrnThumbnailWidthEnum} [width] Width of thumbnail.    Possible values: 100, 200, 400    If &#x60;&#x60;width&#x60;&#x60; is omitted, but &#x60;&#x60;height&#x60;&#x60; is specified, &#x60;&#x60;width&#x60;&#x60; defaults to &#x60;&#x60;height&#x60;&#x60;. If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available.
     * @param {GetUrnThumbnailHeightEnum} [height] Height of thumbnails.  Possible values: &#x60;&#x60;100&#x60;&#x60;, &#x60;&#x60;200&#x60;&#x60;, &#x60;&#x60;400&#x60;&#x60;.  If &#x60;&#x60;height&#x60;&#x60; is omitted, but &#x60;&#x60;width&#x60;&#x60; is specified, &#x60;&#x60;height&#x60;&#x60; defaults to &#x60;&#x60;width&#x60;&#x60;.  If both &#x60;&#x60;width&#x60;&#x60; and &#x60;&#x60;height&#x60;&#x60; are omitted, the server will return a thumbnail closest to 200, if such a thumbnail is available.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUrnThumbnail(accessToken: string, urn: string, width?: GetUrnThumbnailWidthEnum, height?: GetUrnThumbnailHeightEnum, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
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
    getUrnThumbnail(accessToken: string, urn: string, width?: GetUrnThumbnailWidthEnum, height?: GetUrnThumbnailHeightEnum, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * ThumbnailsApi - object-oriented interface
 * @export
 * @class ThumbnailsApi
 * @extends {BaseAPI}
 */
export declare class ThumbnailsApi extends BaseAPI implements ThumbnailsApiInterface {
    private logger;
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
    getUrnThumbnail(accessToken: string, urn: string, width?: GetUrnThumbnailWidthEnum, height?: GetUrnThumbnailHeightEnum, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * @export
 */
export declare const GetUrnThumbnailWidthEnum: {
    readonly NUMBER_100: 100;
    readonly NUMBER_200: 200;
    readonly NUMBER_400: 400;
};
export type GetUrnThumbnailWidthEnum = typeof GetUrnThumbnailWidthEnum[keyof typeof GetUrnThumbnailWidthEnum];
/**
 * @export
 */
export declare const GetUrnThumbnailHeightEnum: {
    readonly NUMBER_100: 100;
    readonly NUMBER_200: 200;
    readonly NUMBER_400: 400;
};
export type GetUrnThumbnailHeightEnum = typeof GetUrnThumbnailHeightEnum[keyof typeof GetUrnThumbnailHeightEnum];
