
import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { CollectionFormats, RequestArgs, BaseApi, RequiredError, SecureServiceAccountApiError } from '../base';
import { CreateServiceAccountPayload } from '../model';
import { EnableDisableServiceAccountPayload } from '../model';
import { ServiceAccount } from '../model';
import { ServiceAccountDetails } from '../model';
import { ServiceAccounts } from '../model';
/**
 * AccountManagementApi - axios parameter creator
 * @export
 */
export const AccountManagementApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Creates a service account. Only a server-to-server application can own service accounts.
 * 
 * An application can have up to 10 service accounts at any given time.
 * 
 * Upon a successful response, the operation returns the service account ID and email address.
         * @summary Create Service Account
         * @param {CreateServiceAccountPayload} body 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createServiceAccount: async (accessToken: string, body: CreateServiceAccountPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('createServiceAccount', 'body', body)
            const localVarPath = `/authentication/v2/service-accounts`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/SECURE-SERVICE-ACCOUNT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an existing service account. When a service account is deleted, all associated keys will also be deleted.
         * @summary Delete Service Account
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteServiceAccount: async (accessToken: string, serviceAccountId: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serviceAccountId' is not null or undefined
            assertParamExists('deleteServiceAccount', 'serviceAccountId', serviceAccountId)
            const localVarPath = `/authentication/v2/service-accounts/{serviceAccountId}`
                .replace(`{${"serviceAccountId"}}`, encodeURIComponent(String(serviceAccountId)));
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
         * Enables or disables a service account.
 * 
 * When a service account is disabled state, it loses its capability to manage its service account key. 
 * Assertions signed by the key will be treated as invalid.
 * 
 * This operation allows enabling a service account that is in a deactivated state.
         * @summary Enable or Disable Service Account
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param {EnableDisableServiceAccountPayload} enableDisableServiceAccountPayload 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enableDisableServiceAccount: async (accessToken: string, serviceAccountId: string, enableDisableServiceAccountPayload: EnableDisableServiceAccountPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serviceAccountId' is not null or undefined
            assertParamExists('enableDisableServiceAccount', 'serviceAccountId', serviceAccountId)
            // verify required parameter 'enableDisableServiceAccountPayload' is not null or undefined
            assertParamExists('enableDisableServiceAccount', 'enableDisableServiceAccountPayload', enableDisableServiceAccountPayload)
            const localVarPath = `/authentication/v2/service-accounts/{serviceAccountId}`
                .replace(`{${"serviceAccountId"}}`, encodeURIComponent(String(serviceAccountId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(enableDisableServiceAccountPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves all service accounts associated with an application.
         * @summary Get All Service Accounts
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllServiceAccounts: async (accessToken: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/authentication/v2/service-accounts`;
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
        /**
         * Retrieves the details for a service account.
         * @summary Get Service Account
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServiceAccount: async (accessToken: string, serviceAccountId: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serviceAccountId' is not null or undefined
            assertParamExists('getServiceAccount', 'serviceAccountId', serviceAccountId)
            const localVarPath = `/authentication/v2/service-accounts/{serviceAccountId}`
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
 * AccountManagementApi - functional programming interface
 * @export
 */
export const AccountManagementApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = AccountManagementApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Creates a service account. Only a server-to-server application can own service accounts.
 * 
 * An application can have up to 10 service accounts at any given time.
 * 
 * Upon a successful response, the operation returns the service account ID and email address.
         * @summary Create Service Account
         * @param {CreateServiceAccountPayload} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createServiceAccount(accessToken: string, body: CreateServiceAccountPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceAccount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createServiceAccount(accessToken, body,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Deletes an existing service account. When a service account is deleted, all associated keys will also be deleted.
         * @summary Delete Service Account
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteServiceAccount(accessToken: string, serviceAccountId: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteServiceAccount(accessToken, serviceAccountId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Enables or disables a service account.
 * 
 * When a service account is disabled state, it loses its capability to manage its service account key. 
 * Assertions signed by the key will be treated as invalid.
 * 
 * This operation allows enabling a service account that is in a deactivated state.
         * @summary Enable or Disable Service Account
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param {EnableDisableServiceAccountPayload} enableDisableServiceAccountPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async enableDisableServiceAccount(accessToken: string, serviceAccountId: string, enableDisableServiceAccountPayload: EnableDisableServiceAccountPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceAccountDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.enableDisableServiceAccount(accessToken, serviceAccountId, enableDisableServiceAccountPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves all service accounts associated with an application.
         * @summary Get All Service Accounts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllServiceAccounts(accessToken: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceAccounts>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllServiceAccounts(accessToken,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves the details for a service account.
         * @summary Get Service Account
         * @param {string} serviceAccountId The Autodesk ID of the service account
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getServiceAccount(accessToken: string, serviceAccountId: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceAccountDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getServiceAccount(accessToken, serviceAccountId,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * AccountManagementApi - interface
 * @export
 * @interface AccountManagementApi
 */
export interface AccountManagementApiInterface {
    /**
     * Creates a service account. Only a server-to-server application can own service accounts.
 * 
 * An application can have up to 10 service accounts at any given time.
 * 
 * Upon a successful response, the operation returns the service account ID and email address.
     * @summary Create Service Account
     * @param {CreateServiceAccountPayload} body 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountManagementApiInterface
     */
    createServiceAccount(accessToken: string,body: CreateServiceAccountPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Deletes an existing service account. When a service account is deleted, all associated keys will also be deleted.
     * @summary Delete Service Account
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountManagementApiInterface
     */
    deleteServiceAccount(accessToken: string,serviceAccountId: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Enables or disables a service account.
 * 
 * When a service account is disabled state, it loses its capability to manage its service account key. 
 * Assertions signed by the key will be treated as invalid.
 * 
 * This operation allows enabling a service account that is in a deactivated state.
     * @summary Enable or Disable Service Account
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param {EnableDisableServiceAccountPayload} enableDisableServiceAccountPayload 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountManagementApiInterface
     */
    enableDisableServiceAccount(accessToken: string,serviceAccountId: string, enableDisableServiceAccountPayload: EnableDisableServiceAccountPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves all service accounts associated with an application.
     * @summary Get All Service Accounts
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountManagementApiInterface
     */
    getAllServiceAccounts(accessToken: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves the details for a service account.
     * @summary Get Service Account
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountManagementApiInterface
     */
    getServiceAccount(accessToken: string,serviceAccountId: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * AccountManagementApi - object-oriented interface
 * @export
 * @class AccountManagementApi
 * @extends {BaseApi}
 */
export class AccountManagementApi extends BaseApi implements AccountManagementApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Creates a service account. Only a server-to-server application can own service accounts.
 * 
 * An application can have up to 10 service accounts at any given time.
 * 
 * Upon a successful response, the operation returns the service account ID and email address.
     * @summary Create Service Account
     * @param {CreateServiceAccountPayload} body 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountManagementApi
     */
    public async createServiceAccount(accessToken: string, body: CreateServiceAccountPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createServiceAccount ");
      try {
        const request =  await AccountManagementApiFp(this.sdkManager).createServiceAccount(accessToken, body,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createServiceAccount Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`createServiceAccount Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new SecureServiceAccountApiError(`createServiceAccount Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createServiceAccount Request failed with no response received: ${error.request}`);
            throw new SecureServiceAccountApiError(`createServiceAccount Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Deletes an existing service account. When a service account is deleted, all associated keys will also be deleted.
     * @summary Delete Service Account
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountManagementApi
     */
    public async deleteServiceAccount(accessToken: string, serviceAccountId: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into deleteServiceAccount ");
      try {
        const request =  await AccountManagementApiFp(this.sdkManager).deleteServiceAccount(accessToken, serviceAccountId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`deleteServiceAccount Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`deleteServiceAccount Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new SecureServiceAccountApiError(`deleteServiceAccount Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`deleteServiceAccount Request failed with no response received: ${error.request}`);
            throw new SecureServiceAccountApiError(`deleteServiceAccount Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Enables or disables a service account.
 * 
 * When a service account is disabled state, it loses its capability to manage its service account key. 
 * Assertions signed by the key will be treated as invalid.
 * 
 * This operation allows enabling a service account that is in a deactivated state.
     * @summary Enable or Disable Service Account
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param {EnableDisableServiceAccountPayload} enableDisableServiceAccountPayload 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountManagementApi
     */
    public async enableDisableServiceAccount(accessToken: string, serviceAccountId: string, enableDisableServiceAccountPayload: EnableDisableServiceAccountPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into enableDisableServiceAccount ");
      try {
        const request =  await AccountManagementApiFp(this.sdkManager).enableDisableServiceAccount(accessToken, serviceAccountId, enableDisableServiceAccountPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`enableDisableServiceAccount Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`enableDisableServiceAccount Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new SecureServiceAccountApiError(`enableDisableServiceAccount Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`enableDisableServiceAccount Request failed with no response received: ${error.request}`);
            throw new SecureServiceAccountApiError(`enableDisableServiceAccount Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves all service accounts associated with an application.
     * @summary Get All Service Accounts
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountManagementApi
     */
    public async getAllServiceAccounts(accessToken: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getAllServiceAccounts ");
      try {
        const request =  await AccountManagementApiFp(this.sdkManager).getAllServiceAccounts(accessToken,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getAllServiceAccounts Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getAllServiceAccounts Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new SecureServiceAccountApiError(`getAllServiceAccounts Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getAllServiceAccounts Request failed with no response received: ${error.request}`);
            throw new SecureServiceAccountApiError(`getAllServiceAccounts Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves the details for a service account.
     * @summary Get Service Account
     * @param {string} serviceAccountId The Autodesk ID of the service account
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountManagementApi
     */
    public async getServiceAccount(accessToken: string, serviceAccountId: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getServiceAccount ");
      try {
        const request =  await AccountManagementApiFp(this.sdkManager).getServiceAccount(accessToken, serviceAccountId,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getServiceAccount Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const responseData = error.response.data;
            const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
            this.logger.logError(`getServiceAccount Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new SecureServiceAccountApiError(`getServiceAccount Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getServiceAccount Request failed with no response received: ${error.request}`);
            throw new SecureServiceAccountApiError(`getServiceAccount Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

