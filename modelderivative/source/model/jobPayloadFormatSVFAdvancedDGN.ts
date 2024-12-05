/* tslint:disable */
/* eslint-disable */


/**
 * Advanced options for DGN inputs.
 * @export
 * @interface JobPayloadFormatSVFAdvancedDGN
 */
export interface JobPayloadFormatSVFAdvancedDGN {
    /**
     * An array containing user data linkage IDs of the linkage data to be extracted from the DGN file. Linkage data is not extracted if you do not specify this attribute.
     * @type {Array<number>}
     * @memberof JobPayloadFormatSVFAdvancedDGN
     */
    'requestedLinkageIDs'?: Array<number>;
}

