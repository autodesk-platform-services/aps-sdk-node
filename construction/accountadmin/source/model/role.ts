

/**
 * The requested page of roles associated with the user.
 * @export
 * @interface Role
 */
export interface Role {
    /**
     * The unique ID of the role.
     * @type {string}
     * @memberof Role
     */
    'id'?: string;
    /**
     * The role status. Possible values: active, inactive.
     * @type {string}
     * @memberof Role
     */
    'status'?: string;
    /**
     * The name of the role. Predefined roles are localized based on the request language.
 * Max length: 255
     * @type {string}
     * @memberof Role
     */
    'name'?: string;
    /**
     * The internal key used for translating predefined role names.
 * Max length: 255
     * @type {string}
     * @memberof Role
     */
    'key'?: string;
    /**
     * The timestamp when the role was created.
     * @type {string}
     * @memberof Role
     */
    'createdAt'?: string;
    /**
     * The timestamp when the role was last updated.
     * @type {string}
     * @memberof Role
     */
    'updatedAt'?: string;
    /**
     * The list of projects where the user is associated with this role.
     * @type {Array<string>}
     * @memberof Role
     */
    'projectIds'?: Array<string>;
}

