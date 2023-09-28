import { JobSvfOutputFormatAdvanced } from './job-svf-output-format-advanced';
/**
 *
 * @export
 * @interface JobSvfOutputFormat
 */
export interface JobSvfOutputFormat {
    /**
     *
     * @type {Array<string>}
     * @memberof JobSvfOutputFormat
     */
    'views'?: Array<JobSvfOutputFormatViewsEnum>;
    /**
     *
     * @type {string}
     * @memberof JobSvfOutputFormat
     */
    'type'?: string;
    /**
     *
     * @type {JobSvfOutputFormatAdvanced}
     * @memberof JobSvfOutputFormat
     */
    'advanced'?: JobSvfOutputFormatAdvanced;
}
export declare const JobSvfOutputFormatViewsEnum: {
    readonly _2d: "2d";
    readonly _3d: "3d";
};
export type JobSvfOutputFormatViewsEnum = typeof JobSvfOutputFormatViewsEnum[keyof typeof JobSvfOutputFormatViewsEnum];
