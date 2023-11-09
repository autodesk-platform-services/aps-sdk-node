import { CommandPayloadDataAttributes } from './command-payload-data-attributes';
import { CommandPayloadDataRelationships } from './command-payload-data-relationships';
import { Type } from './type';
/**
 *
 * @export
 * @interface CommandPayloadData
 */
export interface CommandPayloadData {
    /**
     *
     * @type {Type}
     * @memberof CommandPayloadData
     */
    'type': Type;
    /**
     *
     * @type {CommandPayloadDataAttributes}
     * @memberof CommandPayloadData
     */
    'attributes': CommandPayloadDataAttributes;
    /**
     *
     * @type {CommandPayloadDataRelationships}
     * @memberof CommandPayloadData
     */
    'relationships': CommandPayloadDataRelationships;
}
