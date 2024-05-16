/* tslint:disable */
/* eslint-disable */

import { DownloadResults } from './download-results';

/**
 * The response to a Batch Generate Signed S3 Download URLs operation.
 * @export
 * @interface Batchsigneds3downloadResponse
 */
export interface Batchsigneds3downloadResponse {
    /**
     * 
     * @type {{ [key: string]: DownloadResults; }}
     * @memberof Batchsigneds3downloadResponse
     */
    'results': { [key: string]: DownloadResults; };
}

