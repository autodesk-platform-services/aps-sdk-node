
import { FolderPayloadDataRelationshipsParent } from './folderPayloadDataRelationshipsParent';

/**
 * A container of links to resources that are related to the folder to be created.
 * @export
 * @interface FolderPayloadDataRelationships
 */
export interface FolderPayloadDataRelationships {
    /**
     * 
     * @type {FolderPayloadDataRelationshipsParent}
     * @memberof FolderPayloadDataRelationships
     */
    'parent': FolderPayloadDataRelationshipsParent;
}

