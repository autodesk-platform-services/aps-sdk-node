/* tslint:disable */
/* eslint-disable */

import { DownloadData } from './download-data';
import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';

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

