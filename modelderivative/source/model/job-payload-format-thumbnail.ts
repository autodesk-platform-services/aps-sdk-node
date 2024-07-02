/* tslint:disable */
/* eslint-disable */

import { DefaultDeserializer } from 'v8';
import { JobPayloadFormatAdvancedThumbnail } from './job-payload-format-advanced-thumbnail';
import { OutputType } from './output-type';

/**
 * Options for thumbnail outputs.
 * @export
 * @interface JobPayloadFormatThumbnail
 */
export interface JobPayloadFormatThumbnail {
    /**
     * 
     * @type {OutputType.Thumbnail}
     * @memberof JobPayloadFormatThumbnail
     */
    'type': typeof OutputType.Thumbnail;
    /**
     * 
     * @type {JobPayloadFormatAdvancedThumbnail}
     * @memberof JobPayloadFormatThumbnail
     */
    'advanced'?: JobPayloadFormatAdvancedThumbnail;
}



