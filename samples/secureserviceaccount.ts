import { SdkManager, SdkManagerBuilder, StaticAuthenticationProvider } from "@aps_sdk/autodesk-sdkmanager";
import { CreateServiceAccountPayload, ExchangeJwtToken, Scopes, SecureServiceAccountClient, ServiceAccount, ServiceAccountDetails, ServiceAccounts } from "@aps_sdk/secure-service-account";
import 'dotenv/config';

const accessToken: string = process.env.accessToken!;
const clientId: string = process.env.clientId;
const clientSecret: string = process.env.clientSecret;
let serviceAccountId: string = process.env.serviceAccountId;
let keyId: string = process.env.keyId ;
const privateKeyPem = process.env.privateKeyPem;

// Optional: Initialize SDK manager with custom configuration
const sdkManager: SdkManager = SdkManagerBuilder.create().build();

// Optional: Use static authentication provider
const staticAuthenticationProvider = new StaticAuthenticationProvider(accessToken);

// Initialize the SecureServiceAccount client
const ssaClient = new SecureServiceAccountClient({
    sdkManager: sdkManager,
    authenticationProvider: staticAuthenticationProvider
});


//#region Service Account Management

/**
 * Create a new service account
 */
async function createServiceAccount() {
    try {
        const createRequest: CreateServiceAccountPayload = {
            name: "my-test-service-account",
            firstName: "Test",
            lastName: "Account",
        };

        const serviceAccount: ServiceAccount = await ssaClient.createServiceAccount(createRequest, { accessToken: accessToken });
        console.log("Service account created: ", serviceAccount);
        console.log(`ID: ${serviceAccount.serviceAccountId}`);
        console.log(`Email: ${serviceAccount.email}`);

        // Store the service account ID for future operations
        serviceAccountId = serviceAccount.serviceAccountId!;
        return serviceAccount;
    } catch (error) {
        console.error("Error creating service account:", error.message);
    }
}

/**
 * Get details of a specific service account
 */
async function getServiceAccount() {
    try {
        const serviceAccount: ServiceAccountDetails = await ssaClient.getServiceAccount(serviceAccountId, { accessToken });
        console.log("Service account details:");
        console.log(`ID: ${serviceAccount.serviceAccountId}`);
        console.log(`Email: ${serviceAccount.email}`);
        console.log(`Status: ${serviceAccount.status}`);
        console.log(`Created By: ${serviceAccount.createdBy}`);
        console.log(`Created At: ${serviceAccount.createdAt}`);
        console.log(`Last Accessed: ${serviceAccount.accessedAt}`);
        console.log(`Expires At: ${serviceAccount.expiresAt}`);
        return serviceAccount;
    } catch (error) {
        console.error("Error getting service account:", error.message);
    }
}

/**
 * Get all service accounts for the application
 */
async function getAllServiceAccounts() {
    try {
        const serviceAccounts: ServiceAccounts = await ssaClient.getServiceAccounts({ accessToken });
        console.log("All service accounts: ", serviceAccounts);
        if (serviceAccounts.serviceAccounts) {
            Array.from(serviceAccounts.serviceAccounts).forEach((account, index) => {
                console.log(`${index + 1}. ID: ${account.serviceAccountId}, Email: ${account.email}`);
            });
        }
        return serviceAccounts;
    } catch (error) {
        console.error("Error getting service accounts:", error.message);
    }
}

/**
 * Enable a service account
 */
async function enableServiceAccount() {
    try {
        const result = await ssaClient.enableServiceAccount(serviceAccountId, { accessToken });
        console.log("Service account enabled successfully");
        console.log(`New status: ${result.status}`);
        return result;
    } catch (error) {
        console.error("Error enabling service account:", error.message);
    }
}

/**
 * Disable a service account
 */
async function disableServiceAccount() {
    try {
        const result = await ssaClient.disableServiceAccount(serviceAccountId, { accessToken });
        console.log("Service account disabled successfully");
        console.log(`New status: ${result.status}`);
        return result;
    } catch (error) {
        console.error("Error disabling service account:", error.message);
    }
}

/**
 * Delete a service account
 */
async function deleteServiceAccount() {
    try {
        await ssaClient.deleteServiceAccount(serviceAccountId, { accessToken });
        console.log("Service account deleted successfully");
    } catch (error) {
        console.error("Error deleting service account:", error.message);
    }
}

//#endregion

//#region Key Management

/**
 * Create a new key for the service account
 */
async function createServiceAccountKey() {
    try {
        const privateKey = await ssaClient.createServiceAccountKey(serviceAccountId, { accessToken });
        console.log("Service account key created:");
        console.log(`Key ID: ${privateKey.kid}`);
        console.log(`Private Key: ${privateKey.privateKey}`);
        console.log("⚠️ IMPORTANT: Store the private key securely. It won't be shown again!");

        // Store the key ID for future operations
        keyId = privateKey.kid!;
        return privateKey;
    } catch (error) {
        console.error("Error creating service account key:", error.message);
    }
}

/**
 * Get all keys for a service account
 */
