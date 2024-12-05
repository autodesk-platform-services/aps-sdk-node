/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface Batchsigneds3uploadResponseResultsValue
 */
export interface Batchsigneds3uploadResponseResultsValue {
    /**
     * Describes an error that was encountered. Returned only if the signed URL request for that object failed.
     * @type {string}
     * @memberof Batchsigneds3uploadResponseResultsValue
     */
    'reason'?: string;
    /**
     * Returned only if the signed URL request for that object failed.
     * @type {string}
     * @memberof Batchsigneds3uploadResponseResultsValue
     */
    'status'?: string;
    /**
     * The deadline to call [Complete Batch Upload to S3 Signed URL](/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-POST/) for the object. If not completed by this time, all uploaded data for this session will be discarded.
     * @type {string}
     * @memberof Batchsigneds3uploadResponseResultsValue
     */
    'uploadExpiration'?: string;
    /**
     * An ID that uniquely identifies the upload session. It allows OSS to differentiate between fresh upload attempts from attempts to resume uploading data for an active upload session, in case of network interruptions. You must provide this value when:  - Re-requesting chunk URLs for an active upload session.  - When calling the [Complete Batch Upload to S3 Signed URL](/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-POST/) operation to end an active upload session. 
     * @type {string}
     * @memberof Batchsigneds3uploadResponseResultsValue
     */
    'uploadKey': string;
    /**
     * The date and time, in the ISO 8601 format, indicating when the signed URLs will expire.
     * @type {string}
     * @memberof Batchsigneds3uploadResponseResultsValue
     */
    'urlExpiration'?: string;
    /**
     * An array of signed URLs. For a single-part upload, this will only include a single URL. For a multipart upload, there will be one for each chunk of a multipart upload; the index of the URL in the array corresponds to the part number of the chunk.
     * @type {Array<string>}
     * @memberof Batchsigneds3uploadResponseResultsValue
     */
    'urls': Array<string>;
}

