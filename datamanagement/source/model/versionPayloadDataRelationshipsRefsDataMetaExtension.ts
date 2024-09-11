
import { Type } from './type';
import { VersionNumber } from './versionNumber';
import { VersionPayloadDataRelationshipsRefsDataMetaExtensionData } from './versionPayloadDataRelationshipsRefsDataMetaExtensionData';

/**
 * Contains additional properties that extend the default properties of the relationship.
 * @export
 * @interface VersionPayloadDataRelationshipsRefsDataMetaExtension
 */
export interface VersionPayloadDataRelationshipsRefsDataMetaExtension {
    /**
     * 
     * @type {Type}
     * @memberof VersionPayloadDataRelationshipsRefsDataMetaExtension
     */
    'type'?: Type;
    /**
     * 
     * @type {VersionNumber}
     * @memberof VersionPayloadDataRelationshipsRefsDataMetaExtension
     */
    'version'?: VersionNumber;
    /**
     * 
     * @type {VersionPayloadDataRelationshipsRefsDataMetaExtensionData}
     * @memberof VersionPayloadDataRelationshipsRefsDataMetaExtension
     */
    'data'?: VersionPayloadDataRelationshipsRefsDataMetaExtensionData;
}



