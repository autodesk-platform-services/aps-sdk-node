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
}

