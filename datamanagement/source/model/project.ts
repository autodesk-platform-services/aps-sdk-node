/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';
import { ProjectData } from './project-data';

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

