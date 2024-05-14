/* tslint:disable */
/* eslint-disable */


/**
 * Represents detailed information about an object.
 * @export
 * @interface ObjectFullDetails
 */
export interface ObjectFullDetails {
    /**
     * The bucket key of the bucket that contains the object.
     * @type {string}
     * @memberof ObjectFullDetails
     */
    'bucketKey'?: string;
    /**
     * An identifier (URN) that uniquely and persistently identifies the object.
     * @type {string}
     * @memberof ObjectFullDetails
     */
    'objectId'?: string;
    /**
     * A URL-encoded human friendly name to identify the object.
     * @type {string}
     * @memberof ObjectFullDetails
     */
    'objectKey'?: string;
    /**
     * A hash value computed from the data of the object.
     * @type {string}
     * @memberof ObjectFullDetails
     */
    'sha1'?: string;
    /**
     * The total amount of storage space occupied by the object, in bytes.
     * @type {number}
     * @memberof ObjectFullDetails
     */
    'size'?: number;
    /**
     * The format of the data stored within the object, expressed as a MIME type.
     * @type {string}
     * @memberof ObjectFullDetails
     */
    'contentType'?: string;
    /**
     * A URL that points to the actual location of the object.
     * @type {string}
     * @memberof ObjectFullDetails
     */
    'location'?: string;
    /**
     * The time the object was created, represented as a Unix timestamp. Only returned if explicitly requested using the ``with`` query string parameter.
     * @type {number}
     * @memberof ObjectFullDetails
     */
    'createdDate'?: number;
    /**
     * The time the object was last accessed, represented as a Unix timestamp. Only returned if explicitly requested using the ``with`` query string parameter.
     * @type {number}
     * @memberof ObjectFullDetails
     */
    'lastAccessedDate'?: number;
    /**
     * The time the object was most recently modified, represented as a Unix timestamp. Only returned if explicitly requested using the ``with`` query string parameter.
     * @type {number}
     * @memberof ObjectFullDetails
     */
    'lastModifiedDate'?: number;
    /**
     * Any custom metadata, if available. Only returned if explicitly requested for using the ``with`` query string parameter.
     * @type {string}
     * @memberof ObjectFullDetails
     */
    'userDefinedMetadata'?: string;
}

