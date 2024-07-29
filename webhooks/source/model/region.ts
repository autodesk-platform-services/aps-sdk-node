/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the geographical location (region) of the server that the request is executed on. Supported values are: ``EMEA``, ``US``. Default is ``US``.  The ``x-ads-region`` header also specifies the region. If you specify both, ``x-ads-region`` has precedence. 
 * @export
 * @enum {string}
 */

export const Region = {
    Us: 'US',
    Emea: 'EMEA',
    Apac: 'APAC'
} as const;

export type Region = typeof Region[keyof typeof Region];



