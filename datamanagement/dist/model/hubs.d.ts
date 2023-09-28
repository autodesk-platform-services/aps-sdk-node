import { HubsData } from './hubs-data';
import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
/**
 * Successful retrieval of the hubs collection.
 * @export
 * @interface Hubs
 */
export interface Hubs {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Hubs
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof Hubs
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {Set<HubsData>}
     * @memberof Hubs
     */
    'data'?: Set<HubsData>;
}
