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
    * @deprecated This enum value is deprecated and will be removed in future versions.
    */
    Apac: 'APAC',
    Aus: 'AUS',
} as const;

export type Region = typeof Region[keyof typeof Region];



