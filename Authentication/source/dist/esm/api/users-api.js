/* tslint:disable */
/* eslint-disable */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ApiResponse } from "@aps_sdk/autodesk-sdkmanager";
import { createRequestFunctionforUserInfo } from '../common';
import { BaseAPI, AuthenticationApiError } from '../base';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (apsConfiguration) {
    return {
        /**
         * Retrieves basic information for the given authenticated user. Only supports 3-legged access tokens.
         * @summary GET User Info
         * @param {string} [authorization] YOUR_3_LEGGED_ACCESS_TOKEN
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserinfo: (/* accessToken: string, */ authorization, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/userinfo`;
            const localVarUrlObj = new URL(localVarPath, "https://api.userprofile.autodesk.com");
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            // const localVarQueryParameter = {} as any;
            //  await setBearerAuthToObject(localVarHeaderParameter, accessToken)
            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            // setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            //localVarRequestOptions.baseURL = "https://api.userprofile.autodesk.com";
            return {
                url: localVarUrlObj.toString(),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(sdkManager.apsconfiguration);
    return {
        /**
         * Retrieves basic information for the given authenticated user. Only supports 3-legged access tokens.
         * @summary GET User Info
         * @param {string} [authorization] YOUR_3_LEGGED_ACCESS_TOKEN
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserinfo(/* accessToken: string, */ authorization, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getUserinfo(/* accessToken, */ authorization, options);
                return createRequestFunctionforUserInfo(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
    /**
     * Retrieves basic information for the given authenticated user. Only supports 3-legged access tokens.
     * @summary GET User Info
     * @param {string} [authorization] YOUR_3_LEGGED_ACCESS_TOKEN
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    getUserinfo(/* accessToken: string, */ authorization, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getUserinfo ");
            try {
                const request = yield UsersApiFp(this.sdkManager).getUserinfo(/* accessToken, */ authorization, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getUserinfo Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getUserinfo Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new AuthenticationApiError(`getUserinfo Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getUserinfo Request failed with no response received: ${error.request}`);
                    throw new AuthenticationApiError(`getUserinfo Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
