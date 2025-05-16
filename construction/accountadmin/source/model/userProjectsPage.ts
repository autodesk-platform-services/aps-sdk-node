
import { Pagination } from './pagination';
import { UserProject } from './userProject';

/**
 * 
 * @export
 * @interface UserProjectsPage
 */
export interface UserProjectsPage {
    /**
     * 
     * @type {Pagination}
     * @memberof UserProjectsPage
     */
    'pagination'?: Pagination;
    /**
     * 
     * @type {Array<UserProject>}
     * @memberof UserProjectsPage
     */
    'results'?: Array<UserProject>;
}

