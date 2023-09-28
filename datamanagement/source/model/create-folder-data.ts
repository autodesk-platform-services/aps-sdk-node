/* tslint:disable */
/* eslint-disable */

import { CreateFolderDataAttributes } from './create-folder-data-attributes';
import { CreateFolderDataRelationships } from './create-folder-data-relationships';

/**
 * 
 * @export
 * @interface CreateFolderData
 */
export interface CreateFolderData {
    /**
     * 
     * @type {string}
     * @memberof CreateFolderData
     */
    'type': string;
    /**
     * 
     * @type {CreateFolderDataAttributes}
     * @memberof CreateFolderData
     */
    'attributes': CreateFolderDataAttributes;
    /**
     * 
     * @type {CreateFolderDataRelationships}
     * @memberof CreateFolderData
     */
    'relationships': CreateFolderDataRelationships;
}

