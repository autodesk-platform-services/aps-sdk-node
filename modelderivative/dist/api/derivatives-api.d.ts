import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { DerivativeurnSignedcookies200Response } from '../model';
/**
 * DerivativesApi - axios parameter creator
 * @export
 */
export declare const DerivativesApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
    /**
     * Returns a download URL and a set of signed cookies, which lets you securely download the derivative specified by the `derivativeUrn` URI parameter. The signed cookies have a lifetime of 6 hours. Although you cannot use range headers for this operation, you can use range headers for the returned download URL to download the derivative in chunks, in parallel.
     * @summary Fetch Derivative Download URL
     * @param {string} derivativeUrn The URL-encoded URN of the derivatives. This URN is returned by the &#x60;Fetch Manifest &lt;/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/&gt;&#x60;_ operation.
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {number} [minutesExpiration] Specifies how many minutes the signed cookies should remain valid. Default value is 360 minutes. The value you specify must be lower than the default value for this parameter. If you specify a value greater than the default value, the Model Derivative service will return an error with an HTTP status code of 400.
     * @param {string} [responseContentDisposition] The value that must be returned with the download URL as the &#x60;&#x60;response-content-disposition&#x60;&#x60; query string parameter. Must begin with &#x60;&#x60;attachment&#x60;&#x60;. This value defaults to the default value corresponding to the derivative/file.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    derivativeurnSignedcookies: (accessToken: string, derivativeUrn: string, urn: string, minutesExpiration?: number, responseContentDisposition?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns information about the specified derivative.  This operation returns a set of headers similar to that returned by `Download Derivative </en/docs/model-derivative/v2/reference/urn-manifest-derivativeurn-GET>`_.  You can use this operation to determine the total content length of a derivative before you download it. If the derivative is large, you can choose to download the derivative in chunks, by specifying a chunk size using the Range header parameter.
     * @summary Check Derivative Details
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {string} derivativeUrn The URL-encoded URN of the derivatives. This URN is returned by the &#x60;Fetch Manifest &lt;/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/&gt;&#x60;_ operation.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    headUrnManifestDerivativeUrn: (accessToken: string, urn: string, derivativeUrn: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * DerivativesApi - functional programming interface
 * @export
 */
