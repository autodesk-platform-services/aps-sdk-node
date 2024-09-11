
import { VersionPayloadDataAttributesExtension } from './versionPayloadDataAttributesExtension';

/**
 * The properties of the version to be created.
 * @export
 * @interface VersionPayloadDataAttributes
 */
export interface VersionPayloadDataAttributes {
    /**
     * The file name to be used when synced to local disk (1-255 characters).   Avoid using the following reserved characters in the name: ``<``, ``>``, ``:``, ``\"``, ``/``, ``\\``, ``|``, ``?``, ``*``, ``\'``, ``\\n``, ``\\r``, ``\\t``, ``\\0``, ``\\f``, ``¢``, ``™``, ``$``, ``®``.  If you are creating the new version by copying an existing version of another item, the system uses the name of the source by default. However, if you specify a name, it will override the default name.
     * @type {string}
     * @memberof VersionPayloadDataAttributes
     */
    'name': string;
    /**
     * 
     * @type {VersionPayloadDataAttributesExtension}
     * @memberof VersionPayloadDataAttributes
     */
    'extension': VersionPayloadDataAttributesExtension;
    /**
     * Reserved for future use. Use ``data.attributes.name`` for the name.
     * @type {string}
     * @memberof VersionPayloadDataAttributes
     */
    'displayName'?: string;
}

