
import { DownloadStatus } from './downloadStatus';

/**
 * An object representing the response payload on successful execution of a Generate Signed S3 Download URL operation.
 * @export
 * @interface Signeds3downloadResponse
 */
export interface Signeds3downloadResponse {
    /**
     * 
     * @type {DownloadStatus}
     * @memberof Signeds3downloadResponse
     */
    'status': DownloadStatus;
    /**
     * A S3 signed URL with which to download the object. This attribute is returned when ``status`` is ``complete`` or ``fallback``; in the latter case, this will return an OSS signed URL, not an S3 signed URL.
     * @type {string}
     * @memberof Signeds3downloadResponse
     */
    'url'?: string;
    /**
     * A map of S3 signed URLs, one for each chunk of an unmerged resumable upload. This attribute is returned when ``status`` is ``chunked``. The key of each entry is the byte range of the total file which the chunk comprises.
     * @type {object}
     * @memberof Signeds3downloadResponse
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
     * @memberof Signeds3downloadResponse
     */
    'params': object;
    /**
     * The total amount of storage space occupied by the object, in bytes.
     * @type {number}
     * @memberof Signeds3downloadResponse
     */
    'size': number;
    /**
     * A hash value computed from the data of the object, if available.
     * @type {string}
     * @memberof Signeds3downloadResponse
     */
    'sha1'?: string;
}



