/* tslint:disable */
/* eslint-disable */

import { ExportFileStructure } from './export-file-structure';
import { Format } from './format';

/**
 * Advanced options for `stl` type.
 * @export
 * @interface JobPayloadFormatAdvancedSTLAdvanced
 */
export interface JobPayloadFormatAdvancedSTLAdvanced {
    /**
     * 
     * @type {Format}
     * @memberof JobPayloadFormatAdvancedSTLAdvanced
     */
    'format'?: Format;
    /**
     * Color is exported by default. If set to ``true``, color is exported. If set to `false`, color is not exported.
     * @type {boolean}
     * @memberof JobPayloadFormatAdvancedSTLAdvanced
     */
    'exportColor'?: boolean;
    /**
     * 
     * @type {ExportFileStructure}
     * @memberof JobPayloadFormatAdvancedSTLAdvanced
     */
    'exportFileStructure'?: ExportFileStructure;
}



