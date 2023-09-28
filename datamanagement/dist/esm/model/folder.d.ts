import { FolderData } from './folder-data';
import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
/**
 * Successful retrieval of a specific folder.
 * @export
 * @interface Folder
 */
export interface Folder {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Folder
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof Folder
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {FolderData}
     * @memberof Folder
     */
    'data'?: FolderData;
}
