import { CreateItemIncludedRelationshipsRefsDataMetaExtension } from './create-item-included-relationships-refs-data-meta-extension';
/**
 *
 * @export
 * @interface CreateItemIncludedRelationshipsRefsDataMeta
 */
export interface CreateItemIncludedRelationshipsRefsDataMeta {
    /**
     *
     * @type {string}
     * @memberof CreateItemIncludedRelationshipsRefsDataMeta
     */
    'refType': string;
    /**
     *
     * @type {string}
     * @memberof CreateItemIncludedRelationshipsRefsDataMeta
     */
    'direction': string;
    /**
     *
     * @type {CreateItemIncludedRelationshipsRefsDataMetaExtension}
     * @memberof CreateItemIncludedRelationshipsRefsDataMeta
     */
    'extension': CreateItemIncludedRelationshipsRefsDataMetaExtension;
}
