import { RelationshipRefsPayloadDataMetaExtension } from './relationship-refs-payload-data-meta-extension';
/**
 *
 * @export
 * @interface FolderPayloadDataAttributes
 */
export interface FolderPayloadDataAttributes {
    /**
     *
     * @type {string}
     * @memberof FolderPayloadDataAttributes
     */
    'name': string;
    /**
     *
     * @type {RelationshipRefsPayloadDataMetaExtension}
     * @memberof FolderPayloadDataAttributes
     */
    'extension': RelationshipRefsPayloadDataMetaExtension;
}
