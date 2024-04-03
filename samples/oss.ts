import { SdkManager, SdkManagerBuilder, ApsServiceRequestConfig } from "@aps_sdk/autodesk-sdkmanager";
import { OssClient } from "@aps_sdk/oss";
import { CreateBucketsPayloadPolicyKeyEnum, CreateBucketsPayload, CreateBucketXAdsRegionEnum, DeleteSignedResourceRegionEnum, UploadSignedResourceXAdsRegionEnum, GetSignedResourceRegionEnum, CreateSignedResourceAccessEnum, ObjectDetails, UploadSignedResourcesChunkXAdsRegionEnum, BucketObjects, HeadObjectDetailsWithEnum, BatchcompleteuploadObject, Batchsigneds3downloadObject, Batchsigneds3uploadObject, Completes3uploadBody, CreateObjectSigned, CreateSignedResource } from "@aps_sdk/oss";



const bucketkey = "<bucketkey>";
const filepath = "<path/to/file>";
const filename = "<filename>";
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
    const response = await ossClient.upload(bucketkey, filename, filepath, access_token);
    console.log(response);
}
async function download() {
    await ossClient.download(bucketkey, filename, filepath, access_token);
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
    const response = await ossClient.copyTo(access_token, bucketkey, filename, newObjName);
    console.log(response);
}

async function createBucket() {
    const policyKey: CreateBucketsPayloadPolicyKeyEnum = CreateBucketsPayloadPolicyKeyEnum.Temporary;
    const xAdsRegion: CreateBucketXAdsRegionEnum = CreateBucketXAdsRegionEnum.Us
    const response = await ossClient.createBucket(access_token, xAdsRegion, {
        bucketKey: bucketkey,
        policyKey: policyKey
    });
    console.log(response);
}

async function createSignedResource() {
    const response = await ossClient.createSignedResource(access_token, bucketkey, filename);
    console.log(response);
}

async function deleteBucket() {
    const response = await ossClient.deleteBucket(access_token, bucketkey);
    console.log(response);
}

async function deleteObject() {
    const response = await ossClient.deleteObject(access_token, bucketkey, filename);
    console.log(response);
}

async function deleteSignedResource() {
    const response = await ossClient.deleteSignedResource(access_token, hash);
    console.log(response);
}

async function getObjectDetails() {
    const response = await ossClient.getObjectDetails(access_token, bucketkey, filename);
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

async function headObjectDetails() {
    const response = await ossClient.headObjectDetails(access_token, bucketkey, filename);
    return response.content;
}

async function signedS3Download() {
    const response = await ossClient.signedS3Download(access_token, bucketkey, filename);
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
headObjectDetails();
signedS3Download();

