/**
 *
 * @export
 * @interface Company
 */
export interface Company {
    /**
     * Company ID
     * @type {string}
     * @memberof Company
     */
    'id'?: string;
    /**
     * Account ID
     * @type {string}
     * @memberof Company
     */
    'account_id'?: string;
    /**
     * Company name should be unique under an account
     * @type {string}
     * @memberof Company
     */
    'name'?: string;
    /**
     * Trade type based on specialization
     * @type {string}
     * @memberof Company
     */
    'trade'?: string;
    /**
     * Company address line 1
     * @type {string}
     * @memberof Company
     */
    'address_line_1'?: string;
    /**
     * Company address line 2
     * @type {string}
     * @memberof Company
     */
    'address_line_2'?: string;
    /**
     * City in which company is located
     * @type {string}
     * @memberof Company
     */
    'city'?: string;
    /**
     * State or province in which company is located
     * @type {string}
     * @memberof Company
     */
    'state_or_province'?: string;
    /**
     * Postal code for the company location
     * @type {string}
     * @memberof Company
     */
    'postal_code'?: string;
    /**
     * Country for this company
     * @type {string}
     * @memberof Company
     */
    'country'?: string;
    /**
     * Business phone number for the company
     * @type {string}
     * @memberof Company
     */
    'phone'?: string;
    /**
     * Company website
     * @type {string}
     * @memberof Company
     */
    'website_url'?: string;
    /**
     * Short description or overview for company
     * @type {string}
     * @memberof Company
     */
    'description'?: string;
    /**
     * Used to associate a company in BIM 360 with the company data in an ERP system
     * @type {string}
     * @memberof Company
     */
    'erp_id'?: string;
    /**
     * Used to associate a company in BIM 360 with the company data from public and industry sources
     * @type {string}
     * @memberof Company
     */
    'tax_id'?: string;
}
