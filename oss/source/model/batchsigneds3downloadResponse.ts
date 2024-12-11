/* tslint:disable */
/* eslint-disable */

import { DownloadResults } from './downloadResults';

/**
 * The response to a Batch Generate Signed S3 Download URLs operation.
 * @export
 * @interface Batchsigneds3downloadResponse
 */
export interface Batchsigneds3downloadResponse {
    /**
     * A map of the returned results; each key in the map corresponds to an object key in the batch, and the value includes the results for that object.
     * @type {{ [key: string]: DownloadResults; }}
     * @memberof Batchsigneds3downloadResponse
     */
    'results': { [key: string]: DownloadResults; };
}

