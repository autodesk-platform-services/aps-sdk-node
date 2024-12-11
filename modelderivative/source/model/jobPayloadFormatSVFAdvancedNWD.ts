/* tslint:disable */
/* eslint-disable */


/**
 * Advanced options for NWD inputs.
 * @export
 * @interface JobPayloadFormatSVFAdvancedNWD
 */
export interface JobPayloadFormatSVFAdvancedNWD {
    /**
     * Specifies whether hidden objects must be extracted or not. Applicabable only when the source design type is Navisworks.  - ``true``: Extract hidden objects from the input file. - ``false``: (Default) Do not extract hidden objects from the input file. 
     * @type {boolean}
     * @memberof JobPayloadFormatSVFAdvancedNWD
     */
    'hiddenObjects'?: boolean;
    /**
     * Specifies whether basic material properties must be extracted or not.  Applicabable only when the source design type is Navisworks.  - ``true``: Extract properties for basic materials. - ``false``: (Default) Do not extract properties for basic materials. 
     * @type {boolean}
     * @memberof JobPayloadFormatSVFAdvancedNWD
     */
    'basicMaterialProperties'?: boolean;
    /**
     * Specifies how to handle Autodesk material properties.  Applicabable only when the source design type is Navisworks.  - ``true``: Extract properties for Autodesk materials. - ``false``: (Default) Do not extract properties for Autodesk materials. 
     * @type {boolean}
     * @memberof JobPayloadFormatSVFAdvancedNWD
     */
    'autodeskMaterialProperties'?: boolean;
    /**
     * Specifies whether timeliner properties must be extracted or not.  Applicabable only when the source design type is Navisworks.  - ``true``: Extract timeliner properties. - ``false``: (Default) Do not extract timeliner properties. 
     * @type {boolean}
     * @memberof JobPayloadFormatSVFAdvancedNWD
     */
    'timelinerProperties'?: boolean;
}

