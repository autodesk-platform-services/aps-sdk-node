/* tslint:disable */
/* eslint-disable */

import { CreateBucketsPayloadAllow } from './create-buckets-payload-allow';
import { PolicyKey } from './policy-key';

/**
 * Request body structure for Create Bucket operation.
 * @export
 * @interface CreateBucketsPayload
 */
export interface CreateBucketsPayload {
    /**
     * Bucket key: A unique name you assign to a bucket. Bucket keys must be globally unique across all applications and regions. They must consist of only lower case characters, numbers 0-9, and underscores (_).  **Note:** You cannot change a bucket key once the bucket is created. 
     * @type {string}
     * @memberof CreateBucketsPayload
     */
    'bucketKey': string;
    /**
     * An array of objects, where each object represents an application that can access the bucket.
     * @type {Array<CreateBucketsPayloadAllow>}
     * @memberof CreateBucketsPayload
     */
    'allow'?: Array<CreateBucketsPayloadAllow>;
    /**
     * 
     * @type {PolicyKey}
     * @memberof CreateBucketsPayload
     */
    'policyKey': PolicyKey;
}



