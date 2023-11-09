import { ItemPayloadIncludedRelationshipsRefsDataMetaExtensionData } from './item-payload-included-relationships-refs-data-meta-extension-data';
import { Type } from './type';
/**
 *
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
     * @type {string}
     * @memberof VersionPayloadDataRelationshipsRefsDataMetaExtension
     */
    'version'?: string;
    /**
     *
     * @type {ItemPayloadIncludedRelationshipsRefsDataMetaExtensionData}
     * @memberof VersionPayloadDataRelationshipsRefsDataMetaExtension
     */
    'data'?: ItemPayloadIncludedRelationshipsRefsDataMetaExtensionData;
}
