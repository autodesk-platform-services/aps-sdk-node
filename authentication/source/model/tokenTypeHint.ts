/* tslint:disable */
/* eslint-disable */


/**
 * The type of token to revoke. Possible values are: ``access_token`` and ``refresh_token``. 
 * @export
 * @enum {string}
 */

export const TokenTypeHint = {
    AccessToken: 'access_token',
    RefreshToken: 'refresh_token'
} as const;

export type TokenTypeHint = typeof TokenTypeHint[keyof typeof TokenTypeHint];



