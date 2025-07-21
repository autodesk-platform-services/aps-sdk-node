
import { DownloadStatus } from './downloadStatus';

/**
 * An object that represents the response to a Batch Generate Signed S3 Download URLs operation. 
 * 
 * **Note**: ``objectKeyN`` is a placeholder for the first object key for which the client requested a download signed URL. The attributes within contain the success data / error information for the request for that object. `results` will contain one such attribute for each requested object in the batch.
 * 
 * @export
 * @interface DownloadResults
 */
export interface DownloadResults {
    /**
     * 
     * @type {DownloadStatus}
     * @memberof DownloadResults
     */
    'status'?: DownloadStatus;
    /**
     * A S3 signed URL with which to download the object. This attribute is returned when ``status`` is ``complete`` or ``fallback``; in the latter case, this will return an OSS signed URL, not an S3 signed URL.
     * @type {string}
     * @memberof DownloadResults
     */
    'url'?: string;
    /**
     * A map of S3 signed URLs, one for each chunk of an unmerged resumable upload. This attribute is returned when ``status`` is ``chunked``. The key of each entry is the byte range of the total file which the chunk comprises.
     * @type {object}
     * @memberof DownloadResults
     */
    'urls'?: object;
    /**
     * The values that were requested for the following parameters when requesting the S3 signed URL.
 * 
 * - ``Content-Type``
 * - ``Content-Disposition``
 * - ``Cache-Control``.
 * 
     * @type {object}
     * @memberof DownloadResults
     */
    'params'?: object;
    /**
     * The total amount of storage space occupied by the object, in bytes.
     * @type {number}
     * @memberof DownloadResults
     */
    'size'?: number;
    /**
     * A hash value computed from the data of the object, if available.
     * @type {string}
     * @memberof DownloadResults
     */
    'sha1'?: string;
}



