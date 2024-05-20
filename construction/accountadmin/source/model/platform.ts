/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const Platform = {
    Acc: 'acc',
    Bim360: 'bim360'
} as const;

export type Platform = typeof Platform[keyof typeof Platform];



