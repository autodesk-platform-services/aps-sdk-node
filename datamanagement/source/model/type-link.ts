/* tslint:disable */
/* eslint-disable */


/**
 * The type of the resource. Possible values are ``links``.
 * @export
 * @enum {string}
 */

export const TypeLink = {
    Links: 'links'
} as const;

export type TypeLink = typeof TypeLink[keyof typeof TypeLink];



