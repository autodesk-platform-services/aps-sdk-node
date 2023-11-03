import { ItemPayloadIncludedRelationshipsRefsDataMeta } from './item-payload-included-relationships-refs-data-meta';
import { Type } from './type';
/**
 *
 * @export
 * @interface ItemPayloadIncludedRelationshipsRefsData
 */
export interface ItemPayloadIncludedRelationshipsRefsData {
    /**
     *
     * @type {Type}
     * @memberof ItemPayloadIncludedRelationshipsRefsData
     */
    'type': Type;
    /**
     *
     * @type {string}
     * @memberof ItemPayloadIncludedRelationshipsRefsData
     */
    'id': string;
    /**
     *
     * @type {ItemPayloadIncludedRelationshipsRefsDataMeta}
     * @memberof ItemPayloadIncludedRelationshipsRefsData
     */
    'meta': ItemPayloadIncludedRelationshipsRefsDataMeta;
}
