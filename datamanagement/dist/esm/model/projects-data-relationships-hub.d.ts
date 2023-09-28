import { HubsDataRelationshipsPimCollectionData } from './hubs-data-relationships-pim-collection-data';
import { HubsDataRelationshipsProjectsLinks } from './hubs-data-relationships-projects-links';
/**
 *
 * @export
 * @interface ProjectsDataRelationshipsHub
 */
export interface ProjectsDataRelationshipsHub {
    /**
     *
     * @type {HubsDataRelationshipsPimCollectionData}
     * @memberof ProjectsDataRelationshipsHub
     */
    'data'?: HubsDataRelationshipsPimCollectionData;
    /**
     *
     * @type {HubsDataRelationshipsProjectsLinks}
     * @memberof ProjectsDataRelationshipsHub
     */
    'links'?: HubsDataRelationshipsProjectsLinks;
}
