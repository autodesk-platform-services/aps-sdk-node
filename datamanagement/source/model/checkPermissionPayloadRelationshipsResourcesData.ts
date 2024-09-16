
import { TypeEntity } from './typeEntity';

/**
 * 
 * @export
 * @interface CheckPermissionPayloadRelationshipsResourcesData
 */
export interface CheckPermissionPayloadRelationshipsResourcesData {
    /**
     * 
     * @type {TypeEntity}
     * @memberof CheckPermissionPayloadRelationshipsResourcesData
     */
    'type'?: TypeEntity;
    /**
     * The URN of the resource to check.
     * @type {string}
     * @memberof CheckPermissionPayloadRelationshipsResourcesData
     */
    'id'?: string;
}



