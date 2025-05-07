
import { Issue } from './issue';
import { Pagination } from './pagination';

/**
 * 
 * @export
 * @interface IssuesPage
 */
export interface IssuesPage {
    /**
     * 
     * @type {Pagination}
     * @memberof IssuesPage
     */
    'pagination'?: Pagination;
    /**
     * The list of issues in the current page
     * @type {Array<Issue>}
     * @memberof IssuesPage
     */
    'results'?: Array<Issue>;
}

