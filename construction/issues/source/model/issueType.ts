/* tslint:disable */
/* eslint-disable */

import { IssueTypePagination } from './issueTypePagination';
import { IssueTypeResults } from './issueTypeResults';

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

