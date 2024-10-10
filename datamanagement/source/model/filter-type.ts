/* tslint:disable */
/* eslint-disable */


/**
 * Filter by the type of the objects in the folder. Supported values are ``folders`` and ``items``.
 * @export
 * @enum {string}
 */

export const FilterType = {
    Folders: 'folders',
    Items: 'items'
} as const;

export type FilterType = typeof FilterType[keyof typeof FilterType];



