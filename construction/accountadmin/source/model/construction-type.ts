/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const ConstructionType = {
    NewConstruction: 'New Construction',
    Renovation: 'Renovation'
} as const;

export type ConstructionType = typeof ConstructionType[keyof typeof ConstructionType];



