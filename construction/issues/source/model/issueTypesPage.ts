
import { IssueType } from './issueType';
import { Pagination } from './pagination';

/**
 * 
 * @export
 * @interface IssueTypesPage
 */
export interface IssueTypesPage {
    /**
     * 
     * @type {Pagination}
     * @memberof IssueTypesPage
     */
    'pagination'?: Pagination;
    /**
     * A list of issue type categories.
     * @type {Array<IssueType>}
     * @memberof IssueTypesPage
     */
    'results'?: Array<IssueType>;
}

