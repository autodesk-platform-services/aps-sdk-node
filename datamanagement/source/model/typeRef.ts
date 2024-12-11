/* tslint:disable */
/* eslint-disable */


/**
 * The type of the resource. Possible values are ``derived``, ``dependencies``, ``auxiliary``, ``xrefs``, and ``includes``.
 * @export
 * @enum {string}
 */

export const TypeRef = {
    Derived: 'derived',
    Dependencies: 'dependencies',
    Auxiliary: 'auxiliary',
    Xrefs: 'xrefs',
    Includes: 'includes'
} as const;

export type TypeRef = typeof TypeRef[keyof typeof TypeRef];



