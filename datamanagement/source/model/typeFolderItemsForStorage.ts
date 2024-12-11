/* tslint:disable */
/* eslint-disable */


/**
 * The type of resource the storage location is related to. Possible values are:  - ``folders`` - The storage location is for a new item.  - ``items``   -  The storage location is for a new version of an existing item. 
 * @export
 * @enum {string}
 */

export const TypeFolderItemsForStorage = {
    Folders: 'folders',
    Items: 'items'
} as const;

export type TypeFolderItemsForStorage = typeof TypeFolderItemsForStorage[keyof typeof TypeFolderItemsForStorage];



