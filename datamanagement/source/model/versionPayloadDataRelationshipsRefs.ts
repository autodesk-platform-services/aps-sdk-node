/* tslint:disable */
/* eslint-disable */

import { VersionPayloadDataRelationshipsRefsData } from './versionPayloadDataRelationshipsRefsData';

/**
 * Information on other resources that will share a custom relationship with the version being created.
 * @export
 * @interface VersionPayloadDataRelationshipsRefs
 */
export interface VersionPayloadDataRelationshipsRefs {
    /**
     * An array of object, where each object represents a reference.
     * @type {Array<VersionPayloadDataRelationshipsRefsData>}
     * @memberof VersionPayloadDataRelationshipsRefs
     */
    'data': Array<VersionPayloadDataRelationshipsRefsData>;
}

