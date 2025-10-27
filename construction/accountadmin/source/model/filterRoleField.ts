

/**
 * A comma-separated list of response fields to include. Defaults to all fields if not specified.
 * Use this parameter to reduce the response size by retrieving only the fields you need.
 * 
 * Possible values:
 * 
 * projectIds – Projects where the user holds this role
 * 
 * name – Role name
 * 
 * status – Role status (active or inactive)
 * 
 * key – Internal key used to translate the role name
 * 
 * createdAt – Timestamp when the role was created
 * 
 * updatedAt – Timestamp when the role was last updated
 * @export
 * @enum {string}
 */

export const FilterRoleField = {
    ProjectIds: 'projectIds',
    Name: 'name',
    Status: 'status',
    Key: 'key',
    CreatedAt: 'createdAt',
    UpdatedAt: 'updatedAt'
} as const;

export type FilterRoleField = typeof FilterRoleField[keyof typeof FilterRoleField];



