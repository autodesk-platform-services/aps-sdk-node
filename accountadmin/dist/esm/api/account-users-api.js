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
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { BaseAPI, AccountAdminApiError } from '../base';
import { Region } from '../model';
import { Utils } from '../custom-code/Utils';
/**
 * AccountUsersApi - axios parameter creator
 * @export
 */
export const AccountUsersApiAxiosParamCreator = function (apsConfiguration) {
    return {
        /**
         * Create a new user in the BIM 360 member directory.
         * @summary Create User
         * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {UserPayload} [userPayload]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser: (accessToken, accountId, region, userPayload, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('createUser', 'accountId', accountId);
            const regionPath = Utils.GetPathfromRegion(region !== null && region !== void 0 ? region : Region.Us);
            const localVarPath = (regionPath + `{account_id}/users`)
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            // if (region != null) {
            //     localVarHeaderParameter['Region'] = typeof region === 'string'
            //         ? region
            //         : JSON.stringify(region);
            // }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/ACCOUNT-ADMIN/TypeScript/1.0.0-beta1';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = serializeDataIfNeeded(userPayload, localVarRequestOptions, apsConfiguration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Query the details of a specific user.
         * @summary Get the details of a user
         * @param {string} accountId The account ID of the user.
         * @param {string} userId User ID
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: (accessToken, accountId, userId, region, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getUser', 'accountId', accountId);
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUser', 'userId', userId);
            const regionPath = Utils.GetPathfromRegion(region !== null && region !== void 0 ? region : Region.Us);
            const localVarPath = (regionPath + `{account_id}/users/{user_id}`)
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            // if (region != null) {
            //     localVarHeaderParameter['Region'] = typeof region === 'string'
            //         ? region
            //         : JSON.stringify(region);
            // }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Query all the users in a specific BIM 360 account.
         * @summary Get account users
         * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
         * @param {number} [offset] Offset of response array Default value: 0
         * @param {string} [sort] Comma-separated fields to sort by in ascending order
         * @param {string} [field] Comma-separated fields to include in response
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers: (accessToken, accountId, region, limit, offset, sort, field, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getUsers', 'accountId', accountId);
            const regionPath = Utils.GetPathfromRegion(region !== null && region !== void 0 ? region : Region.Us);
            const localVarPath = (regionPath + `{account_id}/users`)
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (field !== undefined) {
                localVarQueryParameter['field'] = field;
            }
            // if (region != null) {
            //     localVarHeaderParameter['Region'] = typeof region === 'string'
            //         ? region
            //         : JSON.stringify(region);
            // }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Bulk import users to the master member directory in a BIM 360 account. (50 users maximum can be included in each call.)
         * @summary Bulk import users
         * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {Array<UserPayload>} [userPayload]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importUsers: (accessToken, accountId, region, userPayload, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('importUsers', 'accountId', accountId);
            const regionPath = Utils.GetPathfromRegion(region !== null && region !== void 0 ? region : Region.Us);
            const localVarPath = (regionPath + `{account_id}/users/import`)
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            // if (region != null) {
            //     localVarHeaderParameter['Region'] = typeof region === 'string'
            //         ? region
            //         : JSON.stringify(region);
            // }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/ACCOUNT-ADMIN/TypeScript/1.0.0-beta1';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = serializeDataIfNeeded(userPayload, localVarRequestOptions, apsConfiguration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Update a specific user’s status or default company.
         * @summary Update User
         * @param {string} accountId The account ID of the user.
         * @param {string} userId User ID
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {UserPatchPayload} [userPatchPayload]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchUserDetails: (accessToken, accountId, userId, region, userPatchPayload, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('patchUserDetails', 'accountId', accountId);
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('patchUserDetails', 'userId', userId);
            const regionPath = Utils.GetPathfromRegion(region !== null && region !== void 0 ? region : Region.Us);
            const localVarPath = (regionPath + `{account_id}/users/{user_id}`)
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PATCH' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            // if (region != null) {
            //     localVarHeaderParameter['Region'] = typeof region === 'string'
            //         ? region
            //         : JSON.stringify(region);
            // }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/ACCOUNT-ADMIN/TypeScript/1.0.0-beta1';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = serializeDataIfNeeded(userPatchPayload, localVarRequestOptions, apsConfiguration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Search users in the master member directory of a specific BIM 360 account by specified fields.
         * @summary Search Users
         * @param {string} accountId The account ID of the users.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {string} [name] User name to match Max length: 255
         * @param {string} [email] User email to match Max length: 255
         * @param {string} [companyName] User company to match Max length: 255
         * @param {string} [operator] Boolean operator to use: OR (default) or AND
         * @param {boolean} [partial] If true (default), perform a fuzzy match
         * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
         * @param {number} [offset] Offset of response array Default value: 0
         * @param {string} [sort] Comma-separated fields to sort by in ascending order
         * @param {string} [field] Comma-separated fields to include in response
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchUsers: (accessToken, accountId, region, name, email, companyName, operator, partial, limit, offset, sort, field, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('searchUsers', 'accountId', accountId);
            const regionPath = Utils.GetPathfromRegion(region !== null && region !== void 0 ? region : Region.Us);
            const localVarPath = (regionPath + `{account_id}/users/search`)
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield setBearerAuthToObject(localVarHeaderParameter, accessToken);
            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }
            if (companyName !== undefined) {
                localVarQueryParameter['company_name'] = companyName;
            }
            if (operator !== undefined) {
                localVarQueryParameter['operator'] = operator;
            }
            if (partial !== undefined) {
                localVarQueryParameter['partial'] = partial;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (field !== undefined) {
                localVarQueryParameter['field'] = field;
            }
            // if (region != null) {
            //     localVarHeaderParameter['Region'] = typeof region === 'string'
            //         ? region
            //         : JSON.stringify(region);
            // }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * AccountUsersApi - functional programming interface
 * @export
 */
export const AccountUsersApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = AccountUsersApiAxiosParamCreator(sdkManager.apsconfiguration);
    return {
        /**
         * Create a new user in the BIM 360 member directory.
         * @summary Create User
         * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {UserPayload} [userPayload]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser(accessToken, accountId, region, userPayload, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.createUser(accessToken, accountId, region, userPayload, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Query the details of a specific user.
         * @summary Get the details of a user
         * @param {string} accountId The account ID of the user.
         * @param {string} userId User ID
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(accessToken, accountId, userId, region, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getUser(accessToken, accountId, userId, region, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Query all the users in a specific BIM 360 account.
         * @summary Get account users
         * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
         * @param {number} [offset] Offset of response array Default value: 0
         * @param {string} [sort] Comma-separated fields to sort by in ascending order
         * @param {string} [field] Comma-separated fields to include in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers(accessToken, accountId, region, limit, offset, sort, field, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getUsers(accessToken, accountId, region, limit, offset, sort, field, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Bulk import users to the master member directory in a BIM 360 account. (50 users maximum can be included in each call.)
         * @summary Bulk import users
         * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {Array<UserPayload>} [userPayload]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importUsers(accessToken, accountId, region, userPayload, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.importUsers(accessToken, accountId, region, userPayload, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Update a specific user’s status or default company.
         * @summary Update User
         * @param {string} accountId The account ID of the user.
         * @param {string} userId User ID
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {UserPatchPayload} [userPatchPayload]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchUserDetails(accessToken, accountId, userId, region, userPatchPayload, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.patchUserDetails(accessToken, accountId, userId, region, userPatchPayload, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Search users in the master member directory of a specific BIM 360 account by specified fields.
         * @summary Search Users
         * @param {string} accountId The account ID of the users.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
         * @param {string} [name] User name to match Max length: 255
         * @param {string} [email] User email to match Max length: 255
         * @param {string} [companyName] User company to match Max length: 255
         * @param {string} [operator] Boolean operator to use: OR (default) or AND
         * @param {boolean} [partial] If true (default), perform a fuzzy match
         * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
         * @param {number} [offset] Offset of response array Default value: 0
         * @param {string} [sort] Comma-separated fields to sort by in ascending order
         * @param {string} [field] Comma-separated fields to include in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchUsers(accessToken, accountId, region, name, email, companyName, operator, partial, limit, offset, sort, field, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.searchUsers(accessToken, accountId, region, name, email, companyName, operator, partial, limit, offset, sort, field, options);
                return createRequestFunction(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
/**
 * AccountUsersApi - object-oriented interface
 * @export
 * @class AccountUsersApi
 * @extends {BaseAPI}
 */
export class AccountUsersApi extends BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
    /**
     * Create a new user in the BIM 360 member directory.
     * @summary Create User
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {UserPayload} [userPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    createUser(accessToken, accountId, region, userPayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into createUser ");
            try {
                const request = yield AccountUsersApiFp(this.sdkManager).createUser(accessToken, accountId, region, userPayload, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`createUser Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`createUser Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new AccountAdminApiError(`createUser Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`createUser Request failed with no response received: ${error.request}`);
                    throw new AccountAdminApiError(`createUser Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Query the details of a specific user.
     * @summary Get the details of a user
     * @param {string} accountId The account ID of the user.
     * @param {string} userId User ID
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    getUser(accessToken, accountId, userId, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getUser ");
            try {
                const request = yield AccountUsersApiFp(this.sdkManager).getUser(accessToken, accountId, userId, region, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getUser Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getUser Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new AccountAdminApiError(`getUser Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getUser Request failed with no response received: ${error.request}`);
                    throw new AccountAdminApiError(`getUser Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Query all the users in a specific BIM 360 account.
     * @summary Get account users
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    getUsers(accessToken, accountId, region, limit, offset, sort, field, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getUsers ");
            try {
                const request = yield AccountUsersApiFp(this.sdkManager).getUsers(accessToken, accountId, region, limit, offset, sort, field, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getUsers Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getUsers Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new AccountAdminApiError(`getUsers Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getUsers Request failed with no response received: ${error.request}`);
                    throw new AccountAdminApiError(`getUsers Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Bulk import users to the master member directory in a BIM 360 account. (50 users maximum can be included in each call.)
     * @summary Bulk import users
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {Array<UserPayload>} [userPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    importUsers(accessToken, accountId, region, userPayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into importUsers ");
            try {
                const request = yield AccountUsersApiFp(this.sdkManager).importUsers(accessToken, accountId, region, userPayload, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`importUsers Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`importUsers Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new AccountAdminApiError(`importUsers Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`importUsers Request failed with no response received: ${error.request}`);
                    throw new AccountAdminApiError(`importUsers Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Update a specific user’s status or default company.
     * @summary Update User
     * @param {string} accountId The account ID of the user.
     * @param {string} userId User ID
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {UserPatchPayload} [userPatchPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    patchUserDetails(accessToken, accountId, userId, region, userPatchPayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into patchUserDetails ");
            try {
                const request = yield AccountUsersApiFp(this.sdkManager).patchUserDetails(accessToken, accountId, userId, region, userPatchPayload, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`patchUserDetails Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`patchUserDetails Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new AccountAdminApiError(`patchUserDetails Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`patchUserDetails Request failed with no response received: ${error.request}`);
                    throw new AccountAdminApiError(`patchUserDetails Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Search users in the master member directory of a specific BIM 360 account by specified fields.
     * @summary Search Users
     * @param {string} accountId The account ID of the users.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA. By default, it is set to US.
     * @param {string} [name] User name to match Max length: 255
     * @param {string} [email] User email to match Max length: 255
     * @param {string} [companyName] User company to match Max length: 255
     * @param {string} [operator] Boolean operator to use: OR (default) or AND
     * @param {boolean} [partial] If true (default), perform a fuzzy match
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    searchUsers(accessToken, accountId, region, name, email, companyName, operator, partial, limit, offset, sort, field, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into searchUsers ");
            try {
                const request = yield AccountUsersApiFp(this.sdkManager).searchUsers(accessToken, accountId, region, name, email, companyName, operator, partial, limit, offset, sort, field, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`searchUsers Request completed successfully with status code: ${response.status}`);
                return new ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`searchUsers Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new AccountAdminApiError(`searchUsers Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`searchUsers Request failed with no response received: ${error.request}`);
                    throw new AccountAdminApiError(`searchUsers Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
