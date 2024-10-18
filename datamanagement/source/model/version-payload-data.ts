/* tslint:disable */
/* eslint-disable */

import { TypeVersion } from './type-version';
import { VersionPayloadDataAttributes } from './version-payload-data-attributes';
import { VersionPayloadDataRelationships } from './version-payload-data-relationships';

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



