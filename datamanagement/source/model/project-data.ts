/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksSelfAndWebView } from './json-api-links-self-and-web-view';
import { ProjectDataAttributes } from './project-data-attributes';
import { ProjectDataRelationships } from './project-data-relationships';
import { TypeProject } from './type-project';

/**
 * A container of data describing a project.
 * @export
 * @interface ProjectData
 */
export interface ProjectData {
    /**
     * 
     * @type {TypeProject}
     * @memberof ProjectData
     */
    'type': TypeProject;
    /**
     * The ID that uniquely identifies the project.
     * @type {string}
     * @memberof ProjectData
     */
    'id': string;
    /**
     * 
     * @type {ProjectDataAttributes}
     * @memberof ProjectData
     */
    'attributes': ProjectDataAttributes;
    /**
     * 
     * @type {ProjectDataRelationships}
     * @memberof ProjectData
     */
    'relationships'?: ProjectDataRelationships;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof ProjectData
     */
    'links'?: JsonApiLinksSelfAndWebView;
}



