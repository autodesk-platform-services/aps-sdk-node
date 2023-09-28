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
exports.JobsApi = exports.JobsApiFp = exports.JobsApiAxiosParamCreator = void 0;
const autodesk_sdkmanager_1 = require("autodesk-sdkmanager");
const common_1 = require("../common");
const base_1 = require("../base");
/**
 * JobsApi - axios parameter creator
 * @export
 */
const JobsApiAxiosParamCreator = function (apsConfiguration) {
    return {
        /**
         * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionaly:  - Extract selected parts of a design and export the set of geometries in OBJ format. - Generate different-sized thumbnails.  When the translation job runs, progress information and details of the generated derivatives are logged to a JSON file that is called a manifest. A manifest is typically created the first time you translate the source design. Thereafter the system updates the same manifest each time a translation job is executed for that source design. If necessary, you can set the ``x-ads-force`` parameter to ``true``, which deletes the existing manifest and creates a fresh manifest. However, if you do so, all derivatives generated prior to this are deleted.
         * @summary Start Translation Job
         * @param {string} [contentType] Must be application/json
         * @param {boolean} [xAdsForce] - &#x60;&#x60;true&#x60;&#x60;: Deletes the existing manifest and derivatives of the source design before translation. - &#x60;&#x60;false&#x60;&#x60;: (Default) Updates existing manfest and generates derivatives only for the formats that the source design has no derivatives.
         * @param {boolean} [xAdsDerivativeFormat] Specifies how to interpret the &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; request body attribute for OBJ output. Possible values are:  - &#x60;&#x60;latest&#x60;&#x60;: (Default) Consider &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; to be  SVF2 Object IDs. - &#x60;&#x60;fallback&#x60;&#x60;: Consider &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; to be SVF Object IDs.
         * @param {JobPayload} [jobPayload]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postJob: (accessToken, contentType, xAdsForce, xAdsDerivativeFormat, jobPayload, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/designdata/job`;
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (contentType != null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xAdsForce != null) {
                localVarHeaderParameter['x-ads-force'] = typeof xAdsForce === 'string'
                    ? xAdsForce
                    : JSON.stringify(xAdsForce);
            }
            if (xAdsDerivativeFormat != null) {
                localVarHeaderParameter['x-ads-derivative-format'] = typeof xAdsDerivativeFormat === 'string'
                    ? xAdsDerivativeFormat
                    : JSON.stringify(xAdsDerivativeFormat);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/MODEL-DERIVATIVE-API/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(jobPayload, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Stores the location of the files referenced by the source design with the Model Derivative service.  When you translate the source design with `Start Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_, and if  ``checkReferences`` is set to ``true``, the Model Derivative service uses this stored information to locate the referenced files.   Consider the following example. You have a design file like an Inventor assembly file, which contains references to the parts (part files) that make up the assembly. When the Model Derivative service translates the design to a derivative format, it needs to access the parts associated with the assembly. This operation stores information about the location of the part files with the Model Derivative service. When the assembly file is translated, the Model Derivative service uses this information to locate the referenced part files to generate the requested derivative.
         * @summary Specify References
         * @param {string} urn The URL safe Base64 encoded URN of the source design.
         * @param {string} [contentType] Must be &#x60;application/json&#x60;
         * @param {PostReferencesRequest} [postReferencesRequest]
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postReferences: (accessToken, urn, contentType, postReferencesRequest, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'urn' is not null or undefined
            (0, common_1.assertParamExists)('postReferences', 'urn', urn);
            const localVarPath = `/designdata/{urn}/references`
                .replace(`{${"urn"}}`, encodeURIComponent(String(urn)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, accessToken);
            if (contentType != null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/MODEL-DERIVATIVE-API/TypeScript/1.0.0';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(postReferencesRequest, localVarRequestOptions, apsConfiguration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.JobsApiAxiosParamCreator = JobsApiAxiosParamCreator;
/**
 * JobsApi - functional programming interface
 * @export
 */
const JobsApiFp = function (sdkManager) {
    const localVarAxiosParamCreator = (0, exports.JobsApiAxiosParamCreator)(sdkManager.apsconfiguration);
    return {
        /**
         * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionaly:  - Extract selected parts of a design and export the set of geometries in OBJ format. - Generate different-sized thumbnails.  When the translation job runs, progress information and details of the generated derivatives are logged to a JSON file that is called a manifest. A manifest is typically created the first time you translate the source design. Thereafter the system updates the same manifest each time a translation job is executed for that source design. If necessary, you can set the ``x-ads-force`` parameter to ``true``, which deletes the existing manifest and creates a fresh manifest. However, if you do so, all derivatives generated prior to this are deleted.
         * @summary Start Translation Job
         * @param {string} [contentType] Must be application/json
         * @param {boolean} [xAdsForce] - &#x60;&#x60;true&#x60;&#x60;: Deletes the existing manifest and derivatives of the source design before translation. - &#x60;&#x60;false&#x60;&#x60;: (Default) Updates existing manfest and generates derivatives only for the formats that the source design has no derivatives.
         * @param {boolean} [xAdsDerivativeFormat] Specifies how to interpret the &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; request body attribute for OBJ output. Possible values are:  - &#x60;&#x60;latest&#x60;&#x60;: (Default) Consider &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; to be  SVF2 Object IDs. - &#x60;&#x60;fallback&#x60;&#x60;: Consider &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; to be SVF Object IDs.
         * @param {JobPayload} [jobPayload]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postJob(accessToken, contentType, xAdsForce, xAdsDerivativeFormat, jobPayload, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.postJob(accessToken, contentType, xAdsForce, xAdsDerivativeFormat, jobPayload, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
        /**
         * Stores the location of the files referenced by the source design with the Model Derivative service.  When you translate the source design with `Start Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_, and if  ``checkReferences`` is set to ``true``, the Model Derivative service uses this stored information to locate the referenced files.   Consider the following example. You have a design file like an Inventor assembly file, which contains references to the parts (part files) that make up the assembly. When the Model Derivative service translates the design to a derivative format, it needs to access the parts associated with the assembly. This operation stores information about the location of the part files with the Model Derivative service. When the assembly file is translated, the Model Derivative service uses this information to locate the referenced part files to generate the requested derivative.
         * @summary Specify References
         * @param {string} urn The URL safe Base64 encoded URN of the source design.
         * @param {string} [contentType] Must be &#x60;application/json&#x60;
         * @param {PostReferencesRequest} [postReferencesRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postReferences(accessToken, urn, contentType, postReferencesRequest, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.postReferences(accessToken, urn, contentType, postReferencesRequest, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, sdkManager);
            });
        },
    };
};
exports.JobsApiFp = JobsApiFp;
/**
 * JobsApi - object-oriented interface
 * @export
 * @class JobsApi
 * @extends {BaseAPI}
 */
class JobsApi extends base_1.BaseAPI {
    constructor() {
        super(...arguments);
        this.logger = this.sdkManager.logger;
    }
    /**
     * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionaly:  - Extract selected parts of a design and export the set of geometries in OBJ format. - Generate different-sized thumbnails.  When the translation job runs, progress information and details of the generated derivatives are logged to a JSON file that is called a manifest. A manifest is typically created the first time you translate the source design. Thereafter the system updates the same manifest each time a translation job is executed for that source design. If necessary, you can set the ``x-ads-force`` parameter to ``true``, which deletes the existing manifest and creates a fresh manifest. However, if you do so, all derivatives generated prior to this are deleted.
     * @summary Start Translation Job
     * @param {string} [contentType] Must be application/json
     * @param {boolean} [xAdsForce] - &#x60;&#x60;true&#x60;&#x60;: Deletes the existing manifest and derivatives of the source design before translation. - &#x60;&#x60;false&#x60;&#x60;: (Default) Updates existing manfest and generates derivatives only for the formats that the source design has no derivatives.
     * @param {boolean} [xAdsDerivativeFormat] Specifies how to interpret the &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; request body attribute for OBJ output. Possible values are:  - &#x60;&#x60;latest&#x60;&#x60;: (Default) Consider &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; to be  SVF2 Object IDs. - &#x60;&#x60;fallback&#x60;&#x60;: Consider &#x60;&#x60;formats.advanced.objectIds&#x60;&#x60; to be SVF Object IDs.
     * @param {JobPayload} [jobPayload]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    postJob(accessToken, contentType, xAdsForce, xAdsDerivativeFormat, jobPayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into postJob ");
            try {
                const request = yield (0, exports.JobsApiFp)(this.sdkManager).postJob(accessToken, contentType, xAdsForce, xAdsDerivativeFormat, jobPayload, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`postJob Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`postJob Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.ModelDerivativeApiApiError(`postJob Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`postJob Request failed with no response received: ${error.request}`);
                    throw new base_1.ModelDerivativeApiApiError(`postJob Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
    /**
     * Stores the location of the files referenced by the source design with the Model Derivative service.  When you translate the source design with `Start Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_, and if  ``checkReferences`` is set to ``true``, the Model Derivative service uses this stored information to locate the referenced files.   Consider the following example. You have a design file like an Inventor assembly file, which contains references to the parts (part files) that make up the assembly. When the Model Derivative service translates the design to a derivative format, it needs to access the parts associated with the assembly. This operation stores information about the location of the part files with the Model Derivative service. When the assembly file is translated, the Model Derivative service uses this information to locate the referenced part files to generate the requested derivative.
     * @summary Specify References
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {string} [contentType] Must be &#x60;application/json&#x60;
     * @param {PostReferencesRequest} [postReferencesRequest]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    postReferences(accessToken, urn, contentType, postReferencesRequest, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.logInfo("Entered into postReferences ");
            try {
                const request = yield (0, exports.JobsApiFp)(this.sdkManager).postReferences(accessToken, urn, contentType, postReferencesRequest, options);
                const response = yield request(this.axios);
                this.logger.logInfo(`postReferences Request completed successfully with status code: ${response.status}`);
                return new autodesk_sdkmanager_1.ApiResponse(response, response.data);
            }
            catch (error) {
                if (error.response) {
                    this.logger.logError(`postReferences Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
                    throw new base_1.ModelDerivativeApiApiError(`postReferences Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
                }
                else if (error.request) {
                    this.logger.logError(`postReferences Request failed with no response received: ${error.request}`);
                    throw new base_1.ModelDerivativeApiApiError(`postReferences Request failed with no response received: ${error.request}`, error);
                }
                throw error;
            }
        });
    }
}
exports.JobsApi = JobsApi;
