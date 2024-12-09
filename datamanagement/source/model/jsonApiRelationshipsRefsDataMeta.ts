/* tslint:disable */
/* eslint-disable */

import { JsonApiRelationshipsRefsDataMetaExtension } from './jsonApiRelationshipsRefsDataMetaExtension';
import { MetarefsDirection } from './metarefsDirection';
import { ReftypesXref } from './reftypesXref';

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



