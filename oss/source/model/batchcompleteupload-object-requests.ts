/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface BatchcompleteuploadObjectRequests
 */
export interface BatchcompleteuploadObjectRequests {
    /**
     * The URL-encoded human friendly name of the object for which to complete an upload.
     * @type {string}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'objectKey': string;
    /**
     * The ID uniquely identifying the upload session that was returned when you obtained the signed upload URL.
     * @type {string}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'uploadKey': string;
    /**
     * The expected size of the object. If provided, OSS will check this against the object in S3 and return an error if the size does not match.
     * @type {number}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'size'?: number;
    /**
     * An array of eTags. S3 returns an eTag to each upload request, be it for a chunk or an entire file. For a single-part upload, this array contains the expected eTag of the entire object. For a multipart upload, this array contains the expected eTag of each part of the upload; the index of an eTag in the array corresponds to its part number in the upload. If provided, OSS will validate these eTags against the content in S3, and return an error if the eTags do not match.
     * @type {Array<string>}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'eTags'?: Array<string>;
    /**
     * The Content-Type value for the uploaded object to record within OSS.
     * @type {string}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'x-ads-meta-Content-Type'?: string;
    /**
     * The Content-Disposition value for the uploaded object to record within OSS.
     * @type {string}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'x-ads-meta-Content-Disposition'?: string;
    /**
     * The Content-Encoding value for the uploaded object to record within OSS.
     * @type {string}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'x-ads-meta-Content-Encoding'?: string;
    /**
     * The Cache-Control value for the uploaded object to record within OSS.
     * @type {string}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'x-ads-meta-Cache-Control'?: string;
    /**
     * Custom metadata to be stored with the object, which can be retrieved later on download or when retrieving object details. Must be a JSON object that is less than 100 bytes. 
     * @type {string}
     * @memberof BatchcompleteuploadObjectRequests
     */
    'x-ads-user-defined-metadata'?: string;
}

