import { VersionIncludedAttributesExtension } from './version-included-attributes-extension';
/**
 *
 * @export
 * @interface CommandDataAttributes
 */
export interface CommandDataAttributes {
    /**
     *
     * @type {string}
     * @memberof CommandDataAttributes
     */
    'status'?: string;
    /**
     *
     * @type {VersionIncludedAttributesExtension}
     * @memberof CommandDataAttributes
     */
    'extension'?: VersionIncludedAttributesExtension;
}
