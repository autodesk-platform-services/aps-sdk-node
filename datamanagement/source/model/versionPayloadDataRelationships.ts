/* tslint:disable */
/* eslint-disable */

import { VersionPayloadDataRelationshipsItem } from './versionPayloadDataRelationshipsItem';
import { VersionPayloadDataRelationshipsRefs } from './versionPayloadDataRelationshipsRefs';
import { VersionPayloadDataRelationshipsStorage } from './versionPayloadDataRelationshipsStorage';

/**
 * A container of links to resources that are related to the version to be created.
 * @export
 * @interface VersionPayloadDataRelationships
 */
export interface VersionPayloadDataRelationships {
    /**
     * 
     * @type {VersionPayloadDataRelationshipsItem}
     * @memberof VersionPayloadDataRelationships
     */
    'item': VersionPayloadDataRelationshipsItem;
    /**
     * 
     * @type {VersionPayloadDataRelationshipsStorage}
     * @memberof VersionPayloadDataRelationships
     */
    'storage'?: VersionPayloadDataRelationshipsStorage;
    /**
     * 
     * @type {VersionPayloadDataRelationshipsRefs}
     * @memberof VersionPayloadDataRelationships
     */
    'refs'?: VersionPayloadDataRelationshipsRefs;
}

