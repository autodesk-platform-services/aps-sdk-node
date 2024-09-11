

/**
 * The type of the xref, which defines how nested xrefs are handled. Possible values are:  -  ``attachment``: Nested xrefs are not ignored. -  ``overlay`` : Nested xrefs are ignored.
 * @export
 * @enum {string}
 */

export const NestedXref = {
    Attachment: 'attachment',
    Overlay: 'overlay'
} as const;

export type NestedXref = typeof NestedXref[keyof typeof NestedXref];



