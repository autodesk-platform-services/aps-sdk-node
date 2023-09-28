import { ItemDataAttributes } from './item-data-attributes';
import { ProjectsDataLinks } from './projects-data-links';
import { SearchIncludedRelationships } from './search-included-relationships';
/**
 *
 * @export
 * @interface ItemData
 */
export interface ItemData {
    /**
     *
     * @type {string}
     * @memberof ItemData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemData
     */
    'id'?: string;
    /**
     *
     * @type {ItemDataAttributes}
     * @memberof ItemData
     */
    'attributes'?: ItemDataAttributes;
    /**
     *
     * @type {ProjectsDataLinks}
     * @memberof ItemData
     */
    'links'?: ProjectsDataLinks;
    /**
     *
     * @type {SearchIncludedRelationships}
     * @memberof ItemData
     */
    'relationships'?: SearchIncludedRelationships;
}
