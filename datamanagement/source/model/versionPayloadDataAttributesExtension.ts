
import { Type } from './type';
import { VersionNumber } from './versionNumber';

/**
 * A container of additional properties that extends the default properties of the version to be created.
 * @export
 * @interface VersionPayloadDataAttributesExtension
 */
export interface VersionPayloadDataAttributesExtension {
    /**
     * 
     * @type {Type}
     * @memberof VersionPayloadDataAttributesExtension
     */
    'type': Type;
    /**
     * 
     * @type {VersionNumber}
     * @memberof VersionPayloadDataAttributesExtension
     */
    'version': VersionNumber;
    /**
     * The container of additional properties.  The additional properties must follow the schema specified by ``extensions.type`` and ``extensions.version``. Properties that don\'t follow the schema will be ignored. 
     * @type {object}
     * @memberof VersionPayloadDataAttributesExtension
     */
    'data'?: object;
}



