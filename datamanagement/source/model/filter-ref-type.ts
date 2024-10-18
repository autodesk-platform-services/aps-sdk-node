/* tslint:disable */
/* eslint-disable */


/**
 * Filter by ``refType``. Possible values: ``derived``, ``dependencies``, ``auxiliary``, ``xrefs``, and ``includes``.
 * @export
 * @enum {string}
 */

export const FilterRefType = {
    Derived: 'derived',
    Dependencies: 'dependencies',
    Auxiliary: 'auxiliary',
    Xrefs: 'xrefs',
    Includes: 'includes'
} as const;

export type FilterRefType = typeof FilterRefType[keyof typeof FilterRefType];



