/* tslint:disable */
/* eslint-disable */

import { IssueTypePagination } from './issue-type-pagination';
import { IssueTypeResults } from './issue-type-results';

/**
 * 
 * @export
 * @interface IssueType
 */
export interface IssueType {
    /**
     * 
     * @type {IssueTypePagination}
     * @memberof IssueType
     */
    'pagination'?: IssueTypePagination;
    /**
     * A list of issue type categories.
     * @type {Array<IssueTypeResults>}
     * @memberof IssueType
     */
    'results'?: Array<IssueTypeResults>;
}

