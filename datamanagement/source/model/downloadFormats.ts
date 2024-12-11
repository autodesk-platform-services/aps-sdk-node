/* tslint:disable */
/* eslint-disable */

import { DownloadFormatsData } from './downloadFormatsData';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';

/**
 * Successful retrieval of the available download formats for a specific version.
 * @export
 * @interface DownloadFormats
 */
export interface DownloadFormats {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof DownloadFormats
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof DownloadFormats
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {DownloadFormatsData}
     * @memberof DownloadFormats
     */
    'data'?: DownloadFormatsData;
}

