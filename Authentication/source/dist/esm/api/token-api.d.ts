import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "@aps_sdk/autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { Jwks } from '../model';
import { GrantType } from '../model';
import { IntrospectToken } from '../model';
import { OidcSpec } from '../model';
/**
 * TokenApi - axios parameter creator
 * @export
 */
export declare const TokenApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
    /**
     * To obtain an authorization code grant or id_token grant.  We rate limit this endpoint. When rate limit reached, then Apigee will throw HTTP 429 Too Many Requests error. See Forge docs on the rate limit: [Forge rate limit](https://forge.autodesk.com/en/docs/oauth/v2/developers_guide/rate-limiting/forge-rate-limits/)  Errors came from OKTA/PF directly.Please refer forge v2 api document for more details <Link>
     * @summary authorize
     * @param {string} clientId Client ID.
     * @param {string} responseType Must be &#x60;code&#x60; for authorization code grant, &#x60;id_token&#x60; for an OpenID Connect ID token.
     * @param {string} redirectUri URL-encoded callback URL.
     * @param {string} state The payload that authorization flow will pass back verbatim in state query parameter to the callback URL. It can contain alphanumeric, comma, period, underscore, and hyphen characters.
     * @param {string} [nonce] A string value used to associate a Client session with an ID Token, and to mitigate replay attacks. Required if &#x60;response_type&#x60; is &#x60;id_token&#x60; or &#x60;token&#x60;
     * @param {Scopes} [scope] URL-encoded, a space-delimited list of scopes. Supported values: 1. device_sso 2. All scopes mentioned in [Forge Developers Guide](https://forge.autodesk.com/en/docs/oauth/v3/developers_guide/scopes/)
     * @param {string} [responseMode] The mode of response for the supplied &#x60;response_type&#x60;. Supported values are &#x60;fragment&#x60;, &#x60;form_post&#x60; or &#x60;query&#x60;. &#x60;query&#x60; is not supported if the &#x60;response_type&#x60; is &#x60;token&#x60;.
     * @param {string} [prompt] Values supported: &#x60;login&#x60; and &#x60;none&#x60;. &#x60;login&#x60;: Always prompt the user for authentication, regardless of the login session. &#x60;prompt&#x60;: Do not prompt user for authentication. If user is not logged in, the calling application receives an error.
     * @param {string} [authoptions] A Json object carries information to Identity.
     * @param {string} [codeChallenge] A challenge for PKCE. The challenge is verified in the access token request.
     * @param {string} [codeChallengeMethod] Method used to derive the code challenge for PKCE. Must be S256 if &#x60;code_challenge&#x60; is present.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authorize: (clientId: string, responseType: string, redirectUri: string, state: string, nonce?: string, scope?: string, responseMode?: string, prompt?: string, authoptions?: string, codeChallenge?: string, codeChallengeMethod?: string, options?: ApsServiceRequestConfig) => string;
    /**
     * Token endpoint returns access token and refresh token, depending on the request parameters.  The endpoint requires Basic Authorization for confidential clients. For public clients, the Authorization Header should not be in the header and `client_id` should be included in the form body.  * If `grant_type` is `authorization_code`, it returns 3-legged access token for authorization code grant.  * If `grant_type` is `client_credentials`, it returns 2-legged access token for client credentials grant. * If `grant_type` is `refresh_token`, it returns new access token by using the refresh token provided in the request.
     * @summary token
     * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
     * @param {Granttype} [grantType]
     * @param {string} [code] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
     * @param {string} [redirectUri] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
     * @param {string} [codeVerifier] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60; and &#x60;code_challenge&#x60; was specified in /authorize request
     * @param {string} [refreshToken] Required if &#x60;grant_type&#x60; is &#x60;refresh_token&#x60;
     * @param {Scopes} [scope]
     * @param {string} [clientId] This field is required for public client
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchtoken: (authorization?: string, grantType?: GrantType, code?: string, redirectUri?: string, codeVerifier?: string, refreshToken?: string, scope?: string, clientId?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * To return JSON Web Key Set that used to validate JWT token.
     * @summary keys
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getKeys: (options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Openid-configuration is a Well-known URI Discovery Mechanism for the Provider Configuration URI and is defined in OpenID Connect (OIDC). Openid-configuration is a URI defined within OpenID Connect which provides configuration information about the Identity Provider (IDP).  This endpoint retrieves the metadata as a JSON listing of OpenID/OAuth endpoints, supported scopes and claims, public keys used to sign the tokens, and other details.
     * @summary GET OIDC Specification
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOidcSpec: (options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * Examines an access token including the reference token and returns the status information of the tokens.  If the token is active, additional information is returned.  If the token is expired, invalid or revoked, it returns the response as status: inactive.
     * @summary introspect
     * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
     * @param {string} [token]
     * @param {string} [clientId]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    introspectToken: (authorization?: string, token?: string, clientId?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
    /**
     * This API endpoint logs a user out by removing their user browser session and redirects the user to the Autodesk login page.
     * @summary logout
     * @param {string} [postLogoutRedirectUri] Location to redirect once the logout is performed. Note that the provided domain host should be in the allowed list. Contact #oxygen slack channel for more details.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    logout: (postLogoutRedirectUri?: string, options?: ApsServiceRequestConfig) => string;
    /**
     * This API endpoint takes an access token or refresh token and revokes it. Once the token is revoked, it becomes inactive and returns no body response.  A client can only revoke its own tokens.
     * @summary revoke
     * @param {string} [token] The token to be revoked.
     * @param {string} [tokenTypeHint] Should be either \\\&#39;access_token\\\&#39;, \\\&#39;refresh_token\\\&#39; or \\\&#39;device_secret\\\&#39;.
     * @param {string} [clientId] This field is required for public client.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revoke: (token?: string, authorization?: string, tokenTypeHint?: string, clientId?: string, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * TokenApi - functional programming interface
 * @export
 */
