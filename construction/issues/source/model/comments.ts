/* tslint:disable */
/* eslint-disable */

import { CommentsResults } from './commentsResults';
import { IssueTypePagination } from './issueTypePagination';

/**
 * The pagination object.
 * @export
 * @interface Comments
 */
export interface Comments {
    /**
     * 
     * @type {IssueTypePagination}
     * @memberof Comments
     */
    'pagination'?: IssueTypePagination;
    /**
     * The ID of the custom attribute.
     * @type {Array<CommentsResults>}
     * @memberof Comments
     */
    'results'?: Array<CommentsResults>;
}

