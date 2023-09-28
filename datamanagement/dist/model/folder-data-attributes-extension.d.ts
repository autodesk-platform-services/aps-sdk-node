import { FolderDataAttributesExtensionData } from './folder-data-attributes-extension-data';
import { HubsLinksSelf } from './hubs-links-self';
/**
 *
 * @export
 * @interface FolderDataAttributesExtension
 */
export interface FolderDataAttributesExtension {
    /**
     *
     * @type {string}
     * @memberof FolderDataAttributesExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderDataAttributesExtension
     */
    'version'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof FolderDataAttributesExtension
     */
    'schema'?: HubsLinksSelf;
    /**
     *
     * @type {FolderDataAttributesExtensionData}
     * @memberof FolderDataAttributesExtension
     */
    'data'?: FolderDataAttributesExtensionData;
}
