

/**
 * Filter types
 * @export
 * @enum {string}
 */

export const TypeFilter = {
    Folders: 'folders',
    Versions: 'versions',
    Items: 'items'
} as const;

export type TypeFilter = typeof TypeFilter[keyof typeof TypeFilter];



