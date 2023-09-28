import { FolderRefsDataAttributes } from './folder-refs-data-attributes';
import { FolderRefsDataLinks } from './folder-refs-data-links';
import { TopFoldersDataRelationships } from './top-folders-data-relationships';
/**
 *
 * @export
 * @interface FolderRefsData
 */
export interface FolderRefsData {
    /**
     *
     * @type {string}
     * @memberof FolderRefsData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderRefsData
     */
    'id'?: string;
    /**
     *
     * @type {FolderRefsDataAttributes}
     * @memberof FolderRefsData
     */
    'attributes'?: FolderRefsDataAttributes;
    /**
     *
     * @type {FolderRefsDataLinks}
     * @memberof FolderRefsData
     */
    'links'?: FolderRefsDataLinks;
    /**
     *
     * @type {TopFoldersDataRelationships}
     * @memberof FolderRefsData
     */
    'relationships'?: TopFoldersDataRelationships;
}
