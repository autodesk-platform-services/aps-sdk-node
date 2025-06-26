import { ApiResponse, ApsServiceRequestConfig, BaseClient, IAuthenticationProvider, SdkManager, SdkManagerBuilder } from "@aps_sdk/autodesk-sdkmanager";
import { DerivativesApi, InformationalApi, JobsApi, ManifestApi, MetadataApi, ThumbnailsApi } from "../api";
import { DeleteManifest, DerivativeDownload, Height, Job, JobPayload, Manifest, ModelViews, ObjectTree, Properties, Region, SpecificProperties, SpecificPropertiesPayload, SpecifyReferences, SpecifyReferencesPayload, SupportedFormats, Width, XAdsDerivativeFormat } from "../model";

/**
 * @summary Represents a collection of functions to interact with the Model Derivative API endpoints. 
 */
export class ModelDerivativeClient extends BaseClient {
    public derivativesApi: DerivativesApi;
    public informationalApi: InformationalApi;
    public jobsApi: JobsApi;
    public manifestApi: ManifestApi;
    public metadataApi: MetadataApi;
    public thumbnailsApi: ThumbnailsApi;

    constructor(optionalArgs?: { sdkManager?: SdkManager, authenticationProvider?: IAuthenticationProvider }) {
        super(optionalArgs?.authenticationProvider);
        if (!optionalArgs?.sdkManager) {
            (optionalArgs ??= {}).sdkManager = SdkManagerBuilder.create().build();
        }
        this.derivativesApi = new DerivativesApi(optionalArgs.sdkManager);
        this.informationalApi = new InformationalApi(optionalArgs.sdkManager);
        this.jobsApi = new JobsApi(optionalArgs.sdkManager);
        this.manifestApi = new ManifestApi(optionalArgs.sdkManager);
        this.metadataApi = new MetadataApi(optionalArgs.sdkManager);
        this.thumbnailsApi = new ThumbnailsApi(optionalArgs.sdkManager);

    }


