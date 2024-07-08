/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedSTEP } from './job-payload-format-advanced-step';
import { OutputType } from './output-type';

/**
 * Options for STEP outputs.
 * @export
 * @interface JobPayloadFormatSTEP
 */
export interface JobPayloadFormatSTEP {
    /**
     * 
     * @type {OutputType.Step}
     * @memberof JobPayloadFormatSTEP
     */
    'type': typeof OutputType.Step;
    /**
     * 
     * @type {JobPayloadFormatAdvancedSTEP}
     * @memberof JobPayloadFormatSTEP
     */
    'advanced'?: JobPayloadFormatAdvancedSTEP;
}



