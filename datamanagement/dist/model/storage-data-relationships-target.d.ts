import { FolderContentsIncludedRelationshipsDownloadFormatsLinks } from './folder-contents-included-relationships-download-formats-links';
import { StorageDataRelationshipsTargetData } from './storage-data-relationships-target-data';
/**
 *
 * @export
 * @interface StorageDataRelationshipsTarget
 */
export interface StorageDataRelationshipsTarget {
    /**
     *
     * @type {FolderContentsIncludedRelationshipsDownloadFormatsLinks}
     * @memberof StorageDataRelationshipsTarget
     */
    'links'?: FolderContentsIncludedRelationshipsDownloadFormatsLinks;
    /**
     *
     * @type {StorageDataRelationshipsTargetData}
     * @memberof StorageDataRelationshipsTarget
     */
    'data'?: StorageDataRelationshipsTargetData;
}
