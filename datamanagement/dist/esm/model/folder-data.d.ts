import { FolderDataAttributes } from './folder-data-attributes';
import { ProjectsDataLinks } from './projects-data-links';
import { TopFoldersDataRelationships } from './top-folders-data-relationships';
/**
 *
 * @export
 * @interface FolderData
 */
export interface FolderData {
    /**
     *
     * @type {string}
     * @memberof FolderData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderData
     */
    'id'?: string;
    /**
     *
     * @type {FolderDataAttributes}
     * @memberof FolderData
     */
    'attributes'?: FolderDataAttributes;
    /**
     *
     * @type {ProjectsDataLinks}
     * @memberof FolderData
     */
    'links'?: ProjectsDataLinks;
    /**
     *
     * @type {TopFoldersDataRelationships}
     * @memberof FolderData
     */
    'relationships'?: TopFoldersDataRelationships;
}
