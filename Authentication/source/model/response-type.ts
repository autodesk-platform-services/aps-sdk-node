/* tslint:disable */
/* eslint-disable */


/**
 * The type of response you want to receive. Possible values are:    -  ``code`` - Authorization code grant.  -  ``id_token`` - OpenID Connect ID token. 
 * @export
 * @enum {string}
 */

export const ResponseType = {
    Code: 'code',
    IdToken: 'id_token'
} as const;

export type ResponseType = typeof ResponseType[keyof typeof ResponseType];



