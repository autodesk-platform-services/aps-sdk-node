/* tslint:disable */
/* eslint-disable */

import { AccountCompanyAddresses } from './accountCompanyAddresses';
import { CompanyStatus } from './companyStatus';

/**
 * 
 * @export
 * @interface AccountCompany
 */
export interface AccountCompany {
    /**
     * 
     * @type {string}
     * @memberof AccountCompany
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompany
     */
    'accountId'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompany
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompany
     */
    'trade'?: string;
    /**
     * 
     * @type {AccountCompanyAddresses}
     * @memberof AccountCompany
     */
    'addresses'?: AccountCompanyAddresses;
    /**
     * 
     * @type {string}
     * @memberof AccountCompany
     */
    'websiteUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompany
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompany
     */
    'erpId'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompany
     */
    'taxId'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompany
     */
    'imageUrl'?: string;
    /**
     * 
     * @type {CompanyStatus}
     * @memberof AccountCompany
     */
    'status'?: CompanyStatus;
    /**
     * 
     * @type {string}
     * @memberof AccountCompany
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompany
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompany
     */
    'originalName'?: string;
    /**
     * 
     * @type {number}
     * @memberof AccountCompany
     */
    'projectSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountCompany
     */
    'userSize'?: number;
}



