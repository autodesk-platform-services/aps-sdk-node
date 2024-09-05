/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedIGES } from './job-payload-format-advanced-iges';
import { OutputType } from './output-type';

/**
 * Options for IGES outputs.
 * @export
 * @interface JobPayloadFormatIGES
 */
export interface JobPayloadFormatIGES {
    /**
     * 
     * @type {OutputType.Iges}
     * @memberof JobPayloadFormatIGES
     */
    'type':typeof OutputType.Iges;
    /**
     * 
     * @type {JobPayloadFormatAdvancedIGES}
     * @memberof JobPayloadFormatIGES
     */
    'advanced'?: JobPayloadFormatAdvancedIGES;
}



