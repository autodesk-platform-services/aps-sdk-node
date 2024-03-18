/* tslint:disable */
/* eslint-disable */

import { JobSvf2OutputFormatAdvanced } from './job-svf2-output-format-advanced';
import { View } from './view';
import { Type } from './type';
/**
 * Options for SVF2 outputs.
 * @export
 * @interface JobSvf2OutputFormat
 */
export interface JobSvf2OutputFormat {
    /**
     * Specifies the type of view to generate. Possible values are `2d` and `3d`.
     * @type {Array<View>}
     * @memberof JobSvf2OutputFormat
     */
    'views': Array<View>;
    /**
     * The requested output type. ``svf2`` in this case.
     * @type {Type.Svf2}
     * @memberof JobSvf2OutputFormat
     */
    'type': typeof Type.Svf2;
    /**
     * 
     * @type {JobSvf2OutputFormatAdvanced}
     * @memberof JobSvf2OutputFormat
     */
    'advanced'?: JobSvf2OutputFormatAdvanced;
}

