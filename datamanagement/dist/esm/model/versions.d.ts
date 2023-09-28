import { FolderContentsLinks } from './folder-contents-links';
import { HubsJsonapi } from './hubs-jsonapi';
import { RelationshipRefsIncluded } from './relationship-refs-included';
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
     * @type {Set<RelationshipRefsIncluded>}
     * @memberof Versions
     */
    'data'?: Set<RelationshipRefsIncluded>;
}
