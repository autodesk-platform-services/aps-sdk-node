/**
 *
 * @export
 * @interface UserPayload
 */
export interface UserPayload {
    /**
     * The user’s default company ID in BIM 360
     * @type {string}
     * @memberof UserPayload
     */
    'company_id'?: string;
    /**
     * User’s email
     * @type {string}
     * @memberof UserPayload
     */
    'email': string;
    /**
     * Default display name
     * @type {string}
     * @memberof UserPayload
     */
    'name'?: string;
    /**
     * Nick name for user
     * @type {string}
     * @memberof UserPayload
     */
    'nickname'?: string;
    /**
     * User’s first name
     * @type {string}
     * @memberof UserPayload
     */
    'first_name'?: string;
    /**
     * User’s last name
     * @type {string}
     * @memberof UserPayload
     */
    'last_name'?: string;
    /**
     * URL for user’s profile image
     * @type {string}
     * @memberof UserPayload
     */
    'image_url'?: string;
    /**
     * User’s address line 1
     * @type {string}
     * @memberof UserPayload
     */
    'address_line_1'?: string;
    /**
     * User’s address line 2
     * @type {string}
     * @memberof UserPayload
     */
    'address_line_2'?: string;
    /**
     * City in which user is located
     * @type {string}
     * @memberof UserPayload
     */
    'city'?: string;
    /**
     * State or province in which user is located
     * @type {string}
     * @memberof UserPayload
     */
    'state_or_province'?: string;
    /**
     * Postal code for the user’s location
     * @type {string}
     * @memberof UserPayload
     */
    'postal_code'?: string;
    /**
     * Country for this user
     * @type {string}
     * @memberof UserPayload
     */
    'country'?: string;
    /**
     * Contact phone number for the user
     * @type {string}
     * @memberof UserPayload
     */
    'phone'?: string;
    /**
     * Company information from the Autodesk user profile
     * @type {string}
     * @memberof UserPayload
     */
    'company'?: string;
    /**
     * User’s job title
     * @type {string}
     * @memberof UserPayload
     */
    'job_title'?: string;
    /**
     * Industry information for user
     * @type {string}
     * @memberof UserPayload
     */
    'industry'?: string;
    /**
     * Short description about the user
     * @type {string}
     * @memberof UserPayload
     */
    'about_me'?: string;
}
