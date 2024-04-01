/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface IntrospectToken
 */
export interface IntrospectToken {
    /**
     * ``true``: The token is active.  ``false``: The token is expired, invalid, or revoked. 
     * @type {boolean}
     * @memberof IntrospectToken
     */
    'active': boolean;
    /**
     * A URL-encoded, space separated list of scopes associated with the token.
     * @type {string}
     * @memberof IntrospectToken
     */
    'scope': string;
    /**
     * The Client ID of the application associated with the token.
     * @type {string}
     * @memberof IntrospectToken
     */
    'client_id': string;
    /**
     * The expiration time of the token, represented as a Unix timestamp.
     * @type {number}
     * @memberof IntrospectToken
     */
    'exp': number;
    /**
     * The ID of the user who authorized the token.
     * @type {string}
     * @memberof IntrospectToken
     */
    'userid'?: string;
}

