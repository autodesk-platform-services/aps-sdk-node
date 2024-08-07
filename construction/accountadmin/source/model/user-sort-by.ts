/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const UserSortBy = {
    NameAsc: 'name asc',
    EmailAsc: 'email asc',
    FirstNameAsc: 'firstName asc',
    LastNameAsc: 'lastName asc',
    AddressLine1Asc: 'addressLine1 asc',
    AddressLine2Asc: 'addressLine2 asc',
    CityAsc: 'city asc',
    CompanyNameAsc: 'companyName asc',
    StateOrProvinceAsc: 'stateOrProvince asc',
    StatusAsc: 'status asc',
    PhoneAsc: 'phone asc',
    PostalCodeAsc: 'postalCode asc',
    CountryAsc: 'country asc',
    AddedOnAsc: 'addedOn asc',
    NameDesc: 'name desc',
    EmailDesc: 'email desc',
    FirstNameDesc: 'firstName desc',
    LastNameDesc: 'lastName desc',
    AddressLine1Desc: 'addressLine1 desc',
    AddressLine2Desc: 'addressLine2 desc',
    CityDesc: 'city desc',
    CompanyNameDesc: 'companyName desc',
    StateOrProvinceDesc: 'stateOrProvince desc',
    StatusDesc: 'status desc',
    PhoneDesc: 'phone desc',
    PostalCodeDesc: 'postalCode desc',
    CountryDesc: 'country desc',
    AddedOnDesc: 'addedOn desc'
} as const;

export type UserSortBy = typeof UserSortBy[keyof typeof UserSortBy];



