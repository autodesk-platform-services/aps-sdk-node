import { HubsDataRelationshipsPimCollectionData } from './hubs-data-relationships-pim-collection-data';
import { ProjectsDataRelationshipsRootFolderMeta } from './projects-data-relationships-root-folder-meta';
/**
 *
 * @export
 * @interface FolderContentsIncludedRelationshipsStorage
 */
export interface FolderContentsIncludedRelationshipsStorage {
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolderMeta}
     * @memberof FolderContentsIncludedRelationshipsStorage
     */
    'meta'?: ProjectsDataRelationshipsRootFolderMeta;
    /**
     *
     * @type {HubsDataRelationshipsPimCollectionData}
     * @memberof FolderContentsIncludedRelationshipsStorage
     */
    'data'?: HubsDataRelationshipsPimCollectionData;
}
