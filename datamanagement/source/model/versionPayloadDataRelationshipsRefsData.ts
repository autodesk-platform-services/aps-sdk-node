
import { Type } from './type';
import { VersionPayloadDataRelationshipsRefsDataMeta } from './versionPayloadDataRelationshipsRefsDataMeta';

/**
 * 
 * @export
 * @interface VersionPayloadDataRelationshipsRefsData
 */
export interface VersionPayloadDataRelationshipsRefsData {
    /**
     * 
     * @type {Type}
     * @memberof VersionPayloadDataRelationshipsRefsData
     */
    'type': Type;
    /**
     * The URN (Version ID) of the referenced version.
     * @type {string}
     * @memberof VersionPayloadDataRelationshipsRefsData
     */
    'id': string;
    /**
     * 
     * @type {VersionPayloadDataRelationshipsRefsDataMeta}
     * @memberof VersionPayloadDataRelationshipsRefsData
     */
    'meta': VersionPayloadDataRelationshipsRefsDataMeta;
}



