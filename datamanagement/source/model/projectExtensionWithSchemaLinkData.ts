
import { ProjectTypeBim360Acc } from './projectTypeBim360Acc';

/**
 * The object that contains the additional properties, which makes this resource extensible.
 * @export
 * @interface ProjectExtensionWithSchemaLinkData
 */
export interface ProjectExtensionWithSchemaLinkData {
    [key: string]: ProjectTypeBim360Acc | object;

    /**
     * 
     * @type {ProjectTypeBim360Acc}
     * @memberof ProjectExtensionWithSchemaLinkData
     */
    'projectType'?: ProjectTypeBim360Acc;
}



