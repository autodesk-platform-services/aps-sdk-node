import { DownloadDataAttributes } from './download-data-attributes';
import { HubsLinks } from './hubs-links';
/**
 *
 * @export
 * @interface DownloadData
 */
export interface DownloadData {
    /**
     *
     * @type {string}
     * @memberof DownloadData
     */
    'type'?: string;
    /**
     *
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
     * @type {HubsLinks}
     * @memberof DownloadData
     */
    'links'?: HubsLinks;
}
