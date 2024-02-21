import { Trade } from './trade';
/**
 *
 * @export
 * @interface CompanyPayload
 */
export interface CompanyPayload {
    /**
     * Company name should be unique under an account
     * @type {string}
     * @memberof CompanyPayload
     */
    'name': string;
    /**
     *
     * @type {Trade}
     * @memberof CompanyPayload
     */
    'trade': Trade;
    /**
     * Company address line 1
     * @type {string}
     * @memberof CompanyPayload
     */
    'address_line_1'?: string;
    /**
     * Company address line 2
     * @type {string}
     * @memberof CompanyPayload
     */
    'address_line_2'?: string;
    /**
     * City in which company is located
     * @type {string}
     * @memberof CompanyPayload
     */
    'city'?: string;
    /**
     * State or province in which company is located
     * @type {string}
     * @memberof CompanyPayload
     */
    'state_or_province'?: string;
    /**
     * Postal code for the company location
     * @type {string}
     * @memberof CompanyPayload
     */
    'postal_code'?: string;
    /**
     * Country for this company
     * @type {string}
     * @memberof CompanyPayload
     */
    'country'?: string;
    /**
     * Business phone number for the company
     * @type {string}
     * @memberof CompanyPayload
     */
    'phone'?: string;
    /**
     * Company website
     * @type {string}
     * @memberof CompanyPayload
     */
    'website_url'?: string;
    /**
     * Short description or overview for company
     * @type {string}
     * @memberof CompanyPayload
     */
    'description'?: string;
    /**
     * Used to associate a company in BIM 360 with the company data in an ERP system
     * @type {string}
     * @memberof CompanyPayload
     */
    'erp_id'?: string;
    /**
     * Used to associate a company in BIM 360 with the company data from public and industry sources
     * @type {string}
     * @memberof CompanyPayload
     */
    'tax_id'?: string;
}
