import { FolderPayloadDataRelationshipsParent } from './folder-payload-data-relationships-parent';
/**
 *
 * @export
 * @interface ItemPayloadDataRelationships
 */
export interface ItemPayloadDataRelationships {
    /**
     *
     * @type {FolderPayloadDataRelationshipsParent}
     * @memberof ItemPayloadDataRelationships
     */
    'tip': FolderPayloadDataRelationshipsParent;
    /**
     *
     * @type {FolderPayloadDataRelationshipsParent}
     * @memberof ItemPayloadDataRelationships
     */
    'parent': FolderPayloadDataRelationshipsParent;
}
