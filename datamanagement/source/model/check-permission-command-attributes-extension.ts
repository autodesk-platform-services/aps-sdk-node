/* tslint:disable */
/* eslint-disable */

import { CheckPermissionCommandAttributesExtensionData } from './check-permission-command-attributes-extension-data';
import { TypeCommandtypeCheckPermission } from './type-commandtype-check-permission';

/**
 * An object that contains properties  specific to the CheckPermission command,   extending the default properties of a command.
 * @export
 * @interface CheckPermissionCommandAttributesExtension
 */
export interface CheckPermissionCommandAttributesExtension {
    /**
     * 
     * @type {TypeCommandtypeCheckPermission}
     * @memberof CheckPermissionCommandAttributesExtension
     */
    'type'?: TypeCommandtypeCheckPermission;
    /**
     * The version of the schema. Must be ``1.0.0``  for the CheckPermission command. 
     * @type {string}
     * @memberof CheckPermissionCommandAttributesExtension
     */
    'version'?: string;
    /**
     * 
     * @type {CheckPermissionCommandAttributesExtensionData}
     * @memberof CheckPermissionCommandAttributesExtension
     */
    'data'?: CheckPermissionCommandAttributesExtensionData;
}



