/* tslint:disable */
/* eslint-disable */

import { CheckPermissionPayloadAttributesExtensionData } from './check-permission-payload-attributes-extension-data';
import { TypeCommandtypeCheckPermission } from './type-commandtype-check-permission';

/**
 * An object that contains properties  specific to the CheckPermission command,   extending the default properties of a command.
 * @export
 * @interface CheckPermissionPayloadAttributesExtension
 */
export interface CheckPermissionPayloadAttributesExtension {
    /**
     * 
     * @type {TypeCommandtypeCheckPermission}
     * @memberof CheckPermissionPayloadAttributesExtension
     */
    'type'?: TypeCommandtypeCheckPermission;
    /**
     * The version of the schema. Must be ``1.0.0``  for the CheckPermission command. 
     * @type {string}
     * @memberof CheckPermissionPayloadAttributesExtension
     */
    'version'?: string;
    /**
     * 
     * @type {CheckPermissionPayloadAttributesExtensionData}
     * @memberof CheckPermissionPayloadAttributesExtension
     */
    'data'?: CheckPermissionPayloadAttributesExtensionData;
}



