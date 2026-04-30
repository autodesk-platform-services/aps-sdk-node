

/**
 * 
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
    Openid: 'openid',
    ApplicationServiceAccountWrite: 'application:service_account:write',
    ApplicationServiceAccountRead: 'application:service_account:read',
    ApplicationServiceAccountKeyWrite: 'application:service_account_key:write',
    ApplicationServiceAccountKeyRead: 'application:service_account_key:read'
} as const;

export type Scopes = typeof Scopes[keyof typeof Scopes];



