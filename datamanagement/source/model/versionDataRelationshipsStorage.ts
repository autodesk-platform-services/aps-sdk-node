
import { JsonApiMetaLink } from './jsonApiMetaLink';
import { JsonApiTypeId } from './jsonApiTypeId';

/**
 * Contains information about the storage location that contains the binary data of this version.
 * @export
 * @interface VersionDataRelationshipsStorage
 */
export interface VersionDataRelationshipsStorage {
    /**
     * 
     * @type {JsonApiTypeId}
     * @memberof VersionDataRelationshipsStorage
     */
    'data'?: JsonApiTypeId;
    /**
     * 
     * @type {JsonApiMetaLink}
     * @memberof VersionDataRelationshipsStorage
     */
    'meta'?: JsonApiMetaLink;
}

