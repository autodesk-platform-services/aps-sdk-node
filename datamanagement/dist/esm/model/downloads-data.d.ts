import { DownloadsDataAttributes } from './downloads-data-attributes';
import { DownloadsDataRelationships } from './downloads-data-relationships';
import { HubsLinks } from './hubs-links';
/**
 *
 * @export
 * @interface DownloadsData
 */
export interface DownloadsData {
    /**
     *
     * @type {string}
     * @memberof DownloadsData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof DownloadsData
     */
    'id'?: string;
    /**
     *
     * @type {DownloadsDataAttributes}
     * @memberof DownloadsData
     */
    'attributes'?: DownloadsDataAttributes;
    /**
     *
     * @type {DownloadsDataRelationships}
     * @memberof DownloadsData
     */
    'relationships'?: DownloadsDataRelationships;
    /**
     *
     * @type {HubsLinks}
     * @memberof DownloadsData
     */
    'links'?: HubsLinks;
}
