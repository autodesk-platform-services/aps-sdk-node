import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { Job } from '../model';
import { JobPayload } from '../model';
import { PostReferences200Response } from '../model';
import { PostReferencesRequest } from '../model';
/**
 * JobsApi - axios parameter creator
 * @export
 */
export declare const JobsApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
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
    postJob: (accessToken: string, contentType?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: boolean, jobPayload?: JobPayload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
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
    postReferences: (accessToken: string, urn: string, contentType?: string, postReferencesRequest?: PostReferencesRequest, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * JobsApi - functional programming interface
 * @export
 */
export declare const JobsApiFp: (sdkManager?: SDKManager) => {
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
    postJob(accessToken: string, contentType?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: boolean, jobPayload?: JobPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Job>>;
    /**
     * Stores the location of the files referenced by the source design with the Model Derivative service.  When you translate the source design with `Start Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_, and if  ``checkReferences`` is set to ``true``, the Model Derivative service uses this stored information to locate the referenced files.   Consider the following example. You have a design file like an Inventor assembly file, which contains references to the parts (part files) that make up the assembly. When the Model Derivative service translates the design to a derivative format, it needs to access the parts associated with the assembly. This operation stores information about the location of the part files with the Model Derivative service. When the assembly file is translated, the Model Derivative service uses this information to locate the referenced part files to generate the requested derivative.
     * @summary Specify References
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {string} [contentType] Must be &#x60;application/json&#x60;
     * @param {PostReferencesRequest} [postReferencesRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postReferences(accessToken: string, urn: string, contentType?: string, postReferencesRequest?: PostReferencesRequest, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostReferences200Response>>;
};
/**
 * JobsApi - interface
 * @export
 * @interface JobsApi
 */
export interface JobsApiInterface {
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
     * @memberof JobsApiInterface
     */
    postJob(accessToken: string, contentType?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: boolean, jobPayload?: JobPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
    /**
     * Stores the location of the files referenced by the source design with the Model Derivative service.  When you translate the source design with `Start Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_, and if  ``checkReferences`` is set to ``true``, the Model Derivative service uses this stored information to locate the referenced files.   Consider the following example. You have a design file like an Inventor assembly file, which contains references to the parts (part files) that make up the assembly. When the Model Derivative service translates the design to a derivative format, it needs to access the parts associated with the assembly. This operation stores information about the location of the part files with the Model Derivative service. When the assembly file is translated, the Model Derivative service uses this information to locate the referenced part files to generate the requested derivative.
     * @summary Specify References
     * @param {string} urn The URL safe Base64 encoded URN of the source design.
     * @param {string} [contentType] Must be &#x60;application/json&#x60;
     * @param {PostReferencesRequest} [postReferencesRequest]
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiInterface
     */
    postReferences(accessToken: string, urn: string, contentType?: string, postReferencesRequest?: PostReferencesRequest, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * JobsApi - object-oriented interface
 * @export
 * @class JobsApi
 * @extends {BaseAPI}
 */
export declare class JobsApi extends BaseAPI implements JobsApiInterface {
    private logger;
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
    postJob(accessToken: string, contentType?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: boolean, jobPayload?: JobPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
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
    postReferences(accessToken: string, urn: string, contentType?: string, postReferencesRequest?: PostReferencesRequest, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
