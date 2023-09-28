import { HubsLinksSelf } from './hubs-links-self';
import { TopFoldersDataAttributesExtensionData } from './top-folders-data-attributes-extension-data';
/**
 *
 * @export
 * @interface TopFoldersDataAttributesExtension
 */
export interface TopFoldersDataAttributesExtension {
    /**
     *
     * @type {string}
     * @memberof TopFoldersDataAttributesExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof TopFoldersDataAttributesExtension
     */
    'version'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof TopFoldersDataAttributesExtension
     */
    'schema'?: HubsLinksSelf;
    /**
     *
     * @type {TopFoldersDataAttributesExtensionData}
     * @memberof TopFoldersDataAttributesExtension
     */
    'data'?: TopFoldersDataAttributesExtensionData;
}
