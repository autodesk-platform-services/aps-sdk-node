/* tslint:disable */
/* eslint-disable */

import { Company } from './company';

/**
 * 
 * @export
 * @interface CompanyImport
 */
export interface CompanyImport {
    /**
     * Import success company count
     * @type {number}
     * @memberof CompanyImport
     */
    'success'?: number;
    /**
     * Import failure company count
     * @type {number}
     * @memberof CompanyImport
     */
    'failure'?: number;
    /**
     * Array of company objects that were successfully imported
     * @type {Array<Company>}
     * @memberof CompanyImport
     */
    'success_items'?: Array<Company>;
    /**
     * Array of company objects that failed to import, along with content and error information
     * @type {Array<Company>}
     * @memberof CompanyImport
     */
    'failure_items'?: Array<Company>;
}

