
import { FolderVersionNumber } from './folderVersionNumber';
import { TypeFolderExtension } from './typeFolderExtension';

/**
 * A container of additional properties that extends the default properties of this resource.
 * @export
 * @interface FolderPayloadDataAttributesExtension
 */
export interface FolderPayloadDataAttributesExtension {
    /**
     * 
     * @type {TypeFolderExtension}
     * @memberof FolderPayloadDataAttributesExtension
     */
    'type': TypeFolderExtension;
    /**
     * 
     * @type {FolderVersionNumber}
     * @memberof FolderPayloadDataAttributesExtension
     */
    'version': FolderVersionNumber;
    /**
     * The container of additional properties.  The additional properties must follow the schema specified by ``type`` and ``version``. Properties that don\'t follow the schema will be ignored.
     * @type {object}
     * @memberof FolderPayloadDataAttributesExtension
     */
    'data'?: object;
}



