/* tslint:disable */
/* eslint-disable */


/**
 * Possible values: **from, to**
 * @export
 * @enum {string}
 */

export const Direction = {
    From: 'from',
    To: 'to'
} as const;

export type Direction = typeof Direction[keyof typeof Direction];



