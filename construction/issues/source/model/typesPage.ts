
import { IssueType } from './issueType';
import { Pagination } from './pagination';

/**
 * 
 * @export
 * @interface TypesPage
 */
export interface TypesPage {
    /**
     * 
     * @type {Pagination}
     * @memberof TypesPage
     */
    'pagination'?: Pagination;
    /**
     * A list of issue type categories.
     * @type {Array<IssueType>}
     * @memberof TypesPage
     */
    'results'?: Array<IssueType>;
}

