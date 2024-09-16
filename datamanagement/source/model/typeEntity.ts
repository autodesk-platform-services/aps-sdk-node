

/**
 * The type of the resource. Possible values are ``folders``, ``items``, ``versions``.
 * @export
 * @enum {string}
 */

export const TypeEntity = {
    Folders: 'folders',
    Items: 'items',
    Versions: 'versions'
} as const;

export type TypeEntity = typeof TypeEntity[keyof typeof TypeEntity];



