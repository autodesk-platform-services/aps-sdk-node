/* tslint:disable */
/* eslint-disable */

import { PermissionLevel } from './permissionLevel';
import { UserIssues } from './userIssues';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * Unique identifier for the given user.
     * @type {string}
     * @memberof User
     */
    'id'?: string;
    /**
     * States whether the current logged in user is a system admin.
     * @type {boolean}
     * @memberof User
     */
    'isProjectAdmin'?: boolean;
    /**
     * Not relevant
     * @type {boolean}
     * @memberof User
     */
    'canManageTemplates'?: boolean;
    /**
     * 
     * @type {UserIssues}
     * @memberof User
     */
    'issues'?: UserIssues;
    /**
     * The permission level of the user. Each permission level corresponds to a combination of values in the response. For example, a combination of read and create in the response, corresponds to a Create for other companies permission level.
     * @type {Array<PermissionLevel>}
     * @memberof User
     */
    'permissionLevels'?: Array<PermissionLevel>;
}

