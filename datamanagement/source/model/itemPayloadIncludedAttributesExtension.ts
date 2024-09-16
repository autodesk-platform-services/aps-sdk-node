
import { ItemIncludedVersionNumber } from './itemIncludedVersionNumber';
import { TypeItemIncludedExtension } from './typeItemIncludedExtension';

/**
 * A container of additional properties that extends the default properties of this resource.
 * @export
 * @interface ItemPayloadIncludedAttributesExtension
 */
export interface ItemPayloadIncludedAttributesExtension {
    /**
     * 
     * @type {TypeItemIncludedExtension}
     * @memberof ItemPayloadIncludedAttributesExtension
     */
    'type'?: TypeItemIncludedExtension;
    /**
     * 
     * @type {ItemIncludedVersionNumber}
     * @memberof ItemPayloadIncludedAttributesExtension
     */
    'version'?: ItemIncludedVersionNumber;
    /**
     * The container of the additional properties.  The additional properties must follow the schema specified by ``extensions.type`` and ``extensions.version``. Properties that don\'t follow the schema will be ignored.
     * @type {{ [key: string]: object; }}
     * @memberof ItemPayloadIncludedAttributesExtension
     */
    'data'?: { [key: string]: object; };
}



