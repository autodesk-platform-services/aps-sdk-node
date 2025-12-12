

/**
 * Describes a private key
 * @export
 * @interface ServiceAccountPrivateKey
 */
export interface ServiceAccountPrivateKey {
    /**
     * The ID of the private key.
     * @type {string}
     * @memberof ServiceAccountPrivateKey
     */
    'kid'?: string;
    /**
     * The private key value, in PEM format.
     * @type {string}
     * @memberof ServiceAccountPrivateKey
     */
    'privateKey'?: string;
}

