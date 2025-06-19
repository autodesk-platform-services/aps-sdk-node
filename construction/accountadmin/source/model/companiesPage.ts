/* tslint:disable */
/* eslint-disable */

import { AccountCompany } from './accountCompany';
import { Pagination } from './pagination';

/**
 * 
 * @export
 * @interface CompaniesPage
 */
export interface CompaniesPage {
    /**
     * 
     * @type {Pagination}
     * @memberof CompaniesPage
     */
    'pagination'?: Pagination;
    /**
     * 
     * @type {Array<AccountCompany>}
     * @memberof CompaniesPage
     */
    'results'?: Array<AccountCompany>;
}

