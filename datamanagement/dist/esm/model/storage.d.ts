import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
import { StorageData } from './storage-data';
/**
 * Successful creation of a storage location.
 * @export
 * @interface Storage
 */
export interface Storage {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Storage
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof Storage
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {StorageData}
     * @memberof Storage
     */
    'data'?: StorageData;
}
