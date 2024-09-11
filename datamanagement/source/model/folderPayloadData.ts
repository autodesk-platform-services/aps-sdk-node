
import { FolderPayloadDataAttributes } from './folderPayloadDataAttributes';
import { FolderPayloadDataRelationships } from './folderPayloadDataRelationships';
import { Type } from './type';

/**
 * The data that describes the folder to be created.
 * @export
 * @interface FolderPayloadData
 */
export interface FolderPayloadData {
    /**
     * 
     * @type {Type}
     * @memberof FolderPayloadData
     */
    'type': Type;
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



