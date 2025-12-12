import { ApsServiceRequestConfig, BaseClient, IAuthenticationProvider, SdkManager, SdkManagerBuilder } from "@aps_sdk/autodesk-sdkmanager";
import { AccountManagementApi, ExchangeTokenApi, KeyManagementApi } from '../api';
import { CreateServiceAccountPayload, EnableServiceAccountKeyPayload, EnableServiceAccountPayload, ExchangeJwtToken, GrantType, Scope, ServiceAccount, ServiceAccountDetails, ServiceAccountKeys, ServiceAccountPrivateKey, ServiceAccounts } from '../model';
import { JwtUtils } from './jwtUtils';



/**
 * @remarks Represents a collection of functions to interact with the SecureServiceAccount API endpoints.
 */

export class SecureServiceAccountClient extends BaseClient {
    public exchangeTokenApi: ExchangeTokenApi;
    public keyManagementApi: KeyManagementApi;
    public accountManagementApi: AccountManagementApi;

    constructor(optionalArgs?: { sdkManager?: SdkManager, authenticationProvider?: IAuthenticationProvider }) {
        super(optionalArgs?.authenticationProvider);
        if (!optionalArgs?.sdkManager) {
            (optionalArgs ??= {}).sdkManager = SdkManagerBuilder.create().build();
        }
        this.exchangeTokenApi = new ExchangeTokenApi(optionalArgs.sdkManager);
        this.keyManagementApi = new KeyManagementApi(optionalArgs.sdkManager);
        this.accountManagementApi = new AccountManagementApi(optionalArgs.sdkManager);
    }








    //#region AccountManagementApi
    /**
     * Creates a service account. Only a server-to-server application can own service accounts.
* 
* An application can have up to 10 service accounts at any given time.
* 
* Upon a successful response, the operation returns the service account ID and email address.
     * @remarks Create Service Account
     * @param {CreateServiceAccountPayload} body 
     * @param {*} [optionalArgs.options] Override http request option.
     * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
     * @throws {@link SecureServiceAccountApiError}
     */
    public async createServiceAccount(body: CreateServiceAccountPayload, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ServiceAccount> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.accountManagementApi.createServiceAccount(optionalArgs?.accessToken, body, optionalArgs?.options);
        return response.content;
    }


    //#region KeyManagementApi
    /**
     * Creates a service account key. 
* 
* A service account key is a public-private key pair, generated using RSA with a key length of 2048 bits by the Identity Authorization Service (AuthZ).
* 
* The private key is returned once during its creation. AuthZ only stores the public key.
* 
* A service account can have up to 3 keys at any given time.
     * @remarks Create Keys
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param {*} [optionalArgs.options] Override http request option.
     * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
     * @throws {@link SecureServiceAccountApiError}
     */
    public async createServiceAccountKey(serviceAccountId: string, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ServiceAccountPrivateKey> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.keyManagementApi.createServiceAccountKey(optionalArgs?.accessToken, serviceAccountId, optionalArgs?.options);
        return response.content;
    }


    //#region KeyManagementApi
    /**
     * Deletes an existing key.
     * @remarks Delete key
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param {string} keyId The ID of the private key
     * @param {*} [optionalArgs.options] Override http request option.
     * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
     * @throws {@link SecureServiceAccountApiError}
     */
    public async deleteKey(serviceAccountId: string, keyId: string, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<void> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.keyManagementApi.deleteKey(optionalArgs?.accessToken, serviceAccountId, keyId, optionalArgs?.options);
        return response.content;
    }


    //#region AccountManagementApi
    /**
     * Deletes an existing service account. When a service account is deleted, all associated keys will also be deleted.
     * @remarks Delete Service Account
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param {*} [optionalArgs.options] Override http request option.
     * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
     * @throws {@link SecureServiceAccountApiError}
     */
    public async deleteServiceAccount(serviceAccountId: string, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<void> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.accountManagementApi.deleteServiceAccount(optionalArgs?.accessToken, serviceAccountId, optionalArgs?.options);
        return response.content;
    }


    //#region KeyManagementApi
    /**
     * Enables or disables a service account key.
     * @remarks Enable or Disable Key
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param {string} keyId The ID of the private key
     * @param {EnableServiceAccountKeyPayload} enableServiceAccountKeyPayload 
     * @param {*} [optionalArgs.options] Override http request option.
     * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
     * @throws {@link SecureServiceAccountApiError}
     */
    public async enableDisableKey(serviceAccountId: string, keyId: string, enableServiceAccountKeyPayload: EnableServiceAccountKeyPayload, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<void> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.keyManagementApi.enableDisableKey(optionalArgs?.accessToken, serviceAccountId, keyId, enableServiceAccountKeyPayload, optionalArgs?.options);
        return response.content;
    }


