import { ItemIncludedAttributes } from './item-included-attributes';
import { ItemIncludedRelationships } from './item-included-relationships';
import { ProjectsDataLinks } from './projects-data-links';
/**
 *
 * @export
 * @interface ItemIncluded
 */
export interface ItemIncluded {
    /**
     *
     * @type {string}
     * @memberof ItemIncluded
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemIncluded
     */
    'id'?: string;
    /**
     *
     * @type {ItemIncludedAttributes}
     * @memberof ItemIncluded
     */
    'attributes'?: ItemIncludedAttributes;
    /**
     *
     * @type {ProjectsDataLinks}
     * @memberof ItemIncluded
     */
    'links'?: ProjectsDataLinks;
    /**
     *
     * @type {ItemIncludedRelationships}
     * @memberof ItemIncluded
     */
    'relationships'?: ItemIncludedRelationships;
}
