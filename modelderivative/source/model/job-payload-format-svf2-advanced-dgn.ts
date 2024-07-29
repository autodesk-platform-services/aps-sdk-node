/* tslint:disable */
/* eslint-disable */


/**
 * Advanced options for DGN inputs.
 * @export
 * @interface JobPayloadFormatSVF2AdvancedDGN
 */
export interface JobPayloadFormatSVF2AdvancedDGN {
    /**
     * An array containing user data linkage IDs of the linkage data to be extracted from the DGN file. Linkage data is not extracted if you do not specify this attribute.
     * @type {Array<number>}
     * @memberof JobPayloadFormatSVF2AdvancedDGN
     */
    'requestedLinkageIDs'?: Array<number>;
}

