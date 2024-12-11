/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the structure of the derivative, when the specified output is STL. Possible values are:   - ``single`` (Default) Create one STL file for all the input files (assembly file). - ``multiple``: Create a separate STL file for each object 
 * @export
 * @enum {string}
 */

export const ExportFileStructure = {
    Single: 'single',
    Multiple: 'multiple'
} as const;

export type ExportFileStructure = typeof ExportFileStructure[keyof typeof ExportFileStructure];



