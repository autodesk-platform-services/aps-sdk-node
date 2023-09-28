import { CreatedDownloadData } from './created-download-data';
import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';
/**
 * Successful creation of a job.
 * @export
 * @interface Download
 */
export interface Download {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Download
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {HubsLinks}
     * @memberof Download
     */
    'links'?: HubsLinks;
    /**
     *
     * @type {CreatedDownloadData}
     * @memberof Download
     */
    'data'?: CreatedDownloadData;
}
