/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const ProductAccess = {
    Administrator: 'administrator',
    Member: 'member',
    None: 'none'
} as const;

export type ProductAccess = typeof ProductAccess[keyof typeof ProductAccess];



