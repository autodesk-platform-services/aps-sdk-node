
import { DownloadFormatsDataAttributes } from './downloadFormatsDataAttributes';
import { Type } from './type';

/**
 * Contains information about the file formats the version can be downloaded as.
 * @export
 * @interface DownloadFormatsData
 */
export interface DownloadFormatsData {
    /**
     * 
     * @type {Type}
     * @memberof DownloadFormatsData
     */
    'type'?: Type;
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



