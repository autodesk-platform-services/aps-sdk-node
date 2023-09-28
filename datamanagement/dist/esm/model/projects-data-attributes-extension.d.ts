import { HubsLinksSelf } from './hubs-links-self';
import { ProjectsDataAttributesExtensionData } from './projects-data-attributes-extension-data';
/**
 *
 * @export
 * @interface ProjectsDataAttributesExtension
 */
export interface ProjectsDataAttributesExtension {
    /**
     *
     * @type {string}
     * @memberof ProjectsDataAttributesExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof ProjectsDataAttributesExtension
     */
    'version'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof ProjectsDataAttributesExtension
     */
    'schema'?: HubsLinksSelf;
    /**
     *
     * @type {ProjectsDataAttributesExtensionData}
     * @memberof ProjectsDataAttributesExtension
     */
    'data'?: ProjectsDataAttributesExtensionData;
}
