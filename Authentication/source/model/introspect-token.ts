/* tslint:disable */
/* eslint-disable */


/**
 * The response body for the introspection of access token.
 * @export
 * @interface IntrospectToken
 */
export interface IntrospectToken {
    /**
     * 
     * @type {boolean}
     * @memberof IntrospectToken
     */
    'active': boolean;
    /**
     * 
     * @type {string}
     * @memberof IntrospectToken
     */
    'scope': string;
    /**
     * 
     * @type {string}
     * @memberof IntrospectToken
     */
    'client_id': string;
    /**
     * 
     * @type {number}
     * @memberof IntrospectToken
     */
    'exp': number;
    /**
     * 
     * @type {string}
     * @memberof IntrospectToken
     */
    'userid'?: string;
}

