import { FolderContentsIncludedAttributesExtensionData } from './folder-contents-included-attributes-extension-data';
import { HubsLinksSelf } from './hubs-links-self';
/**
 *
 * @export
 * @interface FolderContentsIncludedAttributesExtension
 */
export interface FolderContentsIncludedAttributesExtension {
    /**
     *
     * @type {string}
     * @memberof FolderContentsIncludedAttributesExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsIncludedAttributesExtension
     */
    'version'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof FolderContentsIncludedAttributesExtension
     */
    'schema'?: HubsLinksSelf;
    /**
     *
     * @type {FolderContentsIncludedAttributesExtensionData}
     * @memberof FolderContentsIncludedAttributesExtension
     */
    'data'?: FolderContentsIncludedAttributesExtensionData;
}
