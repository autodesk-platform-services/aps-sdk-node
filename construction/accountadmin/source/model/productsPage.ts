
import { Pagination } from './pagination';
import { Product } from './product';

/**
 * A list of products associated with the user
 * @export
 * @interface ProductsPage
 */
export interface ProductsPage {
    /**
     * 
     * @type {Pagination}
     * @memberof ProductsPage
     */
    'pagination'?: Pagination;
    /**
     * 
     * @type {Array<Product>}
     * @memberof ProductsPage
     */
    'results'?: Array<Product>;
}

