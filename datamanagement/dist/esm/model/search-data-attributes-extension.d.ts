import { HubsLinksSelf } from './hubs-links-self';
import { SearchDataAttributesExtensionData } from './search-data-attributes-extension-data';
/**
 *
 * @export
 * @interface SearchDataAttributesExtension
 */
export interface SearchDataAttributesExtension {
    /**
     *
     * @type {string}
     * @memberof SearchDataAttributesExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchDataAttributesExtension
     */
    'version'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof SearchDataAttributesExtension
     */
    'schema'?: HubsLinksSelf;
    /**
     *
     * @type {SearchDataAttributesExtensionData}
     * @memberof SearchDataAttributesExtension
     */
    'data'?: SearchDataAttributesExtensionData;
}
