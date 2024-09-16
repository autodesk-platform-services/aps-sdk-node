

/**
 * Only relevant for creating files - the type of version extension. For BIM 360 Docs files, use versions:autodesk.bim360:File.  For A360 composite design files, use versions:autodesk.a360:CompositeDesign.  For A360 Personal, Fusion Team, or BIM 360 Team files, use versions:autodesk.core:File.
 * @export
 * @enum {string}
 */

export const TypeItemIncludedExtension = {
    Bim360File: 'versions:autodesk.bim360:File',
    A360CompositeDesign: 'versions:autodesk.a360:CompositeDesign',
    CoreFile: 'versions:autodesk.core:File'
} as const;

export type TypeItemIncludedExtension = typeof TypeItemIncludedExtension[keyof typeof TypeItemIncludedExtension];



