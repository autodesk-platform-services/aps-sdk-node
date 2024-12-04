/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormat } from './jobPayloadFormat';
import { JobPayloadOutputDestination } from './jobPayloadOutputDestination';

/**
 * An object describing the attributes of the requested derivatives.
 * @export
 * @interface JobPayloadOutput
 */
export interface JobPayloadOutput {
    /**
     * 
     * @deprecated This attribute is replaced by the region header.
     * @type {JobPayloadOutputDestination}
     * @memberof JobPayloadOutput
     */
    'destination'?: JobPayloadOutputDestination;
    /**
     * An array of objects, where each object represents a requested derivative format. You can request multiple derivatives.
     * @type {Array<JobPayloadFormat>}
     * @memberof JobPayloadOutput
     */
    'formats': Array<JobPayloadFormat>;
}

