
import { ApiResponse, ApsServiceRequestConfig, IApsConfiguration, SdkManager } from "@aps_sdk/autodesk-sdkmanager";
import type { AxiosInstance, AxiosPromise } from 'axios';
import { BaseApi, RequestArgs, RequiredError, SecureServiceAccountApiError } from '../base';
import { assertParamExists, createRequestFunction, serializeDataIfNeeded, setBearerAuthToObject, setSearchParams, toPathString } from '../common';
import { EnableDisableServiceAccountKeyPayload, ServiceAccountKeys, ServiceAccountPrivateKey } from '../model';
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
        deleteServiceAccountKey: async (accessToken: string, serviceAccountId: string, keyId: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serviceAccountId' is not null or undefined
            assertParamExists('deleteServiceAccountKey', 'serviceAccountId', serviceAccountId)
            // verify required parameter 'keyId' is not null or undefined
            assertParamExists('deleteServiceAccountKey', 'keyId', keyId)
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
         * @param {EnableDisableServiceAccountKeyPayload} enableDisableServiceAccountKeyPayload 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enableDisableServiceAccountKey: async (accessToken: string, serviceAccountId: string, keyId: string, enableDisableServiceAccountKeyPayload: EnableDisableServiceAccountKeyPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serviceAccountId' is not null or undefined
            assertParamExists('enableDisableServiceAccountKey', 'serviceAccountId', serviceAccountId)
            // verify required parameter 'keyId' is not null or undefined
            assertParamExists('enableDisableServiceAccountKey', 'keyId', keyId)
            // verify required parameter 'enableDisableServiceAccountKeyPayload' is not null or undefined
            assertParamExists('enableDisableServiceAccountKey', 'enableDisableServiceAccountKeyPayload', enableDisableServiceAccountKeyPayload)
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
            localVarRequestOptions.data = serializeDataIfNeeded(enableDisableServiceAccountKeyPayload, localVarRequestOptions, apsConfiguration)

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
        getAllServiceAccountKeys: async (accessToken: string, serviceAccountId: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serviceAccountId' is not null or undefined
            assertParamExists('getAllServiceAccountKeys', 'serviceAccountId', serviceAccountId)
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
        async deleteServiceAccountKey(accessToken: string, serviceAccountId: string, keyId: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteServiceAccountKey(accessToken, serviceAccountId, keyId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Enables or disables a service account key.
         * @summary Enable or Disable Key
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param {string} keyId The ID of the private key
         * @param {EnableDisableServiceAccountKeyPayload} enableDisableServiceAccountKeyPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async enableDisableServiceAccountKey(accessToken: string, serviceAccountId: string, keyId: string, enableDisableServiceAccountKeyPayload: EnableDisableServiceAccountKeyPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.enableDisableServiceAccountKey(accessToken, serviceAccountId, keyId, enableDisableServiceAccountKeyPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Lists all keys associated with the service account. This operation will only return key metadata, not the private or public key.
         * @summary Get All Keys
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllServiceAccountKeys(accessToken: string, serviceAccountId: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceAccountKeys>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllServiceAccountKeys(accessToken, serviceAccountId,  options);
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
    deleteServiceAccountKey(accessToken: string,serviceAccountId: string, keyId: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Enables or disables a service account key.
     * @summary Enable or Disable Key
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param {string} keyId The ID of the private key
     * @param {EnableDisableServiceAccountKeyPayload} enableDisableServiceAccountKeyPayload 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KeyManagementApiInterface
     */
    enableDisableServiceAccountKey(accessToken: string,serviceAccountId: string, keyId: string, enableDisableServiceAccountKeyPayload: EnableDisableServiceAccountKeyPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Lists all keys associated with the service account. This operation will only return key metadata, not the private or public key.
     * @summary Get All Keys
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KeyManagementApiInterface
     */
    getAllServiceAccountKeys(accessToken: string,serviceAccountId: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

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
    public async deleteServiceAccountKey(accessToken: string, serviceAccountId: string, keyId: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into deleteServiceAccountKey ");
      try {
        const request =  await KeyManagementApiFp(this.sdkManager).deleteServiceAccountKey(accessToken, serviceAccountId, keyId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`deleteServiceAccountKey Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`deleteServiceAccountKey Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new SecureServiceAccountApiError(`deleteServiceAccountKey Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`deleteServiceAccountKey Request failed with no response received: ${error.request}`);
            throw new SecureServiceAccountApiError(`deleteServiceAccountKey Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Enables or disables a service account key.
     * @summary Enable or Disable Key
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param {string} keyId The ID of the private key
     * @param {EnableDisableServiceAccountKeyPayload} enableDisableServiceAccountKeyPayload 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KeyManagementApi
     */
    public async enableDisableServiceAccountKey(accessToken: string, serviceAccountId: string, keyId: string, enableDisableServiceAccountKeyPayload: EnableDisableServiceAccountKeyPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into enableDisableServiceAccountKey ");
      try {
        const request =  await KeyManagementApiFp(this.sdkManager).enableDisableServiceAccountKey(accessToken, serviceAccountId, keyId, enableDisableServiceAccountKeyPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`enableDisableServiceAccountKey Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`enableDisableServiceAccountKey Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new SecureServiceAccountApiError(`enableDisableServiceAccountKey Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`enableDisableServiceAccountKey Request failed with no response received: ${error.request}`);
            throw new SecureServiceAccountApiError(`enableDisableServiceAccountKey Request failed with no response received: ${error.request}`, error);
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
    public async getAllServiceAccountKeys(accessToken: string, serviceAccountId: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getAllServiceAccountKeys ");
      try {
        const request =  await KeyManagementApiFp(this.sdkManager).getAllServiceAccountKeys(accessToken, serviceAccountId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getAllServiceAccountKeys Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getAllServiceAccountKeys Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new SecureServiceAccountApiError(`getAllServiceAccountKeys Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getAllServiceAccountKeys Request failed with no response received: ${error.request}`);
            throw new SecureServiceAccountApiError(`getAllServiceAccountKeys Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

