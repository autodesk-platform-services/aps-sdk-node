import { HubsLinksSelf } from './hubs-links-self';
import { ItemIncludedAttributesExtensionData } from './item-included-attributes-extension-data';
/**
 *
 * @export
 * @interface ItemIncludedAttributesExtension
 */
export interface ItemIncludedAttributesExtension {
    /**
     *
     * @type {string}
     * @memberof ItemIncludedAttributesExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemIncludedAttributesExtension
     */
    'version'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof ItemIncludedAttributesExtension
     */
    'schema'?: HubsLinksSelf;
    /**
     *
     * @type {ItemIncludedAttributesExtensionData}
     * @memberof ItemIncludedAttributesExtension
     */
    'data'?: ItemIncludedAttributesExtensionData;
}
