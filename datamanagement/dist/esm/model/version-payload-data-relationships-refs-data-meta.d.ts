import { Direction } from './direction';
import { RefType } from './ref-type';
import { VersionPayloadDataRelationshipsRefsDataMetaExtension } from './version-payload-data-relationships-refs-data-meta-extension';
/**
 *
 * @export
 * @interface VersionPayloadDataRelationshipsRefsDataMeta
 */
export interface VersionPayloadDataRelationshipsRefsDataMeta {
    /**
     *
     * @type {RefType}
     * @memberof VersionPayloadDataRelationshipsRefsDataMeta
     */
    'refType': RefType;
    /**
     *
     * @type {Direction}
     * @memberof VersionPayloadDataRelationshipsRefsDataMeta
     */
    'direction': Direction;
    /**
     *
     * @type {VersionPayloadDataRelationshipsRefsDataMetaExtension}
     * @memberof VersionPayloadDataRelationshipsRefsDataMeta
     */
    'extension': VersionPayloadDataRelationshipsRefsDataMetaExtension;
}
