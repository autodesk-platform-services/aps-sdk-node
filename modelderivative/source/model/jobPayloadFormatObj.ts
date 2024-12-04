/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedOBJ } from './jobPayloadFormatAdvancedObj';
import { OutputType } from './outputType';

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



