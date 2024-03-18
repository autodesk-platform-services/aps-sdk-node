/* tslint:disable */
/* eslint-disable */

import { JobIgesOutputFormatAdvanced } from './job-iges-output-format-advanced';
import { Type } from './type';
/**
 * Options for IGES outputs.
 * @export
 * @interface JobIgesOutputFormat
 */
export interface JobIgesOutputFormat {
    /**
     * The requested output type. ``iges`` in this case.
     * @type {Type.Iges}
     * @memberof JobIgesOutputFormat
     */
    'type': typeof Type.Iges;
    /**
     * 
     * @type {JobIgesOutputFormatAdvanced}
     * @memberof JobIgesOutputFormat
     */
    'advanced'?: JobIgesOutputFormatAdvanced;
}

