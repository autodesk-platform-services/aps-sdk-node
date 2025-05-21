/* tslint:disable */
/* eslint-disable */

import { AddressType } from './addressType';

/**
 * 
 * @export
 * @interface AccountCompanyAddress
 */
export interface AccountCompanyAddress {
    /**
     * 
     * @type {AddressType}
     * @memberof AccountCompanyAddress
     */
    'type'?: AddressType;
    /**
     * 
     * @type {string}
     * @memberof AccountCompanyAddress
     */
    'addressLine1'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompanyAddress
     */
    'addressLine2'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompanyAddress
     */
    'city'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompanyAddress
     */
    'stateOrProvince'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompanyAddress
     */
    'postalCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompanyAddress
     */
    'country'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompanyAddress
     */
    'phone'?: string;
}



