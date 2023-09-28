import { HubsDataRelationshipsProjects } from './hubs-data-relationships-projects';
import { ProjectsDataRelationshipsHub } from './projects-data-relationships-hub';
import { TopFoldersDataRelationshipsLinks } from './top-folders-data-relationships-links';
import { TopFoldersDataRelationshipsRefs } from './top-folders-data-relationships-refs';
/**
 *
 * @export
 * @interface SearchIncludedRelationships
 */
export interface SearchIncludedRelationships {
    /**
     *
     * @type {ProjectsDataRelationshipsHub}
     * @memberof SearchIncludedRelationships
     */
    'tip'?: ProjectsDataRelationshipsHub;
    /**
     *
     * @type {HubsDataRelationshipsProjects}
     * @memberof SearchIncludedRelationships
     */
    'versions'?: HubsDataRelationshipsProjects;
    /**
     *
     * @type {ProjectsDataRelationshipsHub}
     * @memberof SearchIncludedRelationships
     */
    'parent'?: ProjectsDataRelationshipsHub;
    /**
     *
     * @type {TopFoldersDataRelationshipsRefs}
     * @memberof SearchIncludedRelationships
     */
    'refs'?: TopFoldersDataRelationshipsRefs;
    /**
     *
     * @type {TopFoldersDataRelationshipsLinks}
     * @memberof SearchIncludedRelationships
     */
    'links'?: TopFoldersDataRelationshipsLinks;
}
