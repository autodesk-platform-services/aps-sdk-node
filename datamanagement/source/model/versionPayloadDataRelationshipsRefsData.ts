
import { TypeVersion } from './typeVersion';
import { VersionPayloadDataRelationshipsRefsDataMeta } from './versionPayloadDataRelationshipsRefsDataMeta';

/**
 * 
 * @export
 * @interface VersionPayloadDataRelationshipsRefsData
 */
export interface VersionPayloadDataRelationshipsRefsData {
    /**
     * 
     * @type {TypeVersion}
     * @memberof VersionPayloadDataRelationshipsRefsData
     */
    'type': TypeVersion;
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



