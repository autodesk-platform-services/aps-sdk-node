import { VersionDataAttributesExtensionData } from './version-data-attributes-extension-data';
/**
 *
 * @export
 * @interface VersionDataAttributesExtension
 */
export interface VersionDataAttributesExtension {
    /**
     *
     * @type {string}
     * @memberof VersionDataAttributesExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDataAttributesExtension
     */
    'version'?: string;
    /**
     *
     * @type {VersionDataAttributesExtensionData}
     * @memberof VersionDataAttributesExtension
     */
    'data'?: VersionDataAttributesExtensionData;
}
