/* tslint:disable */
/* eslint-disable */


/**
 * The type of the resource. Possible values are ``folders``.
 * @export
 * @enum {string}
 */

export const TypeFolder = {
    Folders: 'folders'
} as const;

export type TypeFolder = typeof TypeFolder[keyof typeof TypeFolder];



