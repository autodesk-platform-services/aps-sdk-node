/**
 *
 * @export
 * @enum {string}
 */
export declare const UserSortBy: {
    readonly NameAsc: "name asc";
    readonly EmailAsc: "email asc";
    readonly FirstNameAsc: "firstName asc";
    readonly LastNameAsc: "lastName asc";
    readonly AddressLine1Asc: "addressLine1 asc";
    readonly AddressLine2Asc: "addressLine2 asc";
    readonly CityAsc: "city asc";
    readonly CompanyNameAsc: "companyName asc";
    readonly StateOrProvinceAsc: "stateOrProvince asc";
    readonly StatusAsc: "status asc";
    readonly PhoneAsc: "phone asc";
    readonly PostalCodeAsc: "postalCode asc";
    readonly CountryAsc: "country asc";
    readonly AddedOnAsc: "addedOn asc";
    readonly NameDesc: "name desc";
    readonly EmailDesc: "email desc";
    readonly FirstNameDesc: "firstName desc";
    readonly LastNameDesc: "lastName desc";
    readonly AddressLine1Desc: "addressLine1 desc";
    readonly AddressLine2Desc: "addressLine2 desc";
    readonly CityDesc: "city desc";
    readonly CompanyNameDesc: "companyName desc";
    readonly StateOrProvinceDesc: "stateOrProvince desc";
    readonly StatusDesc: "status desc";
    readonly PhoneDesc: "phone desc";
    readonly PostalCodeDesc: "postalCode desc";
    readonly CountryDesc: "country desc";
    readonly AddedOnDesc: "addedOn desc";
};
export type UserSortBy = typeof UserSortBy[keyof typeof UserSortBy];
