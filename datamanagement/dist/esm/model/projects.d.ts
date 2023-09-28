import { HubsJsonapi } from './hubs-jsonapi';
import { ProjectsData } from './projects-data';
import { ProjectsLinks } from './projects-links';
/**
 * Successful retrieval of the projects collection associated with a specific hub.
 * @export
 * @interface Projects
 */
export interface Projects {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Projects
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {ProjectsLinks}
     * @memberof Projects
     */
    'links'?: ProjectsLinks;
    /**
     *
     * @type {Set<ProjectsData>}
     * @memberof Projects
     */
    'data'?: Set<ProjectsData>;
}
