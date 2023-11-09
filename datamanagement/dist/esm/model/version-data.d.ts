import { ProjectsDataLinks } from './projects-data-links';
import { VersionDataAttributes } from './version-data-attributes';
/**
 *
 * @export
 * @interface VersionData
 */
export interface VersionData {
    /**
     *
     * @type {string}
     * @memberof VersionData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionData
     */
    'id'?: string;
    /**
     *
     * @type {VersionDataAttributes}
     * @memberof VersionData
     */
    'attributes'?: VersionDataAttributes;
    /**
     *
     * @type {ProjectsDataLinks}
     * @memberof VersionData
     */
    'links'?: ProjectsDataLinks;
}
