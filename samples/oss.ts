import { SdkManager, SdkManagerBuilder, ApsServiceRequestConfig } from "@aps_sdk/autodesk-sdkmanager";
import { PolicyKey, OssClient, Region, Batchsigneds3uploadObject, Batchsigneds3uploadObjectRequests } from "@aps_sdk/oss";
import 'dotenv/config';

const bucketKey = process.env.bucketKey;
const filePath = process.env.filePath;
const sourceToUpload = process.env.sourceToUpload; //sourceToUpload can also be a stream object
const objectKey = process.env.objectKey;
const accessToken = process.env.accessToken;
const newObjName = process.env.newObjName;
const hash = process.env.hash;




const sdkmanager: SdkManager = SdkManagerBuilder.create().build();
const ossClient = new OssClient(sdkmanager);

/**
 * The below helper method takes care of the complete upload process, i.e. 
 * the steps 2 to 4 in this link (https://aps.autodesk.com/en/docs/data/v2/tutorials/app-managed-bucket/)
 */
async function upload() {
    
    //sourceToUpload can be either file path or stream of the object 
    const response = await ossClient.upload(bucketKey, objectKey, sourceToUpload, accessToken);
    console.log(response);
}
async function download() {
    await ossClient.download(bucketKey, objectKey, filePath, accessToken);
}
/**
     * This function will return the details about the specified bucket.
*/
async function getBucketDetails() {
    const response = await ossClient.getBucketDetails(accessToken, bucketKey);
    console.log(response);
}

async function getBuckets() {
    const response = await ossClient.getBuckets(accessToken);
    console.log(response);
}
async function batchSignedS3Upload() { 
    const uploadObjects: Batchsigneds3uploadObject = {
        requests: [{objectKey: objectKey}]
    }
 
            const response = await ossClient.batchSignedS3Upload(accessToken, bucketKey,uploadObjects);
    console.log(response);
}

async function copyTo() {
    const response = await ossClient.copyTo(accessToken, bucketKey, objectKey, newObjName);
    console.log(response);
}

async function createBucket() {
    const policyKey = PolicyKey.Temporary;
    const xAdsRegion: Region = Region.Us
    const response = await ossClient.createBucket(accessToken, xAdsRegion, {
        bucketKey: bucketKey,
        policyKey: policyKey
    });
    console.log(response);
}

async function createSignedResource() {
    const response = await ossClient.createSignedResource(accessToken, bucketKey, objectKey);
    console.log(response);
}

async function deleteBucket() {
    const response = await ossClient.deleteBucket(accessToken, bucketKey);
    console.log(response);
}

async function deleteObject() {
    const response = await ossClient.deleteObject(accessToken, bucketKey, objectKey);
    console.log(response);
}

async function deleteSignedResource() {
    const response = await ossClient.deleteSignedResource(accessToken, hash);
    console.log(response);
}

async function getObjectDetails() {
    const response = await ossClient.getObjectDetails(accessToken, bucketKey, objectKey);
    console.log(response);
}

async function getObjects() {
    const response = await ossClient.getObjects(accessToken, bucketKey);
    console.log(response);
}

async function getSignedResource() {
    const response = await ossClient.getSignedResource(accessToken, hash);
    console.log(response);
}

async function signedS3Download() {
    const response = await ossClient.signedS3Download(accessToken, bucketKey, objectKey);
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

