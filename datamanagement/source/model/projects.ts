/* tslint:disable */
/* eslint-disable */

import { JsonApiVersion } from './json-api-version';
import { PaginationInfo } from './pagination-info';
import { ProjectData } from './project-data';

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
     * @type {Set<ProjectData>}
     * @memberof Projects
     */
    'data'?: Set<ProjectData>;
}

