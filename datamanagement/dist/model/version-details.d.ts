import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
import { VersionDetailsData } from './version-details-data';
/**
 * Successful retrieval of a specific version.
 * @export
 * @interface VersionDetails
 */
export interface VersionDetails {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof VersionDetails
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof VersionDetails
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {VersionDetailsData}
     * @memberof VersionDetails
     */
    'data'?: VersionDetailsData;
}
