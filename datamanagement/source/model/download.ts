
import { DownloadData } from './downloadData';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';

/**
 * An object that represents a download.
 * @export
 * @interface Download
 */
export interface Download {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Download
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof Download
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {DownloadData}
     * @memberof Download
     */
    'data'?: DownloadData;
}

