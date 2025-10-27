
import { Pagination } from './pagination';
import { Role } from './role';

/**
 * A list of requested roles associated with the user
 * @export
 * @interface RolesPage
 */
export interface RolesPage {
    /**
     * 
     * @type {Pagination}
     * @memberof RolesPage
     */
    'pagination'?: Pagination;
    /**
     * 
     * @type {Array<Role>}
     * @memberof RolesPage
     */
    'results'?: Array<Role>;
}

