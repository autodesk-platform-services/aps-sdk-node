/* tslint:disable */
/* eslint-disable */


/**
 * 
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
     * A human-readable explanation of the event being reported.
     * @type {Array<string>}
     * @memberof Messages
     */
    'message'?: Array<string>;
}

