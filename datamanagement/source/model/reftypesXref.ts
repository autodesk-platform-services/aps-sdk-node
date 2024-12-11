/* tslint:disable */
/* eslint-disable */


/**
 * The type of custom relationship. Will always be ``xrefs``.
 * @export
 * @enum {string}
 */

export const ReftypesXref = {
    Xrefs: 'xrefs'
} as const;

export type ReftypesXref = typeof ReftypesXref[keyof typeof ReftypesXref];



