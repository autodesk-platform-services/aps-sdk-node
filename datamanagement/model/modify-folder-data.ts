/* tslint:disable */
/* eslint-disable */

import { ModifyFolderDataAttributes } from './modify-folder-data-attributes';
import { ModifyFolderDataRelationships } from './modify-folder-data-relationships';

/**
 * 
 * @export
 * @interface ModifyFolderData
 */
export interface ModifyFolderData {
    /**
     * 
     * @type {string}
     * @memberof ModifyFolderData
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof ModifyFolderData
     */
    'id': string;
    /**
     * 
     * @type {ModifyFolderDataAttributes}
     * @memberof ModifyFolderData
     */
    'attributes'?: ModifyFolderDataAttributes;
    /**
     * 
     * @type {ModifyFolderDataRelationships}
     * @memberof ModifyFolderData
     */
    'relationships'?: ModifyFolderDataRelationships;
}

