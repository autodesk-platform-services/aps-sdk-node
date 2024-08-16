import { ApiResponse, ApsServiceRequestConfig, SdkManager, SdkManagerBuilder } from "@aps_sdk/autodesk-sdkmanager";
import { DerivativesApi, InformationalApi, JobsApi, ManifestApi, MetadataApi, ThumbnailsApi } from "../api";
import { Properties, DeleteManifest, DerivativeDownload, SupportedFormats, Height, Job, JobPayload, Manifest, ModelViews, ObjectTree, Region, SpecificProperties, SpecificPropertiesPayload, SpecifyReferences, Width, XAdsDerivativeFormat, SpecifyReferencesPayload } from "../model";
import { BaseClient } from "./BaseClient";
import { IAuthenticationProvider } from "./IAuthenticationProvider";

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
      * Returns an up-to-date list of supported translations. This operation also provides information on the types of derivatives that can be generated for each source design file type. Furthermore, it allows you to obtain a list of translations that have changed since a specified date.  See the `Supported Translation Formats table </en/docs/model-derivative/v2/overview/supported-translations>`_ for more details.  **Note:** We keep adding new file formats to our supported translations list, constantly.
      * @summary List Supported Formats
      * @param {string} [ifModifiedSince] Specifies a date in the &#x60;&#x60;Day of the week, DD Month YYYY HH:MM:SS GMT&#x60;&#x60; format. The response will contain only the formats modified since the specified date and time. If you specify an invalid date, the response will contain all supported formats. If no changes have been made after the specified date, the service returns HTTP status &#x60;&#x60;304&#x60;&#x60;, NOT MODIFIED.
      * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
      * @param {string}[accessToken] bearer access token
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof InformationalApi
      */
    public async getFormats(optionalArgs?: { ifModifiedSince?: string, acceptEncoding?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<SupportedFormats> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (this.authenticationProvider) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.informationalApi.getFormats(optionalArgs?.accessToken, optionalArgs?.ifModifiedSince, optionalArgs?.acceptEncoding, optionalArgs?.options);
        return response.content;
    }
}
