/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const TokenTypeHint = {
    AccessToken: 'access_token',
    RefreshToken: 'refresh_token'
} as const;

export type TokenTypeHint = typeof TokenTypeHint[keyof typeof TokenTypeHint];



