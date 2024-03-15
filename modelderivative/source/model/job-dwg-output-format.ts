/* tslint:disable */
/* eslint-disable */

import { JobDwgOutputFormatAdvanced } from './job-dwg-output-format-advanced';
import { Type } from './type';


/**
 * Options for DWG outputs.
 * @export
 * @interface JobDwgOutputFormat
 */
export interface JobDwgOutputFormat {
    /**
     * The requested output type. ``dwg`` in this case.
     * @type {Type.dwg}
     * @memberof JobDwgOutputFormat
     */
    'type': typeof Type.Dwg;
    /**
     * 
     * @type {JobDwgOutputFormatAdvanced}
     * @memberof JobDwgOutputFormat
     */
    'advanced'?: JobDwgOutputFormatAdvanced;
}

