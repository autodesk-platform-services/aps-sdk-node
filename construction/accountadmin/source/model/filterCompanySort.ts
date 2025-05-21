/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const FilterCompanySort = {
    NameAsc: 'name asc',
    TradeAsc: 'trade asc',
    ErpIdAsc: 'erpId asc',
    TaxIdAsc: 'taxId asc',
    StatusAsc: 'status asc',
    CreatedAtAsc: 'createdAt asc',
    UpdatedAtAsc: 'updatedAt asc',
    ProjectSizeAsc: 'projectSize asc',
    UserSizeAsc: 'userSize asc',
    NameDesc: 'name desc',
    TradeDesc: 'trade desc',
    ErpIdDesc: 'erpId desc',
    TaxIdDesc: 'taxId desc',
    StatusDesc: 'status desc',
    CreatedAtDesc: 'createdAt desc',
    UpdatedAtDesc: 'updatedAt desc',
    ProjectSizeDesc: 'projectSize desc',
    UserSizeDesc: 'userSize desc'
} as const;

export type FilterCompanySort = typeof FilterCompanySort[keyof typeof FilterCompanySort];



