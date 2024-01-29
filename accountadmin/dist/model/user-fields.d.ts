/**
 *
 * @export
 * @enum {string}
 */
export declare const UserFields: {
    readonly Name: "name";
    readonly Email: "email";
    readonly FirstName: "firstName";
    readonly LastName: "lastName";
    readonly AutodeskId: "autodeskId";
    readonly AddressLine1: "addressLine1";
    readonly AddressLine2: "addressLine2";
    readonly City: "city";
    readonly StateOrProvince: "stateOrProvince";
    readonly PostalCode: "postalCode";
    readonly Country: "country";
    readonly ImageUrl: "imageUrl";
    readonly LastSignIn: "lastSignIn";
    readonly Phone: "phone";
    readonly JobTitle: "jobTitle";
    readonly Industry: "industry";
    readonly AboutMe: "aboutMe";
    readonly CreatedAt: "createdAt";
    readonly UpdatedAt: "updatedAt";
    readonly AccessLevels: "accessLevels";
    readonly CompanyId: "companyId";
    readonly RoleIds: "roleIds";
    readonly Roles: "roles";
    readonly Status: "status";
    readonly AddedOn: "addedOn";
    readonly Products: "products";
};
export type UserFields = typeof UserFields[keyof typeof UserFields];
