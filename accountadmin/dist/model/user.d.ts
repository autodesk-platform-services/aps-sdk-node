import { UserRole } from './user-role';
import { UserStatus } from './user-status';
/**
 *
 * @export
 * @interface User
 */
export interface User {
    /**
     * BIM 360 user ID
     * @type {string}
     * @memberof User
     */
    'id'?: string;
    /**
     * Account ID
     * @type {string}
     * @memberof User
     */
    'account_id'?: string;
    /**
     *
     * @type {UserRole}
     * @memberof User
     */
    'role'?: UserRole;
    /**
     *
     * @type {UserStatus}
     * @memberof User
     */
    'status'?: UserStatus;
    /**
     * The user’s default company ID in BIM 360
     * @type {string}
     * @memberof User
     */
    'company_id'?: string;
    /**
     * The name of the user’s default company name in BIM 360
     * @type {string}
     * @memberof User
     */
    'company_name'?: string;
    /**
     * Timestamp of the last sign in, YYYY-MM-DDThh:mm:ss.sssZ format
     * @type {string}
     * @memberof User
     */
    'last_sign_in'?: string;
    /**
     * User’s email
     * @type {string}
     * @memberof User
     */
    'email'?: string;
    /**
     * Default display name
     * @type {string}
     * @memberof User
     */
    'name'?: string;
    /**
     * Nick name for user
     * @type {string}
     * @memberof User
     */
    'nickname'?: string;
    /**
     * User’s first name
     * @type {string}
     * @memberof User
     */
    'first_name'?: string;
    /**
     * User’s last name
     * @type {string}
     * @memberof User
     */
    'last_name'?: string;
    /**
     * User’s Autodesk ID
     * @type {string}
     * @memberof User
     */
    'uid'?: string;
    /**
     * URL for user’s profile image
     * @type {string}
     * @memberof User
     */
    'image_url'?: string;
    /**
     * User’s address line 1
     * @type {string}
     * @memberof User
     */
    'address_line_1'?: string;
    /**
     * User’s address line 2
     * @type {string}
     * @memberof User
     */
    'address_line_2'?: string;
    /**
     * City in which user is located
     * @type {string}
     * @memberof User
     */
    'city'?: string;
    /**
     * State or province in which user is located
     * @type {string}
     * @memberof User
     */
    'state_or_province'?: string;
    /**
     * Postal code for the user’s location
     * @type {string}
     * @memberof User
     */
    'postal_code'?: string;
    /**
     * Country for this user
     * @type {string}
     * @memberof User
     */
    'country'?: string;
    /**
     * Contact phone number for the user
     * @type {string}
     * @memberof User
     */
    'phone'?: string;
    /**
     * Company information from the Autodesk user profile
     * @type {string}
     * @memberof User
     */
    'company'?: string;
    /**
     * User’s job title
     * @type {string}
     * @memberof User
     */
    'job_title'?: string;
    /**
     * Industry information for user
     * @type {string}
     * @memberof User
     */
    'industry'?: string;
    /**
     * Short description about the user
     * @type {string}
     * @memberof User
     */
    'about_me'?: string;
    /**
     * YYYY-MM-DDThh:mm:ss.sssZ format
     * @type {string}
     * @memberof User
     */
    'created_at'?: string;
    /**
     * YYYY-MM-DDThh:mm:ss.sssZ format
     * @type {string}
     * @memberof User
     */
    'updated_at'?: string;
}
