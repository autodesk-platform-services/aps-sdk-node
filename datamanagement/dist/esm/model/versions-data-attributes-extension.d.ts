import { HubsLinksSelf } from './hubs-links-self';
import { VersionsDataAttributesExtensionData } from './versions-data-attributes-extension-data';
/**
 *
 * @export
 * @interface VersionsDataAttributesExtension
 */
export interface VersionsDataAttributesExtension {
    /**
     *
     * @type {string}
     * @memberof VersionsDataAttributesExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionsDataAttributesExtension
     */
    'version'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof VersionsDataAttributesExtension
     */
    'schema'?: HubsLinksSelf;
    /**
     *
     * @type {VersionsDataAttributesExtensionData}
     * @memberof VersionsDataAttributesExtension
     */
    'data'?: VersionsDataAttributesExtensionData;
}
