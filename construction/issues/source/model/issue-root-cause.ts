/* tslint:disable */
/* eslint-disable */

import { IssueRootCauseResults } from './issue-root-cause-results';
import { IssueTypePagination } from './issue-type-pagination';

/**
 * The pagination object.
 * @export
 * @interface IssueRootCause
 */
export interface IssueRootCause {
    /**
     * 
     * @type {IssueTypePagination}
     * @memberof IssueRootCause
     */
    'pagination'?: IssueTypePagination;
    /**
     * A list of issue root cause categories.
     * @type {Array<IssueRootCauseResults>}
     * @memberof IssueRootCause
     */
    'results'?: Array<IssueRootCauseResults>;
}

