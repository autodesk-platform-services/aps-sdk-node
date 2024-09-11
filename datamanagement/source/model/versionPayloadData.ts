
import { Type } from './type';
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
     * @type {Type}
     * @memberof VersionPayloadData
     */
    'type': Type;
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