export declare const DerivativesApiFp: (sdkManager?: SDKManager) => {
    /**
     * Returns a download URL and a set of signed cookies, which lets you securely download the derivative specified by the `derivativeUrn` URI parameter. The signed cookies have a lifetime of 6 hours. Although you cannot use range headers for this operation, you can use range headers for the returned download URL to download the derivative in chunks, in parallel.
     * @summary Fetch Derivative Download URL
     * @param {string} derivativeUrn The URL-encoded URN of the derivatives. This URN is returned by the &#x60;Fetch Manifest &lt;/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/&gt;&#x60;_ operation.
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {number} [minutesExpiration] Specifies how many minutes the signed cookies should remain valid. Default value is 360 minutes. The value you specify must be lower than the default value for this parameter. If you specify a value greater than the default value, the Model Derivative service will return an error with an HTTP status code of 400.
     * @param {string} [responseContentDisposition] The value that must be returned with the download URL as the &#x60;&#x60;response-content-disposition&#x60;&#x60; query string parameter. Must begin with &#x60;&#x60;attachment&#x60;&#x60;. This value defaults to the default value corresponding to the derivative/file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    derivativeurnSignedcookies(accessToken: string, derivativeUrn: string, urn: string, minutesExpiration?: number, responseContentDisposition?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DerivativeurnSignedcookies200Response>>;
    /**
     * Returns information about the specified derivative.  This operation returns a set of headers similar to that returned by `Download Derivative </en/docs/model-derivative/v2/reference/urn-manifest-derivativeurn-GET>`_.  You can use this operation to determine the total content length of a derivative before you download it. If the derivative is large, you can choose to download the derivative in chunks, by specifying a chunk size using the Range header parameter.
     * @summary Check Derivative Details
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {string} derivativeUrn The URL-encoded URN of the derivatives. This URN is returned by the &#x60;Fetch Manifest &lt;/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/&gt;&#x60;_ operation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    headUrnManifestDerivativeUrn(accessToken: string, urn: string, derivativeUrn: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
/**
 * DerivativesApi - interface
 * @export
 * @interface DerivativesApi
 */
export interface DerivativesApiInterface {
    /**
     * Returns a download URL and a set of signed cookies, which lets you securely download the derivative specified by the `derivativeUrn` URI parameter. The signed cookies have a lifetime of 6 hours. Although you cannot use range headers for this operation, you can use range headers for the returned download URL to download the derivative in chunks, in parallel.
     * @summary Fetch Derivative Download URL
     * @param {string} derivativeUrn The URL-encoded URN of the derivatives. This URN is returned by the &#x60;Fetch Manifest &lt;/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/&gt;&#x60;_ operation.
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {number} [minutesExpiration] Specifies how many minutes the signed cookies should remain valid. Default value is 360 minutes. The value you specify must be lower than the default value for this parameter. If you specify a value greater than the default value, the Model Derivative service will return an error with an HTTP status code of 400.
     * @param {string} [responseContentDisposition] The value that must be returned with the download URL as the &#x60;&#x60;response-content-disposition&#x60;&#x60; query string parameter. Must begin with &#x60;&#x60;attachment&#x60;&#x60;. This value defaults to the default value corresponding to the derivative/file.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DerivativesApiInterface
     */
    derivativeurnSignedcookies(accessToken: string, derivativeUrn: string, urn: string, minutesExpiration?: number, responseContentDisposition?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Returns information about the specified derivative.  This operation returns a set of headers similar to that returned by `Download Derivative </en/docs/model-derivative/v2/reference/urn-manifest-derivativeurn-GET>`_.  You can use this operation to determine the total content length of a derivative before you download it. If the derivative is large, you can choose to download the derivative in chunks, by specifying a chunk size using the Range header parameter.
     * @summary Check Derivative Details
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {string} derivativeUrn The URL-encoded URN of the derivatives. This URN is returned by the &#x60;Fetch Manifest &lt;/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/&gt;&#x60;_ operation.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DerivativesApiInterface
     */
    headUrnManifestDerivativeUrn(accessToken: string, urn: string, derivativeUrn: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * DerivativesApi - object-oriented interface
 * @export
 * @class DerivativesApi
 * @extends {BaseAPI}
 */
export declare class DerivativesApi extends BaseAPI implements DerivativesApiInterface {
    private logger;
    /**
     * Returns a download URL and a set of signed cookies, which lets you securely download the derivative specified by the `derivativeUrn` URI parameter. The signed cookies have a lifetime of 6 hours. Although you cannot use range headers for this operation, you can use range headers for the returned download URL to download the derivative in chunks, in parallel.
     * @summary Fetch Derivative Download URL
     * @param {string} derivativeUrn The URL-encoded URN of the derivatives. This URN is returned by the &#x60;Fetch Manifest &lt;/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/&gt;&#x60;_ operation.
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {number} [minutesExpiration] Specifies how many minutes the signed cookies should remain valid. Default value is 360 minutes. The value you specify must be lower than the default value for this parameter. If you specify a value greater than the default value, the Model Derivative service will return an error with an HTTP status code of 400.
     * @param {string} [responseContentDisposition] The value that must be returned with the download URL as the &#x60;&#x60;response-content-disposition&#x60;&#x60; query string parameter. Must begin with &#x60;&#x60;attachment&#x60;&#x60;. This value defaults to the default value corresponding to the derivative/file.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DerivativesApi
     */
    derivativeurnSignedcookies(accessToken: string, derivativeUrn: string, urn: string, minutesExpiration?: number, responseContentDisposition?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Returns information about the specified derivative.  This operation returns a set of headers similar to that returned by `Download Derivative </en/docs/model-derivative/v2/reference/urn-manifest-derivativeurn-GET>`_.  You can use this operation to determine the total content length of a derivative before you download it. If the derivative is large, you can choose to download the derivative in chunks, by specifying a chunk size using the Range header parameter.
     * @summary Check Derivative Details
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {string} derivativeUrn The URL-encoded URN of the derivatives. This URN is returned by the &#x60;Fetch Manifest &lt;/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/&gt;&#x60;_ operation.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DerivativesApi
     */
    headUrnManifestDerivativeUrn(accessToken: string, urn: string, derivativeUrn: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
