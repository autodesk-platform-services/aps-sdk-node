/* tslint:disable */
/* eslint-disable */

import { Pagination } from './pagination';
import { Project } from './project';

/**
 * 
 * @export
 * @interface ProjectsPage
 */
export interface ProjectsPage {
    /**
     * 
     * @type {Pagination}
     * @memberof ProjectsPage
     */
    'pagination'?: Pagination;
    /**
     * The requested page of projects.
     * @type {Array<Project>}
     * @memberof ProjectsPage
     */
    'results'?: Array<Project>;
}