    //#region AccountManagementApi
    /**
     * Enables or disables a service account.
* 
* When a service account is disabled state, it loses its capability to manage its service account key. 
* Assertions signed by the key will be treated as invalid.
* 
* This operation allows enabling a service account that is in a deactivated state.
     * @remarks Enable or Disable Service Account
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param {EnableServiceAccountPayload} enableServiceAccountPayload 
     * @param {*} [optionalArgs.options] Override http request option.
     * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
     * @throws {@link SecureServiceAccountApiError}
     */
    public async enableServiceAccount(serviceAccountId: string, enableServiceAccountPayload: EnableServiceAccountPayload, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ServiceAccountDetails> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.accountManagementApi.enableServiceAccount(optionalArgs?.accessToken, serviceAccountId, enableServiceAccountPayload, optionalArgs?.options);
        return response.content;
    }


    //#region ExchangeTokenApi
    /**
     * Returns a three-legged access token for the JWT assertion you provide in the request body. See the Developer's Guide topic JWT Assertions for information on how to generate a JWT assertion for this operation.
* 
* This operation is only for confidential clients. It requires Basic Authorization (client_id, client_secret). Authentication information (client_id, client_secret) can be included either in the header or the body, but not both simultaneously.
     * @remarks Exchanging JWT assertion for token
     * @param {GrantType} grantType 
     * @param {string} assertion The value of the JWT assertion.
     * @param {string} [optionalArgs.authorization] Must be Basic <credentials>, where <credentials> is a base64 encoded string of client_id:client_secret. This parameter is required only if client_id and client_secret are not provided in the request body.
     * @param {string} [optionalArgs.clientId] This attribute is optional; it serves as an additional option where the client can either use the authorization header or opt to send this information in the body.
     * @param {string} [optionalArgs.clientSecret] This attribute is optional; it serves as an additional option where the client can either use the authorization header or opt to send this information in the body.
     * @param {Array<Scope>} [optionalArgs.scope] This is a space-delimited list of scopes. The scope in the token endpoint request body should be a subset of or the same as the scope specified in the assertion. If the scope is not present, then the returned access token will have the same scope as the assertion.
     * @param {*} [optionalArgs.options] Override http request option.
     * @throws {@link SecureServiceAccountApiError}
     */
    public async exchangeJwtAssertion(grantType: GrantType, assertion: string, optionalArgs?: { authorization?: string, clientId?: string, clientSecret?: string, scope?: Array<Scope>, options?: ApsServiceRequestConfig }): Promise<ExchangeJwtToken> {
        const response = await this.exchangeTokenApi.exchangeJwtAssertion(grantType, assertion, optionalArgs?.authorization, optionalArgs?.clientId, optionalArgs?.clientSecret, optionalArgs?.scope, optionalArgs?.options);
        return response.content;
    }


    //#region AccountManagementApi
    /**
     * Retrieves the details for a service account.
     * @remarks Get Service Account
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param {*} [optionalArgs.options] Override http request option.
     * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
     * @throws {@link SecureServiceAccountApiError}
     */
    public async getServiceAccount(serviceAccountId: string, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ServiceAccountDetails> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.accountManagementApi.getServiceAccount(optionalArgs?.accessToken, serviceAccountId, optionalArgs?.options);
        return response.content;
    }


    //#region KeyManagementApi
    /**
     * Lists all keys associated with the service account. This operation will only return key metadata, not the private or public key.
     * @remarks Get All Keys
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param {*} [optionalArgs.options] Override http request option.
     * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
     * @throws {@link SecureServiceAccountApiError}
     */
    public async getServiceAccountKeys(serviceAccountId: string, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ServiceAccountKeys> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.keyManagementApi.getServiceAccountKeys(optionalArgs?.accessToken, serviceAccountId, optionalArgs?.options);
        return response.content;
    }


    //#region AccountManagementApi
    /**
     * Retrieves all service accounts associated with an application.
     * @remarks Get All Service Accounts
     * @param {*} [optionalArgs.options] Override http request option.
     * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
     * @throws {@link SecureServiceAccountApiError}
     */
    public async getServiceAccounts(optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ServiceAccounts> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.accountManagementApi.getServiceAccounts(optionalArgs?.accessToken, optionalArgs?.options);
        return response.content;
    }



    /**
     * Generate a signed JWT assertion for service account authentication
     * @param clientId - The client ID that owns the service account
     * @param serviceAccountId - The service account ID
     * @param privateKey - The private key in PEM format
     * @param keyId - The key ID (kid)
     * @param scopes - Array of scopes to request
     * @param lifetimeSeconds - Token lifetime in seconds (max 300 = 5 minutes)
     * @returns Signed JWT assertion
     */
    public generateJwtAssertion(
        clientId: string,
        serviceAccountId: string,
        privateKey: string,
        keyId: string,
        scopes: Array<Scope>,
        lifetimeSeconds: number = 300
    ): string {
        return JwtUtils.generateJwtAssertion(
            clientId,
            serviceAccountId,
            privateKey,
            keyId,
            scopes,
            lifetimeSeconds
        );
    }

}