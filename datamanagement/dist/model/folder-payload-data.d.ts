import { FolderPayloadDataAttributes } from './folder-payload-data-attributes';
import { FolderPayloadDataRelationships } from './folder-payload-data-relationships';
import { Type } from './type';
/**
 *
 * @export
 * @interface FolderPayloadData
 */
export interface FolderPayloadData {
    /**
     *
     * @type {Type}
     * @memberof FolderPayloadData
     */
    'type': Type;
    /**
     *
     * @type {FolderPayloadDataAttributes}
     * @memberof FolderPayloadData
     */
    'attributes': FolderPayloadDataAttributes;
    /**
     *
     * @type {FolderPayloadDataRelationships}
     * @memberof FolderPayloadData
     */
    'relationships': FolderPayloadDataRelationships;
}
