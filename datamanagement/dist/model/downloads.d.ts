import { DownloadsData } from './downloads-data';
import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
/**
 * Successful retrieval of the available downloads collection associated with a specific version.
 * @export
 * @interface Downloads
 */
export interface Downloads {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Downloads
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof Downloads
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {Set<DownloadsData>}
     * @memberof Downloads
     */
    'data'?: Set<DownloadsData>;
}
