
import { HubDataRelationshipsPimCollection } from './hubDataRelationshipsPimCollection';
import { HubDataRelationshipsProjects } from './hubDataRelationshipsProjects';

/**
 * Contains links to resources that are directly related to this hub.
 * @export
 * @interface HubDataRelationships
 */
export interface HubDataRelationships {
    /**
     * 
     * @type {HubDataRelationshipsProjects}
     * @memberof HubDataRelationships
     */
    'projects'?: HubDataRelationshipsProjects;
    /**
     * 
     * @type {HubDataRelationshipsPimCollection}
     * @memberof HubDataRelationships
     */
    'pimCollection'?: HubDataRelationshipsPimCollection;
}

