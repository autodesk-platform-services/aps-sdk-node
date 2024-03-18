/* tslint:disable */
/* eslint-disable */

import { ExportFileStructure } from './export-file-structure';
import { Unit } from './unit';

/**
 * Advanced options for OBJ output type.
 * @export
 * @interface JobObjOutputFormatAdvanced
 */
export interface JobObjOutputFormatAdvanced {
    /**
     * 
     * @type {ExportFileStructure}
     * @memberof JobObjOutputFormatAdvanced
     */
    'exportFileStructure'?: ExportFileStructure;
    /**
     * 
     * @type {Unit}
     * @memberof JobObjOutputFormatAdvanced
     */
    'unit'?: Unit;
    /**
     * Required for geometry extractions. Specifies the ID of the Model View that contains the geometry to extract.
     * @type {string}
     * @memberof JobObjOutputFormatAdvanced
     */
    'modelGuid'?: string;
    /**
     * Required for geometry extractions. Specifies the IDs of the objects (``objectID) to extract. -1 will extract the entire model. 
     * @type {Array<number>}
     * @memberof JobObjOutputFormatAdvanced
     */
    'objectIds'?: Array<number>;
}



