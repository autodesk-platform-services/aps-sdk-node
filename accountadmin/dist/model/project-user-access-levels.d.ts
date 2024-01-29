/**
 * Flags that identify a returned user’s access levels in the account or project.
 * @export
 * @interface ProjectUserAccessLevels
 */
export interface ProjectUserAccessLevels {
    /**
     * Indicates whether the user is an account administrator for the account.
     * @type {boolean}
     * @memberof ProjectUserAccessLevels
     */
    'accountAdmin'?: boolean;
    /**
     * Indicates whether the user is a project administrator for the project.
     * @type {boolean}
     * @memberof ProjectUserAccessLevels
     */
    'projectAdmin'?: boolean;
    /**
     * Indicates whether the user is an executive in the account.
     * @type {boolean}
     * @memberof ProjectUserAccessLevels
     */
    'executive'?: boolean;
}
