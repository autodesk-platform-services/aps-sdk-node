/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the geographical location (region) of the server that the request is executed on. Supported values are the following, but the default value is US:
 * - ``US`` - (Default) Data center dedicated to serve the United States region.
 * - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions.
 * - ``APAC`` - (Beta) Data center dedicated to serve the Australia region.  **Note:** Beta features are subject to change. Please avoid using them in production environments.**@deprecated Use `AUS` instead.**
 * - ``AUS`` - (Beta) Register new webhooks in a data center dedicated to serve Australia.
 * @export
 * @enum {string}
 */

export const XAdsRegion = {
    Us: 'US',
    Emea: 'EMEA',
    /** @deprecated Use `AUS` instead. */
    Apac: 'APAC',
    Aus: 'AUS'
} as const;

export type XAdsRegion = typeof XAdsRegion[keyof typeof XAdsRegion];



