/* tslint:disable */
/* eslint-disable */


/**
 * Filter by the direction of the reference. Possible values: ``from`` and ``to``.
 * @export
 * @enum {string}
 */

export const FilterDirection = {
    From: 'from',
    To: 'to'
} as const;

export type FilterDirection = typeof FilterDirection[keyof typeof FilterDirection];



