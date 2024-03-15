/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the format of the file to create, when the specified output is STL.  Possible values are:  - ``ascii`` - Create derivative as an ASCII STL file. - ``binary`` - (Default) Create derivative as a binary STL file.   
 * @export
 * @enum {string}
 */

export const Format = {
    Binary: 'binary',
    Ascii: 'ascii'
} as const;

export type Format = typeof Format[keyof typeof Format];



