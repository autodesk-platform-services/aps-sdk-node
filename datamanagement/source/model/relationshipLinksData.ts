
import { RelationshipLinksDataMeta } from './relationshipLinksDataMeta';
import { Type } from './type';

/**
 * 
 * @export
 * @interface RelationshipLinksData
 */
export interface RelationshipLinksData {
    /**
     * 
     * @type {Type}
     * @memberof RelationshipLinksData
     */
    'type'?: Type;
    /**
     * The ID of the resource.
     * @type {string}
     * @memberof RelationshipLinksData
     */
    'id'?: string;
    /**
     * 
     * @type {RelationshipLinksDataMeta}
     * @memberof RelationshipLinksData
     */
    'meta'?: RelationshipLinksDataMeta;
}



