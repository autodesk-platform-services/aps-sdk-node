/* tslint:disable */
/* eslint-disable */

import { Region } from './region';
import { SpecifyReferencesPayloadReferences } from './specify-references-payload-references';

/**
 * An object that represents the successful response of a Specify References operation.
 * @export
 * @interface SpecifyReferencesPayload
 */
export interface SpecifyReferencesPayload {
    /**
     * The URL safe Base64 encoded URN of the source design. Mandatory if the Base64 encoded urn in the request URL is a logical URN.
     * @type {string}
     * @memberof SpecifyReferencesPayload
     */
    'urn': string;
    /**
     * 
     * @type {Region}
     * @memberof SpecifyReferencesPayload
     */
    'region'?: Region;
    /**
     * The file name of the top level component. By default, it is set to ``\"\"`` and the file will be download with its ``urn``.
     * @type {string}
     * @memberof SpecifyReferencesPayload
     */
    'filename': string;
    /**
     * An array of objects, where each object represents a referenced file.
     * @type {Array<SpecifyReferencesPayloadReferences>}
     * @memberof SpecifyReferencesPayload
     */
    'references': Array<SpecifyReferencesPayloadReferences>;
}



