

/**
 * The type of the relationship. Will always be ``xrefs:autodesk.core:Xref``.
 * @export
 * @enum {string}
 */

export const TypeCoreXref = {
    XrefsautodeskCoreXref: 'xrefs:autodesk.core:Xref'
} as const;

export type TypeCoreXref = typeof TypeCoreXref[keyof typeof TypeCoreXref];



