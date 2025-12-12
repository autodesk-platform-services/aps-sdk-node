

/**
 * 
 * @export
 * @enum {string}
 */

export const Scope = {
    Userread: 'user:read',
    Userwrite: 'user:write',
    UserProfileread: 'user-profile:read',
    Viewablesread: 'viewables:read',
    Dataread: 'data:read',
    DatareadUrnOfResource: 'data:read:<URN_OF_RESOURCE>',
    Datawrite: 'data:write',
    Datacreate: 'data:create',
    Datasearch: 'data:search',
    Bucketcreate: 'bucket:create',
    Bucketread: 'bucket:read',
    Bucketupdate: 'bucket:update',
    Bucketdelete: 'bucket:delete',
    Codeall: 'code:all',
    Accountread: 'account:read',
    Accountwrite: 'account:write',
    Openid: 'openid',
    ApplicationserviceAccountwrite: 'application:service_account:write',
    ApplicationserviceAccountread: 'application:service_account:read',
    ApplicationserviceAccountKeywrite: 'application:service_account_key:write',
    ApplicationserviceAccountKeyread: 'application:service_account_key:read'
} as const;

export type Scope = typeof Scope[keyof typeof Scope];



