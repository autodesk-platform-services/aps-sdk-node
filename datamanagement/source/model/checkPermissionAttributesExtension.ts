
import { CheckPermissionAttributesExtensionData } from './checkPermissionAttributesExtensionData';
import { CheckPermissionAttributesExtensionSchema } from './checkPermissionAttributesExtensionSchema';
import { Type } from './type';

/**
 * An object that contains properties  specific to the CheckPermissions command,   extending the default properties of a command.
 * @export
 * @interface CheckPermissionAttributesExtension
 */
export interface CheckPermissionAttributesExtension {
    /**
     * 
     * @type {Type}
     * @memberof CheckPermissionAttributesExtension
     */
    'type'?: Type;
    /**
     * The version of the schema. Must be ``1.0.0``  for the CheckPermission command. 
     * @type {string}
     * @memberof CheckPermissionAttributesExtension
     */
    'version'?: string;
    /**
     * 
     * @type {CheckPermissionAttributesExtensionSchema}
     * @memberof CheckPermissionAttributesExtension
     */
    'schema'?: CheckPermissionAttributesExtensionSchema;
    /**
     * 
     * @type {CheckPermissionAttributesExtensionData}
     * @memberof CheckPermissionAttributesExtension
     */
    'data'?: CheckPermissionAttributesExtensionData;
}



