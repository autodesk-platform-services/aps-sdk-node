
import { CheckPermissionPayloadAttributesExtensionData } from './checkPermissionPayloadAttributesExtensionData';
import { TypeCommandtypeCheckPermission } from './typeCommandtypeCheckPermission';

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



