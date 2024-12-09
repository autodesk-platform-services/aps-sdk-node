/* tslint:disable */
/* eslint-disable */

import { RelationshipRefsPayloadDataMeta } from './relationship-refs-payload-data-meta';
import { TypeEntity } from './type-entity';

/**
 * A container for the data that describes the custom relationship.
 * @export
 * @interface RelationshipRefsPayloadData
 */
export interface RelationshipRefsPayloadData {
    /**
     * 
     * @type {TypeEntity}
     * @memberof RelationshipRefsPayloadData
     */
    'type': TypeEntity;
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



