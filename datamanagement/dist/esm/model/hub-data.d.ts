import { HubDataAttributes } from './hub-data-attributes';
import { HubsDataRelationships } from './hubs-data-relationships';
import { HubsLinks } from './hubs-links';
/**
 *
 * @export
 * @interface HubData
 */
export interface HubData {
    /**
     *
     * @type {string}
     * @memberof HubData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof HubData
     */
    'id'?: string;
    /**
     *
     * @type {HubDataAttributes}
     * @memberof HubData
     */
    'attributes'?: HubDataAttributes;
    /**
     *
     * @type {HubsDataRelationships}
     * @memberof HubData
     */
    'relationships'?: HubsDataRelationships;
    /**
     *
     * @type {HubsLinks}
     * @memberof HubData
     */
    'links'?: HubsLinks;
}
