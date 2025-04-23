
import { Pagination } from './pagination';
import { TypesPageResults } from './typesPageResults';

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
     * @type {Array<TypesPageResults>}
     * @memberof TypesPage
     */
    'results'?: Array<TypesPageResults>;
}

