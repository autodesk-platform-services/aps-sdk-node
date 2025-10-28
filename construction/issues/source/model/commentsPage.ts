
import { Comment } from './comment';
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
     * @type {Array<Comment>}
     * @memberof CommentsPage
     */
    'results'?: Array<Comment>;
}

