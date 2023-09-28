import { DownloadFormatsData } from './download-formats-data';
import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
/**
 * Successful retrieval of the available download formats for a specific version.
 * @export
 * @interface DownloadFormats
 */
export interface DownloadFormats {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof DownloadFormats
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof DownloadFormats
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {DownloadFormatsData}
     * @memberof DownloadFormats
     */
    'data'?: DownloadFormatsData;
}
