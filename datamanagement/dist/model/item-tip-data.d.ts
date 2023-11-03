import { ItemTipDataAttributes } from './item-tip-data-attributes';
import { ItemTipDataRelationships } from './item-tip-data-relationships';
import { ProjectsDataLinks } from './projects-data-links';
/**
 *
 * @export
 * @interface ItemTipData
 */
export interface ItemTipData {
    /**
     *
     * @type {string}
     * @memberof ItemTipData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemTipData
     */
    'id'?: string;
    /**
     *
     * @type {ItemTipDataAttributes}
     * @memberof ItemTipData
     */
    'attributes'?: ItemTipDataAttributes;
    /**
     *
     * @type {ProjectsDataLinks}
     * @memberof ItemTipData
     */
    'links'?: ProjectsDataLinks;
    /**
     *
     * @type {ItemTipDataRelationships}
     * @memberof ItemTipData
     */
    'relationships'?: ItemTipDataRelationships;
}
