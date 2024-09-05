/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedSTL } from './job-payload-format-advanced-stl';
import { OutputType } from './output-type';

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



