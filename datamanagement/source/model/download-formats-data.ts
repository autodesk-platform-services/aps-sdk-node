/* tslint:disable */
/* eslint-disable */

import { DownloadFormatsDataAttributes } from './download-formats-data-attributes';
import { TypeDownloadformats } from './type-downloadformats';

/**
 * Contains information about the file formats the version can be downloaded as.
 * @export
 * @interface DownloadFormatsData
 */
export interface DownloadFormatsData {
    /**
     * 
     * @type {TypeDownloadformats}
     * @memberof DownloadFormatsData
     */
    'type'?: TypeDownloadformats;
    /**
     * The URN of the version.
     * @type {string}
     * @memberof DownloadFormatsData
     */
    'id'?: string;
    /**
     * 
     * @type {DownloadFormatsDataAttributes}
     * @memberof DownloadFormatsData
     */
    'attributes'?: DownloadFormatsDataAttributes;
}



