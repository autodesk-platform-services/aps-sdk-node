/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse } from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { RequestArgs, BaseApi, AuthenticationApiError } from '../base';
import { GrantType, ResponseType } from '../model';
import { IntrospectToken } from '../model';
import { Jwks } from '../model';
import { OidcSpec } from '../model';
//import { Scopes } from '../model';
import { TokenTypeHint } from '../model';
/**
 * TokenApi - axios parameter creator
 * @export
 */
export const TokenApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Displays a sign-in page where users of your application can authorize the application to access resources on their behalf.  Invoking this operation is the first step in authenticating users and retrieving an authorization code grant. The authorization code that is generated remains valid for 5 minutes, while the ID token stays valid for 60 minutes. Any access tokens you obtain are valid for 60 minutes, and refresh tokens remain valid for 15 days.  This operation has a rate limit of 500 calls per minute.  **Note:** This operation is intended for use with client-side applications only. It is not suitable for server-side applications.
         * @summary Authorize User
         * @param {string} clientId The Client ID of the calling application, as registered with APS.
         * @param {ResponseType} responseType The type of response you want to receive. Possible values are:   -  &#x60;&#x60;code&#x60;&#x60; - Authorization code grant. -  &#x60;&#x60;id_token&#x60;&#x60; - OpenID Connect ID token. 
         * @param {string} redirectUri The URI that APS redirects users to after they grant or deny access permission to the application. Must match the Callback URL for the application as registered with APS.  Must be specified as a URL-safe string. It can include query parameters or any other valid URL construct. 
         * @param {string} [nonce] A random string that is sent with the request. APS passes back the same string to you so that you can verify whether you received the same string that you sent. This check mitigates token replay attacks
         * @param {string} [state] A URL-encoded random string. The authorization flow will pass the same string back to the Callback URL using the &#x60;&#x60;state&#x60;&#x60; query string parameter. This process helps ensure that the callback you receive is a response to what you originally requested. It prevents malicious actors from forging requests.  The string can only contain alphanumeric characters, commas, periods, underscores, and hyphens.             
         * @param {string} [scope] A URL-encoded space-delimited list of requested scopes. See the &#x60;Developer\&#39;s Guide documentation on scopes &lt;/en/docs/oauth/v2/developers_guide/scopes/&gt;&#x60;_ for a list of valid values you can provide.  The string you specify for this parameter must not exceed 2000 characters and it cannot contain more than 50 scopes.  
         * @param {string} [responseMode] Specifies how the authorization response should be returned. Valid values are:  - &#x60;&#x60;fragment&#x60;&#x60; - Encode the response parameters in the fragment of the redirect URI. A fragment in a URI is the optional part of the URI that appears after a &#x60;&#x60;#&#x60;&#x60; symbol, which refers to a specific section within a resource. For example, &#x60;&#x60;section&#x60;&#x60; in &#x60;&#x60;https://www.mysite.org/myresource#section&#x60;&#x60;. - &#x60;&#x60;form_post&#x60;&#x60; - Embed the authorization response parameter in an HTML form. - &#x60;&#x60;query&#x60;&#x60; -  Embed the authorization response as a query string parameter of the redirect URI.   If &#x60;&#x60;id_token&#x60;&#x60; is stated as &#x60;&#x60;response_type&#x60;&#x60;,  only &#x60;&#x60;form_post&#x60;&#x60; is allowed as &#x60;&#x60;response_mode&#x60;&#x60;.\&#39; 
         * @param {string} [prompt] Specifies how to prompt users for authentication. Possible values are:   - &#x60;&#x60;login&#x60;&#x60; : Always prompt the user for authentication, regardless of the state of the login session.   **Note:** If you do not specify this parameter, the system will not prompt the user for authentication as long as a login session is active. If a login session is not active, the system will prompt the user for authentication. 
         * @param {string} [authoptions] A JSON object containing options that specify how to display the sign-in page. Refer the &#x60;Developer\&#39;s Guide documentation on AuthOptions &lt;/en/docs/oauth/v2/developers_guide/authoptions/&gt;&#x60;_ for supported values.
         * @param {string} [codeChallenge] A URL-encoded string derived from the code verifier sent in the authorization request with the Proof Key for Code Exchange (PKCE) grant flow.
         * @param {string} [codeChallengeMethod] The method used to derive the code challenge for the PKCE grant flow. Possible value is:  - &#x60;&#x60;S256&#x60;&#x60;- Hashes the code verifier using the SHA-256 algorithm and then applies Base64 URL encoding. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authorize: (/*accessToken: string*/ clientId: string, responseType: ResponseType, redirectUri: string, nonce?: string, state?: string, scope?: string, responseMode?: string, prompt?: string, authoptions?: string, codeChallenge?: string, codeChallengeMethod?: string): string => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('authorize', 'clientId', clientId)
            // verify required parameter 'responseType' is not null or undefined
            assertParamExists('authorize', 'responseType', responseType)
            // verify required parameter 'redirectUri' is not null or undefined
            assertParamExists('authorize', 'redirectUri', redirectUri)
            const localVarPath = `/authentication/v2/authorize`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarQueryParameter = {} as any;

            if (clientId !== undefined) {
                localVarQueryParameter['client_id'] = clientId;
            }

            if (responseType !== undefined) {
                localVarQueryParameter['response_type'] = responseType;
            }

            if (redirectUri !== undefined) {
                localVarQueryParameter['redirect_uri'] = redirectUri;
            }

            if (nonce !== undefined) {
                localVarQueryParameter['nonce'] = nonce;
            }

            if (state !== undefined) {
                localVarQueryParameter['state'] = state;
            }

            if (scope !== undefined) {
                localVarQueryParameter['scope'] = scope;
            }

            if (responseMode !== undefined) {
                localVarQueryParameter['response_mode'] = responseMode;
            }

            if (prompt !== undefined) {
                localVarQueryParameter['prompt'] = prompt;
            }

            if (authoptions !== undefined) {
                localVarQueryParameter['authoptions'] = authoptions;
            }

            if (codeChallenge !== undefined) {
                localVarQueryParameter['code_challenge'] = codeChallenge;
            }

            if (codeChallengeMethod !== undefined) {
                localVarQueryParameter['code_challenge_method'] = codeChallengeMethod;
            }

            setSearchParams(localVarUrlObj, localVarQueryParameter);

            return localVarUrlObj.toString();
        },
        /**
         * Returns an access token or refresh token.  * If `grant_type` is `authorization_code`, returns a 3-legged access token for authorization code grant.  * If `grant_type` is `client_credentials`, returns a 2-legged access token for client credentials grant. * If `grant_type` is `refresh_token`, returns new access token using the refresh token provided in the request.  Traditional Web Apps and Server-to-Server Apps should use the ``Authorization`` header with Basic Authentication for this operation. Desktop, Mobile, and Single-Page Apps should use ``client_id`` in the form body instead.  This operation has a rate limit of 500 calls per minute. 
         * @summary Acquire Token
         * @param {string} [authorization] Must be &#x60;&#x60;Bearer &lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; where &#x60;&#x60;&lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; is the Base64 encoding of the concatenated string &#x60;&#x60;&lt;CLIENT_ID&gt;:&lt;CLIENT_SECRET&gt;&#x60;&#x60;.\&#39;  **Note** This header is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. 
         * @param {GrantType} [grantType] 
         * @param {string} [code] The authorization code that was passed to your application when the user granted access permission to your application. It was passed as the &#x60;&#x60;code&#x60;&#x60; query parameter to the redirect URI when you called &#x60;Authorize User &lt;/en/docs/oauth/v2/reference/http/authorize-GET/&gt;&#x60;_.   Required if &#x60;grant_type&#x60; is &#x60;&#x60;authorization_code&#x60;&#x60;. 
         * @param {string} [redirectUri] The URI that APS redirects users to after they grant or deny access permission to the application. Must match the Callback URL for the application registered with APS.   Required if &#x60;grant_type&#x60; is &#x60;&#x60;authorization_code&#x60;&#x60;. 
         * @param {string} [codeVerifier] A random URL-encoded string between 43 characters and 128 characters. In a PKCE grant flow, the authentication server uses this string to verify the code challenge that was passed when you called &#x60;Authorize User &lt;/en/docs/oauth/v2/reference/http/authorize-GET/&gt;&#x60;_.    Required if &#x60;&#x60;grant_type&#x60;&#x60; is &#x60;authorization_code&#x60; and &#x60;&#x60;code_challenge&#x60;&#x60; was specified when you called &#x60;Authorize User &lt;/en/docs/oauth/v2/reference/http/authorize-GET/&gt;&#x60;_. 
         * @param {string} [refreshToken] The refresh token used to acquire a new access token and a refresh token.  Required if &#x60;&#x60;grant_type&#x60;&#x60; is &#x60;&#x60;refresh_token&#x60;&#x60;. 
         * @param {string} [scope] 
         * @param {string} [clientId] This field is required for public client
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchToken: async (/* accessToken: string, */ authorization?: string, grantType?: GrantType, code?: string, redirectUri?: string, codeVerifier?: string, refreshToken?: string, scope?: string, clientId?: string, options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/authentication/v2/token`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            // await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


            if (grantType !== undefined) {
                localVarFormParams.set('grant_type', grantType as any);
            }

            if (code !== undefined) {
                localVarFormParams.set('code', code as any);
            }

            if (redirectUri !== undefined) {
                localVarFormParams.set('redirect_uri', redirectUri as any);
            }

            if (codeVerifier !== undefined) {
                localVarFormParams.set('code_verifier', codeVerifier as any);
            }

            if (refreshToken !== undefined) {
                localVarFormParams.set('refresh_token', refreshToken as any);
            }

            if (scope !== undefined) {
                localVarFormParams.set('scope', scope as any);
            }

            if (clientId !== undefined) {
                localVarFormParams.set('client_id', clientId as any);
            }


            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a set of public keys in the JSON Web Key Set (JWKS) format.  Public keys returned by this operation can be used to validate the asymmetric JWT signature of an access token without making network calls. It can be used to validate both two-legged access tokens and three-legged access tokens.   See the Developer\'s Guide topic on `Asymmetric Signing </en/docs/oauth/v2/developers_guide/asymmetric-encryption/>`_ for more information.  
         * @summary Get JWKS
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getKeys: async (/* accessToken: string */ options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/authentication/v2/keys`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            //  await setBearerAuthToObject(localVarHeaderParameter, accessToken)



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns an OpenID Connect Discovery Specification compliant JSON document. It contains a list of the OpenID/OAuth endpoints, supported scopes, claims, public keys used to sign the tokens, and other details.
         * @summary Get OIDC Specification
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOidcSpec: async (/* accessToken: string,  */options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/.well-known/openid-configuration`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            //await setBearerAuthToObject(localVarHeaderParameter, accessToken)



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns metadata about the specified access token or reference token.  An application can only introspect its own tokens.  This operation has a rate limit of 500 calls per minute.
         * @summary Introspect Token
         * @param {string} [authorization] Must be &#x60;&#x60;Bearer &lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; where &#x60;&#x60;&lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; is the Base64 encoding of the concatenated string &#x60;&#x60;&lt;CLIENT_ID&gt;:&lt;CLIENT_SECRET&gt;&#x60;&#x60;.\&#39;  **Note** This header is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. 
         * @param {string} [token] The token to be introspected.
         * @param {string} [clientId] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        introspectToken: async (/* accessToken: string, */ authorization?: string, token?: string, clientId?: string, options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/authentication/v2/introspect`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            //  await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


            if (token !== undefined) {
                localVarFormParams.set('token', token as any);
            }

            if (clientId !== undefined) {
                localVarFormParams.set('client_id', clientId as any);
            }


            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Signs out the currently authenticated user from the APS authorization server. Thereafter, this operation redirects the user to the ``post_logout_redirect_uri``, or to the Autodesk Sign-in page when no ``post_logout_redirect_uri`` is provided.  This operation has a rate limit of 500 calls per minute. 
         * @summary Logout
         * @param {string} [postLogoutRedirectUri] The URI to redirect your users to once logout is performed. If you do not specify this parameter your users are redirected to the Autodesk Sign-in page.   **Note:**  You must provide a redirect URI that is pre-registered with APS. This precaution is taken to prevent unauthorized applications from hijacking the logout process. 
         * @param accessToken bearer access token
         * @throws {RequiredError}
         */
        logout: (/* accessToken: string, */ postLogoutRedirectUri?: string): string => {
            const localVarPath = `/authentication/v2/logout`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarQueryParameter = {} as any;         

            if (postLogoutRedirectUri !== undefined) {
                localVarQueryParameter['post_logout_redirect_uri'] = postLogoutRedirectUri;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);        
            return localVarUrlObj.toString();
        },
        /**
         * Revokes an active access token or refresh token.  An application can only revoke its own tokens.  This operation has a rate limit of 100 calls per minute.
         * @summary Revoke Token
         * @param {string} [authorization] Must be &#x60;&#x60;Bearer &lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; where &#x60;&#x60;&lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; is the Base64 encoding of the concatenated string &#x60;&#x60;&lt;CLIENT_ID&gt;:&lt;CLIENT_SECRET&gt;&#x60;&#x60;.\&#39;  **Note** This header is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. 
         * @param {string} [token] The token to be revoked.  
         * @param {TokenTypeHint} [tokenTypeHint] 
         * @param {string} [clientId] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revoke: async (/*accessToken: string,*/ authorization?: string, token?: string, tokenTypeHint?: TokenTypeHint, clientId?: string, options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/authentication/v2/revoke`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            // await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


            if (token !== undefined) {
                localVarFormParams.set('token', token as any);
            }

            if (tokenTypeHint !== undefined) {
                localVarFormParams.set('token_type_hint', tokenTypeHint as any);
            }

            if (clientId !== undefined) {
                localVarFormParams.set('client_id', clientId as any);
            }


            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TokenApi - functional programming interface
 * @export
 */
export const TokenApiFp = function (sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = TokenApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Displays a sign-in page where users of your application can authorize the application to access resources on their behalf.  Invoking this operation is the first step in authenticating users and retrieving an authorization code grant. The authorization code that is generated remains valid for 5 minutes, while the ID token stays valid for 60 minutes. Any access tokens you obtain are valid for 60 minutes, and refresh tokens remain valid for 15 days.  This operation has a rate limit of 500 calls per minute.  **Note:** This operation is intended for use with client-side applications only. It is not suitable for server-side applications.
         * @summary Authorize User
         * @param {string} clientId The Client ID of the calling application, as registered with APS.
         * @param {ResponseType} responseType The type of response you want to receive. Possible values are:   -  &#x60;&#x60;code&#x60;&#x60; - Authorization code grant. -  &#x60;&#x60;id_token&#x60;&#x60; - OpenID Connect ID token. 
         * @param {string} redirectUri The URI that APS redirects users to after they grant or deny access permission to the application. Must match the Callback URL for the application as registered with APS.  Must be specified as a URL-safe string. It can include query parameters or any other valid URL construct. 
         * @param {string} [nonce] A random string that is sent with the request. APS passes back the same string to you so that you can verify whether you received the same string that you sent. This check mitigates token replay attacks
         * @param {string} [state] A URL-encoded random string. The authorization flow will pass the same string back to the Callback URL using the &#x60;&#x60;state&#x60;&#x60; query string parameter. This process helps ensure that the callback you receive is a response to what you originally requested. It prevents malicious actors from forging requests.  The string can only contain alphanumeric characters, commas, periods, underscores, and hyphens.             
         * @param {string} [scope] A URL-encoded space-delimited list of requested scopes. See the &#x60;Developer\&#39;s Guide documentation on scopes &lt;/en/docs/oauth/v2/developers_guide/scopes/&gt;&#x60;_ for a list of valid values you can provide.  The string you specify for this parameter must not exceed 2000 characters and it cannot contain more than 50 scopes.  
         * @param {string} [responseMode] Specifies how the authorization response should be returned. Valid values are:  - &#x60;&#x60;fragment&#x60;&#x60; - Encode the response parameters in the fragment of the redirect URI. A fragment in a URI is the optional part of the URI that appears after a &#x60;&#x60;#&#x60;&#x60; symbol, which refers to a specific section within a resource. For example, &#x60;&#x60;section&#x60;&#x60; in &#x60;&#x60;https://www.mysite.org/myresource#section&#x60;&#x60;. - &#x60;&#x60;form_post&#x60;&#x60; - Embed the authorization response parameter in an HTML form. - &#x60;&#x60;query&#x60;&#x60; -  Embed the authorization response as a query string parameter of the redirect URI.   If &#x60;&#x60;id_token&#x60;&#x60; is stated as &#x60;&#x60;response_type&#x60;&#x60;,  only &#x60;&#x60;form_post&#x60;&#x60; is allowed as &#x60;&#x60;response_mode&#x60;&#x60;.\&#39; 
         * @param {string} [prompt] Specifies how to prompt users for authentication. Possible values are:   - &#x60;&#x60;login&#x60;&#x60; : Always prompt the user for authentication, regardless of the state of the login session.   **Note:** If you do not specify this parameter, the system will not prompt the user for authentication as long as a login session is active. If a login session is not active, the system will prompt the user for authentication. 
         * @param {string} [authoptions] A JSON object containing options that specify how to display the sign-in page. Refer the &#x60;Developer\&#39;s Guide documentation on AuthOptions &lt;/en/docs/oauth/v2/developers_guide/authoptions/&gt;&#x60;_ for supported values.
         * @param {string} [codeChallenge] A URL-encoded string derived from the code verifier sent in the authorization request with the Proof Key for Code Exchange (PKCE) grant flow.
         * @param {string} [codeChallengeMethod] The method used to derive the code challenge for the PKCE grant flow. Possible value is:  - &#x60;&#x60;S256&#x60;&#x60;- Hashes the code verifier using the SHA-256 algorithm and then applies Base64 URL encoding. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authorize(/* accessToken: string, */ clientId: string, responseType: ResponseType, redirectUri: string, state?: string, nonce?: string, scope?: string, responseMode?: string, prompt?: string, authoptions?: string, codeChallenge?: string, codeChallengeMethod?: string): string {
            const url = localVarAxiosParamCreator.authorize(/* accessToken, */ clientId, responseType, redirectUri, state, nonce, scope, responseMode, prompt, authoptions, codeChallenge, codeChallengeMethod);
            return url;
        },
        /**
         * Returns an access token or refresh token.  * If `grant_type` is `authorization_code`, returns a 3-legged access token for authorization code grant.  * If `grant_type` is `client_credentials`, returns a 2-legged access token for client credentials grant. * If `grant_type` is `refresh_token`, returns new access token using the refresh token provided in the request.  Traditional Web Apps and Server-to-Server Apps should use the ``Authorization`` header with Basic Authentication for this operation. Desktop, Mobile, and Single-Page Apps should use ``client_id`` in the form body instead.  This operation has a rate limit of 500 calls per minute. 
         * @summary Acquire Token
         * @param {string} [authorization] Must be &#x60;&#x60;Bearer &lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; where &#x60;&#x60;&lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; is the Base64 encoding of the concatenated string &#x60;&#x60;&lt;CLIENT_ID&gt;:&lt;CLIENT_SECRET&gt;&#x60;&#x60;.\&#39;  **Note** This header is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. 
         * @param {GrantType} [grantType] 
         * @param {string} [code] The authorization code that was passed to your application when the user granted access permission to your application. It was passed as the &#x60;&#x60;code&#x60;&#x60; query parameter to the redirect URI when you called &#x60;Authorize User &lt;/en/docs/oauth/v2/reference/http/authorize-GET/&gt;&#x60;_.   Required if &#x60;grant_type&#x60; is &#x60;&#x60;authorization_code&#x60;&#x60;. 
         * @param {string} [redirectUri] The URI that APS redirects users to after they grant or deny access permission to the application. Must match the Callback URL for the application registered with APS.   Required if &#x60;grant_type&#x60; is &#x60;&#x60;authorization_code&#x60;&#x60;. 
         * @param {string} [codeVerifier] A random URL-encoded string between 43 characters and 128 characters. In a PKCE grant flow, the authentication server uses this string to verify the code challenge that was passed when you called &#x60;Authorize User &lt;/en/docs/oauth/v2/reference/http/authorize-GET/&gt;&#x60;_.    Required if &#x60;&#x60;grant_type&#x60;&#x60; is &#x60;authorization_code&#x60; and &#x60;&#x60;code_challenge&#x60;&#x60; was specified when you called &#x60;Authorize User &lt;/en/docs/oauth/v2/reference/http/authorize-GET/&gt;&#x60;_. 
         * @param {string} [refreshToken] The refresh token used to acquire a new access token and a refresh token.  Required if &#x60;&#x60;grant_type&#x60;&#x60; is &#x60;&#x60;refresh_token&#x60;&#x60;. 
         * @param {string} [scope] 
         * @param {string} [clientId] This field is required for public client
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchToken(/* accessToken: string, */ authorization?: string, grantType?: GrantType, code?: string, redirectUri?: string, codeVerifier?: string, refreshToken?: string, scope?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchToken(/* accessToken, */ authorization, grantType, code, redirectUri, codeVerifier, refreshToken, scope, clientId, options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a set of public keys in the JSON Web Key Set (JWKS) format.  Public keys returned by this operation can be used to validate the asymmetric JWT signature of an access token without making network calls. It can be used to validate both two-legged access tokens and three-legged access tokens.   See the Developer\'s Guide topic on `Asymmetric Signing </en/docs/oauth/v2/developers_guide/asymmetric-encryption/>`_ for more information.  
         * @summary Get JWKS
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getKeys(/* accessToken: string,  */options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Jwks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getKeys(/* accessToken, */ options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns an OpenID Connect Discovery Specification compliant JSON document. It contains a list of the OpenID/OAuth endpoints, supported scopes, claims, public keys used to sign the tokens, and other details.
         * @summary Get OIDC Specification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOidcSpec(/* accessToken: string, */ options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OidcSpec>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOidcSpec(/* accessToken, */ options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns metadata about the specified access token or reference token.  An application can only introspect its own tokens.  This operation has a rate limit of 500 calls per minute.
         * @summary Introspect Token
         * @param {string} [authorization] Must be &#x60;&#x60;Bearer &lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; where &#x60;&#x60;&lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; is the Base64 encoding of the concatenated string &#x60;&#x60;&lt;CLIENT_ID&gt;:&lt;CLIENT_SECRET&gt;&#x60;&#x60;.\&#39;  **Note** This header is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. 
         * @param {string} [token] The token to be introspected.
         * @param {string} [clientId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async introspectToken(/* accessToken: string,  */authorization?: string, token?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IntrospectToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.introspectToken(/* accessToken, */ authorization, token, clientId, options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Signs out the currently authenticated user from the APS authorization server. Thereafter, this operation redirects the user to the ``post_logout_redirect_uri``, or to the Autodesk Sign-in page when no ``post_logout_redirect_uri`` is provided.  This operation has a rate limit of 500 calls per minute. 
         * @summary Logout
         * @param {string} [postLogoutRedirectUri] The URI to redirect your users to once logout is performed. If you do not specify this parameter your users are redirected to the Autodesk Sign-in page.   **Note:**  You must provide a redirect URI that is pre-registered with APS. This precaution is taken to prevent unauthorized applications from hijacking the logout process. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout(/* accessToken: string, */ postLogoutRedirectUri?: string): string {
            const url = localVarAxiosParamCreator.logout(/* accessToken, */ postLogoutRedirectUri);
            return url;
        },
        /**
         * Revokes an active access token or refresh token.  An application can only revoke its own tokens.  This operation has a rate limit of 100 calls per minute.
         * @summary Revoke Token
         * @param {string} [authorization] Must be &#x60;&#x60;Bearer &lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; where &#x60;&#x60;&lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; is the Base64 encoding of the concatenated string &#x60;&#x60;&lt;CLIENT_ID&gt;:&lt;CLIENT_SECRET&gt;&#x60;&#x60;.\&#39;  **Note** This header is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. 
         * @param {string} [token] The token to be revoked.  
         * @param {TokenTypeHint} [tokenTypeHint] 
         * @param {string} [clientId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async revoke(/* accessToken: string, */ token?: string, authorization?: string, tokenTypeHint?: TokenTypeHint, clientId?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.revoke(/* accessToken, */ token, authorization, tokenTypeHint, clientId, options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * TokenApi - interface
 * @export
 * @interface TokenApi
 */
export interface TokenApiInterface {
    /**
     * Displays a sign-in page where users of your application can authorize the application to access resources on their behalf.  Invoking this operation is the first step in authenticating users and retrieving an authorization code grant. The authorization code that is generated remains valid for 5 minutes, while the ID token stays valid for 60 minutes. Any access tokens you obtain are valid for 60 minutes, and refresh tokens remain valid for 15 days.  This operation has a rate limit of 500 calls per minute.  **Note:** This operation is intended for use with client-side applications only. It is not suitable for server-side applications.
     * @summary Authorize User
     * @param {string} clientId The Client ID of the calling application, as registered with APS.
     * @param {ResponseType} responseType The type of response you want to receive. Possible values are:   -  &#x60;&#x60;code&#x60;&#x60; - Authorization code grant. -  &#x60;&#x60;id_token&#x60;&#x60; - OpenID Connect ID token. 
     * @param {string} redirectUri The URI that APS redirects users to after they grant or deny access permission to the application. Must match the Callback URL for the application as registered with APS.  Must be specified as a URL-safe string. It can include query parameters or any other valid URL construct. 
     * @param {string} [nonce] A random string that is sent with the request. APS passes back the same string to you so that you can verify whether you received the same string that you sent. This check mitigates token replay attacks
     * @param {string} [state] A URL-encoded random string. The authorization flow will pass the same string back to the Callback URL using the &#x60;&#x60;state&#x60;&#x60; query string parameter. This process helps ensure that the callback you receive is a response to what you originally requested. It prevents malicious actors from forging requests.  The string can only contain alphanumeric characters, commas, periods, underscores, and hyphens.             
     * @param {string} [scope] A URL-encoded space-delimited list of requested scopes. See the &#x60;Developer\&#39;s Guide documentation on scopes &lt;/en/docs/oauth/v2/developers_guide/scopes/&gt;&#x60;_ for a list of valid values you can provide.  The string you specify for this parameter must not exceed 2000 characters and it cannot contain more than 50 scopes.  
     * @param {string} [responseMode] Specifies how the authorization response should be returned. Valid values are:  - &#x60;&#x60;fragment&#x60;&#x60; - Encode the response parameters in the fragment of the redirect URI. A fragment in a URI is the optional part of the URI that appears after a &#x60;&#x60;#&#x60;&#x60; symbol, which refers to a specific section within a resource. For example, &#x60;&#x60;section&#x60;&#x60; in &#x60;&#x60;https://www.mysite.org/myresource#section&#x60;&#x60;. - &#x60;&#x60;form_post&#x60;&#x60; - Embed the authorization response parameter in an HTML form. - &#x60;&#x60;query&#x60;&#x60; -  Embed the authorization response as a query string parameter of the redirect URI.   If &#x60;&#x60;id_token&#x60;&#x60; is stated as &#x60;&#x60;response_type&#x60;&#x60;,  only &#x60;&#x60;form_post&#x60;&#x60; is allowed as &#x60;&#x60;response_mode&#x60;&#x60;.\&#39; 
     * @param {string} [prompt] Specifies how to prompt users for authentication. Possible values are:   - &#x60;&#x60;login&#x60;&#x60; : Always prompt the user for authentication, regardless of the state of the login session.   **Note:** If you do not specify this parameter, the system will not prompt the user for authentication as long as a login session is active. If a login session is not active, the system will prompt the user for authentication. 
     * @param {string} [authoptions] A JSON object containing options that specify how to display the sign-in page. Refer the &#x60;Developer\&#39;s Guide documentation on AuthOptions &lt;/en/docs/oauth/v2/developers_guide/authoptions/&gt;&#x60;_ for supported values.
     * @param {string} [codeChallenge] A URL-encoded string derived from the code verifier sent in the authorization request with the Proof Key for Code Exchange (PKCE) grant flow.
     * @param {string} [codeChallengeMethod] The method used to derive the code challenge for the PKCE grant flow. Possible value is:  - &#x60;&#x60;S256&#x60;&#x60;- Hashes the code verifier using the SHA-256 algorithm and then applies Base64 URL encoding. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    authorize(/* accessToken: string, */clientId: string, responseType: ResponseType, redirectUri: string, state?: string, nonce?: string, scope?: string, responseMode?: string, prompt?: string, authoptions?: string, codeChallenge?: string, codeChallengeMethod?: string): string;


    /**
     * Returns an access token or refresh token.  * If `grant_type` is `authorization_code`, returns a 3-legged access token for authorization code grant.  * If `grant_type` is `client_credentials`, returns a 2-legged access token for client credentials grant. * If `grant_type` is `refresh_token`, returns new access token using the refresh token provided in the request.  Traditional Web Apps and Server-to-Server Apps should use the ``Authorization`` header with Basic Authentication for this operation. Desktop, Mobile, and Single-Page Apps should use ``client_id`` in the form body instead.  This operation has a rate limit of 500 calls per minute. 
     * @summary Acquire Token
     * @param {string} [authorization] Must be &#x60;&#x60;Bearer &lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; where &#x60;&#x60;&lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; is the Base64 encoding of the concatenated string &#x60;&#x60;&lt;CLIENT_ID&gt;:&lt;CLIENT_SECRET&gt;&#x60;&#x60;.\&#39;  **Note** This header is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. 
     * @param {GrantType} [grantType] 
     * @param {string} [code] The authorization code that was passed to your application when the user granted access permission to your application. It was passed as the &#x60;&#x60;code&#x60;&#x60; query parameter to the redirect URI when you called &#x60;Authorize User &lt;/en/docs/oauth/v2/reference/http/authorize-GET/&gt;&#x60;_.   Required if &#x60;grant_type&#x60; is &#x60;&#x60;authorization_code&#x60;&#x60;. 
     * @param {string} [redirectUri] The URI that APS redirects users to after they grant or deny access permission to the application. Must match the Callback URL for the application registered with APS.   Required if &#x60;grant_type&#x60; is &#x60;&#x60;authorization_code&#x60;&#x60;. 
     * @param {string} [codeVerifier] A random URL-encoded string between 43 characters and 128 characters. In a PKCE grant flow, the authentication server uses this string to verify the code challenge that was passed when you called &#x60;Authorize User &lt;/en/docs/oauth/v2/reference/http/authorize-GET/&gt;&#x60;_.    Required if &#x60;&#x60;grant_type&#x60;&#x60; is &#x60;authorization_code&#x60; and &#x60;&#x60;code_challenge&#x60;&#x60; was specified when you called &#x60;Authorize User &lt;/en/docs/oauth/v2/reference/http/authorize-GET/&gt;&#x60;_. 
     * @param {string} [refreshToken] The refresh token used to acquire a new access token and a refresh token.  Required if &#x60;&#x60;grant_type&#x60;&#x60; is &#x60;&#x60;refresh_token&#x60;&#x60;. 
     * @param {string} [scope] 
     * @param {string} [clientId] This field is required for public client
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    fetchToken(/* accessToken: string, */authorization?: string, grantType?: GrantType, code?: string, redirectUri?: string, codeVerifier?: string, refreshToken?: string, scope?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a set of public keys in the JSON Web Key Set (JWKS) format.  Public keys returned by this operation can be used to validate the asymmetric JWT signature of an access token without making network calls. It can be used to validate both two-legged access tokens and three-legged access tokens.   See the Developer\'s Guide topic on `Asymmetric Signing </en/docs/oauth/v2/developers_guide/asymmetric-encryption/>`_ for more information.  
     * @summary Get JWKS
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    getKeys(/* accessToken: string, */ options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns an OpenID Connect Discovery Specification compliant JSON document. It contains a list of the OpenID/OAuth endpoints, supported scopes, claims, public keys used to sign the tokens, and other details.
     * @summary Get OIDC Specification
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    getOidcSpec(/* accessToken: string,  */options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns metadata about the specified access token or reference token.  An application can only introspect its own tokens.  This operation has a rate limit of 500 calls per minute.
     * @summary Introspect Token
     * @param {string} [authorization] Must be &#x60;&#x60;Bearer &lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; where &#x60;&#x60;&lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; is the Base64 encoding of the concatenated string &#x60;&#x60;&lt;CLIENT_ID&gt;:&lt;CLIENT_SECRET&gt;&#x60;&#x60;.\&#39;  **Note** This header is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. 
     * @param {string} [token] The token to be introspected.
     * @param {string} [clientId] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    introspectToken(/* accessToken: string,  */authorization?: string, token?: string, clientId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Signs out the currently authenticated user from the APS authorization server. Thereafter, this operation redirects the user to the ``post_logout_redirect_uri``, or to the Autodesk Sign-in page when no ``post_logout_redirect_uri`` is provided.  This operation has a rate limit of 500 calls per minute. 
     * @summary Logout
     * @param {string} [postLogoutRedirectUri] The URI to redirect your users to once logout is performed. If you do not specify this parameter your users are redirected to the Autodesk Sign-in page.   **Note:**  You must provide a redirect URI that is pre-registered with APS. This precaution is taken to prevent unauthorized applications from hijacking the logout process. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    logout(/* accessToken: string, */ postLogoutRedirectUri?: string, options?: ApsServiceRequestConfig): string;

    /**
     * Revokes an active access token or refresh token.  An application can only revoke its own tokens.  This operation has a rate limit of 100 calls per minute.
     * @summary Revoke Token
     * @param {string} [authorization] Must be &#x60;&#x60;Bearer &lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; where &#x60;&#x60;&lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; is the Base64 encoding of the concatenated string &#x60;&#x60;&lt;CLIENT_ID&gt;:&lt;CLIENT_SECRET&gt;&#x60;&#x60;.\&#39;  **Note** This header is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. 
     * @param {string} [token] The token to be revoked.  
     * @param {TokenTypeHint} [tokenTypeHint] 
     * @param {string} [clientId] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    revoke(/* accessToken: string, */ token?: string, authorization?: string, tokenTypeHint?: TokenTypeHint, clientId?: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * TokenApi - object-oriented interface
 * @export
 * @class TokenApi
 * @extends {BaseApi}
 */
export class TokenApi extends BaseApi implements TokenApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Displays a sign-in page where users of your application can authorize the application to access resources on their behalf.  Invoking this operation is the first step in authenticating users and retrieving an authorization code grant. The authorization code that is generated remains valid for 5 minutes, while the ID token stays valid for 60 minutes. Any access tokens you obtain are valid for 60 minutes, and refresh tokens remain valid for 15 days.  This operation has a rate limit of 500 calls per minute.  **Note:** This operation is intended for use with client-side applications only. It is not suitable for server-side applications.
     * @summary Authorize User
     * @param {string} clientId The Client ID of the calling application, as registered with APS.
     * @param {ResponseType} responseType The type of response you want to receive. Possible values are:   -  &#x60;&#x60;code&#x60;&#x60; - Authorization code grant. -  &#x60;&#x60;id_token&#x60;&#x60; - OpenID Connect ID token. 
     * @param {string} redirectUri The URI that APS redirects users to after they grant or deny access permission to the application. Must match the Callback URL for the application as registered with APS.  Must be specified as a URL-safe string. It can include query parameters or any other valid URL construct. 
     * @param {string} [nonce] A random string that is sent with the request. APS passes back the same string to you so that you can verify whether you received the same string that you sent. This check mitigates token replay attacks
     * @param {string} [state] A URL-encoded random string. The authorization flow will pass the same string back to the Callback URL using the &#x60;&#x60;state&#x60;&#x60; query string parameter. This process helps ensure that the callback you receive is a response to what you originally requested. It prevents malicious actors from forging requests.  The string can only contain alphanumeric characters, commas, periods, underscores, and hyphens.             
     * @param {string} [scope] A URL-encoded space-delimited list of requested scopes. See the &#x60;Developer\&#39;s Guide documentation on scopes &lt;/en/docs/oauth/v2/developers_guide/scopes/&gt;&#x60;_ for a list of valid values you can provide.  The string you specify for this parameter must not exceed 2000 characters and it cannot contain more than 50 scopes.  
     * @param {string} [responseMode] Specifies how the authorization response should be returned. Valid values are:  - &#x60;&#x60;fragment&#x60;&#x60; - Encode the response parameters in the fragment of the redirect URI. A fragment in a URI is the optional part of the URI that appears after a &#x60;&#x60;#&#x60;&#x60; symbol, which refers to a specific section within a resource. For example, &#x60;&#x60;section&#x60;&#x60; in &#x60;&#x60;https://www.mysite.org/myresource#section&#x60;&#x60;. - &#x60;&#x60;form_post&#x60;&#x60; - Embed the authorization response parameter in an HTML form. - &#x60;&#x60;query&#x60;&#x60; -  Embed the authorization response as a query string parameter of the redirect URI.   If &#x60;&#x60;id_token&#x60;&#x60; is stated as &#x60;&#x60;response_type&#x60;&#x60;,  only &#x60;&#x60;form_post&#x60;&#x60; is allowed as &#x60;&#x60;response_mode&#x60;&#x60;.\&#39; 
     * @param {string} [prompt] Specifies how to prompt users for authentication. Possible values are:   - &#x60;&#x60;login&#x60;&#x60; : Always prompt the user for authentication, regardless of the state of the login session.   **Note:** If you do not specify this parameter, the system will not prompt the user for authentication as long as a login session is active. If a login session is not active, the system will prompt the user for authentication. 
     * @param {string} [authoptions] A JSON object containing options that specify how to display the sign-in page. Refer the &#x60;Developer\&#39;s Guide documentation on AuthOptions &lt;/en/docs/oauth/v2/developers_guide/authoptions/&gt;&#x60;_ for supported values.
     * @param {string} [codeChallenge] A URL-encoded string derived from the code verifier sent in the authorization request with the Proof Key for Code Exchange (PKCE) grant flow.
     * @param {string} [codeChallengeMethod] The method used to derive the code challenge for the PKCE grant flow. Possible value is:  - &#x60;&#x60;S256&#x60;&#x60;- Hashes the code verifier using the SHA-256 algorithm and then applies Base64 URL encoding. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public authorize(/* accessToken: string, */ clientId: string, responseType: ResponseType, redirectUri: string, state?: string, nonce?: string, scope?: string, responseMode?: string, prompt?: string, authoptions?: string, codeChallenge?: string, codeChallengeMethod?: string) {
        this.logger.logInfo("Entered into authorize ");
        try {
            const url = TokenApiFp(this.sdkManager).authorize(/* accessToken, */ clientId, responseType, redirectUri, state, nonce, scope, responseMode, prompt, authoptions, codeChallenge, codeChallengeMethod);
            this.logger.logInfo('authorize Request completed successfully with status code');
            return url;
        } catch (error) {
            this.logger.logError(`authorize Request failed with error : ${error}`);
            throw new AuthenticationApiError(`authorize  failed with error : ${error}`);

        }
    }

    /**
     * Returns an access token or refresh token.  * If `grant_type` is `authorization_code`, returns a 3-legged access token for authorization code grant.  * If `grant_type` is `client_credentials`, returns a 2-legged access token for client credentials grant. * If `grant_type` is `refresh_token`, returns new access token using the refresh token provided in the request.  Traditional Web Apps and Server-to-Server Apps should use the ``Authorization`` header with Basic Authentication for this operation. Desktop, Mobile, and Single-Page Apps should use ``client_id`` in the form body instead.  This operation has a rate limit of 500 calls per minute. 
     * @summary Acquire Token
     * @param {string} [authorization] Must be &#x60;&#x60;Bearer &lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; where &#x60;&#x60;&lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; is the Base64 encoding of the concatenated string &#x60;&#x60;&lt;CLIENT_ID&gt;:&lt;CLIENT_SECRET&gt;&#x60;&#x60;.\&#39;  **Note** This header is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. 
     * @param {GrantType} [grantType] 
     * @param {string} [code] The authorization code that was passed to your application when the user granted access permission to your application. It was passed as the &#x60;&#x60;code&#x60;&#x60; query parameter to the redirect URI when you called &#x60;Authorize User &lt;/en/docs/oauth/v2/reference/http/authorize-GET/&gt;&#x60;_.   Required if &#x60;grant_type&#x60; is &#x60;&#x60;authorization_code&#x60;&#x60;. 
     * @param {string} [redirectUri] The URI that APS redirects users to after they grant or deny access permission to the application. Must match the Callback URL for the application registered with APS.   Required if &#x60;grant_type&#x60; is &#x60;&#x60;authorization_code&#x60;&#x60;. 
     * @param {string} [codeVerifier] A random URL-encoded string between 43 characters and 128 characters. In a PKCE grant flow, the authentication server uses this string to verify the code challenge that was passed when you called &#x60;Authorize User &lt;/en/docs/oauth/v2/reference/http/authorize-GET/&gt;&#x60;_.    Required if &#x60;&#x60;grant_type&#x60;&#x60; is &#x60;authorization_code&#x60; and &#x60;&#x60;code_challenge&#x60;&#x60; was specified when you called &#x60;Authorize User &lt;/en/docs/oauth/v2/reference/http/authorize-GET/&gt;&#x60;_. 
     * @param {string} [refreshToken] The refresh token used to acquire a new access token and a refresh token.  Required if &#x60;&#x60;grant_type&#x60;&#x60; is &#x60;&#x60;refresh_token&#x60;&#x60;. 
     * @param {string} [scope] 
     * @param {string} [clientId] This field is required for public client
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public async fetchToken(/* accessToken: string, */ authorization?: string, grantType?: GrantType, code?: string, redirectUri?: string, codeVerifier?: string, refreshToken?: string, scope?: string, clientId?: string, options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into fetchToken ");
        try {
            const request = await TokenApiFp(this.sdkManager).fetchToken(/* accessToken, */ authorization, grantType, code, redirectUri, codeVerifier, refreshToken, scope, clientId, options);
            const response = await request(this.axios);
            this.logger.logInfo(`fetchToken Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response.data);
        } catch (error) {
            if (error.response) {
                this.logger.logError(`fetchToken Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                throw new AuthenticationApiError(`fetchToken Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
            } else if (error.request) {
                this.logger.logError(`fetchToken Request failed with no response received: ${error.request}`);
                throw new AuthenticationApiError(`fetchToken Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }

    /**
     * Returns a set of public keys in the JSON Web Key Set (JWKS) format.  Public keys returned by this operation can be used to validate the asymmetric JWT signature of an access token without making network calls. It can be used to validate both two-legged access tokens and three-legged access tokens.   See the Developer\'s Guide topic on `Asymmetric Signing </en/docs/oauth/v2/developers_guide/asymmetric-encryption/>`_ for more information.  
     * @summary Get JWKS
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public async getKeys(/* accessToken: string, */ options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into getKeys ");
        try {
            const request = await TokenApiFp(this.sdkManager).getKeys(/* accessToken, */ options);
            const response = await request(this.axios);
            this.logger.logInfo(`getKeys Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response.data);
        } catch (error) {
            if (error.response) {
                this.logger.logError(`getKeys Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                throw new AuthenticationApiError(`getKeys Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
            } else if (error.request) {
                this.logger.logError(`getKeys Request failed with no response received: ${error.request}`);
                throw new AuthenticationApiError(`getKeys Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }

    /**
     * Returns an OpenID Connect Discovery Specification compliant JSON document. It contains a list of the OpenID/OAuth endpoints, supported scopes, claims, public keys used to sign the tokens, and other details.
     * @summary Get OIDC Specification
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public async getOidcSpec(/* accessToken: string, */ options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into getOidcSpec ");
        try {
            const request = await TokenApiFp(this.sdkManager).getOidcSpec(/* accessToken, */ options);
            const response = await request(this.axios);
            this.logger.logInfo(`getOidcSpec Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response.data);
        } catch (error) {
            if (error.response) {
                this.logger.logError(`getOidcSpec Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                throw new AuthenticationApiError(`getOidcSpec Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
            } else if (error.request) {
                this.logger.logError(`getOidcSpec Request failed with no response received: ${error.request}`);
                throw new AuthenticationApiError(`getOidcSpec Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }

    /**
     * Returns metadata about the specified access token or reference token.  An application can only introspect its own tokens.  This operation has a rate limit of 500 calls per minute.
     * @summary Introspect Token
     * @param {string} [authorization] Must be &#x60;&#x60;Bearer &lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; where &#x60;&#x60;&lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; is the Base64 encoding of the concatenated string &#x60;&#x60;&lt;CLIENT_ID&gt;:&lt;CLIENT_SECRET&gt;&#x60;&#x60;.\&#39;  **Note** This header is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. 
     * @param {string} [token] The token to be introspected.
     * @param {string} [clientId] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public async introspectToken(/* accessToken: string, */ authorization?: string, token?: string, clientId?: string, options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into introspectToken ");
        try {
            const request = await TokenApiFp(this.sdkManager).introspectToken(/* accessToken, */ authorization, token, clientId, options);
            const response = await request(this.axios);
            this.logger.logInfo(`introspectToken Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response.data);
        } catch (error) {
            if (error.response) {
                this.logger.logError(`introspectToken Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                throw new AuthenticationApiError(`introspectToken Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
            } else if (error.request) {
                this.logger.logError(`introspectToken Request failed with no response received: ${error.request}`);
                throw new AuthenticationApiError(`introspectToken Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }

    /**
     * Signs out the currently authenticated user from the APS authorization server. Thereafter, this operation redirects the user to the ``post_logout_redirect_uri``, or to the Autodesk Sign-in page when no ``post_logout_redirect_uri`` is provided.  This operation has a rate limit of 500 calls per minute. 
     * @summary Logout
     * @param {string} [postLogoutRedirectUri] The URI to redirect your users to once logout is performed. If you do not specify this parameter your users are redirected to the Autodesk Sign-in page.   **Note:**  You must provide a redirect URI that is pre-registered with APS. This precaution is taken to prevent unauthorized applications from hijacking the logout process. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public logout(/* accessToken: string,  */postLogoutRedirectUri?: string) {
        this.logger.logInfo("Entered into logout ");
        try {
            const url = TokenApiFp(this.sdkManager).logout(/* accessToken, */ postLogoutRedirectUri);
            this.logger.logInfo("logout Request completed successfully");
            return url;
        } catch (error) {
            this.logger.logError(`logout Request failed with error ${error}`);
            throw new AuthenticationApiError(`logout Request failed with error ${error}`);
        }
    }

    /**
     * Revokes an active access token or refresh token.  An application can only revoke its own tokens.  This operation has a rate limit of 100 calls per minute.
     * @summary Revoke Token
     * @param {string} [authorization] Must be &#x60;&#x60;Bearer &lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; where &#x60;&#x60;&lt;BASE64_ENCODED_STRING&gt;&#x60;&#x60; is the Base64 encoding of the concatenated string &#x60;&#x60;&lt;CLIENT_ID&gt;:&lt;CLIENT_SECRET&gt;&#x60;&#x60;.\&#39;  **Note** This header is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. 
     * @param {string} [token] The token to be revoked.  
     * @param {TokenTypeHint} [tokenTypeHint] 
     * @param {string} [clientId] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public async revoke(/* accessToken: string, */ token?: string, authorization?: string, tokenTypeHint?: TokenTypeHint, clientId?: string, options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into revoke ");
        try {
            const request = await TokenApiFp(this.sdkManager).revoke(/* accessToken, */ token, authorization, tokenTypeHint, clientId, options);
            const response = await request(this.axios);
            this.logger.logInfo(`revoke Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response);
        } catch (error) {
            if (error.response) {
                this.logger.logError(`revoke Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                throw new AuthenticationApiError(`revoke Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
            } else if (error.request) {
                this.logger.logError(`revoke Request failed with no response received: ${error.request}`);
                throw new AuthenticationApiError(`revoke Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }
}

