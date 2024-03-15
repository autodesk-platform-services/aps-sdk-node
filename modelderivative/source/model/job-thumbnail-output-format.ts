/* tslint:disable */
/* eslint-disable */

import { JobThumbnailOutputFormatAdvanced } from './job-thumbnail-output-format-advanced';
import { Type } from './type';
/**
 * Options for thumbnail outputs.
 * @export
 * @interface JobThumbnailOutputFormat
 */
export interface JobThumbnailOutputFormat {
    /**
     * The requested output type. ``thumbnail`` in this case.
     * @type {Type.thumbnail}
     * @memberof JobThumbnailOutputFormat
     */
    'type': typeof Type.Thumbnail;
    /**
     * 
     * @type {JobThumbnailOutputFormatAdvanced}
     * @memberof JobThumbnailOutputFormat
     */
    'advanced'?: JobThumbnailOutputFormatAdvanced;
}

