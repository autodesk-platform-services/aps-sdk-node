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
    /**
    * @deprecated Please use AUS instead.
    */
    Apac: 'APAC',
    Aus: 'AUS',
} as const;

export type Region = typeof Region[keyof typeof Region];



