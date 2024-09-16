

/**
 * The type of this resource.
 * @export
 * @enum {string}
 */

export const TypeAttributeExtension = {
    AuxiliaryautodeskCoreAttachment: 'auxiliary:autodesk.core:Attachment'
} as const;

export type TypeAttributeExtension = typeof TypeAttributeExtension[keyof typeof TypeAttributeExtension];



