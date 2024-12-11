/* tslint:disable */
/* eslint-disable */

import { BucketsItems } from './bucketsItems';

/**
 * An object that represents a collection of buckets.
 * @export
 * @interface Buckets
 */
export interface Buckets {
    /**
     * Array of objects, where each object represents a bucket.
     * @type {Array<BucketsItems>}
     * @memberof Buckets
     */
    'items': Array<BucketsItems>;
    /**
     * The URL to be used to retrieve the next page of results, if available. It will be present only when there are more items to be retrieved after the current set.
     * @type {string}
     * @memberof Buckets
     */
    'next'?: string;
}

