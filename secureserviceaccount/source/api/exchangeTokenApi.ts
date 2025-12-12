
import { ApiResponse, ApsServiceRequestConfig, IApsConfiguration, SdkManager } from "@aps_sdk/autodesk-sdkmanager";
import type { AxiosInstance, AxiosPromise } from 'axios';
import { BaseApi, RequestArgs, RequiredError, SecureServiceAccountApiError } from '../base';
import { assertParamExists, createRequestFunction, setSearchParams, toPathString } from '../common';
import { ExchangeJwtToken, GrantType, Scope } from '../model';
/**
 * ExchangeTokenApi - axios parameter creator
 * @export
 */
export const ExchangeTokenApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Returns a three-legged access token for the JWT assertion you provide in the request body. See the Developer's Guide topic JWT Assertions for information on how to generate a JWT assertion for this operation.
 * 
 * This operation is only for confidential clients. It requires Basic Authorization (client_id, client_secret). Authentication information (client_id, client_secret) can be included either in the header or the body, but not both simultaneously.
         * @summary Exchanging JWT assertion for token
         * @param {GrantType} grantType 
         * @param {string} assertion The value of the JWT assertion.
         * @param {string} [authorization] Must be Basic <credentials>, where <credentials> is a base64 encoded string of client_id:client_secret. This parameter is required only if client_id and client_secret are not provided in the request body.
         * @param {string} [clientId] This attribute is optional; it serves as an additional option where the client can either use the authorization header or opt to send this information in the body.
         * @param {string} [clientSecret] This attribute is optional; it serves as an additional option where the client can either use the authorization header or opt to send this information in the body.
         * @param {Array<Scope>} [scope] This is a space-delimited list of scopes. The scope in the token endpoint request body should be a subset of or the same as the scope specified in the assertion. If the scope is not present, then the returned access token will have the same scope as the assertion.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        exchangeJwtAssertion: async (grantType: GrantType, assertion: string, authorization?: string, clientId?: string, clientSecret?: string, scope?: Array<Scope>, options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'grantType' is not null or undefined
            assertParamExists('exchangeJwtAssertion', 'grantType', grantType)
            // verify required parameter 'assertion' is not null or undefined
            assertParamExists('exchangeJwtAssertion', 'assertion', assertion)
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


            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


            if (grantType !== undefined) {
                localVarFormParams.set('grant_type', grantType as any);
            }

            if (clientId !== undefined) {
                localVarFormParams.set('client_id', clientId as any);
            }

            if (clientSecret !== undefined) {
                localVarFormParams.set('client_secret', clientSecret as any);
            }

            if (assertion !== undefined) {
                localVarFormParams.set('assertion', assertion as any);
            }
            if (scope) {
                localVarFormParams.set('scope', scope.join(' '));
            }



            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';

            localVarHeaderParameter['User-Agent'] = 'APS SDK/SECURE-SERVICE-ACCOUNT/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
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
 * ExchangeTokenApi - functional programming interface
 * @export
 */
export const ExchangeTokenApiFp = function (sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = ExchangeTokenApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Returns a three-legged access token for the JWT assertion you provide in the request body. See the Developer's Guide topic JWT Assertions for information on how to generate a JWT assertion for this operation.
 * 
 * This operation is only for confidential clients. It requires Basic Authorization (client_id, client_secret). Authentication information (client_id, client_secret) can be included either in the header or the body, but not both simultaneously.
         * @summary Exchanging JWT assertion for token
         * @param {GrantType} grantType 
         * @param {string} assertion The value of the JWT assertion.
         * @param {string} [authorization] Must be Basic <credentials>, where <credentials> is a base64 encoded string of client_id:client_secret. This parameter is required only if client_id and client_secret are not provided in the request body.
         * @param {string} [clientId] This attribute is optional; it serves as an additional option where the client can either use the authorization header or opt to send this information in the body.
         * @param {string} [clientSecret] This attribute is optional; it serves as an additional option where the client can either use the authorization header or opt to send this information in the body.
         * @param {Array<Scope>} [scope] This is a space-delimited list of scopes. The scope in the token endpoint request body should be a subset of or the same as the scope specified in the assertion. If the scope is not present, then the returned access token will have the same scope as the assertion.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async exchangeJwtAssertion(grantType: GrantType, assertion: string, authorization?: string, clientId?: string, clientSecret?: string, scope?: Array<Scope>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExchangeJwtToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.exchangeJwtAssertion(grantType, assertion, authorization, clientId, clientSecret, scope, options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * ExchangeTokenApi - interface
 * @export
 * @interface ExchangeTokenApi
 */
export interface ExchangeTokenApiInterface {
    /**
     * Returns a three-legged access token for the JWT assertion you provide in the request body. See the Developer's Guide topic JWT Assertions for information on how to generate a JWT assertion for this operation.
 * 
 * This operation is only for confidential clients. It requires Basic Authorization (client_id, client_secret). Authentication information (client_id, client_secret) can be included either in the header or the body, but not both simultaneously.
     * @summary Exchanging JWT assertion for token
     * @param {GrantType} grantType 
     * @param {string} assertion The value of the JWT assertion.
     * @param {string} [authorization] Must be Basic <credentials>, where <credentials> is a base64 encoded string of client_id:client_secret. This parameter is required only if client_id and client_secret are not provided in the request body.
     * @param {string} [clientId] This attribute is optional; it serves as an additional option where the client can either use the authorization header or opt to send this information in the body.
     * @param {string} [clientSecret] This attribute is optional; it serves as an additional option where the client can either use the authorization header or opt to send this information in the body.
     * @param {Array<Scope>} [scope] This is a space-delimited list of scopes. The scope in the token endpoint request body should be a subset of or the same as the scope specified in the assertion. If the scope is not present, then the returned access token will have the same scope as the assertion.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangeTokenApiInterface
     */
    exchangeJwtAssertion(grantType: GrantType, assertion: string, authorization?: string, clientId?: string, clientSecret?: string, scope?: Array<Scope>, options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * ExchangeTokenApi - object-oriented interface
 * @export
 * @class ExchangeTokenApi
 * @extends {BaseApi}
 */
export class ExchangeTokenApi extends BaseApi implements ExchangeTokenApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Returns a three-legged access token for the JWT assertion you provide in the request body. See the Developer's Guide topic JWT Assertions for information on how to generate a JWT assertion for this operation.
 * 
 * This operation is only for confidential clients. It requires Basic Authorization (client_id, client_secret). Authentication information (client_id, client_secret) can be included either in the header or the body, but not both simultaneously.
     * @summary Exchanging JWT assertion for token
     * @param {GrantType} grantType 
     * @param {string} assertion The value of the JWT assertion.
     * @param {string} [authorization] Must be Basic <credentials>, where <credentials> is a base64 encoded string of client_id:client_secret. This parameter is required only if client_id and client_secret are not provided in the request body.
     * @param {string} [clientId] This attribute is optional; it serves as an additional option where the client can either use the authorization header or opt to send this information in the body.
     * @param {string} [clientSecret] This attribute is optional; it serves as an additional option where the client can either use the authorization header or opt to send this information in the body.
     * @param {Array<Scope>} [scope] This is a space-delimited list of scopes. The scope in the token endpoint request body should be a subset of or the same as the scope specified in the assertion. If the scope is not present, then the returned access token will have the same scope as the assertion.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangeTokenApi
     */
    public async exchangeJwtAssertion(grantType: GrantType, assertion: string, authorization?: string, clientId?: string, clientSecret?: string, scope?: Array<Scope>, options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into exchangeJwtAssertion ");
        try {
            const request = await ExchangeTokenApiFp(this.sdkManager).exchangeJwtAssertion(grantType, assertion, authorization, clientId, clientSecret, scope, options);
            const response = await request(this.axios);
            this.logger.logInfo(`exchangeJwtAssertion Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response.data);
        } catch (error) {
            if (error.response) {
                const responseData = error.response.data;
                const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
                this.logger.logError(`exchangeJwtAssertion Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
                throw new SecureServiceAccountApiError(`exchangeJwtAssertion Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
            } else if (error.request) {
                this.logger.logError(`exchangeJwtAssertion Request failed with no response received: ${error.request}`);
                throw new SecureServiceAccountApiError(`exchangeJwtAssertion Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }
}

