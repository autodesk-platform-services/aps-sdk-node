import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
import { ItemTipData } from './item-tip-data';
/**
 * Successful retrieval of a specific version.
 * @export
 * @interface Version
 */
export interface Version {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Version
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof Version
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {ItemTipData}
     * @memberof Version
     */
    'data'?: ItemTipData;
}
