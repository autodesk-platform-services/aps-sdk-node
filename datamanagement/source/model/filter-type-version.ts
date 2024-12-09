/* tslint:disable */
/* eslint-disable */


/**
 * Filter by the ``type`` of the ``ref`` target. Supported values include ``folders``, ``items``, and ``versions``.
 * @export
 * @enum {string}
 */

export const FilterTypeVersion = {
    Folders: 'folders',
    Items: 'items',
    Versions: 'versions'
} as const;

export type FilterTypeVersion = typeof FilterTypeVersion[keyof typeof FilterTypeVersion];



