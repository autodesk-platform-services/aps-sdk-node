/* tslint:disable */
/* eslint-disable */

import { JsonApiRelationshipsRefsData } from './jsonApiRelationshipsRefsData';

/**
 * Information on other resources that share a custom relationship with this resource. 
 * @export
 * @interface JsonApiRelationshipsRefs
 */
export interface JsonApiRelationshipsRefs {
    /**
     * An array of objects, where each object represents custom relationship. 
     * @type {Array<JsonApiRelationshipsRefsData>}
     * @memberof JsonApiRelationshipsRefs
     */
    'data': Array<JsonApiRelationshipsRefsData>;
}

