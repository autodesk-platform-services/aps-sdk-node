/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const UserFields = {
    Name: 'name',
    Email: 'email',
    FirstName: 'firstName',
    LastName: 'lastName',
    AutodeskId: 'autodeskId',
    AddressLine1: 'addressLine1',
    AddressLine2: 'addressLine2',
    City: 'city',
    StateOrProvince: 'stateOrProvince',
    PostalCode: 'postalCode',
    Country: 'country',
    ImageUrl: 'imageUrl',
    LastSignIn: 'lastSignIn',
    Phone: 'phone',
    JobTitle: 'jobTitle',
    Industry: 'industry',
    AboutMe: 'aboutMe',
    CreatedAt: 'createdAt',
    UpdatedAt: 'updatedAt',
    AccessLevels: 'accessLevels',
    CompanyId: 'companyId',
    RoleIds: 'roleIds',
    Roles: 'roles',
    Status: 'status',
    AddedOn: 'addedOn',
    Products: 'products'
} as const;

export type UserFields = typeof UserFields[keyof typeof UserFields];



