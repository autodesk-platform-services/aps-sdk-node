/* tslint:disable */
/* eslint-disable */

import { Permission } from './permission';
import { PolicyKey } from './policy-key';

/**
 * An object representing a bucket.
 * @export
 * @interface Bucket
 */
export interface Bucket {
    /**
     * Bucket key: An ID that uniquely identifies the bucket.
     * @type {string}
     * @memberof Bucket
     */
    'bucketKey'?: string;
    /**
     * The Client ID of the application that owns the bucket.
     * @type {string}
     * @memberof Bucket
     */
    'bucketOwner'?: string;
    /**
     * The time the bucket was created, represented as a Unix timestamp.
     * @type {string}
     * @memberof Bucket
     */
    'createdDate'?: string;
    /**
     * An array of objects, where each object represents an application that can access the bucket.
     * @type {Array<Permission>}
     * @memberof Bucket
     */
    'permissions'?: Array<Permission>;
    /**
     * 
     * @type {PolicyKey}
     * @memberof Bucket
     */
    'policyKey'?: PolicyKey;
}



