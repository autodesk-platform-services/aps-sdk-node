/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface ProjectCompanies
 */
export interface ProjectCompanies {
    /**
     * Company ID
     * @type {string}
     * @memberof ProjectCompanies
     */
    'id'?: string;
    /**
     * Account ID
     * @type {string}
     * @memberof ProjectCompanies
     */
    'account_id'?: string;
    /**
     * Project ID
     * @type {string}
     * @memberof ProjectCompanies
     */
    'project_id'?: string;
    /**
     * Company name should be unique under an account
     * @type {string}
     * @memberof ProjectCompanies
     */
    'name'?: string;
    /**
     * Trade type based on specialization
     * @type {string}
     * @memberof ProjectCompanies
     */
    'trade'?: string;
    /**
     * Company address line 1
     * @type {string}
     * @memberof ProjectCompanies
     */
    'address_line_1'?: string;
    /**
     * Company address line 2
     * @type {string}
     * @memberof ProjectCompanies
     */
    'address_line_2'?: string;
    /**
     * City in which company is located
     * @type {string}
     * @memberof ProjectCompanies
     */
    'city'?: string;
    /**
     * State or province in which company is located
     * @type {string}
     * @memberof ProjectCompanies
     */
    'state_or_province'?: string;
    /**
     * Postal code for the company location
     * @type {string}
     * @memberof ProjectCompanies
     */
    'postal_code'?: string;
    /**
     * Country for this company
     * @type {string}
     * @memberof ProjectCompanies
     */
    'country'?: string;
    /**
     * Business phone number for the company
     * @type {string}
     * @memberof ProjectCompanies
     */
    'phone'?: string;
    /**
     * Company website
     * @type {string}
     * @memberof ProjectCompanies
     */
    'website_url'?: string;
    /**
     * Short description or overview for company
     * @type {string}
     * @memberof ProjectCompanies
     */
    'description'?: string;
    /**
     * Used to associate a company in BIM 360 with the company data in an ERP system
     * @type {string}
     * @memberof ProjectCompanies
     */
    'erp_id'?: string;
    /**
     * Used to associate a company in BIM 360 with the company data from public and industry sources
     * @type {string}
     * @memberof ProjectCompanies
     */
    'tax_id'?: string;
    /**
     * The Autodesk ID of the company; used to identify which company is assigned to an RFI or Issue.
     * @type {string}
     * @memberof ProjectCompanies
     */
    'member_group_id'?: string;
}

