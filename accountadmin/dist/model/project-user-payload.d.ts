import { ProjectUserPayloadProducts } from './project-user-payload-products';
/**
 *
 * @export
 * @interface ProjectUserPayload
 */
export interface ProjectUserPayload {
    /**
     * The email address of the user. Max length: 255
     * @type {string}
     * @memberof ProjectUserPayload
     */
    'email': string;
    /**
     * The ID of the company that the user is representing in the project. To obtain a list of all company IDs associated with a project, call GET projects/:projectId/companies.
     * @type {string}
     * @memberof ProjectUserPayload
     */
    'companyId'?: string;
    /**
     * A list of IDs of the roles that the user belongs to in the project.
     * @type {Array<string>}
     * @memberof ProjectUserPayload
     */
    'roleIds'?: Array<string>;
    /**
     *
     * @type {Array<ProjectUserPayloadProducts>}
     * @memberof ProjectUserPayload
     */
    'products': Array<ProjectUserPayloadProducts>;
}
