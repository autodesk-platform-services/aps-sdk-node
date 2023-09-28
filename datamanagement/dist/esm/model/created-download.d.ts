import { CreatedDownloadData } from './created-download-data';
import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
/**
 * Successful creation of a job.
 * @export
 * @interface CreatedDownload
 */
export interface CreatedDownload {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof CreatedDownload
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof CreatedDownload
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {CreatedDownloadData}
     * @memberof CreatedDownload
     */
    'data'?: CreatedDownloadData;
}
