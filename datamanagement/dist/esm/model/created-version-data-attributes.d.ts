import { CreatedVersionDataAttributesExtension } from './created-version-data-attributes-extension';
/**
 *
 * @export
 * @interface CreatedVersionDataAttributes
 */
export interface CreatedVersionDataAttributes {
    /**
     *
     * @type {string}
     * @memberof CreatedVersionDataAttributes
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof CreatedVersionDataAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof CreatedVersionDataAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof CreatedVersionDataAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof CreatedVersionDataAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof CreatedVersionDataAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof CreatedVersionDataAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof CreatedVersionDataAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {number}
     * @memberof CreatedVersionDataAttributes
     */
    'versionNumber'?: number;
    /**
     *
     * @type {CreatedVersionDataAttributesExtension}
     * @memberof CreatedVersionDataAttributes
     */
    'extension'?: CreatedVersionDataAttributesExtension;
}
