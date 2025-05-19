/* tslint:disable */
/* eslint-disable */

import { AddressType } from './addressType';

/**
 * 
 * @export
 * @interface AccountCompanyAddresses
 */
export interface AccountCompanyAddresses {
    /**
     * 
     * @type {AddressType}
     * @memberof AccountCompanyAddresses
     */
    'type'?: AddressType;
    /**
     * 
     * @type {string}
     * @memberof AccountCompanyAddresses
     */
    'addressLine1'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompanyAddresses
     */
    'addressLine2'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompanyAddresses
     */
    'city'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompanyAddresses
     */
    'stateOrProvince'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompanyAddresses
     */
    'postalCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompanyAddresses
     */
    'country'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountCompanyAddresses
     */
    'phone'?: string;
}



