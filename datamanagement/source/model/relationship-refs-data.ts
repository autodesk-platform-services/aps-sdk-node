/* tslint:disable */
/* eslint-disable */

import { MetaRefs } from './meta-refs';
import { TypeEntity } from './type-entity';

/**
 * 
 * @export
 * @interface RelationshipRefsData
 */
export interface RelationshipRefsData {
    /**
     * 
     * @type {TypeEntity}
     * @memberof RelationshipRefsData
     */
    'type'?: TypeEntity;
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



