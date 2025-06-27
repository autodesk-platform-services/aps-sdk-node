/* tslint:disable */
/* eslint-disable */



/**
 * Specifies where the bucket containing the object is stored. Possible values are:
 * 
 * - ``US`` : (Default) Data center for the US region.
 * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
 * - ``AUS`` : (Beta) Data center for Australia.
 * - ``CAN`` : Data center for the Canada region.
 * - ``DEU`` : Data center for the Germany region.
 * - ``IND`` : Data center for the India region.
 * - ``JPN`` : Data center for the Japan region.
 * - ``GBR`` : Data center for the United Kingdom region.
 * 
 * **Note:** Beta features are subject to change. Please do not use in production environments.     
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



