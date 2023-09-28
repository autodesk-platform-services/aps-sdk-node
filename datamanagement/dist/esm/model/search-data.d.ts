import { ProjectsDataLinks } from './projects-data-links';
import { SearchDataAttributes } from './search-data-attributes';
import { SearchDataRelationships } from './search-data-relationships';
/**
 *
 * @export
 * @interface SearchData
 */
export interface SearchData {
    /**
     *
     * @type {string}
     * @memberof SearchData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchData
     */
    'id'?: string;
    /**
     *
     * @type {SearchDataAttributes}
     * @memberof SearchData
     */
    'attributes'?: SearchDataAttributes;
    /**
     *
     * @type {ProjectsDataLinks}
     * @memberof SearchData
     */
    'links'?: ProjectsDataLinks;
    /**
     *
     * @type {SearchDataRelationships}
     * @memberof SearchData
     */
    'relationships'?: SearchDataRelationships;
}
