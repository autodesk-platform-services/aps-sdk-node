import { VersionIncludedAttributesExtension } from './version-included-attributes-extension';
/**
 *
 * @export
 * @interface VersionIncludedAttributes
 */
export interface VersionIncludedAttributes {
    /**
     *
     * @type {string}
     * @memberof VersionIncludedAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionIncludedAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionIncludedAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionIncludedAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionIncludedAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionIncludedAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionIncludedAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {boolean}
     * @memberof VersionIncludedAttributes
     */
    'hidden'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof VersionIncludedAttributes
     */
    'reserved'?: boolean;
    /**
     *
     * @type {VersionIncludedAttributesExtension}
     * @memberof VersionIncludedAttributes
     */
    'extension'?: VersionIncludedAttributesExtension;
}
