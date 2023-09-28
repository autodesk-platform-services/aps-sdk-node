import { HubsDataAttributes } from './hubs-data-attributes';
import { HubsDataRelationships } from './hubs-data-relationships';
import { HubsLinks } from './hubs-links';
/**
 *
 * @export
 * @interface HubsData
 */
export interface HubsData {
    /**
     *
     * @type {string}
     * @memberof HubsData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof HubsData
     */
    'id'?: string;
    /**
     *
     * @type {HubsDataAttributes}
     * @memberof HubsData
     */
    'attributes'?: HubsDataAttributes;
    /**
     *
     * @type {HubsLinks}
     * @memberof HubsData
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {HubsDataRelationships}
     * @memberof HubsData
     */
    'relationships'?: HubsDataRelationships;
}
