/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const AddressType = {
    Main: 'Main'
} as const;

export type AddressType = typeof AddressType[keyof typeof AddressType];



