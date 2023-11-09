/* tslint:disable */
/* eslint-disable */


/**
 * The version of JSON API. Will always be: **1.0**
 * @export
 * @enum {string}
 */

export const VersionNumber = {
    _10: '1.0'
} as const;

export type VersionNumber = typeof VersionNumber[keyof typeof VersionNumber];



