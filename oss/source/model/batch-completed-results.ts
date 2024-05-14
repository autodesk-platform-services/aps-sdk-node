/* tslint:disable */
/* eslint-disable */

import { BatchCompletedResultsParts } from './batch-completed-results-parts';

/**
 * 
 * @export
 * @interface BatchCompletedResults
 */
export interface BatchCompletedResults {
    /**
     * If this attribute is not returned, completion has succeeded. If the value of this attribute is \"error\", completion failed.\' 
     * @type {string}
     * @memberof BatchCompletedResults
     */
    'status'?: string;
    /**
     * The bucket key of the bucket the object was uploaded to.
     * @type {string}
     * @memberof BatchCompletedResults
     */
    'bucketKey'?: string;
    /**
     * The URL-encoded human friendly name of the object.
     * @type {string}
     * @memberof BatchCompletedResults
     */
    'objectKey'?: string;
    /**
     * An identifier (URN) that uniquely and persistently identifies the object.
     * @type {string}
     * @memberof BatchCompletedResults
     */
    'objectId'?: string;
    /**
     * The total amount of storage space occupied by the object, in bytes.
     * @type {number}
     * @memberof BatchCompletedResults
     */
    'size'?: number;
    /**
     * The format of the data stored within the object, expressed as a MIME type. This attribute is returned only if it was specified when the object was uploaded.
     * @type {string}
     * @memberof BatchCompletedResults
     */
    'contentType'?: string;
    /**
     * The Content-Disposition value for the uploaded object as recorded within OSS. This attribute is returned only if it was specified when the object was uploaded.
     * @type {string}
     * @memberof BatchCompletedResults
     */
    'contentDisposition'?: string;
    /**
     * The Content-Encoding value for the uploaded object as recorded within OSS. This attribute is returned only if it was specified when the object was uploaded.
     * @type {string}
     * @memberof BatchCompletedResults
     */
    'contentEncoding'?: string;
    /**
     * The Cache-Control value for the uploaded object as recorded within OSS. This attribute is returned only if it was specified when the object was uploaded.
     * @type {string}
     * @memberof BatchCompletedResults
     */
    'cacheControl'?: string;
    /**
     * An array containing the status of each part, indicating any issues with eTag or size mismatch issues.
     * @type {Array<BatchCompletedResultsParts>}
     * @memberof BatchCompletedResults
     */
    'parts'?: Array<BatchCompletedResultsParts>;
    /**
     * The reason for the failure, if the status is ``error``.
     * @type {string}
     * @memberof BatchCompletedResults
     */
    'reason'?: string;
}

