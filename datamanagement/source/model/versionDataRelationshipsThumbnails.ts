
import { JsonApiMetaLink } from './jsonApiMetaLink';
import { JsonApiTypeId } from './jsonApiTypeId';

/**
 * Contains the information required to retrieve thumbnails of this version from the Model Derivative service. 
 * @export
 * @interface VersionDataRelationshipsThumbnails
 */
export interface VersionDataRelationshipsThumbnails {
    /**
     * 
     * @type {JsonApiTypeId}
     * @memberof VersionDataRelationshipsThumbnails
     */
    'data'?: JsonApiTypeId;
    /**
     * 
     * @type {JsonApiMetaLink}
     * @memberof VersionDataRelationshipsThumbnails
     */
    'meta'?: JsonApiMetaLink;
}

