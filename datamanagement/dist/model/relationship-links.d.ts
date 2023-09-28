import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
import { RelationshipLinksData } from './relationship-links-data';
/**
 * Successful retrieval of the links collection associated with a specific resource.
 * @export
 * @interface RelationshipLinks
 */
export interface RelationshipLinks {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof RelationshipLinks
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof RelationshipLinks
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {Set<RelationshipLinksData>}
     * @memberof RelationshipLinks
     */
    'data'?: Set<RelationshipLinksData>;
}
