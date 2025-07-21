

/**
 * 
 * @export
 * @interface Batchsigneds3downloadObjectRequests
 */
export interface Batchsigneds3downloadObjectRequests {
    /**
     * The URL-encoded human friendly name of the object to download.
     * @type {string}
     * @memberof Batchsigneds3downloadObjectRequests
     */
    'objectKey'?: string;
    /**
     * The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS.
     * @type {string}
     * @memberof Batchsigneds3downloadObjectRequests
     */
    'response-content-type'?: string;
    /**
     * The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS.
     * @type {string}
     * @memberof Batchsigneds3downloadObjectRequests
     */
    'response-content-disposition'?: string;
    /**
     * The value of the Cache-Control header you want to receive when you download the object using the signed URL. If you do not specify a value, the Cache-Control header defaults to the value stored with OSS.
     * @type {string}
     * @memberof Batchsigneds3downloadObjectRequests
     */
    'response-cache-control'?: string;
    /**
     * The last known ETag value of the object. OSS returns the signed URL only if the ``If-None-Match`` header differs from the ETag value of the object on S3. If not, it returns a 304 "Not Modified" HTTP status.
     * @type {string}
     * @memberof Batchsigneds3downloadObjectRequests
     */
    'If-None-Match'?: string;
    /**
     * A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). A signed URL is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned.
     * @type {string}
     * @memberof Batchsigneds3downloadObjectRequests
     */
    'If-Modified-Since'?: string;
}

