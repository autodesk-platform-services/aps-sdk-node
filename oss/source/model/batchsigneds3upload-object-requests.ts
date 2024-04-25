/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface Batchsigneds3uploadObjectRequests
 */
export interface Batchsigneds3uploadObjectRequests {
    /**
     * A URL-encoded human friendly name of the object to upload.
     * @type {string}
     * @memberof Batchsigneds3uploadObjectRequests
     */
    'objectKey': string;
    /**
     * The index of first chunk to be uploaded.
     * @type {number}
     * @memberof Batchsigneds3uploadObjectRequests
     */
    'firstPart'?: number;
    /**
     * The number of parts you intend to chunk the object for uploading. OSS will return that many signed URLs, one URL for each chunk. If you do not specify a value you\'ll get only one URL to upload the entire object.
     * @type {number}
     * @memberof Batchsigneds3uploadObjectRequests
     */
    'parts'?: number;
    /**
     * The ``uploadKey`` of a previously-initiated upload, in order to request more chunk upload URLs for the same upload. If you do not specify a value, OSS will initiate a new upload entirely.
     * @type {string}
     * @memberof Batchsigneds3uploadObjectRequests
     */
    'uploadKey'?: string;
}

