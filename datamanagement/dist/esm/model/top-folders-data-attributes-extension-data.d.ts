import { TopFoldersDataAttributesExtensionDataFolderParents } from './top-folders-data-attributes-extension-data-folder-parents';
/**
 *
 * @export
 * @interface TopFoldersDataAttributesExtensionData
 */
export interface TopFoldersDataAttributesExtensionData {
    /**
     *
     * @type {Array<object>}
     * @memberof TopFoldersDataAttributesExtensionData
     */
    'allowedTypes'?: Array<object>;
    /**
     *
     * @type {Array<object>}
     * @memberof TopFoldersDataAttributesExtensionData
     */
    'visibleTypes'?: Array<object>;
    /**
     *
     * @type {boolean}
     * @memberof TopFoldersDataAttributesExtensionData
     */
    'isRoot'?: boolean;
    /**
     *
     * @type {string}
     * @memberof TopFoldersDataAttributesExtensionData
     */
    'folderType'?: string;
    /**
     *
     * @type {Set<TopFoldersDataAttributesExtensionDataFolderParents>}
     * @memberof TopFoldersDataAttributesExtensionData
     */
    'folderParents'?: Set<TopFoldersDataAttributesExtensionDataFolderParents>;
    /**
     *
     * @type {Array<object>}
     * @memberof TopFoldersDataAttributesExtensionData
     */
    'namingStandardIds'?: Array<object>;
}
