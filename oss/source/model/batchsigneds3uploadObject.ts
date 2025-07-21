
import { Batchsigneds3uploadObjectRequests } from './batchsigneds3uploadObjectRequests';

/**
 * The request payload for a Batch Generate Signed S3 Upload URLs operation.
 * @export
 * @interface Batchsigneds3uploadObject
 */
export interface Batchsigneds3uploadObject {
    /**
     * An array where each element is an object containing information needed to generate a signed S3 upload URL.
     * @type {Array<Batchsigneds3uploadObjectRequests>}
     * @memberof Batchsigneds3uploadObject
     */
    'requests': Array<Batchsigneds3uploadObjectRequests>;
}

