
import { JsonApiRelationshipsRefsDataMetaExtensionData } from './jsonApiRelationshipsRefsDataMetaExtensionData';
import { Type } from './type';

/**
 * A container of additional properties that extends the default properties of this resource.
 * @export
 * @interface JsonApiRelationshipsRefsDataMetaExtension
 */
export interface JsonApiRelationshipsRefsDataMetaExtension {
    /**
     * 
     * @type {Type}
     * @memberof JsonApiRelationshipsRefsDataMetaExtension
     */
    'type': Type;
    /**
     * The version of the type. The current version is ``1.1.0``. 
     * @type {string}
     * @memberof JsonApiRelationshipsRefsDataMetaExtension
     */
    'version': string;
    /**
     * 
     * @type {JsonApiRelationshipsRefsDataMetaExtensionData}
     * @memberof JsonApiRelationshipsRefsDataMetaExtension
     */
    'data'?: JsonApiRelationshipsRefsDataMetaExtensionData;
}



