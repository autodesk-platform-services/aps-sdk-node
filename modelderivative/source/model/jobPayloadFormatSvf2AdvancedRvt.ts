/* tslint:disable */
/* eslint-disable */

import { ExtractorVersion } from './extractorVersion';
import { MaterialMode } from './materialMode';
import { Model2dView } from './model2dView';

/**
 * Advanced options for Revit inputs.
 * @export
 * @interface JobPayloadFormatSVF2AdvancedRVT
 */
export interface JobPayloadFormatSVF2AdvancedRVT {
    /**
     * 
     * @type {Model2dView}
     * @memberof JobPayloadFormatSVF2AdvancedRVT
     */
    '2dviews'?: Model2dView;
    /**
     * 
     * @type {ExtractorVersion}
     * @memberof JobPayloadFormatSVF2AdvancedRVT
     */
    'extractorVersion'?: ExtractorVersion;
    /**
     * Generates master views when translating from the Revit input format to SVF. This option is ignored for all other input formats. This attribute defaults to false.  Master views are 3D views that are generated for each phase of the Revit model. A master view contains all elements (including “room” elements) present in the host model for that phase. The display name of a master view defaults to the name of the phase it is generated from. However, if a view with that name already exists, the Model Derivative service appends a suffix to the default display name.  **Notes:**  1. Master views do not contain elements from linked models. 2. Enabling this option can increase the time it takes to translate the model.
     * @type {boolean}
     * @memberof JobPayloadFormatSVF2AdvancedRVT
     */
    'generateMasterViews'?: boolean;
    /**
     * 
     * @type {MaterialMode}
     * @memberof JobPayloadFormatSVF2AdvancedRVT
     */
    'materialMode'?: MaterialMode;
}



