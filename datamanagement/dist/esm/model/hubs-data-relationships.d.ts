import { HubsDataRelationshipsPimCollection } from './hubs-data-relationships-pim-collection';
import { HubsDataRelationshipsProjects } from './hubs-data-relationships-projects';
/**
 *
 * @export
 * @interface HubsDataRelationships
 */
export interface HubsDataRelationships {
    /**
     *
     * @type {HubsDataRelationshipsProjects}
     * @memberof HubsDataRelationships
     */
    'projects'?: HubsDataRelationshipsProjects;
    /**
     *
     * @type {HubsDataRelationshipsPimCollection}
     * @memberof HubsDataRelationships
     */
    'pimCollection'?: HubsDataRelationshipsPimCollection;
}
