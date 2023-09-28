import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
import { TopFoldersData } from './top-folders-data';
/**
 * Successful retrieval of the top folders’ details.
 * @export
 * @interface TopFolders
 */
export interface TopFolders {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof TopFolders
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof TopFolders
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {Set<TopFoldersData>}
     * @memberof TopFolders
     */
    'data'?: Set<TopFoldersData>;
}
