/* tslint:disable */
/* eslint-disable */

import { AccountCompany } from './accountCompany';
import { Pagination } from './pagination';

/**
 * 
 * @export
 * @interface AccountCompaniesPage
 */
export interface AccountCompaniesPage {
    /**
     * 
     * @type {Pagination}
     * @memberof AccountCompaniesPage
     */
    'pagination'?: Pagination;
    /**
     * 
     * @type {Array<AccountCompany>}
     * @memberof AccountCompaniesPage
     */
    'results'?: Array<AccountCompany>;
}

