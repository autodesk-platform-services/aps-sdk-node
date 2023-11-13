import { Type } from './type';
import { VersionPayloadDataAttributes } from './version-payload-data-attributes';
import { VersionPayloadDataRelationships } from './version-payload-data-relationships';
/**
 *
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
