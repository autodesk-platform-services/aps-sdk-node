/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedSTL } from './jobPayloadFormatAdvancedStl';
import { OutputType } from './outputType';

/**
 * Options for STL outputs.
 * @export
 * @interface JobPayloadFormatSTL
 */
export interface JobPayloadFormatSTL {
    /**
     * 
     * @type {OutputType.Stl}
     * @memberof JobPayloadFormatSTL
     */
    'type': typeof OutputType.Stl;
    /**
     * 
     * @type {JobPayloadFormatAdvancedSTL}
     * @memberof JobPayloadFormatSTL
     */
    'advanced'?: JobPayloadFormatAdvancedSTL;
}



