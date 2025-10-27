

/**
 * Sorts the results by one or more fields.
 * Each field can be followed by a direction modifier:
 * 
 * asc – Ascending order (default)
 * 
 * desc – Descending order
 * 
 * Possible values: name, createdAt, updatedAt.
 * 
 * Default sort: name asc
 * 
 * Example: sort=name,updatedAt desc
 * @export
 * @enum {string}
 */

export const FilterRoleSort = {
    NameAsc: 'name asc',
    CreatedAtAsc: 'createdAt asc',
    UpdatedAtAsc: 'updatedAt asc',
    NameDesc: 'name desc',
    CreatedAtDesc: 'createdAt desc',
    UpdatedAtDesc: 'updatedAt desc'
} as const;

export type FilterRoleSort = typeof FilterRoleSort[keyof typeof FilterRoleSort];



