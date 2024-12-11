/* tslint:disable */
/* eslint-disable */

import { BuildingStoreys } from './buildingStoreys';
import { ConversionMethod } from './conversionMethod';
import { OpeningElements } from './openingElements';
import { Spaces } from './spaces';

/**
 * Advanced options for IFC inputs.
 * @export
 * @interface JobPayloadFormatSVF2AdvancedIFC
 */
export interface JobPayloadFormatSVF2AdvancedIFC {
    /**
     * 
     * @type {ConversionMethod}
     * @memberof JobPayloadFormatSVF2AdvancedIFC
     */
    'conversionMethod'?: ConversionMethod;
    /**
     * 
     * @type {BuildingStoreys}
     * @memberof JobPayloadFormatSVF2AdvancedIFC
     */
    'buildingStoreys'?: BuildingStoreys;
    /**
     * 
     * @type {Spaces}
     * @memberof JobPayloadFormatSVF2AdvancedIFC
     */
    'spaces'?: Spaces;
    /**
     * 
     * @type {OpeningElements}
     * @memberof JobPayloadFormatSVF2AdvancedIFC
     */
    'openingElements'?: OpeningElements;
}



