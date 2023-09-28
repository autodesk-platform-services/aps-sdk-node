import { HubsDataAttributesExtension } from './hubs-data-attributes-extension';
/**
 *
 * @export
 * @interface SearchIncludedAttributes
 */
export interface SearchIncludedAttributes {
    /**
     *
     * @type {string}
     * @memberof SearchIncludedAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchIncludedAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchIncludedAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchIncludedAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchIncludedAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchIncludedAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchIncludedAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {boolean}
     * @memberof SearchIncludedAttributes
     */
    'hidden'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SearchIncludedAttributes
     */
    'reserved'?: boolean;
    /**
     *
     * @type {string}
     * @memberof SearchIncludedAttributes
     */
    'reservedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchIncludedAttributes
     */
    'reservedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchIncludedAttributes
     */
    'reservedUserName'?: string;
    /**
     *
     * @type {HubsDataAttributesExtension}
     * @memberof SearchIncludedAttributes
     */
    'extension'?: HubsDataAttributesExtension;
}
