
import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { CollectionFormats, RequestArgs, BaseApi, RequiredError, SecureServiceAccountApiError } from '../base';
import { EnableServiceAccountKeyPayload } from '../model';
import { ServiceAccountKeys } from '../model';
import { ServiceAccountPrivateKey } from '../model';
/**
 * KeyManagementApi - axios parameter creator
 * @export
 */
export const KeyManagementApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Creates a service account key. 
 * 
 * A service account key is a public-private key pair, generated using RSA with a key length of 2048 bits by the Identity Authorization Service (AuthZ).
 * 
 * The private key is returned once during its creation. AuthZ only stores the public key.
 * 
 * A service account can have up to 3 keys at any given time.
         * @summary Create Keys
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createServiceAccountKey: async (accessToken: string, serviceAccountId: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serviceAccountId' is not null or undefined
            assertParamExists('createServiceAccountKey', 'serviceAccountId', serviceAccountId)
            const localVarPath = `/authentication/v2/service-accounts/{serviceAccountId}/keys`
                .replace(`{${"serviceAccountId"}}`, encodeURIComponent(String(serviceAccountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/SECURE-SERVICE-ACCOUNT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an existing key.
         * @summary Delete key
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param {string} keyId The ID of the private key
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteKey: async (accessToken: string, serviceAccountId: string, keyId: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serviceAccountId' is not null or undefined
            assertParamExists('deleteKey', 'serviceAccountId', serviceAccountId)
            // verify required parameter 'keyId' is not null or undefined
            assertParamExists('deleteKey', 'keyId', keyId)
            const localVarPath = `/authentication/v2/service-accounts/{serviceAccountId}/keys/{keyId}`
                .replace(`{${"serviceAccountId"}}`, encodeURIComponent(String(serviceAccountId)))
                .replace(`{${"keyId"}}`, encodeURIComponent(String(keyId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/SECURE-SERVICE-ACCOUNT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Enables or disables a service account key.
         * @summary Enable or Disable Key
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param {string} keyId The ID of the private key
         * @param {EnableServiceAccountKeyPayload} enableServiceAccountKeyPayload 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enableDisableKey: async (accessToken: string, serviceAccountId: string, keyId: string, enableServiceAccountKeyPayload: EnableServiceAccountKeyPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serviceAccountId' is not null or undefined
            assertParamExists('enableDisableKey', 'serviceAccountId', serviceAccountId)
            // verify required parameter 'keyId' is not null or undefined
            assertParamExists('enableDisableKey', 'keyId', keyId)
            // verify required parameter 'enableServiceAccountKeyPayload' is not null or undefined
            assertParamExists('enableDisableKey', 'enableServiceAccountKeyPayload', enableServiceAccountKeyPayload)
            const localVarPath = `/authentication/v2/service-accounts/{serviceAccountId}/keys/{keyId}`
                .replace(`{${"serviceAccountId"}}`, encodeURIComponent(String(serviceAccountId)))
                .replace(`{${"keyId"}}`, encodeURIComponent(String(keyId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/SECURE-SERVICE-ACCOUNT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(enableServiceAccountKeyPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists all keys associated with the service account. This operation will only return key metadata, not the private or public key.
         * @summary Get All Keys
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServiceAccountKeys: async (accessToken: string, serviceAccountId: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serviceAccountId' is not null or undefined
            assertParamExists('getServiceAccountKeys', 'serviceAccountId', serviceAccountId)
            const localVarPath = `/authentication/v2/service-accounts/{serviceAccountId}/keys`
                .replace(`{${"serviceAccountId"}}`, encodeURIComponent(String(serviceAccountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/SECURE-SERVICE-ACCOUNT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * KeyManagementApi - functional programming interface
 * @export
 */
export const KeyManagementApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = KeyManagementApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Creates a service account key. 
 * 
 * A service account key is a public-private key pair, generated using RSA with a key length of 2048 bits by the Identity Authorization Service (AuthZ).
 * 
 * The private key is returned once during its creation. AuthZ only stores the public key.
 * 
 * A service account can have up to 3 keys at any given time.
         * @summary Create Keys
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createServiceAccountKey(accessToken: string, serviceAccountId: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceAccountPrivateKey>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createServiceAccountKey(accessToken, serviceAccountId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Deletes an existing key.
         * @summary Delete key
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param {string} keyId The ID of the private key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteKey(accessToken: string, serviceAccountId: string, keyId: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteKey(accessToken, serviceAccountId, keyId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Enables or disables a service account key.
         * @summary Enable or Disable Key
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param {string} keyId The ID of the private key
         * @param {EnableServiceAccountKeyPayload} enableServiceAccountKeyPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async enableDisableKey(accessToken: string, serviceAccountId: string, keyId: string, enableServiceAccountKeyPayload: EnableServiceAccountKeyPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.enableDisableKey(accessToken, serviceAccountId, keyId, enableServiceAccountKeyPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Lists all keys associated with the service account. This operation will only return key metadata, not the private or public key.
         * @summary Get All Keys
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getServiceAccountKeys(accessToken: string, serviceAccountId: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceAccountKeys>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getServiceAccountKeys(accessToken, serviceAccountId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * KeyManagementApi - interface
 * @export
 * @interface KeyManagementApi
 */
export interface KeyManagementApiInterface {
    /**
     * Creates a service account key. 
 * 
 * A service account key is a public-private key pair, generated using RSA with a key length of 2048 bits by the Identity Authorization Service (AuthZ).
 * 
 * The private key is returned once during its creation. AuthZ only stores the public key.
 * 
 * A service account can have up to 3 keys at any given time.
     * @summary Create Keys
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KeyManagementApiInterface
     */
    createServiceAccountKey(accessToken: string,serviceAccountId: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Deletes an existing key.
     * @summary Delete key
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param {string} keyId The ID of the private key
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KeyManagementApiInterface
     */
    deleteKey(accessToken: string,serviceAccountId: string, keyId: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Enables or disables a service account key.
     * @summary Enable or Disable Key
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param {string} keyId The ID of the private key
     * @param {EnableServiceAccountKeyPayload} enableServiceAccountKeyPayload 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KeyManagementApiInterface
     */
    enableDisableKey(accessToken: string,serviceAccountId: string, keyId: string, enableServiceAccountKeyPayload: EnableServiceAccountKeyPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Lists all keys associated with the service account. This operation will only return key metadata, not the private or public key.
     * @summary Get All Keys
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KeyManagementApiInterface
     */
    getServiceAccountKeys(accessToken: string,serviceAccountId: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * KeyManagementApi - object-oriented interface
 * @export
 * @class KeyManagementApi
 * @extends {BaseApi}
 */
export class KeyManagementApi extends BaseApi implements KeyManagementApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Creates a service account key. 
 * 
 * A service account key is a public-private key pair, generated using RSA with a key length of 2048 bits by the Identity Authorization Service (AuthZ).
 * 
 * The private key is returned once during its creation. AuthZ only stores the public key.
 * 
 * A service account can have up to 3 keys at any given time.
     * @summary Create Keys
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KeyManagementApi
     */
    public async createServiceAccountKey(accessToken: string, serviceAccountId: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createServiceAccountKey ");
      try {
        const request =  await KeyManagementApiFp(this.sdkManager).createServiceAccountKey(accessToken, serviceAccountId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createServiceAccountKey Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`createServiceAccountKey Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new SecureServiceAccountApiError(`createServiceAccountKey Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createServiceAccountKey Request failed with no response received: ${error.request}`);
            throw new SecureServiceAccountApiError(`createServiceAccountKey Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Deletes an existing key.
     * @summary Delete key
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param {string} keyId The ID of the private key
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KeyManagementApi
     */
    public async deleteKey(accessToken: string, serviceAccountId: string, keyId: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into deleteKey ");
      try {
        const request =  await KeyManagementApiFp(this.sdkManager).deleteKey(accessToken, serviceAccountId, keyId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`deleteKey Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`deleteKey Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new SecureServiceAccountApiError(`deleteKey Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`deleteKey Request failed with no response received: ${error.request}`);
            throw new SecureServiceAccountApiError(`deleteKey Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Enables or disables a service account key.
     * @summary Enable or Disable Key
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param {string} keyId The ID of the private key
     * @param {EnableServiceAccountKeyPayload} enableServiceAccountKeyPayload 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KeyManagementApi
     */
    public async enableDisableKey(accessToken: string, serviceAccountId: string, keyId: string, enableServiceAccountKeyPayload: EnableServiceAccountKeyPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into enableDisableKey ");
      try {
        const request =  await KeyManagementApiFp(this.sdkManager).enableDisableKey(accessToken, serviceAccountId, keyId, enableServiceAccountKeyPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`enableDisableKey Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`enableDisableKey Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new SecureServiceAccountApiError(`enableDisableKey Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`enableDisableKey Request failed with no response received: ${error.request}`);
            throw new SecureServiceAccountApiError(`enableDisableKey Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Lists all keys associated with the service account. This operation will only return key metadata, not the private or public key.
     * @summary Get All Keys
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KeyManagementApi
     */
    public async getServiceAccountKeys(accessToken: string, serviceAccountId: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getServiceAccountKeys ");
      try {
        const request =  await KeyManagementApiFp(this.sdkManager).getServiceAccountKeys(accessToken, serviceAccountId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getServiceAccountKeys Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getServiceAccountKeys Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new SecureServiceAccountApiError(`getServiceAccountKeys Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getServiceAccountKeys Request failed with no response received: ${error.request}`);
            throw new SecureServiceAccountApiError(`getServiceAccountKeys Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

