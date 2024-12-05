/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedIFC } from './jobPayloadFormatAdvanced-IFC';
import { OutputType } from './outputType';

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



