import { Direction } from './direction';
import { ItemPayloadIncludedRelationshipsRefsDataMetaExtension } from './item-payload-included-relationships-refs-data-meta-extension';
import { RefType } from './ref-type';
/**
 *
 * @export
 * @interface ItemPayloadIncludedRelationshipsRefsDataMeta
 */
export interface ItemPayloadIncludedRelationshipsRefsDataMeta {
    /**
     *
     * @type {RefType}
     * @memberof ItemPayloadIncludedRelationshipsRefsDataMeta
     */
    'refType': RefType;
    /**
     *
     * @type {Direction}
     * @memberof ItemPayloadIncludedRelationshipsRefsDataMeta
     */
    'direction': Direction;
    /**
     *
     * @type {ItemPayloadIncludedRelationshipsRefsDataMetaExtension}
     * @memberof ItemPayloadIncludedRelationshipsRefsDataMeta
     */
    'extension': ItemPayloadIncludedRelationshipsRefsDataMetaExtension;
}
