import { FolderContentsIncludedRelationshipsDerivatives } from './folder-contents-included-relationships-derivatives';
import { FolderContentsIncludedRelationshipsDownloadFormats } from './folder-contents-included-relationships-download-formats';
import { FolderContentsIncludedRelationshipsStorage } from './folder-contents-included-relationships-storage';
import { TopFoldersDataRelationshipsLinks } from './top-folders-data-relationships-links';
import { TopFoldersDataRelationshipsParent } from './top-folders-data-relationships-parent';
import { TopFoldersDataRelationshipsRefs } from './top-folders-data-relationships-refs';
/**
 *
 * @export
 * @interface FolderContentsIncludedRelationships
 */
export interface FolderContentsIncludedRelationships {
    /**
     *
     * @type {TopFoldersDataRelationshipsParent}
     * @memberof FolderContentsIncludedRelationships
     */
    'item'?: TopFoldersDataRelationshipsParent;
    /**
     *
     * @type {TopFoldersDataRelationshipsRefs}
     * @memberof FolderContentsIncludedRelationships
     */
    'refs'?: TopFoldersDataRelationshipsRefs;
    /**
     *
     * @type {TopFoldersDataRelationshipsLinks}
     * @memberof FolderContentsIncludedRelationships
     */
    'links'?: TopFoldersDataRelationshipsLinks;
    /**
     *
     * @type {FolderContentsIncludedRelationshipsStorage}
     * @memberof FolderContentsIncludedRelationships
     */
    'storage'?: FolderContentsIncludedRelationshipsStorage;
    /**
     *
     * @type {FolderContentsIncludedRelationshipsDerivatives}
     * @memberof FolderContentsIncludedRelationships
     */
    'derivatives'?: FolderContentsIncludedRelationshipsDerivatives;
    /**
     *
     * @type {FolderContentsIncludedRelationshipsDerivatives}
     * @memberof FolderContentsIncludedRelationships
     */
    'thumbnails'?: FolderContentsIncludedRelationshipsDerivatives;
    /**
     *
     * @type {FolderContentsIncludedRelationshipsDownloadFormats}
     * @memberof FolderContentsIncludedRelationships
     */
    'downloadFormats'?: FolderContentsIncludedRelationshipsDownloadFormats;
}
