import { CreateItemIncludedRelationshipsRefs } from './create-item-included-relationships-refs';
import { StorageRequestDataRelationshipsTarget } from './storage-request-data-relationships-target';
/**
 *
 * @export
 * @interface CreateItemIncludedRelationships
 */
export interface CreateItemIncludedRelationships {
    /**
     *
     * @type {StorageRequestDataRelationshipsTarget}
     * @memberof CreateItemIncludedRelationships
     */
    'storage'?: StorageRequestDataRelationshipsTarget;
    /**
     *
     * @type {CreateItemIncludedRelationshipsRefs}
     * @memberof CreateItemIncludedRelationships
     */
    'refs'?: CreateItemIncludedRelationshipsRefs;
}
