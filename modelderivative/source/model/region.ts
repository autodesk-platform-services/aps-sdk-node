/* tslint:disable */
/* eslint-disable */


/**
 * Specifies where the referenced files are stored. Possible values are:       - ``US`` - Data center for the US region. - ``EMEA`` - Data center for the European Union, Middle East, and Africa.  - ``AUS`` - (Beta) Data centre for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
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



