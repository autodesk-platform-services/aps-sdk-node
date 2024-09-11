
import { CheckPermissionAttributes } from './checkPermissionAttributes';
import { CheckPermissionRelationships } from './checkPermissionRelationships';
import { Type } from './type';

/**
 * The ``data`` object returned by the CheckPermission command.
 * @export
 * @interface CheckPermission
 */
export interface CheckPermission {
    /**
     * 
     * @type {Type}
     * @memberof CheckPermission
     */
    'type'?: Type;
    /**
     * A unique ID assigned to the process executing the command.
     * @type {string}
     * @memberof CheckPermission
     */
    'id'?: string;
    /**
     * 
     * @type {CheckPermissionAttributes}
     * @memberof CheckPermission
     */
    'attributes'?: CheckPermissionAttributes;
    /**
     * 
     * @type {CheckPermissionRelationships}
     * @memberof CheckPermission
     */
    'relationships'?: CheckPermissionRelationships;
}



