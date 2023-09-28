import { FolderContentsIncludedRelationshipsStorage } from './folder-contents-included-relationships-storage';
import { TopFoldersDataRelationshipsLinks } from './top-folders-data-relationships-links';
import { TopFoldersDataRelationshipsParent } from './top-folders-data-relationships-parent';
import { TopFoldersDataRelationshipsRefs } from './top-folders-data-relationships-refs';
/**
 *
 * @export
 * @interface RefsDataRelationships
 */
export interface RefsDataRelationships {
    /**
     *
     * @type {TopFoldersDataRelationshipsParent}
     * @memberof RefsDataRelationships
     */
    'item'?: TopFoldersDataRelationshipsParent;
    /**
     *
     * @type {TopFoldersDataRelationshipsRefs}
     * @memberof RefsDataRelationships
     */
    'refs'?: TopFoldersDataRelationshipsRefs;
    /**
     *
     * @type {TopFoldersDataRelationshipsLinks}
     * @memberof RefsDataRelationships
     */
    'links'?: TopFoldersDataRelationshipsLinks;
    /**
     *
     * @type {FolderContentsIncludedRelationshipsStorage}
     * @memberof RefsDataRelationships
     */
    'storage'?: FolderContentsIncludedRelationshipsStorage;
}
