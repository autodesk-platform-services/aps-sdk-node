/* tslint:disable */
/* eslint-disable */

import { JobIfcOutputFormatAdvanced } from './job-ifc-output-format-advanced';
import { Type } from './type';

/**
 * Options for IFC outputs.
 * @export
 * @interface JobIfcOutputFormat
 */
export interface JobIfcOutputFormat {
    /**
     * The requested output type. ``ifc`` in this case.
     * @type {Type.ifc}
     * @memberof JobIfcOutputFormat
     */
    'type':typeof Type.Ifc;
    /**
     * 
     * @type {JobIfcOutputFormatAdvanced}
     * @memberof JobIfcOutputFormat
     */
    'advanced'?: JobIfcOutputFormatAdvanced;
}

