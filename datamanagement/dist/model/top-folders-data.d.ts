import { ProjectsDataLinks } from './projects-data-links';
import { TopFoldersDataAttributes } from './top-folders-data-attributes';
import { TopFoldersDataRelationships } from './top-folders-data-relationships';
/**
 *
 * @export
 * @interface TopFoldersData
 */
export interface TopFoldersData {
    /**
     *
     * @type {string}
     * @memberof TopFoldersData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof TopFoldersData
     */
    'id'?: string;
    /**
     *
     * @type {TopFoldersDataAttributes}
     * @memberof TopFoldersData
     */
    'attributes'?: TopFoldersDataAttributes;
    /**
     *
     * @type {ProjectsDataLinks}
     * @memberof TopFoldersData
     */
    'links'?: ProjectsDataLinks;
    /**
     *
     * @type {TopFoldersDataRelationships}
     * @memberof TopFoldersData
     */
    'relationships'?: TopFoldersDataRelationships;
}
