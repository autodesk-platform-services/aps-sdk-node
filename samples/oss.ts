import { SDKManager, SdkManagerBuilder } from "@aps_sdk/autodesk-sdkmanager";
import { OssClient } from "@aps_sdk/oss";


const bucketkey = "<bucketkey>";
const filepath = "<path/to/file>";
const  filename = "<filename>";
var access_token = "<token>";


const sdkmanager: SDKManager = SdkManagerBuilder.Create().build();
const ossClient = new OssClient(sdkmanager);

    /**
     * The below helper method takes care of the complete upload process, i.e. 
     * the steps 2 to 4 in this link (https://aps.autodesk.com/en/docs/data/v2/tutorials/app-managed-bucket/)
     */
async function Upload()
{
    const response = await ossClient.Upload(bucketkey,filename,filepath,access_token);
    console.log(response);
}

  /**
     * This function will return the details about the specified bucket.
*/
  async function getBucketDetails()
{
    const response = await ossClient.getBucketDetails(access_token,bucketkey);
    console.log(response.content);
}

async function getBuckets()
{
    const response = await ossClient.getBuckets(access_token);
    console.log(response.content);
}
//Upload();
//getBuckets();
//getBucketDetails();