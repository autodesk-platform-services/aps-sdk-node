/* tslint:disable */
/* eslint-disable */


/**
 * Specifies where the referenced files are stored. Possible values are:           - ``US`` - Data center for the US region.     - ``EMEA`` - Data center for European Union, Middle East, and Africa.  
 * @export
 * @enum {string}
 */

export const Region = {
    Us: 'US',
    Emea: 'EMEA'
} as const;

export type Region = typeof Region[keyof typeof Region];



