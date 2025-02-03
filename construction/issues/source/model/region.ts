/* tslint:disable */
/* eslint-disable */


/**
 * Specifies where the bucket containing the object is stored. Possible values are:             - ``US`` - (Default) Data center for the US region.             - ``EMEA`` - Data center for the European Union, Middle East, and Africa.             - ``AUS`` -  Data center for Australia. 
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
   Aus: 'AUS'
} as const;

export type Region = typeof Region[keyof typeof Region];



