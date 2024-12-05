/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedSTEP } from './jobPayloadFormatAdvancedSTEP';
import { OutputType } from './outputType';

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



