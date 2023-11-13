import { DownloadData } from './download-data';
import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
/**
 * Successful creation of a job.
 * @export
 * @interface DownloadDetails
 */
export interface DownloadDetails {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof DownloadDetails
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof DownloadDetails
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {DownloadData}
     * @memberof DownloadDetails
     */
    'data'?: DownloadData;
}
