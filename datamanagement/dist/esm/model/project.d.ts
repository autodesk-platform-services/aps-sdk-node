import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
import { ProjectsData } from './projects-data';
/**
 * Successful retrieval of a specific project.
 * @export
 * @interface Project
 */
export interface Project {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Project
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof Project
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {ProjectsData}
     * @memberof Project
     */
    'data'?: ProjectsData;
}
