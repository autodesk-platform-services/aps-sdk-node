/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const CompanyStatus = {
    Deleted: 'deleted',
    Active: 'active'
} as const;

export type CompanyStatus = typeof CompanyStatus[keyof typeof CompanyStatus];



