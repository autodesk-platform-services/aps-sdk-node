/* tslint:disable */
/* eslint-disable */

import { CheckPermissionResponseAttributesExtensionData } from './check-permission-response-attributes-extension-data';
import { CheckPermissionResponseAttributesExtensionSchema } from './check-permission-response-attributes-extension-schema';
import { TypeCommandtypeCheckPermission } from './type-commandtype-check-permission';

/**
 * An object that contains properties  specific to the CheckPermissions command,   extending the default properties of a command.
 * @export
 * @interface CheckPermissionResponseAttributesExtension
 */
export interface CheckPermissionResponseAttributesExtension {
    /**
     * 
     * @type {TypeCommandtypeCheckPermission}
     * @memberof CheckPermissionResponseAttributesExtension
     */
    'type'?: TypeCommandtypeCheckPermission;
    /**
     * The version of the schema. Must be ``1.0.0``  for the CheckPermission command. 
     * @type {string}
     * @memberof CheckPermissionResponseAttributesExtension
     */
    'version'?: string;
    /**
     * 
     * @type {CheckPermissionResponseAttributesExtensionSchema}
     * @memberof CheckPermissionResponseAttributesExtension
     */
    'schema'?: CheckPermissionResponseAttributesExtensionSchema;
    /**
     * 
     * @type {CheckPermissionResponseAttributesExtensionData}
     * @memberof CheckPermissionResponseAttributesExtension
     */
    'data'?: CheckPermissionResponseAttributesExtensionData;
}



