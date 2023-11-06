import { SDKManager, SdkManagerBuilder } from "autodesk-sdkmanager";
import { ModelDerivativeClient } from "model-derivative";
import { InformationalApi, Formats, JobThumbnailOutputFormat, ExtractorVersion, JobSvf2OutputFormatAdvancedRVT, Model2dView, JobSvf2OutputFormatAdvancedIFC, BuildingStoreys, Width, Height, JobSvfOutputFormatAdvancedRVT, Job, XAdsDerivativeFormat, Region, Type, Manifest, ModelViews, ObjectTree, ModelViewsDataMetadata, AllProperties, SpecificPropertiesPayload, SpecificPropertiesPayloadQuery, Payload, SpecificProperties } from "model-derivative";   //"../MDClient/node_modules/model-derivative/dist/api";
import { JobThumbnailOutputFormatAdvanced, JobPayloadOutputDestination, JobsApi, JobPayload, JobPayloadOutput, JobPayloadInput, JobPayloadFormat, JobSvf2OutputFormat, JobSvfOutputFormat, View } from "model-derivative";



const sdkmanager: SDKManager = SdkManagerBuilder.Create().build();
const modelDerivativeClient = new ModelDerivativeClient(sdkmanager);

const token: string = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY0RE9XMnJoOE9tbjNpdk1NU0xlNGQ2VHEwUSIsInBpLmF0bSI6ImFzc2MifQ.eyJzY29wZSI6WyJkYXRhOnJlYWQiLCJkYXRhOndyaXRlIiwiZGF0YTpjcmVhdGUiLCJidWNrZXQ6cmVhZCIsImJ1Y2tldDp1cGRhdGUiLCJidWNrZXQ6ZGVsZXRlIiwiYnVja2V0OmNyZWF0ZSIsInZpZXdhYmxlczpyZWFkIiwiY29kZTphbGwiXSwiY2xpZW50X2lkIjoiQnZ5TVFwZ3UyNjFVUnd5dm9GOTVwU0Z6QmUyOUt2U1IiLCJpc3MiOiJodHRwczovL2RldmVsb3Blci5hcGkuYXV0b2Rlc2suY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20iLCJqdGkiOiJ3TENFQjkzSWdQSTJxb25JWmQ5N1FmNWN3dld5bHNCN29pQTVhdHFaSkRvQ0x4VWZxdUNaRHdhSUhDRnlVUjEzIiwiZXhwIjoxNjk4ODQ3Mzg5fQ.qgQ0uk8WzzmvvF9n4wK63fQzKrHs7tT5x5FhMEIjeULsWfc01trcXX5mCNgnsSl9-Wx9qwU_9pol1GC_l86rFz4jCiX0NQTUqIDU4bILWn-k4Kii-JN2MqIg49QXBoiC-xm1YEsCEVoPEu4WZCDiiJxQ_YfR5ji6g6ZLj9eYJEhmbk4P_-WlJwhHLfolNcWyO8pudHisni0twBYokpINcU0xeg286WV6XJqSCzZJmGFZJsRmg4fD-JK2b6ZDZ9GekT0-JMS5GrSIUQVKUZhMU-zTMen2f44-ML4G-H1Y7ozFICs8PUKUqWzGV9WaXZD6fWbP6FJnFJBgE1uKxpTRfA";
const urn: string = "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dHN0YnVja2V0MTIzL09mZmljZS5ydnQ";

/**
 * Function to fetch all supported formats
 */
async function getFormats() {

  const formats: Formats = await modelDerivativeClient.getFormatsAsync(token);
  console.log(formats);
  for (var key in formats.formats)
  {
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
    advanced: <JobSvfOutputFormatAdvancedRVT>{_2dviews: Model2dView.Legacy, generateMasterViews: true, extractorVersion: ExtractorVersion.Next }
  };

  // initialise thumbnail output format with desired options
  const thumbnailOutputformat: JobThumbnailOutputFormat = {
    type: Type.Thumbnail,
    advanced: <JobThumbnailOutputFormatAdvanced>{ width:Width[100], height: Height[200] }
  }

  const jobPayload: JobPayload = {
    input: <JobPayloadInput>{ urn: urn, compressedUrn: false, rootFilename: 'Office.rvt' },
    output: <JobPayloadOutput> {
     formats: [svfOutputFormat, thumbnailOutputformat],
     // setting the destination will call the required endpoint. Defaults to US
      destination: <JobPayloadOutputDestination>{region: Region.EMEA} 
    }
  };

  let job: Job = await modelDerivativeClient.startJobAsync(token,jobPayload); 
  let result = job.result;
  
  console.log(job);
}

/**
 * Function to fetch Manifest
 */
async function getManifest() {

  let manifest: Manifest = await modelDerivativeClient.getManifestAsync(token, urn, Region.US);
  let y = manifest.hasThumbnail;
}


/**
 * Function to get list of Model views
 */
async function getModelViewsAsync() {
  let modelViews: ModelViews = await modelDerivativeClient.getModelViewsAsync(token, urn, Region.US);
  let y = modelViews.data.metadata[1].guid;

}

/**
 * Function to fetch Object tree
*/
async function getObjectTreeAsync() {
  let objectTree: ObjectTree = await modelDerivativeClient.getObjectTreeAsync(token, urn, "779c3425-4b1a-cb23-41c5-a157010f45ca");
  if (objectTree.isProcessing) {
    console.log(" 202 response. Call the endpoint again or iteratively to get 200 OK.");
    return;
  }
  let ss = objectTree.data.objects;
  for (let x of objectTree.data.objects[0].objects)
  { 
    console.log(x.name);
  }
}

/**
 * Function to fetch all properties
*/
async function getAllPropertiesAsync() {
  let allProperties: AllProperties = await modelDerivativeClient.getAllPropertiesAsync(token,urn, "779c3425-4b1a-cb23-41c5-a157010f45ca",)
  if (allProperties.isProcessing){
    console.log(" 202 response. Call the endpoint again or iteratively to get 200 OK.");
    let ss = allProperties.data.collection;
  }
}

/**
 * Function to fetch specific properties
*/

async function fetchSpecificPropertiesAsync() {
  const specificPropertiesPayload: SpecificPropertiesPayload =  {query:{$in: ["objectid",915,920]},
  fields: ["objectid","name"]   

  }
let specificProps: SpecificProperties =  await modelDerivativeClient.getSpecificPropertiesAsync(token,urn,"779c3425-4b1a-cb23-41c5-a157010f45ca",specificPropertiesPayload);

console.log(specificProps);

}

//fetchSpecificPropertiesAsync();
//getAllPropertiesAsync();
//getObjectTreeAsync();
//getModelViewsAsync();
//getManifest();
getFormats();
//startjob();
