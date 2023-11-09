import { HubsLinksSelf } from './hubs-links-self';
import { VersionDetailsDataAttributesExtensionData } from './version-details-data-attributes-extension-data';
/**
 *
 * @export
 * @interface VersionDetailsDataAttributesExtension
 */
export interface VersionDetailsDataAttributesExtension {
    /**
     *
     * @type {string}
     * @memberof VersionDetailsDataAttributesExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDetailsDataAttributesExtension
     */
    'version'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof VersionDetailsDataAttributesExtension
     */
    'schema'?: HubsLinksSelf;
    /**
     *
     * @type {VersionDetailsDataAttributesExtensionData}
     * @memberof VersionDetailsDataAttributesExtension
     */
    'data'?: VersionDetailsDataAttributesExtensionData;
}
