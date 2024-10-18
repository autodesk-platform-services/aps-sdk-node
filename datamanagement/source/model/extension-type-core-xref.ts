/* tslint:disable */
/* eslint-disable */


/**
 * The type of the relationship. Will always be ``xrefs:autodesk.core:Xref``.
 * @export
 * @enum {string}
 */

export const ExtensionTypeCoreXref = {
    XrefsautodeskCoreXref: 'xrefs:autodesk.core:Xref'
} as const;

export type ExtensionTypeCoreXref = typeof ExtensionTypeCoreXref[keyof typeof ExtensionTypeCoreXref];



