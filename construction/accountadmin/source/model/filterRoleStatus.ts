

/**
 * Filters roles by their status. Accepts one or more of the following values:
 * active – The role is currently in use.
 * 
 * inactive – The role has been removed or is no longer in use.
 * @export
 * @enum {string}
 */

export const FilterRoleStatus = {
    Active: 'active',
    Inactive: 'inactive'
} as const;

export type FilterRoleStatus = typeof FilterRoleStatus[keyof typeof FilterRoleStatus];



