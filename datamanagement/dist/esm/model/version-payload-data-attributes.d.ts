import { RelationshipRefsPayloadDataMetaExtension } from './relationship-refs-payload-data-meta-extension';
/**
 *
 * @export
 * @interface VersionPayloadDataAttributes
 */
export interface VersionPayloadDataAttributes {
    /**
     *
     * @type {string}
     * @memberof VersionPayloadDataAttributes
     */
    'name': string;
    /**
     *
     * @type {RelationshipRefsPayloadDataMetaExtension}
     * @memberof VersionPayloadDataAttributes
     */
    'extension': RelationshipRefsPayloadDataMetaExtension;
    /**
     *
     * @type {string}
     * @memberof VersionPayloadDataAttributes
     */
    'displayName'?: string;
}
