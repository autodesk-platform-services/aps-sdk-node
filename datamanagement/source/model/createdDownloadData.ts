
import { CreatedDownloadDataAttributes } from './createdDownloadDataAttributes';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { TypeJob } from './typeJob';

/**
 * 
 * @export
 * @interface CreatedDownloadData
 */
export interface CreatedDownloadData {
    /**
     * 
     * @type {TypeJob}
     * @memberof CreatedDownloadData
     */
    'type'?: TypeJob;
    /**
     * A unique ID assigned to identify the job that creates the download. This ID doubles up as the unique ID to identify the download.
     * @type {string}
     * @memberof CreatedDownloadData
     */
    'id'?: string;
    /**
     * 
     * @type {CreatedDownloadDataAttributes}
     * @memberof CreatedDownloadData
     */
    'attributes'?: CreatedDownloadDataAttributes;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof CreatedDownloadData
     */
    'links'?: JsonApiLinksSelf;
}



