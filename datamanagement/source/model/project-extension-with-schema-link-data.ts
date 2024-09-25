/* tslint:disable */
/* eslint-disable */

import { ProjectTypeBim360Acc } from './project-type-bim360-acc';

/**
 * The object that contains the additional properties, which makes this resource extensible.
 * @export
 * @interface ProjectExtensionWithSchemaLinkData
 */
export interface ProjectExtensionWithSchemaLinkData {
    [key: string]: object | any;

    /**
     * 
     * @type {ProjectTypeBim360Acc}
     * @memberof ProjectExtensionWithSchemaLinkData
     */
    'projectType'?: ProjectTypeBim360Acc;
}



