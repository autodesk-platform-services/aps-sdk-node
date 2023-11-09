import { Type } from './type';
import { VersionNumber } from './version-number';
/**
 *
 * @export
 * @interface RelationshipRefsPayloadDataMetaExtension
 */
export interface RelationshipRefsPayloadDataMetaExtension {
    /**
     *
     * @type {Type}
     * @memberof RelationshipRefsPayloadDataMetaExtension
     */
    'type': Type;
    /**
     *
     * @type {VersionNumber}
     * @memberof RelationshipRefsPayloadDataMetaExtension
     */
    'version': VersionNumber;
    /**
     *
     * @type {object}
     * @memberof RelationshipRefsPayloadDataMetaExtension
     */
    'data'?: object;
}
