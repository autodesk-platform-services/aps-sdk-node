

/**
 * string The type of folder extension. For BIM 360 Docs folders, use folders:autodesk.bim360:Folder.  For all other services, use folders:autodesk.core:Folder.
 * @export
 * @enum {string}
 */

export const TypeFolderExtension = {
    Bim360Folder: 'folders:autodesk.bim360:Folder',
    CoreFolder: 'folders:autodesk.core:Folder'
} as const;

export type TypeFolderExtension = typeof TypeFolderExtension[keyof typeof TypeFolderExtension];



