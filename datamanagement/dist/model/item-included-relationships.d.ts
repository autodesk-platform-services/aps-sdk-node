import { HubsDataRelationshipsProjects } from './hubs-data-relationships-projects';
import { ProjectsDataRelationshipsHub } from './projects-data-relationships-hub';
import { ProjectsDataRelationshipsRootFolder } from './projects-data-relationships-root-folder';
import { TopFoldersDataRelationshipsLinks } from './top-folders-data-relationships-links';
import { TopFoldersDataRelationshipsRefs } from './top-folders-data-relationships-refs';
/**
 *
 * @export
 * @interface ItemIncludedRelationships
 */
export interface ItemIncludedRelationships {
    /**
     *
     * @type {ProjectsDataRelationshipsHub}
     * @memberof ItemIncludedRelationships
     */
    'item'?: ProjectsDataRelationshipsHub;
    /**
     *
     * @type {TopFoldersDataRelationshipsLinks}
     * @memberof ItemIncludedRelationships
     */
    'links'?: TopFoldersDataRelationshipsLinks;
    /**
     *
     * @type {TopFoldersDataRelationshipsRefs}
     * @memberof ItemIncludedRelationships
     */
    'refs'?: TopFoldersDataRelationshipsRefs;
    /**
     *
     * @type {HubsDataRelationshipsProjects}
     * @memberof ItemIncludedRelationships
     */
    'downloadFormats'?: HubsDataRelationshipsProjects;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof ItemIncludedRelationships
     */
    'derivatives'?: ProjectsDataRelationshipsRootFolder;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof ItemIncludedRelationships
     */
    'thumbnails'?: ProjectsDataRelationshipsRootFolder;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof ItemIncludedRelationships
     */
    'storage'?: ProjectsDataRelationshipsRootFolder;
}
