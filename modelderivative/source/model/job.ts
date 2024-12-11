/* tslint:disable */
/* eslint-disable */

import { JobAcceptedJobs } from './jobAcceptedJobs';

/**
 * An object that represents the successful response of a Create Translation Job operation.
 * @export
 * @interface Job
 */
export interface Job {
    /**
     * reporting success status
     * @type {string}
     * @memberof Job
     */
    'result': string;
    /**
     * the urn identifier of the source file
     * @type {string}
     * @memberof Job
     */
    'urn': string;
    /**
     * 
     * @type {JobAcceptedJobs}
     * @memberof Job
     */
    'acceptedJobs': JobAcceptedJobs;
}

