/**
 * A dictionary object that contains a collection of key/value pairs, where each pair represents the target file format and the corresponding source file formats. The key is the target file format. The value is an array of source design file formats that can be translated to the specified target file format
 * @export
 * @interface Formats
 */
export interface Formats {
    /**
     * A target file format.
     * @type {string}
     * @memberof Formats
     */
    'key'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof Formats
     */
    'value'?: Array<string>;
}
