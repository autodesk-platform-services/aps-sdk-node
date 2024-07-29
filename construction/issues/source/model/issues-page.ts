/* tslint:disable */
/* eslint-disable */

import { IssuesPagePagination } from './issues-page-pagination';
import { Results } from './results';

/**
 * 
 * @export
 * @interface IssuesPage
 */
export interface IssuesPage {
    /**
     * 
     * @type {IssuesPagePagination}
     * @memberof IssuesPage
     */
    'pagination'?: IssuesPagePagination;
    /**
     * The list of issues in the current page
     * @type {Array<Results>}
     * @memberof IssuesPage
     */
    'results'?: Array<Results>;
}

