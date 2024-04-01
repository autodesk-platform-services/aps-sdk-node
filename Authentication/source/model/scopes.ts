/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the scope for the token you are requesting. See the `Developer\'s Guide documentation on scopes </en/docs/oauth/v2/developers_guide/scopes/>`_ for a complete list of possible values. 
 * @export
 * @enum {string}
 */

export const Scopes = {
    UserRead: 'user:read',
    UserWrite: 'user:write',
    UserProfileRead: 'user-profile:read',
    ViewablesRead: 'viewables:read',
    DataRead: 'data:read',
    DataReadUrnOfResource: 'data:read:<URN_OF_RESOURCE>',
    DataWrite: 'data:write',
    DataCreate: 'data:create',
    DataSearch: 'data:search',
    BucketCreate: 'bucket:create',
    BucketRead: 'bucket:read',
    BucketUpdate: 'bucket:update',
    BucketDelete: 'bucket:delete',
    CodeAll: 'code:all',
    AccountRead: 'account:read',
    AccountWrite: 'account:write',
    OpenId: 'openid'
} as const;

export type Scopes = typeof Scopes[keyof typeof Scopes];



