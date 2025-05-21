/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const CompanyOrFilters = {
    ErpId: 'erpId',
    Name: 'name',
    TaxId: 'taxId',
    Trade: 'trade',
    UpdatedAt: 'updatedAt'
} as const;

export type CompanyOrFilters = typeof CompanyOrFilters[keyof typeof CompanyOrFilters];



