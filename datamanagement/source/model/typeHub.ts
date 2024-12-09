/* tslint:disable */
/* eslint-disable */


/**
 * The type of the resource. Possible values are ``hubs``.
 * @export
 * @enum {string}
 */

export const TypeHub = {
    Hubs: 'hubs'
} as const;

export type TypeHub = typeof TypeHub[keyof typeof TypeHub];



