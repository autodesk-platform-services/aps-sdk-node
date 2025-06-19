/* tslint:disable */
/* eslint-disable */

import { ProjectUserAccessLevels } from './projectUserAccessLevels';
import { ProjectUserPhone } from './projectUserPhone';
import { ProjectUserProducts } from './projectUserProducts';
import { ProjectUserRoles } from './projectUserRoles';

/**
 * 
 * @export
 * @interface ProjectUserDetails
 */
export interface ProjectUserDetails {
    /**
     * The email of the user.
 * Max length: 255
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'email'?: string;
    /**
     * The ACC ID of the user.
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'id'?: string;
    /**
     * The full name of the user.
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'name'?: string;
    /**
     * The user’s first name. This data syncs from the user’s Autodesk profile.
 * Max length: 255
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'firstName'?: string;
    /**
     * The user’s last name. This data syncs from the user’s Autodesk profile.
 * Max length: 255
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'lastName'?: string;
    /**
     * The ID of the user’s Autodesk profile.
 * Max length: 255
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'autodeskId'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'analyticsId'?: string;
    /**
     * The user’s address line 1. This data syncs from the user’s Autodesk profile.
 * Max length: 255
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'addressLine1'?: string;
    /**
     * The user’s address line 2. This data syncs from the user’s Autodesk profile.
 * Max length: 255
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'addressLine2'?: string;
    /**
     * The User’s city. This data syncs from the user’s Autodesk profile.
 * Max length: 255
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'city'?: string;
    /**
     * The state or province of the user. The accepted values here change depending on which country is provided. This data syncs from the user’s Autodesk profile.
 * Max length: 255
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'stateOrProvince'?: string;
    /**
     * The zip or postal code of the user. This data syncs from the user’s Autodesk profile.
 * Max length: 255
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'postalCode'?: string;
    /**
     * The user’s country. This data syncs from the user’s Autodesk profile.
 * Max length: 255
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'country'?: string;
    /**
     * The URL of the user’s avatar. This data syncs from the user’s Autodesk profile.
 * Max length: 255
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'imageUrl'?: string;
    /**
     * 
     * @type {ProjectUserPhone}
     * @memberof ProjectUserDetails
     */
    'phone'?: ProjectUserPhone;
    /**
     * The user’s job title. This data syncs from the user’s Autodesk profile.
 * Max length: 255
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'jobTitle'?: string;
    /**
     * The industry the user works in. This data syncs from the user’s Autodesk profile.
 * Max length: 255
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'industry'?: string;
    /**
     * A short bio about the user. This data syncs from the user’s Autodesk profile.
 * Max length: 255
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'aboutMe'?: string;
    /**
     * 
     * @type {ProjectUserAccessLevels}
     * @memberof ProjectUserDetails
     */
    'accessLevels'?: ProjectUserAccessLevels;
    /**
     * The timestamp when the user was first given access to any product on the project.
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'addedOn'?: string;
    /**
     * The timestamp when the project user was last updated, in ISO 8601 format.
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'updatedAt'?: string;
    /**
     * The ID of the company that the user is representing in the project. To obtain a list of all company IDs associated with a project, call GET projects/:projectId/companies.
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'companyId'?: string;
    /**
     * The name of the company to which the user belongs.
 * Max length: 255
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'companyName'?: string;
    /**
     * A list of IDs of the roles that the user belongs to in the project.
     * @type {Array<string>}
     * @memberof ProjectUserDetails
     */
    'roleIds'?: Array<string>;
    /**
     * A list of the role IDs and names that are associated with the user in the project.
     * @type {Array<ProjectUserRoles>}
     * @memberof ProjectUserDetails
     */
    'roles'?: Array<ProjectUserRoles>;
    /**
     * The status of the user in the project. A pending user could be waiting for their products to activate, or the user hasn’t accepted an email to create an account with Autodesk.
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'status'?: string;
    /**
     * 
     * @type {Array<ProjectUserProducts>}
     * @memberof ProjectUserDetails
     */
    'products'?: Array<ProjectUserProducts>;
    /**
     * Not relevant - we don’t currently support this field.
     * @type {string}
     * @memberof ProjectUserDetails
     */
    'jobId'?: string;
}

