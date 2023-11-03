import { StorageDataRelationships } from './storage-data-relationships';
import { Type } from './type';
/**
 *
 * @export
 * @interface StorageData
 */
export interface StorageData {
    /**
     *
     * @type {Type}
     * @memberof StorageData
     */
    'type'?: Type;
    /**
     *
     * @type {string}
     * @memberof StorageData
     */
    'id'?: string;
    /**
     *
     * @type {StorageDataRelationships}
     * @memberof StorageData
     */
    'relationships'?: StorageDataRelationships;
}
