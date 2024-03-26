/* tslint:disable */
/* eslint-disable */


/**
 * Enum for Token type hint
 * @export
 * @enum {string}
 */

export const TokenTypeHint = {
    AccessToken: 'access_token',
    RefreshToken: 'refresh_token'  
} as const;

export type TokenTypeHint = typeof TokenTypeHint[keyof typeof TokenTypeHint];