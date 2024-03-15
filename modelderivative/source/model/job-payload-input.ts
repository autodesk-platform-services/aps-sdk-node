/* tslint:disable */
/* eslint-disable */


/**
 * An object describing the attributes of the source design.
 * @export
 * @interface JobPayloadInput
 */
export interface JobPayloadInput {
    /**
     * The URL safe Base64 encoded URN of the source design.   **Note:** The URN is returned as the ``objectID`` once you complete uploading the source design to APS. This value must be converted to a `Base64 (URL Safe) encoded <http://www.freeformatter.com/base64-encoder.html>`_ string before you can specify it for this attribute. 
     * @type {string}
     * @memberof JobPayloadInput
     */
    'urn': string;
    /**
     * - ``true``: The source design is compressed as a zip file. If set to ``true``, you need to define the `rootFilename`.\' - ``false``: (Default) The source design is not compressed. 
     * @type {boolean}
     * @memberof JobPayloadInput
     */
    'compressedUrn'?: boolean;
    /**
     * The file name of the top-level component of the source design.  Mandatory if  ``compressedUrn`` is set to ``true``.
     * @type {string}
     * @memberof JobPayloadInput
     */
    'rootFileName'?: string;
    /**
     * - ``true`` - Instructs the system to check for references, and if any exist, download all referenced files. Setting this parameter to ``true`` is mandatory when translating source designs consisting of multiple files. For example, Autodesk Inventor assemblies. - ``false`` - (Default) Instructs the system not to check for references.
     * @type {boolean}
     * @memberof JobPayloadInput
     */
    'checkReferences'?: boolean;
}

