
import { JsonApiLinksSelfAndWebView } from './jsonApiLinksSelfAndWebView';
import { ProjectDataAttributes } from './projectDataAttributes';
import { ProjectDataRelationships } from './projectDataRelationships';
import { Type } from './type';

/**
 * A container of data describing a project.
 * @export
 * @interface ProjectData
 */
export interface ProjectData {
    /**
     * 
     * @type {Type}
     * @memberof ProjectData
     */
    'type': Type;
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



