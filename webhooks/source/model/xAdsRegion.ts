/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the geographical location (region) of the server a request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:
 * 
 * - ``US`` - (Default) Data center dedicated to serve the United States region.
 * - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions.
 * - ``AUS`` - (Beta) Data center dedicated to serve the Australia region.
 * - ``CAN`` - Data center dedicated to serve the Canada region.
 * - ``DEU`` - Data center dedicated to serve the Germany region.
 * - ``IND`` - Data center dedicated to serve the India region.
 * - ``JPN`` - Data center dedicated to serve the Japan region.
 * - ``GBR`` - Data center dedicated to serve the United Kingdom region.
 * 
 * **Note:** Beta features are subject to change. Please avoid using them in production environments.
 * 
 * @export
 * @enum {string}
 */

export const XAdsRegion = {
    Us: 'US',
    Emea: 'EMEA',
    /** @deprecated Use `AUS` instead. */
    Apac: 'APAC',
    Aus: 'AUS',
    Can: 'CAN',
    Deu: 'DEU',
    Ind: 'IND',
    Jpn: 'JPN',
    Gbr: 'GBR'
} as const;

export type XAdsRegion = typeof XAdsRegion[keyof typeof XAdsRegion];



