/* tslint:disable */
/* eslint-disable */

import { PolicyKey } from './policy-key';

/**
 * An object containing the properties of a bucket.
 * @export
 * @interface BucketsItems
 */
export interface BucketsItems {
    /**
     * Bucket key: An ID that uniquely identifies the bucket.
     * @type {string}
     * @memberof BucketsItems
     */
    'bucketKey': string;
    /**
     * The time the bucket was created, represented as a Unix timestamp.
     * @type {number}
     * @memberof BucketsItems
     */
    'createdDate': number;
    /**
     * 
     * @type {PolicyKey}
     * @memberof BucketsItems
     */
    'policyKey': PolicyKey;
}



