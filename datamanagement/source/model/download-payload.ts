/* tslint:disable */
/* eslint-disable */

import { DownloadPayloadData } from './download-payload-data';
import { JsonApiVersion } from './json-api-version';

/**
 * The payload for creating a download of a specified format.
 * @export
 * @interface DownloadPayload
 */
export interface DownloadPayload {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof DownloadPayload
     */
    'jsonapi': JsonApiVersion;
    /**
     * 
     * @type {DownloadPayloadData}
     * @memberof DownloadPayload
     */
    'data': DownloadPayloadData;
}