async function getServiceAccountKeys() {
    try {
        const keys = await ssaClient.getAllServiceAccountKeys(serviceAccountId, { accessToken });
        console.log("Service account keys:");
        if (keys.keys) {
            Array.from(keys.keys).forEach((key, index) => {
                console.log(`${index + 1}. Key ID: ${key.kid}`);
                console.log(`   Created: ${key.createdAt}`);
                console.log(`   Accessed: ${key.accessedAt}`);
                console.log(`   Status: ${key.status}`);
            });
        }
        return keys;
    } catch (error) {
        console.error("Error getting service account keys:", error.message);
    }
}

/**
 * Enable a specific key
 */
async function enableServiceAccountKey() {
    try {
        await ssaClient.enableServiceAccountKey(serviceAccountId, keyId, { accessToken });
        console.log("Key enabled successfully");
    } catch (error) {
        console.error("Error enabling key:", error.message);
    }
}

/**
 * Disable a specific key
 */
async function disableServiceAccountKey() {
    try {
        await ssaClient.disableServiceAccountKey(serviceAccountId, keyId, { accessToken });
        console.log("Key disabled successfully");
    } catch (error) {
        console.error("Error disabling key:", error.message);
    }
}

/**
 * Delete a key
 */
async function deleteKey() {
    try {
        await ssaClient.deleteServiceAccountKey(serviceAccountId, keyId, { accessToken });
        console.log("Key deleted successfully");
    } catch (error) {
        console.error("Error deleting key:", error.message);
    }
}

//#endregion

//#region JWT Generation Helper
function generateJwtAssertion(
    clientId: string,
    serviceAccountId: string,
    privateKey: string,
    keyId: string,
    scopes: Array<Scopes>,
    lifetimeSeconds: number = 300
): string {
    return ssaClient.generateJwtAssertion(
        clientId,
        serviceAccountId,
        privateKey,
        keyId,
        scopes,
        lifetimeSeconds
    );
}

/**
 * Helper function to demonstrate JWT structure (for educational purposes)
 */
function showJwtAssertionStructure(serviceAccountId: string, clientId: string, keyId: string, scopes: string[]) {
    const header = {
        "kid": keyId,
        "alg": "RS256",
        "typ": "JWT"
    };

    const claims = {
        "iss": clientId, // Client ID (owner of service account)
        "sub": serviceAccountId, // Service Account ID
        "aud": "https://developer.api.autodesk.com/authentication/v2/token",
        "exp": Math.floor(Date.now() / 1000) + 300, // 5 minutes from now
        "iat": Math.floor(Date.now() / 1000), // Issued at
        "nbf": Math.floor(Date.now() / 1000), // Not before
        "jti": "random-unique-id", // JWT ID
        "scope": scopes
    };

    console.log("JWT Header structure:", JSON.stringify(header, null, 2));
    console.log("JWT Claims structure:", JSON.stringify(claims, null, 2));
}

//#endregion

//#region JWT Token Exchange

/**
 * Exchange JWT assertion for an access token
 * This function generates a real JWT assertion and exchanges it for an access token
 */
async function exchangeJwtForToken(privateKeyPem?: string) {
    try {
        // Use provided private key or show example structure
        if (!privateKeyPem) {
            console.log("No private key provided - showing JWT structure example:");
            showJwtAssertionStructure(serviceAccountId, clientId, keyId, ["data:read", "data:write"]);
            console.log("\n To actually exchange tokens, provide privateKeyPem and serviceAccountKeyId parameters");
            return;
        }

        console.log("Generating JWT assertion...");
        const jwtAssertion = generateJwtAssertion(
            clientId,
            serviceAccountId,
            privateKeyPem,
            keyId,
            [Scopes.DataRead, Scopes.DataWrite],
            300 // 5 minutes
        );

        console.log("JWT assertion generated successfully: " + jwtAssertion);
        console.log(`JWT length: ${jwtAssertion.length} characters`);

        const tokenResponse: ExchangeJwtToken = await ssaClient.exchangeJwtAssertion(
            jwtAssertion,
            {
                clientId: clientId,
                clientSecret: clientSecret,
                scope: [Scopes.DataRead, Scopes.DataWrite]
            }
        );

        console.log("Token exchange successful:");
        console.log(`Access Token: ${tokenResponse.access_token}`);
        console.log(`Token Type: ${tokenResponse.token_type}`);
        console.log(`Expires In: ${tokenResponse.expires_in} seconds`);
        console.log(`Expires At: ${tokenResponse.expires_at}`);

        return tokenResponse;
    } catch (error) {
        console.error("Error exchanging JWT for token:", error.message);
    }
}

//#endregion


// Service Account Management
// createServiceAccount();
getServiceAccount();
// getAllServiceAccounts();
// enableServiceAccount();
// disableServiceAccount();
// deleteServiceAccount();

// Key Management
// createServiceAccountKey();
// getServiceAccountKeys();
// enableServiceAccountKey();
// disableServiceAccountKey();
// deleteKey();

// JWT Token Exchange
// exchangeJwtForToken(); // Shows structure without private key


exchangeJwtForToken(privateKeyPem); // Actual token exchange
