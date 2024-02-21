import { ProjectUsersImportPayloadUsersProducts } from './project-users-import-payload-users-products';
/**
 *
 * @export
 * @interface ProjectUsersImportPayloadUsers
 */
export interface ProjectUsersImportPayloadUsers {
    /**
     * The first name of the user. Max length: 255
     * @type {string}
     * @memberof ProjectUsersImportPayloadUsers
     */
    'firstName'?: string;
    /**
     * The last name of the user. Max length: 255
     * @type {string}
     * @memberof ProjectUsersImportPayloadUsers
     */
    'lastName'?: string;
    /**
     * The email address of the user. Max length: 255
     * @type {string}
     * @memberof ProjectUsersImportPayloadUsers
     */
    'email': string;
    /**
     * The ID of the company that the user is representing in the project. To obtain a list of all company IDs associated with a project, call GET projects/:projectId/companies.
     * @type {string}
     * @memberof ProjectUsersImportPayloadUsers
     */
    'companyId'?: string;
    /**
     * A list of IDs of the roles that the user belongs to in the project.
     * @type {Array<string>}
     * @memberof ProjectUsersImportPayloadUsers
     */
    'roleIds'?: Array<string>;
    /**
     *
     * @type {Array<ProjectUsersImportPayloadUsersProducts>}
     * @memberof ProjectUsersImportPayloadUsers
     */
    'products': Array<ProjectUsersImportPayloadUsersProducts>;
}
