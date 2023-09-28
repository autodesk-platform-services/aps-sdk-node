import { HubsDataRelationshipsProjects } from './hubs-data-relationships-projects';
import { ProjectsDataRelationshipsHub } from './projects-data-relationships-hub';
import { ProjectsDataRelationshipsRootFolder } from './projects-data-relationships-root-folder';
import { SearchDataRelationshipsLinks } from './search-data-relationships-links';
import { TopFoldersDataRelationshipsRefs } from './top-folders-data-relationships-refs';
/**
 *
 * @export
 * @interface SearchDataRelationships
 */
export interface SearchDataRelationships {
    /**
     *
     * @type {ProjectsDataRelationshipsHub}
     * @memberof SearchDataRelationships
     */
    'item'?: ProjectsDataRelationshipsHub;
    /**
     *
     * @type {SearchDataRelationshipsLinks}
     * @memberof SearchDataRelationships
     */
    'links'?: SearchDataRelationshipsLinks;
    /**
     *
     * @type {TopFoldersDataRelationshipsRefs}
     * @memberof SearchDataRelationships
     */
    'refs'?: TopFoldersDataRelationshipsRefs;
    /**
     *
     * @type {HubsDataRelationshipsProjects}
     * @memberof SearchDataRelationships
     */
    'downloadFormats'?: HubsDataRelationshipsProjects;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof SearchDataRelationships
     */
    'derivatives'?: ProjectsDataRelationshipsRootFolder;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof SearchDataRelationships
     */
    'thumbnails'?: ProjectsDataRelationshipsRootFolder;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof SearchDataRelationships
     */
    'storage'?: ProjectsDataRelationshipsRootFolder;
}
