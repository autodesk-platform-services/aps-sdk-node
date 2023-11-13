import { HubsLinksSelf } from './hubs-links-self';
import { RefsDataAttributesExtensionData } from './refs-data-attributes-extension-data';
/**
 *
 * @export
 * @interface RefsDataAttributesExtension
 */
export interface RefsDataAttributesExtension {
    /**
     *
     * @type {string}
     * @memberof RefsDataAttributesExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof RefsDataAttributesExtension
     */
    'version'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof RefsDataAttributesExtension
     */
    'schema'?: HubsLinksSelf;
    /**
     *
     * @type {RefsDataAttributesExtensionData}
     * @memberof RefsDataAttributesExtension
     */
    'data'?: RefsDataAttributesExtensionData;
}
