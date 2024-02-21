import { ProjectUserAccessLevels } from './project-user-access-levels';
import { ProjectUserPhone } from './project-user-phone';
import { ProjectUserProducts } from './project-user-products';
import { ProjectUserRoles } from './project-user-roles';
/**
 *
 * @export
 * @interface ProjectUserResponse
 */
export interface ProjectUserResponse {
    /**
     * The email of the user. Max length: 255
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'email'?: string;
    /**
     * The ACC ID of the user.
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'id'?: string;
    /**
     * The full name of the user.
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'name'?: string;
    /**
     * The user’s first name. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'firstName'?: string;
    /**
     * The user’s last name. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'lastName'?: string;
    /**
     * The ID of the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'autodeskId'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'analyticsId'?: string;
    /**
     * The user’s address line 1. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'addressLine1'?: string;
    /**
     * The user’s address line 2. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'addressLine2'?: string;
    /**
     * The User’s city. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'city'?: string;
    /**
     * The state or province of the user. The accepted values here change depending on which country is provided. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'stateOrProvince'?: string;
    /**
     * The zip or postal code of the user. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'postalCode'?: string;
    /**
     * The user’s country. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'country'?: string;
    /**
     * The URL of the user’s avatar. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'imageUrl'?: string;
    /**
     *
     * @type {ProjectUserPhone}
     * @memberof ProjectUserResponse
     */
    'phone'?: ProjectUserPhone;
    /**
     * The user’s job title. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'jobTitle'?: string;
    /**
     * The industry the user works in. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'industry'?: string;
    /**
     * A short bio about the user. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'aboutMe'?: string;
    /**
     *
     * @type {ProjectUserAccessLevels}
     * @memberof ProjectUserResponse
     */
    'accessLevels'?: ProjectUserAccessLevels;
    /**
     * The timestamp when the user was first given access to any product on the project.
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'addedOn'?: string;
    /**
     * The timestamp when the project user was last updated, in ISO 8601 format.
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'updatedAt'?: string;
    /**
     * The ID of the company that the user is representing in the project. To obtain a list of all company IDs associated with a project, call GET projects/:projectId/companies.
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'companyId'?: string;
    /**
     * The name of the company to which the user belongs. Max length: 255
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'companyName'?: string;
    /**
     * A list of IDs of the roles that the user belongs to in the project.
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'roleIds'?: string;
    /**
     * A list of the role IDs and names that are associated with the user in the project.
     * @type {Array<ProjectUserRoles>}
     * @memberof ProjectUserResponse
     */
    'roles'?: Array<ProjectUserRoles>;
    /**
     * The status of the user in the project. A pending user could be waiting for their products to activate, or the user hasn’t accepted an email to create an account with Autodesk.
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'status'?: string;
    /**
     *
     * @type {Array<ProjectUserProducts>}
     * @memberof ProjectUserResponse
     */
    'products'?: Array<ProjectUserProducts>;
    /**
     * Not relevant - we don’t currently support this field.
     * @type {string}
     * @memberof ProjectUserResponse
     */
    'jobId'?: string;
}
