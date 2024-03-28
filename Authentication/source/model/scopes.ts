/* tslint:disable */
/* eslint-disable */


/**
 * Enum for scopes
 * @export
 * @enum {string}
 */

export const Scopes = {
    UserProfileRead: 'user-profile:read',
    UserRead: 'user:read',
    UserWrite: 'user:write',
    ViewablesRead: 'viewables:read',
    DataRead: 'data:read',
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



