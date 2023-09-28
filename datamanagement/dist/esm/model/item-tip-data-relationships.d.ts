import { FolderContentsIncludedRelationshipsStorage } from './folder-contents-included-relationships-storage';
import { HubsDataRelationshipsProjects } from './hubs-data-relationships-projects';
import { ProjectsDataRelationshipsRootFolder } from './projects-data-relationships-root-folder';
import { TopFoldersDataRelationshipsLinks } from './top-folders-data-relationships-links';
import { TopFoldersDataRelationshipsParent } from './top-folders-data-relationships-parent';
import { TopFoldersDataRelationshipsRefs } from './top-folders-data-relationships-refs';
/**
 *
 * @export
 * @interface ItemTipDataRelationships
 */
export interface ItemTipDataRelationships {
    /**
     *
     * @type {TopFoldersDataRelationshipsParent}
     * @memberof ItemTipDataRelationships
     */
    'item'?: TopFoldersDataRelationshipsParent;
    /**
     *
     * @type {TopFoldersDataRelationshipsRefs}
     * @memberof ItemTipDataRelationships
     */
    'refs'?: TopFoldersDataRelationshipsRefs;
    /**
     *
     * @type {TopFoldersDataRelationshipsLinks}
     * @memberof ItemTipDataRelationships
     */
    'links'?: TopFoldersDataRelationshipsLinks;
    /**
     *
     * @type {FolderContentsIncludedRelationshipsStorage}
     * @memberof ItemTipDataRelationships
     */
    'storage'?: FolderContentsIncludedRelationshipsStorage;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof ItemTipDataRelationships
     */
    'derivatives'?: ProjectsDataRelationshipsRootFolder;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof ItemTipDataRelationships
     */
    'thumbnails'?: ProjectsDataRelationshipsRootFolder;
    /**
     *
     * @type {HubsDataRelationshipsProjects}
     * @memberof ItemTipDataRelationships
     */
    'downloadFormats'?: HubsDataRelationshipsProjects;
}
