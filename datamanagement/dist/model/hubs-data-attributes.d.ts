import { HubsDataAttributesExtension } from './hubs-data-attributes-extension';
/**
 *
 * @export
 * @interface HubsDataAttributes
 */
export interface HubsDataAttributes {
    /**
     *
     * @type {string}
     * @memberof HubsDataAttributes
     */
    'name'?: string;
    /**
     *
     * @type {HubsDataAttributesExtension}
     * @memberof HubsDataAttributes
     */
    'extension'?: HubsDataAttributesExtension;
    /**
     *
     * @type {string}
     * @memberof HubsDataAttributes
     */
    'region'?: string;
}
