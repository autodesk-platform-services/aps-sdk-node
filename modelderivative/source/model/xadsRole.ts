/* tslint:disable */
/* eslint-disable */


/**
 * The source of the thumbnail:  Possible values are:  - ``rendered`` - Generated pursuant to this API call  - ``extracted`` - Obtained from the original design file\'
 * @export
 * @enum {string}
 */

export const XAdsRole = {
    Rendered: 'rendered',
    Extracted: 'extracted'
} as const;

export type XAdsRole = typeof XAdsRole[keyof typeof XAdsRole];



