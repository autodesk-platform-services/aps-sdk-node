import { HubData } from './hub-data';
import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
/**
 * Successful retrieval of a specific hub.
 * @export
 * @interface Hub
 */
export interface Hub {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Hub
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof Hub
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {HubData}
     * @memberof Hub
     */
    'data'?: HubData;
}
