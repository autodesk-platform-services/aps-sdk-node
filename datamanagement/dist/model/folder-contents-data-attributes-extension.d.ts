import { FolderContentsDataAttributesExtensionData } from './folder-contents-data-attributes-extension-data';
import { HubsLinksSelf } from './hubs-links-self';
/**
 *
 * @export
 * @interface FolderContentsDataAttributesExtension
 */
export interface FolderContentsDataAttributesExtension {
    /**
     *
     * @type {string}
     * @memberof FolderContentsDataAttributesExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsDataAttributesExtension
     */
    'version'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof FolderContentsDataAttributesExtension
     */
    'schema'?: HubsLinksSelf;
    /**
     *
     * @type {FolderContentsDataAttributesExtensionData}
     * @memberof FolderContentsDataAttributesExtension
     */
    'data'?: FolderContentsDataAttributesExtensionData;
}
