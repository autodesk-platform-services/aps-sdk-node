import { RelationshipRefsRequestDataMetaExtension } from './relationship-refs-request-data-meta-extension';
/**
 *
 * @export
 * @interface CreateFolderDataAttributes
 */
export interface CreateFolderDataAttributes {
    /**
     *
     * @type {string}
     * @memberof CreateFolderDataAttributes
     */
    'name': string;
    /**
     *
     * @type {RelationshipRefsRequestDataMetaExtension}
     * @memberof CreateFolderDataAttributes
     */
    'extension': RelationshipRefsRequestDataMetaExtension;
}
