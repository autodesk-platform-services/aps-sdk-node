

/**
 * List of fields to return in the response. Defaults to all fields.
 * Possible values: projectIds, name and icon.
 * @export
 * @enum {string}
 */

export const FilterProductField = {
    ProjectIds: 'projectIds',
    Name: 'name',
    Icon: 'icon'
} as const;

export type FilterProductField = typeof FilterProductField[keyof typeof FilterProductField];



