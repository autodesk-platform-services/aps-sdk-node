import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
import { ItemData } from './item-data';
import { ItemIncluded } from './item-included';
/**
 * Successful retrieval of a specific item.
 * @export
 * @interface Item
 */
export interface Item {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Item
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof Item
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {ItemData}
     * @memberof Item
     */
    'data'?: ItemData;
    /**
     *
     * @type {Set<ItemIncluded>}
     * @memberof Item
     */
    'included'?: Set<ItemIncluded>;
}
