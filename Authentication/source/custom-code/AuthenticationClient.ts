import { ApiResponse, ApsServiceRequestConfig, SdkManager } from "@aps_sdk/autodesk-sdkmanager";
import { TokenApi, UsersApi } from "../api";
import { GrantType, IntrospectToken, Jwks, OidcSpec, ResponseType, Scopes, ThreeLeggedToken, TokenTypeHint, TwoLeggedToken, UserInfo } from "../model";



export class AuthenticationClient {
    public tokenApi: TokenApi;
    public usersApi: UsersApi


    constructor(sdkManager: SdkManager) {
        this.tokenApi = new TokenApi(sdkManager);
        this.usersApi = new UsersApi(sdkManager);
    }

    //#region  UsersApi

    /**
         * Retrieves information for the authenticated user. Only supports 3-legged access tokens.
         * @summary Get User Info
         * @param {string} authorization The three legged access token.
         * @param {*} [options] Override http request option.
     */
    public async getUserInfo(authorization: string, optionalArgs?: { options?: ApsServiceRequestConfig }): Promise<UserInfo> {
        const response = await this.usersApi.getUserInfo(authorization, optionalArgs?.options);
        return response.content;
    }

    //#endregion UsersApi


    //#region TokenApi
    /**
         * Returns a two legged access token. 
         * @summary Get two legged token.
         * @param {string} clientId The Client Id of the application making the request. 
         * @param {string} clientSecret The Client secret of the application making the request. 
         * @param {Array<Scopes>} scopes Array of scopes. Supported values: 1. device_sso 2. All scopes mentioned in [Forge Developers Guide](https://forge.autodesk.com/en/docs/oauth/v3/developers_guide/scopes/).         
         * @param {*} [options] Override http request option.     
         * @returns {TwoleggedToken} Two legged access token.
     */
    public async getTwoLeggedToken(clientId: string, clientSecret: string, scopes: Array<Scopes>, optionalArgs?: { options?: ApsServiceRequestConfig }): Promise<TwoLeggedToken> {
        const clientIDSecret = Buffer.from(`${clientId}:${clientSecret}`).toString(`base64`);
        const response = await this.tokenApi.fetchToken(`Basic ${clientIDSecret}`, GrantType.ClientCredentials, undefined, undefined, undefined, undefined, scopes, undefined, optionalArgs?.options);
        return new TwoLeggedToken(response.content);
    }


    /**
     * Returns a browser URL to redirect an end user in order to acquire the user’s consent to authorize the application to access resources on their behalf.  Invoking this operation is the first step in authenticating users and retrieving an authorization code grant. The authorization code that is generated remains valid for 5 minutes, while the ID token stays valid for 60 minutes. Any access tokens you obtain are valid for 60 minutes, and refresh tokens remain valid for 15 days.  This operation has a rate limit of 500 calls per minute.  **Note:** This operation is intended for use with client-side applications only. It is not suitable for server-side applications.
     * @summary Get Authorise URL.
     * @param {string} clientId The Client Id of the application making the request. 
     * @param {ResponseType} responseType Must be &#x60;code&#x60; for authorization code grant, &#x60;id_token&#x60; for an OpenID Connect ID token.
     * @param {string} redirectUri URL-encoded callback URL.
     * @param {Array<Scopes>} scopes Array of scopes. Supported values: 1. device_sso 2. All scopes mentioned in [Forge Developers Guide](https://forge.autodesk.com/en/docs/oauth/v3/developers_guide/scopes/).
     * @param {string} [state] The payload that authorization flow will pass back verbatim in state query parameter to the callback URL. It can contain alphanumeric, comma, period, underscore, and hyphen characters.
     * @param {string} [nonce] A string value used to associate a Client session with an ID Token, and to mitigate replay attacks. Required if &#x60;response_type&#x60; is &#x60;id_token&#x60; or &#x60;token&#x60;
     * @param {string} [responseMode] The mode of response for the supplied &#x60;response_type&#x60;. Supported values are &#x60;fragment&#x60;, &#x60;form_post&#x60; or &#x60;query&#x60;. &#x60;query&#x60; is not supported if the &#x60;response_type&#x60; is &#x60;token&#x60;.
     * @param {string} [prompt] Values supported: &#x60;login&#x60; and &#x60;none&#x60;. &#x60;login&#x60;: Always prompt the user for authentication, regardless of the login session. &#x60;prompt&#x60;: Do not prompt user for authentication. If user is not logged in, the calling application receives an error.
     * @param {string} [authoptions] A Json object carries information to Identity.
     * @param {string} [codeChallenge] A challenge for PKCE. The challenge is verified in the access token request.
     * @param {string} [codeChallengeMethod] Method used to derive the code challenge for PKCE. Must be S256 if &#x60;code_challenge&#x60; is present.
     * @returns {string} Returns the authorize URL.
    */

