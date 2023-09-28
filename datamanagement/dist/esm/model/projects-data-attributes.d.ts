import { ProjectsDataAttributesExtension } from './projects-data-attributes-extension';
/**
 *
 * @export
 * @interface ProjectsDataAttributes
 */
export interface ProjectsDataAttributes {
    /**
     *
     * @type {string}
     * @memberof ProjectsDataAttributes
     */
    'name'?: string;
    /**
     *
     * @type {Array<object>}
     * @memberof ProjectsDataAttributes
     */
    'scopes'?: Array<object>;
    /**
     *
     * @type {ProjectsDataAttributesExtension}
     * @memberof ProjectsDataAttributes
     */
    'extension'?: ProjectsDataAttributesExtension;
}
