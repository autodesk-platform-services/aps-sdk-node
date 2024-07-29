import { SdkManager, SdkManagerBuilder, ApsServiceRequestConfig } from "@aps_sdk/autodesk-sdkmanager";
import { PolicyKey, OssClient, Region } from "@aps_sdk/oss";



const bucketkey = "<bucketkey>";
const filepath = "<path/to/file>";
const sourceToUpload ="<path to source file>";//sourceToUpload can also be a stream object
const objectKey = "<objectKey>";
const access_token = "<token>";
const newObjName = "<filename>";
const hash = "<hash>";




const sdkmanager: SdkManager = SdkManagerBuilder.create().build();
const ossClient = new OssClient(sdkmanager);

/**
 * The below helper method takes care of the complete upload process, i.e. 
 * the steps 2 to 4 in this link (https://aps.autodesk.com/en/docs/data/v2/tutorials/app-managed-bucket/)
 */
async function upload() {
    
    //sourceToUpload can be either file path or stream of the object 
    const response = await ossClient.upload(bucketkey, objectKey, sourceToUpload, access_token);
    console.log(response);
}
async function download() {
    await ossClient.download(bucketkey, objectKey, filepath, access_token);
}
/**
     * This function will return the details about the specified bucket.
*/
async function getBucketDetails() {
    const response = await ossClient.getBucketDetails(access_token, bucketkey);
    console.log(response);
}

async function getBuckets() {
    const response = await ossClient.getBuckets(access_token);
    console.log(response);
}
async function batchSignedS3Upload() {
    const response = await ossClient.batchSignedS3Upload(access_token, bucketkey);
    console.log(response);
}

async function copyTo() {
    const response = await ossClient.copyTo(access_token, bucketkey, objectKey, newObjName);
    console.log(response);
}

async function createBucket() {
    const policyKey = PolicyKey.Temporary;
    const xAdsRegion: Region = Region.Us
    const response = await ossClient.createBucket(access_token, xAdsRegion, {
        bucketKey: bucketkey,
        policyKey: policyKey
    });
    console.log(response);
}

async function createSignedResource() {
    const response = await ossClient.createSignedResource(access_token, bucketkey, objectKey);
    console.log(response);
}

async function deleteBucket() {
    const response = await ossClient.deleteBucket(access_token, bucketkey);
    console.log(response);
}

async function deleteObject() {
    const response = await ossClient.deleteObject(access_token, bucketkey, objectKey);
    console.log(response);
}

async function deleteSignedResource() {
    const response = await ossClient.deleteSignedResource(access_token, hash);
    console.log(response);
}

async function getObjectDetails() {
    const response = await ossClient.getObjectDetails(access_token, bucketkey, objectKey);
    console.log(response);
}

async function getObjects() {
    const response = await ossClient.getObjects(access_token, bucketkey);
    console.log(response);
}

async function getSignedResource() {
    const response = await ossClient.getSignedResource(access_token, hash);
    console.log(response);
}

async function signedS3Download() {
    const response = await ossClient.signedS3Download(access_token, bucketkey, objectKey);
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

