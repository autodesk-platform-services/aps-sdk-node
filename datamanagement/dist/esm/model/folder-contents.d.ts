import { FolderContentsData } from './folder-contents-data';
import { FolderContentsIncluded } from './folder-contents-included';
import { FolderContentsLinks } from './folder-contents-links';
import { HubsJsonapi } from './hubs-jsonapi';
/**
 * Successful retrieval of the folder contents collection associated with a specific folder.
 * @export
 * @interface FolderContents
 */
export interface FolderContents {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof FolderContents
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {FolderContentsLinks}
     * @memberof FolderContents
     */
    'links'?: FolderContentsLinks;
    /**
     *
     * @type {Set<FolderContentsData>}
     * @memberof FolderContents
     */
    'data'?: Set<FolderContentsData>;
    /**
     *
     * @type {Set<FolderContentsIncluded>}
     * @memberof FolderContents
     */
    'included'?: Set<FolderContentsIncluded>;
}
