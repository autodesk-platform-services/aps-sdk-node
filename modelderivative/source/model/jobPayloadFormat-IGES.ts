/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedIGES } from './jobPayloadFormatAdvanced-IGES';
import { OutputType } from './outputType';

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



