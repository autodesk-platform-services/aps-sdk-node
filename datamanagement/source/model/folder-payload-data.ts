/* tslint:disable */
/* eslint-disable */

import { FolderPayloadDataAttributes } from './folder-payload-data-attributes';
import { FolderPayloadDataRelationships } from './folder-payload-data-relationships';
import { TypeFolder } from './type-folder';

/**
 * The data that describes the folder to be created.
 * @export
 * @interface FolderPayloadData
 */
export interface FolderPayloadData {
    /**
     * 
     * @type {TypeFolder}
     * @memberof FolderPayloadData
     */
    'type': TypeFolder;
    /**
     * 
     * @type {FolderPayloadDataAttributes}
     * @memberof FolderPayloadData
     */
    'attributes': FolderPayloadDataAttributes;
    /**
     * 
     * @type {FolderPayloadDataRelationships}
     * @memberof FolderPayloadData
     */
    'relationships': FolderPayloadDataRelationships;
}



