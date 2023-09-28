/* tslint:disable */
/* eslint-disable */

import { JobSvfOutputFormatAdvanced } from './job-svf-output-format-advanced';

/**
 * 
 * @export
 * @interface JobSvf2OutputFormat
 */
export interface JobSvf2OutputFormat {
    /**
     * 
     * @type {Array<string>}
     * @memberof JobSvf2OutputFormat
     */
    'views'?: Array<JobSvf2OutputFormatViewsEnum>;
    /**
     * 
     * @type {string}
     * @memberof JobSvf2OutputFormat
     */
    'type'?: string;
    /**
     * 
     * @type {JobSvfOutputFormatAdvanced}
     * @memberof JobSvf2OutputFormat
     */
    'advanced'?: JobSvfOutputFormatAdvanced;
}

export const JobSvf2OutputFormatViewsEnum = {
    _2d: '2d',
    _3d: '3d'
} as const;

export type JobSvf2OutputFormatViewsEnum = typeof JobSvf2OutputFormatViewsEnum[keyof typeof JobSvf2OutputFormatViewsEnum];


