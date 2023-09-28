import { RelationshipRefsRequestDataMeta } from './relationship-refs-request-data-meta';
/**
 *
 * @export
 * @interface RelationshipRefsRequestData
 */
export interface RelationshipRefsRequestData {
    /**
     *
     * @type {string}
     * @memberof RelationshipRefsRequestData
     */
    'type': string;
    /**
     *
     * @type {string}
     * @memberof RelationshipRefsRequestData
     */
    'id': string;
    /**
     *
     * @type {RelationshipRefsRequestDataMeta}
     * @memberof RelationshipRefsRequestData
     */
    'meta': RelationshipRefsRequestDataMeta;
}
