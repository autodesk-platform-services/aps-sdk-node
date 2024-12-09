/* tslint:disable */
/* eslint-disable */

import { Project } from './project';
import { ProjectsPagination } from './projectsPagination';

/**
 * 
 * @export
 * @interface Projects
 */
export interface Projects {
    /**
     * 
     * @type {ProjectsPagination}
     * @memberof Projects
     */
    'pagination'?: ProjectsPagination;
    /**
     * The requested page of projects.
     * @type {Array<Project>}
     * @memberof Projects
     */
    'results'?: Array<Project>;
}

