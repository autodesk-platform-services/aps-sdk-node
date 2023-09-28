import { ProjectsDataLinks } from './projects-data-links';
import { SearchIncludedAttributes } from './search-included-attributes';
import { SearchIncludedRelationships } from './search-included-relationships';
/**
 *
 * @export
 * @interface SearchIncluded
 */
export interface SearchIncluded {
    /**
     *
     * @type {string}
     * @memberof SearchIncluded
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchIncluded
     */
    'id'?: string;
    /**
     *
     * @type {SearchIncludedAttributes}
     * @memberof SearchIncluded
     */
    'attributes'?: SearchIncludedAttributes;
    /**
     *
     * @type {ProjectsDataLinks}
     * @memberof SearchIncluded
     */
    'links'?: ProjectsDataLinks;
    /**
     *
     * @type {SearchIncludedRelationships}
     * @memberof SearchIncluded
     */
    'relationships'?: SearchIncludedRelationships;
}
