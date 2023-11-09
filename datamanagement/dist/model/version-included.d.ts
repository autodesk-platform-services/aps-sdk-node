import { ProjectsDataLinks } from './projects-data-links';
import { VersionIncludedAttributes } from './version-included-attributes';
/**
 *
 * @export
 * @interface VersionIncluded
 */
export interface VersionIncluded {
    /**
     *
     * @type {string}
     * @memberof VersionIncluded
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionIncluded
     */
    'id'?: string;
    /**
     *
     * @type {VersionIncludedAttributes}
     * @memberof VersionIncluded
     */
    'attributes'?: VersionIncludedAttributes;
    /**
     *
     * @type {ProjectsDataLinks}
     * @memberof VersionIncluded
     */
    'links'?: ProjectsDataLinks;
}
