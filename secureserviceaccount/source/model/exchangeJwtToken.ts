

/**
 * The response for exchange JWT
 * @export
 * @interface ExchangeJwtToken
 */
export interface ExchangeJwtToken {
    /**
     * access token value
     * @type {string}
     * @memberof ExchangeJwtToken
     */
    'access_token'?: string;
    /**
     * type of token
     * @type {string}
     * @memberof ExchangeJwtToken
     */
    'token_type'?: ExchangeJwtTokenTokenTypeEnum;
    /**
     * access token expiry time in seconds
     * @type {number}
     * @memberof ExchangeJwtToken
     */
    'expires_in'?: number;
}

export const ExchangeJwtTokenTokenTypeEnum = {
    Bearer: 'Bearer'
} as const;

export type ExchangeJwtTokenTokenTypeEnum = typeof ExchangeJwtTokenTokenTypeEnum[keyof typeof ExchangeJwtTokenTokenTypeEnum];


