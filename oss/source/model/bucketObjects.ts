
import { ObjectDetails } from './objectDetails';

/**
 * An array where each element represents an object in the bucket.
 * @export
 * @interface BucketObjects
 */
export interface BucketObjects {
    /**
     * 
     * @type {Array<ObjectDetails>}
     * @memberof BucketObjects
     */
    'items'?: Array<ObjectDetails>;
    /**
     * The URL to be used to retrieve the next page of results, if available. It will be present only when there are more items to be retrieved after the current set.
     * @type {string}
     * @memberof BucketObjects
     */
    'next'?: string;
}

