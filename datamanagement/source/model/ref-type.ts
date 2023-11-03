/* tslint:disable */
/* eslint-disable */


/**
 * Will always be: **xrefs**
 * @export
 * @enum {string}
 */

export const RefType = {
    Xrefs: 'xrefs'
} as const;

export type RefType = typeof RefType[keyof typeof RefType];



