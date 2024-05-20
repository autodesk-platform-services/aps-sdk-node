/* tslint:disable */
/* eslint-disable */

import { PermissionAccess } from './permission-access';

/**
 * An object representing the permissions for accessing a bucket.
 * @export
 * @interface Permission
 */
export interface Permission {
    /**
     * The Client ID of the application.
     * @type {string}
     * @memberof Permission
     */
    'authId'?: string;
    /**
     * 
     * @type {PermissionAccess}
     * @memberof Permission
     */
    'access'?: PermissionAccess;
}



