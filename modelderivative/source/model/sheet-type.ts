/* tslint:disable */
/* eslint-disable */


/**
 * The sheet body type to export as, when the output is IGES.  Possible values are:  - ``open`` -  ``shell``  - ``surface`` - (Default) - ``wireframe`` 
 * @export
 * @enum {string}
 */

export const SheetType = {
    Open: 'open',
    Surface: 'surface',
    Shell: 'shell',
    Wireframe: 'wireframe'
} as const;

export type SheetType = typeof SheetType[keyof typeof SheetType];



