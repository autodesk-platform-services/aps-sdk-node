/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const FilterCompanyFields = {
    AccountId: 'accountId',
    Name: 'name',
    Trade: 'trade',
    Addresses: 'addresses',
    WebsiteUrl: 'websiteUrl',
    Description: 'description',
    ErpId: 'erpId',
    TaxId: 'taxId',
    ImageUrl: 'imageUrl',
    Status: 'status',
    CreatedAt: 'createdAt',
    UpdatedAt: 'updatedAt',
    ProjectSize: 'projectSize',
    UserSize: 'userSize',
    OriginalName: 'originalName'
} as const;

export type FilterCompanyFields = typeof FilterCompanyFields[keyof typeof FilterCompanyFields];



