import { ModifyFolderPayloadJsonapi } from './modify-folder-payload-jsonapi';
import { VersionPayloadData } from './version-payload-data';
import { VersionPayloadMeta } from './version-payload-meta';
/**
 * Describe the version to be created.
 * @export
 * @interface VersionPayload
 */
export interface VersionPayload {
    /**
     *
     * @type {ModifyFolderPayloadJsonapi}
     * @memberof VersionPayload
     */
    'jsonapi': ModifyFolderPayloadJsonapi;
    /**
     *
     * @type {VersionPayloadData}
     * @memberof VersionPayload
     */
    'data': VersionPayloadData;
    /**
     *
     * @type {VersionPayloadMeta}
     * @memberof VersionPayload
     */
    'meta'?: VersionPayloadMeta;
}
