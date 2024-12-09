/* tslint:disable */
/* eslint-disable */

import { JsonApiRelationshipsRefsDataMeta } from './json-api-relationships-refs-data-meta';
import { TypeVersion } from './type-version';

/**
 * 
 * @export
 * @interface JsonApiRelationshipsRefsData
 */
export interface JsonApiRelationshipsRefsData {
    /**
     * 
     * @type {TypeVersion}
     * @memberof JsonApiRelationshipsRefsData
     */
    'type': TypeVersion;
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



