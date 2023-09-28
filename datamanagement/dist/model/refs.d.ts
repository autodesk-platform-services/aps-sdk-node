import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
import { RefsData } from './refs-data';
/**
 * Successful retrieval of a resource collection.
 * @export
 * @interface Refs
 */
export interface Refs {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Refs
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof Refs
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {Set<RefsData>}
     * @memberof Refs
     */
    'data'?: Set<RefsData>;
}
