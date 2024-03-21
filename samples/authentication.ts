import { ApiResponse, SdkManager, SdkManagerBuilder } from '@aps_sdk/autodesk-sdkmanager'
import { AuthenticationClient, ResponseType, Scopes, TokenTypeHint } from '@aps_sdk/authentication';


const client_id = "<client_id>";
const client_secret = "<client_secret>";
var redirect_uri = "<redirect_uri>";
const code = "<code>";
var access_token = "token";


const sdkmanager: SdkManager = SdkManagerBuilder.create().build();
const authenticationClient = new AuthenticationClient(sdkmanager);

/**
* Retrieves basic information for the given authenticated user. Only supports 3-legged access tokens.
*/
async function getUserInfo() {
    const userInfo = await authenticationClient.getUserInfo({authorization: access_token});
    console.log(userInfo.email);
}

/**
* Returns a 2-legged access token.
*/
async function getTwoLeggedToken() {
    const token = await authenticationClient.getTwoLeggedToken(client_id, client_secret, new Array(Scopes.Dataread, Scopes.Datacreate, Scopes.Bucketcreate));
    console.log(token.access_token);
}

/**
* Function to obtain the authorize url. 
*/
function authorize() {
    const url = authenticationClient.authorize(client_id, ResponseType.Code, redirect_uri, new Array(Scopes.Dataread, Scopes.Datacreate));
    console.log(url);
}

/**
*  Returns a 3-legged access token. 
*/
async function getThreeLeggedToken() {
    try {
        const token = await authenticationClient.getThreeLeggedToken(client_id, client_secret, code, redirect_uri);
        access_token = token.access_token;
        console.log(token);
    }
    catch (error) {
        console.log(error);
    }

}

/**
* Returns a Refresh token.  
*/
async function getRefreshToken() {
    try {
        const refreshtoken = await authenticationClient.getRefreshToken(client_id, client_secret, "refreshToken");
        console.log(refreshtoken);
    }
    catch (error) {
        console.log(error);
    }
}

/** 
* Retrieves the list of public keys in the JWKS format (JSON Web Key Set). 
*/
async function getKeys() {
    const jwkskeys = await authenticationClient.getKeys();
    console.log(jwkskeys);
}


/**
 * Examines an access token and returns its status information
 */
async function introspectToken() {  
    const introspecttoken = await authenticationClient.introspectToken(access_token, client_id, { clientSecret: client_secret } );
    console.log(introspecttoken); 
}

/**
 * Function to log a user out.
 */
function logout() {
    const logouturl = authenticationClient.logout("www.google.com");
    console.log(logouturl);
}


/**
 *  Function that takes an access token or refresh token and revokes it.
 */
async function revokeToken() {
    var response = await authenticationClient.revoke(access_token, client_id, { clientSecret: client_secret,  tokenTypeHint: TokenTypeHint.Access_token } );
    console.log(response);
}

/**
 * Function to get the OIDC Specification.
 */
async function oidc() {
    const response = await authenticationClient.getKeys();
    console.log(response);
}


//getUserInfo();
//revokeToken();
//logout();
//authorize();
//getRefreshTokenAsync();
//getThreeLeggedTokenAsync();
//introspectTokenAsync();
//oidc();
//getTwoLeggedTokenAsync();
// getKeys();