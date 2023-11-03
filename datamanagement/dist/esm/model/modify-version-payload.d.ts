import { ModifyFolderPayloadJsonapi } from './modify-folder-payload-jsonapi';
import { ModifyVersionPayloadData } from './modify-version-payload-data';
/**
 * Describe the version to be patched.
 * @export
 * @interface ModifyVersionPayload
 */
export interface ModifyVersionPayload {
    /**
     *
     * @type {ModifyFolderPayloadJsonapi}
     * @memberof ModifyVersionPayload
     */
    'jsonapi': ModifyFolderPayloadJsonapi;
    /**
     *
     * @type {ModifyVersionPayloadData}
     * @memberof ModifyVersionPayload
     */
    'data': ModifyVersionPayloadData;
}
