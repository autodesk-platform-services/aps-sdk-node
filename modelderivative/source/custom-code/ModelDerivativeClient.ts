import { ApiResponse, ApsServiceRequestConfig, SdkManager, BaseClient, IAuthenticationProvider, SdkManagerBuilder } from "@aps_sdk/autodesk-sdkmanager";
import { DeleteManifest,DerivativeDownload,Height,Job,JobPayload,Manifest,ModelViews,ObjectTree,Properties,Region,SpecificProperties,SpecificPropertiesPayload,SpecifyReferences,SpecifyReferencesPayload,SupportedFormats,Width,XAdsDerivativeFormat,XAdsJobStatus,XAdsRole, } from '../model';
import { DerivativesApi,InformationalApi,ManifestApi,MetadataApi,ThumbnailsApi,JobsApi, }  from '../api';



/**
 * @summary Represents a collection of functions to interact with the ModelDerivative API endpoints.
 */

export class ModelDerivativeClient extends BaseClient {
    public derivativesApi: DerivativesApi;
    public informationalApi: InformationalApi;
    public manifestApi: ManifestApi;
    public metadataApi: MetadataApi;
    public thumbnailsApi: ThumbnailsApi;
    public jobsApi: JobsApi;

 constructor(optionalArgs?: { sdkManager?: SdkManager, authenticationProvider?: IAuthenticationProvider }) {
        super(optionalArgs?.authenticationProvider);
        if (!optionalArgs?.sdkManager) {
            (optionalArgs ??= {}).sdkManager = SdkManagerBuilder.create().build();
        }
    this.derivativesApi = new DerivativesApi(optionalArgs.sdkManager);
    this.informationalApi = new InformationalApi(optionalArgs.sdkManager);
    this.manifestApi = new ManifestApi(optionalArgs.sdkManager);
    this.metadataApi = new MetadataApi(optionalArgs.sdkManager);
    this.thumbnailsApi = new ThumbnailsApi(optionalArgs.sdkManager);
    this.jobsApi = new JobsApi(optionalArgs.sdkManager);
 }







   
  //#region ManifestApi
        /**
         * Deletes the manifest of the specified source design. It also deletes all derivatives (translated output files) generated from the source design. However, it does not delete the source design.
 * 
 * **Note:** This operation is idempotent. So, if you call it multiple times, even when no manifest exists, will still return a successful response (200).
 * 
         * @summary Delete Manifest
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
 * 
 * - ``US`` - (Default) Data center for the US region.
 * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
 * - ``APAC`` - (Beta) Data center for the Australia region.
 * 
 * **Note**: Beta features are subject to change. Please avoid using them in production environments.
 * 
         * @param {*} [options] Override http request option.
         * @param {string} [accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
         * @throws {RequiredError}
         */
    public async deleteManifest(urn: string,  optionalArgs: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<DeleteManifest> {
          if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.manifestApi.deleteManifest(optionalArgs?.accessToken, urn,  optionalArgs?. region, optionalArgs?.options);
        return response.content;
    }
   
   
  //#region MetadataApi
        /**
         * Queries the objects in the Model View (Viewable) specified by the ``modelGuid`` parameter and returns the specified properties in a paginated list. You can limit the number of objects to be queried by specifying a filter using the ``query`` attribute in the request body.
 * 
 * **Note:** A design file must be translated to SVF or SVF2 before you can query object properties.  
 * 
 * Before you call this operation:
 * 
 * - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views in the source design.
 * - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid``  parameter.
         * @summary Fetch Specific Properties
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} modelGuid The ID of the Model View you are querying. Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET>`_ operation to get the IDs of the Model Views in the source design.
         * @param {SpecificPropertiesPayload} specificPropertiesPayload 
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.  
 * 
 * If you specify ``gzip`` or ``*``, content is compressed and returned in gzip format.
 * 
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
 * 
 * - ``US`` - (Default) Data center for the US region.
 * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
 * - ``APAC`` - (Beta) Data center for the Australia region.
 * 
 * **Note**: Beta features are subject to change. Please avoid using them in production environments.
 * 
         * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:  
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
         * @param {*} [options] Override http request option.
         * @param {string} [accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
         * @throws {RequiredError}
         */
    public async fetchSpecificProperties(urn: string, modelGuid: string, specificPropertiesPayload: SpecificPropertiesPayload,  optionalArgs: { acceptEncoding?: string, region?: Region, xAdsDerivativeFormat?: XAdsDerivativeFormat, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<SpecificProperties> {
          if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.metadataApi.fetchSpecificProperties(optionalArgs?.accessToken, urn,  modelGuid,  null);
        return response.content;
    }
   
   
  //#region MetadataApi
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
         * @summary Fetch All Properties
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} modelGuid The ID of the Model View you are querying. Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET>`_ operation to get the IDs of the Model Views in the source design.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.  
 * 
 * If you specify ``gzip`` or ``*``, content is compressed and returned in gzip format.
 * 
         * @param {boolean} [xAdsForce] ``true``: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.
 * 
 * ``false``: (Default) Use previously parsed property data to extract the object tree.
 * 
         * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:  
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
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
 * 
 * - ``US`` - (Default) Data center for the US region.
 * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
 * - ``APAC`` - (Beta) Data center for the Australia region.
 * 
 * **Note**: Beta features are subject to change. Please avoid using them in production environments.
 * 
         * @param {number} [objectid] The Object ID of the object you want to restrict the response to. If you do not specify this parameter, all properties of all objects within the Model View are returned.  
         * @param {string} [forceget] ``true``: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if ``forceget`` is ``false``. 
 * 
 * ``false``: (Default) Does not retrieve resources if they are larger than 20 MB.
 * 
         * @param {*} [options] Override http request option.
         * @param {string} [accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
         * @throws {RequiredError}
         */
    public async getAllProperties(urn: string, modelGuid: string,  optionalArgs: { acceptEncoding?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, region?: Region, objectid?: number, forceget?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Properties> {
          if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.metadataApi.getAllProperties(optionalArgs?.accessToken, urn,  modelGuid,  optionalArgs?. acceptEncoding,  optionalArgs?. xAdsForce,  optionalArgs?. xAdsDerivativeFormat,  optionalArgs?. region,  optionalArgs?. objectid,  optionalArgs?. forceget, optionalArgs?.options);
        return response.content;
    }
   
   
  //#region DerivativesApi
        /**
         * Returns a download URL and a set of signed cookies, which lets you securely download the derivative specified by the ``derivativeUrn`` URI parameter. The signed cookies have a lifetime of 6 hours. You can use range headers with the returned download URL to download the derivative in chunks, in parallel.
         * @summary Fetch Derivative Download URL
         * @param {string} derivativeUrn The URL-encoded URN of the derivative. Use the `Fetch Manifest operation </en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/>`_to obtain the URNs of derivatives for the specified source design.
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {number} [minutesExpiration] Specifies how many minutes the signed cookies should remain valid. Default value is 360 minutes. The value you specify must be lower than the default value for this parameter. If you specify a value greater than the default value, the Model Derivative service will return an error with an HTTP status code of ``400``.
         * @param {string} [responseContentDisposition] The value that must be specified as the ``response-content-disposition`` query string parameter with the download URL. Must begin with ``attachment``. This value defaults to the default value corresponding to the derivative/file.
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
 * 
 * - ``US`` - (Default) Data center for the US region.
 * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
 * - ``APAC`` - (Beta) Data center for the Australia region.
 * 
 * **Note**: Beta features are subject to change. Please avoid using them in production environments.
 * 
         * @param {*} [options] Override http request option.
         * @param {string} [accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
         * @throws {RequiredError}
         */
    public async getDerivativeUrl(derivativeUrn: string, urn: string,  optionalArgs: { minutesExpiration?: number, responseContentDisposition?: string, region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<DerivativeDownload> {
          if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.derivativesApi.getDerivativeUrl(optionalArgs?.accessToken, derivativeUrn,  urn,  optionalArgs?. minutesExpiration,  optionalArgs?. responseContentDisposition,  optionalArgs?. region, optionalArgs?.options);
        return response.content;
    }
   
   
  //#region InformationalApi
        /**
         * Returns an up-to-date list of supported translations. This operation also provides information on the types of derivatives that can be generated for each source design file type. Furthermore, it allows you to obtain a list of translations that have changed since a specified date.
 * 
 * See the `Supported Translation Formats table </en/docs/model-derivative/v2/overview/supported-translations>`_ for more details.
 * 
 * **Note:** We keep adding new file formats to our supported translations list, constantly.
         * @summary List Supported Formats
         * @param {string} [ifModifiedSince] Specifies a date in the ``Day of the week, DD Month YYYY HH:MM:SS GMT`` format. The response will contain only the formats modified since the specified date and time. If you specify an invalid date, the response will contain all supported formats. If no changes have been made after the specified date, the service returns HTTP status ``304``, NOT MODIFIED.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.  
 * 
 * If you specify ``gzip`` or ``*``, content is compressed and returned in gzip format.
 * 
         * @param {*} [options] Override http request option.
         * @param {string} [accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
         * @throws {RequiredError}
         */
    public async getFormats( optionalArgs: { ifModifiedSince?: string, acceptEncoding?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<SupportedFormats> {
          if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.informationalApi.getFormats(optionalArgs?.accessToken, optionalArgs?. ifModifiedSince,  optionalArgs?. acceptEncoding, optionalArgs?.options);
        return response.content;
    }
   
   
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
         * @summary Fetch Manifest
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.  
 * 
 * If you specify ``gzip`` or ``*``, content is compressed and returned in gzip format.
 * 
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
 * 
 * - ``US`` - (Default) Data center for the US region.
 * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
 * - ``APAC`` - (Beta) Data center for the Australia region.
 * 
 * **Note**: Beta features are subject to change. Please avoid using them in production environments.
 * 
         * @param {*} [options] Override http request option.
         * @param {string} [accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
         * @throws {RequiredError}
         */
    public async getManifest(urn: string,  optionalArgs: { acceptEncoding?: string, region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Manifest> {
          if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.manifestApi.getManifest(optionalArgs?.accessToken, urn,  optionalArgs?. acceptEncoding,  optionalArgs?. region, optionalArgs?.options);
        return response.content;
    }
   
   
  //#region MetadataApi
        /**
         * Returns a list of Model Views (Viewables) in the source design specified by the ``urn`` parameter. It also returns an ID that uniquely identifies the Model View. You can use these IDs with other metadata operations to obtain information about the objects within those Model Views.
 * 
 * Designs created with applications like Fusion 360 and Inventor contain only one Model View per design. Applications like Revit allow multiple Model Views per design.
 * 
 * **Note:** You can retrieve metadata only from a design that has already been translated to SVF or SVF2.
         * @summary List Model Views
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.  
 * 
 * If you specify ``gzip`` or ``*``, content is compressed and returned in gzip format.
 * 
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
 * 
 * - ``US`` - (Default) Data center for the US region.
 * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
 * - ``APAC`` - (Beta) Data center for the Australia region.
 * 
 * **Note**: Beta features are subject to change. Please avoid using them in production environments.
 * 
         * @param {*} [options] Override http request option.
         * @param {string} [accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
         * @throws {RequiredError}
         */
    public async getModelViews(urn: string,  optionalArgs: { acceptEncoding?: string, region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ModelViews> {
          if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.metadataApi.getModelViews(optionalArgs?.accessToken, urn,  optionalArgs?. acceptEncoding,  optionalArgs?. region, optionalArgs?.options);
        return response.content;
    }
   
   
  //#region MetadataApi
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
         * @summary Fetch Object tree
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} modelGuid The ID of the Model View you are extracting the object tree from. Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET>`_ operation to get the IDs of the Model Views in the source design.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.  
 * 
 * If you specify ``gzip`` or ``*``, content is compressed and returned in gzip format.
 * 
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
 * 
 * - ``US`` - (Default) Data center for the US region.
 * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
 * - ``APAC`` - (Beta) Data center for the Australia region.
 * 
 * **Note**: Beta features are subject to change. Please avoid using them in production environments.
 * 
         * @param {boolean} [xAdsForce] ``true``: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.
 * 
 * ``false``: (Default) Use previously parsed property data to extract the object tree.
 * 
         * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:  
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
         * @param {string} [forceget] ``true``: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if ``forceget`` is ``false``. 
 * 
 * ``false``: (Default) Does not retrieve resources if they are larger than 20 MB.
 * 
         * @param {number} [objectid] If specified, retrieves the sub-tree that has the specified Object ID as its parent node. If this parameter is not specified, retrieves the entire object tree.
         * @param {string} [level] Specifies how many child levels of the hierarchy to return, when the ``objectid``  parameter is specified. Currently supports only ``level`` = ``1``.
         * @param {*} [options] Override http request option.
         * @param {string} [accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
         * @throws {RequiredError}
         */
    public async getObjectTree(urn: string, modelGuid: string,  optionalArgs: { acceptEncoding?: string, region?: Region, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, forceget?: string, objectid?: number, level?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ObjectTree> {
          if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.metadataApi.getObjectTree(optionalArgs?.accessToken, urn,  modelGuid,  optionalArgs?. acceptEncoding,  optionalArgs?. region,  optionalArgs?. xAdsForce,  optionalArgs?. xAdsDerivativeFormat,  optionalArgs?. forceget,  optionalArgs?. objectid,  optionalArgs?. level, optionalArgs?.options);
        return response.content;
    }
   
   
  //#region ThumbnailsApi
        /**
         * Downloads a thumbnail of the specified source design.
         * @summary Fetch Thumbnail
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
 * 
 * - ``US`` - (Default) Data center for the US region.
 * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
 * - ``APAC`` - (Beta) Data center for the Australia region.
 * 
 * **Note**: Beta features are subject to change. Please avoid using them in production environments.
 * 
         * @param {Width} [width] Width of thumbnail in pixels.  Possible values are: ``100``, ``200``, ``400``  If ``width`` is omitted, but ``height`` is specified, ``width`` defaults to ``height``. If both ``width`` and ``height`` are omitted, the server will return a thumbnail closest to ``200``, if such a thumbnail is available.
         * @param {Height} [height] Height of thumbnails. Possible values are: ``100``, ``200``, ``400``.If ``height`` is omitted, but ``width`` is specified, ``height`` defaults to ``width``.  If both ``width`` and ``height`` are omitted, the server will return a thumbnail closest to ``200``, if such a thumbnail is available
         * @param {*} [options] Override http request option.
         * @param {string} [accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
         * @throws {RequiredError}
         */
    public async getThumbnail(urn: string,  optionalArgs: { region?: Region, width?: Width, height?: Height, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<File> {
          if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.thumbnailsApi.getThumbnail(optionalArgs?.accessToken, urn,  optionalArgs?. region,  optionalArgs?. width,  optionalArgs?. height, optionalArgs?.options);
        return response.content;
    }
   
   
  //#region DerivativesApi
        /**
         * Returns information about the specified derivative.
 * 
 * Use this operation to determine the total content length of a derivative before you download it. If the derivative is large, you can choose to download the derivative in chunks, by specifying a chunk size using the ``Range`` header parameter.
         * @summary Check Derivative Details
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} derivativeUrn The URL-encoded URN of the derivative. Check the manifest of the source design to get the URNs of the derivatives available for download.
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
 * 
 * - ``US`` - (Default) Data center for the US region.
 * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
 * - ``APAC`` - (Beta) Data center for the Australia region.
 * 
 * **Note**: Beta features are subject to change. Please avoid using them in production environments.
 * 
         * @param {*} [options] Override http request option.
         * @param {string} [accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
         * @throws {RequiredError}
         */
    public async headCheckDerivative(urn: string, derivativeUrn: string,  optionalArgs: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<void> {
          if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.derivativesApi.headCheckDerivative(optionalArgs?.accessToken, urn,  derivativeUrn,  optionalArgs?. region, optionalArgs?.options);
        return response.content;
    }
   
   
  //#region JobsApi
        /**
         * Specifies the location of the files referenced by the specified source design.
 * 
 * When you call `Create Translation Job </en/docs/model-derivative/v2/reference/http/job-POST>`_, set  ``checkReferences`` to ``true``.   The Model Derivative service will then use the details you specify in this operation to locate and download the referenced files.
 * 
         * @summary Specify References
         * @param {string} urn The Base64 (URL Safe) encoded design URN.
         * @param {SpecifyReferencesPayload} specifyReferencesPayload 
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
 * 
 * - ``US`` - (Default) Data center for the US region.
 * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
 * - ``APAC`` - (Beta) Data center for the Australia region.
 * 
 * **Note**: Beta features are subject to change. Please avoid using them in production environments.
 * 
         * @param {*} [options] Override http request option.
         * @param {string} [accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
         * @throws {RequiredError}
         */
    public async specifyReferences(urn: string, specifyReferencesPayload: SpecifyReferencesPayload,  optionalArgs: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<SpecifyReferences> {
          if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.jobsApi.specifyReferences(optionalArgs?.accessToken, urn,  null);
        return response.content;
    }
   
   
  //#region JobsApi
        /**
         * Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionaly:
 * 
 * - Extract selected parts of a design and export the set of geometries in OBJ format.
 * - Generate different-sized thumbnails.
 * 
 * When the translation job runs, details about the process and generated derivatives are logged to a JSON file known as a manifest. This manifest is typically created during the first translation of a source design. Subsequently, the system updates the same manifest whenever a translation is performed for that design. 
 * 
 * If necessary, you can set the ``x-ads-force`` parameter to ``true``. Then, the system will delete the existing manifest and create a new one. However, be aware that doing so will also delete all previously generated derivatives.
         * @summary Create Translation Job
         * @param {JobPayload} jobPayload 
         * @param {boolean} [xAdsForce] ``true``: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.
 * 
 * ``false``: (Default) Use previously parsed property data to extract the object tree.
 * 
         * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:  
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
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
 * 
 * - ``US`` - (Default) Data center for the US region.
 * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
 * - ``APAC`` - (Beta) Data center for the Australia region.
 * 
 * **Note**: Beta features are subject to change. Please avoid using them in production environments.
 * 
         * @param {*} [options] Override http request option.
         * @param {string} [accessToken] An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().
         * @throws {RequiredError}
         */
    public async startJob(jobPayload: JobPayload,  optionalArgs: { xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Job> {
          if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.jobsApi.startJob(optionalArgs?.accessToken, null);
        return response.content;
    }
   
    
}