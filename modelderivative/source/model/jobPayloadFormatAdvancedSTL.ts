/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedSTLAdvanced } from './jobPayloadFormatAdvancedSTLAdvanced';

/**
 * An object that contains advanced options for a STL output.
 * @export
 * @interface JobPayloadFormatAdvancedSTL
 */
export interface JobPayloadFormatAdvancedSTL {
    /**
     * The requested output type. ``stl`` in this case.
     * @type {string}
     * @memberof JobPayloadFormatAdvancedSTL
     */
    'type'?: string;
    /**
     * 
     * @type {JobPayloadFormatAdvancedSTLAdvanced}
     * @memberof JobPayloadFormatAdvancedSTL
     */
    'advanced'?: JobPayloadFormatAdvancedSTLAdvanced;
}

