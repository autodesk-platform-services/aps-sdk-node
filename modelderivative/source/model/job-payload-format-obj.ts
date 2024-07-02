/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedOBJ } from './job-payload-format-advanced-obj';
import { OutputType } from './output-type';

/**
 * Options for OBJ outputs.
 * @export
 * @interface JobPayloadFormatOBJ
 */
export interface JobPayloadFormatOBJ {
    /**
     * 
     * @type {OutputType.Obj}
     * @memberof JobPayloadFormatOBJ
     */
    'type': typeof OutputType.Obj;
    /**
     * 
     * @type {JobPayloadFormatAdvancedOBJ}
     * @memberof JobPayloadFormatOBJ
     */
    'advanced'?: JobPayloadFormatAdvancedOBJ;
}



