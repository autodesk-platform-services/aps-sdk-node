/* tslint:disable */
/* eslint-disable */


/**
 * The version of JSON API. Will always be ``1.0``.
 * @export
 * @enum {string}
 */

export const JsonApiVersionValue = {
    _10: '1.0'
} as const;

export type JsonApiVersionValue = typeof JsonApiVersionValue[keyof typeof JsonApiVersionValue];



