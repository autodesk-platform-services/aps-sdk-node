import { ProjectUsersImportPayloadUsers } from './project-users-import-payload-users';
/**
 *
 * @export
 * @interface ProjectUsersImportPayload
 */
export interface ProjectUsersImportPayload {
    /**
     * User data to import.
     * @type {Array<ProjectUsersImportPayloadUsers>}
     * @memberof ProjectUsersImportPayload
     */
    'users'?: Array<ProjectUsersImportPayloadUsers>;
}
