import { SdkManager, SdkManagerBuilder, ApsServiceRequestConfig, StaticAuthenticationProvider } from "@aps_sdk/autodesk-sdkmanager";
import { Batchsigneds3uploadObject, OssClient,PolicyKey,Region  } from "@aps_sdk/oss";
import 'dotenv/config';

const bucketKey = process.env.bucketKey;
const filePath = process.env.filePath;
const sourceToUpload = process.env.sourceToUpload; //sourceToUpload can also be a stream object
const objectKey = process.env.objectKey;
const accessToken = process.env.accessToken;
const newObjName = process.env.newObjName;
const hash = process.env.hash;



const staticAuthenticationProvider = new StaticAuthenticationProvider(accessToken);
const ossClient = new OssClient({ authenticationProvider: staticAuthenticationProvider});


/**
 * The below helper method takes care of the complete upload process, i.e. 
 * the steps 2 to 4 in this link (https://aps.autodesk.com/en/docs/data/v2/tutorials/app-managed-bucket/)
 */
async function upload() {
    
    //sourceToUpload can be either file path or stream of the object 
    const response = await ossClient.upload(bucketKey, objectKey, sourceToUpload);
    console.log(response);
}
async function download() {
    await ossClient.download(bucketKey, objectKey, filePath);
}
/**
     * This function will return the details about the specified bucket.
*/
async function getBucketDetails() {
    const response = await ossClient.getBucketDetails(bucketKey);
    console.log(response);
}

async function getBuckets() {
    const response = await ossClient.getBuckets();
    console.log(response);
}
async function batchSignedS3Upload() { 
    const uploadObjects: Batchsigneds3uploadObject = {
        requests: [{objectKey: objectKey}]
    }
 
            const response = await ossClient.batchSignedS3Upload(bucketKey,uploadObjects);
    console.log(response);
}

async function copyTo() {
    const response = await ossClient.copyTo(bucketKey, objectKey, newObjName);
    console.log(response);
}

async function createBucket() {
    const policyKey = PolicyKey.Temporary;
    const xAdsRegion: Region = Region.Us
    const response = await ossClient.createBucket(xAdsRegion, {
        bucketKey: bucketKey,
        policyKey: policyKey
    });
    console.log(response);
}

async function createSignedResource() {
    const response = await ossClient.createSignedResource( bucketKey, objectKey);
    console.log(response);
}

async function deleteBucket() {
    const response = await ossClient.deleteBucket(bucketKey);
    console.log(response);
}

async function deleteObject() {
    const response = await ossClient.deleteObject(bucketKey, objectKey);
    console.log(response);
}

async function deleteSignedResource() {
    const response = await ossClient.deleteSignedResource(hash);
    console.log(response);
}

async function getObjectDetails() {
    const response = await ossClient.getObjectDetails(bucketKey, objectKey);
    console.log(response);
}

async function getObjects() {
    const response = await ossClient.getObjects(bucketKey);
    console.log(response);
}

async function getSignedResource() {
    const response = await ossClient.getSignedResource(hash);
    console.log(response);
}

async function signedS3Download() {
    const response = await ossClient.signedS3Download(bucketKey, objectKey);
    console.log(response);
}


upload();
download();
getBuckets();
getBucketDetails();
batchSignedS3Upload();
copyTo();
createBucket();
createSignedResource();
deleteBucket();
deleteObject();
deleteSignedResource();
getObjectDetails();
getObjects();
getSignedResource();
signedS3Download();

