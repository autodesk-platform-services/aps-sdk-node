/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const Systems = {
    Data: 'data',
    Derivative: 'derivative',
    AdskC4r: 'adsk.c4r',
    AdskFlcProduction: 'adsk.flc.production',
    AutodeskConstructionCost: 'autodesk.construction.cost'
} as const;

export type Systems = typeof Systems[keyof typeof Systems];



