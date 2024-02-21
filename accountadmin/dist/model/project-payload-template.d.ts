import { ProjectPayloadTemplateOptions } from './project-payload-template-options';
/**
 * Information about a project in the current user’s account that is configured as a template from which to copy products and settings when creating a new project: If you include this object in a POST accounts/:accountId/projects request, the cloned project’s products and settings will match those of the template project. If you omit this object from a POST accounts/:accountId/projects request, all of the current ACC account’s products are added to the cloned project and activated.
 * @export
 * @interface ProjectPayloadTemplate
 */
export interface ProjectPayloadTemplate {
    /**
     * The ID of a project template in the current ACC account from which to clone the new project and copy products and settings.
     * @type {string}
     * @memberof ProjectPayloadTemplate
     */
    'projectId': string;
    /**
     *
     * @type {ProjectPayloadTemplateOptions}
     * @memberof ProjectPayloadTemplate
     */
    'options'?: ProjectPayloadTemplateOptions;
}
