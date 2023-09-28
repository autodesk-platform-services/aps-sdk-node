import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
import { ItemTipData } from './item-tip-data';
/**
 * Successful retrieval of a specific version.
 * @export
 * @interface ItemTip
 */
export interface ItemTip {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof ItemTip
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof ItemTip
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {ItemTipData}
     * @memberof ItemTip
     */
    'data'?: ItemTipData;
}
