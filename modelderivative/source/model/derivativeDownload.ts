/* tslint:disable */
/* eslint-disable */


/**
 * An object that represents the successful response of a Fetch Derivative Download operation.
 * @export
 * @interface DerivativeDownload
 */
export interface DerivativeDownload {
    /**
     * The calculated ETag hash of the derivative/file, if available.
     * @type {string}
     * @memberof DerivativeDownload
     */
    'etag'?: string;
    /**
     * The size of the derivative/file, in bytes.
     * @type {number}
     * @memberof DerivativeDownload
     */
    'size'?: number;
    /**
     * The download URL.
     * @type {string}
     * @memberof DerivativeDownload
     */
    'url'?: string;
    /**
     * The content type of the derivative/file.
     * @type {string}
     * @memberof DerivativeDownload
     */
    'content-type'?: string;
    /**
     * The 13-digit epoch time stamp indicating the time the signed cookies expire.
     * @type {number}
     * @memberof DerivativeDownload
     */
    'expiration'?: number;
}

