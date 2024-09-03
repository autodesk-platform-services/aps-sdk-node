/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the geographical location (region) of the server a request must be executed on. This also corresponds to the region where the Webhook data is stored. It is also the location of the server that will make requests to your callback URL. Possible values:  - ``US`` - (Default) Data center dedicated to serve the United States region. - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions. - ``APAC`` - (Beta) Data center dedicated to serve the Australia region.  **Note:** Beta features are subject to change. Please avoid using them in production environments. 
 * @export
 * @enum {string}
 */

export const XAdsRegion = {
    Us: 'US',
    Emea: 'EMEA',
    Apac: 'APAC'
} as const;

export type XAdsRegion = typeof XAdsRegion[keyof typeof XAdsRegion];



