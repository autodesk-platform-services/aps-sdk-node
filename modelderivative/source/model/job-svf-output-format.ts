/* tslint:disable */
/* eslint-disable */

import { JobSvfOutputFormatAdvanced } from './job-svf-output-format-advanced';
import { View } from './view';
import { Type } from './type';
/**
 * Options for SVF outputs.
 * @export
 * @interface JobSvfOutputFormat
 */
export interface JobSvfOutputFormat {
    /**
     * Specifies the type of view to generate. Possible values are `2d` and `3d`.
     * @type {Array<View>}
     * @memberof JobSvfOutputFormat
     */
    'views': Array<View>;
    /**
     * The requested output type. ``svf`` in this case.
     * @type {Type.Svf}
     * @memberof JobSvfOutputFormat
     */
    'type': typeof Type.Svf;
     /**
     * 
     * @type {JobSvfOutputFormatAdvanced}
     * @memberof JobSvfOutputFormat
     */
    'advanced'?: JobSvfOutputFormatAdvanced;
}

