import { CreateCommandData } from './create-command-data';
import { ModifyFolderJsonapi } from './modify-folder-jsonapi';
/**
 * The POST body is a JSON object with the following attributes.
 * @export
 * @interface CreateCommand
 */
export interface CreateCommand {
    /**
     *
     * @type {ModifyFolderJsonapi}
     * @memberof CreateCommand
     */
    'jsonapi': ModifyFolderJsonapi;
    /**
     *
     * @type {CreateCommandData}
     * @memberof CreateCommand
     */
    'data': CreateCommandData;
}
