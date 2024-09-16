
import { CheckPermissionPayloadAttributes } from './checkPermissionPayloadAttributes';
import { CheckPermissionPayloadRelationships } from './checkPermissionPayloadRelationships';
import { TypeCommands } from './typeCommands';

/**
 * An object that contains the input data required to execute the CheckPermission command.  The CheckPermission command checks if a user has permission to perform specified actions on specified resources. The user’s identity is derived from the ``x-user-id`` header (in a 2-Legged call), or from the access token (in a 3-Legged call).   See the [Developer\'s Guide topic on the CheckPermission command](/en/docs/data/v2/developers_guide/commands/checkpermission/) for more information. 
 * @export
 * @interface CheckPermissionPayload
 */
export interface CheckPermissionPayload {
    /**
     * 
     * @type {TypeCommands}
     * @memberof CheckPermissionPayload
     */
    'type'?: TypeCommands;
    /**
     * 
     * @type {CheckPermissionPayloadAttributes}
     * @memberof CheckPermissionPayload
     */
    'attributes'?: CheckPermissionPayloadAttributes;
    /**
     * 
     * @type {CheckPermissionPayloadRelationships}
     * @memberof CheckPermissionPayload
     */
    'relationships'?: CheckPermissionPayloadRelationships;
}



