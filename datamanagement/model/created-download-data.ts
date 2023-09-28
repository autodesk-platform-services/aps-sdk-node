/* tslint:disable */
/* eslint-disable */

import { CreatedDownloadDataAttributes } from './created-download-data-attributes';
import { HubsLinks } from './hubs-links';

/**
 * 
 * @export
 * @interface CreatedDownloadData
 */
export interface CreatedDownloadData {
    /**
     * 
     * @type {string}
     * @memberof CreatedDownloadData
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatedDownloadData
     */
    'id'?: string;
    /**
     * 
     * @type {CreatedDownloadDataAttributes}
     * @memberof CreatedDownloadData
     */
    'attributes'?: CreatedDownloadDataAttributes;
    /**
     * 
     * @type {HubsLinks}
     * @memberof CreatedDownloadData
     */
    'links'?: HubsLinks;
}

