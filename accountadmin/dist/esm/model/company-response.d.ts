/**
 *
 * @export
 * @interface CompanyResponse
 */
export interface CompanyResponse {
    /**
     * Company ID
     * @type {string}
     * @memberof CompanyResponse
     */
    'id'?: string;
    /**
     * Account ID
     * @type {string}
     * @memberof CompanyResponse
     */
    'account_id'?: string;
    /**
     * Project ID
     * @type {string}
     * @memberof CompanyResponse
     */
    'project_id'?: string;
    /**
     * Company name should be unique under an account
     * @type {string}
     * @memberof CompanyResponse
     */
    'name'?: string;
    /**
     * Trade type based on specialization
     * @type {string}
     * @memberof CompanyResponse
     */
    'trade'?: string;
    /**
     * Company address line 1
     * @type {string}
     * @memberof CompanyResponse
     */
    'address_line_1'?: string;
    /**
     * Company address line 2
     * @type {string}
     * @memberof CompanyResponse
     */
    'address_line_2'?: string;
    /**
     * City in which company is located
     * @type {string}
     * @memberof CompanyResponse
     */
    'city'?: string;
    /**
     * State or province in which company is located
     * @type {string}
     * @memberof CompanyResponse
     */
    'state_or_province'?: string;
    /**
     * Postal code for the company location
     * @type {string}
     * @memberof CompanyResponse
     */
    'postal_code'?: string;
    /**
     * Country for this company
     * @type {string}
     * @memberof CompanyResponse
     */
    'country'?: string;
    /**
     * Business phone number for the company
     * @type {string}
     * @memberof CompanyResponse
     */
    'phone'?: string;
    /**
     * Company website
     * @type {string}
     * @memberof CompanyResponse
     */
    'website_url'?: string;
    /**
     * Short description or overview for company
     * @type {string}
     * @memberof CompanyResponse
     */
    'description'?: string;
    /**
     * Used to associate a company in BIM 360 with the company data in an ERP system
     * @type {string}
     * @memberof CompanyResponse
     */
    'erp_id'?: string;
    /**
     * Used to associate a company in BIM 360 with the company data from public and industry sources
     * @type {string}
     * @memberof CompanyResponse
     */
    'tax_id'?: string;
    /**
     * The Autodesk ID of the company; used to identify which company is assigned to an RFI or Issue.
     * @type {string}
     * @memberof CompanyResponse
     */
    'member_group_id'?: string;
}
