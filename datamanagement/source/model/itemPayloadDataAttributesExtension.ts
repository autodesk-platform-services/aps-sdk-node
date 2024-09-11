
import { Type } from './type';
import { VersionNumber } from './versionNumber';

/**
 * The Type ID of the schema that defines the structure of the ``extension.data`` object
 * @export
 * @interface ItemPayloadDataAttributesExtension
 */
export interface ItemPayloadDataAttributesExtension {
    /**
     * 
     * @type {Type}
     * @memberof ItemPayloadDataAttributesExtension
     */
    'type'?: Type;
    /**
     * 
     * @type {VersionNumber}
     * @memberof ItemPayloadDataAttributesExtension
     */
    'version'?: VersionNumber;
    /**
     * The container of additional properties.  The additional properties must follow the schema specified by ``extensions.type`` and ``extensions.version``. Properties that don\'t follow the schema will be ignored. 
     * @type {{ [key: string]: object; }}
     * @memberof ItemPayloadDataAttributesExtension
     */
    'data'?: { [key: string]: object; };
}



