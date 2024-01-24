var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TokenApi, UsersApi } from "../api";
import { GrantType } from "../model";
export class AuthenticationClient {
    constructor(sdkManager) {
        this.tokenApi = new TokenApi(sdkManager);
        this.usersApi = new UsersApi(sdkManager);
    }
    //#region  UsersApi
    /**
         * Retrieves basic information for the given authenticated user. Only supports 3-legged access tokens.
         * @summary GET User Info
         * @param {string} [authorization] YOUR_3_LEGGED_ACCESS_TOKEN
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
     */
    getUserinfoAsync(authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.usersApi.getUserinfo(`Bearer ${authorization}`);
            return response.content;
        });
    }
    //#endregion UsersApi
    //#region TokenApi
    /**
         * Returns a 2-legged access token.
         * @summary getTwoLeggedTokenAsync
         * @param {string} [clientId] This field is required for client ID
         * @param {string} [clientSecret] This field is required for client secret
         * @param {Scopes} [scope]
         * @returns {TwoleggedToken} Two Legged access token
     */
    getTwoLeggedTokenAsync(clientId, clientSecret, scopes) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientIDSecret = Buffer.from(`${clientId}:${clientSecret}`).toString(`base64`);
            const strscopes = scopes.join(' ');
            const response = yield this.tokenApi.fetchtoken(`Basic ${clientIDSecret}`, GrantType.Client_credentials, undefined, undefined, undefined, undefined, strscopes);
            return response.content;
        });
    }
    /**
     * To obtain an authorization code grant or id_token grant.
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
     * @returns {string} Returns the authorize URL.
    */
    authorize(clientId, responseType, redirectUri, scopes, state, nonce, responseMode, prompt, authoptions, codeChallenge, codeChallengeMethod) {
        const strScopes = scopes.join(' ');
        const url = this.tokenApi.authorize(clientId, responseType, redirectUri, state, nonce, strScopes, responseMode, prompt, authoptions, codeChallenge, codeChallengeMethod);
        return url;
    }
    /**
      * Returns a 3-legged access token.
      * For Private clients specify the client secret along with the Client ID.
      * For Public clients only Client ID needs to be specified.
      * @summary getThreeLeggedTokenAsync
      * @param {string} [clientId] This field is required for client ID
      * @param {string} [clientSecret] This field is required for client secret
      * @param {string} code
      * @param {string} redirect_uri
      * @param {string} code_verifier
      * @param {Scopes} [scope]
      * @returns {ThreeleggedToken} Three Legged access token
    */
    getThreeLeggedTokenAsync(clientId, clientSecret, code, redirect_uri, code_verifier) {
        return __awaiter(this, void 0, void 0, function* () {
            var response = null;
            if (clientSecret) {
                const clientIDSecret = Buffer.from(`${clientId}:${clientSecret}`).toString(`base64`);
                response = yield this.tokenApi.fetchtoken(`Basic ${clientIDSecret}`, GrantType.Authorization_code, code, redirect_uri, code_verifier);
            }
            else {
                response = yield this.tokenApi.fetchtoken(undefined, GrantType.Authorization_code, code, redirect_uri, code_verifier, undefined, undefined, clientId);
            }
            return response.content;
        });
    }
    /**
      * Returns a Refresh token.
      * For Private clients specify the client secret along with the Client ID.
      * For Public clients only Client ID needs to be specified.
      * @summary getRefreshTokenAsync
      * @param {string} [clientId] This field is required for client ID
      * @param {string} [clientSecret] This field is required for client secret
      * @param {string} refreshToken
      * @param {Scopes} [scope]
      * @returns {RefreshToken} Refresh Token
    */
    getRefreshTokenAsync(clientId, clientSecret, refreshToken, scopes) {
        return __awaiter(this, void 0, void 0, function* () {
            var response = null;
            var strScopes = "";
            if (Array.isArray(scopes) && scopes.length) {
                strScopes = scopes.join(' ');
            }
            if (clientSecret) {
                const clientIDSecret = Buffer.from(`${clientId}:${clientSecret}`).toString(`base64`);
                response = yield this.tokenApi.fetchtoken(`Basic ${clientIDSecret}`, GrantType.Refresh_token, undefined, undefined, undefined, refreshToken, strScopes);
            }
            else {
                response = yield this.tokenApi.fetchtoken(undefined, GrantType.Refresh_token, undefined, undefined, undefined, refreshToken, strScopes, clientId);
            }
            return response.content;
        });
    }
    /**
     * Retrieves the list of public keys in the JWKS format (JSON Web Key Set).
     * @summary getKeysAsync
     * @returns {Jwks} JSON Web Key Set
    */
    getKeysAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.tokenApi.getKeys();
            return response.content;
        });
    }
    /**
        * Openid-configuration is a Well-known URI Discovery Mechanism for the Provider Configuration URI and is defined in OpenID Connect (OIDC).
        * Openid-configuration is a URI defined within OpenID Connect which provides configuration information about the Identity Provider (IDP).
        * This endpoint retrieves the metadata as a JSON listing of OpenID/OAuth endpoints, supported scopes and claims, public keys used to sign the tokens, and other details.
        * @summary GET OIDC Specification
        * @returns {OidcSpec}
    */
    GetOidcSpecAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.tokenApi.getOidcSpec();
            return response.content;
        });
    }
    /**
       * Examines an access token including the reference token and returns the status information of the tokens.  If the token is active, additional information is returned.  If the token is expired, invalid or revoked, it returns the response as status: inactive.
       * For Private clients specify the client secret along with the Client ID.
       * For Public clients only Client ID needs to be specified.
       * @summary introspect
       * @param {string} [token]
       * @param {string} [clientId] This field is required for client ID
       * @param {string} [clientSecret] This field is required for client secret
       * @returns {IntrospectToken}
    */
    IntrospectTokenAsync(token, clientId, clientSecret) {
        return __awaiter(this, void 0, void 0, function* () {
            if (clientSecret) {
                // Private client
                const clientIDSecret = Buffer.from(`${clientId}:${clientSecret}`).toString(`base64`);
                const response = yield this.tokenApi.introspectToken(`Basic ${clientIDSecret}`, token, undefined);
                return response.content;
            }
            else {
                //public client
                const response = yield this.tokenApi.introspectToken(undefined, token, clientId);
                return response.content;
            }
        });
    }
    /**
      * This API endpoint logs a user out by removing their user browser session and redirects the user to the Autodesk login page.
      * @summary logout
      * @param {string} [postLogoutRedirectUri] Location to redirect once the logout is performed. Note that the provided domain host should be in the allowed list. Contact #oxygen slack channel for more details.
    */
    Logout(postLogoutRedirectUri) {
        const response = this.tokenApi.logout(postLogoutRedirectUri);
        return response;
    }
    /**
       * This API endpoint takes an access token or refresh token and revokes it. Once the token is revoked, it becomes inactive and returns no body response.  A client can only revoke its own tokens.
       * For Private clients specify the client secret along with the Client ID.
       * For Public clients only Client ID needs to be specified.
       * @summary revoke
       * @param {string} [token] The token to be revoked.
       * @param {string} [clientId] This field is required for client ID
       * @param {string} [clientSecret] This field is required for client secret
       * @param {string} [tokenTypeHint] Should be either \\\&#39;access_token\\\&#39;, \\\&#39;refresh_token\\\&#39; or \\\&#39;device_secret\\\&#39;.
    */
    RevokeAsync(token, clientId, clientSecret, tokenTypeHint) {
        return __awaiter(this, void 0, void 0, function* () {
            if (clientSecret) { // request is for private client 
                const clientIDSecret = Buffer.from(`${clientId}:${clientSecret}`).toString(`base64`);
                const response = yield this.tokenApi.revoke(token, `Basic ${clientIDSecret}`, tokenTypeHint, undefined);
                return response.content;
            }
            else {
                const response = yield this.tokenApi.revoke(token, undefined, tokenTypeHint, clientId);
                return response.content;
            }
        });
    }
}
