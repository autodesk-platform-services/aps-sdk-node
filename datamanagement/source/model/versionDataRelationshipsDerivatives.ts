/* tslint:disable */
/* eslint-disable */

import { JsonApiMetaLink } from './jsonApiMetaLink';
import { JsonApiTypeId } from './jsonApiTypeId';

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

