/* tslint:disable */
/* eslint-disable */

import { ProjectUser } from './projectUser';
import { ProjectsPagination } from './projectsPagination';

/**
 * 
 * @export
 * @interface ProjectUsers
 */
export interface ProjectUsers {
    /**
     * 
     * @type {ProjectsPagination}
     * @memberof ProjectUsers
     */
    'pagination'?: ProjectsPagination;
    /**
     * The requested page of project users.
     * @type {Array<ProjectUser>}
     * @memberof ProjectUsers
     */
    'results'?: Array<ProjectUser>;
}

