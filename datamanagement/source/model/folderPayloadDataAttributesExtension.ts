
import { Type } from './type';
import { VersionNumber } from './versionNumber';

/**
 * A container of additional properties that extends the default properties of this resource.
 * @export
 * @interface FolderPayloadDataAttributesExtension
 */
export interface FolderPayloadDataAttributesExtension {
    /**
     * 
     * @type {Type}
     * @memberof FolderPayloadDataAttributesExtension
     */
    'type': Type;
    /**
     * 
     * @type {VersionNumber}
     * @memberof FolderPayloadDataAttributesExtension
     */
    'version': VersionNumber;
    /**
     * The container of additional properties.  The additional properties must follow the schema specified by ``type`` and ``version``. Properties that don\'t follow the schema will be ignored.
     * @type {object}
     * @memberof FolderPayloadDataAttributesExtension
     */
    'data'?: object;
}



