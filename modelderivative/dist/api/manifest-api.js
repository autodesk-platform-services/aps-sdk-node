"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManifestApi = exports.ManifestApiFp = exports.ManifestApiAxiosParamCreator = void 0;
const autodesk_sdkmanager_1 = require("autodesk-sdkmanager");
const common_1 = require("../common");
const base_1 = require("../base");
/**
 * ManifestApi - axios parameter creator
 * @export
 */
const ManifestApiAxiosParamCreator = function (apsConfiguration) {
    return {
        /**
         * Deletes the manifest of the specified source design. It also deletes all derivatives (translated output files) generated from the source design. However, it does not delete the source design.  **Note:** This operation is idempotent. So, if you call it multiple times, even when no manifest exists, will still return a successful response (200).
         * @summary Delete Manifest
         * @param {string} urn The URL safe Base64 encoded URN of the source design.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUrnManifest: (accessToken, urn, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'urn' is not null or undefined
            (0, common_1.assertParamExists)('deleteUrnManifest', 'urn', urn);
            const localVarPath = `/designdata/{urn}/manifest`
                .replace(`{${"urn"}}`, encodeURIComponent(String(urn)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Retrieves the manifest of the specified source design.  The manifest is a JSON file containing information about all the derivatives translated from the specified source design. It contains information such as the URNs of the derivatives, the translation status of each derivative, and much more.  The first time you translate a source design, the Model Derivative service creates a manifest for that source design. Thereafter, every time you translate that source design, even to a different format, the Model Derivative service updates that manifest. It does not create a new manifest. Instead, it keeps track of all derivatives of that design.    When the Model Derivative service starts a translation job (as a result of a request you make using `Start Translation Job </en/docs/model-derivative/v2/reference/http/jobs/job-POST/>`_), it keeps on updating the manifest at regular intervals. So, you can use the manifest to check the status and progress of each derivative that is being generated. When multiple derivatives have been requested each derivative may complete at a different time. So, each derivative has its own ``status`` attribute. The manifest also contains an overall ``status`` attribute. The overall ``status`` becomes ``complete`` when the ``status`` of all individual derivatives become complete.  Once the translation status of a derivative is ``complete`` you can download the URN.  **Note**: You cannot download 3D SVF2 derivatives.
         * @summary Fetch Manifest
         * @param {string} urn The URL safe Base64 encoded URN of the source design.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUrnManifest: (accessToken, urn, acceptEncoding, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'urn' is not null or undefined
            (0, common_1.assertParamExists)('getUrnManifest', 'urn', urn);
            const localVarPath = `/designdata/{urn}/manifest`
                .replace(`{${"urn"}}`, encodeURIComponent(String(urn)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (acceptEncoding != null) {
                localVarHeaderParameter['Accept-Encoding'] = String(acceptEncoding);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.ManifestApiAxiosParamCreator = ManifestApiAxiosParamCreator;
/**
 * ManifestApi - functional programming interface
 * @export
 */
const ManifestApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = (0, exports.ManifestApiAxiosParamCreator)(sdkManager.apsconfiguration);
    return {
        /**
         * Deletes the manifest of the specified source design. It also deletes all derivatives (translated output files) generated from the source design. However, it does not delete the source design.  **Note:** This operation is idempotent. So, if you call it multiple times, even when no manifest exists, will still return a successful response (200).
         * @summary Delete Manifest
         * @param {string} urn The URL safe Base64 encoded URN of the source design.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUrnManifest(accessToken, urn, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.deleteUrnManifest(accessToken, urn, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Retrieves the manifest of the specified source design.  The manifest is a JSON file containing information about all the derivatives translated from the specified source design. It contains information such as the URNs of the derivatives, the translation status of each derivative, and much more.  The first time you translate a source design, the Model Derivative service creates a manifest for that source design. Thereafter, every time you translate that source design, even to a different format, the Model Derivative service updates that manifest. It does not create a new manifest. Instead, it keeps track of all derivatives of that design.    When the Model Derivative service starts a translation job (as a result of a request you make using `Start Translation Job </en/docs/model-derivative/v2/reference/http/jobs/job-POST/>`_), it keeps on updating the manifest at regular intervals. So, you can use the manifest to check the status and progress of each derivative that is being generated. When multiple derivatives have been requested each derivative may complete at a different time. So, each derivative has its own ``status`` attribute. The manifest also contains an overall ``status`` attribute. The overall ``status`` becomes ``complete`` when the ``status`` of all individual derivatives become complete.  Once the translation status of a derivative is ``complete`` you can download the URN.  **Note**: You cannot download 3D SVF2 derivatives.
         * @summary Fetch Manifest
         * @param {string} urn The URL safe Base64 encoded URN of the source design.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUrnManifest(accessToken, urn, acceptEncoding, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getUrnManifest(accessToken, urn, acceptEncoding, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
exports.ManifestApiFp = ManifestApiFp;
/**
 * ManifestApi - object-oriented interface
 * @export
 * @class ManifestApi
 * @extends {BaseAPI}
 */
class ManifestApi extends base_1.BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
    /**
     * Deletes the manifest of the specified source design. It also deletes all derivatives (translated output files) generated from the source design. However, it does not delete the source design.  **Note:** This operation is idempotent. So, if you call it multiple times, even when no manifest exists, will still return a successful response (200).
     * @summary Delete Manifest
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManifestApi
     */
    deleteUrnManifest(accessToken, urn, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into deleteUrnManifest ");
            try {
                const request = yield (0, exports.ManifestApiFp)(this.sdkManager).deleteUrnManifest(accessToken, urn, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`deleteUrnManifest Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`deleteUrnManifest Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.ModelDerivativeApiApiError(`deleteUrnManifest Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`deleteUrnManifest Request failed with no response received: ${error.request}`);
                    throw new base_1.ModelDerivativeApiApiError(`deleteUrnManifest Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Retrieves the manifest of the specified source design.  The manifest is a JSON file containing information about all the derivatives translated from the specified source design. It contains information such as the URNs of the derivatives, the translation status of each derivative, and much more.  The first time you translate a source design, the Model Derivative service creates a manifest for that source design. Thereafter, every time you translate that source design, even to a different format, the Model Derivative service updates that manifest. It does not create a new manifest. Instead, it keeps track of all derivatives of that design.    When the Model Derivative service starts a translation job (as a result of a request you make using `Start Translation Job </en/docs/model-derivative/v2/reference/http/jobs/job-POST/>`_), it keeps on updating the manifest at regular intervals. So, you can use the manifest to check the status and progress of each derivative that is being generated. When multiple derivatives have been requested each derivative may complete at a different time. So, each derivative has its own ``status`` attribute. The manifest also contains an overall ``status`` attribute. The overall ``status`` becomes ``complete`` when the ``status`` of all individual derivatives become complete.  Once the translation status of a derivative is ``complete`` you can download the URN.  **Note**: You cannot download 3D SVF2 derivatives.
     * @summary Fetch Manifest
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManifestApi
     */
    getUrnManifest(accessToken, urn, acceptEncoding, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into getUrnManifest ");
            try {
                const request = yield (0, exports.ManifestApiFp)(this.sdkManager).getUrnManifest(accessToken, urn, acceptEncoding, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`getUrnManifest Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`getUrnManifest Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.ModelDerivativeApiApiError(`getUrnManifest Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`getUrnManifest Request failed with no response received: ${error.request}`);
                    throw new base_1.ModelDerivativeApiApiError(`getUrnManifest Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
exports.ManifestApi = ManifestApi;
