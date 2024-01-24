/**
 * Enum for scopes
 * @export
 * @enum {string}
 */
export declare const Scopes: {
    readonly UserProfileread: "user-profile:read";
    readonly Userread: "user:read";
    readonly Userwrite: "user:write";
    readonly Viewablesread: "viewables:read";
    readonly Dataread: "data:read";
    readonly Datawrite: "data:write";
    readonly Datacreate: "data:create";
    readonly Datasearch: "data:search";
    readonly Bucketcreate: "bucket:create";
    readonly Bucketread: "bucket:read";
    readonly Bucketupdate: "bucket:update";
    readonly Bucketdelete: "bucket:delete";
    readonly Codeall: "code:all";
    readonly Accountread: "account:read";
    readonly Accountwrite: "account:write";
    readonly Openid: "openid";
};
export type Scopes = typeof Scopes[keyof typeof Scopes];
