
import { ItemIncludedRelationshipExtensionVersionNumber } from './itemIncludedRelationshipExtensionVersionNumber';
import { JsonApiRelationshipsRefsDataMetaExtensionData } from './jsonApiRelationshipsRefsDataMetaExtensionData';
import { TypeCoreXref } from './typeCoreXref';

/**
 * A container of additional properties that extends the default properties of this resource.
 * @export
 * @interface JsonApiRelationshipsRefsDataMetaExtension
 */
export interface JsonApiRelationshipsRefsDataMetaExtension {
    /**
     * 
     * @type {TypeCoreXref}
     * @memberof JsonApiRelationshipsRefsDataMetaExtension
     */
    'type': TypeCoreXref;
    /**
     * 
     * @type {ItemIncludedRelationshipExtensionVersionNumber}
     * @memberof JsonApiRelationshipsRefsDataMetaExtension
     */
    'version': ItemIncludedRelationshipExtensionVersionNumber;
    /**
     * 
     * @type {JsonApiRelationshipsRefsDataMetaExtensionData}
     * @memberof JsonApiRelationshipsRefsDataMetaExtension
     */
    'data'?: JsonApiRelationshipsRefsDataMetaExtensionData;
}



