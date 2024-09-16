
import { TypeAttributeExtension } from './typeAttributeExtension';
import { VersionNumber } from './versionNumber';

/**
 * A container of additional properties that extends this resource.
 * @export
 * @interface BaseAttributesExtensionObjectWithoutSchemaLink
 */
export interface BaseAttributesExtensionObjectWithoutSchemaLink {
    /**
     * 
     * @type {TypeAttributeExtension}
     * @memberof BaseAttributesExtensionObjectWithoutSchemaLink
     */
    'type': TypeAttributeExtension;
    /**
     * 
     * @type {VersionNumber}
     * @memberof BaseAttributesExtensionObjectWithoutSchemaLink
     */
    'version': VersionNumber;
    /**
     * The object that contains the additional properties, which makes this resource extensible.
     * @type {{ [key: string]: object; }}
     * @memberof BaseAttributesExtensionObjectWithoutSchemaLink
     */
    'data'?: { [key: string]: object; };
}



