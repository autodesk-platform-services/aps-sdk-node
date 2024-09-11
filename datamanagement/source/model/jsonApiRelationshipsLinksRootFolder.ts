
import { JsonApiMetaLink } from './jsonApiMetaLink';
import { JsonApiTypeId } from './jsonApiTypeId';

/**
 * Information about the root folder of a project.
 * @export
 * @interface JsonApiRelationshipsLinksRootFolder
 */
export interface JsonApiRelationshipsLinksRootFolder {
    /**
     * 
     * @type {JsonApiMetaLink}
     * @memberof JsonApiRelationshipsLinksRootFolder
     */
    'meta'?: JsonApiMetaLink;
    /**
     * 
     * @type {JsonApiTypeId}
     * @memberof JsonApiRelationshipsLinksRootFolder
     */
    'data'?: JsonApiTypeId;
}

