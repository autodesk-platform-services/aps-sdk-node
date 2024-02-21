import { UserPatchStatus } from './user-patch-status';
/**
 *
 * @export
 * @interface UserPatchPayload
 */
export interface UserPatchPayload {
    /**
     *
     * @type {UserPatchStatus}
     * @memberof UserPatchPayload
     */
    'status'?: UserPatchStatus;
    /**
     * The user’s default company ID in BIM 360
     * @type {string}
     * @memberof UserPatchPayload
     */
    'company_id'?: string;
}
