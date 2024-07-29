/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the geographical location (region) of the server that the request is executed on. Supported values are: ``EMEA``, ``US``. Default is ``US``.
 * @export
 * @enum {string}
 */

export const XAdsRegion = {
    Us: 'US',
    Emea: 'EMEA',
    Apac: 'APAC'
} as const;

export type XAdsRegion = typeof XAdsRegion[keyof typeof XAdsRegion];



