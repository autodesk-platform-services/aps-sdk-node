/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface DerivativeurnSignedcookies200Response
 */
export interface DerivativeurnSignedcookies200Response {
    /**
     * The calculated ETag hash of the derivative/file, if available.
     * @type {string}
     * @memberof DerivativeurnSignedcookies200Response
     */
    'etag': string;
    /**
     * The size of the derivative/file, in bytes.
     * @type {number}
     * @memberof DerivativeurnSignedcookies200Response
     */
    'size': number;
    /**
     * The download URL.
     * @type {string}
     * @memberof DerivativeurnSignedcookies200Response
     */
    'url': string;
    /**
     * The content type of the derivative/file.
     * @type {string}
     * @memberof DerivativeurnSignedcookies200Response
     */
    'content-type': string;
    /**
     * The 13-digit epoch time stamp indicating when the signed cookies expire.
     * @type {number}
     * @memberof DerivativeurnSignedcookies200Response
     */
    'expiration': number;
}

