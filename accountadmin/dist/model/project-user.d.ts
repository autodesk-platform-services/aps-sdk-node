import { ProjectUserAccessLevels } from './project-user-access-levels';
import { ProjectUserPhone } from './project-user-phone';
import { ProjectUserProducts } from './project-user-products';
import { ProjectUserRoles } from './project-user-roles';
/**
 *
 * @export
 * @interface ProjectUser
 */
export interface ProjectUser {
    /**
     * The email of the user. Max length: 255
     * @type {string}
     * @memberof ProjectUser
     */
    'email'?: string;
    /**
     * The ACC ID of the user.
     * @type {string}
     * @memberof ProjectUser
     */
    'id'?: string;
    /**
     * The full name of the user.
     * @type {string}
     * @memberof ProjectUser
     */
    'name'?: string;
    /**
     * The user’s first name. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUser
     */
    'firstName'?: string;
    /**
     * The user’s last name. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUser
     */
    'lastName'?: string;
    /**
     * The ID of the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUser
     */
    'autodeskId'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof ProjectUser
     */
    'analyticsId'?: string;
    /**
     * The user’s address line 1. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUser
     */
    'addressLine1'?: string;
    /**
     * The user’s address line 2. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUser
     */
    'addressLine2'?: string;
    /**
     * The User’s city. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUser
     */
    'city'?: string;
    /**
     * The state or province of the user. The accepted values here change depending on which country is provided. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUser
     */
    'stateOrProvince'?: string;
    /**
     * The zip or postal code of the user. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUser
     */
    'postalCode'?: string;
    /**
     * The user’s country. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUser
     */
    'country'?: string;
    /**
     * The URL of the user’s avatar. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUser
     */
    'imageUrl'?: string;
    /**
     *
     * @type {ProjectUserPhone}
     * @memberof ProjectUser
     */
    'phone'?: ProjectUserPhone;
    /**
     * The user’s job title. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUser
     */
    'jobTitle'?: string;
    /**
     * The industry the user works in. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUser
     */
    'industry'?: string;
    /**
     * A short bio about the user. This data syncs from the user’s Autodesk profile. Max length: 255
     * @type {string}
     * @memberof ProjectUser
     */
    'aboutMe'?: string;
    /**
     *
     * @type {ProjectUserAccessLevels}
     * @memberof ProjectUser
     */
    'accessLevels'?: ProjectUserAccessLevels;
    /**
     * The timestamp when the user was first given access to any product on the project.
     * @type {string}
     * @memberof ProjectUser
     */
    'addedOn'?: string;
    /**
     * The timestamp when the project user was last updated, in ISO 8601 format.
     * @type {string}
     * @memberof ProjectUser
     */
    'updatedAt'?: string;
    /**
     * The ID of the company that the user is representing in the project. To obtain a list of all company IDs associated with a project, call GET projects/:projectId/companies.
     * @type {string}
     * @memberof ProjectUser
     */
    'companyId'?: string;
    /**
     * The name of the company to which the user belongs. Max length: 255
     * @type {string}
     * @memberof ProjectUser
     */
    'companyName'?: string;
    /**
     * A list of IDs of the roles that the user belongs to in the project.
     * @type {string}
     * @memberof ProjectUser
     */
    'roleIds'?: string;
    /**
     * A list of the role IDs and names that are associated with the user in the project.
     * @type {Array<ProjectUserRoles>}
     * @memberof ProjectUser
     */
    'roles'?: Array<ProjectUserRoles>;
    /**
     * The status of the user in the project. A pending user could be waiting for their products to activate, or the user hasn’t accepted an email to create an account with Autodesk.
     * @type {string}
     * @memberof ProjectUser
     */
    'status'?: string;
    /**
     *
     * @type {Array<ProjectUserProducts>}
     * @memberof ProjectUser
     */
    'products'?: Array<ProjectUserProducts>;
}
