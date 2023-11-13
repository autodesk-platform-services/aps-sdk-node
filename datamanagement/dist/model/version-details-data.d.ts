import { ItemTipDataRelationships } from './item-tip-data-relationships';
import { ProjectsDataLinks } from './projects-data-links';
import { VersionDetailsDataAttributes } from './version-details-data-attributes';
/**
 *
 * @export
 * @interface VersionDetailsData
 */
export interface VersionDetailsData {
    /**
     *
     * @type {string}
     * @memberof VersionDetailsData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDetailsData
     */
    'id'?: string;
    /**
     *
     * @type {VersionDetailsDataAttributes}
     * @memberof VersionDetailsData
     */
    'attributes'?: VersionDetailsDataAttributes;
    /**
     *
     * @type {ProjectsDataLinks}
     * @memberof VersionDetailsData
     */
    'links'?: ProjectsDataLinks;
    /**
     *
     * @type {ItemTipDataRelationships}
     * @memberof VersionDetailsData
     */
    'relationships'?: ItemTipDataRelationships;
}
