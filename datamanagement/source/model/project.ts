
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';
import { ProjectData } from './projectData';

/**
 * An object that represents a project.
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Project
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof Project
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {ProjectData}
     * @memberof Project
     */
    'data'?: ProjectData;
}

