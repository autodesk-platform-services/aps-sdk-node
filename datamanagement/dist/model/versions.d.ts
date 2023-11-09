import { FolderContentsLinks } from './folder-contents-links';
import { HubsJsonapi } from './hubs-jsonapi';
import { VersionsData } from './versions-data';
/**
 * Successful retrieval of the versions collection associated with a specific item.
 * @export
 * @interface Versions
 */
export interface Versions {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Versions
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {FolderContentsLinks}
     * @memberof Versions
     */
    'links'?: FolderContentsLinks;
    /**
     *
     * @type {Set<VersionsData>}
     * @memberof Versions
     */
    'data'?: Set<VersionsData>;
}
