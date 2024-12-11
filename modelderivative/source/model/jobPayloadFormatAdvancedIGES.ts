/* tslint:disable */
/* eslint-disable */

import { SheetType } from './sheetType';
import { SolidType } from './solidType';
import { SurfaceType } from './surfaceType';

/**
 * An object that contains advanced options for an IGES output.
 * @export
 * @interface JobPayloadFormatAdvancedIGES
 */
export interface JobPayloadFormatAdvancedIGES {
    /**
     * Possible values are between `0` and `1`. By default it is set at 0.001.
     * @type {number}
     * @memberof JobPayloadFormatAdvancedIGES
     */
    'tolerance'?: number;
    /**
     * 
     * @type {SurfaceType}
     * @memberof JobPayloadFormatAdvancedIGES
     */
    'surfaceType'?: SurfaceType;
    /**
     * 
     * @type {SheetType}
     * @memberof JobPayloadFormatAdvancedIGES
     */
    'sheetType'?: SheetType;
    /**
     * 
     * @type {SolidType}
     * @memberof JobPayloadFormatAdvancedIGES
     */
    'solidType'?: SolidType;
}



