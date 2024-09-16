
import { CheckPermissionAttributesExtensionDataPermissionsDetails } from './checkPermissionAttributesExtensionDataPermissionsDetails';
import { TypeEntity } from './typeEntity';

/**
 * 
 * @export
 * @interface CheckPermissionAttributesExtensionDataPermissions
 */
export interface CheckPermissionAttributesExtensionDataPermissions {
    /**
     * 
     * @type {TypeEntity}
     * @memberof CheckPermissionAttributesExtensionDataPermissions
     */
    'type'?: TypeEntity;
    /**
     * The URN of the resource.
     * @type {string}
     * @memberof CheckPermissionAttributesExtensionDataPermissions
     */
    'id'?: string;
    /**
     * 
     * @type {CheckPermissionAttributesExtensionDataPermissionsDetails}
     * @memberof CheckPermissionAttributesExtensionDataPermissions
     */
    'details'?: CheckPermissionAttributesExtensionDataPermissionsDetails;
    /**
     * ``true`` - The user is permitted to perform all the actions checked for.  ``false`` - The user is not permitted to perform at least one of the actions checked for.
     * @type {boolean}
     * @memberof CheckPermissionAttributesExtensionDataPermissions
     */
    'permission'?: boolean;
}



