/* tslint:disable */
/* eslint-disable */

import { DownloadFormatsData } from './download-formats-data';
import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';

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

