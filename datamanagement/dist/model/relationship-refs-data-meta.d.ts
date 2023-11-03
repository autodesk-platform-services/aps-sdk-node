import { RelationshipRefsDataMetaExtension } from './relationship-refs-data-meta-extension';
/**
 *
 * @export
 * @interface RelationshipRefsDataMeta
 */
export interface RelationshipRefsDataMeta {
    /**
     *
     * @type {string}
     * @memberof RelationshipRefsDataMeta
     */
    'refType'?: string;
    /**
     *
     * @type {string}
     * @memberof RelationshipRefsDataMeta
     */
    'fromId'?: string;
    /**
     *
     * @type {string}
     * @memberof RelationshipRefsDataMeta
     */
    'fromType'?: string;
    /**
     *
     * @type {string}
     * @memberof RelationshipRefsDataMeta
     */
    'toId'?: string;
    /**
     *
     * @type {string}
     * @memberof RelationshipRefsDataMeta
     */
    'toType'?: string;
    /**
     *
     * @type {string}
     * @memberof RelationshipRefsDataMeta
     */
    'direction'?: string;
    /**
     *
     * @type {RelationshipRefsDataMetaExtension}
     * @memberof RelationshipRefsDataMeta
     */
    'extension'?: RelationshipRefsDataMetaExtension;
}
