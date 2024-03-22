/* tslint:disable */
/* eslint-disable */


/**
 * Enum for grant types
 * @export
 * @enum {string}
 */

export const GrantType = {
    ClientCredentials: 'client_credentials',
    AuthorizationCode: 'authorization_code',
    RefreshToken: 'refresh_token'
} as const;

export type GrantType = typeof GrantType[keyof typeof GrantType];



