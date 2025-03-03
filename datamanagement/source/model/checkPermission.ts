/* tslint:disable */
/* eslint-disable */

import { CheckPermissionAttributes } from './checkPermissionAttributes';
import { CheckPermissionRelationships } from './checkPermissionRelationships';
import { TypeCommands } from './typeCommands';

/**
 * The ``data`` object returned by the CheckPermission command.
 * @export
 * @interface CheckPermission
 */
export interface CheckPermission {
    /**
     * 
     * @type {TypeCommands}
     * @memberof CheckPermission
     */
    'type'?: TypeCommands;
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



