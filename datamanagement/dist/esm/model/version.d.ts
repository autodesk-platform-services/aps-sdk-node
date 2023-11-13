import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
import { VersionData } from './version-data';
import { VersionIncluded } from './version-included';
import { VersionMeta } from './version-meta';
/**
 * Successful creation of a version.
 * @export
 * @interface Version
 */
export interface Version {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Version
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof Version
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {VersionData}
     * @memberof Version
     */
    'data'?: VersionData;
    /**
     *
     * @type {Set<VersionIncluded>}
     * @memberof Version
     */
    'included'?: Set<VersionIncluded>;
    /**
     *
     * @type {VersionMeta}
     * @memberof Version
     */
    'meta'?: VersionMeta;
}
