/* tslint:disable */
/* eslint-disable */

import { JsonApiRelationshipsRefsDataMetaExtension } from './json-api-relationships-refs-data-meta-extension';
import { MetarefsDirection } from './metarefs-direction';
import { ReftypesXref } from './reftypes-xref';

/**
 * The meta-information describing the custom relationship.
 * @export
 * @interface JsonApiRelationshipsRefsDataMeta
 */
export interface JsonApiRelationshipsRefsDataMeta {
    /**
     * 
     * @type {ReftypesXref}
     * @memberof JsonApiRelationshipsRefsDataMeta
     */
    'refType': ReftypesXref;
    /**
     * 
     * @type {MetarefsDirection}
     * @memberof JsonApiRelationshipsRefsDataMeta
     */
    'direction': MetarefsDirection;
    /**
     * 
     * @type {JsonApiRelationshipsRefsDataMetaExtension}
     * @memberof JsonApiRelationshipsRefsDataMeta
     */
    'extension': JsonApiRelationshipsRefsDataMetaExtension;
}



