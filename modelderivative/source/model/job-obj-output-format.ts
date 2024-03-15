/* tslint:disable */
/* eslint-disable */

import { JobObjOutputFormatAdvanced } from './job-obj-output-format-advanced';
import { Type } from './type';
/**
 * Options for OBJ outputs.
 * @export
 * @interface JobObjOutputFormat
 */
export interface JobObjOutputFormat {
    /**
     * The requested output type. ``obj`` in this case.
     * @type {Type.Obj}
     * @memberof JobObjOutputFormat
     */
    'type': typeof Type.Obj;
    /**
     * 
     * @type {JobObjOutputFormatAdvanced}
     * @memberof JobObjOutputFormat
     */
    'advanced'?: JobObjOutputFormatAdvanced;
}

