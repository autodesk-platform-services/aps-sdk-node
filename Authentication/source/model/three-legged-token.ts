/* tslint:disable */
/* eslint-disable */


/**
 * Represents the payload returned in response to an authorization code grant request.
 * @export
 * @class ThreeLeggedToken
 */
export class ThreeLeggedToken {
    constructor(content: any){
        this.access_token = content.access_token;
        this.refresh_token = content.refresh_token;
        this.token_type = content.token_type;
        this.expires_in = content.expires_in;
        this.id_token = content.id_token;
        this.expires_at =  Date.now() + this.expires_in * 1000 ;
     }
    /**
     * Will always be Bearer.
     * @type {string}
     * @memberof ThreeLeggedToken
     */
    'token_type'?: string;
    /**
     * Access token expiration time (in seconds).
     * @type {number}
     * @memberof ThreeLeggedToken
     */
    'expires_in': number;
    /**
     * The refresh token.
     * @type {string}
     * @memberof ThreeLeggedToken
     */
    'refresh_token': string;
    /**
     * The access token.
     * @type {string}
     * @memberof ThreeLeggedToken
     */
    'access_token': string;
    /**
     * The ID token, if openid scope was specified in /authorize request.
     * @type {string}
     * @memberof ThreeLeggedToken
     */
    'id_token'?: string;
    /**
     * Access token expiration time (in milliseconds).
     * @type {number}
     * @memberof ThreeLeggedToken
     */
    'expires_at'?: number;
}

