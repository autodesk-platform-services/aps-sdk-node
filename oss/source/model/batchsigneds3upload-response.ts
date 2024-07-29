/* tslint:disable */
/* eslint-disable */

import { Batchsigneds3uploadResponseResultsValue } from './batchsigneds3upload-response-results-value';

/**
 * The response to a Batch Generate Signed S3 Upload URLs operation.
 * @export
 * @interface Batchsigneds3uploadResponse
 */
export interface Batchsigneds3uploadResponse {
    /**
     * A map of the returned results; each key in the map corresponds to an object key in the batch, and the value includes the results for that object.
     * @type {{ [key: string]: Batchsigneds3uploadResponseResultsValue; }}
     * @memberof Batchsigneds3uploadResponse
     */
    'results': { [key: string]: Batchsigneds3uploadResponseResultsValue; };
}

