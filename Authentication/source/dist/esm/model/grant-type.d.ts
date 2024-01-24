/**
 * Enum for GrantType
 * @export
 * @enum {string}
 */
export declare const GrantType: {
    readonly Client_credentials: "client_credentials";
    readonly Authorization_code: "authorization_code";
    readonly Refresh_token: "refresh_token";
};
export type GrantType = typeof GrantType[keyof typeof GrantType];
