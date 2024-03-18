import { SDKManager, SdkManagerBuilder } from "@aps_sdk/model-derivative/node_modules/@aps_sdk/autodesk-sdkmanager";
import { ModelDerivativeClient } from "@aps_sdk/model-derivative";
import { InformationalApi, Formats, JobThumbnailOutputFormat, ExtractorVersion, JobSvf2OutputFormatAdvancedRVT, Model2dView, JobSvf2OutputFormatAdvancedIFC, BuildingStoreys, Width, Height, JobSvfOutputFormatAdvancedRVT, Job, XAdsDerivativeFormat, Region, Type, Manifest, ModelViews, ObjectTree, ModelViewsDataMetadata, AllProperties, SpecificPropertiesPayload, SpecificPropertiesPayloadQuery, Payload, SpecificProperties } from "@aps_sdk/model-derivative";
import { JobThumbnailOutputFormatAdvanced, JobPayloadOutputDestination, JobsApi, JobPayload, JobPayloadOutput, JobPayloadInput, JobPayloadFormat, JobSvf2OutputFormat, JobSvfOutputFormat, View } from "@aps_sdk/model-derivative";



const sdkmanager: SDKManager = SdkManagerBuilder.create().build();
const modelDerivativeClient = new ModelDerivativeClient(sdkmanager);

const token: string = "<token>";
const urn: string = "<urn>";
const derivativeUrn = "<derivativeUrn>";
/**
 * Function to fetch all supported formats
 */
async function getFormats() {

  const formats: Formats = await modelDerivativeClient.getFormats(token);
  console.log(formats);
  for (var key in formats.formats) {
    let value = formats.formats[key];
  }

}

/**
 * Function to start a translation job
 */
async function startjob() {

  // initialise svf2 output format with desired options
  const svfOutputFormat: JobSvfOutputFormat = {
    views: [View._2d, View._3d],
    type: Type.Svf,
    // optional advanced options
    advanced: <JobSvfOutputFormatAdvancedRVT>{ _2dviews: Model2dView.Legacy, generateMasterViews: true, extractorVersion: ExtractorVersion.Next }
  };

  // initialise thumbnail output format with desired options
  const thumbnailOutputformat: JobThumbnailOutputFormat = {
    type: Type.Thumbnail,
    advanced: <JobThumbnailOutputFormatAdvanced>{ width: Width[100], height: Height[200] }
  }

  const jobPayload: JobPayload = {
    input: <JobPayloadInput>{ urn: urn, compressedUrn: false, rootfileName: '<>' },
    output: <JobPayloadOutput>{
      formats: [svfOutputFormat, thumbnailOutputformat],

    }
  };

  let job: Job = await modelDerivativeClient.startJob(token, jobPayload);
  let result = job.result;
  console.log(job);

}

/**
 * Function to fetch Manifest
 */
async function getManifest() {

  let manifest: Manifest = await modelDerivativeClient.getManifest(token, urn, { region: Region.Emea });
  let hasThumbnail = manifest.hasThumbnail;
}

/**
 * Function that returns the downloadable url
 */
async function getDerivativeUrl() {

  let derivativeurl = await modelDerivativeClient.getDerivativeUrl(token, derivativeUrn, urn);
  console.log(derivativeurl.url);

}

/**
 * Function to get list of Model views
 */
async function getModelViews() {
  let modelViews: ModelViews = await modelDerivativeClient.getModelViews(token, urn);
  let guid = modelViews.data.metadata[1].guid;

}

/**
 * Function to fetch Object tree
*/
async function getObjectTree() {
  let objectTree: ObjectTree = await modelDerivativeClient.getObjectTree(token, urn, "bdfa4206-5fb6-742c-6529-28ac17e95ef2");
  if (objectTree.isProcessing) {
    console.log(" 202 response. Call the endpoint again or iteratively to get 200 OK.");
    return;
  }
  for (let x of objectTree.data.objects[0].objects) {
    console.log(x.name);
  }
}

/**
 * Function to fetch all properties
*/
async function getAllProperties() {
  let allProperties: AllProperties = await modelDerivativeClient.getAllProperties(token, urn, "779c3425-4b1a-cb23-41c5-a157010f45ca",)
  if (allProperties.isProcessing) {
    console.log(" 202 response. Call the endpoint again or iteratively to get 200 OK.");

  }
}

/**
 * Function to fetch specific properties
*/

async function fetchSpecificProperties() {
  const specificPropertiesPayload: SpecificPropertiesPayload = {
    query: { $in: ["objectid", 915, 920] },
    fields: ["objectid", "name"]

  }
  let specificProps: SpecificProperties = await modelDerivativeClient.getSpecificProperties(token, urn, "779c3425-4b1a-cb23-41c5-a157010f45ca", specificPropertiesPayload);

  console.log(specificProps);

}
//getDerivativeUrl(); 
//fetchSpecificProperties();
//getAllProperties();
//getObjectTree();
//getModelViews();
//getManifest();
//getFormats();
//startjob();
