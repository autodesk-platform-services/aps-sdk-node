/* tslint:disable */
/* eslint-disable */

import { DownloadPayloadDataAttributes } from './download-payload-data-attributes';
import { DownloadPayloadDataRelationships } from './download-payload-data-relationships';
import { TypeDownloads } from './type-downloads';

/**
 * Contains information about the desired download format and the version of the item to convert to this format.
 * @export
 * @interface DownloadPayloadData
 */
export interface DownloadPayloadData {
    /**
     * 
     * @type {TypeDownloads}
     * @memberof DownloadPayloadData
     */
    'type': TypeDownloads;
    /**
     * 
     * @type {DownloadPayloadDataAttributes}
     * @memberof DownloadPayloadData
     */
    'attributes': DownloadPayloadDataAttributes;
    /**
     * 
     * @type {DownloadPayloadDataRelationships}
     * @memberof DownloadPayloadData
     */
    'relationships': DownloadPayloadDataRelationships;
}



