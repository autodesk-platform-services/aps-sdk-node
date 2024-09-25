/* tslint:disable */
/* eslint-disable */

import { CheckPermissionResponseAttributesExtensionDataPermissionsDetails } from './check-permission-response-attributes-extension-data-permissions-details';
import { TypeEntity } from './type-entity';

/**
 * 
 * @export
 * @interface CheckPermissionResponseAttributesExtensionDataPermissions
 */
export interface CheckPermissionResponseAttributesExtensionDataPermissions {
    /**
     * 
     * @type {TypeEntity}
     * @memberof CheckPermissionResponseAttributesExtensionDataPermissions
     */
    'type'?: TypeEntity;
    /**
     * The URN of the resource.
     * @type {string}
     * @memberof CheckPermissionResponseAttributesExtensionDataPermissions
     */
    'id'?: string;
    /**
     * 
     * @type {CheckPermissionResponseAttributesExtensionDataPermissionsDetails}
     * @memberof CheckPermissionResponseAttributesExtensionDataPermissions
     */
    'details'?: CheckPermissionResponseAttributesExtensionDataPermissionsDetails;
    /**
     * ``true`` - The user is permitted to perform all the actions checked for.  ``false`` - The user is not permitted to perform at least one of the actions checked for.
     * @type {boolean}
     * @memberof CheckPermissionResponseAttributesExtensionDataPermissions
     */
    'permission'?: boolean;
}



