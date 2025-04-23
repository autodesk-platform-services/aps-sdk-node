
import { Comments } from './comments';
import { Pagination } from './pagination';

/**
 * The pagination object.
 * @export
 * @interface CommentsPage
 */
export interface CommentsPage {
    /**
     * 
     * @type {Pagination}
     * @memberof CommentsPage
     */
    'pagination'?: Pagination;
    /**
     * 
     * @type {Comments}
     * @memberof CommentsPage
     */
    'results'?: Comments;
}

