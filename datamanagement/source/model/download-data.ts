/* tslint:disable */
/* eslint-disable */

import { DownloadDataAttributes } from './download-data-attributes';
import { DownloadDataRelationships } from './download-data-relationships';
import { JsonApiLinksSelf } from './json-api-links-self';
import { TypeDownloads } from './type-downloads';

/**
 * A container of the details of the download object.
 * @export
 * @interface DownloadData
 */
export interface DownloadData {
    /**
     * 
     * @type {TypeDownloads}
     * @memberof DownloadData
     */
    'type'?: TypeDownloads;
    /**
     * An ID to uniquely identify this download. It is identical to the Job ID that was used to generate this download.
     * @type {string}
     * @memberof DownloadData
     */
    'id'?: string;
    /**
     * 
     * @type {DownloadDataAttributes}
     * @memberof DownloadData
     */
    'attributes'?: DownloadDataAttributes;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof DownloadData
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {DownloadDataRelationships}
     * @memberof DownloadData
     */
    'relationships'?: DownloadDataRelationships;
}



