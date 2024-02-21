import { User } from './user';
/**
 *
 * @export
 * @interface UserImportResponse
 */
export interface UserImportResponse {
    /**
     * Import success user count
     * @type {number}
     * @memberof UserImportResponse
     */
    'success'?: number;
    /**
     * Import failure user count
     * @type {number}
     * @memberof UserImportResponse
     */
    'failure'?: number;
    /**
     * Array of user objects that were successfully imported
     * @type {Array<User>}
     * @memberof UserImportResponse
     */
    'success_items'?: Array<User>;
    /**
     * Array of user objects that failed to import, along with content and error information
     * @type {Array<User>}
     * @memberof UserImportResponse
     */
    'failure_items'?: Array<User>;
}
