import { HubsDataRelationshipsPimCollectionData } from './hubs-data-relationships-pim-collection-data';
import { ProjectsDataRelationshipsRootFolderMeta } from './projects-data-relationships-root-folder-meta';
/**
 *
 * @export
 * @interface ProjectsDataRelationshipsRootFolder
 */
export interface ProjectsDataRelationshipsRootFolder {
    /**
     *
     * @type {HubsDataRelationshipsPimCollectionData}
     * @memberof ProjectsDataRelationshipsRootFolder
     */
    'data'?: HubsDataRelationshipsPimCollectionData;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolderMeta}
     * @memberof ProjectsDataRelationshipsRootFolder
     */
    'meta'?: ProjectsDataRelationshipsRootFolderMeta;
}
