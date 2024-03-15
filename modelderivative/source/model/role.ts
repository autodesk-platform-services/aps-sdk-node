/* tslint:disable */
/* eslint-disable */


/**
 * Type of Model View. Possible values are: ``2d``, ``3d``.
 * @export
 * @enum {string}
 */

export const Role = {
    _2d: '2d',
    _3d: '3d'
} as const;

export type Role = typeof Role[keyof typeof Role];



