/* tslint:disable */
/* eslint-disable */

import { Pagination } from './pagination';
import { ProjectUser } from './projectUser';

/**
 * 
 * @export
 * @interface ProjectUsersPage
 */
export interface ProjectUsersPage {
    /**
     * 
     * @type {Pagination}
     * @memberof ProjectUsersPage
     */
    'pagination'?: Pagination;
    /**
     * The requested page of project users.
     * @type {Array<ProjectUser>}
     * @memberof ProjectUsersPage
     */
    'results'?: Array<ProjectUser>;
}

