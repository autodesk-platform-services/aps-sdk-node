/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const Region = {
    Us: 'US',
    Emea: 'EMEA',
    Apac: 'APAC'
} as const;

export type Region = typeof Region[keyof typeof Region];



