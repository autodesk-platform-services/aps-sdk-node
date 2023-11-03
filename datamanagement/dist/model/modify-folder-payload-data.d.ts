import { ModifyFolderPayloadDataAttributes } from './modify-folder-payload-data-attributes';
import { ModifyFolderPayloadDataRelationships } from './modify-folder-payload-data-relationships';
import { Type } from './type';
/**
 *
 * @export
 * @interface ModifyFolderPayloadData
 */
export interface ModifyFolderPayloadData {
    /**
     *
     * @type {Type}
     * @memberof ModifyFolderPayloadData
     */
    'type': Type;
    /**
     *
     * @type {string}
     * @memberof ModifyFolderPayloadData
     */
    'id': string;
    /**
     *
     * @type {ModifyFolderPayloadDataAttributes}
     * @memberof ModifyFolderPayloadData
     */
    'attributes'?: ModifyFolderPayloadDataAttributes;
    /**
     *
     * @type {ModifyFolderPayloadDataRelationships}
     * @memberof ModifyFolderPayloadData
     */
    'relationships'?: ModifyFolderPayloadDataRelationships;
}
