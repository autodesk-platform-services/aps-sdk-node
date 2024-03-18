/* tslint:disable */
/* eslint-disable */

import { JobStlOutputFormatAdvanced } from './job-stl-output-format-advanced';
import { Type } from './type';
/**
 * Options for STL outputs.
 * @export
 * @interface JobStlOutputFormat
 */
export interface JobStlOutputFormat {
    /**
     * 
     * @type {Type.Stl}
     * @memberof JobStlOutputFormat
     */
    'type': typeof Type.Stl;
    /**
     * 
     * @type {JobStlOutputFormatAdvanced}
     * @memberof JobStlOutputFormat
     */
    'advanced'?: JobStlOutputFormatAdvanced;
}

