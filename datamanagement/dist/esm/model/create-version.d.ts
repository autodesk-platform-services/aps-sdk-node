import { CreateVersionData } from './create-version-data';
import { CreateVersionMeta } from './create-version-meta';
import { ModifyFolderJsonapi } from './modify-folder-jsonapi';
/**
 * Describe the version to be created.
 * @export
 * @interface CreateVersion
 */
export interface CreateVersion {
    /**
     *
     * @type {ModifyFolderJsonapi}
     * @memberof CreateVersion
     */
    'jsonapi': ModifyFolderJsonapi;
    /**
     *
     * @type {CreateVersionData}
     * @memberof CreateVersion
     */
    'data': CreateVersionData;
    /**
     *
     * @type {CreateVersionMeta}
     * @memberof CreateVersion
     */
    'meta'?: CreateVersionMeta;
}
