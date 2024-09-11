
import { MetaRefs } from './metaRefs';
import { Type } from './type';

/**
 * 
 * @export
 * @interface RelationshipRefsData
 */
export interface RelationshipRefsData {
    /**
     * 
     * @type {Type}
     * @memberof RelationshipRefsData
     */
    'type'?: Type;
    /**
     * The ID that uniquely identifies the resource.
     * @type {string}
     * @memberof RelationshipRefsData
     */
    'id'?: string;
    /**
     * 
     * @type {MetaRefs}
     * @memberof RelationshipRefsData
     */
    'meta'?: MetaRefs;
}



