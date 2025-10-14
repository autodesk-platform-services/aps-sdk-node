

/**
 * The list of fields to sort by.
 * Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). The default is asc.
 * 
 * Possible values: name.
 * 
 * Default is the order in database.
 * @export
 * @enum {string}
 */

export const FilterProductSort = {
    Asc: 'name asc',
    Desc: 'name desc'
} as const;

export type FilterProductSort = typeof FilterProductSort[keyof typeof FilterProductSort];



