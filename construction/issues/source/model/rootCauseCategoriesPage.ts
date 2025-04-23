
import { Pagination } from './pagination';
import { RootCauseCategoriesPageResults } from './rootCauseCategoriesPageResults';

/**
 * The pagination object.
 * @export
 * @interface RootCauseCategoriesPage
 */
export interface RootCauseCategoriesPage {
    /**
     * 
     * @type {Pagination}
     * @memberof RootCauseCategoriesPage
     */
    'pagination'?: Pagination;
    /**
     * A list of issue root cause categories.
     * @type {Array<RootCauseCategoriesPageResults>}
     * @memberof RootCauseCategoriesPage
     */
    'results'?: Array<RootCauseCategoriesPageResults>;
}

