

/**
 * Must be "urn:ietf:params:oauth:grant-type:jwt-bearer".
 * @export
 * @enum {string}
 */

export const GrantType = {
    UrnietfparamsoauthgrantTypejwtBearer: 'urn:ietf:params:oauth:grant-type:jwt-bearer'
} as const;

export type GrantType = typeof GrantType[keyof typeof GrantType];



