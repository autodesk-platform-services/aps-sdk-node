/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const Region = {
    Us: 'US',
    Emea: 'EMEA'
} as const;

export type Region = typeof Region[keyof typeof Region];



