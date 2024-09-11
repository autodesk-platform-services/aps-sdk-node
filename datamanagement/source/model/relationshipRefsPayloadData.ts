
import { RelationshipRefsPayloadDataMeta } from './relationshipRefsPayloadDataMeta';
import { Type } from './type';

/**
 * A container for the data that describes the custom relationship.
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
     * The ID that uniquely identifies the resource.
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