    public authorize(clientId: string, responseType: ResponseType, redirectUri: string, scopes: Array<Scopes>, optionalArgs?: { state?: string, nonce?: string, responseMode?: string, prompt?: string, authoptions?: string, codeChallenge?: string, codeChallengeMethod?: string }): string {
        const url = this.tokenApi.authorize(clientId, responseType, redirectUri, optionalArgs?.state, optionalArgs?.nonce, scopes, optionalArgs?.responseMode, optionalArgs?.prompt, optionalArgs?.authoptions, optionalArgs?.codeChallenge, optionalArgs?.codeChallengeMethod);
        return url;
    }



    /**
      * Returns a three Legged access token. 
      * For Private clients specify the client secret along with the Client ID. 
      * For Public clients only Client ID needs to be specified.         
      * @summary Get Three legged token.
      * @param {string} clientId The Client Id of the application making the request. 
      * @param {string} code The authorization code that was passed to your application when the user granted access permission to your application. It was passed as the &#x60;&#x60;code&#x60;&#x60; query parameter to the redirect URI when you called &#x60;Authorize User &lt;/en/docs/oauth/v2/reference/http/authorize-GET/&gt;&#x60;_.  
      * @param {string} redirectUri The URI that APS redirects users to after they grant or deny access permission to the application. Must match the Callback URL for the application registered with APS.   
      * @param {string} [clientSecret] The Client secret of the application making the request. Required only for private clients
      * @param {string} [codeVerifier] A random URL-encoded string between 43 characters and 128 characters. In a PKCE grant flow, the authentication server uses this string to verify the code challenge that was passed when you called &#x60;Authorize User &lt;/en/docs/oauth/v2/reference/http/authorize-GET/&gt;&#x60;_.   
      * @param {*} [options] Override http request option.    
      * @returns {ThreeleggedToken} Three legged access token
    */
    public async getThreeLeggedToken(clientId: string, code: string, redirect_uri: string, optionalArgs?: { clientSecret?: string, code_verifier?: string, options?: ApsServiceRequestConfig }): Promise<ThreeLeggedToken> {
        if (optionalArgs?.clientSecret) {
            const clientIDSecret = Buffer.from(`${clientId}:${optionalArgs?.clientSecret}`).toString(`base64`);
            const response = await this.tokenApi.fetchToken(`Basic ${clientIDSecret}`, GrantType.AuthorizationCode, code, redirect_uri, optionalArgs?.code_verifier, undefined, undefined, undefined, optionalArgs?.options);
            return new ThreeLeggedToken(response.content);
        }
        else {
            const response = await this.tokenApi.fetchToken(undefined, GrantType.AuthorizationCode, code, redirect_uri, optionalArgs?.code_verifier, undefined, undefined, clientId, optionalArgs?.options);
            return new ThreeLeggedToken(response.content);
        }

    }




    /**
      * Returns new access token using the refresh token provided in the request.
      * For Private clients specify the client secret along with the Client ID. 
      * For Public clients only Client ID needs to be specified.         
      * @summary Refresh token.
      * @param {string} clientId The Client Id of the application making the request. 
      * @param {string} refreshToken The refresh token used to acquire a new access token and a refresh token.
      * @param {string} [clientSecret] The Client secret of the application making the request. This field is required for client secret
      * @param {Array<Scopes>} [scopes] Array of scopes. If specified, scopes have to be primarily same with or a subset of the scopes used to generate the refresh_token.
      * @param {*} [options] Override http request option.     
      * @returns {ThreeLeggedToken} Refreshed three legged access token.
    */
    public async refreshToken(clientId: string, refreshToken: string, optionalArgs?: { clientSecret?: string, scopes?: Array<Scopes>, options?: ApsServiceRequestConfig }): Promise<ThreeLeggedToken> {
        if (optionalArgs?.clientSecret) {
            const clientIDSecret = Buffer.from(`${clientId}:${optionalArgs?.clientSecret}`).toString(`base64`);
            const response = await this.tokenApi.fetchToken(`Basic ${clientIDSecret}`, GrantType.RefreshToken, undefined, undefined, undefined, refreshToken, optionalArgs?.scopes, undefined, optionalArgs?.options);
            return new ThreeLeggedToken(response.content);
        }
        else {
            const response = await this.tokenApi.fetchToken(undefined, GrantType.RefreshToken, undefined, undefined, undefined, refreshToken, optionalArgs?.scopes, clientId, optionalArgs?.options);
            return new ThreeLeggedToken(response.content);
        }

    }


