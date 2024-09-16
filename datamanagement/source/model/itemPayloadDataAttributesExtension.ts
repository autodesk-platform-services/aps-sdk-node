
import { ItemVersionNumber } from './itemVersionNumber';
import { TypeItemExtension } from './typeItemExtension';

/**
 * The Type ID of the schema that defines the structure of the ``extension.data`` object
 * @export
 * @interface ItemPayloadDataAttributesExtension
 */
export interface ItemPayloadDataAttributesExtension {
    /**
     * 
     * @type {TypeItemExtension}
     * @memberof ItemPayloadDataAttributesExtension
     */
    'type'?: TypeItemExtension;
    /**
     * 
     * @type {ItemVersionNumber}
     * @memberof ItemPayloadDataAttributesExtension
     */
    'version'?: ItemVersionNumber;
    /**
     * The container of additional properties.  The additional properties must follow the schema specified by ``extensions.type`` and ``extensions.version``. Properties that don\'t follow the schema will be ignored. 
     * @type {{ [key: string]: object; }}
     * @memberof ItemPayloadDataAttributesExtension
     */
    'data'?: { [key: string]: object; };
}



