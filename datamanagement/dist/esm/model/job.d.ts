import { DownloadData } from './download-data';
import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
/**
 * Successful retrieval of the details for a specific job.
 * @export
 * @interface Job
 */
export interface Job {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Job
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof Job
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {DownloadData}
     * @memberof Job
     */
    'data'?: DownloadData;
}
