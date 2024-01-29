/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const Language = {
    En: 'en',
    De: 'de'
} as const;

export type Language = typeof Language[keyof typeof Language];



