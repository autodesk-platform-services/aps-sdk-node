//process.env['LOG_LEVEL'] = 'info'; /* The default log level is `Error`.*/

import { ApiResponse, ApsConfiguration, ApsServiceRequestConfig, SdkManager, SdkManagerBuilder } from "@aps_sdk/autodesk-sdkmanager"
import { BeginsWith, Between, DeleteManifest, DerivativeDownload, EqualsTo, JobPayloadFormatAdvancedThumbnail, JobPayloadFormatSVFAdvancedRVT, MatchId, MatchIdType, ModelDerivativeClient } from "@aps_sdk/model-derivative";
import { InformationalApi, SupportedFormats, JobPayloadFormatThumbnail, ExtractorVersion, JobPayloadFormatSVF2AdvancedRVT, Model2dView, JobPayloadFormatSVF2AdvancedIFC, BuildingStoreys, Width, Height, JobPayloadFormatSVFAdvancedIFC, Job, XAdsDerivativeFormat, Region, OutputType, Manifest, ModelViews, ObjectTree, ModelViewsDataMetadata, Properties, SpecificPropertiesPayload, SpecificPropertiesPayloadQuery, Payload, SpecificProperties } from "@aps_sdk/model-derivative";
import { JobPayloadOutputDestination, JobsApi, JobPayload, JobPayloadOutput, JobPayloadInput, JobPayloadFormat, JobPayloadFormatSVF2, JobPayloadFormatSVF, View } from "@aps_sdk/model-derivative";



const sdkmanager: SdkManager = SdkManagerBuilder.create().build();
const modelDerivativeClient = new ModelDerivativeClient(sdkmanager);

const token: string = process.env.token;
const urn: string = process.env.urn;
const derivativeUrn = process.env.derivativeUrn;
const modelGuid = process.env.modelGuid;

//#region Informational 
/**
 * Function to fetch all supported formats
 */
async function getFormats() {
  try {
    const formats: SupportedFormats = await modelDerivativeClient.getFormats(token);
    console.log(formats);
  }
  catch (error) {
    console.error(error);
  }
}
//#endregion

//#region Jobs 
/**
 * Function to start a translation job
 */
async function startjob() {
  try {
    // initialise svf2 output format with desired options
    const svfPayloadFormat: JobPayloadFormatSVF = {
      views: [View._2d, View._3d],
      type: OutputType.Svf,
      // optional advanced options
      advanced: <JobPayloadFormatSVFAdvancedRVT>{ _2dviews: Model2dView.Legacy, generateMasterViews: true, extractorVersion: ExtractorVersion.Next }
    };

    // initialise thumbnail output format with desired options
    const thumbnailPayloadformat: JobPayloadFormatThumbnail = {
      type: OutputType.Thumbnail,
      advanced: <JobPayloadFormatAdvancedThumbnail>{ width: Width[100], height: Height[200] }
    };

    const jobPayload: JobPayload = {
      input: <JobPayloadInput>{ urn: urn, compressedUrn: false }, //, rootfileName: '<>'
      output: <JobPayloadOutput>{
        formats: [svfPayloadFormat, thumbnailPayloadformat],

      }
    };

    let job: Job = await modelDerivativeClient.startJob(token, jobPayload);
    let result = job.result;
    console.log(job);

  }
  catch (error) {
    console.error(error);
  }

}

//#endregion

//#region Manifest 
/**
 * Function to fetch Manifest
 */
async function getManifest() {
  try {
    let manifest: Manifest = await modelDerivativeClient.getManifest(token, urn, { region: Region.Us });
    let hasThumbnail = manifest.hasThumbnail;
  }
  catch (error) {
    console.error(error);
  }
}

async function deleteManifest() {
  try {
    let result: DeleteManifest = await modelDerivativeClient.deleteManifest(token, urn);
  }
  catch (error) {
    console.error(error);
  }

}

//#endregion

//#region Derivatives 
/**
 * Function that returns the downloadable url
 */
async function getDerivativeUrl() {
  try {
    let derivativeDownload: DerivativeDownload = await modelDerivativeClient.getDerivativeUrl(token, derivativeUrn, urn);
    console.log(derivativeDownload.url);
  }
  catch (error) {
    console.error(error);
  }
}

async function getDerivativeHeaders() {
  try {
    let derivativeHeaders: ApiResponse = await modelDerivativeClient.headCheckDerivative(token, urn, derivativeUrn);
    console.log(derivativeHeaders.response.headers);
  }
  catch (error) {
    console.error(error);
  }
}
//#endregion

//#region MetaData API
/**
 * Function to get list of Model views
 */
async function getModelViews() {
  try {
    let modelViews: ModelViews = await modelDerivativeClient.getModelViews(token, urn);
    let guid = modelViews.data.metadata[1].guid;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Function to fetch Object tree
*/
async function getObjectTree() {
  try {
    let objectTree: ObjectTree = await modelDerivativeClient.getObjectTree(token, urn, modelGuid);
    if (objectTree.isProcessing) {
      console.log(" 202 response. Call the endpoint again or iteratively to get 200 OK.");
      return;
    }
    for (let x of objectTree.data.objects[0].objects) {
      console.log(x.name);
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 * Function to fetch all properties
*/
async function getAllProperties() {
  try {
    let allProperties: Properties = await modelDerivativeClient.getAllProperties(token, urn, modelGuid)
    if (allProperties.isProcessing) {
      console.log(" 202 response. Call the endpoint again or iteratively to get 200 OK.");
    }
  }
  catch (error) {
    console.error(error);
  }
}

/**
 * Function to fetch specific properties
*/

async function fetchSpecificProperties() {
  try {
    // Specify the request payload
    const specificPropertiesPayload: SpecificPropertiesPayload = {
      fields: ["objectid", "name"],
      query: <MatchId>{$in: [MatchIdType.ObjectId,2646]}
    };

    let specificProps: SpecificProperties = await modelDerivativeClient.fetchSpecificProperties(token, urn, modelGuid, specificPropertiesPayload);
    console.log(specificProps);
  }
  catch (error) {
    console.error(error);
  }
}
//#endregion

//#region Thumbnail
/**
 * Function to fetch thumbnail
*/
async function getThumbnail() {
  try {
    let response = await modelDerivativeClient.getThumbnail(token, urn);
  }
  catch (error) {
    console.error(error);
  }

}
//#endregion

//startjob();
// getFormats();
// getManifest();
// deleteManifest();
// getThumbnail();
// getDerivativeUrl();
// getDerivativeHeaders();
// getModelViews();
// getObjectTree();
// getAllProperties();
// fetchSpecificProperties();



