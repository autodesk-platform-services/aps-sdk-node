/* tslint:disable */
/* eslint-disable */


/**
 * An object that represents the successful response of a List Supported Formats operation.
 * @export
 * @interface SupportedFormats
 */
export interface SupportedFormats {
    /**
     * A dictionary object that contains a collection of key-value pairs, where each pair represents the target file format and the corresponding source file formats.
     * @type {{ [key: string]: Array<string>; }}
     * @memberof SupportedFormats
     */
    'formats'?: { [key: string]: Array<string>; };
}

