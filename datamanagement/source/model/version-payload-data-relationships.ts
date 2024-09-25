/* tslint:disable */
/* eslint-disable */

import { VersionPayloadDataRelationshipsItem } from './version-payload-data-relationships-item';
import { VersionPayloadDataRelationshipsRefs } from './version-payload-data-relationships-refs';
import { VersionPayloadDataRelationshipsStorage } from './version-payload-data-relationships-storage';

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

