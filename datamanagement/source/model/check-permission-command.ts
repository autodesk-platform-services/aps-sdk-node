/* tslint:disable */
/* eslint-disable */

import { CheckPermissionCommandAttributes } from './check-permission-command-attributes';
import { CheckPermissionCommandRelationships } from './check-permission-command-relationships';
import { TypeCommands } from './type-commands';

/**
 * An object that contains the input data required to execute the CheckPermission command.  The CheckPermission command checks if a user has permission to perform specified actions on specified resources. The user’s identity is derived from the ``x-user-id`` header (in a 2-Legged call), or from the access token (in a 3-Legged call).   See the [Developer\'s Guide topic on the CheckPermission command](/en/docs/data/v2/developers_guide/commands/checkpermission/) for more information. 
 * @export
 * @interface CheckPermissionCommand
 */
export interface CheckPermissionCommand {
    /**
     * 
     * @type {TypeCommands}
     * @memberof CheckPermissionCommand
     */
    'type'?: TypeCommands;
    /**
     * 
     * @type {CheckPermissionCommandAttributes}
     * @memberof CheckPermissionCommand
     */
    'attributes'?: CheckPermissionCommandAttributes;
    /**
     * 
     * @type {CheckPermissionCommandRelationships}
     * @memberof CheckPermissionCommand
     */
    'relationships'?: CheckPermissionCommandRelationships;
}



