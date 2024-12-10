/* tslint:disable */
/* eslint-disable */

import { MetaRefs } from './metaRefs';
import { TypeEntity } from './typeEntity';

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



