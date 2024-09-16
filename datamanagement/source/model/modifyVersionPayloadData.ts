
import { ModifyVersionPayloadDataAttributes } from './modifyVersionPayloadDataAttributes';
import { TypeVersion } from './typeVersion';

/**
 * Contains the information to update
 * @export
 * @interface ModifyVersionPayloadData
 */
export interface ModifyVersionPayloadData {
    /**
     * 
     * @type {TypeVersion}
     * @memberof ModifyVersionPayloadData
     */
    'type': TypeVersion;
    /**
     * The URN of the version. Must be the raw URN, and not the URL enocoded URN.
     * @type {string}
     * @memberof ModifyVersionPayloadData
     */
    'id': string;
    /**
     * 
     * @type {ModifyVersionPayloadDataAttributes}
     * @memberof ModifyVersionPayloadData
     */
    'attributes'?: ModifyVersionPayloadDataAttributes;
}



