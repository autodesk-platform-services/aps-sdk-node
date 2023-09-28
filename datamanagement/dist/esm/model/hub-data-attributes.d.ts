import { HubDataAttributesExtension } from './hub-data-attributes-extension';
/**
 *
 * @export
 * @interface HubDataAttributes
 */
export interface HubDataAttributes {
    /**
     *
     * @type {string}
     * @memberof HubDataAttributes
     */
    'name'?: string;
    /**
     *
     * @type {HubDataAttributesExtension}
     * @memberof HubDataAttributes
     */
    'extension'?: HubDataAttributesExtension;
    /**
     *
     * @type {string}
     * @memberof HubDataAttributes
     */
    'region'?: string;
}
