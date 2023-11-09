import { FolderPayloadDataRelationshipsParent } from './folder-payload-data-relationships-parent';
import { ItemPayloadIncludedRelationshipsRefs } from './item-payload-included-relationships-refs';
/**
 *
 * @export
 * @interface ItemPayloadIncludedRelationships
 */
export interface ItemPayloadIncludedRelationships {
    /**
     *
     * @type {FolderPayloadDataRelationshipsParent}
     * @memberof ItemPayloadIncludedRelationships
     */
    'storage'?: FolderPayloadDataRelationshipsParent;
    /**
     *
     * @type {ItemPayloadIncludedRelationshipsRefs}
     * @memberof ItemPayloadIncludedRelationships
     */
    'refs'?: ItemPayloadIncludedRelationshipsRefs;
}
