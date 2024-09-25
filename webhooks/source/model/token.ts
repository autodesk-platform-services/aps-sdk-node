/* tslint:disable */
/* eslint-disable */


/**
 * Add a new Webhook secret token.
 * @export
 * @interface Token
 */
export interface Token {
    /**
     * A repetition of the HTTP status code returned in the response headers, which indicates the outcome of the request.
     * @type {number}
     * @memberof Token
     */
    'status'?: number;
    /**
     * An array of strings, where each string is a human-readable description of the request\'s outcome.
     * @type {Array<string>}
     * @memberof Token
     */
    'detail'?: Array<string>;
}