    /**
     * Returns a set of public keys in the JSON Web Key Set (JWKS) format.  Public keys returned by this operation can be used to validate the asymmetric JWT signature of an access token without making network calls. It can be used to validate both two-legged access tokens and three-legged access tokens.   See the Developer\'s Guide topic on `Asymmetric Signing </en/docs/oauth/v2/developers_guide/asymmetric-encryption/>`_ for more information.  
     * @summary Get JWKS
     * @param {*} [options] Override http request option.  
     * @returns {Jwks} JSON Web Key Set.
    */
    public async getKeys(optionalArgs?: { options?: ApsServiceRequestConfig }): Promise<Jwks> {
        const response = await this.tokenApi.getKeys(optionalArgs?.options);
        return response.content;
    }



    /**
        * Returns an OpenID Connect Discovery Specification compliant JSON document. It contains a list of the OpenID/OAuth endpoints, supported scopes, claims, public keys used to sign the tokens, and other details.
        * @summary Get OIDC Specification
        * @param {*} [options] Override http request option.  
        * @returns {OidcSpec}      
    */
    public async getOidcSpec(optionalArgs?: { options?: ApsServiceRequestConfig }): Promise<OidcSpec> {
        const response = await this.tokenApi.getOidcSpec(optionalArgs?.options);
        return response.content;
    }


    /**
       * Returns metadata about the specified access token or reference token.  An application can only introspect its own tokens.  This operation has a rate limit of 500 calls per minute.
       * @summary Introspect Token
       * @param {string} token The token to be introspected.
       * @param {string} clientId The Client Id of the application making the request. 
       * @param {string} [clientSecret] The Client secret of the application making the request. Only required for private clients.
       * @param {*} [options] Override http request option.    
    * @returns {IntrospectToken}
    */
    public async introspectToken(token: string, clientId: string, optionalArgs?: { clientSecret?: string, options?: ApsServiceRequestConfig }): Promise<IntrospectToken> {
        if (optionalArgs?.clientSecret) {
            // Private client
            const clientIDSecret = Buffer.from(`${clientId}:${optionalArgs?.clientSecret}`).toString(`base64`);
            const response = await this.tokenApi.introspectToken(`Basic ${clientIDSecret}`, token, undefined, optionalArgs?.options);
            return response.content;
        }
        else {
            //public client
            const response = await this.tokenApi.introspectToken(undefined, token, clientId, optionalArgs?.options);
            return response.content;
        }
    }


    /**
     * Signs out the currently authenticated user from the APS authorization server. Thereafter, this operation redirects the user to the ``post_logout_redirect_uri``, or to the Autodesk Sign-in page when no ``post_logout_redirect_uri`` is provided.  This operation has a rate limit of 500 calls per minute. 
     * @summary Logout
     * @param {string} [postLogoutRedirectUri] The URI to redirect your users to once logout is performed. If you do not specify this parameter your users are redirected to the Autodesk Sign-in page.   **Note:**  You must provide a redirect URI that is pre-registered with APS. This precaution is taken to prevent unauthorized applications from hijacking the logout process. 
    */
    public logout(optionalArgs?: { postLogoutRedirectUri?: string }): string {
        const logoutUrl = this.tokenApi.logout(optionalArgs?.postLogoutRedirectUri);
        return logoutUrl;
    }



    /**
       * Revokes an active access token or refresh token.  An application can only revoke its own tokens.  This operation has a rate limit of 100 calls per minute.
       * @summary Revoke Token
       * @param {string} token The token to be revoked.
       * @param {string} clientId The Client Id of the application making the request.
       * @param {TokenTypeHint} tokenTypeHint Should be either \\\&#39;access_token\\\&#39;, \\\&#39;refresh_token\\\&#39; or \\\&#39;device_secret\\\&#39;.
       * @param {string} [clientSecret] The Client secret of the application making the request. Only required for private clients.
       * @param {*} [options] Override http request option. 
    */

    public async revoke(token: string, clientId: string, tokenTypeHint: TokenTypeHint, optionalArgs?: { clientSecret?: string, options?: ApsServiceRequestConfig }): Promise<ApiResponse> {
        if (optionalArgs?.clientSecret) { // request is for private client 
            const clientIDSecret = Buffer.from(`${clientId}:${optionalArgs?.clientSecret}`).toString(`base64`);
            const response = await this.tokenApi.revoke(token, tokenTypeHint, `Basic ${clientIDSecret}`, undefined, optionalArgs?.options);
            return response;
        }
        else {
            const response = await this.tokenApi.revoke(token, tokenTypeHint, undefined, clientId, optionalArgs?.options);
            return response;
        }
    }

    //#endregion TokenApi



}