import { RelationshipRefsPayloadDataMeta } from './relationship-refs-payload-data-meta';
import { Type } from './type';
/**
 *
 * @export
 * @interface RelationshipRefsPayloadData
 */
export interface RelationshipRefsPayloadData {
    /**
     *
     * @type {Type}
     * @memberof RelationshipRefsPayloadData
     */
    'type': Type;
    /**
     *
     * @type {string}
     * @memberof RelationshipRefsPayloadData
     */
    'id': string;
    /**
     *
     * @type {RelationshipRefsPayloadDataMeta}
     * @memberof RelationshipRefsPayloadData
     */
    'meta': RelationshipRefsPayloadDataMeta;
}
