import { JobThumbnailOutputFormatAdvanced } from './job-thumbnail-output-format-advanced';
/**
 *
 * @export
 * @interface JobThumbnailOutputFormat
 */
export interface JobThumbnailOutputFormat {
    /**
     *
     * @type {string}
     * @memberof JobThumbnailOutputFormat
     */
    'type'?: string;
    /**
     *
     * @type {JobThumbnailOutputFormatAdvanced}
     * @memberof JobThumbnailOutputFormat
     */
    'advanced'?: JobThumbnailOutputFormatAdvanced;
}
