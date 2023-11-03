import { ProjectsDataLinks } from './projects-data-links';
import { RefsDataRelationships } from './refs-data-relationships';
import { VersionsDataAttributes } from './versions-data-attributes';
/**
 *
 * @export
 * @interface VersionsData
 */
export interface VersionsData {
    /**
     *
     * @type {string}
     * @memberof VersionsData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionsData
     */
    'id'?: string;
    /**
     *
     * @type {VersionsDataAttributes}
     * @memberof VersionsData
     */
    'attributes'?: VersionsDataAttributes;
    /**
     *
     * @type {ProjectsDataLinks}
     * @memberof VersionsData
     */
    'links'?: ProjectsDataLinks;
    /**
     *
     * @type {RefsDataRelationships}
     * @memberof VersionsData
     */
    'relationships'?: RefsDataRelationships;
}
