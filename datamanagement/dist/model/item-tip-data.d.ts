import { ItemTipDataRelationships } from './item-tip-data-relationships';
import { ProjectsDataLinks } from './projects-data-links';
import { RefsDataAttributes } from './refs-data-attributes';
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
     * @type {RefsDataAttributes}
     * @memberof ItemTipData
     */
    'attributes'?: RefsDataAttributes;
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
