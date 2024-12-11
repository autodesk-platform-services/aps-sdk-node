/* tslint:disable */
/* eslint-disable */

import { DefaultDeserializer } from 'v8';
import { JobPayloadFormatAdvancedThumbnail } from './jobPayloadFormatAdvancedThumbnail';
import { OutputType } from './outputType';

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



