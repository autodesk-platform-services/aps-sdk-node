/* tslint:disable */
/* eslint-disable */


/**
 * The request payload for a Generate OSS Signed URL operation.
 * @export
 * @interface CreateSignedResource
 */
export interface CreateSignedResource {
    /**
     * The time window (in minutes) the signed URL will remain usable. Acceptable values = 1-60 minutes. Default = 2 minutes.  **Tip:** Use the smallest possible time window to minimize exposure of the signed URL. 
     * @type {number}
     * @memberof CreateSignedResource
     */
    'minutesExpiration'?: number;
    /**
     * ``true`` : The signed URL will expire immediately after use. For example, when downloading an object, URL will expire once the download is complete.  ``false`` : (Default) The signed URL will remain usable for the entire time window specified by ``minutesExpiration``.  
     * @type {boolean}
     * @memberof CreateSignedResource
     */
    'singleUse'?: boolean;
    /**
     * The value to use as the Content-Type when downloading the object using the signed URL.  If this attribute is not provided, it defaults to the value corresponding to the object.
     * @type {string}
     * @memberof CreateSignedResource
     */
    'contentType'?: string;
    /**
     * The value to use as the Content-Disposition when downloading the object using the signed URL.  If this attribute is not provided, it defaults to the value corresponding to the object.
     * @type {string}
     * @memberof CreateSignedResource
     */
    'contentDisposition'?: string;
    /**
     * Restricts the signed URL to the specified IP addresses. Downloads and uploads will be allowed only for the list of the IP addresses in the ``X-Forwarded-For`` header received from Apigee. If not specified, use of the signed URL is not restricted.
     * @type {string}
     * @memberof CreateSignedResource
     */
    'allowedIpAddresses'?: string;
}

