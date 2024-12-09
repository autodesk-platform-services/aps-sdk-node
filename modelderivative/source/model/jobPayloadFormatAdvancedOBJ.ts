/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedOBJAdvanced } from './jobPayloadFormatAdvancedOBJAdvanced';

/**
 * An object that contains advanced options for an OBJ output.
 * @export
 * @interface JobPayloadFormatAdvancedOBJ
 */
export interface JobPayloadFormatAdvancedOBJ {
    /**
     * The requested output type. ``obj`` in this case.
     * @type {string}
     * @memberof JobPayloadFormatAdvancedOBJ
     */
    'type'?: string;
    /**
     * 
     * @type {JobPayloadFormatAdvancedOBJAdvanced}
     * @memberof JobPayloadFormatAdvancedOBJ
     */
    'advanced'?: JobPayloadFormatAdvancedOBJAdvanced;
}

