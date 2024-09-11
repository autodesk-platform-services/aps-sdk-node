
import { Type } from './type';
import { VersionNumber } from './versionNumber';

/**
 * A container of additional properties that extends the default properties of this resource.
 * @export
 * @interface ItemPayloadIncludedAttributesExtension
 */
export interface ItemPayloadIncludedAttributesExtension {
    /**
     * 
     * @type {Type}
     * @memberof ItemPayloadIncludedAttributesExtension
     */
    'type'?: Type;
    /**
     * 
     * @type {VersionNumber}
     * @memberof ItemPayloadIncludedAttributesExtension
     */
    'version'?: VersionNumber;
    /**
     * The container of the additional properties.  The additional properties must follow the schema specified by ``extensions.type`` and ``extensions.version``. Properties that don\'t follow the schema will be ignored.
     * @type {{ [key: string]: object; }}
     * @memberof ItemPayloadIncludedAttributesExtension
     */
    'data'?: { [key: string]: object; };
}



