import { HubsDataRelationshipsProjects } from './hubs-data-relationships-projects';
import { ProjectsDataRelationshipsHub } from './projects-data-relationships-hub';
import { ProjectsDataRelationshipsRootFolder } from './projects-data-relationships-root-folder';
/**
 *
 * @export
 * @interface ProjectsDataRelationships
 */
export interface ProjectsDataRelationships {
    /**
     *
     * @type {ProjectsDataRelationshipsHub}
     * @memberof ProjectsDataRelationships
     */
    'hub'?: ProjectsDataRelationshipsHub;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof ProjectsDataRelationships
     */
    'rootFolder'?: ProjectsDataRelationshipsRootFolder;
    /**
     *
     * @type {HubsDataRelationshipsProjects}
     * @memberof ProjectsDataRelationships
     */
    'topFolders'?: HubsDataRelationshipsProjects;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof ProjectsDataRelationships
     */
    'issues'?: ProjectsDataRelationshipsRootFolder;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof ProjectsDataRelationships
     */
    'submittals'?: ProjectsDataRelationshipsRootFolder;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof ProjectsDataRelationships
     */
    'rfis'?: ProjectsDataRelationshipsRootFolder;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof ProjectsDataRelationships
     */
    'markups'?: ProjectsDataRelationshipsRootFolder;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof ProjectsDataRelationships
     */
    'checklists'?: ProjectsDataRelationshipsRootFolder;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof ProjectsDataRelationships
     */
    'cost'?: ProjectsDataRelationshipsRootFolder;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof ProjectsDataRelationships
     */
    'locations'?: ProjectsDataRelationshipsRootFolder;
}