export declare const TokenApiFp: (sdkManager?: SDKManager) => {
    /**
     * To obtain an authorization code grant or id_token grant.  We rate limit this endpoint. When rate limit reached, then Apigee will throw HTTP 429 Too Many Requests error. See Forge docs on the rate limit: [Forge rate limit](https://forge.autodesk.com/en/docs/oauth/v2/developers_guide/rate-limiting/forge-rate-limits/)  Errors came from OKTA/PF directly.Please refer forge v2 api document for more details <Link>
     * @summary authorize
     * @param {string} clientId Client ID.
     * @param {string} responseType Must be &#x60;code&#x60; for authorization code grant, &#x60;id_token&#x60; for an OpenID Connect ID token.
     * @param {string} redirectUri URL-encoded callback URL.
     * @param {string} state The payload that authorization flow will pass back verbatim in state query parameter to the callback URL. It can contain alphanumeric, comma, period, underscore, and hyphen characters.
     * @param {string} [nonce] A string value used to associate a Client session with an ID Token, and to mitigate replay attacks. Required if &#x60;response_type&#x60; is &#x60;id_token&#x60; or &#x60;token&#x60;
     * @param {Scopes} [scope] URL-encoded, a space-delimited list of scopes. Supported values: 1. device_sso 2. All scopes mentioned in [Forge Developers Guide](https://forge.autodesk.com/en/docs/oauth/v3/developers_guide/scopes/)
     * @param {string} [responseMode] The mode of response for the supplied &#x60;response_type&#x60;. Supported values are &#x60;fragment&#x60;, &#x60;form_post&#x60; or &#x60;query&#x60;. &#x60;query&#x60; is not supported if the &#x60;response_type&#x60; is &#x60;token&#x60;.
     * @param {string} [prompt] Values supported: &#x60;login&#x60; and &#x60;none&#x60;. &#x60;login&#x60;: Always prompt the user for authentication, regardless of the login session. &#x60;prompt&#x60;: Do not prompt user for authentication. If user is not logged in, the calling application receives an error.
     * @param {string} [authoptions] A Json object carries information to Identity.
     * @param {string} [codeChallenge] A challenge for PKCE. The challenge is verified in the access token request.
     * @param {string} [codeChallengeMethod] Method used to derive the code challenge for PKCE. Must be S256 if &#x60;code_challenge&#x60; is present.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authorize(clientId: string, responseType: string, redirectUri: string, state: string, nonce?: string, scope?: string, responseMode?: string, prompt?: string, authoptions?: string, codeChallenge?: string, codeChallengeMethod?: string, options?: ApsServiceRequestConfig): string;
    /**
     * Token endpoint returns access token and refresh token, depending on the request parameters.  The endpoint requires Basic Authorization for confidential clients. For public clients, the Authorization Header should not be in the header and `client_id` should be included in the form body.  * If `grant_type` is `authorization_code`, it returns 3-legged access token for authorization code grant.  * If `grant_type` is `client_credentials`, it returns 2-legged access token for client credentials grant. * If `grant_type` is `refresh_token`, it returns new access token by using the refresh token provided in the request.
     * @summary token
     * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
     * @param {Granttype} [grantType]
     * @param {string} [code] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
     * @param {string} [redirectUri] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
     * @param {string} [codeVerifier] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60; and &#x60;code_challenge&#x60; was specified in /authorize request
     * @param {string} [refreshToken] Required if &#x60;grant_type&#x60; is &#x60;refresh_token&#x60;
     * @param {Scopes} [scope]
     * @param {string} [clientId] This field is required for public client
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchtoken(authorization?: string, grantType?: GrantType, code?: string, redirectUri?: string, codeVerifier?: string, refreshToken?: string, scope?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>>;
    /**
     * To return JSON Web Key Set that used to validate JWT token.
     * @summary keys
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getKeys(options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Jwks>>;
    /**
     * Openid-configuration is a Well-known URI Discovery Mechanism for the Provider Configuration URI and is defined in OpenID Connect (OIDC). Openid-configuration is a URI defined within OpenID Connect which provides configuration information about the Identity Provider (IDP).  This endpoint retrieves the metadata as a JSON listing of OpenID/OAuth endpoints, supported scopes and claims, public keys used to sign the tokens, and other details.
     * @summary GET OIDC Specification
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOidcSpec(options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OidcSpec>>;
    /**
     * Examines an access token including the reference token and returns the status information of the tokens.  If the token is active, additional information is returned.  If the token is expired, invalid or revoked, it returns the response as status: inactive.
     * @summary introspect
     * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
     * @param {string} [token]
     * @param {string} [clientId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    introspectToken(authorization?: string, token?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IntrospectToken>>;
    /**
     * This API endpoint logs a user out by removing their user browser session and redirects the user to the Autodesk login page.
     * @summary logout
     * @param {string} [postLogoutRedirectUri] Location to redirect once the logout is performed. Note that the provided domain host should be in the allowed list. Contact #oxygen slack channel for more details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    logout(postLogoutRedirectUri?: string, options?: ApsServiceRequestConfig): string;
    /**
     * This API endpoint takes an access token or refresh token and revokes it. Once the token is revoked, it becomes inactive and returns no body response.  A client can only revoke its own tokens.
     * @summary revoke
     * @param {string} [token] The token to be revoked.
     * @param {string} [tokenTypeHint] Should be either \\\&#39;access_token\\\&#39;, \\\&#39;refresh_token\\\&#39; or \\\&#39;device_secret\\\&#39;.
     * @param {string} [clientId] This field is required for public client.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revoke(token?: string, authorization?: string, tokenTypeHint?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>>;
};
/**
 * TokenApi - interface
 * @export
 * @interface TokenApi
 */
export interface TokenApiInterface {
    /**
     * To obtain an authorization code grant or id_token grant.  We rate limit this endpoint. When rate limit reached, then Apigee will throw HTTP 429 Too Many Requests error. See Forge docs on the rate limit: [Forge rate limit](https://forge.autodesk.com/en/docs/oauth/v2/developers_guide/rate-limiting/forge-rate-limits/)  Errors came from OKTA/PF directly.Please refer forge v2 api document for more details <Link>
     * @summary authorize
     * @param {string} clientId Client ID.
     * @param {string} responseType Must be &#x60;code&#x60; for authorization code grant, &#x60;id_token&#x60; for an OpenID Connect ID token.
     * @param {string} redirectUri URL-encoded callback URL.
     * @param {string} state The payload that authorization flow will pass back verbatim in state query parameter to the callback URL. It can contain alphanumeric, comma, period, underscore, and hyphen characters.
     * @param {string} [nonce] A string value used to associate a Client session with an ID Token, and to mitigate replay attacks. Required if &#x60;response_type&#x60; is &#x60;id_token&#x60; or &#x60;token&#x60;
     * @param {Scopes} [scope] URL-encoded, a space-delimited list of scopes. Supported values: 1. device_sso 2. All scopes mentioned in [Forge Developers Guide](https://forge.autodesk.com/en/docs/oauth/v3/developers_guide/scopes/)
     * @param {string} [responseMode] The mode of response for the supplied &#x60;response_type&#x60;. Supported values are &#x60;fragment&#x60;, &#x60;form_post&#x60; or &#x60;query&#x60;. &#x60;query&#x60; is not supported if the &#x60;response_type&#x60; is &#x60;token&#x60;.
     * @param {string} [prompt] Values supported: &#x60;login&#x60; and &#x60;none&#x60;. &#x60;login&#x60;: Always prompt the user for authentication, regardless of the login session. &#x60;prompt&#x60;: Do not prompt user for authentication. If user is not logged in, the calling application receives an error.
     * @param {string} [authoptions] A Json object carries information to Identity.
     * @param {string} [codeChallenge] A challenge for PKCE. The challenge is verified in the access token request.
     * @param {string} [codeChallengeMethod] Method used to derive the code challenge for PKCE. Must be S256 if &#x60;code_challenge&#x60; is present.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    authorize(/* accessToken: string, */ clientId: string, responseType: string, redirectUri: string, state: string, nonce?: string, scope?: string, responseMode?: string, prompt?: string, authoptions?: string, codeChallenge?: string, codeChallengeMethod?: string): string;
    /**
     * Token endpoint returns access token and refresh token, depending on the request parameters.  The endpoint requires Basic Authorization for confidential clients. For public clients, the Authorization Header should not be in the header and `client_id` should be included in the form body.  * If `grant_type` is `authorization_code`, it returns 3-legged access token for authorization code grant.  * If `grant_type` is `client_credentials`, it returns 2-legged access token for client credentials grant. * If `grant_type` is `refresh_token`, it returns new access token by using the refresh token provided in the request.
     * @summary token
     * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
     * @param {Granttype} [grantType]
     * @param {string} [code] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
     * @param {string} [redirectUri] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
     * @param {string} [codeVerifier] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60; and &#x60;code_challenge&#x60; was specified in /authorize request
     * @param {string} [refreshToken] Required if &#x60;grant_type&#x60; is &#x60;refresh_token&#x60;
     * @param {Scopes} [scope]
     * @param {string} [clientId] This field is required for public client
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    fetchtoken(/* accessToken: string, */ authorization?: string, grantType?: GrantType, code?: string, redirectUri?: string, codeVerifier?: string, refreshToken?: string, scope?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * To return JSON Web Key Set that used to validate JWT token.
     * @summary keys
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    getKeys(/* accessToken: string, */ options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Openid-configuration is a Well-known URI Discovery Mechanism for the Provider Configuration URI and is defined in OpenID Connect (OIDC). Openid-configuration is a URI defined within OpenID Connect which provides configuration information about the Identity Provider (IDP).  This endpoint retrieves the metadata as a JSON listing of OpenID/OAuth endpoints, supported scopes and claims, public keys used to sign the tokens, and other details.
     * @summary GET OIDC Specification
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    getOidcSpec(/* accessToken: string,  */ options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Examines an access token including the reference token and returns the status information of the tokens.  If the token is active, additional information is returned.  If the token is expired, invalid or revoked, it returns the response as status: inactive.
     * @summary introspect
     * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
     * @param {string} [token]
     * @param {string} [clientId]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    introspectToken(/* accessToken: string,  */ authorization?: string, token?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * This API endpoint logs a user out by removing their user browser session and redirects the user to the Autodesk login page.
     * @summary logout
     * @param {string} [postLogoutRedirectUri] Location to redirect once the logout is performed. Note that the provided domain host should be in the allowed list. Contact #oxygen slack channel for more details.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    logout(/* accessToken: string, */ postLogoutRedirectUri?: string, options?: ApsServiceRequestConfig): string;
    /**
     * This API endpoint takes an access token or refresh token and revokes it. Once the token is revoked, it becomes inactive and returns no body response.  A client can only revoke its own tokens.
     * @summary revoke
     * @param {string} [token] The token to be revoked.
     * @param {string} [tokenTypeHint] Should be either \\\&#39;access_token\\\&#39;, \\\&#39;refresh_token\\\&#39; or \\\&#39;device_secret\\\&#39;.
     * @param {string} [clientId] This field is required for public client.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    revoke(/* accessToken: string, */ token?: string, authorization?: string, tokenTypeHint?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * TokenApi - object-oriented interface
 * @export
 * @class TokenApi
 * @extends {BaseAPI}
 */
export declare class TokenApi extends BaseAPI implements TokenApiInterface {
    private logger;
    /**
     * To obtain an authorization code grant or id_token grant.  We rate limit this endpoint. When rate limit reached, then Apigee will throw HTTP 429 Too Many Requests error. See Forge docs on the rate limit: [Forge rate limit](https://forge.autodesk.com/en/docs/oauth/v2/developers_guide/rate-limiting/forge-rate-limits/)  Errors came from OKTA/PF directly.Please refer forge v2 api document for more details <Link>
     * @summary authorize
     * @param {string} clientId Client ID.
     * @param {string} responseType Must be &#x60;code&#x60; for authorization code grant, &#x60;id_token&#x60; for an OpenID Connect ID token.
     * @param {string} redirectUri URL-encoded callback URL.
     * @param {string} state The payload that authorization flow will pass back verbatim in state query parameter to the callback URL. It can contain alphanumeric, comma, period, underscore, and hyphen characters.
     * @param {string} [nonce] A string value used to associate a Client session with an ID Token, and to mitigate replay attacks. Required if &#x60;response_type&#x60; is &#x60;id_token&#x60; or &#x60;token&#x60;
     * @param {Scopes} [scope] URL-encoded, a space-delimited list of scopes. Supported values: 1. device_sso 2. All scopes mentioned in [Forge Developers Guide](https://forge.autodesk.com/en/docs/oauth/v3/developers_guide/scopes/)
     * @param {string} [responseMode] The mode of response for the supplied &#x60;response_type&#x60;. Supported values are &#x60;fragment&#x60;, &#x60;form_post&#x60; or &#x60;query&#x60;. &#x60;query&#x60; is not supported if the &#x60;response_type&#x60; is &#x60;token&#x60;.
     * @param {string} [prompt] Values supported: &#x60;login&#x60; and &#x60;none&#x60;. &#x60;login&#x60;: Always prompt the user for authentication, regardless of the login session. &#x60;prompt&#x60;: Do not prompt user for authentication. If user is not logged in, the calling application receives an error.
     * @param {string} [authoptions] A Json object carries information to Identity.
     * @param {string} [codeChallenge] A challenge for PKCE. The challenge is verified in the access token request.
     * @param {string} [codeChallengeMethod] Method used to derive the code challenge for PKCE. Must be S256 if &#x60;code_challenge&#x60; is present.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    authorize(/* accessToken: string, */ clientId: string, responseType: string, redirectUri: string, state: string, nonce?: string, scope?: string, responseMode?: string, prompt?: string, authoptions?: string, codeChallenge?: string, codeChallengeMethod?: string): string;
    /**
     * Token endpoint returns access token and refresh token, depending on the request parameters.  The endpoint requires Basic Authorization for confidential clients. For public clients, the Authorization Header should not be in the header and `client_id` should be included in the form body.  * If `grant_type` is `authorization_code`, it returns 3-legged access token for authorization code grant.  * If `grant_type` is `client_credentials`, it returns 2-legged access token for client credentials grant. * If `grant_type` is `refresh_token`, it returns new access token by using the refresh token provided in the request.
     * @summary token
     * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
     * @param {Granttype} [grantType]
     * @param {string} [code] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
     * @param {string} [redirectUri] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60;
     * @param {string} [codeVerifier] Required if &#x60;grant_type&#x60; is &#x60;authorization_code&#x60; and &#x60;code_challenge&#x60; was specified in /authorize request
     * @param {string} [refreshToken] Required if &#x60;grant_type&#x60; is &#x60;refresh_token&#x60;
     * @param {Scopes} [scope]
     * @param {string} [clientId] This field is required for public client
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    fetchtoken(/* accessToken: string, */ authorization?: string, grantType?: GrantType, code?: string, redirectUri?: string, codeVerifier?: string, refreshToken?: string, scope?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * To return JSON Web Key Set that used to validate JWT token.
     * @summary keys
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    getKeys(/* accessToken: string, */ options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Openid-configuration is a Well-known URI Discovery Mechanism for the Provider Configuration URI and is defined in OpenID Connect (OIDC). Openid-configuration is a URI defined within OpenID Connect which provides configuration information about the Identity Provider (IDP).  This endpoint retrieves the metadata as a JSON listing of OpenID/OAuth endpoints, supported scopes and claims, public keys used to sign the tokens, and other details.
     * @summary GET OIDC Specification
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    getOidcSpec(/* accessToken: string, */ options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Examines an access token including the reference token and returns the status information of the tokens.  If the token is active, additional information is returned.  If the token is expired, invalid or revoked, it returns the response as status: inactive.
     * @summary introspect
     * @param {string} [authorization] Must be in the form Basic ${Base64(&lt;client_id&gt;:&lt;client_secret&gt;)}
     * @param {string} [token]
     * @param {string} [clientId]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    introspectToken(/* accessToken: string, */ authorization?: string, token?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * This API endpoint logs a user out by removing their user browser session and redirects the user to the Autodesk login page.
     * @summary logout
     * @param {string} [postLogoutRedirectUri] Location to redirect once the logout is performed. Note that the provided domain host should be in the allowed list. Contact #oxygen slack channel for more details.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    logout(/* accessToken: string,  */ postLogoutRedirectUri?: string, options?: ApsServiceRequestConfig): string;
    /**
     * This API endpoint takes an access token or refresh token and revokes it. Once the token is revoked, it becomes inactive and returns no body response.  A client can only revoke its own tokens.
     * @summary revoke
     * @param {string} [token] The token to be revoked.
     * @param {string} [tokenTypeHint] Should be either \\\&#39;access_token\\\&#39;, \\\&#39;refresh_token\\\&#39; or \\\&#39;device_secret\\\&#39;.
     * @param {string} [clientId] This field is required for public client.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    revoke(/* accessToken: string, */ token?: string, authorization?: string, tokenTypeHint?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
