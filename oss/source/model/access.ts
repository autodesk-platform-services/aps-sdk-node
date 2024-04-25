/* tslint:disable */
/* eslint-disable */


/**
 * Access for signed resource Acceptable values: read, write, readwrite Default value: read
 * @export
 * @enum {string}
 */

export const Access = {
    Read: 'Read',
    Write: 'Write',
    ReadWrite: 'ReadWrite'
} as const;

export type Access = typeof Access[keyof typeof Access];



