/* tslint:disable */
/* eslint-disable */

import { MetarefsDirection } from './metarefs-direction';
import { ReftypesXref } from './reftypes-xref';
import { VersionPayloadDataRelationshipsRefsDataMetaExtension } from './version-payload-data-relationships-refs-data-meta-extension';

/**
 * Contains meta information about the reference.
 * @export
 * @interface VersionPayloadDataRelationshipsRefsDataMeta
 */
export interface VersionPayloadDataRelationshipsRefsDataMeta {
    /**
     * 
     * @type {ReftypesXref}
     * @memberof VersionPayloadDataRelationshipsRefsDataMeta
     */
    'refType': ReftypesXref;
    /**
     * 
     * @type {MetarefsDirection}
     * @memberof VersionPayloadDataRelationshipsRefsDataMeta
     */
    'direction': MetarefsDirection;
    /**
     * 
     * @type {VersionPayloadDataRelationshipsRefsDataMetaExtension}
     * @memberof VersionPayloadDataRelationshipsRefsDataMeta
     */
    'extension': VersionPayloadDataRelationshipsRefsDataMetaExtension;
}



