import { ProjectsDataRelationshipsRootFolder } from './projects-data-relationships-root-folder';
import { TopFoldersDataRelationshipsParent } from './top-folders-data-relationships-parent';
/**
 *
 * @export
 * @interface DownloadsDataRelationships
 */
export interface DownloadsDataRelationships {
    /**
     *
     * @type {TopFoldersDataRelationshipsParent}
     * @memberof DownloadsDataRelationships
     */
    'source'?: TopFoldersDataRelationshipsParent;
    /**
     *
     * @type {ProjectsDataRelationshipsRootFolder}
     * @memberof DownloadsDataRelationships
     */
    'storage'?: ProjectsDataRelationshipsRootFolder;
}
