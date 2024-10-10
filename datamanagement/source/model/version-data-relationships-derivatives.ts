/* tslint:disable */
/* eslint-disable */

import { JsonApiMetaLink } from './json-api-meta-link';
import { JsonApiTypeId } from './json-api-type-id';

/**
 * Contains information you can use to retrieve the derivatives of this version.
 * @export
 * @interface VersionDataRelationshipsDerivatives
 */
export interface VersionDataRelationshipsDerivatives {
    /**
     * 
     * @type {JsonApiTypeId}
     * @memberof VersionDataRelationshipsDerivatives
     */
    'data'?: JsonApiTypeId;
    /**
     * 
     * @type {JsonApiMetaLink}
     * @memberof VersionDataRelationshipsDerivatives
     */
    'meta'?: JsonApiMetaLink;
}

