import { HubsDataRelationshipsPimCollectionData } from './hubs-data-relationships-pim-collection-data';
import { HubsDataRelationshipsProjectsLinks } from './hubs-data-relationships-projects-links';
/**
 *
 * @export
 * @interface TopFoldersDataRelationshipsParent
 */
export interface TopFoldersDataRelationshipsParent {
    /**
     *
     * @type {HubsDataRelationshipsProjectsLinks}
     * @memberof TopFoldersDataRelationshipsParent
     */
    'links'?: HubsDataRelationshipsProjectsLinks;
    /**
     *
     * @type {HubsDataRelationshipsPimCollectionData}
     * @memberof TopFoldersDataRelationshipsParent
     */
    'data'?: HubsDataRelationshipsPimCollectionData;
}
