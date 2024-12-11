/* tslint:disable */
/* eslint-disable */


/**
 * The solid body type to export as, when the output is IGES. Possible values are:   - ``solid`` - (Default) - ``surface`` - ``wireframe`` 
 * @export
 * @enum {string}
 */

export const SolidType = {
    Solid: 'solid',
    Surface: 'surface',
    Wireframe: 'wireframe'
} as const;

export type SolidType = typeof SolidType[keyof typeof SolidType];



