/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the grant type you are requesting the code for. Possible values are:   - ``client_credentials`` -  For a 2-legged access token. - ``authorization_code`` - For a 3-legged access token. - ``refresh_token`` - For a refresh token. 
 * @export
 * @enum {string}
 */

export const GrantType = {
    ClientCredentials: 'client_credentials',
    AuthorizationCode: 'authorization_code',
    RefreshToken: 'refresh_token'
} as const;

export type GrantType = typeof GrantType[keyof typeof GrantType];



