/* tslint:disable */
/* eslint-disable */


/**
 * The type of this resource. Possible values are ``objects``.
 * @export
 * @enum {string}
 */

export const TypeObject = {
    Objects: 'objects'
} as const;

export type TypeObject = typeof TypeObject[keyof typeof TypeObject];



