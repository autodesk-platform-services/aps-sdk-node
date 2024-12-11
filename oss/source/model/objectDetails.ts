/* tslint:disable */
/* eslint-disable */


/**
 * Represents an object within a bucket.
 * @export
 * @interface ObjectDetails
 */
export interface ObjectDetails {
    /**
     * The bucket key of the bucket that contains the object.
     * @type {string}
     * @memberof ObjectDetails
     */
    'bucketKey'?: string;
    /**
     * An identifier (URN) that uniquely and persistently identifies the object.
     * @type {string}
     * @memberof ObjectDetails
     */
    'objectId'?: string;
    /**
     * A URL-encoded human friendly name to identify the object.
     * @type {string}
     * @memberof ObjectDetails
     */
    'objectKey'?: string;
    /**
     * A hash value computed from the data of the object.
     * @type {string}
     * @memberof ObjectDetails
     */
    'sha1'?: string;
    /**
     * The total amount of storage space occupied by the object, in bytes.
     * @type {number}
     * @memberof ObjectDetails
     */
    'size'?: number;
    /**
     * The format of the data stored within the object, expressed as a MIME type.
     * @type {string}
     * @memberof ObjectDetails
     */
    'contentType'?: string;
    /**
     * A URL that points to the actual location of the object.
     * @type {string}
     * @memberof ObjectDetails
     */
    'location'?: string;
}

