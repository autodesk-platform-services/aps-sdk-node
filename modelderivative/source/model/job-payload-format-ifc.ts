/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedIFC } from './job-payload-format-advanced-ifc';
import { OutputType } from './output-type';

/**
 * Options for IFC outputs.
 * @export
 * @interface JobPayloadFormatIFC
 */
export interface JobPayloadFormatIFC {
    /**
     * 
     * @type {OutputType.Ifc}
     * @memberof JobPayloadFormatIFC
     */
    'type': typeof OutputType.Ifc;
    /**
     * 
     * @type {JobPayloadFormatAdvancedIFC}
     * @memberof JobPayloadFormatIFC
     */
    'advanced'?: JobPayloadFormatAdvancedIFC;
}



