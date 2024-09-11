
import { CheckPermissionPayloadRelationshipsResourcesData } from './checkPermissionPayloadRelationshipsResourcesData';

/**
 * Contains the list of resources that permission must be checked for.
 * @export
 * @interface CheckPermissionPayloadRelationshipsResources
 */
export interface CheckPermissionPayloadRelationshipsResources {
    /**
     * An array of objects, where each object  represents a resource. 
     * @type {Array<CheckPermissionPayloadRelationshipsResourcesData>}
     * @memberof CheckPermissionPayloadRelationshipsResources
     */
    'data'?: Array<CheckPermissionPayloadRelationshipsResourcesData>;
}

