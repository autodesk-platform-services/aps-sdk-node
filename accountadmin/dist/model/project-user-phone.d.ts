/**
 * The user’s phone number. This data syncs from the user’s Autodesk profile.
 * @export
 * @interface ProjectUserPhone
 */
export interface ProjectUserPhone {
    /**
     * User’s phone number
     * @type {string}
     * @memberof ProjectUserPhone
     */
    'number'?: string;
    /**
     * The user’s phone type.
     * @type {string}
     * @memberof ProjectUserPhone
     */
    'phoneType'?: string;
    /**
     * User’s phone extension.
     * @type {string}
     * @memberof ProjectUserPhone
     */
    'extension'?: string;
}
