import { ProjectsDataAttributes } from './projects-data-attributes';
import { ProjectsDataLinks } from './projects-data-links';
import { ProjectsDataRelationships } from './projects-data-relationships';
/**
 *
 * @export
 * @interface ProjectsData
 */
export interface ProjectsData {
    /**
     *
     * @type {string}
     * @memberof ProjectsData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof ProjectsData
     */
    'id'?: string;
    /**
     *
     * @type {ProjectsDataAttributes}
     * @memberof ProjectsData
     */
    'attributes'?: ProjectsDataAttributes;
    /**
     *
     * @type {ProjectsDataLinks}
     * @memberof ProjectsData
     */
    'links'?: ProjectsDataLinks;
    /**
     *
     * @type {ProjectsDataRelationships}
     * @memberof ProjectsData
     */
    'relationships'?: ProjectsDataRelationships;
}
