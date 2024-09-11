
import { JsonApiRelationshipsRefsDataMeta } from './jsonApiRelationshipsRefsDataMeta';
import { Type } from './type';

/**
 * 
 * @export
 * @interface JsonApiRelationshipsRefsData
 */
export interface JsonApiRelationshipsRefsData {
    /**
     * 
     * @type {Type}
     * @memberof JsonApiRelationshipsRefsData
     */
    'type': Type;
    /**
     * A URN indicating the storage location of the version. 
     * @type {string}
     * @memberof JsonApiRelationshipsRefsData
     */
    'id': string;
    /**
     * 
     * @type {JsonApiRelationshipsRefsDataMeta}
     * @memberof JsonApiRelationshipsRefsData
     */
    'meta': JsonApiRelationshipsRefsDataMeta;
}



