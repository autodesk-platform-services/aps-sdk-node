import { ApiResponse, SdkManager, SdkManagerBuilder } from '@aps_sdk/autodesk-sdkmanager'
import { AuthenticationClient, ResponseType, Scopes, TokenTypeHint } from '@aps_sdk/authentication';
import 'dotenv/config';

const clientId = process.env.clientId;
const clientSecret = process.env.clientSecret;
const redirectUri = process.env.redirectUri;
const code = process.env.code;
const refreshToken = process.env.refreshToken;
const accessToken = process.env.token;


// SdkManager can be optionally initialised to add custom logger etc.
// const sdkmanager: SdkManager = SdkManagerBuilder.create().addLogger(new Logger(LogLevel.DEBUG)).build();

const authenticationClient = new AuthenticationClient();

/**
* Retrieves basic information for the given authenticated user. Only supports 3-legged access tokens.
*/
async function getUserInfo() {
    try {
        const userInfo = await authenticationClient.getUserInfo(accessToken);
        console.log(userInfo.email);
    }
    catch (error) {
        console.error(error);
    }
}

/**
* Returns a 2-legged access token.
*/
async function getTwoLeggedToken() {
    try {
        const token = await authenticationClient.getTwoLeggedToken(clientId, clientSecret, new Array(Scopes.DataRead, Scopes.DataCreate, Scopes.BucketCreate));
        var expiresAt = token.expires_at; // Returns the expiry time in milliseconds
        // convert the expiry time from milliseconds to local date-time
        var expiresAtLocal = new Date(expiresAt); 
        console.log(token.access_token);
    }
    catch (error) {
        console.error(error);
    }
}

/**
* Function to obtain the authorize url. 
*/
function authorize() {
    try {
        const url = authenticationClient.authorize(clientId, ResponseType.Code, redirectUri, new Array(Scopes.DataRead, Scopes.DataCreate));
        console.log(url);
    }
    catch (error) { 
        console.error(error); 
    }
}

/**
*  Returns a 3-legged access token. 
*/
async function getThreeLeggedToken() {
    try {
        const token = await authenticationClient.getThreeLeggedToken(clientId, code, redirectUri, { clientSecret: clientSecret });
        var access_token = token.access_token;
        var expiresAt = new Date(token.expires_at);
        console.log(token);
    }
    catch (error) {
        console.error(error);
    }

}

/**
* Refresh the 3-legged token.  
*/
async function refreshThreeLeggedToken() {
    try {
        const refreshedToken = await authenticationClient.refreshToken(refreshToken,clientId, { clientSecret: clientSecret });
        console.log(refreshedToken);
    }
    catch (error) {
        console.error(error);
    }
}

/** 
* Retrieves the list of public keys in the JWKS format (JSON Web Key Set). 
*/
async function getKeys() {
    try {
        const jwkskeys = await authenticationClient.getKeys();
        console.log(jwkskeys);
    }
    catch (error) {
        console.error(error);
    }
}



/**
 * Examines an access token and returns its status information
 */
async function introspectToken() {
    try {
        const introspect_token = await authenticationClient.introspectToken(accessToken, clientId, { clientSecret: clientSecret });
        console.log(introspect_token);
    }
    catch (error) {
        console.error(error);
    }
}


/**
 * Function to log a user out.
 */
function logout() {
    try {
        const logouturl = authenticationClient.logout({ postLogoutRedirectUri: "https://www.autodesk.com" });
        console.log(logouturl);
    }
    catch (error) {
        console.error(error);
    }

}


/**
 *  Function that takes an access token or refresh token and revokes it.
 */
async function revokeToken() {
    try {
        var response = await authenticationClient.revoke(accessToken, clientId, TokenTypeHint.AccessToken, { clientSecret: clientSecret });
        console.log(response);
    }
    catch (error) {
        console.error(error);
    }
}


/**
 * Function to get the OIDC Specification.
 */
async function getOidcSpec() {
    try {
        const response = await authenticationClient.getOidcSpec();
        console.log(response);
    }
    catch (error) {
        console.error(error);
    }
}

/**
 * Call Individual methods
 */

 getTwoLeggedToken();
// authorize();
// refreshThreeLeggedToken();
// getThreeLeggedToken();
// introspectToken();
// getUserInfo();
// revokeToken();
// logout();
// getOidcSpec();
// getKeys();