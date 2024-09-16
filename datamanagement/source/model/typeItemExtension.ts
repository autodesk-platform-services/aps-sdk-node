

/**
 * Only relevant for creating files - the type of file extension. For BIM 360 Docs files, use items:autodesk.bim360:File.  For all other services, use items:autodesk.core:File.
 * @export
 * @enum {string}
 */

export const TypeItemExtension = {
    Bim360File: 'items:autodesk.bim360:File',
    CoreFile: 'items:autodesk.core:File'
} as const;

export type TypeItemExtension = typeof TypeItemExtension[keyof typeof TypeItemExtension];



