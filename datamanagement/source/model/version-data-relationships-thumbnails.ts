/* tslint:disable */
/* eslint-disable */

import { JsonApiMetaLink } from './json-api-meta-link';
import { JsonApiTypeId } from './json-api-type-id';

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

