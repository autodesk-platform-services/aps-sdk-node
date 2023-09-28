/* tslint:disable */
/* eslint-disable */

import { JobDwgOutputFormatAdvanced } from './job-dwg-output-format-advanced';

/**
 * A JSON object representing the requested output types.
 * @export
 * @interface JobDwgOutputFormat
 */
export interface JobDwgOutputFormat {
    /**
     * 
     * @type {string}
     * @memberof JobDwgOutputFormat
     */
    'type'?: string;
    /**
     * 
     * @type {JobDwgOutputFormatAdvanced}
     * @memberof JobDwgOutputFormat
     */
    'advanced'?: JobDwgOutputFormatAdvanced;
}

