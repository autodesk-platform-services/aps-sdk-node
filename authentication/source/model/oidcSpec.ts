/* tslint:disable */
/* eslint-disable */


/**
 * Represents a successful response to a Get OIDC Specification operation.
 * @export
 * @interface OidcSpec
 */
export interface OidcSpec {
    /**
     * The base URL of the openID Provider. Always ``https://developer.api.autodesk.com`` for APS.
     * @type {string}
     * @memberof OidcSpec
     */
    'issuer'?: string;
    /**
     * The endpoint for authorizing users. It initiates the user authentication process in obtaining an authorization code grant.
     * @type {string}
     * @memberof OidcSpec
     */
    'authorization_endpoint'?: string;
    /**
     * The endpoint for acquiring access tokens and refresh tokens.
     * @type {string}
     * @memberof OidcSpec
     */
    'token_endpoint'?: string;
    /**
     * The endpoint for querying information about the authenticated user.
     * @type {string}
     * @memberof OidcSpec
     */
    'userinfo_endpoint'?: string;
    /**
     * The endpoint for retrieving public keys used by APS, in the JWKS format.
     * @type {string}
     * @memberof OidcSpec
     */
    'jwks_uri'?: string;
    /**
     * The endpoint for revoking an access token or refresh token.
     * @type {string}
     * @memberof OidcSpec
     */
    'revoke_endpoint'?: string;
    /**
     * The endpoint for obtaining metadata about an access token or refresh token.
     * @type {string}
     * @memberof OidcSpec
     */
    'introspection_endpoint'?: string;
    /**
     * A list of supported scopes.
     * @type {Array<string>}
     * @memberof OidcSpec
     */
    'scopes_supported'?: Array<string>;
    /**
     * A list of the response types supported by APS. Each response type represent a different flow.
     * @type {Array<string>}
     * @memberof OidcSpec
     */
    'response_types_supported'?: Array<string>;
    /**
     * A list of response modes supported by APS. Each response mode defines a different way of delivering an authorization response.
     * @type {Array<string>}
     * @memberof OidcSpec
     */
    'response_modes_supported'?: Array<string>;
    /**
     * A list of grant types supported by APS. Each grant type represents a different way an application can obtain an access token.
     * @type {Array<string>}
     * @memberof OidcSpec
     */
    'grant_types_supported'?: Array<string>;
    /**
     * A list of subject identifier types supported by APS.
     * @type {Array<string>}
     * @memberof OidcSpec
     */
    'subject_types_supported'?: Array<string>;
    /**
     * A list of all the token signing algorithms supported by APS.
     * @type {Array<string>}
     * @memberof OidcSpec
     */
    'id_token_signing_alg_values_supported'?: Array<string>;
}

