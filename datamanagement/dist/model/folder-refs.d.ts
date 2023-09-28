import { FolderRefsData } from './folder-refs-data';
import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
/**
 * Successful retrieval of a resource collection.
 * @export
 * @interface FolderRefs
 */
export interface FolderRefs {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof FolderRefs
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof FolderRefs
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {Set<FolderRefsData>}
     * @memberof FolderRefs
     */
    'data'?: Set<FolderRefsData>;
}
