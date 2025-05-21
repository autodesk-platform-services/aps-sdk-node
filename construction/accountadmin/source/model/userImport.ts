/* tslint:disable */
/* eslint-disable */

import { User } from './user';

/**
 * 
 * @export
 * @interface UserImport
 */
export interface UserImport {
    /**
     * Import success user count
     * @type {number}
     * @memberof UserImport
     */
    'success'?: number;
    /**
     * Import failure user count
     * @type {number}
     * @memberof UserImport
     */
    'failure'?: number;
    /**
     * Array of user objects that were successfully imported
     * @type {Array<User>}
     * @memberof UserImport
     */
    'success_items'?: Array<User>;
    /**
     * Array of user objects that failed to import, along with content and error information
     * @type {Array<User>}
     * @memberof UserImport
     */
    'failure_items'?: Array<User>;
}

