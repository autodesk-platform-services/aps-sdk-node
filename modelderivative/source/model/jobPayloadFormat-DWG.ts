/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedDWG } from './jobPayloadFormatAdvanced-DWG';
import { OutputType } from './outputType';

/**
 * Options for DWG outputs.
 * @export
 * @interface JobPayloadFormatDWG
 */
export interface JobPayloadFormatDWG {
    /**
     * 
     * @type {OutputType.Dwg}
     * @memberof JobPayloadFormatDWG
     */
    'type':  typeof OutputType.Dwg;
    /**
     * 
     * @type {JobPayloadFormatAdvancedDWG}
     * @memberof JobPayloadFormatDWG
     */
    'advanced'?: JobPayloadFormatAdvancedDWG;
}



