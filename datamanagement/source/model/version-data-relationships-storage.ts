/* tslint:disable */
/* eslint-disable */

import { JsonApiMetaLink } from './json-api-meta-link';
import { JsonApiTypeId } from './json-api-type-id';

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

