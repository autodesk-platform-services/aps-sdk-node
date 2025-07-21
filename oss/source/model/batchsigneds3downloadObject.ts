
import { Batchsigneds3downloadObjectRequests } from './batchsigneds3downloadObjectRequests';

/**
 * The response to a Batch Generate Signed S3 Download URLs operation.
 * @export
 * @interface Batchsigneds3downloadObject
 */
export interface Batchsigneds3downloadObject {
    /**
     * An array where each element is an object containing information needed to generate a signed S3 download URL.
     * @type {Array<Batchsigneds3downloadObjectRequests>}
     * @memberof Batchsigneds3downloadObject
     */
    'requests': Array<Batchsigneds3downloadObjectRequests>;
}

