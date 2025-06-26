

/**
 * Specifies where the referenced files are stored. Possible values are: 
 *     
 * - ``US`` - Data center for the US region.
 * - ``EMEA`` - Data center for the European Union, Middle East, and Africa. 
 * - ``AUS`` - (Beta) Data center for the Australia region.
 * - ``CAN`` - Data centre for the Canada region.
 * - ``DEU`` - Data centre for the Germany region.
 * - ``IND`` - Data centre for the India region.
 * - ``JPN`` - Data centre for the Japan region.
 * - ``GBR`` -  Data centre for the United Kingdom region.
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
    Can: 'CAN',
    Deu: 'DEU',
    Ind: 'IND',
    Jpn: 'JPN',
    Gbr: 'GBR'
} as const;

export type Region = typeof Region[keyof typeof Region];



