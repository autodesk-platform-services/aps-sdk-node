/* tslint:disable */
/* eslint-disable */

import { JobStepOutputFormatAdvanced } from './job-step-output-format-advanced';
import { Type } from './type';
/**
 * Options for STEP outputs.
 * @export
 * @interface JobStepOutputFormat
 */
export interface JobStepOutputFormat {
    /**
     * The requested output type. ``step`` in this case.
    * @type {Type.Step} 
     * @memberof JobStepOutputFormat
     */
    'type':typeof Type.Step;
    /**
     * 
     * @type {JobStepOutputFormatAdvanced}
     * @memberof JobStepOutputFormat
     */
    'advanced'?: JobStepOutputFormatAdvanced;
}

