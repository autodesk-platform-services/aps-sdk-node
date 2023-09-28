/* tslint:disable */
/* eslint-disable */

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

export const JobSvfOutputFormatViewsEnum = {
    _2d: '2d',
    _3d: '3d'
} as const;

export type JobSvfOutputFormatViewsEnum = typeof JobSvfOutputFormatViewsEnum[keyof typeof JobSvfOutputFormatViewsEnum];


