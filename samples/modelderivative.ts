import { ApiResponse, ApsConfiguration, ApsServiceRequestConfig, SdkManager, SdkManagerBuilder } from "@aps_sdk/autodesk-sdkmanager"
import { BeginsWith, Between, DeleteManifest, DerivativeDownload, EqualsTo, JobPayloadFormatAdvancedThumbnail, JobPayloadFormatSVFAdvancedRVT, MatchId, MatchIdType, ModelDerivativeClient, StaticAuthenticationProvider } from "@aps_sdk/model-derivative";
import { InformationalApi, SupportedFormats, JobPayloadFormatThumbnail, ExtractorVersion, JobPayloadFormatSVF2AdvancedRVT, Model2dView, JobPayloadFormatSVF2AdvancedIFC, BuildingStoreys, Width, Height, JobPayloadFormatSVFAdvancedIFC, Job, XAdsDerivativeFormat, Region, OutputType, Manifest, ModelViews, ObjectTree, ModelViewsDataMetadata, Properties, SpecificPropertiesPayload, SpecificPropertiesPayloadQuery, Payload, SpecificProperties } from "@aps_sdk/model-derivative";
import { JobPayloadOutputDestination, JobsApi, JobPayload, JobPayloadOutput, JobPayloadInput, JobPayloadFormat, JobPayloadFormatSVF2, JobPayloadFormatSVF, View } from "@aps_sdk/model-derivative";
import 'dotenv/config';

// SDK manager now optional. Each service client instantiates its own default instance of the SDK manager.
//const sdkmanager: SdkManager = SdkManagerBuilder.create().build();

const staticAuthenticationProvider = new StaticAuthenticationProvider(process.env.accessToken);
const modelDerivativeClient = new ModelDerivativeClient({ authenticationProvider: staticAuthenticationProvider });

//#region Informational 
/**
 * Function to fetch all supported formats
 */
async function getFormats() {
  try {
    const formats: SupportedFormats = await modelDerivativeClient.getFormats();
    //can be called by passing the access token as a parameter
    // const formats: SupportedFormats = await modelDerivativeClient.getFormats({accessToken:process.env.accessToken});
    console.log(formats);
  }
  catch (ModelDerivativeApiError) {
    console.error(ModelDerivativeApiError);
  }
}
getFormats();
