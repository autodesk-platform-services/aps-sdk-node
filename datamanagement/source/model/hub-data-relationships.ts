/* tslint:disable */
/* eslint-disable */

import { HubDataRelationshipsPimCollection } from './hub-data-relationships-pim-collection';
import { HubDataRelationshipsProjects } from './hub-data-relationships-projects';

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

