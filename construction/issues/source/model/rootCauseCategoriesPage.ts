
import { Pagination } from './pagination';
import { RootCauseCategory } from './rootCauseCategory';

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
     * @type {Array<RootCauseCategory>}
     * @memberof RootCauseCategoriesPage
     */
    'results'?: Array<RootCauseCategory>;
}

