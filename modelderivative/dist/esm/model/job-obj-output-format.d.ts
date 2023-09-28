import { JobObjOutputFormatAdvanced } from './job-obj-output-format-advanced';
/**
 *
 * @export
 * @interface JobObjOutputFormat
 */
export interface JobObjOutputFormat {
    /**
     *
     * @type {string}
     * @memberof JobObjOutputFormat
     */
    'type'?: string;
    /**
     *
     * @type {JobObjOutputFormatAdvanced}
     * @memberof JobObjOutputFormat
     */
    'advanced'?: JobObjOutputFormatAdvanced;
}
