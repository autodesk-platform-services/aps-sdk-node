import { ModifyFolderPayloadJsonapi } from './modify-folder-payload-jsonapi';
import { RelationshipRefsPayloadData } from './relationship-refs-payload-data';
/**
 * Describe the ref to be created.
 * @export
 * @interface RelationshipRefsPayload
 */
export interface RelationshipRefsPayload {
    /**
     *
     * @type {ModifyFolderPayloadJsonapi}
     * @memberof RelationshipRefsPayload
     */
    'jsonapi': ModifyFolderPayloadJsonapi;
    /**
     *
     * @type {RelationshipRefsPayloadData}
     * @memberof RelationshipRefsPayload
     */
    'data': RelationshipRefsPayloadData;
}
