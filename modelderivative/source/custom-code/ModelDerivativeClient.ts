import { ApsServiceRequestConfig, SdkManager } from "@aps_sdk/autodesk-sdkmanager";
import { DerivativesApi, InformationalApi, JobsApi, ManifestApi, MetadataApi, ThumbnailsApi } from "../api";
import { AllProperties, DeleteManifest, DerivativeDownload, DerivativeHead, Formats, Height, Job, JobPayload, Manifest, ModelViews, ObjectTree, ReferencesPayload, Region, SpecificProperties, SpecificPropertiesPayload, SpecifyReferences, Width, XAdsDerivativeFormat } from "../model";
import { Stream } from "stream";


export class ModelDerivativeClient {
    public derivativesApi: DerivativesApi;
    public informationalApi: InformationalApi;
    public jobsApi: JobsApi;
    public manifestApi: ManifestApi;
    public metadataApi: MetadataApi;
    public thumbnailsApi: ThumbnailsApi;

    constructor(sdkManager: SdkManager) {
        this.derivativesApi = new DerivativesApi(sdkManager);
        this.informationalApi = new InformationalApi(sdkManager);
        this.jobsApi = new JobsApi(sdkManager);
        this.manifestApi = new ManifestApi(sdkManager);
        this.metadataApi = new MetadataApi(sdkManager);
        this.thumbnailsApi = new ThumbnailsApi(sdkManager);

    }


    //#region InformationalAPi

    public async getFormats(accessToken: string, optionalArgs?: { ifModifiedSince?: string, acceptEncoding?: string, options?: ApsServiceRequestConfig }): Promise<Formats> {
        const response = await this.informationalApi.getFormats(accessToken, optionalArgs?.ifModifiedSince, optionalArgs?.acceptEncoding, optionalArgs?.options);
        return response.content;
    }

    //#endregion InformationalApi


    //#region JobsApi
    public async specifyReferences(accessToken: string, urn: string, specifyReferencesRequest: ReferencesPayload, optionalArgs?: { region?: Region, options?: ApsServiceRequestConfig }): Promise<SpecifyReferences> {
        const response = await this.jobsApi.specifyReferences(accessToken, urn, optionalArgs?.region ?? Region.Us, specifyReferencesRequest, optionalArgs?.options);
        return response.content;
    }

    public async startJob(accessToken: string, jobPayload: JobPayload, optionalArgs?: { region?: Region, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, options?: ApsServiceRequestConfig }): Promise<Job> {
        const response = await this.jobsApi.startJob(accessToken, optionalArgs?.xAdsForce, optionalArgs?.xAdsDerivativeFormat, optionalArgs?.region ?? Region.Us, jobPayload, optionalArgs?.options);
        return response.content;

    }
    //#endregion JobsApi

    //#region ManifestApi
    public async getManifest(accessToken: string, urn: string, optionalArgs?: { region?: Region, acceptEncoding?: string, options?: ApsServiceRequestConfig }): Promise<Manifest> {
        const response = await this.manifestApi.getManifest(accessToken, urn, optionalArgs?.acceptEncoding, optionalArgs?.region ?? Region.Us, optionalArgs?.options);
        return response.content;

    }

    public async deleteManifest(accessToken: string, urn: string, optionalArgs?: { region?: Region, options?: ApsServiceRequestConfig }): Promise<DeleteManifest> {
        const response = await this.manifestApi.deleteManifest(accessToken, urn, optionalArgs?.region ?? Region.Us, optionalArgs?.options);
        return response.content;

    }
    //#endregion ManifestApi


    //#region DerivativesApi
    public async getDerivativeUrl(accessToken: string, derivativeUrn: string, urn: string, optionalArgs?: { region?: Region, minutesExpiration?: number, responseContentDisposition?: string, options?: ApsServiceRequestConfig }): Promise<DerivativeDownload> {
        const response = await this.derivativesApi.getDerivativeUrl(accessToken, derivativeUrn, urn, optionalArgs?.minutesExpiration, optionalArgs?.responseContentDisposition, optionalArgs?.region ?? Region.Us, optionalArgs?.options);
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


    public async headCheckDerivative(accessToken: string, urn: string, derivativeUrn: string, optionalArgs?: { region?: Region, options?: ApsServiceRequestConfig }): Promise<DerivativeHead> {
        const response = await this.derivativesApi.headCheckDerivative(accessToken, urn, derivativeUrn, optionalArgs?.region ?? Region.Us, optionalArgs?.options);
        if (response.response.status == 202) {
            return (new DerivativeHead(true));
        }
        else {
            (<DerivativeHead>response.content).isProcessing = false;
            return response.content;
        }
    }
    //#endregion DerivativesApi


    //#region thumbnailsApi
    public async getThumbnail(accessToken: string, urn: string, optionalArgs?: { region?: Region, width?: Width, height?: Height, options?: ApsServiceRequestConfig }): Promise<Stream> {
        const response = await this.thumbnailsApi.getThumbnail(accessToken, urn, optionalArgs?.width, optionalArgs?.height, optionalArgs?.region ?? Region.Us, optionalArgs?.options);
        return response.content;
    }
    //#endregion thumbnailsApi

    //#region metadataApi

    public async getObjectTree(accessToken: string, urn: string, modelGuid: string, optionalArgs?: { region?: Region, acceptEncoding?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, forceget?: string, objectId?: number, level?: string, options?: ApsServiceRequestConfig }): Promise<ObjectTree> {
        const response = await this.metadataApi.getObjectTree(accessToken, urn, modelGuid, optionalArgs?.acceptEncoding, optionalArgs?.region ?? Region.Us, optionalArgs?.xAdsForce, optionalArgs?.xAdsDerivativeFormat, optionalArgs?.forceget, optionalArgs?.objectId, optionalArgs?.level, optionalArgs?.options);
        if (response.response.status == 202) {
            return (new ObjectTree(true));
        }
        else {
            (<ObjectTree>response.content).isProcessing = false;
            return response.content;
        }
    }

    public async getModelViews(accessToken: string, urn: string, optionalArgs?: { region?: Region, acceptEncoding?: string, options?: ApsServiceRequestConfig }): Promise<ModelViews> {
        const response = await this.metadataApi.getModelViews(accessToken, urn, optionalArgs?.acceptEncoding, optionalArgs?.region ?? Region.Us, optionalArgs?.options);
        return response.content;
    }

    public async getAllProperties(accessToken: string, urn: string, modelGuid: string, optionalArgs?: { region?: Region, acceptEncoding?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, objectId?: number, forceget?: string, options?: ApsServiceRequestConfig }): Promise<AllProperties> {
        const response = await this.metadataApi.getAllProperties(accessToken, urn, modelGuid, optionalArgs?.acceptEncoding, optionalArgs?.xAdsForce, optionalArgs?.xAdsDerivativeFormat, optionalArgs?.region ?? Region.Us, optionalArgs?.objectId, optionalArgs?.forceget, optionalArgs?.options);
        if (response.response.status == 202) {
            return (new AllProperties(true));
        }
        else {
            (<AllProperties>response.content).isProcessing = false;
            return response.content;
        }
    }

    public async getSpecificProperties(accessToken: string, urn: string, modelGuid: string, specificPropertiesPayload: SpecificPropertiesPayload, optionalArgs?: { region?: Region, acceptEncoding?: string, options?: ApsServiceRequestConfig }): Promise<SpecificProperties> {
        const response = await this.metadataApi.fetchSpecificProperties(accessToken, urn, modelGuid, optionalArgs?.acceptEncoding, optionalArgs?.region ?? Region.Us, specificPropertiesPayload, optionalArgs?.options);
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
