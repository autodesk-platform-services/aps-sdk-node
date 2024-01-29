import { Company } from './company';
/**
 *
 * @export
 * @interface CompanyImportResponse
 */
export interface CompanyImportResponse {
    /**
     * Import success company count
     * @type {number}
     * @memberof CompanyImportResponse
     */
    'success'?: number;
    /**
     * Import failure company count
     * @type {number}
     * @memberof CompanyImportResponse
     */
    'failure'?: number;
    /**
     * Array of company objects that were successfully imported
     * @type {Array<Company>}
     * @memberof CompanyImportResponse
     */
    'success_items'?: Array<Company>;
    /**
     * Array of company objects that failed to import, along with content and error information
     * @type {Array<Company>}
     * @memberof CompanyImportResponse
     */
    'failure_items'?: Array<Company>;
}
