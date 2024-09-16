

/**
 * The type of the resource. Possible values are ``folders``, ``items``.
 * @export
 * @enum {string}
 */

export const TypeFolderItems = {
    Folders: 'folders',
    Items: 'items'
} as const;

export type TypeFolderItems = typeof TypeFolderItems[keyof typeof TypeFolderItems];



