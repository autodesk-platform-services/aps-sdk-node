/* tslint:disable */
/* eslint-disable */


/**
 * An object that represents the successful response of a Specify References operation. 
 * @export
 * @interface SpecifyReferences
 */
export interface SpecifyReferences {
    /**
     * The result of the operation. Always ``success`` for status ``200``.
     * @type {string}
     * @memberof SpecifyReferences
     */
    'result'?: string;
    /**
     * The URN of the top level component.
     * @type {string}
     * @memberof SpecifyReferences
     */
    'urn': string;
}

