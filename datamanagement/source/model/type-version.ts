/* tslint:disable */
/* eslint-disable */


/**
 * The type of the resource. Possible values are ``versions``.
 * @export
 * @enum {string}
 */

export const TypeVersion = {
    Versions: 'versions'
} as const;

export type TypeVersion = typeof TypeVersion[keyof typeof TypeVersion];



