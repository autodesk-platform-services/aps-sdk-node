import { HubsLinks } from './hubs-links';
import { RefsDataAttributes } from './refs-data-attributes';
import { RefsDataRelationships } from './refs-data-relationships';
/**
 *
 * @export
 * @interface RefsData
 */
export interface RefsData {
    /**
     *
     * @type {string}
     * @memberof RefsData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof RefsData
     */
    'id'?: string;
    /**
     *
     * @type {RefsDataAttributes}
     * @memberof RefsData
     */
    'attributes'?: RefsDataAttributes;
    /**
     *
     * @type {HubsLinks}
     * @memberof RefsData
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {RefsDataRelationships}
     * @memberof RefsData
     */
    'relationships'?: RefsDataRelationships;
}
