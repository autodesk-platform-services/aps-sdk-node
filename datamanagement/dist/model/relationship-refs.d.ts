import { HubsJsonapi } from './hubs-jsonapi';
import { RelationshipRefsData } from './relationship-refs-data';
import { RelationshipRefsIncluded } from './relationship-refs-included';
import { TopFoldersDataRelationshipsRefsLinks } from './top-folders-data-relationships-refs-links';
/**
 * Successful retrieval of the refs collection associated with a specific resource.
 * @export
 * @interface RelationshipRefs
 */
export interface RelationshipRefs {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof RelationshipRefs
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {TopFoldersDataRelationshipsRefsLinks}
     * @memberof RelationshipRefs
     */
    'links'?: TopFoldersDataRelationshipsRefsLinks;
    /**
     *
     * @type {Set<RelationshipRefsData>}
     * @memberof RelationshipRefs
     */
    'data'?: Set<RelationshipRefsData>;
    /**
     *
     * @type {Set<RelationshipRefsIncluded>}
     * @memberof RelationshipRefs
     */
    'included'?: Set<RelationshipRefsIncluded>;
}
