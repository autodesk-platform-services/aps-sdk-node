import { StorageData } from './storage-data';
import { StorageJsonapi } from './storage-jsonapi';
import { StorageLinks } from './storage-links';
/**
 * Successful creation of a storage location.
 * @export
 * @interface Storage
 */
export interface Storage {
    /**
     *
     * @type {StorageJsonapi}
     * @memberof Storage
     */
    'jsonapi'?: StorageJsonapi;
    /**
     *
     * @type {StorageLinks}
     * @memberof Storage
     */
    'links'?: StorageLinks;
    /**
     *
     * @type {StorageData}
     * @memberof Storage
     */
    'data'?: StorageData;
}
