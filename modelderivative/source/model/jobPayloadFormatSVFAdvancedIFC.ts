/* tslint:disable */
/* eslint-disable */

import { BuildingStoreys } from './buildingStoreys';
import { ConversionMethod } from './conversionMethod';
import { OpeningElements } from './openingElements';
import { Spaces } from './spaces';

/**
 * Advanced options for IFC inputs.
 * @export
 * @interface JobPayloadFormatSVFAdvancedIFC
 */
export interface JobPayloadFormatSVFAdvancedIFC {
    /**
     * 
     * @type {ConversionMethod}
     * @memberof JobPayloadFormatSVFAdvancedIFC
     */
    'conversionMethod'?: ConversionMethod;
    /**
     * 
     * @type {BuildingStoreys}
     * @memberof JobPayloadFormatSVFAdvancedIFC
     */
    'buildingStoreys'?: BuildingStoreys;
    /**
     * 
     * @type {Spaces}
     * @memberof JobPayloadFormatSVFAdvancedIFC
     */
    'spaces'?: Spaces;
    /**
     * 
     * @type {OpeningElements}
     * @memberof JobPayloadFormatSVFAdvancedIFC
     */
    'openingElements'?: OpeningElements;
}