    //#region InformationalAPi
    /**
     * Returns an up-to-date list of supported translations. This operation also provides information on the types of derivatives that can be generated for each source design file type. Furthermore, it allows you to obtain a list of translations that have changed since a specified date.
     * 
     * See the [Supported Translation Formats table](/en/docs/model-derivative/v2/overview/supported-translations/) for more details.
     * 
     * **Note:** We keep adding new file formats to our supported translations list, constantly.
     * @remarks List Supported Formats
     * @param {string} [optionalArgs.ifModifiedSince] Specifies a date in the ``Day of the week, DD Month YYYY HH:MM:SS GMT`` format. The response will contain only the formats modified since the specified date and time. If you specify an invalid date, the response will contain all supported formats. If no changes have been made after the specified date, the service returns HTTP status ``304``, NOT MODIFIED.
     * @param {string} [optionalArgs.acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.  
     * 
     * If you specify ``gzip`` or ``*``, content is compressed and returned in gzip format.
     * 
     * @param {*} [optionalArgs.options] Override http request option.
     * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
     * @throws {@link ModelDerivativeApiError}
     * @memberof InformationalApi
     */
    public async getFormats(optionalArgs?: { ifModifiedSince?: string, acceptEncoding?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<SupportedFormats> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.informationalApi.getFormats(optionalArgs?.accessToken, optionalArgs?.ifModifiedSince, optionalArgs?.acceptEncoding, optionalArgs?.options);
        return response.content;
    }

    //#endregion InformationalApi


    //#region JobsApi
    /**
    * Specifies the location of the files referenced by the specified source design.
    * 
    * When you call `Create Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_, set  ``checkReferences`` to ``true``.   The Model Derivative service will then use the details you specify in this operation to locate and download the referenced files.
    * 
    * @remarks Specify References
    * @param {string} urn The Base64 (URL Safe) encoded design URN.
    * @param {SpecifyReferencesPayload} specifyReferencesPayload 
    * @param {Region} [optionalArgs.region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
    * 
    * - ``US`` - (Default) Data center for the US region.
    * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
    * - ``AUS`` - Data center for the Australia region.
    * - ``CAN`` - Data center for the Canada region.
    * - ``DEU`` - Data center for the Germany region.
    * - ``IND`` - Data center for the India region.
    * - ``JPN`` - Data center for the Japan region.
    * - ``GBR``  - Data center for the United Kingdom region.
    * 
    * @param {*} [optionalArgs.options] Override http request option.
    * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
    * @throws {@link ModelDerivativeApiError}
    */
    public async specifyReferences(urn: string, specifyReferencesPayload: SpecifyReferencesPayload, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<SpecifyReferences> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.jobsApi.specifyReferences(optionalArgs?.accessToken, urn, optionalArgs?.region ?? Region.Us, specifyReferencesPayload, optionalArgs?.options);
        return response.content;
    }

    /**
     * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionally:
    * 
    * - Extract selected parts of a design and export the set of geometries in OBJ format.
    * - Generate different-sized thumbnails.
    * 
    * When the translation job runs, details about the process and generated derivatives are logged to a JSON file known as a manifest. This manifest is typically created during the first translation of a source design. Subsequently, the system updates the same manifest whenever a translation is performed for that design. 
    * 
    * If necessary, you can set the ``x-ads-force`` parameter to ``true``. Then, the system will delete the existing manifest and create a new one. However, be aware that doing so will also delete all previously generated derivatives.
    * @remarks Create Translation Job
    * @param {JobPayload} jobPayload 
    * @param {string} [optionalArgs.xAdsForce] Specifies how the translation job must handle any existing manifest and derivatives.
    * 
    * - ``true``:  Deletes the existing manifest and derivatives of the source design before translation.
    * - ``false``: (Default) Updates existing manifest and generates derivatives only for the formats that the source design has no derivatives.
    * 
    * @param {XAdsDerivativeFormat} [optionalArgs.xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:  
    * 
    * - ``latest`` - (Default) Return SVF2 Object IDs. 
    * - ``fallback`` - Return SVF Object IDs.  
    * 
    * **Note:**  
    * 
    * 1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service. 
    * 2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side. 
    * 3. If you use this parameter with one derivative (URN), you must use it consistently across the following: 
    * 
    *    - `Create Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_ (for OBJ output) 
    *    - `Fetch Object Tree </en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET>`_
    *    - `Fetch All Properties </en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET>`_
    *    - `Fetch Specific Properties <en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-query-POST>`_
    * 
    * @param {Region} [optionalArgs.region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
    * 
    * - ``US`` - (Default) Data center for the US region.
    * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
    * - ``AUS`` - Data center for the Australia region.
    * - ``CAN`` - Data center for the Canada region.
    * - ``DEU`` - Data center for the Germany region.
    * - ``IND`` - Data center for the India region.
    * - ``JPN`` - Data center for the Japan region.
    * - ``GBR``  - Data center for the United Kingdom region.
    * 
    * @param {*} [optionalArgs.options] Override http request option.
    * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
    * @throws {@link ModelDerivativeApiError}
    */
    public async startJob(jobPayload: JobPayload, optionalArgs?: { region?: Region, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Job> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.jobsApi.startJob(optionalArgs?.accessToken, optionalArgs?.xAdsForce, optionalArgs?.xAdsDerivativeFormat, optionalArgs?.region ?? Region.Us, jobPayload, optionalArgs?.options);
        return response.content;

    }
    //#endregion JobsApi

    //#region ManifestApi

    /**
    * Retrieves the manifest of the specified source design.
    * 
    * The manifest is a JSON file containing information about all the derivatives translated from the specified source design. It contains information such as the URNs of the derivatives, the translation status of each derivative, and much more.
    * 
    * The first time you translate a source design, the Model Derivative service creates a manifest for that design. Thereafter, every time you translate that source design, even to a different format, the Model Derivative service updates the same manifest. It does not create a new manifest. Instead, the manifest acts like a central registry for all the derivatives of your source design created through the Model Derivative service.  
    * 
    * When the Model Derivative service starts a translation job (as a result of a request you make using `Create Translation Job </en/docs/model-derivative/v2/reference/http/jobs/job-POST/>`_), it keeps on updating the manifest at regular intervals. So, you can use the manifest to check the status and progress of each derivative that is being generated. When multiple derivatives have been requested each derivative may complete at a different time. So, each derivative has its own ``status`` attribute. The manifest also contains an overall ``status`` attribute. The overall ``status`` becomes ``complete`` when the ``status`` of all individual derivatives become complete.
    * 
    * Once the translation status of a derivative is ``complete`` you can download the derivative.
    * 
    * **Note:** You cannot download 3D SVF2 derivatives.
    * @remarks Fetch Manifest
    * @param {string} urn The URL-safe Base64 encoded URN of the source design.
    * @param {string} [optionalArgs.acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.  
    * 
    * If you specify ``gzip`` or ``*``, content is compressed and returned in gzip format.
    * 
    * @param {Region} [optionalArgs.region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
    * 
    * - ``US`` - (Default) Data center for the US region.
    * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
    * - ``AUS`` - Data center for the Australia region.
    * - ``CAN`` - Data center for the Canada region.
    * - ``DEU`` - Data center for the Germany region.
    * - ``IND`` - Data center for the India region.
    * - ``JPN`` - Data center for the Japan region.
    * - ``GBR``  - Data center for the United Kingdom region.
    * 
    * @param {*} [optionalArgs.options] Override http request option.
    * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
    * @throws {@link ModelDerivativeApiError}
    */
    public async getManifest(urn: string, optionalArgs?: { region?: Region, acceptEncoding?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Manifest> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.manifestApi.getManifest(optionalArgs?.accessToken, urn, optionalArgs?.acceptEncoding, optionalArgs?.region ?? Region.Us, optionalArgs?.options);
        return response.content;

    }

    /**
    * Deletes the manifest of the specified source design. It also deletes all derivatives (translated output files) generated from the source design. However, it does not delete the source design.
    * 
    * **Note:** This operation is idempotent. So, if you call it multiple times, even when no manifest exists, will still return a successful response (200).
    * 
    * @remarks Delete Manifest
    * @param {string} urn The URL-safe Base64 encoded URN of the source design.
    * @param {Region} [optionalArgs.region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
    * 
    * - ``US`` - (Default) Data center for the US region.
    * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
    * - ``AUS`` - Data center for the Australia region.
    * - ``CAN`` - Data center for the Canada region.
    * - ``DEU`` - Data center for the Germany region.
    * - ``IND`` - Data center for the India region.
    * - ``JPN`` - Data center for the Japan region.
    * - ``GBR``  - Data center for the United Kingdom region.
    * 
    * @param {*} [optionalArgs.options] Override http request option.
    * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
    * @throws {@link ModelDerivativeApiError}
    */
    public async deleteManifest(urn: string, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<DeleteManifest> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.manifestApi.deleteManifest(optionalArgs?.accessToken, urn, optionalArgs?.region ?? Region.Us, optionalArgs?.options);
        return response.content;

    }
    //#endregion ManifestApi


    //#region DerivativesApi
    /**
    * Returns a download URL and a set of signed cookies, which lets you securely download the derivative specified by the ``derivativeUrn`` URI parameter. The signed cookies have a lifetime of 6 hours. You can use range headers with the returned download URL to download the derivative in chunks, in parallel.
    * @remarks Fetch Derivative Download URL
    * @param {string} derivativeUrn The URL-encoded URN of the derivative. Use the `Fetch Manifest operation </en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/>`_to obtain the URNs of derivatives for the specified source design.
    * @param {string} urn The URL-safe Base64 encoded URN of the source design.
    * @param {number} [optionalArgs.minutesExpiration] Specifies how many minutes the signed cookies should remain valid. Default value is 360 minutes. The value you specify must be lower than the default value for this parameter. If you specify a value greater than the default value, the Model Derivative service will return an error with an HTTP status code of ``400``.
    * @param {string} [optionalArgs.responseContentDisposition] The value that must be specified as the ``response-content-disposition`` query string parameter with the download URL. Must begin with ``attachment``. This value defaults to the default value corresponding to the derivative/file.
    * @param {Region} [optionalArgs.region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
    * 
    * - ``US`` - (Default) Data center for the US region.
    * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
    * - ``AUS`` - Data center for the Australia region.
    * - ``CAN`` - Data center for the Canada region.
    * - ``DEU`` - Data center for the Germany region.
    * - ``IND`` - Data center for the India region.
    * - ``JPN`` - Data center for the Japan region.
    * - ``GBR``  - Data center for the United Kingdom region.
    * 
    * @param {*} [optionalArgs.options] Override http request option.
    * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
    * @throws {@link ModelDerivativeApiError}
    */
    public async getDerivativeUrl(derivativeUrn: string, urn: string, optionalArgs?: { region?: Region, minutesExpiration?: number, responseContentDisposition?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<DerivativeDownload> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.derivativesApi.getDerivativeUrl(optionalArgs?.accessToken, derivativeUrn, urn, optionalArgs?.minutesExpiration, optionalArgs?.responseContentDisposition, optionalArgs?.region ?? Region.Us, optionalArgs?.options);
        if (response.response.headers) {
            var cookies = response.response.headers.get("Set-Cookie").flatMap((a: string) => a.slice(a.indexOf('=') + 1, a.indexOf(';')));
            const url = new URL(response.content.url);
            url.searchParams.set("Policy", cookies[0])
            url.searchParams.set("Key-Pair-Id", cookies[1])
            url.searchParams.set("Signature", cookies[2])
            response.content.url = url.href;
        }
        return response.content;
    }


    /**
    * Returns information about the specified derivative.
    * 
    * Use this operation to determine the total content length of a derivative before you download it. If the derivative is large, you can choose to download the derivative in chunks, by specifying a chunk size using the ``Range`` header parameter.
    * @remarks Check Derivative Details
    * @param {string} urn The URL-safe Base64 encoded URN of the source design.
    * @param {string} derivativeUrn The URL-encoded URN of the derivative. Check the manifest of the source design to get the URNs of the derivatives available for download.
    * @param {Region} [optionalArgs.region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
    * 
    * - ``US`` - (Default) Data center for the US region.
    * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
    * - ``AUS`` - Data center for the Australia region.
    * - ``CAN`` - Data center for the Canada region.
    * - ``DEU`` - Data center for the Germany region.
    * - ``IND`` - Data center for the India region.
    * - ``JPN`` - Data center for the Japan region.
    * - ``GBR``  - Data center for the United Kingdom region.
    * 
    * @param {*} [optionalArgs.options] Override http request option.
    * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
    * @throws {@link ModelDerivativeApiError}
    */
    public async headCheckDerivative(urn: string, derivativeUrn: string, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ApiResponse> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.derivativesApi.headCheckDerivative(optionalArgs?.accessToken, urn, derivativeUrn, optionalArgs?.region ?? Region.Us, optionalArgs?.options);
        return response;
    }
    //#endregion DerivativesApi


    //#region thumbnailsApi
    /**
    * Downloads a thumbnail of the specified source design.
    * @remarks Fetch Thumbnail
    * @param {string} urn The URL-safe Base64 encoded URN of the source design.
    * @param {Region} [optionalArgs.region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
    * 
    * - ``US`` - (Default) Data center for the US region.
    * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
    * - ``AUS`` - Data center for the Australia region.
    * - ``CAN`` - Data center for the Canada region.
    * - ``DEU`` - Data center for the Germany region.
    * - ``IND`` - Data center for the India region.
    * - ``JPN`` - Data center for the Japan region.
    * - ``GBR``  - Data center for the United Kingdom region.
    * 
    * @param {Width} [optionalArgs.width] Width of thumbnail in pixels.  Possible values are: ``100``, ``200``, ``400``  If ``width`` is omitted, but ``height`` is specified, ``width`` defaults to ``height``. If both ``width`` and ``height`` are omitted, the server will return a thumbnail closest to ``200``, if such a thumbnail is available.
    * @param {Height} [optionalArgs.height] Height of thumbnails. Possible values are: ``100``, ``200``, ``400``.If ``height`` is omitted, but ``width`` is specified, ``height`` defaults to ``width``.  If both ``width`` and ``height`` are omitted, the server will return a thumbnail closest to ``200``, if such a thumbnail is available
    * @param {*} [optionalArgs.options] Override http request option.
    * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
    * @throws {@link ModelDerivativeApiError}
    */
    public async getThumbnail(urn: string, optionalArgs?: { region?: Region, width?: Width, height?: Height, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<string> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.thumbnailsApi.getThumbnail(optionalArgs?.accessToken, urn, optionalArgs?.region ?? Region.Us, optionalArgs?.width, optionalArgs?.height, optionalArgs?.options);
        return response.content;
    }
    //#endregion thumbnailsApi

    //#region metadataApi

    /**
    * Retrieves the structured hierarchy of objects, known as an object tree, from the specified Model View (Viewable) within the specified source design. The object tree represents the arrangement and relationships of various objects present in that Model View.
    * 
    * **Note:** A design file must be translated to SVF or SVF2 before you can retrieve its object tree.  
    * 
    * Before you call this operation:
    * 
    * - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views in the source design.
    * - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid``  parameter.
    * 
    * @remarks Fetch Object tree
    * @param {string} urn The URL-safe Base64 encoded URN of the source design.
    * @param {string} modelGuid The ID of the Model View you are extracting the object tree from. Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET>`_ operation to get the IDs of the Model Views in the source design.
    * @param {string} [optionalArgs.acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.  
    * 
    * If you specify ``gzip`` or ``*``, content is compressed and returned in gzip format.
    * 
    * @param {Region} [optionalArgs.region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
    * 
    * - ``US`` - (Default) Data center for the US region.
    * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
    * - ``AUS`` - Data center for the Australia region.
    * - ``CAN`` - Data center for the Canada region.
    * - ``DEU`` - Data center for the Germany region.
    * - ``IND`` - Data center for the India region.
    * - ``JPN`` - Data center for the Japan region.
    * - ``GBR`` - Data center for the United Kingdom region.
    * 
    * @param {boolean} [optionalArgs.xAdsForce] - ``true``: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.
    * - ``false``: (Default) Use previously parsed property data to extract the object tree.
    * 
    * @param {XAdsDerivativeFormat} [optionalArgs.xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:  
    * 
    * - ``latest`` - (Default) Return SVF2 Object IDs. 
    * - ``fallback`` - Return SVF Object IDs.  
    * 
    * **Note:**  
    * 
    * 1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service. 
    * 2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side. 
    * 3. If you use this parameter with one derivative (URN), you must use it consistently across the following: 
    * 
    *    - `Create Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_ (for OBJ output) 
    *    - `Fetch Object Tree </en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET>`_
    *    - `Fetch All Properties </en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET>`_
    *    - `Fetch Specific Properties <en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-query-POST>`_
    * 
    * @param {string} [optionalArgs.forceget] ``true``: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if ``forceget`` is ``false``. 
    * 
    * ``false``: (Default) Does not retrieve resources if they are larger than 20 MB.
    * 
    * @param {number} [optionalArgs.objectid] If specified, retrieves the sub-tree that has the specified Object ID as its parent node. If this parameter is not specified, retrieves the entire object tree.
    * @param {string} [optionalArgs.level] Specifies how many child levels of the hierarchy to return, when the ``objectid``  parameter is specified. Currently supports only ``level`` = ``1``.
    * @param {*} [optionalArgs.options] Override http request option.
    * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
    * @throws {@link ModelDerivativeApiError}
    */
    public async getObjectTree(urn: string, modelGuid: string, optionalArgs?: { region?: Region, acceptEncoding?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, forceget?: string, objectId?: number, level?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ObjectTree> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.metadataApi.getObjectTree(optionalArgs?.accessToken, urn, modelGuid, optionalArgs?.acceptEncoding, optionalArgs?.region ?? Region.Us, optionalArgs?.xAdsForce, optionalArgs?.xAdsDerivativeFormat, optionalArgs?.forceget, optionalArgs?.objectId, optionalArgs?.level, optionalArgs?.options);
        if (response.response.status == 202) {
            return (new ObjectTree(true));
        }
        else {
            (<ObjectTree>response.content).isProcessing = false;
            return response.content;
        }
    }


    /**
    * Returns a list of Model Views (Viewables) in the source design specified by the ``urn`` parameter. It also returns an ID that uniquely identifies the Model View. You can use these IDs with other metadata operations to obtain information about the objects within those Model Views.
    * 
    * Designs created with applications like Fusion 360 and Inventor contain only one Model View per design. Applications like Revit allow multiple Model Views per design.
    * 
    * **Note:** You can retrieve metadata only from a design that has already been translated to SVF or SVF2.
    * @remarks List Model Views
    * @param {string} urn The URL-safe Base64 encoded URN of the source design.
    * @param {string} [optionalArgs.acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.  
    * 
    * If you specify ``gzip`` or ``*``, content is compressed and returned in gzip format.
    * 
    * @param {Region} [optionalArgs.region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
    * 
    * - ``US`` - (Default) Data center for the US region.
    * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
    * - ``AUS`` - Data center for the Australia region.
    * - ``CAN`` - Data center for the Canada region.
    * - ``DEU`` - Data center for the Germany region.
    * - ``IND`` - Data center for the India region.
    * - ``JPN`` - Data center for the Japan region.
    * - ``GBR``  - Data center for the United Kingdom region.
    * 
    * @param {*} [optionalArgs.options] Override http request option.
    * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
    * @throws {@link ModelDerivativeApiError}
    */
    public async getModelViews(urn: string, optionalArgs?: { region?: Region, acceptEncoding?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ModelViews> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.metadataApi.getModelViews(optionalArgs?.accessToken, urn, optionalArgs?.acceptEncoding, optionalArgs?.region ?? Region.Us, optionalArgs?.options);
        return response.content;
    }


    /**
    * Returns a list of properties of all objects in the  Model View specified by the ``modelGuid`` parameter. 
    * 
    * This operation returns properties of all objects by default. However, you can restrict the results to a specific object by specifying its ID as the ``objectid`` parameter.
    * 
    * Properties are returned as a flat list, ordered, by their ``objectid``. The ``objectid`` is a non-persistent ID assigned to an object when the source design is translated to the SVF or SVF2 format. This means that:
    * 
    * - A design file must be translated to SVF or SVF2 before you can retrieve properties.
    * - The ``objectid`` of an object can change if the design is translated to SVF or SVF2 again. If you require a persistent ID across translations, use ``externalId`` to reference objects, instead of ``objectid``.
    * 
    * Before you call this operation:
    * 
    * - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views (Viewables) in the source design. 
    * - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid`` parameter.
    * 
    * **Tip**: Use `Fetch Specific Properties </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-query-POST/>`_ to retrieve only the objects and properties of interest. What’s more, the response is paginated. So, when the number of properties returned is large, responses start arriving more promptly.
    * @remarks Fetch All Properties
    * @param {string} urn The URL-safe Base64 encoded URN of the source design.
    * @param {string} modelGuid The ID of the Model View you are querying. Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET>`_ operation to get the IDs of the Model Views in the source design.
    * @param {string} [optionalArgs.acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.  
    * 
    * If you specify ``gzip`` or ``*``, content is compressed and returned in gzip format.
    * 
            * @param {boolean} [optionalArgs.xAdsForce] - ``true``: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.
    * - ``false``: (Default) Use previously parsed property data to extract the object tree.
    * 
            * @param {XAdsDerivativeFormat} [optionalArgs.xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:  
    * 
    * - ``latest`` - (Default) Return SVF2 Object IDs. 
    * - ``fallback`` - Return SVF Object IDs.  
    * 
    * **Note:**  
    * 
    * 1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service. 
    * 2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side. 
    * 3. If you use this parameter with one derivative (URN), you must use it consistently across the following: 
    * 
    *    - `Create Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_ (for OBJ output) 
    *    - `Fetch Object Tree </en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET>`_
    *    - `Fetch All Properties </en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET>`_
    *    - `Fetch Specific Properties <en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-query-POST>`_
    * 
    * @param {Region} [optionalArgs.region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
    * 
    * - ``US`` - (Default) Data center for the US region.
    * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
    * - ``AUS`` - Data center for the Australia region.
    * - ``CAN`` - Data center for the Canada region.
    * - ``DEU`` - Data center for the Germany region.
    * - ``IND`` - Data center for the India region.
    * - ``JPN`` - Data center for the Japan region.
    * - ``GBR``  - Data center for the United Kingdom region.
    * 
    * @param {number} [optionalArgs.objectid] The Object ID of the object you want to restrict the response to. If you do not specify this parameter, all properties of all objects within the Model View are returned.  
    * @param {string} [optionalArgs.forceget] ``true``: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if ``forceget`` is ``false``. 
    * 
    * ``false``: (Default) Does not retrieve resources if they are larger than 20 MB.
    * 
    * @param {*} [optionalArgs.options] Override http request option.
    * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
    * @throws {@link ModelDerivativeApiError}
    */
    public async getAllProperties(urn: string, modelGuid: string, optionalArgs?: { region?: Region, acceptEncoding?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, objectId?: number, forceget?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Properties> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.metadataApi.getAllProperties(optionalArgs?.accessToken, urn, modelGuid, optionalArgs?.acceptEncoding, optionalArgs?.xAdsForce, optionalArgs?.xAdsDerivativeFormat, optionalArgs?.region ?? Region.Us, optionalArgs?.objectId, optionalArgs?.forceget, optionalArgs?.options);
        if (response.response.status == 202) {
            return (new Properties(true));
        }
        else {
            (<Properties>response.content).isProcessing = false;
            return response.content;
        }
    }


    /**
    * Queries the objects in the Model View (Viewable) specified by the ``modelGuid`` parameter and returns the specified properties in a paginated list. You can limit the number of objects to be queried by specifying a filter using the ``query`` attribute in the request body.
    * 
    * **Note:** A design file must be translated to SVF or SVF2 before you can query object properties.  
    * 
    * Before you call this operation:
    * 
    * - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views in the source design.
    * - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid``  parameter.
    * @remarks Fetch Specific Properties
    * @param {string} urn The URL-safe Base64 encoded URN of the source design.
    * @param {string} modelGuid The ID of the Model View you are querying. Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET>`_ operation to get the IDs of the Model Views in the source design.
    * @param {SpecificPropertiesPayload} specificPropertiesPayload 
    * @param {string} [optionalArgs.acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.  
    * 
    * If you specify ``gzip`` or ``*``, content is compressed and returned in gzip format.
    * 
    * @param {Region} [optionalArgs.region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
    * 
    * - ``US`` - (Default) Data center for the US region.
    * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
    * - ``AUS`` - Data center for the Australia region.
    * - ``CAN`` - Data center for the Canada region.
    * - ``DEU`` - Data center for the Germany region.
    * - ``IND`` - Data center for the India region.
    * - ``JPN`` - Data center for the Japan region.
    * - ``GBR``  - Data center for the United Kingdom region.
    * 
    * @param {XAdsDerivativeFormat} [optionalArgs.xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:  
    * 
    * - ``latest`` - (Default) Return SVF2 Object IDs. 
    * - ``fallback`` - Return SVF Object IDs.  
    * 
    * **Note:**  
    * 
    * 1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service. 
    * 2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side. 
    * 3. If you use this parameter with one derivative (URN), you must use it consistently across the following: 
    * 
    *    - `Create Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_ (for OBJ output) 
    *    - `Fetch Object Tree </en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET>`_
    *    - `Fetch All Properties </en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET>`_
    *    - `Fetch Specific Properties <en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-query-POST>`_
    * 
    * @param {*} [optionalArgs.options] Override http request option.
    * @param {string} [optionalArgs.accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
    * @throws {@link ModelDerivativeApiError}
    */
    public async fetchSpecificProperties(urn: string, modelGuid: string, specificPropertiesPayload: SpecificPropertiesPayload, optionalArgs?: { region?: Region, xAdsDerivativeFormat?: XAdsDerivativeFormat, acceptEncoding?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<SpecificProperties> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.metadataApi.fetchSpecificProperties(optionalArgs?.accessToken, urn, modelGuid, optionalArgs?.acceptEncoding, optionalArgs?.region ?? Region.Us, optionalArgs?.xAdsDerivativeFormat, specificPropertiesPayload, optionalArgs?.options);
        if (response.response.status == 202) {
            return (new SpecificProperties(true));
        }
        else {
            (<SpecificProperties>response.content).isProcessing = false;
            return response.content;
        }
    }

    //#endregion metadataApi


}
