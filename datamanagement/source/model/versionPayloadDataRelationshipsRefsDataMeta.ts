
import { MetarefsDirection } from './metarefsDirection';
import { ReftypesXref } from './reftypesXref';
import { VersionPayloadDataRelationshipsRefsDataMetaExtension } from './versionPayloadDataRelationshipsRefsDataMetaExtension';

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



