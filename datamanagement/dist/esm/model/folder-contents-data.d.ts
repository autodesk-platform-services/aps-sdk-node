import { FolderContentsDataAttributes } from './folder-contents-data-attributes';
import { HubsLinks } from './hubs-links';
import { TopFoldersDataRelationships } from './top-folders-data-relationships';
/**
 *
 * @export
 * @interface FolderContentsData
 */
export interface FolderContentsData {
    /**
     *
     * @type {string}
     * @memberof FolderContentsData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsData
     */
    'id'?: string;
    /**
     *
     * @type {FolderContentsDataAttributes}
     * @memberof FolderContentsData
     */
    'attributes'?: FolderContentsDataAttributes;
    /**
     *
     * @type {HubsLinks}
     * @memberof FolderContentsData
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {TopFoldersDataRelationships}
     * @memberof FolderContentsData
     */
    'relationships'?: TopFoldersDataRelationships;
}
