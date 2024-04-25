/* tslint:disable */
/* eslint-disable */

import { PermissionAccess } from './permission-access';

/**
 * 
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



