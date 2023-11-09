import { FolderPayloadDataRelationshipsParent } from './folder-payload-data-relationships-parent';
import { VersionPayloadDataRelationshipsRefs } from './version-payload-data-relationships-refs';
/**
 *
 * @export
 * @interface VersionPayloadDataRelationships
 */
export interface VersionPayloadDataRelationships {
    /**
     *
     * @type {FolderPayloadDataRelationshipsParent}
     * @memberof VersionPayloadDataRelationships
     */
    'item': FolderPayloadDataRelationshipsParent;
    /**
     *
     * @type {FolderPayloadDataRelationshipsParent}
     * @memberof VersionPayloadDataRelationships
     */
    'storage'?: FolderPayloadDataRelationshipsParent;
    /**
     *
     * @type {VersionPayloadDataRelationshipsRefs}
     * @memberof VersionPayloadDataRelationships
     */
    'refs'?: VersionPayloadDataRelationshipsRefs;
}
