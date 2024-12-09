/* tslint:disable */
/* eslint-disable */

import { TypeVersion } from './typeVersion';
import { VersionPayloadDataAttributes } from './versionPayloadDataAttributes';
import { VersionPayloadDataRelationships } from './versionPayloadDataRelationships';

/**
 * The data that describes the version to be created.
 * @export
 * @interface VersionPayloadData
 */
export interface VersionPayloadData {
    /**
     * 
     * @type {TypeVersion}
     * @memberof VersionPayloadData
     */
    'type': TypeVersion;
    /**
     * 
     * @type {VersionPayloadDataAttributes}
     * @memberof VersionPayloadData
     */
    'attributes': VersionPayloadDataAttributes;
    /**
     * 
     * @type {VersionPayloadDataRelationships}
     * @memberof VersionPayloadData
     */
    'relationships': VersionPayloadDataRelationships;
}



