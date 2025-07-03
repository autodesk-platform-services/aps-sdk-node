/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the region where your request should be routed. Possible values are:  
 * - ``US`` - Data center for the US region.  
 * - ``EMEA`` - Data center for the European Union, Middle East, and Africa regions.  
 * - ``APAC`` - Data center for the Australia region. **@deprecated Use `AUS` instead.**   
 * - ``AUS`` - Data center for the Australia region.
 * - ``CAN`` - Data center for the Canada region.
 * - ``DEU`` - Data center for the Germany region.
 * - ``IND`` - Data center for the India region.
 * - ``JPN`` - Data center for the Japan region.
 * - ``GBR`` - Data center for the United Kingdom region.
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
    Can: 'CAN',
    Deu: 'DEU',
    Ind: 'IND',
    Jpn: 'JPN',
    Gbr: 'GBR'
} as const;

export type Region = typeof Region[keyof typeof Region];



