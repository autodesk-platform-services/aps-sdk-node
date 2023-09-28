import { CreatedVersionIncludedAttributes } from './created-version-included-attributes';
import { ProjectsDataLinks } from './projects-data-links';
/**
 *
 * @export
 * @interface CreatedVersionIncluded
 */
export interface CreatedVersionIncluded {
    /**
     *
     * @type {string}
     * @memberof CreatedVersionIncluded
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof CreatedVersionIncluded
     */
    'id'?: string;
    /**
     *
     * @type {CreatedVersionIncludedAttributes}
     * @memberof CreatedVersionIncluded
     */
    'attributes'?: CreatedVersionIncludedAttributes;
    /**
     *
     * @type {ProjectsDataLinks}
     * @memberof CreatedVersionIncluded
     */
    'links'?: ProjectsDataLinks;
}
