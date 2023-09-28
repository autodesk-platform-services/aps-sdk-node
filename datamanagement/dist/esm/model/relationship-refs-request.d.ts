import { ModifyFolderJsonapi } from './modify-folder-jsonapi';
import { RelationshipRefsRequestData } from './relationship-refs-request-data';
/**
 * Describe the ref to be created.
 * @export
 * @interface RelationshipRefsRequest
 */
export interface RelationshipRefsRequest {
    /**
     *
     * @type {ModifyFolderJsonapi}
     * @memberof RelationshipRefsRequest
     */
    'jsonapi': ModifyFolderJsonapi;
    /**
     *
     * @type {RelationshipRefsRequestData}
     * @memberof RelationshipRefsRequest
     */
    'data': RelationshipRefsRequestData;
}
