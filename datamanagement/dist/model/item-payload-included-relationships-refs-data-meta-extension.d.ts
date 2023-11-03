import { ItemPayloadIncludedRelationshipsRefsDataMetaExtensionData } from './item-payload-included-relationships-refs-data-meta-extension-data';
import { Type } from './type';
/**
 *
 * @export
 * @interface ItemPayloadIncludedRelationshipsRefsDataMetaExtension
 */
export interface ItemPayloadIncludedRelationshipsRefsDataMetaExtension {
    /**
     *
     * @type {Type}
     * @memberof ItemPayloadIncludedRelationshipsRefsDataMetaExtension
     */
    'type': Type;
    /**
     *
     * @type {string}
     * @memberof ItemPayloadIncludedRelationshipsRefsDataMetaExtension
     */
    'version': string;
    /**
     *
     * @type {ItemPayloadIncludedRelationshipsRefsDataMetaExtensionData}
     * @memberof ItemPayloadIncludedRelationshipsRefsDataMetaExtension
     */
    'data'?: ItemPayloadIncludedRelationshipsRefsDataMetaExtensionData;
}
