import { ModifyFolderJsonapi } from './modify-folder-jsonapi';
import { VersionRequestData } from './version-request-data';
/**
 * Describe the version to be patched.
 * @export
 * @interface VersionRequest
 */
export interface VersionRequest {
    /**
     *
     * @type {ModifyFolderJsonapi}
     * @memberof VersionRequest
     */
    'jsonapi': ModifyFolderJsonapi;
    /**
     *
     * @type {VersionRequestData}
     * @memberof VersionRequest
     */
    'data': VersionRequestData;
}
