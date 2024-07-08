/* tslint:disable */
/* eslint-disable */


/**
 * An array of objects where each object represents a message logged to the manifest during translation. For example, error messages and warning messages.
 * @export
 * @interface Messages
 */
export interface Messages {
    /**
     * Indicates the type of the message. For example, warning indicates a warning message and error indicates an error message.
     * @type {string}
     * @memberof Messages
     */
    'type'?: string;
    /**
     * The ID of the message. For example, the error code reported by an error message.
     * @type {string}
     * @memberof Messages
     */
    'code'?: string;
    /**
     * A human-readable explanation of the event being reported. Can be a string or an array of string.
     * @type {object}
     * @memberof Messages
     */
    'message'?: string | Array<string>;
}

