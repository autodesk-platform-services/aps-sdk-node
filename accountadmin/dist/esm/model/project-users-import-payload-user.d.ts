import { ProjectUserPayloadProducts } from './project-user-payload-products';
/**
 * User data to import.
 * @export
 * @interface ProjectUsersImportPayloadUser
 */
export interface ProjectUsersImportPayloadUser {
    /**
     * The first name of the user. Max length: 255
     * @type {string}
     * @memberof ProjectUsersImportPayloadUser
     */
    'firstName'?: string;
    /**
     * The last name of the user. Max length: 255
     * @type {string}
     * @memberof ProjectUsersImportPayloadUser
     */
    'lastName'?: string;
    /**
     * The email address of the user. Max length: 255
     * @type {string}
     * @memberof ProjectUsersImportPayloadUser
     */
    'email': string;
    /**
     * The ID of the company that the user is representing in the project. To obtain a list of all company IDs associated with a project, call GET projects/:projectId/companies.
     * @type {string}
     * @memberof ProjectUsersImportPayloadUser
     */
    'companyId'?: string;
    /**
     * A list of IDs of the roles that the user belongs to in the project.
     * @type {Array<string>}
     * @memberof ProjectUsersImportPayloadUser
     */
    'roleIds'?: Array<string>;
    /**
     *
     * @type {ProjectUserPayloadProducts}
     * @memberof ProjectUsersImportPayloadUser
     */
    'products': ProjectUserPayloadProducts;
}
