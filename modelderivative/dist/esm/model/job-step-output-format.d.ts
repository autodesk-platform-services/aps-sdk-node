import { JobStepOutputFormatAdvanced } from './job-step-output-format-advanced';
/**
 *
 * @export
 * @interface JobStepOutputFormat
 */
export interface JobStepOutputFormat {
    /**
     *
     * @type {string}
     * @memberof JobStepOutputFormat
     */
    'type'?: string;
    /**
     *
     * @type {JobStepOutputFormatAdvanced}
     * @memberof JobStepOutputFormat
     */
    'advanced'?: JobStepOutputFormatAdvanced;
}
