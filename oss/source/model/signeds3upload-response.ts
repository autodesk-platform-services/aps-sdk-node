/* tslint:disable */
/* eslint-disable */


/**
 * The response payload to a Generate Signed S3 Upload URL operation.
 * @export
 * @interface Signeds3uploadResponse
 */
export interface Signeds3uploadResponse {
    /**
     * An ID that uniquely identifies the upload session. It allows OSS to differentiate between fresh upload attempts from attempts to resume uploading data for an active upload session, in case of network interruptions. You must provide this value when:  - Re-requesting chunk URLs for an active upload session.  - When calling the [Complete Upload to S3 Signed URL](/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-POST/) operation to end an active upload session. 
     * @type {string}
     * @memberof Signeds3uploadResponse
     */
    'uploadKey': string;
    /**
     * An array of signed URLs. For a single-part upload, this will contain only one URL. For a multipart upload, there will be one for each chunk of a multipart upload; the index of the URL in the array corresponds to the part number of the chunk.
     * @type {Array<string>}
     * @memberof Signeds3uploadResponse
     */
    'urls': Array<string>;
    /**
     * The date and time, in the ISO 8601 format, indicating when the signed URLs will expire.
     * @type {string}
     * @memberof Signeds3uploadResponse
     */
    'urlExpiration'?: string;
    /**
     * The deadline to call [Complete Upload to S3 Signed URL](/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-POST/) for the object. If not completed by this time, all uploaded data for this session will be discarded.
     * @type {string}
     * @memberof Signeds3uploadResponse
     */
    'uploadExpiration'?: string;
}

