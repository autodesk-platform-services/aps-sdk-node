/**
 * A list of the role IDs and names that are associated with the user in the project.
 * @export
 * @interface ProjectUserRoles
 */
export interface ProjectUserRoles {
    /**
     * The ID of a role that the user belongs to in the project.
     * @type {string}
     * @memberof ProjectUserRoles
     */
    'id'?: string;
    /**
     * The name of a role that the user belongs to in the project.
     * @type {string}
     * @memberof ProjectUserRoles
     */
    'name'?: string;
}
