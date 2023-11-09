import { CommandPayloadData } from './command-payload-data';
import { ModifyFolderPayloadJsonapi } from './modify-folder-payload-jsonapi';
/**
 * The POST body is a JSON object with the following attributes.
 * @export
 * @interface CommandPayload
 */
export interface CommandPayload {
    /**
     *
     * @type {ModifyFolderPayloadJsonapi}
     * @memberof CommandPayload
     */
    'jsonapi': ModifyFolderPayloadJsonapi;
    /**
     *
     * @type {CommandPayloadData}
     * @memberof CommandPayload
     */
    'data': CommandPayloadData;
}
