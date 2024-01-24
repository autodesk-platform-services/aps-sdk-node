/**
 * Enum for Token type hint
 * @export
 * @enum {string}
 */
export declare const TokenTypeHint: {
    readonly Access_token: "access_token";
    readonly Refresh_token: "refresh_token";
};
export type TokenTypeHint = typeof TokenTypeHint[keyof typeof TokenTypeHint];
