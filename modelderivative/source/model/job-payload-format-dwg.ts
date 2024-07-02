/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedDWG } from './job-payload-format-advanced-dwg';
import { OutputType } from './output-type';

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



