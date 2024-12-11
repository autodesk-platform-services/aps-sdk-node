/* tslint:disable */
/* eslint-disable */

import { JsonApiVersion } from './jsonApiVersion';
import { PaginationInfo } from './paginationInfo';
import { ProjectData } from './projectData';

/**
 * An object representing a collection of projects within a hub.
 * @export
 * @interface Projects
 */
export interface Projects {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Projects
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {PaginationInfo}
     * @memberof Projects
     */
    'links'?: PaginationInfo;
    /**
     * An array of objects where each object represents a project.
     * @type {Array<ProjectData>}
     * @memberof Projects
     */
    'data'?: Array<ProjectData>;
}

