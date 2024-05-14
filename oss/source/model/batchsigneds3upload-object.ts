/* tslint:disable */
/* eslint-disable */

import { Batchsigneds3uploadObjectRequests } from './batchsigneds3upload-object-requests';

/**
 * 
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

