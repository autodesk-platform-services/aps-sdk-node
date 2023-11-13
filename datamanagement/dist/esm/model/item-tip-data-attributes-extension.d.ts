import { HubsLinksSelf } from './hubs-links-self';
import { ItemTipDataAttributesExtensionData } from './item-tip-data-attributes-extension-data';
/**
 *
 * @export
 * @interface ItemTipDataAttributesExtension
 */
export interface ItemTipDataAttributesExtension {
    /**
     *
     * @type {string}
     * @memberof ItemTipDataAttributesExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemTipDataAttributesExtension
     */
    'version'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof ItemTipDataAttributesExtension
     */
    'schema'?: HubsLinksSelf;
    /**
     *
     * @type {ItemTipDataAttributesExtensionData}
     * @memberof ItemTipDataAttributesExtension
     */
    'data'?: ItemTipDataAttributesExtensionData;
}
