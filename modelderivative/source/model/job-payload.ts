/* tslint:disable */
/* eslint-disable */

import { JobPayloadInput } from './job-payload-input';
import { JobPayloadMisc } from './job-payload-misc';
import { JobPayloadOutput } from './job-payload-output';

/**
 * An object that represents the request body of a Create Translation Job operation.
 * @export
 * @interface JobPayload
 */
export interface JobPayload {
    /**
     * 
     * @type {JobPayloadInput}
     * @memberof JobPayload
     */
    'input': JobPayloadInput;
    /**
     * 
     * @type {JobPayloadOutput}
     * @memberof JobPayload
     */
    'output': JobPayloadOutput;
    /**
     * 
     * @type {JobPayloadMisc}
     * @memberof JobPayload
     */
    'misc'?: JobPayloadMisc;
}

