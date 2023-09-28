import { CreateVersionDataRelationshipsRefs } from './create-version-data-relationships-refs';
import { StorageRequestDataRelationshipsTarget } from './storage-request-data-relationships-target';
/**
 *
 * @export
 * @interface CreateVersionDataRelationships
 */
export interface CreateVersionDataRelationships {
    /**
     *
     * @type {StorageRequestDataRelationshipsTarget}
     * @memberof CreateVersionDataRelationships
     */
    'item': StorageRequestDataRelationshipsTarget;
    /**
     *
     * @type {StorageRequestDataRelationshipsTarget}
     * @memberof CreateVersionDataRelationships
     */
    'storage'?: StorageRequestDataRelationshipsTarget;
    /**
     *
     * @type {CreateVersionDataRelationshipsRefs}
     * @memberof CreateVersionDataRelationships
     */
    'refs'?: CreateVersionDataRelationshipsRefs;
}
