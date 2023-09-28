/* tslint:disable */
/* eslint-disable */

import { JobIfcOutputFormatAdvanced } from './job-ifc-output-format-advanced';

/**
 * A JSON object representing the requested output types.
 * @export
 * @interface JobIfcOutputFormat
 */
export interface JobIfcOutputFormat {
    /**
     * 
     * @type {string}
     * @memberof JobIfcOutputFormat
     */
    'type'?: string;
    /**
     * 
     * @type {JobIfcOutputFormatAdvanced}
     * @memberof JobIfcOutputFormat
     */
    'advanced'?: JobIfcOutputFormatAdvanced;
}

