import { HubsLinksSelf } from './hubs-links-self';
import { ItemDataAttributesExtensionData } from './item-data-attributes-extension-data';
/**
 *
 * @export
 * @interface ItemDataAttributesExtension
 */
export interface ItemDataAttributesExtension {
    /**
     *
     * @type {string}
     * @memberof ItemDataAttributesExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemDataAttributesExtension
     */
    'version'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof ItemDataAttributesExtension
     */
    'schema'?: HubsLinksSelf;
    /**
     *
     * @type {ItemDataAttributesExtensionData}
     * @memberof ItemDataAttributesExtension
     */
    'data'?: ItemDataAttributesExtensionData;
}
