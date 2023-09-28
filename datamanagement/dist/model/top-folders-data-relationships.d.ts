import { HubsDataRelationshipsProjects } from './hubs-data-relationships-projects';
import { TopFoldersDataRelationshipsLinks } from './top-folders-data-relationships-links';
import { TopFoldersDataRelationshipsParent } from './top-folders-data-relationships-parent';
import { TopFoldersDataRelationshipsRefs } from './top-folders-data-relationships-refs';
/**
 *
 * @export
 * @interface TopFoldersDataRelationships
 */
export interface TopFoldersDataRelationships {
    /**
     *
     * @type {TopFoldersDataRelationshipsParent}
     * @memberof TopFoldersDataRelationships
     */
    'parent'?: TopFoldersDataRelationshipsParent;
    /**
     *
     * @type {TopFoldersDataRelationshipsRefs}
     * @memberof TopFoldersDataRelationships
     */
    'refs'?: TopFoldersDataRelationshipsRefs;
    /**
     *
     * @type {TopFoldersDataRelationshipsLinks}
     * @memberof TopFoldersDataRelationships
     */
    'links'?: TopFoldersDataRelationshipsLinks;
    /**
     *
     * @type {HubsDataRelationshipsProjects}
     * @memberof TopFoldersDataRelationships
     */
    'contents'?: HubsDataRelationshipsProjects;
}
