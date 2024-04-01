/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface JwksKey
 */
export interface JwksKey {
    /**
     * The ID of the key. Acts as a unique identifier for a specific key within the JWKS.
     * @type {string}
     * @memberof JwksKey
     */
    'kid'?: string;
    /**
     * The cryptographic algorithm family used with the key. Currently, always ``RSA``.
     * @type {string}
     * @memberof JwksKey
     */
    'kty'?: string;
    /**
     * The intended use of the public key. Possible values:  - ``sig`` - Verify the signature on data. 
     * @type {string}
     * @memberof JwksKey
     */
    'use'?: string;
    /**
     * The RSA modulus value.
     * @type {string}
     * @memberof JwksKey
     */
    'n'?: string;
    /**
     * The RSA exponent value.
     * @type {string}
     * @memberof JwksKey
     */
    'e'?: string;
}

