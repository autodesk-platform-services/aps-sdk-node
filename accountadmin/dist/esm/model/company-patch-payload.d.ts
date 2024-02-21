import { Trade } from './trade';
/**
 *
 * @export
 * @interface CompanyPatchPayload
 */
export interface CompanyPatchPayload {
    /**
     * Company name should be unique under an account
     * @type {string}
     * @memberof CompanyPatchPayload
     */
    'name'?: string;
    /**
     *
     * @type {Trade}
     * @memberof CompanyPatchPayload
     */
    'trade'?: Trade;
    /**
     * Company address line 1
     * @type {string}
     * @memberof CompanyPatchPayload
     */
    'address_line_1'?: string;
    /**
     * Company address line 2
     * @type {string}
     * @memberof CompanyPatchPayload
     */
    'address_line_2'?: string;
    /**
     * City in which company is located
     * @type {string}
     * @memberof CompanyPatchPayload
     */
    'city'?: string;
    /**
     * State or province in which company is located
     * @type {string}
     * @memberof CompanyPatchPayload
     */
    'state_or_province'?: string;
    /**
     * Postal code for the company location
     * @type {string}
     * @memberof CompanyPatchPayload
     */
    'postal_code'?: string;
    /**
     * Country for this company
     * @type {string}
     * @memberof CompanyPatchPayload
     */
    'country'?: string;
    /**
     * Business phone number for the company
     * @type {string}
     * @memberof CompanyPatchPayload
     */
    'phone'?: string;
    /**
     * Company website
     * @type {string}
     * @memberof CompanyPatchPayload
     */
    'website_url'?: string;
    /**
     * Short description or overview for company
     * @type {string}
     * @memberof CompanyPatchPayload
     */
    'description'?: string;
    /**
     * Used to associate a company in BIM 360 with the company data in an ERP system
     * @type {string}
     * @memberof CompanyPatchPayload
     */
    'erp_id'?: string;
    /**
     * Used to associate a company in BIM 360 with the company data from public and industry sources
     * @type {string}
     * @memberof CompanyPatchPayload
     */
    'tax_id'?: string;
}
