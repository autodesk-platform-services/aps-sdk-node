import { StorageRequestDataAttributes } from './storage-request-data-attributes';
import { StorageRequestDataRelationships } from './storage-request-data-relationships';
/**
 *
 * @export
 * @interface StorageRequestData
 */
export interface StorageRequestData {
    /**
     *
     * @type {string}
     * @memberof StorageRequestData
     */
    'type': string;
    /**
     *
     * @type {StorageRequestDataAttributes}
     * @memberof StorageRequestData
     */
    'attributes': StorageRequestDataAttributes;
    /**
     *
     * @type {StorageRequestDataRelationships}
     * @memberof StorageRequestData
     */
    'relationships': StorageRequestDataRelationships;
}
