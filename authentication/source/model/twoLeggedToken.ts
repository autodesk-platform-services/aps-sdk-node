/* tslint:disable */
/* eslint-disable */


/**
 * Represents the payload returned in response to a client credentials grant request.
 * @export
 * @class TwoLeggedToken
 */
export class TwoLeggedToken {
     constructor(content: any){
        this.access_token = content.access_token;
        this.token_type = content.token_type;
        this.expires_in = content.expires_in;
        this.expires_at =  Date.now() + this.expires_in * 1000 ;
     }
    /**
     * The access token. 
     * @type {string}
     * @memberof TwoLeggedToken
     */
    'access_token': string;
    /**
     * Will always be Bearer. 
     * @type {string}
     * @memberof TwoLeggedToken
     */
    'token_type'?: string;
    /**
     * Access token expiration time (in seconds).
     * @type {number}
     * @memberof TwoLeggedToken
     */
    'expires_in': number;
    /**
     * Access token expiration time (in milliseconds).
     * @type {number}
     * @memberof TwoLeggedToken
     */
    'expires_at'?: number;
}

