import { ProjectUsersUpdatePayloadProducts } from './project-users-update-payload-products';
/**
 *
 * @export
 * @interface ProjectUsersUpdatePayload
 */
export interface ProjectUsersUpdatePayload {
    /**
     * The email address of the user. Max length: 255
     * @type {string}
     * @memberof ProjectUsersUpdatePayload
     */
    'email'?: string;
    /**
     * The ID of the company that the user is representing in the project. To obtain a list of all company IDs associated with a project, call GET projects/:projectId/companies.
     * @type {string}
     * @memberof ProjectUsersUpdatePayload
     */
    'companyId'?: string;
    /**
     * A list of IDs of the roles that the user belongs to in the project.
     * @type {Array<string>}
     * @memberof ProjectUsersUpdatePayload
     */
    'roleIds'?: Array<string>;
    /**
     *
     * @type {Array<ProjectUsersUpdatePayloadProducts>}
     * @memberof ProjectUsersUpdatePayload
     */
    'products'?: Array<ProjectUsersUpdatePayloadProducts>;
}
