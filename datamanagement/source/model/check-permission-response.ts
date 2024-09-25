/* tslint:disable */
/* eslint-disable */

import { CheckPermissionResponseAttributes } from './check-permission-response-attributes';
import { CheckPermissionResponseRelationships } from './check-permission-response-relationships';
import { TypeCommands } from './type-commands';

/**
 * The ``data`` object returned by the CheckPermission command.
 * @export
 * @interface CheckPermissionResponse
 */
export interface CheckPermissionResponse {
    /**
     * 
     * @type {TypeCommands}
     * @memberof CheckPermissionResponse
     */
    'type'?: TypeCommands;
    /**
     * A unique ID assigned to the process executing the command.
     * @type {string}
     * @memberof CheckPermissionResponse
     */
    'id'?: string;
    /**
     * 
     * @type {CheckPermissionResponseAttributes}
     * @memberof CheckPermissionResponse
     */
    'attributes'?: CheckPermissionResponseAttributes;
    /**
     * 
     * @type {CheckPermissionResponseRelationships}
     * @memberof CheckPermissionResponse
     */
    'relationships'?: CheckPermissionResponseRelationships;
}



